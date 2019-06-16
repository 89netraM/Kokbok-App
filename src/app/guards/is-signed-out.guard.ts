import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "../storage/storage.service";

@Injectable({
	providedIn: "root"
})
export class IsSignedOutGuard implements CanActivate {
	constructor(private storage: StorageService, private router: Router) { }

	public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.storage.isLogedin()) {
			this.router.navigate(["/"]);
			return false;
		}
		else {
			return true;
		}
	}
}