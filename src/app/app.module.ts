import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MsalModule, MsalGuard } from "@azure/msal-angular";
import { MsalConfig } from "./storage/config";

import { AppComponent } from "./app.component";
import { StartComponent } from "./start/start.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { CategoryComponent } from "./category/category.component";
import { DetailsComponent } from "./details/details.component";
import { SettingsComponent } from "./settings/settings.component";
import { IsSignedInGuard } from "./guards/is-signed-in.guard";
import { StorageService } from "./storage/storage.service";
import { IsSignedOutGuard } from "./guards/is-signed-out.guard";
import { ModalComponent } from "./modal/modal.component";
import { ModalRequiredDirective } from "./modal/modal-required.directive";
import { RoutingStateService } from "./routing-state/routing-state.service";

@NgModule({
	declarations: [
		AppComponent,
		StartComponent,
		SignInComponent,
		CategoryComponent,
		DetailsComponent,
		SettingsComponent,
		ModalComponent,
		ModalRequiredDirective
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot([
			{
				path: "",
				component: StartComponent,
				canActivate: [IsSignedInGuard]
			},
			{
				path: "sign-in",
				component: SignInComponent,
				canActivate: [IsSignedOutGuard]
			},
			{
				path: "settings",
				component: SettingsComponent,
				canActivate: [IsSignedInGuard]
			},
			{
				path: "recept/:category",
				canActivate: [IsSignedInGuard],
				children: [
					{
						path: "",
						component: CategoryComponent
					},
					{
						path: ":name",
						component: DetailsComponent
					}
				]
			}
		]),
		MsalModule.forRoot({
			clientID: MsalConfig.appID
		})
	],
	providers: [
		StorageService,
		RoutingStateService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }