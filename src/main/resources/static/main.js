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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/equal-validator.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/_directives/equal-validator.directive.ts ***!
  \**********************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true';
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        var v = c.value;
        var e = c.root.get(this.validateEqual);
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    var EqualValidator_1;
    EqualValidator = EqualValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EqualValidator_1; }),
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('validateEqual')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('reverse')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });




/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (phone, password) {
        return this.http.get("/user/login?phone=" + phone + "&password=" + password);
    };
    UserService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        localStorage.removeItem('currentUser');
        localStorage.clear();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/aboutUs/aboutUs.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutUs/aboutUs.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Links */\na,\na:focus,\na:hover {\n  color: #fff;\n}\n/* Custom default button */\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n.maintop{\n  margin-top: 20%;\n}\n.cover-container {\n  max-width: 42em;\n}\n/*\n * Cover\n */\n.cover {\n  padding: 0 1.5rem;\n}\n.cover .btn-lg {\n  padding: .75rem 1.25rem;\n  font-weight: 700;\n}\n/*\n * Footer\n */\n.mastfoot {\n  color: rgba(255, 255, 255, .5);\n  margin-bottom: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRVcy9hYm91dFVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYOzs7RUFHRSxZQUFZO0NBQ2I7QUFFRCwyQkFBMkI7QUFDM0I7OztFQUdFLFlBQVk7RUFDWixrQkFBa0IsQ0FBQyxxQ0FBcUM7RUFDeEQsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFFRDs7R0FFRztBQUNIO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCO0FBR0Q7O0dBRUc7QUFDSDtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dFVzL2Fib3V0VXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExpbmtzICovXG5hLFxuYTpmb2N1cyxcbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogQ3VzdG9tIGRlZmF1bHQgYnV0dG9uICovXG4uYnRuLXNlY29uZGFyeSxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyLFxuLmJ0bi1zZWNvbmRhcnk6Zm9jdXMge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1zaGFkb3c6IG5vbmU7IC8qIFByZXZlbnQgaW5oZXJpdGFuY2UgZnJvbSBgYm9keWAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAuMDVyZW0gc29saWQgI2ZmZjtcbn1cbi5tYWludG9we1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG4uY292ZXItY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA0MmVtO1xufVxuXG4vKlxuICogQ292ZXJcbiAqL1xuLmNvdmVyIHtcbiAgcGFkZGluZzogMCAxLjVyZW07XG59XG4uY292ZXIgLmJ0bi1sZyB7XG4gIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5cbi8qXG4gKiBGb290ZXJcbiAqL1xuLm1hc3Rmb290IHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/aboutUs/aboutUs.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutUs/aboutUs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex w-100 h-90 p-3 mx-auto flex-column\">\n\n    <main role=\"main\" class=\"inner cover maintop\">\n        <h1 class=\"cover-heading\">About Us</h1><br>\n        <p class=\"lead\">Content need to add</p>\n    </main>\n\n    <footer class=\"mastfoot mt-5\">\n        <div class=\"inner\">\n            <p>Website for <a href=\"http://web.engr.oregonstate.edu/~scaffidc/courses/cs562/index.shtml?cb=1547975610290\">CS562</a>, by <a href=\"https://github.com/lirance/errands\">@Lirance and Brian</a>.</p>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/aboutUs/aboutUs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutUs/aboutUs.component.ts ***!
  \**********************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aboutUs',
            template: __webpack_require__(/*! ./aboutUs.component.html */ "./src/app/aboutUs/aboutUs.component.html"),
            styles: [__webpack_require__(/*! ./aboutUs.component.css */ "./src/app/aboutUs/aboutUs.component.css")]
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aboutUs_aboutUs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutUs/aboutUs.component */ "./src/app/aboutUs/aboutUs.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'aboutUs', component: _aboutUs_aboutUs_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Links */\na,\na:focus,\na:hover {\n  color: #fff;\n}\n/* Custom default button */\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n/*\n * Base structure\n */\n.cover-container {\n  max-width: 42em;\n}\n/*\n * Header\n */\n.masthead {\n  margin-bottom: 2rem;\n}\n.masthead-brand {\n  margin-bottom: 0;\n}\n.nav-masthead .nav-link {\n  padding: .25rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, .5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent;\n}\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, .25);\n}\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n.nav-masthead .active {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left;\n  }\n  .nav-masthead {\n    float: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYOzs7RUFHRSxZQUFZO0NBQ2I7QUFFRCwyQkFBMkI7QUFDM0I7OztFQUdFLFlBQVk7RUFDWixrQkFBa0IsQ0FBQyxxQ0FBcUM7RUFDeEQsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtDQUMzQjtBQUdEOztHQUVHO0FBRUg7RUFDRSxnQkFBZ0I7Q0FDakI7QUFFRDs7R0FFRztBQUNIO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5Qix3Q0FBd0M7Q0FDekM7QUFFRDs7RUFFRSw4Q0FBOEM7Q0FDL0M7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0U7SUFDRSxZQUFZO0dBQ2I7RUFDRDtJQUNFLGFBQWE7R0FDZDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMaW5rcyAqL1xuYSxcbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIEN1c3RvbSBkZWZhdWx0IGJ1dHRvbiAqL1xuLmJ0bi1zZWNvbmRhcnksXG4uYnRuLXNlY29uZGFyeTpob3Zlcixcbi5idG4tc2Vjb25kYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtc2hhZG93OiBub25lOyAvKiBQcmV2ZW50IGluaGVyaXRhbmNlIGZyb20gYGJvZHlgICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogLjA1cmVtIHNvbGlkICNmZmY7XG59XG5cblxuLypcbiAqIEJhc2Ugc3RydWN0dXJlXG4gKi9cblxuLmNvdmVyLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNDJlbTtcbn1cblxuLypcbiAqIEhlYWRlclxuICovXG4ubWFzdGhlYWQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubWFzdGhlYWQtYnJhbmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IC4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpob3Zlcixcbi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayArIC5uYXYtbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLm1hc3RoZWFkLWJyYW5kIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAubmF2LW1hc3RoZWFkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex w-100 h-10 p-3 mx-auto flex-column\">\n\t<header class=\"masthead mb-auto\">\n\t\t<div class=\"inner\">\n\t\t\t<h3 class=\"masthead-brand\">Errands</h3>\n\t\t\t<nav class=\"nav nav-masthead justify-content-center\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n\t\t<a class=\"nav-link\" routerLink=\"/aboutUs\" routerLinkActive=\"active\">About us</a>\n\t\t<a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Log in</a>\n        <a class=\"nav-link\" routerLink=\"/signup\" routerLinkActive=\"active\">Sign up</a>\n\t\t\t</nav>\n\t\t</div>\n\t</header>\n</div>\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _aboutUs_aboutUs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aboutUs/aboutUs.component */ "./src/app/aboutUs/aboutUs.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_directives/equal-validator.directive */ "./src/app/_directives/equal-validator.directive.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _aboutUs_aboutUs_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_12__["EqualValidator"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_13__["UserService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n<p>\n  search Id.\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Links */\na,\na:focus,\na:hover {\n  color: #fff;\n}\n/* Custom default button */\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n/*\n * Base structure\n */\n.cover-container {\n  max-width: 42em;\n}\n/*\n * Cover\n */\n.cover {\n  padding: 0 1.5rem;\n  margin-top: 20%;\n}\n.cover .btn-lg {\n  padding: .75rem 1.25rem;\n  font-weight: 700;\n}\n.masthead {\n  margin-bottom: 2rem;\n}\n/*\n * Footer\n */\n.mastfoot {\n  color: rgba(255, 255, 255, .5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYOzs7RUFHRSxZQUFZO0NBQ2I7QUFFRCwyQkFBMkI7QUFDM0I7OztFQUdFLFlBQVk7RUFDWixrQkFBa0IsQ0FBQyxxQ0FBcUM7RUFDeEQsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtDQUMzQjtBQUVEOztHQUVHO0FBRUg7RUFDRSxnQkFBZ0I7Q0FDakI7QUFFRDs7R0FFRztBQUNIO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7O0dBRUc7QUFDSDtFQUNFLCtCQUErQjtDQUNoQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTGlua3MgKi9cbmEsXG5hOmZvY3VzLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBDdXN0b20gZGVmYXVsdCBidXR0b24gKi9cbi5idG4tc2Vjb25kYXJ5LFxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIsXG4uYnRuLXNlY29uZGFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LXNoYWRvdzogbm9uZTsgLyogUHJldmVudCBpbmhlcml0YW5jZSBmcm9tIGBib2R5YCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IC4wNXJlbSBzb2xpZCAjZmZmO1xufVxuXG4vKlxuICogQmFzZSBzdHJ1Y3R1cmVcbiAqL1xuXG4uY292ZXItY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA0MmVtO1xufVxuXG4vKlxuICogQ292ZXJcbiAqL1xuLmNvdmVyIHtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cbi5jb3ZlciAuYnRuLWxnIHtcbiAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tYXN0aGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4vKlxuICogRm9vdGVyXG4gKi9cbi5tYXN0Zm9vdCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"cover-container d-flex w-100 h-90 p-3 mx-auto flex-column mt-auto\">\n  \n  <main role=\"main\" class=\"inner cover\">\n    <h1 class=\"cover-heading\">Get someone run your errands.</h1><br>\n    <p class=\"lead\">Errands is an app that people can post an order contains things they want to buy and other people can take the order and earn money from it.</p><br>\n    <p class=\"lead\">\n      <button routerLink=\"/login\" class=\"btn btn-lg btn-secondary mr-5\">Log in</button>\n      <button routerLink=\"/signup\" class=\"btn btn-lg btn-secondary\">Sign up</button>\n    </p>\n  </main>\n\n  <footer class=\"mastfoot mt-5\">\n    <div class=\"inner\">\n      <p>Website for <a href=\"http://web.engr.oregonstate.edu/~scaffidc/courses/cs562/index.shtml?cb=1547975610290\">CS562</a>, by <a href=\"https://github.com/lirance/errands\">@Lirance and Brian</a>.</p>\n    </div>\n  </footer>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: auto;\n  }\n.form-signin .checkbox {\n    font-weight: 400;\n}\n.form-signin .form-control {\n    position: relative;\n    box-sizing: border-box;\n    height: auto;\n    padding: 10px;\n    font-size: 16px;\n}\n.form-signin .form-control:focus {\n    z-index: 2;\n}\n.form-signin input[type=\"phone\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\na,\na:focus,\na:hover {\n  color: #fff;\n}\n.cover-container {\n    max-width: 42em;\n}\n.cover {\n    padding: 0 1.5rem;\n    margin-top: 20%;\n}\n.cover .btn-lg {\n    padding: .75rem 1.25rem;\n    font-weight: 700;\n}\n.mastfoot {\n    color: rgba(255, 255, 255, .5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7R0FDZDtBQUNIO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0dBQzlCO0FBQ0Q7SUFDRSxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLDJCQUEyQjtHQUM1QjtBQUVIOzs7RUFHRSxZQUFZO0VBQ1osa0JBQWtCLENBQUMscUNBQXFDO0VBQ3hELHVCQUF1QjtFQUN2QiwwQkFBMEI7Q0FDM0I7QUFFRDs7O0VBR0UsWUFBWTtDQUNiO0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLCtCQUErQjtDQUNsQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIHotaW5kZXg6IDI7XG59XG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBob25lXCJdIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIH1cbiAgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIFxuLmJ0bi1zZWNvbmRhcnksXG4uYnRuLXNlY29uZGFyeTpob3Zlcixcbi5idG4tc2Vjb25kYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtc2hhZG93OiBub25lOyAvKiBQcmV2ZW50IGluaGVyaXRhbmNlIGZyb20gYGJvZHlgICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogLjA1cmVtIHNvbGlkICNmZmY7XG59IFxuXG5hLFxuYTpmb2N1cyxcbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvdmVyLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA0MmVtO1xufVxuLmNvdmVyIHtcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG59XG4uY292ZXIgLmJ0bi1sZyB7XG4gICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tYXN0Zm9vdCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex w-100 h-90 p-3 mx-auto flex-column\">\n  <main role=\"main\" class=\"inner cover\">\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\" class=\"form-signin\">\n\n      <h1 class=\"mb-3 font-weight-normal\">Please log in</h1>\n\n      <div class=\"form-group\">\n        <label for=\"phone\" class=\"sr-only\">Phone Number</label>\n        <input type=\"phone\" id=\"phone\" class=\"form-control\" formControlName=\"phone\" placeholder=\"Phone Number\" required=\"\" autofocus=\"\">\n        <div *ngIf=\"loginForm.controls.phone.touched && !loginForm.controls.phone.valid\" class=\"alert alert-danger\">\n          Phone number is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required=\"\">\n        <div *ngIf=\"loginForm.controls.password.touched && loginForm.controls.password.errors\">\n          <div *ngIf=\"loginForm.controls.password.errors.invalidLogin\"\n               class=\"alert alert-danger\">\n            Phone number or password is invalid.\n          </div>\n          <div *ngIf=\"loginForm.controls.password.errors.required\" class=\"alert alert-danger\">\n            Password is required.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-lg btn-secondary btn-block mt-auto\" type=\"submit\">Log in</button>\n      </div>\n\n    </form>\n  </main>\n\n  <footer class=\"mastfoot mt-5\">\n    <div class=\"inner\">\n      <p>Website for <a href=\"http://web.engr.oregonstate.edu/~scaffidc/courses/cs562/index.shtml?cb=1547975610290\">CS562</a>,\n        by <a href=\"https://github.com/lirance/errands\">@Lirance and Brian</a>.</p>\n    </div>\n  </footer>\n\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.login(this.loginForm.controls['phone'].value, this.loginForm.controls['password'].value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (string) {
            _this.result = string;
            console.log(_this.result);
            if (_this.result) {
                _this.router.navigate(['/dashboard']);
            }
            if (!_this.result) {
                _this.loginForm.controls['password'].setErrors({
                    invalidLogin: true
                });
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signup {\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: auto;\n}\n\n.form-signup .checkbox {\n    font-weight: 400;\n}\n\n.form-signup .form-control {\n    position: relative;\n    box-sizing: border-box;\n    font-size: 16px;\n}\n\n.form-signup .form-control:focus {\n    z-index: 2;\n}\n\n.form-signup input{\n    margin-bottom: 10px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n\na,\na:focus,\na:hover {\n  color: #fff;\n}\n\n.maintop{\n    margin-top: 0%;\n}\n\n.cover-container {\n    max-width: 42em;\n}\n\n.cover {\n    padding: 0.5rem;\n}\n\n.cover .btn-lg {\n    padding: .75rem 1.25rem;\n    font-weight: 700;\n}\n\n.mastfoot {\n    color: rgba(255, 255, 255, .5);\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7Q0FDbkI7O0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDZCQUE2QjtHQUM5Qjs7QUFFSDs7O0VBR0UsWUFBWTtFQUNaLGtCQUFrQixDQUFDLHFDQUFxQztFQUN4RCx1QkFBdUI7RUFDdkIsMEJBQTBCO0NBQzNCOztBQUVEOzs7RUFHRSxZQUFZO0NBQ2I7O0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLCtCQUErQjtDQUNsQyIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2lnbnVwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZm9ybS1zaWdudXAgLmNoZWNrYm94IHtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZm9ybS1zaWdudXAgLmZvcm0tY29udHJvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZvcm0tc2lnbnVwIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIHotaW5kZXg6IDI7XG59XG4uZm9ybS1zaWdudXAgaW5wdXR7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG5cbi5idG4tc2Vjb25kYXJ5LFxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIsXG4uYnRuLXNlY29uZGFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LXNoYWRvdzogbm9uZTsgLyogUHJldmVudCBpbmhlcml0YW5jZSBmcm9tIGBib2R5YCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IC4wNXJlbSBzb2xpZCAjZmZmO1xufSBcblxuYSxcbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWFpbnRvcHtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbn1cbi5jb3Zlci1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNDJlbTtcbn1cbi5jb3ZlciB7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuLmNvdmVyIC5idG4tbGcge1xuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubWFzdGZvb3Qge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbn1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex w-100 h-90 p-3 mx-auto flex-column mb-auto\">\n  <main role=\"main\" class=\"inner cover\">\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"signupForm\" class=\"form-signup mt-auto\">\n\n      <h1 class=\"mb-3 font-weight-normal\">Sign Up</h1>\n\n      <div class=\"form-group\">\n        <label for=\"username\" class=\"sr-only\">Enter your username</label>\n        <input type=\"username\" id=\"username\" class=\"form-control\" formControlName=\"username\"\n               placeholder=\"Enter your username\" required=\"\"\n               autofocus=\"\">\n        <div *ngIf=\"signupForm.controls.username.touched && !signupForm.controls.username.valid\"\n             class=\"alert alert-danger\">\n          Username is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone\" class=\"sr-only\">Enter your phone number</label>\n        <input type=\"phone\" id=\"phone\" class=\"form-control\" formControlName=\"phone\"\n               placeholder=\"Enter your phone number\" required=\"\"\n               autofocus=\"\">\n        <div *ngIf=\"signupForm.controls.phone.touched && signupForm.controls.phone.errors\">\n          <div *ngIf=\"signupForm.controls.phone.errors.required\"\n               class=\"alert alert-danger\">\n            Phone number is required.\n          </div>\n\n          <div *ngIf=\"signupForm.controls.phone.errors.patternMismatch\"\n               class=\"alert alert-danger\">\n            Phone number should be 10 numbers.\n          </div>\n        </div>\n      </div>\n\n        <div class=\"form-group\">\n          <label for=\"address\" class=\"sr-only\">Enter your address</label>\n          <input type=\"address\" id=\"address\" class=\"form-control\" formControlName=\"address\"\n                 placeholder=\"Enter your address\" required=\"\"\n                 autofocus=\"\">\n          <div *ngIf=\"signupForm.controls.address.touched && !signupForm.controls.address.valid\"\n               class=\"alert alert-danger\">\n            Address is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"sr-only\">Enter your password</label>\n          <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\"\n                 placeholder=\"Enter your password\" required=\"\">\n          <div *ngIf=\"signupForm.controls.password.touched && !signupForm.controls.password.valid\"\n               class=\"alert alert-danger\">\n            Password is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"confirmPassword\" class=\"sr-only\">Confirm your password</label>\n          <input type=\"password\" id=\"confirmPassword\" class=\"form-control\" formControlName=\"confirmPassword\"\n                 placeholder=\"Confirm your password\"\n                 required=\"\">\n          <div *ngIf=\"signupForm.controls.confirmPassword.touched && !signupForm.controls.confirmPassword.valid\"\n               class=\"alert alert-danger\">\n            Confirm password is required\n          </div>\n        </div>\n\n        <button class=\"btn btn-lg btn-secondary btn-block mt-5\" type=\"submit\">Sign up</button>\n    </form>\n  </main>\n\n  <footer class=\"mastfoot mt-5\">\n    <div class=\"inner\">\n      <p>Website for <a href=\"http://web.engr.oregonstate.edu/~scaffidc/courses/cs562/index.shtml?cb=1547975610290\">CS562</a>,\n        by <a href=\"https://github.com/lirance/errands\">@Lirance and Brian</a>.</p>\n    </div>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(formBuilder, route, router, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SignUpComponent.prototype.onSubmit = function () { };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SignUpComponent);
    return SignUpComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiurl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Brian/Desktop/osu/2019/Angular/errands/src/main/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map