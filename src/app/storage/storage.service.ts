import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response, ResponseItem } from "./response";
import { Category } from "./category";
import { Item } from "./item";

declare const Msal: any;

@Injectable({
	providedIn: "root"
})
export class StorageService {
	private static readonly clientID: string = "8d45faf8-ac8b-4dc5-98b4-2f0aa0703deb";
	private static readonly authority: string = "https://login.microsoftonline.com/common";
	private static readonly scopes: Array<string> = [ "user.read", "files.readwrite" ];
	private static readonly base: string = "https://graph.microsoft.com/v1.0/me/drive";
	private static get Scopes(): Array<string> { return StorageService.scopes.map(x => "https://graph.microsoft.com/" + x); }
	private static get Approot(): string { return StorageService.base + "/special/approot"; }
	private static get Items(): string { return StorageService.base + "/items"; }

	private readonly msalAgent: any;

	public constructor(private http: HttpClient) {
		this.msalAgent = new Msal.UserAgentApplication(
			StorageService.clientID,
			null,
			this.tokenReceivedCallback,
			{
				storeAuthStateInCookie: true,
				cacheLocation: "localStorage",
				redirectUri: "https://kokbok.app/sign-in"
			}
		);

		if (this.isLogedin()) {
			this.acquireToken();
		}
	}

	private tokenReceivedCallback(errorDesc: any, token: any, error: any, tokenType: any): void {
		console.error("tokenReceivedCallback", errorDesc, token, error, tokenType);
	}

	private async acquireToken(): Promise<string> {
		try {
			return await this.msalAgent.acquireTokenSilent(StorageService.Scopes);
		}
		catch (error) {
			// if (error.indexOf("consent_required") !== -1 ||
			// 	error.indexOf("interaction_required") !== -1 ||
			// 	error.indexOf("login_required") !== -1) {
				try {
					console.log("try");
					return await this.msalAgent.acquireTokenPopup(StorageService.Scopes);
				}
				catch {
					console.log("failed", error);
					throw new Error("Can't signin");
				}
			// }
			// else {
			// 	throw error;
			// }
		}
	}

	private async getOptions(): Promise<{ headers: { Authorization: string } }> {
		return {
			headers: {
				"Authorization": "Bearer " + await this.acquireToken()
			}
		};
	}

	public isLogedin(): boolean {
		return this.msalAgent.getUser() != null;
	}

	public async signin(): Promise<void> {
		try {
			await this.msalAgent.loginPopup(StorageService.Scopes);

			await this.acquireToken();
		}
		catch (error) {
			console.log("Signin error", error);
		}
	}

	public async signout(): Promise<void> {
		window.localStorage.clear();
	}

	private async makeGet<T>(URL: string): Promise<T> {
		const response: T = await this.http.get<T>(URL, await this.getOptions()).toPromise<T>();

		return response;
	}

	public async getCategories(): Promise<Array<Category>> {
		const resopnse: Response = await this.makeGet<Response>(StorageService.Approot + "/children");

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
		const resopnse: Response = await this.makeGet<Response>(StorageService.Approot + ":/" + category + ":/children");
		const arr: Array<Item> = new Array<Item>();

		for (const data of resopnse.value) {
			const item = await this.createItem(data);
			if (item != null) {
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
	private async createItem(data: ResponseItem) {
		let item: Item = await Item.ExtractFromData(data);
		if (item != null) {
			if (item.type === "url") {
				item = await this.downloadLink(item);
			}
		}

		return item;
	}

	public async itemRename(id: string, newName: string): Promise<boolean> {
		try {
			await this.http.patch(
				StorageService.Items + "/" + id,
				{
					"name": newName
				},
				await this.getOptions()
			).toPromise();
		}
		catch {
			return false;
		}

		return true;
	}
	public async itemDelete(id: string): Promise<boolean> {
		try {
			await this.http.delete(
				StorageService.Items + "/" + id,
				await this.getOptions()
			).toPromise();
		}
		catch {
			return false;
		}

		return true;
	}

	public async categoryRename(id: string, newName: string): Promise<boolean> {
		try {
			await this.http.patch(
				StorageService.Items + "/" + id,
				{
					"name": newName
				},
				await this.getOptions()
			).toPromise();

			return true;
		}
		catch {
			return false;
		}
	}
	public async categoryDelete(id: string): Promise<boolean> {
		try {
			await this.http.delete(
				StorageService.Items + "/" + id,
				await this.getOptions()
			).toPromise();
		}
		catch {
			return false;
		}

		return true;
	}

	private async addItem(category: string, name: string, content: string): Promise<Item> {
		const response: ResponseItem = await this.http.put<ResponseItem>(
			StorageService.Approot + ":/" + category + "/" + name + ":/content",
			content,
			await this.getOptions()
		).toPromise<ResponseItem>();

		return await this.createItem(response);
	}
	public async addItemURL(category: string, name: string, URL: string): Promise<Item> {
		return await this.addItem(category, name + ".url", "[InternetShortcut]\nURL=" + URL);
	}
	public async addItemDocument(category: string, name: string): Promise<Item> {
		return await this.addItem(category, name + ".md", "# " + name);
	}

	public async addCategory(name: string): Promise<Category> {
		const response: ResponseItem = await this.http.post<ResponseItem>(
			StorageService.Approot + "/children",
			{
				"name": name,
				"folder": { },
				"@microsoft.graph.conflictBehavior": "rename"
			},
			await this.getOptions()
		).toPromise<ResponseItem>();

		return Category.ExtractFromData(response);
	}

	public async updateDocument(item: Item, content: string): Promise<boolean> {
		if (item.type === "md") {
			try {
				await this.uploadDocument(item.id, content);

				return true;
			}
			catch {
				return false;
			}
		}
		else {
			return false;
		}
	}

	private uploadDocument(id: string, content: string): Promise<void> {
		const uploadSmallDocument = async (id: string, content: string): Promise<void> => {
			await this.http.put(
				StorageService.Items + "/" + id + "/content",
				content,
				await this.getOptions()
			).toPromise();
		};
		const uploadBigDocument = async (id: string, content: string): Promise<void> => {
			const uploadPart = async (url: string, blob: Blob, index: number, total: number): Promise<void> => {
				await this.http.put(
					url,
					await blob.text(),
					{
						headers: {
							"Content-Range": `bytes ${index}-${Math.min(index + blob.size, total) - 1}/${total}`
						}
					}
				).toPromise();
			};

			const response = await this.http.post(
				StorageService.Items + "/" + id + "/createUploadSession",
				{
					"@microsoft.graph.conflictBehavior": "replace"
				},
				await this.getOptions()
			).toPromise();
			if (response != null && "uploadUrl" in response) {
				const blob = new Blob([content]);
				const partSize = 327680 * 20;
				for (let i = 0; i < blob.size; i += partSize) {
					await uploadPart(response["uploadUrl"], blob.slice(i, i + partSize), i, blob.size);
				}
			}
			else {
				throw new Error("Could not fetch upload URL.");
			}
		};

		if (content.length < 4000000) {
			return uploadSmallDocument(id, content);
		}
		else {
			return uploadBigDocument(id, content);
		}
	}

	public async downloadItemText(item: Item): Promise<string> {
		return await this.http.get<string>(
			item.link,
			{
				headers: {
					"Authorization": "Bearer " + await this.acquireToken(),
					// "www-authenticate": "Bearer " + await this.acquireToken()
				},
				responseType: "text" as "json"
			}
		).toPromise<string>();
	}
	private async downloadLink(item: Item): Promise<Item> {
		let linkText: string = await this.downloadItemText(item);

		linkText = linkText.replace(/(.|\n|\r)*?URL=(.*)(.|\n|\r)*/ig, "$2");

		return new Item(item.id, item.created.toISOString(), item.name + "." + item.type, linkText);
	}
}