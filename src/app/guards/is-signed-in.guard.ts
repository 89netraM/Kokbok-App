import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "../storage/storage.service";

@Injectable({
	providedIn: "root"
})
export class IsSignedInGuard implements CanActivate {
	constructor(private storage: StorageService, private router: Router) { }

	public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.storage.isLogedin()) {
			return true;
		}
		else {
			this.router.navigate(["/sign-in"]);
			return false;
		}
	}
}