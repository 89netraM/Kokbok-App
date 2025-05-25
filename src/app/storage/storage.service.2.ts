import { Injectable } from "@angular/core";
import { Response } from "./response";
import { Category } from "./category";
import { Item } from "./item";

import { HttpClient } from "@angular/common/http";
import { MsalService } from "@azure/msal-angular";
import { MsalConfig } from "./config";
import { Client } from "@microsoft/microsoft-graph-client";

@Injectable({
	providedIn: "root"
})
export class StorageService {
	private static readonly base: string = "/me/drive";
	private static get approot(): string { return StorageService.base + "/special/approot"; }
	private static get items(): string { return StorageService.base + "/items"; }

	private isAuthenticated: boolean = false;
	public get IsAuthenticated(): boolean {
		return this.isAuthenticated;
	}

	private msalClient: Client;

	public constructor(private http: HttpClient, private msalService: MsalService) {
		this.msalClient = Client.init({
			authProvider: async (done) => {
				try {
					const token: string = await this.getAccessToken();

					if (token) {
						done(null, token);
					}
					else {
						done("Could not get an access token", null);
					}
				}
				catch (reason) {
					done(reason, null);
				}
			}
		});
	}

	public async getAccessToken(): Promise<string> {
		const result: string = await this.msalService.acquireTokenSilent(MsalConfig.scopes);

		console.log("getAccessToken: ", result);
		return result;
	}

	public async signIn(): Promise<void> {
		const result: boolean = await this.msalService.loginPopup(MsalConfig.scopes);

		if (result) {
			console.log("signIn: ", result);
			this.isAuthenticated = true;
		}
	}

	public signOut(): void {
		this.msalService.logout();
		this.isAuthenticated = false;
	}

	private async makeGet<T>(URL: string): Promise<T> {
		const response: T = await this.msalClient.api(URL).get();

		return response;
	}

	public async getCategories(): Promise<Array<Category>> {
		const resopnse: Response = await this.makeGet<Response>(StorageService.approot + "/children");

		const arr: Array<Category> = new Array<Category>();

		for (const data of resopnse.value) {
			const cat: Category = await Category.ExtractFromData(data);
			if (cat != null) {
				arr.push(cat);
			}
		}

		return arr;
	}
	public async getItems(category: string): Promise<Array<Item>> {
		const resopnse: Response = await this.makeGet<Response>(StorageService.approot + ":/" + category + ":/children");
		const arr: Array<Item> = new Array<Item>();

		for (const data of resopnse.value) {
			let item: Item = await Item.ExtractFromData(data);
			if (item != null) {
				if (item.type === "url" || item.type === "txt") {
					item = await this.downloadLink(item) ?? item;
				}

				arr.push(item);
			}
		}

		return arr;
	}
	public async getItem(category: string, name: string): Promise<Item> {
		const items: Array<Item> = await this.getItems(category);

		for (const item of items) {
			if (item.name === name) {
				return item;
			}
		}
	}

	public async itemRename(id: string, newName: string): Promise<boolean> {
		try {
			await this.msalClient.api(StorageService.items + "/" + id).patch({"name": newName});
		}
		catch {
			return false;
		}

		return true;
	}
	public async itemDelete(id: string): Promise<boolean> {
		try {
			await this.msalClient.api(StorageService.items + "/" + id).delete();
		}
		catch {
			return false;
		}

		return true;
	}

	private async addItem(name: string, content: string): Promise<void> {
		const response = await this.msalClient.api(StorageService.approot + ":/" + name + ":/content").put(content);

		console.log("response:", response);
	}
	public async addItemURL(name: string, URL: string): Promise<void> {
		return await this.addItem(name + ".url", "[InternetShortcut]\nURL=" + URL);
	}

	private async downloadLink(item: Item): Promise<Item> {
		let linkText: string = await this.http.get<string>(
			item.link,
			{
				headers: {
					"Content-type": "text/plain"
				},
				responseType: "text" as "json"
			}
		).toPromise<string>();

		linkText = linkText.replace(/(.|\n|\r)*?URL=(.*)(.|\n|\r)*/ig, "$2").trim();

		if (!linkText.match(/^https?:\/\//)) {
			return null;
		}

		return new Item(item.id, item.created.toISOString(), item.name + ".url", linkText);
	}
}