import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { IsSignedInGuard } from "./guards/is-signed-in.guard";
import { SignInComponent } from "./sign-in/sign-in.component";
import { IsSignedOutGuard } from "./guards/is-signed-out.guard";
import { SettingsComponent } from "./settings/settings.component";
import { CategoryComponent } from "./category/category.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
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
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
