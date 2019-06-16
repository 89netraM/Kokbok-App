import { Injectable } from "@angular/core";
import { Router, NavigationEnd, RouterEvent } from "@angular/router";

@Injectable({
	providedIn: "root"
})
export class RoutingStateService {
	private history: Array<string> = new Array<string>();

	public constructor(private router: Router) {
		this.router.events.subscribe(
			(e: RouterEvent) => {
				if (e instanceof NavigationEnd) {
					if (e.urlAfterRedirects === this.history[this.history.length - 2]) {
						this.history.pop();
					}
					else {
						this.history.push(e.urlAfterRedirects);
					}
				}
			}
		);
	}

	public getPreviousUrl(): string {
		return this.history[this.history.length - 2] || "/";
	}

	public hasHistory(): boolean {
		return this.history.length > 1;
	}
}