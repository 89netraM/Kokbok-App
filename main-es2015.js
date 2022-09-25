(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _guards_is_signed_in_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/is-signed-in.guard */ "./src/app/guards/is-signed-in.guard.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _guards_is_signed_out_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/is-signed-out.guard */ "./src/app/guards/is-signed-out.guard.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");











const routes = [
    {
        path: "",
        component: _start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"],
        canActivate: [_guards_is_signed_in_guard__WEBPACK_IMPORTED_MODULE_3__["IsSignedInGuard"]]
    },
    {
        path: "sign-in",
        component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
        canActivate: [_guards_is_signed_out_guard__WEBPACK_IMPORTED_MODULE_5__["IsSignedOutGuard"]]
    },
    {
        path: "settings",
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
        canActivate: [_guards_is_signed_in_guard__WEBPACK_IMPORTED_MODULE_3__["IsSignedInGuard"]]
    },
    {
        path: "recept/:category",
        canActivate: [_guards_is_signed_in_guard__WEBPACK_IMPORTED_MODULE_3__["IsSignedInGuard"]],
        children: [
            {
                path: "",
                component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"]
            },
            {
                path: ":name",
                component: _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"]
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _routing_state_routing_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing-state/routing-state.service */ "./src/app/routing-state/routing-state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(state, location) {
        this.state = state;
        this.location = location;
        this.name = "Kokbok";
    }
    get canGoBack() {
        return this.state.hasHistory() ? "visible" : "hidden";
    }
    back() {
        this.location.back();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_routing_state_routing_state_service__WEBPACK_IMPORTED_MODULE_1__["RoutingStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["bok-root"]], decls: 7, vars: 3, consts: [[1, "back", 3, "click"], ["routerLink", "/"], [1, "settings"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.canGoBack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  background-color: #ae5342;\n  display: flex;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 100;\n}\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  background: none;\n  background-position: center;\n  background-repeat: no-repeat;\n  border: none;\n  flex-grow: 0;\n  flex-basis: 48px;\n}\nnav[_ngcontent-%COMP%]   button.back[_ngcontent-%COMP%] {\n  background-image: url('back.png');\n}\nnav[_ngcontent-%COMP%]   button.settings[_ngcontent-%COMP%] {\n  background-image: url('settings.png');\n}\nnav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px 20px;\n  flex-grow: 1;\n  align-self: center;\n  font-family: \"Comic Neue Angular\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 30px;\n  overflow: hidden;\n}\nmain[_ngcontent-%COMP%] {\n  margin-top: 48px;\n  min-height: calc(100vh - 48px);\n  position: relative;\n}\nmain[_ngcontent-%COMP%]    >   * {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0tva2Jvay1BcHAvS29rYm9rLUFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL0tva2Jvay1BcHAvS29rYm9rLUFwcC9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9Lb2tib2stQXBwL0tva2Jvay1BcHAvc3JjL3N0eWxlcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0MsV0FBQTtFQUNBLFlBTFM7RUFPVCx5QkNWSztFRFlMLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUVQRDtBRlNDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGdCQTNCUTtBRWtCVjtBRldFO0VBQ0MsaUNBQUE7QUVUSDtBRldFO0VBQ0MscUNBQUE7QUVUSDtBRmFDO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBRUEsc0VHOUNVO0VIK0NWLGVBNUNZO0VBNkNaLGdCQUFBO0FFYkY7QUZpQkE7RUFDQyxnQkFuRFM7RUFvRFQsOEJBQUE7RUFDQSxrQkFBQTtBRWREO0FGZ0JDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0FFZkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnRzLnNjc3NcIjtcblxuJG5hdlNpemU6IDQ4cHg7XG4kbmF2Rm9udFNpemU6IDMwcHg7XG5cbm5hdiB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6ICRuYXZTaXplO1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XG5cblx0ZGlzcGxheTogZmxleDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDBweDtcblx0bGVmdDogMHB4O1xuXHRyaWdodDogMHB4O1xuXHRib3R0b206IDBweDtcblx0ei1pbmRleDogMTAwO1xuXG5cdGJ1dHRvbiB7XG5cdFx0bWFyZ2luOiAwcHg7XG5cdFx0cGFkZGluZzogMHB4O1xuXG5cdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRib3JkZXI6IG5vbmU7XG5cblx0XHRmbGV4LWdyb3c6IDA7XG5cdFx0ZmxleC1iYXNpczogJG5hdlNpemU7XG5cblx0XHQmLmJhY2sge1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaWNvbnMvYmFjay5wbmdcIik7XG5cdFx0fVxuXHRcdCYuc2V0dGluZ3Mge1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaWNvbnMvc2V0dGluZ3MucG5nXCIpO1xuXHRcdH1cblx0fVxuXG5cdGgxIHtcblx0XHRtYXJnaW46IDBweDtcblx0XHRwYWRkaW5nOiAwcHggMjBweDtcblxuXHRcdGZsZXgtZ3JvdzogMTtcblx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cblx0XHRmb250LWZhbWlseTogJGNvbWljRm9udDtcblx0XHRmb250LXNpemU6ICRuYXZGb250U2l6ZTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHR9XG59XG5cbm1haW4ge1xuXHRtYXJnaW4tdG9wOiAkbmF2U2l6ZTtcblx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7JG5hdlNpemV9KTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdD4gOjpuZy1kZWVwICoge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblxuXHRcdG1hcmdpbjogMHB4O1xuXHR9XG59IiwiJHJlZDogI2FlNTM0MjtcbiR3aGl0ZTogI2YzZjNmMztcbiRsaWdodDogI2I5YzU5ZTtcbiRkYXJrOiAjNWI2NzUzO1xuJGJsYWNrOiAjMGMwYzBjO1xuXG4kb25lRHJpdmVCbHVlOiAjMDA3OGQ3O1xuJG9uZURyaXZlV2hpdGU6ICNmZmZmZmY7IiwibmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlNTM0MjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogMTAwO1xufVxubmF2IGJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyOiBub25lO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtYmFzaXM6IDQ4cHg7XG59XG5uYXYgYnV0dG9uLmJhY2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pY29ucy9iYWNrLnBuZ1wiKTtcbn1cbm5hdiBidXR0b24uc2V0dGluZ3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pY29ucy9zZXR0aW5ncy5wbmdcIik7XG59XG5uYXYgaDEge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJDb21pYyBOZXVlIEFuZ3VsYXJcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxubWFpbiB7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiA+IDo6bmctZGVlcCAqIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG59IiwiJG9uZURyaXZlRm9udDogXCJTZWdvZSBVSVwiLCBTZWdvZSwgVGFob21hLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbWljRm9udDogXCJDb21pYyBOZXVlIEFuZ3VsYXJcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4kZm9udDogVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "bok-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"]
            }]
    }], function () { return [{ type: _routing_state_routing_state_service__WEBPACK_IMPORTED_MODULE_1__["RoutingStateService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storage/storage.service */ "./src/app/storage/storage.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _modal_modal_required_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal-required.directive */ "./src/app/modal/modal-required.directive.ts");
/* harmony import */ var _routing_state_routing_state_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routing-state/routing-state.service */ "./src/app/routing-state/routing-state.service.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _storage_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
        _routing_state_routing_state_service__WEBPACK_IMPORTED_MODULE_14__["RoutingStateService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _start_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"],
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"],
        _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
        _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"],
        _modal_modal_required_directive__WEBPACK_IMPORTED_MODULE_13__["ModalRequiredDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _start_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"],
                    _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"],
                    _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
                    _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
                    _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"],
                    _modal_modal_required_directive__WEBPACK_IMPORTED_MODULE_13__["ModalRequiredDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
                ],
                providers: [
                    _storage_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
                    _routing_state_routing_state_service__WEBPACK_IMPORTED_MODULE_14__["RoutingStateService"]
                ],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modal_modal_required_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal-required.directive */ "./src/app/modal/modal-required.directive.ts");









const _c0 = ["editModal"];
const _c1 = ["addModal"];
function CategoryComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CategoryComponent_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryComponent_ng_container_2_ng_template_2_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); $event.preventDefault(); return ctx_r10.edit(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r4.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
} }
function CategoryComponent_ng_container_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryComponent_ng_container_2_ng_template_4_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); $event.stopImmediatePropagation(); return ctx_r14.edit(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
} }
function CategoryComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CategoryComponent_ng_container_2_ng_template_2_Template, 4, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CategoryComponent_ng_container_2_ng_template_4_Template, 4, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r4.type === "url")("ngIfThen", _r6)("ngIfElse", _r8);
} }
function CategoryComponent_input_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CategoryComponent_input_14_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.addingURL = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.addingURL);
} }
class CategoryComponent {
    //#endregion
    constructor(storage, route) {
        this.storage = storage;
        this.route = route;
        this.isLoading = false;
        this.addingType = 0;
    }
    get loading() {
        return (this.items === undefined || this.isLoading) ? "visible" : "hidden";
    }
    set editingTitle(value) {
        this._editingTitle = value;
        this._editingTitleBox = value;
    }
    get editingTitle() {
        return this._editingTitleBox;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.category = this.route.snapshot.params["category"];
            this.items = yield this.storage.getItems(this.category);
        });
    }
    edit(item) {
        this.editingItem = item;
        this.editingTitle = item.name;
        this.editModal.show();
    }
    editDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Delete this.editingID
            this.editModal.hide(false);
            this.isLoading = true;
            const success = yield this.storage.itemDelete(this.editingItem.id);
            if (success) {
                this.items = this.items.filter(x => x.id !== this.editingItem.id);
            }
            this.isLoading = false;
        });
    }
    editDone(status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (status) {
                this.isLoading = true;
                const success = yield this.storage.itemRename(this.editingItem.id, this.editingTitle + "." + this.editingItem.type);
                if (success) {
                    this.editingItem.name = this.editingTitle;
                }
                this.isLoading = false;
            }
        });
    }
    addNew() {
        this.addingName = "";
        this.addingType = 0;
        this.addingURL = "";
        this.addModal.show();
    }
    addNewDone(status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (status) {
                this.isLoading = true;
                if (this.addingType === 0) {
                    try {
                        const newItem = yield this.storage.addItemDocument(this.category, this.addingName);
                        this.items.push(newItem);
                    }
                    catch (error) {
                        console.error("Could not add URL:", error);
                    }
                }
                else if (this.addingType === 1) {
                    try {
                        const newItem = yield this.storage.addItemURL(this.category, this.addingName, this.addingURL);
                        this.items.push(newItem);
                    }
                    catch (error) {
                        console.error("Could not add URL:", error);
                    }
                }
                this.isLoading = false;
            }
        });
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["bok-category"]], viewQuery: function CategoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addModal = _t.first);
    } }, decls: 20, vars: 11, consts: [[4, "ngFor", "ngForOf"], [1, "item", "new", 3, "click"], ["title", "Nytt recept", "positive", "Skapa", "negative", "Avbryt", 3, "close"], ["addModal", ""], ["type", "text", "placeholder", "Namn", "modalRequired", "", 3, "ngModel", "ngModelChange"], ["name", "type", "type", "radio", "value", "doc", 3, "value", "ngModel", "ngModelChange"], ["name", "type", "type", "radio", "value", "link", 3, "value", "ngModel", "ngModelChange"], ["type", "url", "placeholder", "L\u00E4nk", "modalRequired", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["positive", "Spara", "negative", "Avbryt", 3, "title", "close"], ["editModal", ""], ["type", "text", "placeholder", "Namn", 3, "ngModel", "ngModelChange"], [1, "delete", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["internal", ""], ["external", ""], ["target", "_blank", 1, "item", 3, "href"], [3, "click"], [1, "item", 3, "routerLink"], ["type", "url", "placeholder", "L\u00E4nk", "modalRequired", "", 3, "ngModel", "ngModelChange"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CategoryComponent_ng_container_2_Template, 6, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryComponent_Template_a_click_3_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "bok-modal", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function CategoryComponent_Template_bok_modal_close_4_listener($event) { return ctx.addNewDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CategoryComponent_Template_input_ngModelChange_6_listener($event) { return ctx.addingName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Typ: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CategoryComponent_Template_input_ngModelChange_9_listener($event) { return ctx.addingType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Dokument");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CategoryComponent_Template_input_ngModelChange_12_listener($event) { return ctx.addingType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " L\u00E4nk");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CategoryComponent_input_14_Template, 1, 1, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "bok-modal", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function CategoryComponent_Template_bok_modal_close_15_listener($event) { return ctx.editDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CategoryComponent_Template_input_ngModelChange_17_listener($event) { return ctx._editingTitleBox = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryComponent_Template_button_click_18_listener() { return ctx.editDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ta bort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addingName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0)("ngModel", ctx.addingType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1)("ngModel", ctx.addingType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addingType === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx._editingTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx._editingTitleBox);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _modal_modal_required_directive__WEBPACK_IMPORTED_MODULE_7__["ModalRequiredDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["[_nghost-%COMP%]    > progress[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  margin: 0px;\n  color: #ae5342;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0tva2Jvay1BcHAvS29rYm9rLUFwcC9zcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvS29rYm9rLUFwcC9Lb2tib2stQXBwL3NyYy9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdDO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBRUEsY0NUSTtBQ0tOO0FGT0M7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FFTEYiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxuOmhvc3Qge1xuXHQ+IHByb2dyZXNzIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDVweDtcblx0XG5cdFx0bWFyZ2luOiAwcHg7XG5cdFxuXHRcdGNvbG9yOiAkcmVkO1xuXHR9XG5cdFxuXHQ+IGRpdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdH1cbn0iLCIkcmVkOiAjYWU1MzQyO1xuJHdoaXRlOiAjZjNmM2YzO1xuJGxpZ2h0OiAjYjljNTllO1xuJGRhcms6ICM1YjY3NTM7XG4kYmxhY2s6ICMwYzBjMGM7XG5cbiRvbmVEcml2ZUJsdWU6ICMwMDc4ZDc7XG4kb25lRHJpdmVXaGl0ZTogI2ZmZmZmZjsiLCI6aG9zdCA+IHByb2dyZXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNhZTUzNDI7XG59XG46aG9zdCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "bok-category",
                templateUrl: "./category.component.html",
                styleUrls: ["./category.component.scss"]
            }]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { editModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["editModal"]
        }], addModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["addModal"]
        }] }); })();


/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _modal_modal_required_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal-required.directive */ "./src/app/modal/modal-required.directive.ts");








const _c0 = ["article"];
const _c1 = ["addImage"];
class DetailsComponent {
    //#endregion
    constructor(storage, route) {
        this.storage = storage;
        this.route = route;
        this.converter = new showdown__WEBPACK_IMPORTED_MODULE_2__["Converter"]();
        this._loading = true;
        this.isEditing = false;
    }
    get loading() {
        return this._loading ? "visible" : "hidden";
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.category = this.route.snapshot.params["category"];
            this.name = this.route.snapshot.params["name"];
            this.item = yield this.storage.getItem(this.category, this.name);
            this.markdown = yield this.storage.downloadItemText(this.item);
            this.article.nativeElement.innerHTML = this.converter.makeHtml(this.markdown);
            this._loading = false;
        });
    }
    toggleEditing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isEditing) {
                this._loading = true;
                const markdown = this.converter.makeMarkdown(this.article.nativeElement.innerHTML);
                if (this.markdown !== markdown) {
                    const success = yield this.storage.updateDocument(this.item, markdown);
                }
                this._loading = false;
            }
            else {
                document.execCommand("defaultParagraphSeparator", false, "p");
            }
            this.isEditing = !this.isEditing;
        });
    }
    makeHeader() {
        const selection = getSelection();
        let last;
        let current = selection.anchorNode.parentNode;
        while (current !== this.article.nativeElement) {
            last = current;
            current = current.parentNode;
        }
        switch (last.nodeName) {
            case "P":
            default:
                document.execCommand("formatBlock", false, "h1");
                break;
            case "H1":
                document.execCommand("formatBlock", false, "h2");
                break;
            case "H2":
                document.execCommand("formatBlock", false, "h3");
                break;
            case "H3":
                document.execCommand("formatBlock", false, "p");
                break;
        }
    }
    makeBold() {
        document.execCommand("bold");
    }
    makeItalic() {
        document.execCommand("italic");
    }
    makeList() {
        document.execCommand("insertOrderedList");
    }
    makeBullets() {
        document.execCommand("insertUnorderedList");
    }
    makeImage() {
        const selection = getSelection();
        this.selectionNode = selection.anchorNode;
        this.selectionOffset = selection.anchorOffset;
        this.addImage.show();
    }
    imageFileChange(files) {
        if (files.length > 0) {
            this.selectedFile = files[0];
        }
    }
    addImageDone(status) {
        if (status) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                this.article.nativeElement.focus();
                document.getSelection().setPosition(this.selectionNode, this.selectionOffset);
                document.execCommand("insertImage", false, reader.result);
            }, false);
            reader.readAsDataURL(this.selectedFile);
        }
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["bok-details"]], viewQuery: function DetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.article = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addImage = _t.first);
    } }, decls: 19, vars: 5, consts: [["tool", "", 1, "edit", 3, "click"], [3, "contentEditable"], ["article", ""], [1, "header", 3, "click"], [1, "bold", 3, "click"], [1, "italic", 3, "click"], [1, "list", 3, "click"], [1, "bullets", 3, "click"], [1, "image", 3, "click"], ["title", "L\u00E4gg till bild", "positive", "L\u00E4gg till", "negative", "Avbryt", 3, "close"], ["addImage", ""], ["type", "file", "accept", "image/*", "modalRequired", "", 3, "change"], ["data-choose", "V\u00E4lj bild", "data-change", "Byt bild", 1, "button"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_2_listener() { return ctx.toggleEditing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_6_listener() { return ctx.makeHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_7_listener() { return ctx.makeBold(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_9_listener() { return ctx.makeItalic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_11_listener() { return ctx.makeList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_12_listener() { return ctx.makeBullets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_13_listener() { return ctx.makeImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "bok-modal", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function DetailsComponent_Template_bok_modal_close_14_listener($event) { return ctx.addImageDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DetailsComponent_Template_input_change_17_listener($event) { return ctx.imageFileChange($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("noEdit", ctx.isEditing);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("contentEditable", ctx.isEditing);
    } }, directives: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], _modal_modal_required_directive__WEBPACK_IMPORTED_MODULE_6__["ModalRequiredDirective"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   progress[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  margin: 0px;\n  color: #ae5342;\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: calc(100vh - 53px);\n  padding: 50px 25px;\n  background-color: #f3f3f3;\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (min-width: 700px) {\n  [_nghost-%COMP%]   article[_ngcontent-%COMP%] {\n    width: 80%;\n    min-height: calc(100vh - 153px);\n    margin-top: 100px;\n    padding: 50px 100px;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 50px;\n    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);\n  }\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]     img {\n  max-width: 100%;\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   button.edit[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin: 0px;\n  padding: 0px;\n  cursor: pointer;\n  background: none;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url('edit.png');\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  border: none;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   button.edit.noEdit[_ngcontent-%COMP%] {\n  background-image: url('no-edit.png');\n  -webkit-filter: invert(0);\n          filter: invert(0);\n}\n@media screen and (min-width: 700px) {\n  [_nghost-%COMP%]   article[_ngcontent-%COMP%]   button.edit[_ngcontent-%COMP%] {\n    top: 25px;\n    right: 25px;\n  }\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   div[contenteditable=true][_ngcontent-%COMP%] {\n  outline: 2px #b9c59e solid;\n  margin-bottom: 25px;\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  background-color: #f3f3f3;\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  display: none;\n  justify-content: center;\n}\n@media screen and (min-width: 700px) {\n  [_nghost-%COMP%]   article[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n    width: 80%;\n    left: 10%;\n  }\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  background: none;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 30px;\n  border: none;\n  color: #000000;\n  font-size: 30px;\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button.header[_ngcontent-%COMP%] {\n  background-image: url('header.png');\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button.bold[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button.italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button.list[_ngcontent-%COMP%] {\n  background-image: url('numbered-list.png');\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button.bullets[_ngcontent-%COMP%] {\n  background-image: url('bulleted-list.png');\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button.image[_ngcontent-%COMP%] {\n  background-image: url('picture.png');\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%]   div[contenteditable=true][_ngcontent-%COMP%]    ~ aside[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0tva2Jvay1BcHAvS29rYm9rLUFwcC9zcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvS29rYm9rLUFwcC9Lb2tib2stQXBwL3NyYy9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDREQ7QURHQztFQUNDLFdBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUVBLGNFYkk7QURVTjtBRE1DO0VBQ0MsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNKRjtBRE1FO0VBVkQ7SUFXRSxVQUFBO0lBQ0EsK0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLDJDQUFBO0VDSEQ7QUFDRjtBREtFO0VBQ0MsZUFBQTtBQ0hIO0FETUU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDSkg7QURNRztFQUNDLG9DQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0pKO0FET0c7RUFyQkQ7SUFzQkUsU0FBQTtJQUNBLFdBQUE7RUNKRjtBQUNGO0FET0U7RUFDQywwQkFBQTtFQUNBLG1CQUFBO0FDTEg7QURRRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNOSDtBRFFHO0VBVkQ7SUFXRSxVQUFBO0lBQ0EsU0FBQTtFQ0xGO0FBQ0Y7QURPRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRE9JO0VBQ0MsbUNBQUE7QUNMTDtBRE9JO0VBQ0MsbUJBQUE7QUNMTDtBRE9JO0VBQ0Msa0JBQUE7QUNMTDtBRE9JO0VBQ0MsMENBQUE7QUNMTDtBRE9JO0VBQ0MsMENBQUE7QUNMTDtBRE9JO0VBQ0Msb0NBQUE7QUNMTDtBRFFJO0VBQ0MsaUJBQUE7QUNOTDtBRFVFO0VBQ0MsYUFBQTtBQ1JIIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1wiO1xuXG46aG9zdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cblx0cHJvZ3Jlc3Mge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogNXB4O1xuXG5cdFx0bWFyZ2luOiAwcHg7XG5cblx0XHRjb2xvcjogJHJlZDtcblx0fVxuXG5cdGFydGljbGUge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1M3B4KTtcblx0XHRwYWRkaW5nOiA1MHB4IDI1cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTNweCk7XG5cdFx0XHRtYXJnaW4tdG9wOiAxMDBweDtcblx0XHRcdHBhZGRpbmc6IDUwcHggMTAwcHg7XG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XG5cdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDUwcHggcmdiYSgwLDAsMCwwLjUpO1xuXHRcdH1cblxuXHRcdDo6bmctZGVlcCBpbWcge1xuXHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdH1cblxuXHRcdGJ1dHRvbi5lZGl0IHtcblx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9pY29ucy9lZGl0LnBuZyk7XG5cdFx0XHRmaWx0ZXI6IGludmVydCgxLjApO1xuXHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRyaWdodDogMHB4O1xuXG5cdFx0XHQmLm5vRWRpdCB7XG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9pY29ucy9uby1lZGl0LnBuZyk7XG5cdFx0XHRcdGZpbHRlcjogaW52ZXJ0KDAuMCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0XHRcdHRvcDogMjVweDtcblx0XHRcdFx0cmlnaHQ6IDI1cHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZGl2W2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0ge1xuXHRcdFx0b3V0bGluZTogMnB4ICRsaWdodCBzb2xpZDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XG5cdFx0fVxuXG5cdFx0YXNpZGUge1xuXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0Ym90dG9tOiAwcHg7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdGxlZnQ6IDEwJTtcblx0XHRcdH1cblxuXHRcdFx0YnV0dG9uIHtcblx0XHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogMzBweDtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cblx0XHRcdFx0Ji5oZWFkZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2ljb25zL2hlYWRlci5wbmdcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ji5ib2xkIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCYuaXRhbGljIHtcblx0XHRcdFx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ji5saXN0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9pY29ucy9udW1iZXJlZC1saXN0LnBuZ1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmLmJ1bGxldHMge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2ljb25zL2J1bGxldGVkLWxpc3QucG5nXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCYuaW1hZ2Uge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2ljb25zL3BpY3R1cmUucG5nXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRkaXZbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSB+IGFzaWRlIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0fVxuXHR9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuOmhvc3QgcHJvZ3Jlc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2FlNTM0Mjtcbn1cbjpob3N0IGFydGljbGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUzcHgpO1xuICBwYWRkaW5nOiA1MHB4IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIDpob3N0IGFydGljbGUge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE1M3B4KTtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxufVxuOmhvc3QgYXJ0aWNsZSA6Om5nLWRlZXAgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuOmhvc3QgYXJ0aWNsZSBidXR0b24uZWRpdCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vaWNvbnMvZWRpdC5wbmcpO1xuICBmaWx0ZXI6IGludmVydCgxKTtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xufVxuOmhvc3QgYXJ0aWNsZSBidXR0b24uZWRpdC5ub0VkaXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vaWNvbnMvbm8tZWRpdC5wbmcpO1xuICBmaWx0ZXI6IGludmVydCgwKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIDpob3N0IGFydGljbGUgYnV0dG9uLmVkaXQge1xuICAgIHRvcDogMjVweDtcbiAgICByaWdodDogMjVweDtcbiAgfVxufVxuOmhvc3QgYXJ0aWNsZSBkaXZbY29udGVudGVkaXRhYmxlPXRydWVdIHtcbiAgb3V0bGluZTogMnB4ICNiOWM1OWUgc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG46aG9zdCBhcnRpY2xlIGFzaWRlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIDpob3N0IGFydGljbGUgYXNpZGUge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGVmdDogMTAlO1xuICB9XG59XG46aG9zdCBhcnRpY2xlIGFzaWRlIGJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuOmhvc3QgYXJ0aWNsZSBhc2lkZSBidXR0b24uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vaWNvbnMvaGVhZGVyLnBuZ1wiKTtcbn1cbjpob3N0IGFydGljbGUgYXNpZGUgYnV0dG9uLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuOmhvc3QgYXJ0aWNsZSBhc2lkZSBidXR0b24uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuOmhvc3QgYXJ0aWNsZSBhc2lkZSBidXR0b24ubGlzdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2ljb25zL251bWJlcmVkLWxpc3QucG5nXCIpO1xufVxuOmhvc3QgYXJ0aWNsZSBhc2lkZSBidXR0b24uYnVsbGV0cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2ljb25zL2J1bGxldGVkLWxpc3QucG5nXCIpO1xufVxuOmhvc3QgYXJ0aWNsZSBhc2lkZSBidXR0b24uaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9pY29ucy9waWN0dXJlLnBuZ1wiKTtcbn1cbjpob3N0IGFydGljbGUgYXNpZGUgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbjpob3N0IGFydGljbGUgZGl2W2NvbnRlbnRlZGl0YWJsZT10cnVlXSB+IGFzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbn0iLCIkcmVkOiAjYWU1MzQyO1xuJHdoaXRlOiAjZjNmM2YzO1xuJGxpZ2h0OiAjYjljNTllO1xuJGRhcms6ICM1YjY3NTM7XG4kYmxhY2s6ICMwYzBjMGM7XG5cbiRvbmVEcml2ZUJsdWU6ICMwMDc4ZDc7XG4kb25lRHJpdmVXaGl0ZTogI2ZmZmZmZjsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "bok-details",
                templateUrl: "./details.component.html",
                styleUrls: ["./details.component.scss"]
            }]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["article"]
        }], addImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["addImage"]
        }] }); })();


/***/ }),

/***/ "./src/app/guards/is-signed-in.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/is-signed-in.guard.ts ***!
  \**********************************************/
/*! exports provided: IsSignedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSignedInGuard", function() { return IsSignedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class IsSignedInGuard {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.storage.isLogedin()) {
            return true;
        }
        else {
            this.router.navigate(["/sign-in"]);
            return false;
        }
    }
}
IsSignedInGuard.ɵfac = function IsSignedInGuard_Factory(t) { return new (t || IsSignedInGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IsSignedInGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsSignedInGuard, factory: IsSignedInGuard.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsSignedInGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/is-signed-out.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/guards/is-signed-out.guard.ts ***!
  \***********************************************/
/*! exports provided: IsSignedOutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSignedOutGuard", function() { return IsSignedOutGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class IsSignedOutGuard {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.storage.isLogedin()) {
            this.router.navigate(["/"]);
            return false;
        }
        else {
            return true;
        }
    }
}
IsSignedOutGuard.ɵfac = function IsSignedOutGuard_Factory(t) { return new (t || IsSignedOutGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IsSignedOutGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsSignedOutGuard, factory: IsSignedOutGuard.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsSignedOutGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modal/modal-required.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/modal/modal-required.directive.ts ***!
  \***************************************************/
/*! exports provided: ModalRequiredDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRequiredDirective", function() { return ModalRequiredDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ModalRequiredDirective {
    constructor(host) {
        this.host = host;
        this._isValid = false;
        this.host.nativeElement.required = true;
    }
    onInput() {
        this._isValid = this.host.nativeElement.validity.valid;
    }
    isValid() {
        return this._isValid;
    }
}
ModalRequiredDirective.ɵfac = function ModalRequiredDirective_Factory(t) { return new (t || ModalRequiredDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ModalRequiredDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ModalRequiredDirective, selectors: [["", "modalRequired", ""]], hostBindings: function ModalRequiredDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ModalRequiredDirective_input_HostBindingHandler() { return ctx.onInput(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalRequiredDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: "[modalRequired]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modal_required_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-required.directive */ "./src/app/modal/modal-required.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ModalComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function ModalComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.hide(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.negative);
} }
function ModalComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hide(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.isAllValid());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.positive);
} }
const _c0 = ["*"];
class ModalComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.styleDisplay = "none";
    }
    get visible() {
        return this.styleDisplay !== "none";
    }
    set visible(value) {
        this.styleDisplay = value ? "" : "none";
    }
    isAllValid() {
        return this.required.toArray().every(x => x.isValid());
    }
    show() {
        this.visible = true;
    }
    hide(status) {
        this.visible = false;
        this.close.emit(status);
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["bok-modal"]], contentQueries: function ModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _modal_required_directive__WEBPACK_IMPORTED_MODULE_1__["ModalRequiredDirective"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.required = _t);
    } }, hostVars: 2, hostBindings: function ModalComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.styleDisplay);
    } }, inputs: { title: "title", positive: "positive", negative: "negative" }, outputs: { close: "close" }, ngContentSelectors: _c0, decls: 8, vars: 3, consts: [[1, "top"], [4, "ngIf"], [1, "content"], [1, "bottom"], ["class", "cancel", 3, "click", 4, "ngIf"], ["class", "ok", 3, "disabled", "click", 4, "ngIf"], [1, "cancel", 3, "click"], [1, "ok", 3, "disabled", "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_h1_2_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalComponent_button_6_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModalComponent_button_7_Template, 2, 2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.negative);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.positive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 200;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 250px;\n  padding: 16px;\n  background-color: #f3f3f3;\n  border-radius: 16px;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .top[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%] {\n  padding: 24px 0px;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]    >   input {\n  display: block;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .bottom[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0tva2Jvay1BcHAvS29rYm9rLUFwcC9zcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL0tva2Jvay1BcHAvS29rYm9rLUFwcC9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Msb0NBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0hEO0FES0M7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFFQSx5QkVuQk07RUZvQk4sbUJBQUE7QUNKRjtBRE1FO0VBQ0MsV0FBQTtBQ0pIO0FET0U7RUFDQyxpQkFBQTtBQ0xIO0FET0c7RUFDQyxjQUFBO0FDTEo7QURTRTtFQUNDLGFBQUE7RUFFQSx5QkFBQTtBQ1JIO0FEVUc7RUFDQyxnQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbjpob3N0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwcHg7XG5cdGxlZnQ6IDBweDtcblx0cmlnaHQ6IDBweDtcblx0Ym90dG9tOiAwcHg7XG5cdHotaW5kZXg6IDIwMDtcblxuXHQ+IGRpdiB7XG5cdFx0bWluLXdpZHRoOiAyNTBweDtcblx0XHRwYWRkaW5nOiAxNnB4O1xuXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cblx0XHQ+IC50b3AgPiBoMSB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHR9XG5cblx0XHQ+IC5jb250ZW50IHtcblx0XHRcdHBhZGRpbmc6IDI0cHggMHB4O1xuXG5cdFx0XHQ+IDo6bmctZGVlcCBpbnB1dCB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdD4gLmJvdHRvbSB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG5cdFx0XHQ+IDpub3QoOmZpcnN0LWNoaWxkKSB7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA4cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAyMDA7XG59XG46aG9zdCA+IGRpdiB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG46aG9zdCA+IGRpdiA+IC50b3AgPiBoMSB7XG4gIG1hcmdpbjogMHB4O1xufVxuOmhvc3QgPiBkaXYgPiAuY29udGVudCB7XG4gIHBhZGRpbmc6IDI0cHggMHB4O1xufVxuOmhvc3QgPiBkaXYgPiAuY29udGVudCA+IDo6bmctZGVlcCBpbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgPiBkaXYgPiAuYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbjpob3N0ID4gZGl2ID4gLmJvdHRvbSA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59IiwiJHJlZDogI2FlNTM0MjtcbiR3aGl0ZTogI2YzZjNmMztcbiRsaWdodDogI2I5YzU5ZTtcbiRkYXJrOiAjNWI2NzUzO1xuJGJsYWNrOiAjMGMwYzBjO1xuXG4kb25lRHJpdmVCbHVlOiAjMDA3OGQ3O1xuJG9uZURyaXZlV2hpdGU6ICNmZmZmZmY7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "bok-modal",
                templateUrl: "./modal.component.html",
                styleUrls: ["./modal.component.scss"]
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], positive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], negative: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], styleDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.display"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_modal_required_directive__WEBPACK_IMPORTED_MODULE_1__["ModalRequiredDirective"]]
        }] }); })();


/***/ }),

/***/ "./src/app/routing-state/routing-state.service.ts":
/*!********************************************************!*\
  !*** ./src/app/routing-state/routing-state.service.ts ***!
  \********************************************************/
/*! exports provided: RoutingStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingStateService", function() { return RoutingStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class RoutingStateService {
    constructor(router) {
        this.router = router;
        this.history = new Array();
        this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (e.urlAfterRedirects === this.history[this.history.length - 2]) {
                    this.history.pop();
                }
                else {
                    this.history.push(e.urlAfterRedirects);
                }
            }
        });
    }
    getPreviousUrl() {
        return this.history[this.history.length - 2] || "/";
    }
    hasHistory() {
        return this.history.length > 1;
    }
}
RoutingStateService.ɵfac = function RoutingStateService_Factory(t) { return new (t || RoutingStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RoutingStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutingStateService, factory: RoutingStateService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["bok-settings"]], decls: 2, vars: 0, template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " settings works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bok-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class SignInComponent {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    signin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.signin();
            this.router.navigate(["/"]);
        });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["bok-sign-in"]], decls: 2, vars: 0, consts: [[3, "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_0_listener() { return ctx.signin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Logga in med OneDrive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["button[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: #ffffff;\n  background-color: #0078d7;\n  font-family: \"Segoe UI\", Segoe, Tahoma, Helvetica, Arial, sans-serif;\n  font-size: 20px;\n  border: 1px #0078d7 solid;\n  border-radius: 0px;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nbutton[_ngcontent-%COMP%]:hover:not(:active) {\n  color: #0078d7;\n  background-color: #ffffff;\n  border: 1px #0078d7 solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0tva2Jvay1BcHAvS29rYm9rLUFwcC9zcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL0tva2Jvay1BcHAvS29rYm9rLUFwcC9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvS29rYm9rLUFwcC9Lb2tib2stQXBwL3NyYy9zdHlsZXMvZm9udHMuc2NzcyIsInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0MsYUFBQTtFQUVBLGNDQ2U7RURBZix5QkNEYztFREVkLG9FRVJjO0VGU2QsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FHTEQ7QUhPQztFQUNDLGNDZmE7RURnQmIseUJDZmM7RURnQmQseUJBQUE7QUdMRiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvZm9udHMuc2Nzc1wiO1xuXG5idXR0b24ge1xuXHRwYWRkaW5nOiAxMHB4O1xuXG5cdGNvbG9yOiAkb25lRHJpdmVXaGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogJG9uZURyaXZlQmx1ZTtcblx0Zm9udC1mYW1pbHk6ICRvbmVEcml2ZUZvbnQ7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Ym9yZGVyOiAxcHggJG9uZURyaXZlQmx1ZSBzb2xpZDtcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXG5cdGN1cnNvcjogcG9pbnRlcjtcblxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG5cdCY6aG92ZXI6bm90KDphY3RpdmUpIHtcblx0XHRjb2xvcjogJG9uZURyaXZlQmx1ZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkb25lRHJpdmVXaGl0ZTtcblx0XHRib3JkZXI6IDFweCAkb25lRHJpdmVCbHVlIHNvbGlkO1xuXHR9XG59IiwiJHJlZDogI2FlNTM0MjtcbiR3aGl0ZTogI2YzZjNmMztcbiRsaWdodDogI2I5YzU5ZTtcbiRkYXJrOiAjNWI2NzUzO1xuJGJsYWNrOiAjMGMwYzBjO1xuXG4kb25lRHJpdmVCbHVlOiAjMDA3OGQ3O1xuJG9uZURyaXZlV2hpdGU6ICNmZmZmZmY7IiwiJG9uZURyaXZlRm9udDogXCJTZWdvZSBVSVwiLCBTZWdvZSwgVGFob21hLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGNvbWljRm9udDogXCJDb21pYyBOZXVlIEFuZ3VsYXJcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4kZm9udDogVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7IiwiYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc4ZDc7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFNlZ29lLCBUYWhvbWEsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiAxcHggIzAwNzhkNyBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5idXR0b246aG92ZXI6bm90KDphY3RpdmUpIHtcbiAgY29sb3I6ICMwMDc4ZDc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4ICMwMDc4ZDcgc29saWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "bok-sign-in",
                templateUrl: "./sign-in.component.html",
                styleUrls: ["./sign-in.component.scss"]
            }]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/storage/storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modal_modal_required_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal-required.directive */ "./src/app/modal/modal-required.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









const _c0 = ["editModal"];
const _c1 = ["addModal"];
function StartComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_button_2_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const category_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); $event.stopImmediatePropagation(); return ctx_r4.edit(category_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/recept/" + category_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r3.name);
} }
class StartComponent {
    constructor(storage) {
        this.storage = storage;
        this.addingType = 0;
        //#endregion
        this.isLoading = false;
    }
    set editingTitle(value) {
        this._editingTitle = value;
        this._editingTitleBox = value;
    }
    get editingTitle() {
        return this._editingTitleBox;
    }
    get loading() {
        return (this.categories === undefined || this.isLoading) ? "visible" : "hidden";
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categories = yield this.storage.getCategories();
        });
    }
    edit(category) {
        this.editingCategory = category;
        this.editingTitle = category.name;
        this.editModal.show();
    }
    editDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Delete this.editingID
            this.editModal.hide(false);
            this.isLoading = true;
            const success = yield this.storage.categoryDelete(this.editingCategory.id);
            if (success) {
                this.categories = this.categories.filter(x => x.id !== this.editingCategory.id);
            }
            this.isLoading = false;
        });
    }
    editDone(status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (status) {
                this.isLoading = true;
                const success = yield this.storage.categoryRename(this.editingCategory.id, this.editingTitle);
                if (success) {
                    this.editingCategory.name = this.editingTitle;
                }
                this.isLoading = false;
            }
        });
    }
    addNew() {
        this.addingName = "";
        this.addModal.show();
    }
    addNewDone(status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (status) {
                this.isLoading = true;
                try {
                    const newCategory = yield this.storage.addCategory(this.addingName);
                    this.categories.push(newCategory);
                    this.categories = this.categories.sort((a, b) => {
                        const aName = a.name.toLowerCase();
                        const bName = b.name.toLowerCase();
                        if (aName < bName) {
                            return -1;
                        }
                        else if (aName > bName) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                }
                catch (error) {
                    console.error("Could not add URL:", error);
                }
                this.isLoading = false;
            }
        });
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"])); };
StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["bok-start"]], viewQuery: function StartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addModal = _t.first);
    } }, decls: 12, vars: 6, consts: [["class", "item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "item", "new", 3, "click"], ["title", "Ny kategori", "positive", "Skapa", "negative", "Avbryt", 3, "close"], ["addModal", ""], ["type", "text", "placeholder", "Namn", "modalRequired", "", 3, "ngModel", "ngModelChange"], ["positive", "Spara", "negative", "Avbryt", 3, "title", "close"], ["editModal", ""], ["type", "text", "placeholder", "Namn", 3, "ngModel", "ngModelChange"], [1, "delete", 3, "click"], [1, "item", 3, "routerLink"], [3, "click"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StartComponent_button_2_Template, 4, 2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_Template_a_click_3_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "bok-modal", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function StartComponent_Template_bok_modal_close_4_listener($event) { return ctx.addNewDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StartComponent_Template_input_ngModelChange_6_listener($event) { return ctx.addingName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "bok-modal", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function StartComponent_Template_bok_modal_close_7_listener($event) { return ctx.editDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StartComponent_Template_input_ngModelChange_9_listener($event) { return ctx._editingTitleBox = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_Template_button_click_10_listener() { return ctx.editDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Ta bort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addingName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx._editingTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx._editingTitleBox);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _modal_modal_required_directive__WEBPACK_IMPORTED_MODULE_6__["ModalRequiredDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], styles: ["progress[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  margin: 0px;\n  color: #ae5342;\n}\n\ndiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0tva2Jvay1BcHAvS29rYm9rLUFwcC9zcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvS29rYm9rLUFwcC9Lb2tib2stQXBwL3NyYy9zdHlsZXMvY29sb3JzLnNjc3MiLCJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBRUEsY0NSSztBQ0tOOztBRk1BO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBRUhEIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbnByb2dyZXNzIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNXB4O1xuXG5cdG1hcmdpbjogMHB4O1xuXG5cdGNvbG9yOiAkcmVkO1xufVxuXG5kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xufSIsIiRyZWQ6ICNhZTUzNDI7XG4kd2hpdGU6ICNmM2YzZjM7XG4kbGlnaHQ6ICNiOWM1OWU7XG4kZGFyazogIzViNjc1MztcbiRibGFjazogIzBjMGMwYztcblxuJG9uZURyaXZlQmx1ZTogIzAwNzhkNztcbiRvbmVEcml2ZVdoaXRlOiAjZmZmZmZmOyIsInByb2dyZXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNhZTUzNDI7XG59XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "bok-start",
                templateUrl: "./start.component.html",
                styleUrls: ["./start.component.scss"]
            }]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }]; }, { editModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["editModal"]
        }], addModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["addModal"]
        }] }); })();


/***/ }),

/***/ "./src/app/storage/category.ts":
/*!*************************************!*\
  !*** ./src/app/storage/category.ts ***!
  \*************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Category {
    constructor(id, created, name) {
        this.id = id;
        this.created = new Date(created);
        this.name = name;
    }
    static ExtractFromData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.hasOwnProperty("folder")) {
                return new Category(data.id, data.createdDateTime, data.name);
            }
            else {
                return null;
            }
        });
    }
}


/***/ }),

/***/ "./src/app/storage/item.ts":
/*!*********************************!*\
  !*** ./src/app/storage/item.ts ***!
  \*********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/app/storage/category.ts");


class Item extends _category__WEBPACK_IMPORTED_MODULE_1__["Category"] {
    constructor(id, created, name, link) {
        super(id, created, name.substring(0, name.lastIndexOf(".")));
        this.type = name.substring(name.lastIndexOf(".") + 1);
        this.link = link || this.name;
    }
    static ExtractFromData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.hasOwnProperty("file") &&
                data.hasOwnProperty("@microsoft.graph.downloadUrl")) {
                return new Item(data.id, data.createdDateTime, data.name, data["@microsoft.graph.downloadUrl"]);
            }
            else {
                return null;
            }
        });
    }
}


/***/ }),

/***/ "./src/app/storage/storage.service.ts":
/*!********************************************!*\
  !*** ./src/app/storage/storage.service.ts ***!
  \********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/app/storage/category.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item */ "./src/app/storage/item.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class StorageService {
    constructor(http) {
        this.http = http;
        this.msalAgent = new Msal.UserAgentApplication(StorageService.clientID, null, this.tokenReceivedCallback, {
            storeAuthStateInCookie: true,
            cacheLocation: "localStorage",
            redirectUri: "https://kokbok.app/sign-in"
        });
        if (this.isLogedin()) {
            this.acquireToken();
        }
    }
    static get Scopes() { return StorageService.scopes.map(x => "https://graph.microsoft.com/" + x); }
    static get Approot() { return StorageService.base + "/special/approot"; }
    static get Items() { return StorageService.base + "/items"; }
    tokenReceivedCallback(errorDesc, token, error, tokenType) {
        console.error("tokenReceivedCallback", errorDesc, token, error, tokenType);
    }
    acquireToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.token == null) {
                const fetchToken = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        return yield this.msalAgent.acquireTokenSilent(StorageService.Scopes);
                    }
                    catch (error) {
                        try {
                            console.log("try", error);
                            return yield this.msalAgent.acquireTokenPopup(StorageService.Scopes);
                        }
                        catch (error) {
                            console.log("failed", error);
                            throw new Error("Can't signin");
                        }
                    }
                });
                this.token = fetchToken();
            }
            return yield this.token;
        });
    }
    getOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return {
                headers: {
                    "Authorization": "Bearer " + (yield this.acquireToken())
                }
            };
        });
    }
    isLogedin() {
        return this.msalAgent.getUser() != null;
    }
    signin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.msalAgent.loginPopup(StorageService.Scopes);
                yield this.acquireToken();
            }
            catch (error) {
                console.log("Signin error", error);
            }
        });
    }
    signout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            window.localStorage.clear();
        });
    }
    makeGet(URL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.http.get(URL, yield this.getOptions()).toPromise();
            return response;
        });
    }
    getCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const resopnse = yield this.makeGet(StorageService.Approot + "/children");
            const arr = new Array();
            for (const data of resopnse.value) {
                const cat = yield _category__WEBPACK_IMPORTED_MODULE_2__["Category"].ExtractFromData(data);
                if (cat != null) {
                    arr.push(cat);
                }
            }
            return arr;
        });
    }
    getItems(category) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const resopnse = yield this.makeGet(StorageService.Approot + ":/" + category + ":/children");
            const arr = new Array();
            for (const data of resopnse.value) {
                const item = yield this.createItem(data);
                if (item != null) {
                    arr.push(item);
                }
            }
            return arr;
        });
    }
    getItem(category, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const items = yield this.getItems(category);
            for (const item of items) {
                if (item.name === name) {
                    return item;
                }
            }
        });
    }
    createItem(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let item = yield _item__WEBPACK_IMPORTED_MODULE_3__["Item"].ExtractFromData(data);
            if (item != null) {
                if (item.type === "url") {
                    item = yield this.downloadLink(item);
                }
            }
            return item;
        });
    }
    itemRename(id, newName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.http.patch(StorageService.Items + "/" + id, {
                    "name": newName
                }, yield this.getOptions()).toPromise();
            }
            catch (_a) {
                return false;
            }
            return true;
        });
    }
    itemDelete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.http.delete(StorageService.Items + "/" + id, yield this.getOptions()).toPromise();
            }
            catch (_a) {
                return false;
            }
            return true;
        });
    }
    categoryRename(id, newName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.http.patch(StorageService.Items + "/" + id, {
                    "name": newName
                }, yield this.getOptions()).toPromise();
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
    categoryDelete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.http.delete(StorageService.Items + "/" + id, yield this.getOptions()).toPromise();
            }
            catch (_a) {
                return false;
            }
            return true;
        });
    }
    addItem(category, name, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.http.put(StorageService.Approot + ":/" + category + "/" + name + ":/content", content, yield this.getOptions()).toPromise();
            return yield this.createItem(response);
        });
    }
    addItemURL(category, name, URL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.addItem(category, name + ".url", "[InternetShortcut]\nURL=" + URL);
        });
    }
    addItemDocument(category, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.addItem(category, name + ".md", "# " + name);
        });
    }
    addCategory(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.http.post(StorageService.Approot + "/children", {
                "name": name,
                "folder": {},
                "@microsoft.graph.conflictBehavior": "rename"
            }, yield this.getOptions()).toPromise();
            return _category__WEBPACK_IMPORTED_MODULE_2__["Category"].ExtractFromData(response);
        });
    }
    updateDocument(item, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (item.type === "md") {
                try {
                    yield this.uploadDocument(item.id, content);
                    return true;
                }
                catch (_a) {
                    return false;
                }
            }
            else {
                return false;
            }
        });
    }
    uploadDocument(id, content) {
        const uploadSmallDocument = (id, content) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.put(StorageService.Items + "/" + id + "/content", content, yield this.getOptions()).toPromise();
        });
        const uploadBigDocument = (id, content) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uploadPart = (url, blob, index, total) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.http.put(url, yield blob.text(), {
                    headers: {
                        "Content-Range": `bytes ${index}-${Math.min(index + blob.size, total) - 1}/${total}`
                    }
                }).toPromise();
            });
            const response = yield this.http.post(StorageService.Items + "/" + id + "/createUploadSession", {
                "@microsoft.graph.conflictBehavior": "replace"
            }, yield this.getOptions()).toPromise();
            if (response != null && "uploadUrl" in response) {
                const blob = new Blob([content]);
                const partSize = 327680 * 20;
                for (let i = 0; i < blob.size; i += partSize) {
                    yield uploadPart(response["uploadUrl"], blob.slice(i, i + partSize), i, blob.size);
                }
            }
            else {
                throw new Error("Could not fetch upload URL.");
            }
        });
        if (content.length < 4000000) {
            return uploadSmallDocument(id, content);
        }
        else {
            return uploadBigDocument(id, content);
        }
    }
    downloadItemText(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(item.link, {
                headers: {
                    "Authorization": "Bearer " + (yield this.acquireToken()),
                },
                responseType: "text"
            }).toPromise();
        });
    }
    downloadLink(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let linkText = yield this.downloadItemText(item);
            linkText = linkText.replace(/(.|\n|\r)*?URL=(.*)(.|\n|\r)*/ig, "$2");
            return new _item__WEBPACK_IMPORTED_MODULE_3__["Item"](item.id, item.created.toISOString(), item.name + "." + item.type, linkText);
        });
    }
}
StorageService.clientID = "8d45faf8-ac8b-4dc5-98b4-2f0aa0703deb";
StorageService.authority = "https://login.microsoftonline.com/common";
StorageService.scopes = ["user.read", "files.readwrite"];
StorageService.base = "https://graph.microsoft.com/v1.0/me/drive";
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import "zone.js/dist/zone-error";  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/Kokbok-App/Kokbok-App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map