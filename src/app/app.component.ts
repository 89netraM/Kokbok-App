import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { RoutingStateService } from "./routing-state/routing-state.service";

@Component({
	selector: "bok-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	public name: string = "Kokbok";

	public get canGoBack(): string {
		return this.state.hasHistory() ? "visible" : "hidden";
	}

	public constructor(private state: RoutingStateService, private location: Location) { }

	public back(): void {
		this.location.back();
	}
}