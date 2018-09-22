(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _suite_suite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suite/suite.component */ "./src/app/suite/suite.component.ts");
/* harmony import */ var _micuenta_micuenta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./micuenta/micuenta.component */ "./src/app/micuenta/micuenta.component.ts");
/* harmony import */ var _factura_factura_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factura/factura.component */ "./src/app/factura/factura.component.ts");
/* harmony import */ var _suscripcion_suscripcion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suscripcion/suscripcion.component */ "./src/app/suscripcion/suscripcion.component.ts");
/* harmony import */ var _soporte_soporte_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soporte/soporte.component */ "./src/app/soporte/soporte.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _recuperar_recuperar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recuperar/recuperar.component */ "./src/app/recuperar/recuperar.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { APP_BASE_HREF } from '@angular/common';
var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"] },
    { path: 'recuperar', component: _recuperar_recuperar_component__WEBPACK_IMPORTED_MODULE_9__["RecuperarComponent"] },
    { path: 'recuperar/:accion', component: _recuperar_recuperar_component__WEBPACK_IMPORTED_MODULE_9__["RecuperarComponent"] },
    { path: 'registro', component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'registro/:accion', component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', component: _suite_suite_component__WEBPACK_IMPORTED_MODULE_2__["SuiteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'suite', component: _suite_suite_component__WEBPACK_IMPORTED_MODULE_2__["SuiteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { preload: true } },
    { path: 'micuenta', component: _micuenta_micuenta_component__WEBPACK_IMPORTED_MODULE_3__["MicuentaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'factura', component: _factura_factura_component__WEBPACK_IMPORTED_MODULE_4__["FacturaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'micuenta/:id', component: _micuenta_micuenta_component__WEBPACK_IMPORTED_MODULE_3__["MicuentaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'suscripcion/:accion', component: _suscripcion_suscripcion_component__WEBPACK_IMPORTED_MODULE_5__["SuscripcionComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'soporte', component: _soporte_soporte_component__WEBPACK_IMPORTED_MODULE_6__["SoporteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        $('body').loading({
            overlay: $("#custom-overlay")
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _suite_suite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suite/suite.component */ "./src/app/suite/suite.component.ts");
/* harmony import */ var _micuenta_micuenta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./micuenta/micuenta.component */ "./src/app/micuenta/micuenta.component.ts");
/* harmony import */ var _factura_factura_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factura/factura.component */ "./src/app/factura/factura.component.ts");
/* harmony import */ var _suscripcion_suscripcion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./suscripcion/suscripcion.component */ "./src/app/suscripcion/suscripcion.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _soporte_soporte_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./soporte/soporte.component */ "./src/app/soporte/soporte.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _register_webservices_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/webservices.service */ "./src/app/register/webservices.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _recuperar_recuperar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./recuperar/recuperar.component */ "./src/app/recuperar/recuperar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custom_preloading__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./custom-preloading */ "./src/app/custom-preloading.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {APP_BASE_HREF} from '@angular/common';




















// import { HttpModule } from '@angular/http';





// import { SuscripcionComponent } from './suscripcion/suscripcion.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["routes"], { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"] }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
            ],
            providers: [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__["FlashMessagesService"], _register_webservices_service__WEBPACK_IMPORTED_MODULE_19__["WebservicesService"], _custom_preloading__WEBPACK_IMPORTED_MODULE_24__["CustomPreloading"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _suite_suite_component__WEBPACK_IMPORTED_MODULE_5__["SuiteComponent"],
                _micuenta_micuenta_component__WEBPACK_IMPORTED_MODULE_6__["MicuentaComponent"],
                _factura_factura_component__WEBPACK_IMPORTED_MODULE_7__["FacturaComponent"],
                _suscripcion_suscripcion_component__WEBPACK_IMPORTED_MODULE_8__["SuscripcionComponent"],
                _soporte_soporte_component__WEBPACK_IMPORTED_MODULE_10__["SoporteComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _recuperar_recuperar_component__WEBPACK_IMPORTED_MODULE_22__["RecuperarComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_25__["LogoutComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_26__["ErrorComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/custom-preloading.ts":
/*!**************************************!*\
  !*** ./src/app/custom-preloading.ts ***!
  \**************************************/
/*! exports provided: CustomPreloading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPreloading", function() { return CustomPreloading; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var CustomPreloading = /** @class */ (function () {
    function CustomPreloading() {
    }
    CustomPreloading.prototype.preload = function (route, preload) {
        if (route.data && route.data.preload) {
            return preload();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }
    };
    return CustomPreloading;
}());



/***/ }),

/***/ "./src/app/datatest.service.ts":
/*!*************************************!*\
  !*** ./src/app/datatest.service.ts ***!
  \*************************************/
/*! exports provided: Datatestservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datatestservice", function() { return Datatestservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _moc_datatest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moc-datatest */ "./src/app/moc-datatest.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Datatestservice = /** @class */ (function () {
    function Datatestservice() {
    }
    Datatestservice.prototype.getDatatests = function () {
        // TODO: send the message _after_ fetching the heroes
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_moc_datatest__WEBPACK_IMPORTED_MODULE_2__["DATATEST"]);
    };
    Datatestservice.prototype.getDatatest = function (id) {
        // TODO: send the message _after_ fetching the hero
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_moc_datatest__WEBPACK_IMPORTED_MODULE_2__["DATATEST"].find(function (datatest) { return datatest.id === id; }));
    };
    Datatestservice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], Datatestservice);
    return Datatestservice;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margen-error{\n    margin-top: 200px;\n    margin-left: 250px;\n    margin-right: 250px;\n    /* border: 1px solid; */\n}\n\n.error{\n    width: 100%;\n    height: 320px;\n    /* border: 1px solid; */\n}\n\n.texto-error{\n    float: left;\n    width: calc(100% - 272px);\n    height: 320px;\n    /* border: 1px solid; */\n}\n\n.img-error{\n    float: left;\n    width: 272px;\n    height: 320px;\n    /* border: 1px solid; */\n    background-image: url('404.png');\n}\n\n.titulo1{\n    font-family: 'Roboto';\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  color: #818181;\n}\n\n.titulo1 b{\n    font-weight: 500;\n  color: #202020;\n}\n\n.titulo2{\n    font-family: 'Roboto';\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  color: #4a4a4a;\n}\n\n.titulo3{\n    font-family: 'Roboto';\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  color: #818181;\n}\n\n.texto1{\n    margin-top: 89px;\n    margin-left: 80px;\n    margin-right: 80px;\n    text-align: center;\n}\n\n.texto1 .titulo{\n    font-family: AmericanTypewriter;\n  font-size: 36px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 0.89;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ffffff;\n}\n\n.texto1 .texto{\n    font-family: AmericanTypewriter;\n    font-size: 10px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.6;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n}"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margen-error\">\n    <div class=\"error\">\n      <div class=\"texto-error\">\n          <img src=\"assets/img/color.svg\"  alt=\"\">\n          <br><br><br>\n          <span class=\"titulo1\">\n              <b>404</b> That’s an error.\n          </span>\n          <br><br>\n          <p class=\"titulo2\">\n              The requested URL /job/testa-create-service/buildWithParameters was not found on this server.\n          </p>\n          <br>\n          <span class=\"titulo3\">\n              That’s all we know.\n          </span>\n          \n      </div>\n      <div class=\"img-error\">\n        <div class=\"texto1\">\n          <span class=\"titulo\">404</span><br>\n          <span class=\"texto\">page not found</span>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
        $('body').loading('stop');
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/factura/factura.component.css":
/*!***********************************************!*\
  !*** ./src/app/factura/factura.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background: #f4f4f4;\n}\n.item-superior{\n    float: left;\n    width: 100%;\n    height: 128px;\n    background-color: #eaf0f4;\n    border-bottom: solid 1px #0a4d7c;\n}\n.item-superior .item-name{\n    float: left;\n    padding: 48px 128px;\n    height: 32px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    font-weight: 300;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #0a4d7c;\n\n}\n.item-name .icon-left-open{\n    width: 7.4px;\n  height: 12px;\n  color: #b10053;\n  margin-right: 16px;\n}\n.item-inferior{\n    float: left;\n    width: 100%;\n    /* height: calc(100vh - 246px); */\n    /* display: flex; */\n}\n.item-inferior .item-derecho{\n    width: 471px;\n    float: left;\n    /* height: calc(100vh - 246px); */\n    height: calc(100vh - 246px);\n    min-height: 550px;\n    background: #ffffff;\n}\n.margen{\n    margin-left: 127px;\n    margin-right: 127px;\n    /* height: calc(100vh - 246px); */\n}\n.margen .botones-superiores{\n    height: 78px;\n    width: 100%;\n    border-bottom: solid 1px #eaeaea;\n}\n.margen .boton-menu-activo{\n    margin-top: 14px;\n    width: 72px;\n    height: 32px;\n    border-radius: 16px;\n    background-color: #0a4d7c;\n    float: left;\n    padding: 7px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n}\n.margen .boton-menu{\n    margin-top: 14px;\n    \n    height: 32px;\n    border-radius: 16px;\n    float: left;\n    padding: 7px 23px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4a4a4a;\n}\n.margen .boton-menu:hover{\n    color: #0a4d7c;\n    background: #eaeaea;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n    \n}\n.list-invoice{\n    margin-top: 22px;\n    width: 100%;\n    height: 16px;\n    text-align: center;\n    margin-bottom: 14px;\n}\n.list-invoice_detail{\n    margin-top: 8px;\n    width: 100%;\n    height: 48px;\n    text-align: center;\n  border-radius: 2px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n}\n.list-invoice_detail .title_invoice1{\n    width: 20%;\n    margin-top: 16px;\n    height: 16px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.14;\n    letter-spacing: normal;\n    text-align: center;\n    color: #444444;\n}\n.down-img{\n    padding: 8px;\n    border-radius: 21px;\n    margin-top: -7px;\n}\n.down-img:hover{\n    background: #eaeaea;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n}\n.list-invoice .title_invoice{\n    float: left;\n    width: 20%;\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.14;\n  letter-spacing: normal;\n  /* text-align: center; */\n  color: #233539;\n}\n@media (min-width:1024px){\n    .list-invoice_detail .title_invoice1{\n        float: left;\n    }\n\n    .title_invoice1_t{\n        display: none;\n    }\n}\n@media (max-width:1024px){\n    .item-superior{\n    margin-top: 73px;\n    height: 72px;\n    }\n\n    .item-superior .item-name{\n        float: left;\n        padding: 24px 16px;\n        \n        height: 32px;\n        font-family: 'Roboto', sans-serif;\n        font-size: 24px;\n        font-weight: 300;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 1.33;\n        letter-spacing: normal;\n        text-align: center;\n        color: #0a4d7c;\n    \n    }\n\n    \n\n    .item-inferior .item-izquierdo{\n        /* float: left; */\n        width: 100%\n        /* height: calc(100vh - 246px); */\n        \n    }\n    \n\n    .item-inferior .margen{\n        margin-left: 16px;\n        width: calc(100% - 32px);\n        margin-bottom: 32px;\n        /* height: calc(100vh - 246px); */\n    }\n\n    \n\n    .margen .botones-superiores{\n        display: inline-table;\n        cursor: pointer;\n    }\n\n    .list-invoice{\n        display: none;\n    }\n\n    .list-invoice .title_invoice{\n        display: none;\n    }\n\n    .list-invoice_detail{\n        height: 232px;\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n    \n    }\n\n    .list-invoice_detail .title_invoice1{\n        margin-left: 16px;\n        margin-top: 0px;\n        text-align: left;\n        width: 100%;\n        height: 16px;\n        font-family: Roboto;\n        font-size: 14px;\n        font-weight: normal;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: normal;\n        letter-spacing: normal;\n        /* text-align: center; */\n        color: #4a4a4a;\n    }\n\n    .title_invoice1_t{\n        display: block;\n        margin-left: 16px;\n        margin-top: 8px;\n        text-align: left;\n        width: 100%;\n        height: 16px;\n        font-family: Roboto;\n        font-size: 14px;\n        font-weight: normal;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: normal;\n        letter-spacing: normal;\n        /* text-align: center; */\n        color: #4a4a4a;\n    }\n\n    .title_invoice1_t a{\n        font-family: Roboto;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  text-align: center;\n  color: #b10053;\n    }\n\n    .down-img{\n        display: none;\n    }\n\n    .item-name .icon-left-open{\n        display: none;\n    }\n    \n  }\n"

/***/ }),

/***/ "./src/app/factura/factura.component.html":
/*!************************************************!*\
  !*** ./src/app/factura/factura.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"item-superior\">\n  <div class=\"item-name\">\n    <span class=\"icon-left-open\" style=\"color:#b10053;cursor:pointer;\"></span> Facturas\n  </div>\n</div>\n<div class=\"item-inferior\">\n  <div class=\"item-izquierdo\">\n    <div class=\"margen\">\n      <div class=\"botones-superiores\">\n        <div class=\"boton-menu-activo\">\n            <a>{{ btn_gestion }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ btn_online }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ btn_ventas }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ btn_mark }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ btn_soport }}</a>\n        </div>\n      </div>\n      \n      <div class=\"list-invoice\">\n          <div class=\"title_invoice\">FECHA DE EMISIÓN</div>\n          <div class=\"title_invoice\">NÚMERO DE FACTURA</div>\n          <div class=\"title_invoice\">FECHA DE VTO.</div>\n          <div class=\"title_invoice\">IMPORTE</div>\n          <div class=\"title_invoice\">DESCARGAR</div>\n      </div>\n\n        <div class=\"list-invoice_detail\">\n            <div class=\"title_invoice1_t\"></div>\n            <div class=\"title_invoice1_t\">Fecha de emisión</div>\n            <div class=\"title_invoice1\">10/04/2018</div>\n            <div class=\"title_invoice1_t\">Número de factura</div>\n            <div class=\"title_invoice1\">6516-19225046</div>\n            <div class=\"title_invoice1_t\">Fecha de vencimiento</div>\n            <div class=\"title_invoice1\">26/04/2018</div>\n            <div class=\"title_invoice1_t\">Importe</div>\n            <div class=\"title_invoice1\">$547,50</div>\n            <div class=\"title_invoice1_t\">\n                <a>Descargar</a>\n            </div>\n            <div class=\"title_invoice1 \">\n                <a><img class=\"down-img\" src=\"assets/img/ic-file-download.svg\"></a>\n            </div>\n        </div>\n\n        <div class=\"list-invoice_detail\">\n            <div class=\"title_invoice1_t\"></div>\n            <div class=\"title_invoice1_t\">Fecha de emisión</div>\n            <div class=\"title_invoice1\">10/04/2018</div>\n            <div class=\"title_invoice1_t\">Número de factura</div>\n            <div class=\"title_invoice1\">6516-19225046</div>\n            <div class=\"title_invoice1_t\">Fecha de vencimiento</div>\n            <div class=\"title_invoice1\">26/04/2018</div>\n            <div class=\"title_invoice1_t\">Importe</div>\n            <div class=\"title_invoice1\">$547,50</div>\n            <div class=\"title_invoice1_t\">\n                <a>Descargar</a>\n            </div>\n            <div class=\"title_invoice1 \">\n                <a><img class=\"down-img\" src=\"assets/img/ic-file-download.svg\"></a>\n            </div>\n        </div>\n\n        <div class=\"list-invoice_detail\">\n            <div class=\"title_invoice1_t\"></div>\n            <div class=\"title_invoice1_t\">Fecha de emisión</div>\n            <div class=\"title_invoice1\">10/04/2018</div>\n            <div class=\"title_invoice1_t\">Número de factura</div>\n            <div class=\"title_invoice1\">6516-19225046</div>\n            <div class=\"title_invoice1_t\">Fecha de vencimiento</div>\n            <div class=\"title_invoice1\">26/04/2018</div>\n            <div class=\"title_invoice1_t\">Importe</div>\n            <div class=\"title_invoice1\">$547,50</div>\n            <div class=\"title_invoice1_t\">\n                <a>Descargar</a>\n            </div>\n            <div class=\"title_invoice1 \">\n                <a><img class=\"down-img\" src=\"assets/img/ic-file-download.svg\"></a>\n            </div>\n        </div>\n      \n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/factura/factura.component.ts":
/*!**********************************************!*\
  !*** ./src/app/factura/factura.component.ts ***!
  \**********************************************/
/*! exports provided: FacturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaComponent", function() { return FacturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _register_webservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../register/webservices.service */ "./src/app/register/webservices.service.ts");
/* harmony import */ var _facturas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../facturas.service */ "./src/app/facturas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FacturaComponent = /** @class */ (function () {
    function FacturaComponent(route, location, factutasService, authService, router, flashMensaje, firebase, webservice) {
        this.route = route;
        this.location = location;
        this.factutasService = factutasService;
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.firebase = firebase;
        this.webservice = webservice;
        this.btn_gestion = "Gestión";
        this.btn_online = "Tienda online";
        this.btn_ventas = "Ventas";
        this.btn_mark = "Marketing";
        this.btn_soport = "Soporte";
    }
    FacturaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                auth.getIdToken(true).then(function (idToken) {
                    _this.webservice.putAsociarMiOrganizacion(idToken, {}).subscribe(function (data) {
                        console.log(data);
                        if ((data['organization'] == null) || (data['organization'] == 'null') || data == null) {
                            window.location.href = '/registro';
                        }
                        else {
                            _this.idToken = idToken;
                            console.log(_this.idToken);
                            _this.webservice.getFacturas(idToken).subscribe(function (data) {
                                console.log(data);
                            });
                        }
                    }, function (error) {
                        console.log(error);
                        $('body').loading('stop');
                    });
                }).catch(function (_error) {
                    console.log('error 1');
                });
            }
            else {
                console.log('error 2');
            }
        });
        this.getFacturas();
    };
    FacturaComponent.prototype.getFacturas = function () {
        // const id = +this.route.snapshot.paramMap.get('id');
        var _this = this;
        this.factutasService.getFactura(4)
            .subscribe(function (factutas) { return _this.facturas = factutas; });
        $('body').loading('stop');
        $('.link-2').addClass('menu-active');
    };
    FacturaComponent.prototype.goBack = function () {
        this.location.back();
    };
    FacturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-factura',
            template: __webpack_require__(/*! ./factura.component.html */ "./src/app/factura/factura.component.html"),
            styles: [__webpack_require__(/*! ./factura.component.css */ "./src/app/factura/factura.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _facturas_service__WEBPACK_IMPORTED_MODULE_7__["Facturasservice"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_5__["FirebaseApp"],
            _register_webservices_service__WEBPACK_IMPORTED_MODULE_6__["WebservicesService"]])
    ], FacturaComponent);
    return FacturaComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/facturas.service.ts":
/*!*************************************!*\
  !*** ./src/app/facturas.service.ts ***!
  \*************************************/
/*! exports provided: Facturasservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facturasservice", function() { return Facturasservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_facturas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-facturas */ "./src/app/mock-facturas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Facturasservice = /** @class */ (function () {
    function Facturasservice() {
    }
    Facturasservice.prototype.getFacturas = function () {
        // TODO: send the message _after_ fetching the heroes
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_facturas__WEBPACK_IMPORTED_MODULE_2__["FACTURAS"]);
    };
    Facturasservice.prototype.getFactura = function (id) {
        // TODO: send the message _after_ fetching the hero
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_facturas__WEBPACK_IMPORTED_MODULE_2__["FACTURAS"].find(function (facturas) { return facturas.id === id; }));
    };
    Facturasservice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], Facturasservice);
    return Facturasservice;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <footer>\n        <div class=\"contenedor-1 contenedor\">\n            <a href=\"\" class=\"terminos\">Términos y condiciones</a>\n            <a href=\"\">|</a>\n            <a href=\"\" class=\"politicas\">Políticas de privacidad</a>\n        </div>\n        <div class=\"contenedor-2 contenedor \">\n            <img src=\"assets/img/shape.svg\" alt=\"\">\n            <span>Desarrollado por Suma Digital</span>\n        </div>\n    </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        // $('body').loading('stop');
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth, authService) {
        this.router = router;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.afAuth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    font-family: 'Roboto', sans-serif;\n    \n}\nbody{\n    background: #f4f4f4;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <header>\n      <div class=\"contenedor\">\n          <img src=\"assets/img/color.svg\" class=\"logo-testa\" height=\"24px\" alt=\"\">\n          <label for=\"btn-sub\" class=\"name-user-btn2\">\n              <span class=\"icon-user-circle user-circle2\"></span>\n          </label>\n          <nav class=\"nav-menu\">\n              <ul class=\"menu\">\n                  <li class=\"link-1 {{ active_suite }}\" ><a href=\"suite\">SUITE</a></li>\n                  <li class=\"link-2\" ><a href=\"micuenta/1\">MIS CUENTAS</a></li>\n                  <li class=\"link-3\" ><a href=\"http://soporte.testa.digital\">SOPORTE</a></li>\n              </ul>\n              <ul class=\"menu-user\">\n                  <li class=\"\">\n                      <input type=\"checkbox\" name=\"\" id=\"btn-sub\">\n                      <label for=\"btn-sub\" class=\"name-user\">\n                          <span class=\"icon-user-circle user-circle\"></span>\n                          <span class=\"name-userp\">{{ nombreUsuario }}</span> \n                          <span class=\"icon-sort-down icon-dow\"></span>\n                      </label>\n                      <ul class=\"submenu-user\">\n                          <li><a>Editar perfil</a></li>\n                          <li><a>Cambiar contraseña</a></li>\n                          <a (click)=\"onClickLogout()\"><li>Cerrar sesión</li></a>\n                      </ul>\n                  </li>\n              </ul>\n              \n          </nav>\n      </div>\n  </header>\n  "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // $('body').loading({
        //   overlay: $("#custom-overlay")
        // });
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.nombreUsuario = auth.email;
                _this.emailUsuario = auth.email;
                _this.fotoUsuario = auth.photoURL;
                console.log(_this.emailUsuario);
            }
            else {
                _this.isLogin = false;
            }
        });
    };
    HeaderComponent.prototype.onClickLogout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Roboto:300i,400');\n\n*{\n    font-family: 'Roboto', sans-serif;\n    background: #ffffff;\n    \n}\n\nbody{\n    background: #ffffff;\n}\n\nheader{\n    height: 62px;\n    background: #ffffff;\n    color: #b10053;\n}\n\na{\n  text-decoration: none;\n}\n\n.imagen-principal{\n  height: auto;\n  min-height: 100vh;\n  width: 50%;\n  float: left;\n  background:#fff;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 0px;\n}\n\n.imagen-principal img{\n    height: auto;\n    min-height: 100vh;\n    margin: 0;\n    float: left;\n    padding: 0;\n}\n\n@media(min-width:1024px){\n    .formularios{\n        float: right;\n    }\n}\n\n@media(max-width:1024px){\n    .imagen-principal {\n        display: none !important;\n    } \n    .formularios{\n      width:100% !important;\n      /* margin-top: 48px !important; */\n      float: left;\n    }\n    .formularios .margen{\n      /* margin-top: 48px !important; */\n    }\n    \n\n}\n\n.formularios{\n  /* border: 1px solid; */\n    height: 100vh;\n    min-height: 768px;\n    background: #ffffff;\n    /* border: 1px solid #b10053; */\n    width: 50%;\n}\n\n.formularios .margen{\n  /* border: 1px solid; */\n    margin-right: calc((100% - 335px)/2);\n    margin-left: calc((100% - 335px)/2);\n    background: #ffffff;\n}\n\n.formularios .margen .margeninterno{\n  /* border: 1px solid; */\n    margin-top: 80px;\n    /* margin-left: 80px; */\n    background: #ffffff;\n    width: 335px;\n}\n\n.margeninterno .logo{\n    text-align:center;\n    height: 30px;\n}\n\n.margeninterno .logo img{\n    height: 30px;\n}\n\n.margeninterno .mail{\n    height: 48px;\n    text-align: center;\n    width: 100%;\n    margin-top: 58px;\n\n}\n\n.margeninterno .mail input{\n    width: 100%;\n    border-bottom: 1px solid #9b9b9b;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    height: 48px;\n    background: transparent;\n\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #9b9b9b;\n}\n\n.margeninterno .clave{\n    height: 48px;\n    text-align: center;\n    width: 100%;\n    margin-top: 39px;\n\n}\n\n.margeninterno .clave input{\n    width: 100%;\n    border-bottom: 1px solid #9b9b9b;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    height: 48px;\n    background: transparent;\n\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #9b9b9b;\n}\n\n.margeninterno .ingresar{\n    height: 48px;\n    text-align: center;\n    width: 100%;\n    margin-top: 71px;\n}\n\n.margeninterno .ingresar button{\n    width: 224px;\n    height: 40px;\n    border-radius: 3px;\n    background-color: #b10053;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: 0.6px;\n    text-align: center;\n    color: #ffffff;\n    cursor: pointer;\n}\n\n.margeninterno .ingresar button:hover{\n  background-color: #771241;\n  cursor: pointer;\n}\n\n.datos-subtitulo {\n    max-width: 336px;\n    height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 16px;\n    letter-spacing: 0.2px;\n    color: #4a4a4a;\n    text-align: center;\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 16px;\n}\n\n.mensaje-error{\n  height: 14px;\n  text-align: left;\n  width: 100%;\n  color: red;\n  font-size: 12px;\n  visibility: hidden;\n  margin-top: 2px;\n}\n\n.separador{\n    height: 14px;\n    /* text-align: center; */\n    width: 100%;\n    margin-top: 50px;\n}\n\n.loginredes{\n  margin-top: 38px;\n}\n\n.google-button{\n  float: left;\n  width: 160px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: #4285f4;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);\n}\n\n.google-button:hover{\n  background-color:#094d7d;\n  cursor: pointer;\n}\n\n.logo-google{\n  width: 38px;\n  height: 38px;\n  border-radius: 2px;\n  /* border-radius: 1px; */\n  background-color: #ffffff;\n  float: left;\n  margin-left: 1px;\n  margin-top: 1px;\n  border: 1px solid #ffffff;\n}\n\n.logo-google img{\n  height: 18px;\n  width: 18px;\n  float: left;\n  margin-left: 10px;\n  margin-top: 10px;\n  /* padding: 10px 10px; */\n}\n\n.text-button-google{\n  float: left;\n  margin-left: 11px;\n  margin-top: 13px;\n  width: 91px;\n  height: 16px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  background:transparent;\n  letter-spacing: 0.2px;\n  color: #ffffff;\n}\n\n.text-button-google:hover{\n  background-color:#094d7d;\n  cursor: pointer;\n}\n\n/* kkkkkkk  */\n\n.facebook-button{\n  float:right;\n  width: 160px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: #4867ad;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n\n.facebook-button:hover{\n  background: #3b5998;\n  cursor: pointer;\n}\n\n.logo-facebook{\n  width: 38px;\n  height: 38px;\n  border-radius: 2px;\n  background-color: #ffffff;\n  float: left;\n  margin-left: 1px;\n  margin-top: 1px;\n  border: 1px solid #ffffff;\n}\n\n.logo-facebook img{\n  height: 18px;\n  width: 18px;\n  float: left;\n  background-color: #4867ad;\n  margin-left: 10px;\n  margin-top: 10px;\n  /* padding: 10px 10px; */\n}\n\n.text-button-facebook{\n  float: left;\n  margin-left: 11px;\n  margin-top: 13px;\n  width: 91px;\n  height: 16px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  background:transparent;\n  letter-spacing: 0.2px;\n  color: #ffffff;\n}\n\n.recuperar{\n  height: 40px;\n  text-align: center;\n  width: 100%;\n  margin-top: 96px;\n  cursor: pointer;\n}\n\n.crear{\n  height: 40px;\n  text-align: center;\n  width: 100%;\n  margin-top: 8px;\n  cursor: pointer;\n}\n\n.recuperar .btn-recuperar{\n  margin-left: calc( (100% - 192px)/2 );\n  width: 192px;\n  height: 40px;\n  border-radius: 3px;\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: 0.6px;\n  color: #b10053;\n  padding-top: 7px;\n  cursor: pointer;\n  /* background-color: #eaeaea; */\n}\n\n.crear .btn-recuperar{\n  margin-left: calc( (100% - 240px)/2 );\n  width: 240px;\n  height: 40px;\n  border-radius: 3px;\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: 0.6px;\n  color: #b10053;\n  padding-top: 7px;\n  cursor: pointer;\n  /* background-color: #eaeaea; */\n}\n\n.crear .btn-recuperar:hover{\n  background-color: #eaeaea;\n  cursor: pointer;\n\n}\n\n.recuperar .btn-recuperar:hover{\n  background-color: #eaeaea;\n  cursor: pointer;\n\n}\n\n/* ---------- */\n\n.cuadro{\n    background-color: #fff;\n/*\tpadding-right: 15px;\n  padding-left: 15px;\n  */\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n  display: flex;\n  height: 768px;\n  /*margin-top: 60px;*/\n}\n\n.imagen{\n  /*margin-left: -15px;\n  margin-right: -15px;*/\n}\n\n.imagen img{\n  width: 100%;\n  height: 100%;\n  display: block;\n  \n}\n\n.datos{\n  padding-top: 9%;\n  padding-top: 0%;\n  /*overflow:hidden;\n  /*margin-left: -15px;\n  margin-right: -15px;*/\n  display: flex;\n  text-align: center;\n  padding: 0;\n  \n}\n\n/* */\n\n.firebaseui-idp-list>.firebaseui-list-item {\n  margin-bottom: 0px;\n  text-align: center;\n  float: left;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.firebaseui-idp-password{\n  display: none;\n}\n\n.firebaseui-idp-phone{\n  display: none;\n}\n\n.firebaseui-idp-google>.firebaseui-idp-text {\n  color: #fff;\n  padding-left: 10px;\n}\n\n.firebaseui-idp-google {\n  width: 100%;\n    height: 40px;\n    border-radius: 2px;\n    background-color: #4285f4;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);\n    padding: 1px;\n}\n\n.firebaseui-idp-google, .firebaseui-idp-google:hover, .mdl-button.firebaseui-idp-google:active, .mdl-button.firebaseui-idp-google:focus {\nbackground-color:#1a58bf;}\n\n.firebaseui-idp-facebook {\nwidth: 100%;\nheight: 40px;\nborder-radius: 2px;\nbackground-color: #4867ad;\nbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);\npadding: 1px;\n}\n\n.firebaseui-idp-facebook .firebaseui-idp-icon{\n  background-color: #4867ad;\n}\n\n.firebaseui-idp-icon-wrapper {\n  width: 38px;\n  height: 38px;\n  background-color: #fff;\n  text-align: center;\n  border-radius: 1px;\n}\n\n/**/\n\n.titulo{\n  margin-top: 120px;\n  display:block;\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 0%;\n}\n\n.titulo img{\n  display: inline-block;\n  height: 3.4em;\n  width: auto;\n}\n\n.titulo span{\n  color: #004d80;\n  font-size: 3.6em;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\n\n.datos-email{\n  display: block;\n  max-width: 336px;\n  margin: 0 auto;\n  margin-top:7%;\n  margin-top: 36px;\n  margin-bottom: 96px;\n  margin-bottom: 46px;\n}\n\n.datos-campo{\n  width: 100%;\n  height: 32px;\n  line-height: 1.5;\n  font-size: 16px;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  border-bottom :1px solid #9b9b9b;\n  margin-bottom: 26px;\n  margin-top: 18px;\n  color:#d0021b;\n  letter-spacing: 0.045em;\n}\n\n.datos-boton{\n  width: 224px;\n  height: 40px;\n  \n  font-size:16px;\n  margin: 0 auto;\n  font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 40px;\n    letter-spacing: 0.6px;\n    text-align: center;\n    color: #ffffff;\n  margin-top: 48px;\n  display: block;\n  transition: 0.3s;\n  cursor: pointer;\n  border-radius: 3px;\n  background-color: #b10053;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n}\n\n.firebaseui-idp-google:hover{\n  background-color:#094d7d;\n}\n\n.firebaseui-card-content {\n  padding: 0px; \n}\n\n.firebaseui-auth-container{\n  max-width: 336px;\n}\n\n.datos-boton:hover{\n  background-color: #771241;\n}\n\n.datos-subtitulo{\n  max-width: 336px;\n  height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 16px;\n    letter-spacing: 0.2px;\n    color: #4a4a4a;\n    text-align: center;\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 16px;\n}\n\n.datos-subtitulo span {\n  background: #fff;\n     padding: 0 10px 0 10px;\n  position: relative;\n  z-index: 5;\n}\n\n.datos-subtitulo:before {\n  content: \"\";\n  display: block;\n  border-top: solid 1px #eaeaea;\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  top: 50%;\n  z-index: 1;\n}\n\n.datos-links {\n  margin: 0 auto;\n  \n  text-align: center;\n  margin-top: 13%;\n  margin-top: 96px;\n  padding-bottom: 0%;\n  display: flex;\n  flex-direction: column;\n}\n\n.datos-links a{\n  text-decoration: none;\n  display: block;\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 40px;\n  height: 40px;\n  letter-spacing: 0.6px;\n  color: #b10053;\n  margin: 0 auto;\n  width: auto;\n  padding: 0 8px;\n}\n\n.datos-links a:hover{\n  background-color: #eaeaea;\n}\n\n.contenedor-datos{\n  display: block;\n  width: auto;\n  position: relative;\n  margin: auto;\n}\n\n.datos-campo::-webkit-input-placeholder {\n  color: #9b9b9b;\n  opacity: 1;\n}\n\n.datos-campo:-ms-input-placeholder {\n  color: #9b9b9b;\n  opacity: 1;\n}\n\n.datos-campo::-ms-input-placeholder {\n  color: #9b9b9b;\n  opacity: 1;\n}\n\n.datos-campo::placeholder {\n  color: #9b9b9b;\n  opacity: 1;\n}\n\n:-ms-input-placeholder {\n  color: #9b9b9b;\n}\n\n::-ms-input-placeholder { \n  color: #9b9b9b;\n}\n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"imagen-principal\">\n        <img src=\"/assets/img/bg-admin.png\" alt=\"\">\n    </div>\n    <div class=\"formularios\">\n        <div class=\"margen\">\n            <div class=\"margeninterno\">\n                    <div class=\"logo\">\n                        <img src=\"/assets/img/color.svg\" alt=\"\">\n                    </div>\n                    <div class=\"mail\">\n                        <input type=\"text\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" placeholder=\"E-mail\">\n                    </div>\n                    <div id=\"error-correo\" class=\"mensaje-error\">error</div>\n                    <div class=\"clave\">\n                        <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" placeholder=\"Clave\">\n                    </div>\n                    <div class=\"mensaje-error\">error</div>\n                    <div class=\"ingresar\">\n                        <button (click)=\"onSubmitLogin();\">INGRESAR</button>\n                    </div>\n                <div class=\"separador\">\n                    <div class=\"datos-subtitulo\"><span>Ingresar con:</span></div>\n                </div>\n                <div class=\"loginredes\">\n                    <div class=\"google-button\" (click)=\"onClickGoogleLogin();\">\n                        <div class=\"logo-google\">\n                            <img src=\"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg\" alt=\"\">\n                        </div>\n                        <div class=\"text-button-google\">\n                                Google\n                        </div>\n                    </div>\n\n                    <div class=\"facebook-button\">\n                        <div class=\"logo-facebook\">\n                            <img src=\"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg\" alt=\"\">\n                        </div>\n                        <div class=\"text-button-facebook\">\n                                Facebook\n                        </div>\n                    </div>\n                        <!--  -->\n                </div>\n                <div class=\"recuperar\">\n                    <a href=\"/recuperar\">\n                        <div class=\"btn-recuperar\">\n                                ¿Olvidó su contraseña?\n                        </div>\n                    </a>\n                </div>\n                <div class=\"crear\">\n                    <a href=\"/registro\">\n                        <div class=\"btn-recuperar\">\n                                ¿Primera vez que visita Testa?\n                        </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _register_webservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/webservices.service */ "./src/app/register/webservices.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMensaje, firebase, webservice) {
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.firebase = firebase;
        this.webservice = webservice;
        this.error = null;
        this.error2 = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                console.log('logeado 2');
                auth.getIdToken(true).then(function (idToken) {
                    console.log('error 2');
                    console.log(_this.error2);
                    if (_this.error2) {
                        _this.error = "";
                        _this.error = _this.webservice.findGetParameter('error');
                        console.log('Variable errorc 2');
                    }
                    if (_this.error == null) {
                        console.log('vacio 2');
                        var url = _this.webservice.findGetParameter('signInSuccessUrl');
                        console.log(url);
                        if (url == null) {
                            url = "/suite";
                            window.location.href = '/suite';
                        }
                        else {
                            $.redirect(url, { "idToken": idToken });
                        }
                    }
                    else {
                        console.log("valor error:" + _this.error);
                        _this.authService.logout();
                        $('#error-correo').css('visibility', 'visible');
                        $('#email').css({ 'color': 'red', 'border-bottom': '1px solid red' });
                        $('#error-correo').text('\nEl usuario con el que está\
              intentando ingresar no tiene permisos para acceder a la aplicación');
                    }
                    $('body').loading('stop');
                }).catch(function (_error) {
                    console.log('Error al Obtener tokenid');
                    $('body').loading('stop');
                });
            }
            else {
                console.log('No logeado');
                $('body').loading('stop');
            }
        });
    };
    LoginComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        $('.formularios').loading({
            overlay: $("#custom-overlay")
        });
        //console.log('submit');
        this.error2 = false;
        console.log(this.email);
        console.log(this.error2);
        this.authService.loginEmail(this.email, this.password)
            .then(function (res) {
            // console.log(res['refreshToken']);
            //window.location.href = '/suite';
            var url = _this.webservice.findGetParameter('signInSuccessUrl');
            console.log(url);
            if (url == null) {
                url = "/suite";
                window.location.href = '/suite';
            }
            else {
                $.redirect(url);
            }
        }).catch(function (err) {
            console.log('error suite ');
            $('#error-correo').css('visibility', 'visible');
            $('#email').css({ 'color': 'red', 'border-bottom': '1px solid red' });
            $('#error-correo').text('\nEl usuario con el que está\
      intentando ingresar no está registrado en la aplicación');
            $('.formularios').loading('stop');
            //this.router.navigate(['/login']);
        });
    };
    LoginComponent.prototype.onClickGoogleLogin = function () {
        var _this = this;
        this.authService.loginGoogle()
            .then(function (res) {
            // console.log(res);
            // console.log(res['user']['uid']);
            _this.authService.getAuth().subscribe(function (auth) {
                if (auth) {
                    auth.getIdToken(true).then(function (idToken) {
                        // console.log(idToken);
                        _this.webservice.putAsociarMiOrganizacion(idToken, {}).subscribe(function (data) {
                            // console.log(data);
                            //this.webservice.findGetParameter('signInSuccessUrl');
                            var url = _this.webservice.findGetParameter('signInSuccessUrl');
                            if (url == null) {
                                url = "/suite";
                                _this.router.navigate(['/suite']);
                                // $('body').loading('toggle');
                            }
                            else {
                                $.redirect(url, { "idToken": idToken });
                            }
                            // if(url == undefined) url = "/suite";   
                            //$.redirect( url, { "idToken": idToken} );
                        }, function (error) {
                            // console.log(error);
                            _this.router.navigate(['/suite']);
                            $('body').loading('stop');
                            // this.router.navigate(['/registro/step2']);
                            // window.location.href = '/registro/step2';
                        });
                    }).catch(function (_error) {
                        _this.idToken = "";
                        console.log('error login 1');
                        $('body').loading('stop');
                        // this.router.navigate(['/registro']);
                    });
                }
                else {
                    console.log('error login 2');
                    $('body').loading('stop');
                    // this.idToken = "";
                    // this.router.navigate(['/registro']);
                }
            });
            //this.router.navigate(['/registro/step1']);
        }).catch(function (err) { return console.log(err.message); });
    };
    LoginComponent.prototype.onClickFacebookLogin = function () {
        var _this = this;
        this.authService.loginFacebook()
            .then(function (res) {
            _this.router.navigate(['/suite']);
        }).catch(function (err) { return console.log(err.message); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__["FirebaseApp"],
            _register_webservices_service__WEBPACK_IMPORTED_MODULE_5__["WebservicesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _register_webservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/webservices.service */ "./src/app/register/webservices.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router, flashMensaje, firebase, webservice) {
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.firebase = firebase;
        this.webservice = webservice;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.authService.logout().then(function (data) {
                    _this.router.navigate(['/login']);
                });
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__["FirebaseApp"],
            _register_webservices_service__WEBPACK_IMPORTED_MODULE_5__["WebservicesService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/micuenta/micuenta.component.css":
/*!*************************************************!*\
  !*** ./src/app/micuenta/micuenta.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background: #f4f4f4;\n}\n\n.item-superior{\n    float: left;\n    width: 100%;\n    height: 128px;\n    background-color: #eaf0f4;\n    border-bottom: solid 1px #0a4d7c;\n}\n\n.item-superior .item-name{\n    float: left;\n    padding: 48px 128px;\n    height: 32px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    font-weight: 300;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #0a4d7c;\n\n}\n\n.item-superior .item-edit-perfil{\n    float: right;\n    padding: 55px 104px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.14;\n    letter-spacing: 1.3px;\n    color: #b10053;\n    cursor: pointer;\n}\n\n.item-superior .item-edit-perfil:hover{\n    color: #0a4d7c\n}\n\n.texto-3 p a:hover{\n    color: #0a4d7c;\n}\n\n.verfacturas a:hover{\n    color: #0a4d7c;\n}\n\n.item-inferior{\n    float: left;\n    width: 100%;\n    /* height: calc(100vh - 246px); */\n    /* display: flex; */\n}\n\n.item-inferior .item-derecho{\n    width: 471px;\n    float: left;\n    /* height: calc(100vh - 246px); */\n    height: calc(100vh - 246px);\n    min-height: 600px;\n    background: #ffffff;\n}\n\n.item-inferior .item-izquierdo{\n    float: left;\n    width: calc(100% - 471px);\n    /* height: calc(100vh - 246px); */\n    \n}\n\n.margen{\n    margin-left: 127px;\n    width: 100%;\n    /* height: calc(100vh - 246px); */\n}\n\n.margen .botones-superiores{\n    height: 78px;\n    width: 100%;\n    border-bottom: solid 1px #eaeaea;\n}\n\n.margen .boton-menu-activo{\n    margin-top: 14px;\n    width: auto;\n    height: 32px;\n    border-radius: 16px;\n    background-color: #0a4d7c;\n    float: left;\n    padding: 7px;\n    padding-left: 12px;\n    padding-right: 12px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n}\n\n.margen .boton-menu{\n    margin-top: 14px;\n    \n    height: 32px;\n    border-radius: 16px;\n    float: left;\n    padding: 7px 23px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4a4a4a;\n}\n\n.margen .boton-menu:hover{\n    color: #0a4d7c;\n    background: #eaeaea;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n    \n}\n\n.margen .texto-1{\n    width: 133px;\n  height: 16px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 30px;\n}\n\n.margen .texto-2{\n    margin-top: 21px;\n    width: 222px;\n  height: 26.5px;\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: #000000;\n  border-bottom: solid 1px rgba(0, 0, 0, 0.12);\n}\n\n.margen .texto-3{\n    margin-top: 14.5px;\n    width: 494px;\n    max-width: 494px;\n  height: 48px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.margen .texto-3 a{\n    color: #b10053;\n}\n\n.margen .texto-4{\n    margin-top: 72px;\n    width: 133px;\n  height: 16px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #4a4a4a;\n}\n\n.margen .texto-6{\n    margin-top: 24px;\n    width: 172px;\n  height: 32px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.margen .texto-7{\n    margin-top: 16px;\n    width: 130px;\n  height: 16px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #b10053;\n}\n\n.margen2{\n    margin-left: 46px;\n    /* height: calc(100vh - 246px); */\n    /* width: 100%; */\n}\n\n.estadof{\n    margin-top: 24px;\n    width: 310px;\n  height: 24px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  /* text-align: center; */\n  color: #000000;\n}\n\n.statusf{\n    margin-top: 8px;\n    width: 310px;\n  height: 96px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 40px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n  /* text-align: center; */\n  color: #549805;\n}\n\n.statusfv{\n    margin-top: 8px;\n    width: 310px;\n  height: 96px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 40px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n  /* text-align: center; */\n  color: #d0021b;\n}\n\n.ultimaf{\n    margin-top: 80px;\n    width: 100%;\n  height: 24px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  /* text-align: center; */\n  color: #000000;\n}\n\n.verfacturas{\n    margin-top: 26px;\n    width: 100%;\n  height: 16px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n  \n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.14;\n  letter-spacing: 1.3px;\n  color: #b10053;\n}\n\n.verfacturas a{\n    text-decoration: none;\n    font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.14;\n  letter-spacing: 1.3px;\n  color: #b10053;\n}\n\n.ultmaf-detalle {\n    margin: 8px;\n    width: 296px;\n    height: 232px;\n    border-radius: 3px;\n    background-color: #ffffff;\n    border: solid 1px #eaeaea;\n  }\n\n.ultmaf-detalle .detalle-margen{\n      margin-top: 16px;\n      margin-left: 16px;\n  }\n\n.detalle-margen .textpo1{\n    height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #4a4a4a;\n  }\n\n.detalle-margen .textpo2{\n      \n    height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #4a4a4a;\n  }\n\n.detalle-margen .textpo3{\n      margin-top: 8px;\n    height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #4a4a4a;\n  }\n\n.detalle-margen .textpo4{\n    height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #4a4a4a;\n  }\n\n.detalle-margen .textpo5{\n    margin-top: 8px;\n    height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #4a4a4a;\n  }\n\n.detalle-margen .textpo6{\n    height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #4a4a4a;\n  }\n\n.detalle-margen .textpo7{\n    margin-top: 8px;\n    height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #4a4a4a;\n  }\n\n.detalle-margen .textpo8{\n    height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #4a4a4a;\n  }\n\n.detalle-margen .textpo9{\n      margin-top: 16px;\n    height: 24px;\n  font-family: Roboto;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #b10053;\n  }\n\n.detalle-margen .textpo9 a{\n    color: #b10053;\n\n  }\n\n.margen .texto-7 a:hover{\n      color: #0a4d7c;\n  }\n\n.detalle-margen .textpo9 a:hover{\n      color: #0a4d7c;\n  }\n\n.btn_comprar{\n    margin-top: 40px;\n    width: 224px;\n    height: 36px;\n    background-color: #b10053;\n    text-align: center;\n    vertical-align: middle; \n    border-radius: 2px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);\n  }\n\n.btn_comprart{\n    /* padding: 10px 16px; */\n    font-family: 'Roboto', sans-serif;\n    padding-top: 10px;\n    font-size: 14px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.14;\n    letter-spacing: 1.3px;\n    text-align: center;\n    color: #ffffff;\n  }\n\n.btn_comprar a{\n      text-decoration: none;\n      cursor: pointer;\n      font-size: 14px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.14;\n    letter-spacing: 1.3px;\n    text-align: center;\n    color: #ffffff;\n  }\n\n.btn_comprar:hover{\n      background: #0a4d7c;\n      color: #ffffff;\n\n  }\n\n@media (max-width:1024px){\n    .item-superior{\n    margin-top: 73px;\n    height: 72px;\n    }\n\n    .item-superior .item-name{\n        float: left;\n        padding: 24px 16px;\n        \n        height: 32px;\n        font-family: 'Roboto', sans-serif;\n        font-size: 24px;\n        font-weight: 300;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 1.33;\n        letter-spacing: normal;\n        text-align: center;\n        color: #0a4d7c;\n    \n    }\n\n    .item-superior .item-edit-perfil{\n        float: right;\n        padding: 28px 18px;\n        font-family: 'Roboto', sans-serif;\n        font-size: 18px;\n        font-weight: 500;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 1.14;\n        letter-spacing: 1.3px;\n        color: #b10053;\n        cursor: pointer;\n\n    }\n\n    .item-superior .text-edit-btn{\n        cursor: pointer;\n    }\n\n    .item-superior .text-edit-btn{\n        display: none;\n    }\n\n    .item-inferior .item-izquierdo{\n        /* float: left; */\n        width: 100%\n        /* height: calc(100vh - 246px); */\n        \n    }\n    .item-inferior .item-derecho{\n        width: 100%;\n        /* float: left; */\n        /* height: calc(100vh - 246px); */\n        height: 216px !important;\n        min-height: 216px !important;\n        max-height: 216px !important;\n        background: #ffffff;\n    }\n\n    .item-inferior .margen{\n        margin-left: 16px;\n        width: calc(100% - 32px);\n        margin-bottom: 32px;\n        /* height: calc(100vh - 246px); */\n    }\n\n    .item-inferior .margen2{\n        margin-left: 16px;\n        width: calc(100% - 32px);\n        margin-top: 32px;\n    }\n    .margen .texto-3{\n        width: 100%;\n    }\n\n    .item-inferior .margen2 .statusf{\n        height: 47px;\n    }\n    .item-inferior .margen2 .statusfv{\n        height: 47px;\n    }\n\n    .item-inferior .margen2 .ultimaf{\n        margin-top: 8px;\n    }\n\n    .item-inferior .margen2 .ultmaf-detalle{\n        display: none;\n    }\n\n    .item-inferior .margen2 .btn_comprar{\n        margin-top: 57px;\n    }\n\n    .margen .botones-superiores{\n        display: inline-table;\n        cursor: pointer;\n    }\n    \n  }\n"

/***/ }),

/***/ "./src/app/micuenta/micuenta.component.html":
/*!**************************************************!*\
  !*** ./src/app/micuenta/micuenta.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"item-superior\">\n  <div class=\"item-name\">\n      {{ name }}\n  </div>\n  <div class=\"item-edit-perfil\" >\n      <span class=\"icon-pencil\"></span><span class=\"text-edit-btn\">{{ datatest.btn_edit }}</span>  \n  </div>\n</div>\n<div class=\"item-inferior\">\n  <div class=\"item-izquierdo\">\n    <div class=\"margen\">\n      <div class=\"botones-superiores\">\n        <div *ngFor=\"let prod of product\" class=\"boton-menu-activo\">\n            <a>{{ prod.label }}</a>\n        </div>\n        <!-- <div class=\"boton-menu\">\n            <a>{{ datatest.btn_online }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ datatest.btn_ventas }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ datatest.btn_mark }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ datatest.btn_soport }}</a>\n        </div> -->\n      </div>\n\n      <div class=\"texto-1\">{{ datatest.title_1 }}</div>\n      <div class=\"texto-2\"> {{ datatest.empresa_name }} </div>\n      <div class=\"texto-3\">\n          <p>\n          {{ datatest.title_2 }}\n          <a>{{ datatest.mail_empresa }}</a>\n        </p>\n        </div>\n      <div class=\"texto-4\">{{ datatest.title_3 }}</div>\n      <div class=\"texto-6\">{{ datatest.title_4 }}\n          {{ datatest.dominio }}</div>\n      <div class=\"texto-7\"><a>{{ datatest.subdominio }}</a></div>\n    </div>\n  </div>\n  <div class=\"item-derecho\">\n    <div class=\"margen2\">\n      <div class=\"estadof\">\n          {{ datatest.t_invoice }}\n      </div>\n      <div class=\"{{ datatest.ct1_invoice }}\">\n          <p>{{ datatest.t1_invoice }}</p>\n      </div>\n      <div *ngIf=\"datatest.mostrar;\" class=\"ultimaf\">\n          {{ datatest.t2_invoice }}\n      </div>\n      <div *ngIf=\"datatest.mostrar;\" class=\"ultmaf-detalle\">\n        <div class=\"detalle-margen\">\n            <div class=\"textpo1\">Fecha de emisión</div>\n            <div class=\"textpo2\">10/04/2018</div>\n            <div class=\"textpo3\">Número de factura</div>\n            <div class=\"textpo4\">6516-19225046</div>\n            <div class=\"textpo5\">Fecha de vencimiento</div>\n            <div class=\"textpo6\">26/04/2018</div>\n            <div class=\"textpo7\">Importe</div>\n            <div class=\"textpo8\">$547,50</div>\n            <div class=\"textpo9\">\n                <a href=\"\">Descargar</a>\n            </div>\n        </div>\n      </div>\n        <a href=\"/suscripcion\">\n            <div *ngIf=\"datatest.btn_comprar;\" class=\"btn_comprar btn_comprart\">\n                COMPRAR AHORA\n            </div>\n        </a>\n      <div *ngIf=\"datatest.mostrar\" class=\"verfacturas\">\n          <a href=\"/factura\"> {{ datatest.btn_all_invoice }}</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/micuenta/micuenta.component.ts":
/*!************************************************!*\
  !*** ./src/app/micuenta/micuenta.component.ts ***!
  \************************************************/
/*! exports provided: MicuentaComponent, statusObject, serviceOrganizacion, UserServiceOrganizacion, productos, sectores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicuentaComponent", function() { return MicuentaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusObject", function() { return statusObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceOrganizacion", function() { return serviceOrganizacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceOrganizacion", function() { return UserServiceOrganizacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productos", function() { return productos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectores", function() { return sectores; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _datatest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datatest.service */ "./src/app/datatest.service.ts");
/* harmony import */ var _register_webservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/webservices.service */ "./src/app/register/webservices.service.ts");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MicuentaComponent = /** @class */ (function () {
    function MicuentaComponent(route, location, datatestService, authService, webservice) {
        this.route = route;
        this.location = location;
        this.datatestService = datatestService;
        this.authService = authService;
        this.webservice = webservice;
        this.product = [];
        this.status = [];
        this.servicios = [];
    }
    MicuentaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                auth.getIdToken(true).then(function (idToken) {
                    _this.webservice.putAsociarMiOrganizacion(idToken, {}).subscribe(function (data) {
                        console.log(data);
                        if ((data['organization'] == null) || (data['organization'] == 'null') || data == null) {
                            window.location.href = '/registro';
                        }
                        else {
                            _this.idToken = idToken;
                            console.log(_this.idToken);
                            _this.consultarServicios(_this.idToken);
                        }
                    }, function (error) {
                        console.log(error);
                        // $('body').loading('stop');
                    });
                }).catch(function (_error) {
                    console.log('error 1');
                });
            }
            else {
                console.log('error 2');
            }
        });
        this.getDatatest();
        this.ejecutarCombox();
        $('.link-2').addClass('menu-active');
    };
    MicuentaComponent.prototype.getDatatest = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.datatestService.getDatatest(id)
            .subscribe(function (datatest) { return _this.datatest = datatest; });
        // $('body').loading('stop');
    };
    MicuentaComponent.prototype.goBack = function () {
        this.location.back();
    };
    MicuentaComponent.prototype.consultarStatusSistemas = function (idtoken) {
        var _this = this;
        console.log("====================== 01 ===============================");
        this.webservice.getEstatusSistema(idtoken).subscribe(function (data) {
            console.log(data);
            var keys = Object.keys(data);
            var i = 0;
            keys.forEach(function (k) {
                var c = Array(data[k]);
                var p = new statusObject();
                p.id = k;
                p.name = c[0]['name'];
                //console.log(p);
                _this.status.push(p);
            });
            _this.consultarServicios(_this.idToken);
        });
    };
    MicuentaComponent.prototype.consultarServicios = function (idtoken) {
        var _this = this;
        console.log("====================== 02 ===============================");
        this.webservice.getStatusServicioOrganizacion(idtoken).subscribe(function (data) {
            var keys = Object.keys(data);
            var i = 0;
            keys.forEach(function (k) {
                var c = Array(data[k]);
                c.forEach(function (i) {
                    var s = new serviceOrganizacion();
                    var keys2 = Object.keys(i);
                    console.log('servicios');
                    console.log(keys2[0]);
                    console.log(i[keys2[0]]['contract']);
                    s.id = keys2[0];
                    s.organizacion = i[keys2[0]]['organization'];
                    s.producto = i[keys2[0]]['product'];
                    s.estatus = i[keys2[0]]['status'];
                    s.contrato = i[keys2[0]]['contract'];
                    s.subdominio = i[keys2[0]]['subdomain'];
                    _this.servicios.push(s);
                });
                console.log(_this.servicios);
            });
            _this.consultarProductos(_this.idToken);
        }, function (error) {
            // $('body').loading('stop');
        });
    };
    MicuentaComponent.prototype.ejecutarCombox = function () {
    };
    MicuentaComponent.prototype.consultarProductos = function (idtoken) {
        var _this = this;
        console.log("====================== 02 ===============================");
        this.idToken = idtoken;
        this.webservice.getProductos(idtoken).subscribe(function (data) {
            //console.log(data);
            var keys = Object.keys(data);
            var i = 0;
            keys.forEach(function (k) {
                var c = Array(data[k]);
                var p = new productos();
                var s = "inactive";
                var sub = "";
                _this.servicios.forEach(function (servicio) {
                    if (servicio.producto == k) {
                        p.id = k;
                        p.image = c[0]['image'];
                        p.label = c[0]['label'];
                        p.name = c[0]['name'];
                        p.domain = c[0]['domain'];
                        console.log(p);
                        _this.product.push(p);
                    }
                });
            });
            _this.webservice.getMiContacto(idtoken).subscribe(function (data) {
                console.log(data['']);
                _this.name = data['lastname'];
                $('body').loading('stop');
                $('.link-2').addClass('menu-active');
            });
        }, function (error) {
            console.log(error);
        });
        //$('body').loading('stop');
    };
    MicuentaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-micuenta',
            template: __webpack_require__(/*! ./micuenta.component.html */ "./src/app/micuenta/micuenta.component.html"),
            styles: [__webpack_require__(/*! ./micuenta.component.css */ "./src/app/micuenta/micuenta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _datatest_service__WEBPACK_IMPORTED_MODULE_3__["Datatestservice"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _register_webservices_service__WEBPACK_IMPORTED_MODULE_4__["WebservicesService"]])
    ], MicuentaComponent);
    return MicuentaComponent;
}());

var statusObject = /** @class */ (function () {
    function statusObject() {
    }
    return statusObject;
}());

var serviceOrganizacion = /** @class */ (function () {
    function serviceOrganizacion() {
        this.user = [];
    }
    return serviceOrganizacion;
}());

var UserServiceOrganizacion = /** @class */ (function () {
    function UserServiceOrganizacion() {
    }
    return UserServiceOrganizacion;
}());

var productos = /** @class */ (function () {
    function productos() {
    }
    return productos;
}());

var sectores = /** @class */ (function () {
    function sectores() {
    }
    return sectores;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/moc-datatest.ts":
/*!*********************************!*\
  !*** ./src/app/moc-datatest.ts ***!
  \*********************************/
/*! exports provided: DATATEST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATATEST", function() { return DATATEST; });
var DATATEST = [
    { id: 1,
        name: "Juan Perez",
        btn_edit: "EDITAR PERFIL",
        btn_gestion: "Gestión",
        btn_online: "Tienda online",
        btn_ventas: "Ventas",
        btn_mark: "Marketing",
        btn_soport: "Soporte",
        title_1: "Su empresa en Testa",
        empresa_name: "Sarasa",
        title_2: "Su nombre en testa Gestión aparece en las notificacione por correo electrónico.\
    Su nombre en testa Gestión no afecta a la URL  de su sistema, que siempre es",
        mail_empresa: "https://sarasa44643423.testa.com",
        title_3: "Su empresa en Testa",
        title_4: "Su subdominio actual:",
        dominio: "sarasa44643423.testa.com",
        subdominio: "Cambiar subdominio",
        t_invoice: "Estado de facturación",
        t1_invoice: "AL DÍA",
        ct1_invoice: "statusf",
        t2_invoice: "Última factura",
        btn_all_invoice: "VER TODAS LAS FACTURAS",
        date_invoice_t: "Fecha de emisión",
        date_invoice: "10/04/2018",
        date_num_invoice_t: "Número de factura",
        num_invoice: "6516-19225046",
        date_expire_t: "Fecha de vencimiento",
        date_expire: "26/04/2018",
        importe_t: "Importe",
        importe: "$547,50",
        btc_down_invoice: "Descargar",
        mostrar: true,
        btn_comprar: false
    },
    { id: 2,
        name: "Omar Orozco",
        btn_edit: "EDITAR PERFIL",
        btn_gestion: "Gestión",
        btn_online: "Tienda online",
        btn_ventas: "Ventas",
        btn_mark: "Marketing",
        btn_soport: "Soporte",
        title_1: "Su empresa en Testa",
        empresa_name: "Sarasa",
        title_2: "Su nombre en testa Gestión aparece en las notificacione por correo electrónico.\
    Su nombre en testa Gestión no afecta a la URL  de su sistema, que siempre es",
        mail_empresa: "https://sarasa44643423.testa.com",
        title_3: "Su empresa en Testa",
        title_4: "Su subdominio actual:",
        dominio: "sarasa44643423.testa.com",
        subdominio: "Cambiar subdominio",
        t_invoice: "Estado de facturación",
        t1_invoice: "VENCIDA",
        ct1_invoice: "statusfv",
        t2_invoice: "Última factura",
        btn_all_invoice: "VER TODAS LAS FACTURAS",
        date_invoice_t: "Fecha de emisión",
        date_invoice: "10/04/2018",
        date_num_invoice_t: "Número de factura",
        num_invoice: "6516-19225046",
        date_expire_t: "Fecha de vencimiento",
        date_expire: "26/04/2018",
        importe_t: "Importe",
        importe: "$547,50",
        btc_down_invoice: "Descargar",
        mostrar: true,
        btn_comprar: false
    },
    { id: 3,
        name: "Manuel Avila",
        btn_edit: "EDITAR PERFIL",
        btn_gestion: "Gestión",
        btn_online: "Tienda online",
        btn_ventas: "Ventas",
        btn_mark: "Marketing",
        btn_soport: "Soporte",
        title_1: "Su empresa en Testa",
        empresa_name: "Sarasa",
        title_2: "Su nombre en testa Gestión aparece en las notificacione por correo electrónico.\
    Su nombre en testa Gestión no afecta a la URL  de su sistema, que siempre es",
        mail_empresa: "https://sarasa44643423.testa.com",
        title_3: "Su empresa en Testa",
        title_4: "Su subdominio actual:",
        dominio: "sarasa44643423.testa.com",
        subdominio: "Cambiar subdominio",
        t_invoice: "Estado de facturación",
        t1_invoice: "Quedan 13 días de prueba",
        ct1_invoice: "statusfv",
        t2_invoice: "Última factura",
        btn_all_invoice: "VER TODAS LAS FACTURAS",
        date_invoice_t: "Fecha de emisión",
        date_invoice: "10/04/2018",
        date_num_invoice_t: "Número de factura",
        num_invoice: "6516-19225046",
        date_expire_t: "Fecha de vencimiento",
        date_expire: "26/04/2018",
        importe_t: "Importe",
        importe: "$547,50",
        btc_down_invoice: "Descargar",
        mostrar: false,
        btn_comprar: true
    },
    { id: 4,
        name: "Omar Orozco",
        btn_edit: "EDITAR PERFIL",
        btn_gestion: "Gestión",
        btn_online: "Tienda online",
        btn_ventas: "Ventas",
        btn_mark: "Marketing",
        btn_soport: "Soporte",
        title_1: "Su empresa en Testa",
        empresa_name: "Sarasa",
        title_2: "Su nombre en testa Gestión aparece en las notificacione por correo electrónico.\
    Su nombre en testa Gestión no afecta a la URL  de su sistema, que siempre es",
        mail_empresa: "https://sarasa44643423.testa.com",
        title_3: "Su empresa en Testa",
        title_4: "Su subdominio actual:",
        dominio: "sarasa44643423.testa.com",
        subdominio: "Cambiar subdominio",
        t_invoice: "Estado de facturación",
        t1_invoice: "VENCIDA",
        ct1_invoice: "statusfv",
        t2_invoice: "Última factura",
        btn_all_invoice: "VER TODAS LAS FACTURAS",
        date_invoice_t: "Fecha de emisión",
        date_invoice: "10/04/2018",
        date_num_invoice_t: "Número de factura",
        num_invoice: "6516-19225046",
        date_expire_t: "Fecha de vencimiento",
        date_expire: "26/04/2018",
        importe_t: "Importe",
        importe: "$547,50",
        btc_down_invoice: "Descargar",
        mostrar: true,
        btn_comprar: false
    },
    { id: 5,
        name: "Omar Orozco",
        btn_edit: "EDITAR PERFIL",
        btn_gestion: "Gestión",
        btn_online: "Tienda online",
        btn_ventas: "Ventas",
        btn_mark: "Marketing",
        btn_soport: "Soporte",
        title_1: "Su empresa en Testa",
        empresa_name: "Sarasa",
        title_2: "Su nombre en testa Gestión aparece en las notificacione por correo electrónico.\
    Su nombre en testa Gestión no afecta a la URL  de su sistema, que siempre es",
        mail_empresa: "https://sarasa44643423.testa.com",
        title_3: "Su empresa en Testa",
        title_4: "Su subdominio actual:",
        dominio: "sarasa44643423.testa.com",
        subdominio: "Cambiar subdominio",
        t_invoice: "Estado de facturación",
        t1_invoice: "VENCIDA",
        ct1_invoice: "statusfv",
        t2_invoice: "Última factura",
        btn_all_invoice: "VER TODAS LAS FACTURAS",
        date_invoice_t: "Fecha de emisión",
        date_invoice: "10/04/2018",
        date_num_invoice_t: "Número de factura",
        num_invoice: "6516-19225046",
        date_expire_t: "Fecha de vencimiento",
        date_expire: "26/04/2018",
        importe_t: "Importe",
        importe: "$547,50",
        btc_down_invoice: "Descargar",
        mostrar: true,
        btn_comprar: false
    },
];


/***/ }),

/***/ "./src/app/mock-facturas.ts":
/*!**********************************!*\
  !*** ./src/app/mock-facturas.ts ***!
  \**********************************/
/*! exports provided: FACTURAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACTURAS", function() { return FACTURAS; });
var FACTURAS = [
    { id: 1,
        emision: "10/04/2018",
        numero: "6516-19225046",
        fecha: "26/04/2018",
        importe: "$547,50"
    },
    { id: 2,
        emision: "10/04/2018",
        numero: "6516-19225048",
        fecha: "26/04/2018",
        importe: "$6007,50"
    },
    { id: 3,
        emision: "10/04/2018",
        numero: "6516-19225049",
        fecha: "26/04/2018",
        importe: "$897,50"
    },
];


/***/ }),

/***/ "./src/app/mock-planes.ts":
/*!********************************!*\
  !*** ./src/app/mock-planes.ts ***!
  \********************************/
/*! exports provided: PlANES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlANES", function() { return PlANES; });
var PlANES = [
    { id: 1,
        plan: "Mega",
        price: 200
    },
    { id: 2,
        plan: "Ultra",
        price: 300
    },
    { id: 3,
        plan: "Hiper",
        price: 400
    },
    { id: 4,
        plan: "Super",
        price: 500
    },
];


/***/ }),

/***/ "./src/app/planes.service.ts":
/*!***********************************!*\
  !*** ./src/app/planes.service.ts ***!
  \***********************************/
/*! exports provided: Planesservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planesservice", function() { return Planesservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_planes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-planes */ "./src/app/mock-planes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Planesservice = /** @class */ (function () {
    function Planesservice() {
    }
    Planesservice.prototype.getPlanes = function () {
        // TODO: send the message _after_ fetching the heroes
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_planes__WEBPACK_IMPORTED_MODULE_2__["PlANES"]);
    };
    Planesservice.prototype.getPlan = function (id) {
        // TODO: send the message _after_ fetching the hero
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_planes__WEBPACK_IMPORTED_MODULE_2__["PlANES"].find(function (planes) { return planes.id === id; }));
    };
    Planesservice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], Planesservice);
    return Planesservice;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/planes.ts":
/*!***************************!*\
  !*** ./src/app/planes.ts ***!
  \***************************/
/*! exports provided: Planes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planes", function() { return Planes; });
var Planes = /** @class */ (function () {
    function Planes() {
    }
    return Planes;
}());



/***/ }),

/***/ "./src/app/recuperar/recuperar.component.css":
/*!***************************************************!*\
  !*** ./src/app/recuperar/recuperar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Roboto:300i,400');\n\n*{\n    font-family: 'Roboto', sans-serif;\n    background: #ffffff;\n    \n}\n\nbody{\n    background: #ffffff;\n}\n\nheader{\n    height: 62px;\n    background: #ffffff;\n    color: #b10053;\n}\n\na{\n  text-decoration: none;\n}\n\n.imagen-principal{\n  height: auto;\n  min-height: 100vh;\n  width: 50%;\n  float: left;\n  background:#fff;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 0px;\n}\n\n.imagen-principal img{\n    height: auto;\n    min-height: 100vh;\n    margin: 0;\n    float: left;\n    padding: 0;\n}\n\n@media(min-width:1024px){\n    .formularios{\n        float: right;\n    }\n}\n\n@media(max-width:1024px){\n    .imagen-principal {\n        display: none !important;\n    } \n    .formularios{\n      width:100% !important;\n      /* margin-top: 48px !important; */\n      float: left;\n    }\n    .formularios .margen{\n      /* margin-top: 48px !important; */\n    }\n    \n\n}\n\n.formularios{\n  /* border: 1px solid; */\n    height: 100vh;\n    min-height: 768px;\n    background: #ffffff;\n    /* border: 1px solid #b10053; */\n    width: 50%;\n}\n\n.formularios .margen{\n  /* border: 1px solid; */\n    margin-right: calc((100% - 335px)/2);\n    margin-left: calc((100% - 335px)/2);\n    background: #ffffff;\n}\n\n.formularios .margen .margeninterno{\n  /* border: 1px solid; */\n    margin-top: 80px;\n    /* margin-left: 80px; */\n    background: #ffffff;\n    width: 335px;\n}\n\n.margeninterno .logo{\n    text-align:center;\n    height: 30px;\n}\n\n.margeninterno .logo img{\n    height: 30px;\n}\n\n.margeninterno .mail{\n    height: 48px;\n    text-align: center;\n    width: 100%;\n    margin-top: 58px;\n\n}\n\n.margeninterno .mail input{\n    width: 100%;\n    border-bottom: 1px solid #9b9b9b;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    height: 48px;\n    background: transparent;\n\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #9b9b9b;\n}\n\n.margeninterno .clave{\n    height: 48px;\n    text-align: center;\n    width: 100%;\n    margin-top: 39px;\n\n}\n\n.margeninterno .clave input{\n    width: 100%;\n    border-bottom: 1px solid #9b9b9b;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    height: 48px;\n    background: transparent;\n\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #9b9b9b;\n}\n\n.margeninterno .ingresar{\n    height: 48px;\n    text-align: center;\n    width: 100%;\n    margin-top: 71px;\n}\n\n.margeninterno .ingresar button{\n    width: 224px;\n    height: 40px;\n    border-radius: 3px;\n    background-color: #b10053;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: 0.6px;\n    text-align: center;\n    color: #ffffff;\n    cursor: pointer;\n}\n\n.margeninterno .ingresar button:hover{\n  background-color: #771241;\n  cursor: pointer;\n}\n\n.datos-subtitulo {\n    max-width: 336px;\n    height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 16px;\n    letter-spacing: 0.2px;\n    color: #4a4a4a;\n    text-align: center;\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 16px;\n}\n\n.mensaje-error{\n    height: 14px;\n    text-align: center;\n    width: 100%;\n    visibility: hidden;\n    margin-top: 2px;\n}\n\n.separador{\n    height: 14px;\n    /* text-align: center; */\n    width: 100%;\n    margin-top: 50px;\n}\n\n.loginredes{\n  margin-top: 38px;\n}\n\n.google-button{\n  float: left;\n  width: 160px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: #4285f4;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);\n}\n\n.google-button:hover{\n  background-color:#094d7d;\n  cursor: pointer;\n}\n\n.logo-google{\n  width: 38px;\n  height: 38px;\n  border-radius: 2px;\n  /* border-radius: 1px; */\n  background-color: #ffffff;\n  float: left;\n  margin-left: 1px;\n  margin-top: 1px;\n  border: 1px solid #ffffff;\n}\n\n.logo-google img{\n  height: 18px;\n  width: 18px;\n  float: left;\n  margin-left: 10px;\n  margin-top: 10px;\n  /* padding: 10px 10px; */\n}\n\n.text-button-google{\n  float: left;\n  margin-left: 11px;\n  margin-top: 13px;\n  width: 91px;\n  height: 16px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  background:transparent;\n  letter-spacing: 0.2px;\n  color: #ffffff;\n}\n\n.text-button-google:hover{\n  background-color:#094d7d;\n  cursor: pointer;\n}\n\n/* kkkkkkk  */\n\n.facebook-button{\n  float:right;\n  width: 160px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: #4867ad;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n\n.facebook-button:hover{\n  background: #3b5998;\n  cursor: pointer;\n}\n\n.logo-facebook{\n  width: 38px;\n  height: 38px;\n  border-radius: 2px;\n  background-color: #ffffff;\n  float: left;\n  margin-left: 1px;\n  margin-top: 1px;\n  border: 1px solid #ffffff;\n}\n\n.logo-facebook img{\n  height: 18px;\n  width: 18px;\n  float: left;\n  background-color: #4867ad;\n  margin-left: 10px;\n  margin-top: 10px;\n  /* padding: 10px 10px; */\n}\n\n.text-button-facebook{\n  float: left;\n  margin-left: 11px;\n  margin-top: 13px;\n  width: 91px;\n  height: 16px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  background:transparent;\n  letter-spacing: 0.2px;\n  color: #ffffff;\n}\n\n.recuperar{\n  height: 40px;\n  text-align: center;\n  width: 100%;\n  margin-top: 96px;\n  cursor: pointer;\n}\n\n.crear{\n  height: 40px;\n  text-align: center;\n  width: 100%;\n  margin-top: 8px;\n  cursor: pointer;\n}\n\n.recuperar .btn-recuperar{\n  margin-left: calc( (100% - 192px)/2 );\n  width: 192px;\n  height: 40px;\n  border-radius: 3px;\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: 0.6px;\n  color: #b10053;\n  padding-top: 7px;\n  cursor: pointer;\n  /* background-color: #eaeaea; */\n}\n\n.crear .btn-recuperar{\n  margin-left: calc( (100% - 240px)/2 );\n  width: 240px;\n  height: 40px;\n  border-radius: 3px;\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: 0.6px;\n  color: #b10053;\n  padding-top: 7px;\n  cursor: pointer;\n  /* background-color: #eaeaea; */\n}\n\n.crear .btn-recuperar:hover{\n  background-color: #eaeaea;\n  cursor: pointer;\n\n}\n\n.recuperar .btn-recuperar:hover{\n  background-color: #eaeaea;\n  cursor: pointer;\n\n}\n\n.bloque1{\n    margin-top: 89px;\n    text-align: center;\n}\n\n.bloque1 .texto1{\n  height: 24px;\n  font-family: 'Roboto';\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: center;\n  color: #0a4d7c;\n}\n\n.bloque2{\n    margin-top: 12px;\n    text-align: center;\n}\n\n.bloque2 .texto2{\n    height: 32px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.14;\n  letter-spacing: normal;\n  text-align: center;\n  color: #9b9b9b;\n}\n\n.bloque3{\n    margin-top: 65px;\n    text-align:left;\n}\n\n.bloque3 .texto2{\n    height: 32px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.14;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9b9b9b;\n}\n\n/* ---------- */\n\n.cuadro{\n    background-color: #fff;\n/*\tpadding-right: 15px;\n  padding-left: 15px;\n  */\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n  display: flex;\n  height: 768px;\n  /*margin-top: 60px;*/\n}\n\n.imagen{\n  /*margin-left: -15px;\n  margin-right: -15px;*/\n}\n\n.imagen img{\n  width: 100%;\n  height: 100%;\n  display: block;\n  \n}\n\n.datos{\n  padding-top: 9%;\n  padding-top: 0%;\n  /*overflow:hidden;\n  /*margin-left: -15px;\n  margin-right: -15px;*/\n  display: flex;\n  text-align: center;\n  padding: 0;\n  \n}\n\n/* */\n\n.firebaseui-idp-list>.firebaseui-list-item {\n  margin-bottom: 0px;\n  text-align: center;\n  float: left;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.firebaseui-idp-password{\n  display: none;\n}\n\n.firebaseui-idp-phone{\n  display: none;\n}\n\n.firebaseui-idp-google>.firebaseui-idp-text {\n  color: #fff;\n  padding-left: 10px;\n}\n\n.firebaseui-idp-google {\n  width: 100%;\n    height: 40px;\n    border-radius: 2px;\n    background-color: #4285f4;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);\n    padding: 1px;\n}\n\n.firebaseui-idp-google, .firebaseui-idp-google:hover, .mdl-button.firebaseui-idp-google:active, .mdl-button.firebaseui-idp-google:focus {\nbackground-color:#1a58bf;}\n\n.firebaseui-idp-facebook {\nwidth: 100%;\nheight: 40px;\nborder-radius: 2px;\nbackground-color: #4867ad;\nbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);\npadding: 1px;\n}\n\n.firebaseui-idp-facebook .firebaseui-idp-icon{\n  background-color: #4867ad;\n}\n\n.firebaseui-idp-icon-wrapper {\n  width: 38px;\n  height: 38px;\n  background-color: #fff;\n  text-align: center;\n  border-radius: 1px;\n}\n\n/**/\n\n.titulo{\n  margin-top: 120px;\n  display:block;\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 0%;\n}\n\n.titulo img{\n  display: inline-block;\n  height: 3.4em;\n  width: auto;\n}\n\n.titulo span{\n  color: #004d80;\n  font-size: 3.6em;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\n\n.datos-email{\n  display: block;\n  max-width: 336px;\n  margin: 0 auto;\n  margin-top:7%;\n  margin-top: 36px;\n  margin-bottom: 96px;\n  margin-bottom: 46px;\n}\n\n.datos-campo{\n  width: 100%;\n  height: 32px;\n  line-height: 1.5;\n  font-size: 16px;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  border-bottom :1px solid #9b9b9b;\n  margin-bottom: 26px;\n  margin-top: 18px;\n  color:#d0021b;\n  letter-spacing: 0.045em;\n}\n\n.datos-boton{\n  width: 224px;\n  height: 40px;\n  \n  font-size:16px;\n  margin: 0 auto;\n  font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 40px;\n    letter-spacing: 0.6px;\n    text-align: center;\n    color: #ffffff;\n  margin-top: 48px;\n  display: block;\n  transition: 0.3s;\n  cursor: pointer;\n  border-radius: 3px;\n  background-color: #b10053;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n}\n\n.firebaseui-idp-google:hover{\n  background-color:#094d7d;\n}\n\n.firebaseui-card-content {\n  padding: 0px; \n}\n\n.firebaseui-auth-container{\n  max-width: 336px;\n}\n\n.datos-boton:hover{\n  background-color: #771241;\n}\n\n.datos-subtitulo{\n  max-width: 336px;\n  height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 16px;\n    letter-spacing: 0.2px;\n    color: #4a4a4a;\n    text-align: center;\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 16px;\n}\n\n.datos-subtitulo span {\n  background: #fff;\n     padding: 0 10px 0 10px;\n  position: relative;\n  z-index: 5;\n}\n\n.datos-subtitulo:before {\n  content: \"\";\n  display: block;\n  border-top: solid 1px #eaeaea;\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  top: 50%;\n  z-index: 1;\n}\n\n.datos-links {\n  margin: 0 auto;\n  \n  text-align: center;\n  margin-top: 13%;\n  margin-top: 96px;\n  padding-bottom: 0%;\n  display: flex;\n  flex-direction: column;\n}\n\n.datos-links a{\n  text-decoration: none;\n  display: block;\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 40px;\n  height: 40px;\n  letter-spacing: 0.6px;\n  color: #b10053;\n  margin: 0 auto;\n  width: auto;\n  padding: 0 8px;\n}\n\n.datos-links a:hover{\n  background-color: #eaeaea;\n}\n\n.contenedor-datos{\n  display: block;\n  width: auto;\n  position: relative;\n  margin: auto;\n}\n\n.datos-campo::-webkit-input-placeholder {\n  color: #9b9b9b;\n  opacity: 1;\n}\n\n.datos-campo:-ms-input-placeholder {\n  color: #9b9b9b;\n  opacity: 1;\n}\n\n.datos-campo::-ms-input-placeholder {\n  color: #9b9b9b;\n  opacity: 1;\n}\n\n.datos-campo::placeholder {\n  color: #9b9b9b;\n  opacity: 1;\n}\n\n:-ms-input-placeholder {\n  color: #9b9b9b;\n}\n\n::-ms-input-placeholder { \n  color: #9b9b9b;\n}\n\n"

/***/ }),

/***/ "./src/app/recuperar/recuperar.component.html":
/*!****************************************************!*\
  !*** ./src/app/recuperar/recuperar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"imagen-principal\">\n        <img src=\"/assets/img/bg-admin.png\" alt=\"\">\n    </div>\n    <div class=\"formularios\">\n        <div class=\"margen\">\n            <div class=\"margeninterno\">\n                <div class=\"logo\">\n                    <img src=\"/assets/img/color.svg\" alt=\"\">\n                </div>\n                <div class=\"bloque1\">\n                    <span class=\"texto1\">\n                        {{ texto1 }}\n                    </span>\n                </div>\n\n                <div *ngIf=\"titulo\" class=\"bloque2\">\n                    <p class=\"texto2\">\n                        {{ texto2 }}\n                    </p>\n                </div>\n                <div *ngIf=\"campomail\" class=\"mail\">\n                    <input type=\"text\" name=\"mail\" id=\"mail\" placeholder=\"E-mail\">\n                </div>\n                <div *ngIf=\"campoclave\" class=\"mail\">\n                    <input type=\"text\" name=\"clave\" id=\"clave\" placeholder=\"Nueva contraseña\">\n                </div>\n                <div class=\"mensaje-error\">error</div>\n                <div *ngIf=\"mensajeerror\" class=\"bloque3\">\n                    <p class=\"texto2\">\n                        Requisitos:<br>-Debe tener al menos 5 caracteres<br>-Debe ser diferente de la dirección de correo electrónico<br>\n                    </p>\n                </div>\n\n                <div *ngIf=\"siguiente\"  class=\"ingresar\">\n                    <a (click)=\"recuperarClave();\" >\n                      <button > {{ textobtn }} </button>\n                    </a>\n                </div>\n                <div *ngIf=\"actualizar\"  class=\"ingresar\">\n                    <a (click)=\"handleResetPassword();\">\n                      <button > {{ textobtn }} </button>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/recuperar/recuperar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/recuperar/recuperar.component.ts ***!
  \**************************************************/
/*! exports provided: RecuperarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarComponent", function() { return RecuperarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _register_webservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/webservices.service */ "./src/app/register/webservices.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecuperarComponent = /** @class */ (function () {
    function RecuperarComponent(route, authService, router, flashMensaje, firebase, webservice) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.firebase = firebase;
        this.webservice = webservice;
        this.accion = "";
        this.titulo = true;
        this.campoclave = false;
        this.campomail = true;
        this.mensajeerror = false;
        this.siguiente = true;
        this.actualizar = false;
        this.texto1 = "Recuperar contraseña";
        this.texto2 = "Te enviaremos una nueva contraseña a tu correo electrónico";
        this.textobtn = "ENVIAR";
        this.urlbtn = "/recuperar/clave";
    }
    RecuperarComponent.prototype.ngOnInit = function () {
        this.accion = this.route.snapshot.paramMap.get('accion');
        if (this.accion == 'clave') {
            this.campomail = false;
            this.campoclave = true;
            this.siguiente = false;
            this.actualizar = true;
            this.texto1 = "Cambiar contraseña";
            this.textobtn = "CAMBIAR";
            this.urlbtn = "/";
        }
        if (this.accion == 'mensaje') {
            this.campomail = false;
            this.siguiente = false;
            this.texto2 = "Le hemos enviado un email de restablecimiento de contraseña a ";
            //this.ocultar = false;
            this.texto1 = "Cambiar contraseña";
        }
        $('body').loading('stop');
    };
    RecuperarComponent.prototype.recuperarClave = function () {
        var auth = this.firebase.auth();
        var emailAddress = $('#mail').val();
        auth.languageCode = 'es';
        //auth.currentUser.
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
            console.log('enviado');
            window.location.href = '/recuperar/mensaje';
        }).catch(function (error) {
            // An error happened.
            console.log('error');
        });
    };
    RecuperarComponent.prototype.handleResetPassword = function () {
        var mode = this.webservice.findGetParameter('mode');
        var actionCode = this.webservice.findGetParameter('oobCode');
        var apiKey = this.webservice.findGetParameter('apiKey');
        var continueUrl = this.webservice.findGetParameter('continueUrl');
        var auth = this.firebase.auth();
        var newPassword = $('#clave').val();
        // Verify the password reset code is valid.
        console.log(mode);
        console.log(actionCode);
        console.log(newPassword);
        console.log(apiKey);
        console.log(continueUrl);
        auth.verifyPasswordResetCode(actionCode).then(function (email) {
            var accountEmail = email;
            console.log(email);
            auth.confirmPasswordReset(actionCode, newPassword).then(function (resp) {
                console.log(resp);
            }).catch(function (error) {
                console.log(error);
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    RecuperarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recuperar',
            template: __webpack_require__(/*! ./recuperar.component.html */ "./src/app/recuperar/recuperar.component.html"),
            styles: [__webpack_require__(/*! ./recuperar.component.css */ "./src/app/recuperar/recuperar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__["FirebaseApp"],
            _register_webservices_service__WEBPACK_IMPORTED_MODULE_5__["WebservicesService"]])
    ], RecuperarComponent);
    return RecuperarComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400');\n\n*{\n    font-family: 'Roboto', sans-serif;\n    background: #ffffff;\n    \n}\n\nbody{\n    background: #ffffff;\n}\n\nheader{\n    height: 62px;\n    background: #ffffff;\n    color: #b10053;\n}\n\na{\n  text-decoration: none;\n}\n\n.imagen-principal{\n  height: auto;\n  min-height: 100vh;\n  width: 50%;\n  float: left;\n  background:#fff;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 0px;\n}\n\n.imagen-principal img{\n    height: auto;\n    min-height: 100vh;\n    margin: 0;\n    float: left;\n    padding: 0;\n}\n\n@media(min-width:1024px){\n    .formularios{\n        float: right;\n    }\n    .margeninterno .logo{\n      text-align:center;\n      /* height: 30px; */\n      position: absolute;\n      height: 24px;\n      top: 0;\n      margin-top: 24px;\n      /* right: 50%; */\n      right: calc(50% - 80px);;\n  }\n\n  .separacion1{\n    margin-top: 23px;\n  }\n}\n\n@media(max-width:1024px){\n    .imagen-principal {\n        display: none !important;\n    } \n    .formularios{\n      width:100% !important;\n      margin-top: 48px !important;\n      float: left;\n    }\n    .formularios .margen{\n      /* margin-top: 48px !important; */\n    }\n    .margeninterno .logo{\n      text-align:center;\n      /* height: 30px; */\n      position: absolute;\n      height: 24px;\n      top: 0;\n      margin-top: 16px;\n      margin-left: 16px;\n      /* right: 50%; */\n      left: 0;\n  }\n  .bloque1{\n    margin-top: -38px !important;\n  }\n\n  .separacion1{\n    margin-top: 24px;\n  }\n    \n\n}\n\n.formularios{\n  /* border: 1px solid; */\n    height: 100vh;\n    min-height: 100%;\n    background: #ffffff;\n    /* border: 1px solid #b10053; */\n    width: 50%;\n}\n\n.formularios .margen{\n  /* border: 1px solid; */\n    margin-right: calc((100% - 335px)/2);\n    margin-left: calc((100% - 335px)/2);\n    background: #ffffff;\n}\n\n.formularios .margen .margeninterno{\n  /* border: 1px solid; */\n    margin-top: 80px;\n    /* margin-left: 80px; */\n    background: #ffffff;\n    width: 335px;\n}\n\n.bloque1{\n  margin-top: 70px;\n  text-align: center;\n}\n\n.bloque1 .texto1{\nheight: 24px;\nfont-family: 'Roboto';\nfont-size: 24px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.33;\nletter-spacing: normal;\ntext-align: center;\ncolor: #0a4d7c;\n}\n\n.bloque2{\n  margin-top: 12px;\n  text-align: center;\n}\n\n.bloque2 .texto2{\n  height: 32px;\nfont-family: 'Roboto';\nfont-size: 14px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.14;\nletter-spacing: normal;\ntext-align: center;\ncolor: #9b9b9b;\n}\n\n.bloque3{\n  margin-top: 65px;\n  text-align:left;\n}\n\n.bloque3 .texto2{\n  height: 32px;\nfont-family: 'Roboto';\nfont-size: 14px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.14;\nletter-spacing: normal;\ntext-align: left;\ncolor: #9b9b9b;\n}\n\n.margeninterno .logo{\n    /* text-align:center; */\n    /* position: absolute;\n    height: 24px;\n    top: 0;\n    margin-top: 24px;\n    right: calc(50% - 80px); */\n}\n\n.margeninterno .logo img{\n    height: 24px;\n}\n\n.margeninterno .mail{\n    height: 48px;\n    text-align: center;\n    width: 100%;\n    margin-top: 58px;\n\n}\n\n.margeninterno .campos{\n  height: 48px;\n  text-align: center;\n  width: 100%;\n  margin-top: 38px;\n\n}\n\n.productos{\n  width: 100%;\n  height: 72px;\n  border-radius: 8px;\n  background-color: #ffffff;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n}\n\n.productos:hover{\n  border-radius: 8px;\n    background-color: #ffffff;\n    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12);\n    cursor: pointer;\n}\n\n.productos img{\n  width: 49px;\n  float: left;\n  margin-top: 16px;\n  margin-left: 32px;\n}\n\n.productos span{\n  width: 200px;\n  float: left;\n  margin-top: 24px;\n  margin-left: 15px;\n  height: 24px;\n  font-family: 'Roboto';\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  \n  color: #4a4a4a;\n}\n\n.bloque4{\n width: 100%; \n text-align: center;\n margin-top: 32px;\n margin-bottom: 16px;\n}\n\n.bloque4 .link{\n  width: auto;\n  height: 40px;\n  text-align: center;\n  align-items: center;\n  align-content: center;\n  border-radius: 2px;\n  border: solid 1px #eaeaea;\n}\n\n.bloque4 .link span{\n    background: transparent;\n    height: 24px;\n    margin-top: 7px;\n    width: 100%;\n    margin-left: 11px;\n    float: left;\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4a90e2;\n}\n\n.center{\n  text-align: center;\n}\n\n.margeninterno .mail input{\n    width: 100%;\n    border-bottom: 1px solid #9b9b9b;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    height: 48px;\n    background: transparent;\n\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #9b9b9b;\n}\n\n.margeninterno .campos input{\n  width: 100%;\n  border-bottom: 1px solid #9b9b9b;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  height: 48px;\n  background: transparent;\n\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: #9b9b9b;\n}\n\n.margeninterno .clave{\n    height: 48px;\n    text-align: center;\n    width: 100%;\n    margin-top: 39px;\n\n}\n\n.margeninterno .clave input{\n    width: 100%;\n    border-bottom: 1px solid #9b9b9b;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    height: 48px;\n    background: transparent;\n\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #9b9b9b;\n}\n\n.margeninterno .ingresar{\n    height: 48px;\n    text-align: center;\n    width: 100%;\n    margin-top: 71px;\n}\n\n.margeninterno .ingresar input{\n    width: 224px;\n    height: 40px;\n    border-radius: 3px;\n    background-color: #b10053;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: 0.6px;\n    text-align: center;\n    color: #ffffff;\n}\n\n.margen-bloque{\n  width: 232px;\n  margin-left: calc((100% - 232px)/2);\n}\n\n.margeninterno .ingresar input:hover{\n  background-color: #771241;\n  cursor: pointer;\n}\n\n.margeninterno .ingresar button{\n  width: 224px;\n  height: 40px;\n  border-radius: 3px;\n  background-color: #b10053;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: 0.6px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.margeninterno .ingresar button:hover{\nbackground-color: #771241;\ncursor: pointer;\n}\n\n.datos-subtitulo {\n    max-width: 336px;\n    height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 16px;\n    letter-spacing: 0.2px;\n    color: #4a4a4a;\n    text-align: center;\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 16px;\n}\n\n.terminos-condiciones{\n  float: left;\n  margin-top: 49px;\n  width: 100%;\n  height: 16px;\n  text-align: center;\n}\n\n.terminos-condiciones a{\n  text-decoration: underline !important;\n}\n\n.terminos-condiciones span{\n  width: 290px;\n  height: 16px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.14;\n  letter-spacing: normal;\n  text-align: center;\n  color: #9b9b9b;\n}\n\n.mensaje-error{\n    height: 14px;\n    text-align: left;\n    width: 100%;\n    color: red;\n    font-size: 12px;\n    visibility: hidden;\n    margin-top: 2px;\n}\n\n.empleados-text{\n  margin-top: -15px !important;\n}\n\n.puesto-text{\n  margin-top: 0px !important;\n}\n\n.icon-dow2{\n  float: right;\n}\n\n.mensaje-descripcion{\n  height: 14px;\n  font-family: 'Roboto';\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #9b9b9b;\n  /* text-align: center; */\n  width: 100%;\n  /* visibility: hidden; */\n  margin-top: 2px;\n}\n\n.separador{\n    height: 14px;\n    /* text-align: center; */\n    width: 100%;\n    margin-top: 50px;\n}\n\n.loginredes{\n  margin-top: 38px;\n}\n\n.google-button{\n  float: left;\n  width: 160px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: #4285f4;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);\n}\n\n.google-button:hover{\n  background-color:#094d7d;\n  cursor: pointer;\n}\n\n.logo-google{\n  width: 38px;\n  height: 38px;\n  border-radius: 2px;\n  /* border-radius: 1px; */\n  background-color: #ffffff;\n  float: left;\n  margin-left: 1px;\n  margin-top: 1px;\n  border: 1px solid #ffffff;\n}\n\n.logo-google img{\n  height: 18px;\n  width: 18px;\n  float: left;\n  margin-left: 10px;\n  margin-top: 10px;\n  /* padding: 10px 10px; */\n}\n\n.text-button-google{\n  float: left;\n  margin-left: 11px;\n  margin-top: 13px;\n  width: 91px;\n  height: 16px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  background:transparent;\n  letter-spacing: 0.2px;\n  color: #ffffff;\n}\n\n.text-button-google:hover{\n  background-color:#094d7d;\n  cursor: pointer;\n}\n\n/* kkkkkkk  */\n\n.facebook-button{\n  float:right;\n  width: 160px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: #4867ad;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n\n.facebook-button:hover{\n  background: #3b5998;\n  cursor: pointer;\n}\n\n.logo-facebook{\n  width: 38px;\n  height: 38px;\n  border-radius: 2px;\n  background-color: #ffffff;\n  float: left;\n  margin-left: 1px;\n  margin-top: 1px;\n  border: 1px solid #ffffff;\n}\n\n.logo-facebook img{\n  height: 18px;\n  width: 18px;\n  float: left;\n  background-color: #4867ad;\n  margin-left: 10px;\n  border-radius: 2px;\n  margin-top: 10px;\n  /* padding: 10px 10px; */\n}\n\n.text-button-facebook{\n  float: left;\n  margin-left: 11px;\n  margin-top: 13px;\n  width: 91px;\n  height: 16px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  background:transparent;\n  letter-spacing: 0.2px;\n  color: #ffffff;\n}\n\n.recuperar{\n  height: 40px;\n  text-align: center;\n  width: 100%;\n  margin-top: 96px;\n  cursor: pointer;\n}\n\n.crear{\n  height: 40px;\n  text-align: center;\n  width: 100%;\n  margin-top: 8px;\n  cursor: pointer;\n}\n\n.recuperar .btn-recuperar{\n  margin-left: calc( (100% - 192px)/2 );\n  width: 192px;\n  height: 40px;\n  border-radius: 3px;\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: 0.6px;\n  color: #b10053;\n  padding-top: 7px;\n  cursor: pointer;\n  /* background-color: #eaeaea; */\n}\n\n.crear .btn-recuperar{\n  margin-left: calc( (100% - 240px)/2 );\n  width: 240px;\n  height: 40px;\n  border-radius: 3px;\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: 0.6px;\n  color: #b10053;\n  padding-top: 7px;\n  cursor: pointer;\n  /* background-color: #eaeaea; */\n}\n\n.crear .btn-recuperar:hover{\n  background-color: #eaeaea;\n  cursor: pointer;\n\n}\n\n.recuperar .btn-recuperar:hover{\n  background-color: #eaeaea;\n  cursor: pointer;\n\n}\n\n.campos ul{\n    list-style: none;\n    text-align: left;\n    width: 100%;\n    border-bottom: 1px solid;\n    cursor: pointer;\n    background: transparent;\n\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #807979;\n}\n\n.max-widt{\n  width: 100% !important;;\n}\n\n.campos #btn-planes{\n  display: none;\n}\n\n.campos .submenu-planes{\n  display: none;\n  list-style: none;\n  background: #ffffff;\n  height: 112px;\n  width: 149px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14);\n}\n\n.campos .submenu-planes li{\n  cursor: pointer;\n  padding: 1px 5px;\n  padding: 8px 7px;\n}\n\n.campos .submenu-planes li:hover{\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n.campos .submenu-planes a{\n  font-size: 14px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.43;\nletter-spacing: 0.3px;\ncolor: rgba(0, 0, 0, 0.87);\n}\n\n#btn-planes:checked ~ .submenu-planes{\n  display: block;\n  position: absolute;\n  height: auto;\n  width: 335px;\n  margin-top: 6px;\n  background: #ffffff;\n}\n\n.datos-subtitulo{\n  max-width: 336px;\n  height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 16px;\n    letter-spacing: 0.2px;\n    color: #4a4a4a;\n    text-align: center;\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 16px;\n}\n\n.datos-subtitulo span {\n  background: #fff;\n     padding: 0 10px 0 10px;\n  position: relative;\n  z-index: 5;\n}\n\n.datos-subtitulo:before {\n  content: \"\";\n  display: block;\n  border-top: solid 1px #eaeaea;\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  top: 50%;\n  z-index: 1;\n}\n\n:-ms-input-placeholder {\n  color: #9b9b9b;\n}\n\n::-ms-input-placeholder { \n  color: #9b9b9b;\n}\n\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"imagen-principal\">\n      <img src=\"/assets/img/bg-admin.png\" alt=\"\">\n  </div>\n  <div *ngIf=\"step0\" class=\"formularios\" id=\"formularios\">\n      <div class=\"margen\">\n          <div class=\"margeninterno\">\n              <div class=\"logo\">\n                  <img src=\"/assets/img/shape2.svg\" alt=\"\">\n              </div>\n              <div class=\"bloque1\">\n                    <span class=\"texto1\">\n                        Comencemos!\n                    </span>\n                </div>\n                <div class=\"bloque2\">\n                    <p class=\"texto2\">\n                        Regístrece con su dirección de trabajo\n                    </p>\n                </div>\n                <form (submit)=\"onSubmitAddUser()\" id=\"form1\">  \n                    <div class=\"mail\">\n                        <input type=\"text\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" placeholder=\"E-mail\">\n                    </div>\n                    <div id=\"error-correo\" class=\"mensaje-error\">error</div>\n                    <div class=\"clave\">\n                        <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" placeholder=\"Clave\">\n                    </div>\n                    <div id=\"error-clave\" class=\"mensaje-error\">error</div>\n                    <div class=\"ingresar\">\n                        <!-- <a href=\"/register/step1\"> -->\n                            <input type=\"submit\" value=\"INGRESAR\">\n                        <!-- </a> -->\n                    </div>\n                </form>\n              <div class=\"separador\">\n                  <div class=\"datos-subtitulo\"><span>Ingresar con:</span></div>\n              </div>\n              <div class=\"loginredes\">\n                    <div class=\"google-button\" (click)=\"onClickGoogleLogin();\">\n                        <div class=\"logo-google\">\n                            <img src=\"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg\" alt=\"\">\n                        </div>\n                        <div class=\"text-button-google\">\n                                Google\n                        </div>\n                    </div>\n\n                    <div class=\"facebook-button\" (click)=\"onClickFacebookLogin();\">\n                        <div class=\"logo-facebook\">\n                            <img src=\"/assets/img/Facebook_logo.png\" alt=\"\">\n                        </div>\n                        <div class=\"text-button-facebook\">\n                                Facebook\n                        </div>\n                    </div>\n                        <!--  -->\n                </div>\n              \n          </div>\n          <div class=\"terminos-condiciones\">\n              <span>\n                    <a>Politica de privacidad</a>  | <a>Términos y condiciones</a>\n              </span>\n          </div>\n      </div>\n  </div>\n\n  <div *ngIf=\"step1\" class=\"formularios\" id=\"formularios\">\n        <div class=\"margen\">\n            <div class=\"margeninterno\">\n                <div class=\"logo\">\n                    <img src=\"/assets/img/shape2.svg\" alt=\"\">\n                </div>\n                <div class=\"bloque1\">\n                    <div class=\"margen-bloque\">\n                        <span class=\"texto1\">\n                                Elija un producto para su empresa\n                        </span>\n                    </div>\n                      \n                </div>\n                <div *ngFor=\"let prod of product\">\n                <a (click)=\"GuardarMisServicios(prod.id,prod.label,prod.domain,prod.provisioning)\">\n                    <div class=\"productos separacion1\">\n                        <img src=\"/assets/img/{{ prod.image }}\" alt=\"\">\n                        <span>{{ prod.label }}</span>\n                    </div>\n                </a>\n                </div>\n                <div class=\"terminos-condiciones\">\n                    <span>\n                            <a>Politica de privacidad</a>  | <a>Términos y condiciones</a>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"step2\" class=\"formularios\" id=\"formularios\">\n        <div class=\"margen\">\n            <div class=\"margeninterno\">\n                <div class=\"logo\">\n                    <img src=\"/assets/img/shape2.svg\" alt=\"\">\n                </div>\n                <div class=\"bloque1\">\n                      <span class=\"texto1\">\n                            Contanos sobre tu empresa\n                      </span>\n                </div>\n                <div class=\"campos\">\n                    <input type=\"text\" name=\"nameORG\" id=\"nameORG\" placeholder=\"Nombre\">\n                </div>\n                <div class=\"mensaje-descripcion\">Ingrese el nombre de su empresa</div>\n                <div id=\"error-empresa\" class=\"mensaje-error\">error</div>\n                <div class=\"campos\">\n                    <label for=\"btn-planes\" class=\"text-btn-planes\">\n                        <ul>\n                            <li>\n                            <input type=\"checkbox\" name=\"\" id=\"btn-planes\">\n                            <span id=\"plan-select-text\"><a>1 - 9</a></span> <span class=\"icon-sort-down icon-dow2\"></span>\n                            <ul class=\"submenu-planes\">\n                                <label for=\"btn-planes\" (click)=\"ActualizarValor('Más de 5000')\"><li>Más de 5000</li></label>\n                                <label for=\"btn-planes\" (click)=\"ActualizarValor('1000 -  4999')\"><li>1000 -  4999</li></label>\n                                <label for=\"btn-planes\" (click)=\"ActualizarValor('500 - 999')\"><li>500 - 999</li></label>\n                                <label for=\"btn-planes\" (click)=\"ActualizarValor('250 - 499')\"><li>250 - 499</li></label>\n                                <label for=\"btn-planes\" (click)=\"ActualizarValor('100 - 249')\"><li>100 - 249</li></label>\n                                <label for=\"btn-planes\" (click)=\"ActualizarValor('50 - 99')\"><li>50 - 99</li></label>\n                                <label for=\"btn-planes\" (click)=\"ActualizarValor('10 - 49')\"><li>10 - 49</li></label>\n                                <label for=\"btn-planes\" (click)=\"ActualizarValor('1 - 9')\"><li>1 - 9</li></label>\n                            </ul>\n                            </li>\n                        </ul>\n                    </label>\n                </div>\n                <div class=\"mensaje-descripcion empleados-text\">Seleccione #de empleados.</div>\n                <div id=\"error-empleados\" class=\"mensaje-error\">error</div>\n                <div class=\"ingresar\">\n                  <a (click)=\"GuardarMiOrgnaizacion();\">\n                    <button class=\"max-widt\">SIGUIENTE</button>\n                  </a>\n                </div>\n                <div class=\"terminos-condiciones\">\n                    <span>\n                            <a>Politica de privacidad</a>  | <a>Términos y condiciones</a>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"step3\" class=\"formularios\" id=\"formularios\">\n        <div class=\"margen\">\n            <div class=\"margeninterno\">\n                <div class=\"logo\">\n                    <img src=\"/assets/img/shape2.svg\" alt=\"\">\n                </div>\n                <div class=\"bloque1\">\n                      <span class=\"texto1\">\n                            Contanos sobre vos\n                      </span>\n                </div>\n                <div class=\"campos\">\n                    <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Nombre\">\n                </div>\n                <div id=\"error-name\" class=\"mensaje-error\">error</div>\n                <div class=\"campos\">\n                    <input type=\"text\" name=\"lastname\" id=\"lastname\" placeholder=\"Apellido\">\n                </div>\n                <div id=\"error-lastname\" class=\"mensaje-error\">error</div>\n                <div class=\"campos\">\n                    <input type=\"text\" name=\"phone\" id=\"phone\" placeholder=\"Teléfono\">\n                </div>\n                <div id=\"error-phone\" class=\"mensaje-error\">error</div>\n                <div class=\"campos\">\n                    <label for=\"btn-planes\" class=\"text-btn-planes\">\n                        <ul>\n                            <li>\n                            <input type=\"checkbox\" name=\"\" id=\"btn-planes\">\n                            <span id=\"plan-select-text\"><a>Departamento</a></span> <span class=\"icon-sort-down icon-dow2\"></span>\n                            <ul class=\"submenu-planes\">\n                                <label *ngFor=\"let sec of sector\" for=\"btn-planes\" (click)=\"ActualizarValor(sec.name)\"><li>{{ sec.name }}</li></label>\n                            </ul>\n                            </li>\n                        </ul>\n                    </label>\n                </div>\n                <div id=\"error-dept\" class=\"mensaje-error\">error</div>\n                <div class=\"campos puesto-text\">\n                    <input type=\"text\" name=\"job\" id=\"job\" placeholder=\"Su puesto\">\n                </div>\n                <div class=\"mensaje-descripcion\">Ingrese el título de su trabajo</div>\n                <div id=\"error-trabajo\" class=\"mensaje-error\">error</div>\n                <div class=\"ingresar\">\n                  <a (click)=\"GuardarMiContacto();\">\n                    <button class=\"max-widt\">SIGUIENTE</button>\n                  </a>\n              </div>\n                <div class=\"terminos-condiciones\">\n                    <span>\n                            <a>Politica de privacidad</a>  | <a>Términos y condiciones</a>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"step4\" class=\"formularios\" id=\"formularios\">\n        <div class=\"margen\">\n            <div class=\"margeninterno\">\n                <div class=\"logo\">\n                    <img src=\"/assets/img/shape2.svg\" alt=\"\">\n                </div>\n                <div class=\"bloque1\">\n                      <span class=\"texto1\">\n                            {{ mensajeStep4 }} {{ serviceStep4 }}\n                      </span>\n                </div>\n                <div *ngIf=\"viewStep4\" class=\"bloque4\">\n                    <div class=\"link\">\n                        <span>\n                        https://{{ dominioStep4 }}\n                        </span>\n                    </div>\n                </div>\n                <div *ngIf=\"viewStep4\" class=\"mensaje-descripcion center\">Aquí es donde accederá a su nueva cuenta. Ponga como favorito este sitio</div>\n            </div>\n            \n        </div>\n    </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent, productos, sectores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productos", function() { return productos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectores", function() { return sectores; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _webservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webservices.service */ "./src/app/register/webservices.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, authService, router, flashMensaje, firebase, webservice) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.firebase = firebase;
        this.webservice = webservice;
        this.accion = "";
        this.product = [];
        this.sector = [];
        // public httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        this.step0 = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  $('.formularios').loading({
        //   overlay: $("#custom-overlay")
        // });
        //capturo pasos del registro
        console.log('1');
        this.accion = this.route.snapshot.paramMap.get('accion');
        //si accion es null activo la primera visual
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                auth.getIdToken(true).then(function (idToken) {
                    _this.webservice.putAsociarMiOrganizacion(idToken, {}).subscribe(function (data) {
                        console.log(data);
                        _this.idToken = idToken;
                        if ((data['organization'] == null) || (data['organization'] == 'null') || data == null) {
                            _this.step0 = true;
                            _this.viewStep4 = false;
                            _this.habilitarVisuales('step1');
                            $('body').loading('stop');
                        }
                        else {
                            window.location.href = '/suite';
                        }
                    }, function (error) {
                        console.log(error);
                        $('body').loading('stop');
                    });
                }).catch(function (_error) {
                    _this.step0 = true;
                    _this.viewStep4 = false;
                    console.log('2');
                    $('body').loading('stop');
                });
            }
            else {
                _this.step0 = true;
                _this.viewStep4 = false;
                console.log('3');
                $('body').loading('stop');
            }
        });
        console.log('4');
        $('.formularios').loading('stop');
        // if(!this.accion){
        //   this.step0 = true;
        //   this.viewStep4 = false;
        //   // $('.formularios').loading('stop');
        //   $('body').loading('stop');
        // }else{
        //   //en caso contrario capturo el tokenid
        // }
    };
    RegisterComponent.prototype.onSubmitAddUser = function () {
        var _this = this;
        var matchedCase = new Array();
        matchedCase.push("[$@$!%*#?&]"); // Special Charector
        matchedCase.push("[A-Z]"); // Uppercase Alpabates
        matchedCase.push("[0-9]"); // Numbers
        matchedCase.push("[a-z]");
        var ctr = 0;
        for (var i = 0; i < matchedCase.length; i++) {
            if (new RegExp(matchedCase[i]).test(this.password)) {
                ctr++;
            }
        }
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if ((this.password.length >= 7) && (ctr >= 2) && (regex.test($('#email').val().trim()))) {
            $('.formularios').loading({
                overlay: $("#custom-overlay")
            });
            this.authService.registerUser(this.email, this.password).then(function (res) {
                _this.authService.getAuth().subscribe(function (auth) {
                    if (auth) {
                        auth.getIdToken(true).then(function (idToken) {
                            _this.idToken = idToken;
                            _this.webservice.putAsociarMiOrganizacion(idToken, {}).subscribe(function (data) {
                                if ((data['organization'] == null) || (data['organization'] == 'null') || data == null) {
                                    _this.habilitarVisuales('step1');
                                }
                                else {
                                    window.location.href = '/suite';
                                }
                            }, function (error) {
                                $('.formularios').loading('stop');
                            });
                        }).catch(function (_error) {
                            $('.formularios').loading('stop');
                        });
                    }
                    else {
                        $('.formularios').loading('stop');
                    }
                });
            }).catch(function (_err) {
                $('.formularios').loading('stop');
                $('#error-correo').css('visibility', 'visible');
                $('#email').css({ 'color': 'red', 'border-bottom': '1px solid red' });
                $('#error-correo').text('El correo que ingreso ya existe en el sistema.');
            });
        }
        else {
            if (regex.test($('#email').val().trim())) {
            }
            else {
                $('#error-correo').css('visibility', 'visible');
                $('#email').css({ 'color': 'red', 'border-bottom': '1px solid red' });
                $('#error-correo').text('Debe ingresar un correo valido');
            }
            if ((this.password.length >= 7) && (ctr >= 2)) {
            }
            else {
                $('#error-clave').css('visibility', 'visible');
                $('#password').css({ 'color': 'red', 'border-bottom': '1px solid red' });
                $('#error-clave').text('La contraseña debe contener al menos 7 caracteres alfanumericos');
            }
        }
    };
    RegisterComponent.prototype.onClickGoogleLogin = function () {
        var _this = this;
        this.authService.loginGoogle().then(function (res) {
            _this.authService.getAuth().subscribe(function (auth) {
                if (auth) {
                    auth.getIdToken(true).then(function (idToken) {
                        _this.idToken = idToken;
                        _this.webservice.putAsociarMiOrganizacion(idToken, {}).subscribe(function (data) {
                            if ((data['organization'] == null) || (data['organization'] == 'null') || data == null) {
                                _this.habilitarVisuales('step1');
                            }
                            else {
                                window.location.href = '/suite';
                            }
                        }, function (error) {
                            $('.formularios').loading('stop');
                        });
                    }).catch(function (_error) {
                        $('.formularios').loading('stop');
                    });
                }
                else {
                    $('.formularios').loading('stop');
                }
            });
        }).catch(function (err) {
            $('.formularios').loading('stop');
        });
    };
    RegisterComponent.prototype.onClickFacebookLogin = function () {
        var _this = this;
        this.authService.loginFacebook()
            .then(function (res) {
            console.log(res);
            _this.authService.getAuth().subscribe(function (auth) {
                if (auth) {
                    auth.getIdToken(true).then(function (idToken) {
                        console.log(idToken);
                        _this.webservice.putAsociarMiOrganizacion(idToken, {}).subscribe(function (data) {
                            console.log(data);
                            if ((data['organization'] == null) || (data['organization'] == 'null') || data == null) {
                                window.location.href = '/registro/step1';
                            }
                            else {
                                window.location.href = '/suite';
                            }
                        }, function (error) {
                            console.log(error);
                            // this.router.navigate(['/registro/step2']);
                            // window.location.href = '/registro/step2';
                        });
                    }).catch(function (_error) {
                        _this.idToken = "";
                        console.log('error');
                        // this.router.navigate(['/registro']);
                    });
                }
                else {
                    console.log('error');
                    _this.idToken = "";
                    // this.router.navigate(['/registro']);
                }
            });
        }).catch(function (err) { return console.log(err.message); });
    };
    RegisterComponent.prototype.habilitarVisuales = function (accion, idService) {
        var _this = this;
        if (idService === void 0) { idService = ""; }
        if (accion == 'step2') {
            this.webservice.getProductos(this.idToken).subscribe(function (data) {
                //console.log(data);
                var keys = Object.keys(data);
                var i = 0;
                keys.forEach(function (k) {
                    var c = Array(data[k]);
                    var p = new productos();
                    p.id = k;
                    p.image = c[0]['image'];
                    p.label = c[0]['label'];
                    p.name = c[0]['name'];
                    p.domain = c[0]['domain'];
                    p.provisioning = c[0]['provisioning'];
                    _this.product.push(p);
                    console.log(p);
                });
                _this.step0 = false;
                _this.step1 = true;
                _this.step2 = false;
                _this.step3 = false;
                _this.step4 = false;
                $('.formularios').loading('stop');
            }, function (error) {
                console.log(error);
            });
            // console.log(resp);
        }
        if (accion == 'step1') {
            this.step0 = false;
            this.step1 = false;
            this.step2 = true;
            this.step3 = false;
            this.step4 = false;
            $('.formularios').loading('stop');
        }
        if (accion == 'step3') {
            console.log('paso 3');
            console.log(idService);
            this.webservice.getConsultarSectores(this.idToken).subscribe(function (data) {
                //console.log(data);
                var keys = Object.keys(data);
                var i = 0;
                keys.forEach(function (k) {
                    var c = Array(data[k]);
                    var p = new sectores();
                    p.id = k;
                    p.label = c[0]['label'];
                    p.name = c[0]['name'];
                    _this.sector.push(p);
                });
                _this.step0 = false;
                _this.step1 = false;
                _this.step2 = false;
                _this.step3 = true;
                _this.step4 = false;
                $('.formularios').loading('stop');
            }, function (error) {
                console.log(error);
                $('.formularios').loading('stop');
            });
        }
        if (accion == 'step4') {
            console.log('paso 4');
            console.log(idService);
            console.log(this.idService);
            this.webservice.getConsultarServicioOrganizacion(this.idToken, idService).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                var keys, subdomainp, code;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(data);
                            console.log(data['arrayServices']);
                            keys = Object.keys(data['arrayServices']);
                            subdomainp = "";
                            keys.forEach(function (k) {
                                console.log(k);
                                // let c = Array(data[k]);
                                subdomainp = k;
                            });
                            console.log(data['arrayServices'][subdomainp]['subdomain']);
                            this.dominioStep4 = data['arrayServices'][subdomainp]['subdomain'] + this.productDomain;
                            console.log('service producto');
                            console.log(this.viewStep4);
                            if (!(!!this.viewStep4)) {
                                this.mensajeStep4 = 'En breve nos contactaremos con vos para mostrarte el servicio.';
                            }
                            else {
                                this.mensajeStep4 = 'Estamos configurando su sistema de ';
                            }
                            this.step0 = false;
                            this.step1 = false;
                            this.step2 = false;
                            this.step3 = false;
                            this.step4 = true;
                            $('.formularios').loading('stop');
                            code = "400";
                            if (!(!!this.viewStep4)) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            // var request;
                            // if(window.XMLHttpRequest)
                            //     request = new XMLHttpRequest();
                            // else
                            //     request = new ActiveXObject("Microsoft.XMLHTTP");
                            // request.open('GET', 'http://www.mozilla.org', false);
                            // request.send(); // there will be a 'pause' here until the response to come.
                            // // the object request will be actually modified
                            // if (request.status === 200) {
                            //     code = "200";
                            // }
                            this.webservice.validarUrlServicios(this.dominioStep4).subscribe(function (data) {
                                code = "200";
                            }, function (error) {
                                code = "400";
                            });
                            console.log(code);
                            return [4 /*yield*/, this.sleep(1000)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            if (code != "200") return [3 /*break*/, 1];
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); }, function (error) {
                console.log(error);
                console.log(error['error']['text']);
                $('.formularios').loading('stop');
            });
        }
        console.log('Habilitar Visuales');
    };
    RegisterComponent.prototype.sleep = function (ms) {
        if (ms === void 0) { ms = 0; }
        return new Promise(function (r) { return setTimeout(r, ms); });
    };
    RegisterComponent.prototype.ActualizarValor = function (dat) {
        $('#plan-select-text').text(dat);
    };
    RegisterComponent.prototype.GuardarMisServicios = function (idServicios, labelservicio, domain, provisioning) {
        var _this = this;
        $('.formularios').loading({
            overlay: $("#custom-overlay")
        });
        var productID = idServicios;
        var productLabel = labelservicio;
        this.productDomain = domain;
        this.serviceStep4 = labelservicio;
        console.log('provisioning: ' + provisioning);
        this.viewStep4 = provisioning;
        console.log('service:' + this.viewStep4);
        var body = { 'productID': productID, 'productLabel': productLabel };
        console.log(body);
        console.log(this.idToken);
        this.webservice.postMisProductos(this.idToken, body).subscribe(function (data) {
            console.log(data);
            console.log(data['serviceId']);
            _this.idService = data['serviceId'];
            _this.webservice.idService = data['serviceId'];
            // this.router.navigate(['/registro/step2']);
            _this.habilitarVisuales('step3', data['serviceId']);
            //window.location.href = '/registro/step3';
        }, function (error) {
            console.log(error);
            $('.formularios').loading('stop');
        });
    };
    RegisterComponent.prototype.GuardarMiOrgnaizacion = function () {
        var _this = this;
        var name = $('#nameORG').val();
        var employeesquantity = $('#plan-select-text').text();
        var body = { "name": name,
            "employees-quantity": employeesquantity };
        console.log('llego aca');
        console.log(body);
        console.log(this.idToken);
        if (name == "") {
            $('#error-empresa').css('visibility', 'visible');
            $('#nameORG').css({ 'color': 'red', 'border-bottom': '1px solid red' });
            $('#error-empresa').text('Debe Ingresar el nombre de su empresa');
            $('.formularios').loading('stop');
        }
        else {
            $('.formularios').loading({
                overlay: $("#custom-overlay")
            });
            this.webservice.postMiOrganizacion(this.idToken, body).subscribe(function (data) {
                console.log(data);
                // this.router.navigate(['/registro/step2']);
                // window.location.href = '/registro/step2';
                _this.habilitarVisuales('step2');
            }, function (error) {
                console.log(error);
                $('.formularios').loading('stop');
            });
        }
    };
    RegisterComponent.prototype.GuardarMiContacto = function () {
        var _this = this;
        var name = $('#name').val();
        var lastname = $('#lastname').val();
        var phone = $('#phone').val();
        var department = $('#plan-select-text').text();
        var job = $('#job').val();
        var body = { "name": name,
            "lastname": lastname,
            "phone": phone,
            "department": department,
            "job": job };
        if ((name == "") || (lastname == "") || (phone == "") || (department == "") || (job == "")) {
            if (name == "") {
                $('#error-name').css('visibility', 'visible');
                $('#error-name').text('Este campo es requerido.');
            }
            if (lastname == "") {
                $('#error-lastname').css('visibility', 'visible');
                $('#error-lastname').text('Este campo es requerido.');
            }
            if (phone == "") {
                $('#error-phone').css('visibility', 'visible');
                $('#error-phone').text('Este campo es requerido.');
            }
            if (department == "") {
                $('#error-dept').css('visibility', 'visible');
                $('#error-dept').text('Este campo es requerido.');
            }
            if (job == "") {
                $('#error-trabajo').css('visibility', 'visible');
                $('#error-trabajo').text('Este campo es requerido.');
            }
        }
        else {
            $('.formularios').loading({
                overlay: $("#custom-overlay")
            });
            this.webservice.postMiContacto(this.idToken, body).subscribe(function (data) {
                console.log(data);
                console.log(_this.idService);
                // this.router.navigate(['/registro/step2']);
                _this.habilitarVisuales('step4', _this.idService);
                //window.location.href = '/registro/step4';
            }, function (error) {
                console.log(error);
                $('.formularios').loading('stop');
            });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__["FirebaseApp"],
            _webservices_service__WEBPACK_IMPORTED_MODULE_5__["WebservicesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

var productos = /** @class */ (function () {
    function productos() {
    }
    return productos;
}());

var sectores = /** @class */ (function () {
    function sectores() {
    }
    return sectores;
}());



/***/ }),

/***/ "./src/app/register/webservices.service.ts":
/*!*************************************************!*\
  !*** ./src/app/register/webservices.service.ts ***!
  \*************************************************/
/*! exports provided: WebservicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebservicesService", function() { return WebservicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebservicesService = /** @class */ (function () {
    function WebservicesService(http) {
        this.http = http;
        // public url:string = '';
        this.url = 'https://esb.testa.digital';
    }
    WebservicesService.prototype.putAsociarMiOrganizacion = function (idToken, body) {
        this.ext = '/esb-1.0.0/linkMyOrganization';
        // let cabecera = new URLSearchParams();
        //console.log(idToken);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken
                // "Postman-Token": "4c8b28c2-6576-469d-99ff-b62e44766a28"
            }),
            withCredentials: false,
            async: false
        };
        var organizacion = this.http.put(this.url + this.ext, body, httpOptions);
        console.log(this.url + this.ext + ' - 16 - Asociar Mi Organización');
        return organizacion;
    };
    WebservicesService.prototype.getProductos = function (idToken) {
        this.ext = '/esb-1.0.0/products';
        // let cabecera = new URLSearchParams();
        //console.log(idToken);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken
            }),
            withCredentials: false,
            async: false
        };
        var productos = this.http.get(this.url + this.ext, httpOptions);
        return productos;
    };
    WebservicesService.prototype.postMiOrganizacion = function (idToken, body) {
        this.ext = '/esb-1.0.0/myOrganization';
        // let cabecera = new URLSearchParams();
        //console.log(idToken);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken
            }),
            withCredentials: false,
            async: false
        };
        var organizacion = this.http.post(this.url + this.ext, body, httpOptions);
        return organizacion;
    };
    WebservicesService.prototype.postMisProductos = function (idToken, body) {
        this.ext = '/esb-1.0.0/services';
        // let cabecera = new URLSearchParams();
        //console.log(idToken);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken
            }),
            withCredentials: false,
            async: false
        };
        var servicios = this.http.post(this.url + this.ext, body, httpOptions);
        return servicios;
    };
    WebservicesService.prototype.getConsultarSectores = function (idToken) {
        this.ext = '/esb-1.0.0/sectors';
        // let cabecera = new URLSearchParams();
        //console.log(idToken);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken
            }),
            withCredentials: false,
            async: false
        };
        var sectores = this.http.get(this.url + this.ext, httpOptions);
        return sectores;
    };
    WebservicesService.prototype.postMiContacto = function (idToken, body) {
        this.ext = '/esb-1.0.0/myContact';
        // let cabecera = new URLSearchParams();
        //console.log(idToken);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken
            }),
            withCredentials: false,
            async: false
        };
        var contacto = this.http.post(this.url + this.ext, body, httpOptions);
        return contacto;
    };
    //29 - Consultar Servicios de Mi Organización Por ID
    WebservicesService.prototype.getConsultarServicioOrganizacion = function (idToken, idService) {
        this.ext = '/esb-1.0.0/myServices/' + idService;
        // let cabecera = new URLSearchParams();
        //console.log(idToken);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken,
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            async: false
        };
        var servicios = this.http.get(this.url + this.ext, httpOptions);
        return servicios;
    };
    WebservicesService.prototype.getStatusServicioOrganizacion = function (idToken) {
        this.ext = '/esb-1.0.0/myServices';
        // let cabecera = new URLSearchParams();
        //console.log(idToken);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken,
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            async: false
        };
        var servicios = this.http.get(this.url + this.ext, httpOptions);
        return servicios;
    };
    WebservicesService.prototype.postValidarToke = function (body) {
        this.ext = '/esb-1.0.0/verifyIdTokenAsync/';
        // let cabecera = new URLSearchParams();
        //console.log(idToken);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            async: false
        };
        var usuario = this.http.post(this.url + this.ext, body, httpOptions);
        return usuario;
    };
    WebservicesService.prototype.getEsOwner = function (idToken) {
        this.ext = '/esb-1.0.0/isOwner';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken,
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            async: false
        };
        var owner = this.http.get(this.url + this.ext, httpOptions);
        return owner;
    };
    WebservicesService.prototype.getEstatusSistema = function (idToken) {
        this.ext = '/esb-1.0.0/serviceStatuses';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken,
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            async: false
        };
        var estatus = this.http.get(this.url + this.ext, httpOptions);
        return estatus;
    };
    WebservicesService.prototype.getPlanesProductos = function (idToken, producto, type) {
        var url = "https://esb.testa.digital/esb-1.0.0/plans/?plan_product=" + producto + "&plan_type=" + type;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken,
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            async: false
        };
        var planes = this.http.get(url, httpOptions);
        return planes;
    };
    WebservicesService.prototype.getMiContacto = function (idToken) {
        this.ext = '/esb-1.0.0/myContact';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken,
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            async: false
        };
        var contacto = this.http.get(this.url + this.ext, httpOptions);
        return contacto;
    };
    WebservicesService.prototype.getFacturas = function (idToken, idProducto) {
        if (idProducto === void 0) { idProducto = '-LMG0Vjg0CVFd6WIh4O8'; }
        this.ext = '/esb-1.0.0/services/' + idProducto + '/invoices';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken,
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            async: false
        };
        var factura = this.http.get(this.url + this.ext, httpOptions);
        return factura;
    };
    WebservicesService.prototype.putSolicitarLinkMercadoPago = function (idToken, body) {
        this.ext = '/esb-1.0.0/services/LLb4fYhYJW5hfrMHvBA/link';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'idToken': idToken,
                'Content-Type': 'application/json',
                'Authorization': 'Basic dXN1YXJpbzpwYXNzd29yZA=='
            }),
            withCredentials: false,
            async: false
        };
        var link = this.http.put(this.url + this.ext, body, httpOptions);
        return link;
    };
    WebservicesService.prototype.findGetParameter = function (parameterName) {
        var result = null, tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName)
                result = decodeURIComponent(tmp[1]);
        });
        return result;
    };
    WebservicesService.prototype.validarUrlServicios = function (url) {
        var urlservice = this.http.get("http://" + url);
        return urlservice;
    };
    WebservicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WebservicesService);
    return WebservicesService;
}());



/***/ }),

/***/ "./src/app/servicios/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth
    // private http: HttpClient
    ) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.loginTwitter = function () {
        return this.afAuth.auth.signInWithRedirect(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.loginPhone = function () {
        return this.afAuth.auth.signInWithRedirect(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].PhoneAuthProvider());
    };
    AuthService.prototype.loginFacebook = function () {
        return this.afAuth.auth.signInWithRedirect(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.loginGoogle = function () {
        return this.afAuth.auth.signInWithRedirect(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.registerUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginEmail = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.getIdTokenAut = function () {
        this.getAuth().subscribe(function (auth) {
            if (auth) {
                auth.getIdToken(true).then(function (idToken) {
                    console.log('Funcion token');
                    console.log(idToken);
                    return idToken;
                }).catch(function (error) {
                    console.log('error');
                    return false;
                });
            }
            else {
                console.log('error2');
                return false;
            }
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
            // private http: HttpClient
        ])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/soporte/soporte.component.css":
/*!***********************************************!*\
  !*** ./src/app/soporte/soporte.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor-list{\n    /* margin-top: 272px; */\n    margin-top: 200px;\n    margin-left: calc((100% - 1185px)/2);\n}\n.contenedor-list .item {\n    float: left;\n    width: 224px;\n    height: 224px;\n    margin-right: 16px;\n    border-radius: 8px;\n    background-color: #ffffff;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n  }\n.contenedor-list .item:hover{\n    cursor: pointer;\n    width: 224px;\n    height: 224px;\n    border-radius: 8px;\n    background-color: #ffffff;\n    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12);\n  }\n.item-superio{\n      height: 183px;\n      width: 224px;\n      border-bottom: 1px solid #cccccc;\n  }\n.item-inferio{\n    height: 38px;\n    width: 224px;\n  }\n.item-img{\n      padding: 32px 63px;\n      padding-bottom:0px;\n  }\n.item-text{\n    height: 24px;\n    width: 224px;\n    padding-top: 16px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4a4a4a;\n  }\n.item-name{\n    width: 224px;\n    padding-top: 6px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #0a4d7c;\n  }\n.item-name-comprar{\n    width: 224px;\n    padding-top: 6px;\n    height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: center;\n  color: #b10053;\n  }\n@media (max-width:1327px){\n\n    .contenedor-list{\n      margin-top: 89px;\n      margin-left: 24px;\n  }\n    .contenedor-list .item{\n      margin-bottom: 16px;\n    }\n\n  }\n@media (max-width:1024px){\n    .contenedor-list{\n      margin-top: 89px;\n      margin-left: 24px;\n      margin-right: 24px;\n  }\n  .contenedor-list .item {\n      float: left;\n      width: 100%;\n      height: 112px;\n      margin-right: 16px;\n      border-radius: 8px;\n      background-color: #ffffff;\n      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n    }\n  \n    .contenedor-list .item:hover{\n      cursor: pointer;\n      width: 100%;\n      height: 112px;\n      border-radius: 8px;\n      background-color: #ffffff;\n      box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12);\n    }\n\n    .item-superio{\n      height: 70px;\n      width: 100%;\n      border-bottom: 1px solid #cccccc;\n  }\n\n  .item-inferio{\n    height: 38px;\n    width: 100%;\n  }\n\n  .item-img{\n    float: left;\n    padding: 16px 25px;\n    padding-bottom:0px;\n}\n.item-img img{\n  height: 40px;\n}\n\n\n.item-text{\n  /* float: left; */\n  /* width: 224px; */\n  height: 24px;\n  padding-top: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  color: #4a4a4a;\n}\n\n.item-name{\n  /* width: 224px; */\n  padding: 6px 24px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  color: #0a4d7c;\n}\n\n.item-name-comprar{\n  /* width: 224px; */\n  padding: 6px 24px;\n  height: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.33;\nletter-spacing: normal;\ntext-align: left;\ncolor: #b10053;\n}\n  }"

/***/ }),

/***/ "./src/app/soporte/soporte.component.html":
/*!************************************************!*\
  !*** ./src/app/soporte/soporte.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"contenedor-list\">\n  <img src=\"assets/img/bg-admin.jpg\" height=\"200px\" alt=\"\">   \n  EN CONSTRUCCION \n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/soporte/soporte.component.ts":
/*!**********************************************!*\
  !*** ./src/app/soporte/soporte.component.ts ***!
  \**********************************************/
/*! exports provided: SoporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoporteComponent", function() { return SoporteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoporteComponent = /** @class */ (function () {
    function SoporteComponent() {
    }
    SoporteComponent.prototype.ngOnInit = function () {
    };
    SoporteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-soporte',
            template: __webpack_require__(/*! ./soporte.component.html */ "./src/app/soporte/soporte.component.html"),
            styles: [__webpack_require__(/*! ./soporte.component.css */ "./src/app/soporte/soporte.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SoporteComponent);
    return SoporteComponent;
}());



/***/ }),

/***/ "./src/app/suite/suite.component.css":
/*!*******************************************!*\
  !*** ./src/app/suite/suite.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor-list{\n    /* margin-top: 272px; */\n    margin-top: 200px;\n    margin-left: calc((100% - 1185px)/2);\n}\n.contenedor-list .item {\n    float: left;\n    width: 224px;\n    height: 184px;\n    margin-right: 16px;\n    border-radius: 8px;\n    background-color: #ffffff;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n  }\n.rojo{\n    /* border-bottom: 1px solid #b10053 !important; */\n  }\n.gris{\n    /* border-bottom: 1px solid #cccccc !important; */\n  }\n.boton-inferior-item{\n    text-align: center;\n    width: 100%;\n    text-decoration: none;\n    padding-top: 12px;\n    margin-top: 2px;\n    float: left;\n    color: #b10053;\n    font-family: 'Roboto';\n    /* width: 224px; */\n    height: 46px;\n    border-radius: 8px;\n    background-color: #ffffff;\n    /* box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);   */\n    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);\n  }\n.boton-inferior-item:hover{\n    background-color: rgba(178, 0, 83, 0.08);\n  }\n.contenedor-list .active:hover{\n    cursor: pointer;\n    width: 224px;\n    height: 184px;\n    border-radius: 8px;\n    background-color: rgba(9, 77, 125, 0.08);\n    \n    /* box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12); */\n  }\n#itemlink{\n    text-decoration: none;\n  }\n.item-superio{\n      height: 183px;\n      width: 224px;\n      /* border-bottom: 1px solid #cccccc; */\n  }\n.item-inferio{\n    height: 38px;\n    width: 224px;\n  }\n.item-img{\n      padding: 32px 63px;\n      padding-bottom:0px;\n  }\n.item-text{\n    height: 24px;\n    width: 224px;\n    padding-top: 16px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4a4a4a;\n  }\n.item-text-inactivo{\n    height: 24px;\n    width: 224px;\n    padding-top: 16px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #cccccc;\n  }\n.item-name{\n    width: 224px;\n    padding-top: 6px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #0a4d7c;\n  }\n.item-name-inactivo{\n    width: 226px;\n    padding-top: 6px;\n    height: 24px;\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #cccccc;\n  }\n.item-name-comprar{\n    width: 224px;\n    padding-top: 6px;\n    height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: center;\n  color: #b10053;\n  }\n@media (max-width:1327px){\n\n    .contenedor-list{\n      margin-top: 89px;\n      margin-left: 24px;\n  }\n    .contenedor-list .item{\n      margin-bottom: 16px;\n    }\n\n  }\n@media (max-width:1024px){\n    .contenedor-list{\n      margin-top: 89px;\n      margin-left: 24px;\n      margin-right: 24px;\n  }\n  .contenedor-list .item {\n      float: left;\n      width: 100%;\n      height: 112px;\n      margin-right: 16px;\n      border-radius: 8px;\n      background-color: #ffffff;\n      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n    }\n  \n    .contenedor-list .item:hover{\n      cursor: pointer;\n      width: 100%;\n      height: 112px;\n      border-radius: 8px;\n      background-color: #ffffff;\n      box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12);\n    }\n\n    .item-superio{\n      height: 70px;\n      width: 100%;\n      /* border-bottom: 1px solid #cccccc; */\n  }\n\n  .item-inferio{\n    height: 38px;\n    width: 100%;\n  }\n\n  .item-img{\n    float: left;\n    padding: 16px 25px;\n    padding-bottom:0px;\n}\n.item-img img{\n  height: 40px;\n}\n\n\n.item-text{\n  /* float: left; */\n  /* width: 224px; */\n  height: 24px;\n  padding-top: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  color: #4a4a4a;\n}\n\n.item-name{\n  /* width: 224px; */\n  padding: 6px 24px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  color: #0a4d7c;\n}\n\n.item-name-comprar{\n  /* width: 224px; */\n  padding: 6px 24px;\n  height: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.33;\nletter-spacing: normal;\ntext-align: left;\ncolor: #b10053;\n}\n  }"

/***/ }),

/***/ "./src/app/suite/suite.component.html":
/*!********************************************!*\
  !*** ./src/app/suite/suite.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n<div class=\"contenedor-list\">\n      <div style=\"float: left;width: 224px;margin-right: 16px;\" *ngFor=\"let prod of product\">\n        <div class=\"item {{ prod.cssstatus }}\" id=\"itembtn\">\n          <a *ngIf=\"prod.disable; else linkDisable\" id=\"itemlink\">\n            <div class=\"{{ prod.css1 }}\">\n              <div class=\"{{ prod.css2 }}\">\n                <img src=\"/assets/img/{{ prod.image }}\" height=\"80px\">\n              </div>\n              <div class=\"{{ prod.css3 }}\">{{ prod.label }}</div>\n            </div>\n          </a>\n          <ng-template #linkDisable >\n            <a id=\"itemlink\" href=\"{{ prod.linksbox }}\">\n              <div class=\"{{ prod.css1 }}\">\n                <div class=\"{{ prod.css2 }}\">\n                  <img src=\"/assets/img/{{ prod.image }}\" height=\"80px\">\n                </div>\n                <div class=\"{{ prod.css3 }}\">{{ prod.label }}</div>\n              </div>\n            </a>\n          </ng-template>\n\n        </div>\n        <a class=\"boton-inferior-item\" href=\"{{ prod.links }}\" >{{ prod.textlink }}</a>\n      </div>\n  <!-- <a href=\"/micuenta/2\">\n  <div class=\"item\">\n    <div class=\"item-superio\">\n      <div class=\"item-img\">\n          <img src=\"assets/img/mkt.svg\" height=\"80px\">\n      </div>\n      <div class=\"item-text\">Marketing</div>\n    </div>\n    <div class=\"item-inferio\">\n      <div class=\"item-name\">ACTIVO</div>\n    </div>\n  </div>\n  </a>\n  <a href=\"/micuenta/3\">\n  <div class=\"item\">\n    <div class=\"item-superio rojo\">\n      <div class=\"item-img\">\n          <img src=\"assets/img/ventas.svg\" height=\"80px\">\n      </div>\n      <div class=\"item-text\">Ventas</div>\n    </div>\n    <div class=\"item-inferio\">\n      <div class=\"item-name-comprar\">COMPRAR</div>\n    </div>\n  </div>\n  </a>\n  <a href=\"/micuenta/4\">\n  <div class=\"item\">\n    <div class=\"item-superio gris\">\n      <div class=\"item-img\">\n          <img src=\"assets/img/tiendai.svg\" height=\"80px\">\n      </div>\n      <div class=\"item-text-inactivo\">Tienda online</div>\n    </div>\n    <div class=\"item-inferio\">\n      <div class=\"item-name-inactivo\">DESACTIVADO</div>\n    </div>\n  </div>\n  </a>\n  <a href=\"/micuenta/5\">\n  <div class=\"item\">\n    <div class=\"item-superio\">\n      <div class=\"item-img\">\n          <img src=\"assets/img/soporte.svg\" height=\"80px\">\n      </div>\n      <div class=\"item-text\">Soporte</div>\n    </div>\n    <div class=\"item-inferio\">\n      <div class=\"item-name\">ACTIVO</div>\n    </div>\n  </div>\n  </a> -->\n</div>\n</main>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/suite/suite.component.ts":
/*!******************************************!*\
  !*** ./src/app/suite/suite.component.ts ***!
  \******************************************/
/*! exports provided: SuiteComponent, statusObject, serviceOrganizacion, UserServiceOrganizacion, productos, sectores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiteComponent", function() { return SuiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusObject", function() { return statusObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceOrganizacion", function() { return serviceOrganizacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceOrganizacion", function() { return UserServiceOrganizacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productos", function() { return productos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectores", function() { return sectores; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _register_webservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/webservices.service */ "./src/app/register/webservices.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SuiteComponent = /** @class */ (function () {
    function SuiteComponent(route, authService, router, flashMensaje, firebase, webservice) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.firebase = firebase;
        this.webservice = webservice;
        this.product = [];
        this.status = [];
        this.servicios = [];
        this.active_suite = 'menu-active';
        this.title = 'Suite';
    }
    SuiteComponent.prototype.ngOnInit = function () {
        // $('body').loading({
        //     overlay: $("#custom-overlay")
        //   });
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                auth.getIdToken(true).then(function (idToken) {
                    _this.webservice.putAsociarMiOrganizacion(idToken, {}).subscribe(function (data) {
                        console.log(data);
                        if ((data['organization'] == null) || (data['organization'] == 'null') || data == null) {
                            window.location.href = '/registro';
                        }
                        else {
                            _this.idToken = idToken;
                            console.log(_this.idToken);
                            _this.consultarStatusSistemas(_this.idToken);
                        }
                    }, function (error) {
                        console.log(error);
                        $('body').loading('stop');
                    });
                }).catch(function (_error) {
                    console.log('error 1');
                });
            }
            else {
                console.log('error 2');
            }
        });
    };
    SuiteComponent.prototype.consultarServicios = function (idtoken) {
        var _this = this;
        console.log("====================== 02 ===============================");
        this.webservice.getStatusServicioOrganizacion(idtoken).subscribe(function (data) {
            var keys = Object.keys(data);
            var i = 0;
            keys.forEach(function (k) {
                var c = Array(data[k]);
                c.forEach(function (i) {
                    var s = new serviceOrganizacion();
                    var keys2 = Object.keys(i);
                    console.log('servicios');
                    console.log(keys2[0]);
                    console.log(i[keys2[0]]['contract']);
                    s.id = keys2[0];
                    s.organizacion = i[keys2[0]]['organization'];
                    s.producto = i[keys2[0]]['product'];
                    s.estatus = i[keys2[0]]['status'];
                    s.contrato = i[keys2[0]]['contract'];
                    s.subdominio = i[keys2[0]]['subdomain'];
                    _this.servicios.push(s);
                });
                console.log(_this.servicios);
            });
            _this.consultarProductos(_this.idToken);
        }, function (error) {
            $('body').loading('stop');
        });
    };
    SuiteComponent.prototype.consultarStatusSistemas = function (idtoken) {
        var _this = this;
        console.log("====================== 01 ===============================");
        this.webservice.getEstatusSistema(idtoken).subscribe(function (data) {
            console.log(data);
            var keys = Object.keys(data);
            var i = 0;
            keys.forEach(function (k) {
                var c = Array(data[k]);
                var p = new statusObject();
                p.id = k;
                p.name = c[0]['name'];
                //console.log(p);
                _this.status.push(p);
            });
            _this.consultarServicios(_this.idToken);
        });
    };
    SuiteComponent.prototype.consultarProductos = function (idtoken) {
        var _this = this;
        console.log("====================== 03 ===============================");
        this.idToken = idtoken;
        this.webservice.getProductos(idtoken).subscribe(function (data) {
            //console.log(data);
            var keys = Object.keys(data);
            var i = 0;
            keys.forEach(function (k) {
                var c = Array(data[k]);
                var p = new productos();
                var s = "inactive";
                var sub = "";
                p.id = k;
                p.image = c[0]['image'];
                var img = p.image.split(".", 2);
                p.image_gris = img[0] + "-gris." + img[1];
                p.label = c[0]['label'];
                p.name = c[0]['name'];
                p.domain = c[0]['domain'];
                console.log(p);
                _this.servicios.forEach(function (servicio) {
                    if (servicio.producto == p.id) {
                        _this.status.forEach(function (estatu) {
                            if (estatu.id == servicio.estatus) {
                                s = estatu.name;
                            }
                        });
                        sub = servicio.subdominio;
                    }
                });
                console.log(s);
                switch (s) {
                    case 'demo':
                        console.log('demo');
                        p.textlink = "Comprar ahora";
                        p.cssstatus = "active";
                        p.image = p.image;
                        p.linksbox = 'http://' + sub + p.domain;
                        p.disable = false;
                        p.links = "/suscripcion/" + p.name;
                        p.status = "";
                        p.css1 = "item-superio rojo";
                        p.css2 = "item-img";
                        p.css3 = "item-text";
                        p.css4 = "item-inferio";
                        p.css5 = "item-name-comprar";
                        p.texto = "INGRESAR A DEMO";
                        break;
                    case 'active':
                        console.log('active');
                        p.image = p.image;
                        p.cssstatus = "active";
                        p.textlink = "";
                        p.linksbox = 'http://' + sub + p.domain;
                        p.disable = false;
                        p.status = "";
                        p.css1 = "item-superio";
                        p.css2 = "item-img";
                        p.css3 = "item-text";
                        p.css4 = "item-inferio";
                        p.css5 = "item-name";
                        p.texto = "INGRESAR";
                        break;
                    case 'unpaied':
                        console.log('unpaied');
                        p.image = p.image;
                        p.cssstatus = "inactive";
                        p.textlink = "Pagar servicio adeudado";
                        p.linksbox = '';
                        p.disable = false;
                        p.links = "";
                        p.status = "";
                        p.css1 = "item-superio rojo";
                        p.css2 = "item-img";
                        p.css3 = "item-text";
                        p.css4 = "item-inferio";
                        p.css5 = "item-name-comprar";
                        p.texto = "INGRESAR";
                        break;
                    case 'inactive':
                        console.log('inactive');
                        p.image = p.image_gris;
                        p.cssstatus = "inactive";
                        p.textlink = "Solicitar demo";
                        p.linksbox = "";
                        p.disable = true;
                        p.links = "/suscripcion/" + p.name;
                        p.status = "";
                        p.css1 = "item-superio gris";
                        p.css2 = "item-img";
                        p.css3 = "item-text-inactivo";
                        p.css4 = "item-inferio";
                        p.css5 = "item-name-inactivo";
                        p.texto = "SIN PERMISOS";
                        break;
                    case 'inaccessible':
                        console.log('inaccessible');
                        p.image = p.image_gris;
                        p.cssstatus = "inactive";
                        p.textlink = "Solicitar";
                        p.linksbox = "";
                        p.disable = true;
                        p.links = "/suscripcion/" + p.name;
                        p.status = "";
                        p.css1 = "item-superio gris";
                        p.css2 = "item-img";
                        p.css3 = "item-text-inactivo";
                        p.css4 = "item-inferio";
                        p.css5 = "item-name-inactivo";
                        p.texto = "SIN PERMISOS";
                        break;
                    case 'pending':
                        console.log('pending');
                        p.image = p.image_gris;
                        p.cssstatus = "inactive";
                        p.textlink = "Solicitar";
                        p.linksbox = "";
                        p.disable = true;
                        p.links = "/suscripcion/" + p.name;
                        p.status = "";
                        p.css1 = "item-superio gris";
                        p.css2 = "item-img";
                        p.css3 = "item-text-inactivo";
                        p.css4 = "item-inferio";
                        p.css5 = "item-name-inactivo";
                        p.texto = "AUTORIZACION PENDIENTE";
                        break;
                }
                _this.product.push(p);
            });
            $('body').loading('stop');
            $('.link-1').addClass('menu-active');
        }, function (error) {
            console.log(error);
        });
        //$('body').loading('stop');
    };
    SuiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suite',
            template: __webpack_require__(/*! ./suite.component.html */ "./src/app/suite/suite.component.html"),
            styles: [__webpack_require__(/*! ./suite.component.css */ "./src/app/suite/suite.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__["FirebaseApp"],
            _register_webservices_service__WEBPACK_IMPORTED_MODULE_5__["WebservicesService"]])
    ], SuiteComponent);
    return SuiteComponent;
}());

var statusObject = /** @class */ (function () {
    function statusObject() {
    }
    return statusObject;
}());

var serviceOrganizacion = /** @class */ (function () {
    function serviceOrganizacion() {
        this.user = [];
    }
    return serviceOrganizacion;
}());

var UserServiceOrganizacion = /** @class */ (function () {
    function UserServiceOrganizacion() {
    }
    return UserServiceOrganizacion;
}());

var productos = /** @class */ (function () {
    function productos() {
    }
    return productos;
}());

var sectores = /** @class */ (function () {
    function sectores() {
    }
    return sectores;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/suscripcion/suscripcion.component.css":
/*!*******************************************************!*\
  !*** ./src/app/suscripcion/suscripcion.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background: #f4f4f4;\n}\n\n.item-superior{\n    float: left;\n    width: 100%;\n    height: 128px;\n    background-color: #eaf0f4;\n    border-bottom: solid 1px #0a4d7c;\n}\n\n.item-superior .item-name{\n    float: left;\n    padding: 48px 128px;\n    height: 32px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    font-weight: 300;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #0a4d7c;\n\n}\n\n.item-superior .item-edit-perfil{\n    float: right;\n    padding: 55px 104px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.14;\n    letter-spacing: 1.3px;\n    color: #b10053;\n}\n\n.item-inferior  .suscripcion-logo{\n    width: 98px;\n    height: 200px;\n    float: left;\n    margin-top: 78px;\n    margin-left: 63px;\n}\n\n.item-inferior .suscripcion-detalle{\n    margin-top: 78px;\n    margin-left: 81px;\n    float: left;\n    width: calc(100% - 263px)\n\n}\n\n.suscripcion-detalle .linea1{\n    margin-left: 0px;\n    margin-top: 0px;\n    height: 24px;\n    width: 100%;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #4a4a4a;\n}\n\n.suscripcion-detalle .linea3{\n    float: left;\n    height: 16px;\n    width: 100%;\n    margin-top: 24px;\n    margin-left: 0px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.14;\n    letter-spacing: 1.3px;\n    color: #0a4d7c;\n}\n\n.suscripcion-detalle .linea4{\n    float: left;\n    height: 2px;\n    width: 100%;\n    border-bottom: 1px solid #cccccc;\n    margin-top: 44px;\n}\n\n.suscripcion-detalle .linea5{\n    float: left;\n    height: 24px;\n    width: 100%;\n    margin-top: 38px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #4a4a4a;\n}\n\n.suscripcion-detalle .linea6{\n    float: left;\n    height: 16px;\n    width: 100%;\n    margin-top: 0px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #9b9b9b;\n}\n\n.suscripcion-detalle .linea7{\n    float: left;\n    height: 56px;\n    width: 100%;\n    margin-top: 0px;\n}\n\n.linea7 .num-user{\n    margin-top: 8px;\n    height: 48px;\n    float: left;\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #000000;\n}\n\n.linea7 .num-user input{\n    background: #f4f4f4;\n    border-top: none;\n    border-right: none;\n    border-left: none;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #000000;\n}\n\n.linea7 .price-num-user{\n    float: right;\n    margin-top: 0px;\n    margin-right: 0px;\n    height: 32px;\n    font-family: 'Roboto';\n    font-size: 24px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4a4a4a;\n}\n\n.select-plan{\n    width: 222px;\n    float: left;\n}\n\n.price-plan{\n    height: 48px;\n    float: right;\n}\n\n.price-plan .texto{\n    font-family: 'Roboto';\n    font-size: 24px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4a4a4a;\n    margin-top: 8px;\n}\n\n.suscripcion-detalle #btn-planes{\n    display: none;\n}\n\n.submenu-planes{\n    display: none;\n    list-style: none;\n    background: #ffffff;\n    height: 112px;\n    width: 149px;\n    border-radius: 4px;\n    background-color: #ffffff;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14);\n}\n\n.submenu-planes li{\n    cursor: pointer;\n    padding: 1px 5px;\n    padding: 8px 7px;\n}\n\n.submenu-planes li:hover{\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.08);\n}\n\n.submenu-planes a{\n    font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.43;\n  letter-spacing: 0.3px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n#btn-planes:checked ~ .submenu-planes{\n    display: block;\n    position: absolute;\n    height: auto;\n    background: #ffffff;\n}\n\n.suscripcion-detalle .linea2 ul{\n    width: 222px;\n    height: 48px;\n    opacity: 0.99;\n    padding-top: 13px;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    background-color: #f4f4f4;\n    list-style: none;\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #000000;\n}\n\n.item-inferior .suscripcio-logo-img{\n    width: 98px;\n    height: 80px;\n    margin-top: 0px;\n    margin-left: 0px;\n}\n\n.item-inferior .suscripcion-logo-text{\n    width: 98px;\n    height: 24px;\n    text-align: center;\n    margin-top: 16px;\n    margin-left: 0px;\n    font-family: 'Roboto';\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4a4a4a;\n}\n\n.item-inferior{\n    float: left;\n    width: 100%;\n    /* height: calc(100vh - 246px); */\n    /* display: flex; */\n}\n\n.item-inferior .item-derecho{\n    width: 471px;\n    float: left;\n    /* height: calc(100vh - 246px); */\n    height: calc(100vh - 246px);\n    min-height: 550px;\n    background: #ffffff;\n}\n\n.item-inferior .item-izquierdo{\n    float: left;\n    width: calc(100% - 471px);\n    /* height: calc(100vh - 246px); */\n    \n}\n\n.margen{\n    margin-left: 127px;\n    width: calc(100% - 127px);\n        /* height: calc(100vh - 246px); */\n}\n\n.margen .botones-superiores{\n    height: 78px;\n    width: 100%;\n    border-bottom: solid 1px #eaeaea;\n}\n\n.margen .boton-menu-activo{\n    margin-top: 14px;\n    width: 72px;\n    height: 32px;\n    border-radius: 16px;\n    background-color: #0a4d7c;\n    float: left;\n    padding: 7px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n}\n\n.margen .boton-menu{\n    margin-top: 14px;\n    \n    height: 32px;\n    border-radius: 16px;\n    float: left;\n    padding: 7px 23px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4a4a4a;\n}\n\n.margen .boton-menu:hover{\n    color: #0a4d7c;\n    background: #eaeaea;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n    \n}\n\n.margen2{\n    margin-left: 46px;\n    /* height: calc(100vh - 246px); */\n    /* width: 100%; */\n}\n\n.margen2 .linea1{\n    margin-top: 24px;\n    height: 24px;\n    width: 298px;\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: 300;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    /* text-align: center; */\n    color: #000000;\n}\n\n.margen2 .linea2{\n    height: 48px;\n    width: 298px;\n    margin-top: 24px;\n}\n\n.margen2 .linea2 .ciclo-facturacion{\n    margin-top: 16px;\n    float: left;\n    width: 160px;\n    height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.14;\n    letter-spacing: normal;\n    color: #4a4a4a;\n}\n\n.margen2 .linea2 .list-mes{\n    margin-top: 19px;\n    margin-right: 0px;\n    float: right;\n    height: 48px;\n    width: 103px;\n\n}\n\n.margen2 .linea2 .pago-anual{\n    margin-top: 0px;\n    margin-left: 0px;\n    float: left;\n    width: 177px;\n    height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.14;\n    letter-spacing: normal;\n    color: #737373;\n}\n\n.list-mes ul{\n    list-style: none;\n}\n\n.margen2 #btn-mes{\n    display: none;\n}\n\n.submenu-mes{\n    display: none;\n    list-style: none;\n    background: #ffffff;\n    height: 112px;\n    width: 149px;\n    border-radius: 4px;\n    background-color: #ffffff;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14);\n}\n\n.submenu-mes li{\n    cursor: pointer;\n    padding: 1px 5px;\n    padding: 8px 7px;\n}\n\n.submenu-mes li:hover{\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.08);\n}\n\n.submenu-mes a{\n    font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.43;\n  letter-spacing: 0.3px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n#btn-mes:checked ~ .submenu-mes{\n    display: block;\n    width: 100px;\n    margin-left: -8px;\n    position: absolute;\n    height: auto;\n    background: #ffffff;\n}\n\n.margen2 .linea3{\n    margin-top: 30px;\n    width: 298px;\n    height: 2px;\n    border-bottom: solid 1px #eaeaea;\n}\n\n.margen2 .linea4{\n    margin-top: 23px;\n    width: 298px;\n    height: 16px;\n}\n\n.margen2 .linea4 .texto1{\n    float: left;\n    width: 125px;\n  height: 16px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.margen2 .linea4 .monto1{\n    float: right;\n    width: 100px;\n  height: 16px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: right;\n  color: #4a4a4a;\n}\n\n.margen2 .linea5{\n    margin-top: 16px;\n    width: 298px;\n    height: 16px;\n}\n\n.margen2 .linea5 .texto1{\n    float: left;\n    width: 125px;\n    height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #4a4a4a;\n}\n\n.margen2 .linea5 .monto1{\n    float: right;\n    width: 100px;\n    height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: right;\n    color: #4a4a4a;\n}\n\n.margen2 .linea6{\n    margin-top: 22px;\n    width: 298px;\n    height: 16px;\n}\n\n.margen2 .linea6 .texto1{\n    float: left;\n    width: 125px;\n    height: 16px;\n    font-family: 'Roboto';\n    font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.14;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.margen2 .linea6 .monto1{\n    float: right;\n    width: 100px;\n    height: 16px;\n    font-family: 'Roboto';\n    font-size: 16px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  text-align: right;\n  color: #4a4a4a;\n}\n\n.margen2 .linea6 .iva{\n    float: left;\n    width: 177px;\n  height: 16px;\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.14;\n  letter-spacing: normal;\n  color: #9b9b9b;\n}\n\n.margen2 .linea7{\n    height: 42px;\n    margin-top: 48px;\n    width: 298px;\n}\n\n.margen2 .linea7 .acuerdo{\n    margin-top: 0px;\n    margin-left: 0px;\n    width: 18px;\n    float: left;\n    cursor: pointer;\n}\n\n.margen2 .linea7 #btn-acuerdos{\n    display: none;\n}\n\n.margen2 .linea7 .icon-ok{\n    color: #ffffff;\n    border: 2px solid #cccccc;\n    border-radius: 4px;\n    height: 18px;\n    width: 15px;\n}\n\n#check-btn{\n    font-size: 13px;\n    cursor: pointer;\n}\n\n#btn-acuerdos:checked ~ #check-btn{\n    background: #157cb2;\n    border: 2px solid #157cb2;\n    border-radius: 4px;\n\n}\n\n#btn-acuerdos:checked ~ #caja-btn{\n    color: #ffffff;\n    background: #b10053;\n}\n\n/* customizacion del checkbox */\n\n/* ############### fin */\n\n.icon-dow2{\n    float: right;\n}\n\n.margen2 .linea7 .acuerto-text{\n    margin-top: 0px;\n    margin-left: 11px;\n    width: 264px;\n    text-align: left;\n    float: left;\n\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #4a4a4a;\n}\n\n.margen2 .linea7 .acuerto-text a{\n    color: #4a90e2;\n}\n\n.margen2 .linea8{\n    margin-top: 30px;\n    width: 296px;\n    padding: 8px;\n    height: 36px;\n    background:rgba(177, 0, 83,0.12);\n    text-align: center !important;\n    border-radius: 4px;\n    vertical-align: middle !important;\n}\n\n.pasar-por-caja{\n    /* margin-top: 16px;     */\n    font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.14;\n  /* opacity:1; */\n  letter-spacing: 1.3px;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.text-btn-mes{\n    cursor: pointer;\n}\n\n.text-btn-mes li{\n    font-family: 'Roboto';\n}\n\n.text-btn-planes{\n    cursor: pointer;\n}\n\n@media (max-width:1024px){\n\n}\n\n@media (max-width:1024px){\n    .item-superior{\n    margin-top: 73px;\n    height: 72px;\n    }\n\n    .item-superior .item-name{\n        float: left;\n        padding: 24px 16px;\n        \n        height: 32px;\n        font-family: 'Roboto', sans-serif;\n        font-size: 24px;\n        font-weight: 300;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 1.33;\n        letter-spacing: normal;\n        text-align: center;\n        color: #0a4d7c;\n    \n    }\n\n\n    .item-inferior .item-izquierdo{\n        /* float: left; */\n        width: 100%\n        /* height: calc(100vh - 246px); */\n        \n    }\n    .item-inferior .item-derecho{\n        width: 100%;\n        /* float: left; */\n        /* height: calc(100vh - 246px); */\n        /* height: 216px !important;\n        min-height: 216px !important;\n        max-height: 216px !important; */\n        background: #ffffff;\n    }\n\n    .item-inferior .margen{\n        margin-left: 16px;\n        width: calc(100% - 32px);\n        margin-bottom: 32px;\n        /* height: calc(100vh - 246px); */\n    }\n\n    .item-inferior .margen2{\n        margin-left: 16px;\n        width: calc(100% - 32px);\n        margin-top: 32px;\n    }\n    \n\n    .margen .botones-superiores{\n        display: inline-table;\n        cursor: pointer;\n    }\n\n    .margen .suscripcion-logo{\n        margin-top: 22px;\n        margin-left: 0px;\n        height: 112px;\n\n    }\n\n    .margen .suscripcion-detalle{\n        margin-top: 16px;\n        margin-left: 0px;\n        width: 100%;\n    }\n\n    .margen .select-plan{\n        width: 143px;\n    }\n\n    .suscripcion-detalle .linea2 ul{\n        width: 160px;\n    }\n    \n  }\n"

/***/ }),

/***/ "./src/app/suscripcion/suscripcion.component.html":
/*!********************************************************!*\
  !*** ./src/app/suscripcion/suscripcion.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"item-superior\">\n  <div class=\"item-name\">\n      <span class=\"icon-left-open\" style=\"color:#b10053;cursor:pointer;\"></span> Suscripción\n  </div>\n</div>\n<div class=\"item-inferior\">\n  <div class=\"item-izquierdo\">\n    <div class=\"margen\">\n      <div class=\"botones-superiores\">\n        <div class=\"boton-menu-activo\">\n            <a>{{ btn_gestion }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ btn_online }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ btn_ventas }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ btn_mark }}</a>\n        </div>\n        <div class=\"boton-menu\">\n            <a>{{ btn_soport }}</a>\n        </div>\n      </div>\n      \n      <div class=\"suscripcion-logo\">\n        <div class=\"suscripcio-logo-img\">\n          <img src=\"assets/img/gestion.svg\" alt=\"\">\n        </div>\n        <div class=\"suscripcion-logo-text\">\n          Gestión\n        </div>\n\n      </div>\n      <div class=\"suscripcion-detalle\">\n        <div class=\"linea1\">PLAN</div>\n        \n        <div class=\"linea2\">\n          <div class=\"select-plan\">\n            <label for=\"btn-planes\" class=\"text-btn-planes\">\n            <ul>\n              <li>\n                <input type=\"checkbox\" name=\"\" id=\"btn-planes\">\n                <span id=\"plan-select-text\"><a> Planes  </a></span> <span class=\"icon-sort-down icon-dow2\"></span>\n                <ul class=\"submenu-planes\">\n                    <label *ngFor=\"let plans of planlist\" for=\"btn-planes\" (click)=\"ActualizarPlan(plans)\"><li><a>{{ plans.plan }} </a></li></label>\n                    <!-- <label for=\"btn-planes\" (click)=\"ActualizarPlan(2)\"><li>Mega</li></label>\n                    <label for=\"btn-planes\" (click)=\"ActualizarPlan(3)\"><li>Mega</li></label>\n                    <label for=\"btn-planes\" (click)=\"ActualizarPlan(4)\"><li>Mega</li></label> -->\n                </ul>\n              </li>\n            </ul>\n            </label>\n          </div>\n          <div class=\"price-plan\">\n             <div class=\"texto\">\n              <span id=\"plan-select-price\">$0</span>\n              </div>\n          </div>\n        </div>\n\n        <div class=\"linea3\">\n          comparar planes\n        </div>\n\n        <div class=\"linea4\">\n        </div>\n\n        <div class=\"linea5\">\n          <span>NÚMERO DE USUARIOS</span>\n        </div>\n\n        <div class=\"linea6\">\n          <span id=\"preci-user\">0 por usuario/mes</span>\n        </div>\n\n        <div class=\"linea7\">\n          <div class=\"num-user\">\n              <input type=\"number\" name=\"num-user\" (blur)=\"updateNumberUser()\" id=\"num-user\" value=\"0\">\n          </div>\n          <div class=\"price-num-user\">\n            <span>$0</span>\n          </div>\n        </div>\n\n      </div>\n\n      \n      \n      \n    </div>\n  </div>\n  <div class=\"item-derecho\">\n    <div class=\"margen2\">\n      <div class=\"linea1\">\n        <span>Resumen</span>\n      </div>\n      <div class=\"linea2\">\n        <div class=\"ciclo-facturacion\">Ciclo de facturación</div>\n        <div class=\"list-mes\">\n            <label for=\"btn-mes\" class=\"text-btn-mes\">\n            <ul>\n              <li>\n                <input type=\"checkbox\" name=\"\" id=\"btn-mes\">\n                <span id=\"mes-select-text\">Mensual</span><span class=\"icon-sort-down icon-dow2\"></span>\n                <ul class=\"submenu-mes\">\n                    <label for=\"btn-mes\" (click)=\"ActualizarMes('Anual','yearly')\"><li>Anual</label>\n                    <label for=\"btn-mes\" (click)=\"ActualizarMes('Mensual','monthly')\"><li>Mensual</li></label>\n                </ul>\n              </li>\n            </ul>\n          </label>\n        </div>\n        <div class=\"pago-anual\">Ahorre 10% con pago anual</div>\n        \n      </div>\n\n      <div class=\"linea3\">\n\n      </div>\n\n      <div class=\"linea4\">\n        <div class=\"texto1\">Testa gestión <span id=\"plan-select-text-invoice\">-</span></div>\n        <div class=\"monto1\"><span id=\"plan-select-price-invoice\"> $0</span></div>\n      </div>\n\n      <div class=\"linea5\">\n        <div class=\"texto1\">Usuarios: <span id=\"number-user-text-invoice\">0</span></div>\n        <div class=\"monto1\"><span id=\"number-user-price-invoice\"> $0</span></div>\n      </div>\n\n      <div class=\"linea3\">\n\n      </div>\n\n      <div class=\"linea6\">\n        <div class=\"texto1\">TOTAL</div>\n        <div class=\"monto1\"><span id=\"price-invoice\"></span></div>\n        <div class=\"iva\">con impuestos/mes</div>\n      </div>\n\n      <div class=\"linea7\">\n        <div class=\"acuerdo\">\n          <label for=\"btn-acuerdos\" (click)=\"habilitarBotonCaja()\">\n          <input type=\"checkbox\" name=\"btn-acuerdos\" id=\"btn-acuerdos\">\n          <!-- <label for=\"btn-acuerdos\"> -->\n          <span class=\"icon-ok\" name=\"check-btn\" id=\"check-btn\"></span>\n          <!-- </label> -->\n          </label>\n        </div>\n        <div class=\"acuerto-text\">\n          <label for=\"btn-acuerdos\" (click)=\"habilitarBotonCaja()\">\n              Acepto el <a>Acuerdo de suscripción principal</a> y la <a>Política de privacidad</a> y entiendo que mi suscripcion comenzará hoy.\n          </label>\n        </div>\n      </div>\n\n      <a>\n      <div class=\"linea8\" id=\"caja-btn\">\n        \n        <span class=\"pasar-por-caja\" id=\"pasar-por-caja\" (click)=\"pasarPorCaja();\">pasar por la caja</span>\n      \n      </div>\n    </a>\n\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/suscripcion/suscripcion.component.ts":
/*!******************************************************!*\
  !*** ./src/app/suscripcion/suscripcion.component.ts ***!
  \******************************************************/
/*! exports provided: SuscripcionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscripcionComponent", function() { return SuscripcionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _register_webservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/webservices.service */ "./src/app/register/webservices.service.ts");
/* harmony import */ var _planes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../planes */ "./src/app/planes.ts");
/* harmony import */ var _planes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../planes.service */ "./src/app/planes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { WebservicesService } from './webservices.service';



var SuscripcionComponent = /** @class */ (function () {
    function SuscripcionComponent(planesservice, route, authService, router, flashMensaje, firebase, webservice) {
        this.planesservice = planesservice;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.firebase = firebase;
        this.webservice = webservice;
        this.planlist = [];
        this.precioplan = 0;
        this.preciouser = 0;
        this.preciototal = 0;
        this.totalUser = 0;
        this.numUser = 0;
        this.valor = 0;
        this.planPago = 0;
        // valores
        this.UserSelectId = "";
        this.PlanSelectId = "";
        this.cycleSelectId = "";
        this.btn_gestion = "Gestión";
        this.btn_online = "Tienda online";
        this.btn_ventas = "Ventas";
        this.btn_mark = "Marketing";
        this.btn_soport = "Soporte";
    }
    SuscripcionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var accion = this.route.snapshot.paramMap.get('accion');
        // $('.formularios').loading('toggle');
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                auth.getIdToken(true).then(function (idToken) {
                    _this.idToken = idToken;
                    // console.log(this.idToken);
                    _this.webservice.getPlanesProductos(idToken, accion, 'plan').subscribe(function (data) {
                        // console.log(data);
                        var keys = Array(data);
                        keys.forEach(function (k) {
                            // console.log(k['id']);
                            // let c = Array(data[k]);
                            var p = new _planes__WEBPACK_IMPORTED_MODULE_6__["Planes"]();
                            p.id = Number(k['id']);
                            p.plan = k['label'];
                            p.price = Number(k['price_ttc']);
                            console.log(p);
                            _this.planlist.push(p);
                        });
                        $('body').loading('stop');
                        $('.link-2').addClass('menu-active');
                        _this.webservice.getPlanesProductos(idToken, accion, 'user').subscribe(function (data) {
                            console.log();
                            $("#preci-user").text('$' + data['price_ttc'] + " por usuario/mes");
                            _this.preciouser = data['price_ttc'];
                            _this.UserSelectId = data['id'];
                        });
                    });
                }).catch(function (_error) {
                    console.log('error 1');
                });
            }
            else {
                console.log('error 2');
            }
        });
    };
    SuscripcionComponent.prototype.listaPlanes = function (idtoken, producto) {
        //this.planesservice.getPlanes().subscribe(planlist=>this.planlist=planlist);
        console.log(this.planlist);
    };
    SuscripcionComponent.prototype.habilitarBotonCaja = function () {
        if ($('#btn-acuerdos').is(':checked')) {
            $("#caja-btn").css("background", "#b10053");
            $("#pasar-por-caja").css("color", "#FFFFFF");
        }
        else {
            $("#caja-btn").css("background", "rgba(177, 0, 83,0.12)");
            $("#pasar-por-caja").css("color", "rgba(0, 0, 0, 0.38);");
        }
    };
    SuscripcionComponent.prototype.ActualizarPlan = function (plan) {
        console.log(plan.price);
        console.log(plan.plan);
        var plans = plan.plan;
        var price = plan.price.toString();
        console.log(plans);
        console.log(price);
        this.PlanSelectId = plan.id;
        $("#plan-select-text").text(plans);
        $("#plan-select-price").text('$' + price);
        $("#plan-select-text-invoice").text(plans);
        $("#plan-select-price-invoice").text('$' + price);
        this.precioplan = plan.price;
        if (this.planPago == 0) {
            this.preciototal = this.precioplan + this.totalUser;
        }
        else {
            this.preciototal = this.precioplan + this.totalUser;
            this.preciototal = this.preciototal - ((this.preciototal * this.planPago) / 100);
        }
        $("#price-invoice").text('$' + this.preciototal);
    };
    SuscripcionComponent.prototype.updateNumberUser = function () {
        var numUser = $("#num-user").val();
        this.numUser = numUser;
        $('#number-user-text-invoice').text(numUser);
        this.totalUser = numUser * this.preciouser;
        $('#number-user-price-invoice').text('$' + this.totalUser);
        if (this.planPago == 0) {
            this.preciototal = this.precioplan + this.totalUser;
        }
        else {
            this.preciototal = this.precioplan + this.totalUser;
            this.preciototal = this.preciototal - ((this.preciototal * this.planPago) / 100);
        }
        $("#price-invoice").text('$' + this.preciototal);
        // console.log(this.valor);
    };
    SuscripcionComponent.prototype.ActualizarMes = function (mes, valor) {
        $("#mes-select-text").text(mes);
        this.cycleSelectId = valor;
        if (valor == 'yearly') {
            console.log('anual');
            this.planPago = 10;
        }
        else {
            console.log('mensual');
            this.planPago = 0;
        }
        console.log(this.planPago);
        if (this.planPago == 0) {
            this.preciototal = this.precioplan + this.totalUser;
        }
        else {
            this.preciototal = this.precioplan + this.totalUser;
            this.preciototal = this.preciototal - ((this.preciototal * this.planPago) / 100);
        }
        $("#price-invoice").text('$' + this.preciototal);
    };
    SuscripcionComponent.prototype.pasarPorCaja = function () {
        var body = {
            "reason_mercadopago": "asd",
            "back_url": "http://localhost:4200/",
            "cycle": this.cycleSelectId,
            "plan": this.PlanSelectId,
            "user": {
                "quantity": this.numUser,
                "id": this.UserSelectId
            }
        };
        this.webservice.putSolicitarLinkMercadoPago(this.idToken, body).subscribe(function (data) {
            console.log(data);
        });
    };
    SuscripcionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suscripcion',
            template: __webpack_require__(/*! ./suscripcion.component.html */ "./src/app/suscripcion/suscripcion.component.html"),
            styles: [__webpack_require__(/*! ./suscripcion.component.css */ "./src/app/suscripcion/suscripcion.component.css")]
        }),
        __metadata("design:paramtypes", [_planes_service__WEBPACK_IMPORTED_MODULE_7__["Planesservice"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _node_modules_angularfire2__WEBPACK_IMPORTED_MODULE_4__["FirebaseApp"],
            _register_webservices_service__WEBPACK_IMPORTED_MODULE_5__["WebservicesService"]])
    ], SuscripcionComponent);
    return SuscripcionComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDJXUpQT1mUlPOkmP452XRX13M7jFZqEuE",
        authDomain: "testa-digital.firebaseapp.com",
        databaseURL: "https://testa-digital.firebaseio.com",
        projectId: "testa-digital",
        storageBucket: "testa-digital.appspot.com",
        messagingSenderId: "1099096264517"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/omarorozco/Documents/testa-p copy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map