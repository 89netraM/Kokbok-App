import { Component } from "@angular/core";
import { StorageService } from "../storage/storage.service";
import { Router } from "@angular/router";

@Component({
	selector: "bok-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {
	constructor(private storage: StorageService, private router: Router) { }

	public async signin(): Promise<void> {
		await this.storage.signin();
		this.router.navigate(["/"]);
	}
}