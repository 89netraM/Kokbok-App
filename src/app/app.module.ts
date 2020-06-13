import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { StartComponent } from "./start/start.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { CategoryComponent } from "./category/category.component";
import { DetailsComponent } from "./details/details.component";
import { SettingsComponent } from "./settings/settings.component";
import { StorageService } from "./storage/storage.service";
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
		AppRoutingModule
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