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

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



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
function EqualValidator(otherControlName) {
    var thisControl;
    var otherControl;
    return function (control) {
        if (!control.parent) {
            return null;
        }
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName);
            if (!otherControl) {
                throw new Error('EqualValidator(): other control is not found in parent group');
            }
            otherControl.valueChanges.subscribe(function () {
                thisControl.updateValueAndValidity();
            });
        }
        if (!otherControl) {
            return null;
        }
        if (otherControl.value !== thisControl.value) {
            return {
                EqualValidator: true
            };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: UserService, OrderService, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.service */ "./src/app/_services/order.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]; });






/***/ }),

/***/ "./src/app/_services/order.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/order.service.ts ***!
  \********************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.getOrderlist = function () {
        return this.http.get('http://localhost:8080/orders/getOrders');
    };
    OrderService.prototype.createOrder = function (order) {
        return this.http.post('http://localhost:8080/order/create?userid=' + order.maker + '&itemlist=' + order.itemlist +
            '&storeadd=' + order.storeadd + '&destination=' + order.destination + '&timelimit=' + order.timelimit + '&tip=' + order.tip, order);
    };
    OrderService.prototype.getOrderDetail = function (orderid) {
        return this.http.get('http://localhost:8080/orders/getOrderDetailById?orderId=' + orderid);
    };
    OrderService.prototype.acceptOrder = function (userid, orderid) {
        return this.http.get('http://localhost:8080/order/accept?userId=' + userid + '&orderId=' + orderid);
    };
    OrderService.prototype.completeOrder = function (userid, orderid) {
        return this.http.get('http://localhost:8080/order/complete?userId=' + userid + '&orderId=' + orderid);
    };
    OrderService.prototype.rateOrder = function (userid, orderid, rate) {
        return this.http.get('http://localhost:8080/order/rate?orderId=' + orderid + '&userId=' + userid + '&rate=' + rate);
    };
    OrderService.prototype.getCreatedOrder = function (userid) {
        return this.http.get('http://localhost:8080/orders/getCreateOrder?userId=' + userid);
    };
    OrderService.prototype.getAcceptedOrder = function (userid) {
        return this.http.get('http://localhost:8080/orders/getAcceptedOrder?userId=' + userid);
    };
    OrderService.prototype.cancelAcceptedOrder = function (userid, orderid) {
        return this.http.get('http://localhost:8080/order/cancel?userId=' + userid + '&orderId=' + orderid);
    };
    OrderService.prototype.deleteOrder = function (userid, orderid) {
        return this.http.get('http://localhost:8080/order/delete?userId=' + userid + '&orderId=' + orderid);
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



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
        return this.http.get("http://localhost:8080/user/login/getId?phone=" + phone + "&password=" + password);
    };
    UserService.prototype.signup = function (user) {
        return this.http.post("http://localhost:8080/user/register?phone=" + user.phone + "&password=" + user.password + "&username=" + user.username + "&address=" + user.address, user);
    };
    UserService.prototype.getUserByphone = function (phone) {
        return this.http.post("http://localhost:8080/user/getUserByPhone?phone=" + phone, phone);
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get("http://localhost:8080/user/getUserById?userid=" + id);
    };
    UserService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        localStorage.removeItem('currentUser');
        localStorage.clear();
    };
    UserService.prototype.profileEdit = function (userid, phone, username, address) {
        return this.http.get('http://localhost:8080/user/editProfile?userid=' + userid + '&phone=' + phone + '&username=' + username + '&address=' + address);
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

module.exports = "/* Links */\na,\na:focus,\na:hover {\n  color: #fff;\n}\n/* Custom default button */\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n.cover-container {\n  max-width: 42em;\n}\n/*\n * Cover\n */\n.cover {\n  padding: 0 1.5rem;\n}\n.cover .btn-lg {\n  padding: .75rem 1.25rem;\n  font-weight: 700;\n}\n/*\n * Footer\n */\n.mastfoot {\n  color: rgba(255, 255, 255, .5);\n  margin-bottom: 10%;\n}\n.masthead {\n  margin-bottom: 2rem;\n}\n.masthead-brand {\n  margin-bottom: 0;\n}\n.nav-masthead .nav-link {\n  padding: .25rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, .5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent;\n}\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, .25);\n}\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n.nav-masthead .active {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left;\n  }\n  .nav-masthead {\n    float: right;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRVcy9hYm91dFVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYOzs7RUFHRSxZQUFZO0NBQ2I7QUFFRCwyQkFBMkI7QUFDM0I7OztFQUdFLFlBQVk7RUFDWixrQkFBa0IsQ0FBQyxxQ0FBcUM7RUFDeEQsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBRUQ7O0dBRUc7QUFDSDtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtDQUNsQjtBQUdEOztHQUVHO0FBQ0g7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLHdDQUF3QztDQUN6QztBQUVEOztFQUVFLDhDQUE4QztDQUMvQztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBRUQ7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRTtJQUNFLFlBQVk7R0FDYjtFQUNEO0lBQ0UsYUFBYTtHQUNkO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dFVzL2Fib3V0VXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExpbmtzICovXG5hLFxuYTpmb2N1cyxcbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogQ3VzdG9tIGRlZmF1bHQgYnV0dG9uICovXG4uYnRuLXNlY29uZGFyeSxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyLFxuLmJ0bi1zZWNvbmRhcnk6Zm9jdXMge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1zaGFkb3c6IG5vbmU7IC8qIFByZXZlbnQgaW5oZXJpdGFuY2UgZnJvbSBgYm9keWAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAuMDVyZW0gc29saWQgI2ZmZjtcbn1cblxuLmNvdmVyLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNDJlbTtcbn1cblxuLypcbiAqIENvdmVyXG4gKi9cbi5jb3ZlciB7XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xufVxuLmNvdmVyIC5idG4tbGcge1xuICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuXG4vKlxuICogRm9vdGVyXG4gKi9cbi5tYXN0Zm9vdCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4ubWFzdGhlYWQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubWFzdGhlYWQtYnJhbmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IC4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpob3Zlcixcbi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayArIC5uYXYtbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLm1hc3RoZWFkLWJyYW5kIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAubmF2LW1hc3RoZWFkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/aboutUs/aboutUs.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutUs/aboutUs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\n\n  <header class=\"masthead mb-auto\">\n    <div class=\"inner\">\n      <h3 class=\"masthead-brand\">Errands</h3>\n      <nav class=\"nav nav-masthead justify-content-center\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        <a class=\"nav-link\" routerLink=\"/aboutUs\" routerLinkActive=\"active\">About us</a>\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Log in</a>\n        <a class=\"nav-link\" routerLink=\"/signup\" routerLinkActive=\"active\">Sign up</a>\n      </nav>\n    </div>\n  </header>\n\n    <main role=\"main\" class=\"inner cover\">\n        <h1 class=\"cover-heading\">About Us</h1><br>\n        <p class=\"lead\">Errands is a web application that Lirance and Brian made for course CS562. People can post orders and others can take the order to do some errands and earn money.</p>\n    </main>\n\n    <footer class=\"mastfoot mt-auto\">\n        <div class=\"inner\">\n            <p>Website for <a href=\"http://web.engr.oregonstate.edu/~scaffidc/courses/cs562/index.shtml?cb=1547975610290\">CS562</a>, by <a href=\"https://github.com/lirance/errands\">@Lirance and Brian</a>.</p>\n        </div>\n    </footer>\n</div>\n"

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

/***/ "./src/app/accept-dialog/accept-dialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/accept-dialog/accept-dialog.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2VwdC1kaWFsb2cvYWNjZXB0LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/accept-dialog/accept-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/accept-dialog/accept-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"text-center\">Accept Result</h2>\n\n<mat-dialog-content class=\"text-center\">\n  <p *ngIf=\"acceptResult\">Accept success!</p>\n  <p *ngIf=\"!acceptResult\">Accept failed!</p>\n</mat-dialog-content>\n\n<div class=\"row\">\n  <div class=\"col text-center\">\n    <button class=\"btn btn-info\" (click)=\"close()\">Confirm</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/accept-dialog/accept-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/accept-dialog/accept-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: AcceptDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptDialogComponent", function() { return AcceptDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AcceptDialogComponent = /** @class */ (function () {
    function AcceptDialogComponent(router, dialogRef, data) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.acceptResult = data.acceptResult;
    }
    AcceptDialogComponent.prototype.ngOnInit = function () {
    };
    AcceptDialogComponent.prototype.close = function () {
        this.dialogRef.close();
        window.location.reload();
    };
    AcceptDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accept-dialog',
            template: __webpack_require__(/*! ./accept-dialog.component.html */ "./src/app/accept-dialog/accept-dialog.component.html"),
            styles: [__webpack_require__(/*! ./accept-dialog.component.css */ "./src/app/accept-dialog/accept-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AcceptDialogComponent);
    return AcceptDialogComponent;
}());



/***/ }),

/***/ "./src/app/accepted-order-list/accepted-order-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/accepted-order-list/accepted-order-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2VwdGVkLW9yZGVyLWxpc3QvYWNjZXB0ZWQtb3JkZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/accepted-order-list/accepted-order-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/accepted-order-list/accepted-order-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-dark\" *ngIf='acceptOrderList != []'>\n  <div *ngFor=\"let order of acceptOrderList\" class=\"col-md-4\">\n    <div class=\"card mb-4 box-shadow\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\"> {{order.orderid}} </h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Time limit: {{order.timelimit}} hours.</h6>\n      </div>\n\n      <ul class=\"list-group list-group-flush text-left\">\n        <li class=\"list-group-item\">Store address: {{order.storeadd}} </li>\n        <li class=\"list-group-item\">Destination adress: {{order.destination}} </li>\n        <li class=\"list-group-item\">Tips: {{order.tip}} dollar</li>\n      </ul>\n\n      <div class=\"card-body\">\n        <a [routerLink]=\"['/dashboard', {outlets: {'aux': ['orderdetail', order.orderid]}}]\" class=\"card-link\">See Detail</a>\n        <a *ngIf= \"!order.rated\" (click)=\"rate(order.orderid, order.state)\" class=\"card-link text-primary\">Rate</a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/accepted-order-list/accepted-order-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accepted-order-list/accepted-order-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: AcceptedOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptedOrderListComponent", function() { return AcceptedOrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _rate_order_dialog_rate_order_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rate-order-dialog/rate-order-dialog.component */ "./src/app/rate-order-dialog/rate-order-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AcceptedOrderListComponent = /** @class */ (function () {
    function AcceptedOrderListComponent(orderService, dialog, router, route) {
        this.orderService = orderService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.acceptOrderList = [];
    }
    AcceptedOrderListComponent.prototype.ngOnInit = function () {
        this.currentUserID = localStorage.getItem('currentUserID');
        this.getAcceptedOrderlist();
    };
    AcceptedOrderListComponent.prototype.getAcceptedOrderlist = function () {
        var _this = this;
        this.orderService.getAcceptedOrder(this.currentUserID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (orders) {
            _this.acceptOrderList = orders;
        });
    };
    AcceptedOrderListComponent.prototype.rate = function (orderid, state) {
        this.openRateDialog(orderid, state);
    };
    AcceptedOrderListComponent.prototype.openRateDialog = function (orderid, state) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { orderid: orderid, state: state };
        this.dialog.open(_rate_order_dialog_rate_order_dialog_component__WEBPACK_IMPORTED_MODULE_5__["RateOrderDialogComponent"], dialogConfig);
    };
    AcceptedOrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accepted-order-list',
            template: __webpack_require__(/*! ./accepted-order-list.component.html */ "./src/app/accepted-order-list/accepted-order-list.component.html"),
            styles: [__webpack_require__(/*! ./accepted-order-list.component.css */ "./src/app/accepted-order-list/accepted-order-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AcceptedOrderListComponent);
    return AcceptedOrderListComponent;
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
/* harmony import */ var _dashhome_dashhome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashhome/dashhome.component */ "./src/app/dashhome/dashhome.component.ts");
/* harmony import */ var _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-order/create-order.component */ "./src/app/create-order/create-order.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-detail/order-detail.component */ "./src/app/order-detail/order-detail.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _my_order_my_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-order/my-order.component */ "./src/app/my-order/my-order.component.ts");
/* harmony import */ var _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./public-profile/public-profile.component */ "./src/app/public-profile/public-profile.component.ts");














var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'aboutUs', component: _aboutUs_aboutUs_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"] },
    { path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        children: [
            { path: '', redirectTo: 'dashhome', pathMatch: 'full' },
            { path: 'dashhome', component: _dashhome_dashhome_component__WEBPACK_IMPORTED_MODULE_8__["DashhomeComponent"], outlet: 'aux' },
            { path: 'profile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__["UserprofileComponent"], outlet: 'aux' },
            { path: 'createorder', component: _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_9__["CreateOrderComponent"], outlet: 'aux' },
            { path: 'myorder', component: _my_order_my_order_component__WEBPACK_IMPORTED_MODULE_12__["MyOrderComponent"], outlet: 'aux' },
            { path: 'orderdetail/:orderid', component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_10__["OrderDetailComponent"], outlet: 'aux' },
            { path: 'publicprofile/:userid', component: _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_13__["PublicProfileComponent"], outlet: 'aux' },
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'reload' })],
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

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _aboutUs_aboutUs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aboutUs/aboutUs.component */ "./src/app/aboutUs/aboutUs.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashhome_dashhome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashhome/dashhome.component */ "./src/app/dashhome/dashhome.component.ts");
/* harmony import */ var _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-order/create-order.component */ "./src/app/create-order/create-order.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order-detail/order-detail.component */ "./src/app/order-detail/order-detail.component.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/order.service */ "./src/app/_services/order.service.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _accept_dialog_accept_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./accept-dialog/accept-dialog.component */ "./src/app/accept-dialog/accept-dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _my_order_my_order_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./my-order/my-order.component */ "./src/app/my-order/my-order.component.ts");
/* harmony import */ var _complete_dialog_complete_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./complete-dialog/complete-dialog.component */ "./src/app/complete-dialog/complete-dialog.component.ts");
/* harmony import */ var _created_order_list_created_order_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./created-order-list/created-order-list.component */ "./src/app/created-order-list/created-order-list.component.ts");
/* harmony import */ var _accepted_order_list_accepted_order_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./accepted-order-list/accepted-order-list.component */ "./src/app/accepted-order-list/accepted-order-list.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _rate_order_dialog_rate_order_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rate-order-dialog/rate-order-dialog.component */ "./src/app/rate-order-dialog/rate-order-dialog.component.ts");
/* harmony import */ var _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./public-profile/public-profile.component */ "./src/app/public-profile/public-profile.component.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _aboutUs_aboutUs_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _dashhome_dashhome_component__WEBPACK_IMPORTED_MODULE_14__["DashhomeComponent"],
                _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_15__["CreateOrderComponent"],
                _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_16__["OrderDetailComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_18__["AlertComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_19__["UserprofileComponent"],
                _accept_dialog_accept_dialog_component__WEBPACK_IMPORTED_MODULE_20__["AcceptDialogComponent"],
                _my_order_my_order_component__WEBPACK_IMPORTED_MODULE_22__["MyOrderComponent"],
                _complete_dialog_complete_dialog_component__WEBPACK_IMPORTED_MODULE_23__["CompleteDialogComponent"],
                _created_order_list_created_order_list_component__WEBPACK_IMPORTED_MODULE_24__["CreatedOrderListComponent"],
                _accepted_order_list_accepted_order_list_component__WEBPACK_IMPORTED_MODULE_25__["AcceptedOrderListComponent"],
                _rate_order_dialog_rate_order_dialog_component__WEBPACK_IMPORTED_MODULE_27__["RateOrderDialogComponent"],
                _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_28__["PublicProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_order_service__WEBPACK_IMPORTED_MODULE_17__["OrderService"],
                _services__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _services__WEBPACK_IMPORTED_MODULE_12__["AlertService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_accept_dialog_accept_dialog_component__WEBPACK_IMPORTED_MODULE_20__["AcceptDialogComponent"], _complete_dialog_complete_dialog_component__WEBPACK_IMPORTED_MODULE_23__["CompleteDialogComponent"], _rate_order_dialog_rate_order_dialog_component__WEBPACK_IMPORTED_MODULE_27__["RateOrderDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/complete-dialog/complete-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/complete-dialog/complete-dialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsZXRlLWRpYWxvZy9jb21wbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/complete-dialog/complete-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/complete-dialog/complete-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"text-center\">Complete Result</h2>\n\n<mat-dialog-content class=\"text-center\">\n  <p *ngIf=\"completeResult\">Complete success!</p>\n  <p *ngIf=\"!completeResult\">This order is already completed!</p>\n</mat-dialog-content>\n\n<div class=\"row\">\n  <div class=\"col text-center\">\n    <button class=\"btn btn-info\" (click)=\"close()\">Confirm</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/complete-dialog/complete-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/complete-dialog/complete-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: CompleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteDialogComponent", function() { return CompleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CompleteDialogComponent = /** @class */ (function () {
    function CompleteDialogComponent(router, dialogRef, data) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.completeResult = data.completeResult;
    }
    CompleteDialogComponent.prototype.ngOnInit = function () {
    };
    CompleteDialogComponent.prototype.close = function () {
        this.dialogRef.close();
        window.location.reload();
    };
    CompleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complete-dialog',
            template: __webpack_require__(/*! ./complete-dialog.component.html */ "./src/app/complete-dialog/complete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./complete-dialog.component.css */ "./src/app/complete-dialog/complete-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], CompleteDialogComponent);
    return CompleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/create-order/create-order.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-order/create-order.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1vcmRlci9jcmVhdGUtb3JkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/create-order/create-order.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-order/create-order.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-dark\">Create an order</h2>\n<form [formGroup]=\"orderForm\" (ngSubmit)=\"onSubmit()\" class=\"text-dark text-left\">\n\n  <div class=\"form-group\">\n    <label for=\"itemlist\"> Item List (use , for separated items, max length 200)</label>\n    <input type=\"text\" placeholder=\"e.g. apple, banana\" id=\"itemlist\" formControlName=\"itemlist\" class=\"form-control\"\n           [ngClass]=\"{ 'is-invalid': submitted && f.itemlist.errors }\"/>\n    <div *ngIf=\"submitted && f.itemlist.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.itemlist.errors.required\">Item list is required</div>\n      <div *ngIf=\"f.itemlist.errors.maxLength\">The max length is 200</div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"storeadd\"> Store address (max length 50) </label>\n    <input type=\"text\" placeholder=\"e.g. Circle K on Monroe\" id=\"storeadd\" formControlName=\"storeadd\"\n           class=\"form-control\"\n           [ngClass]=\"{ 'is-invalid': submitted && f.storeadd.errors }\"/>\n    <div *ngIf=\"submitted && f.storeadd.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.storeadd.errors.required\">Store address is required</div>\n      <div *ngIf=\"f.storeadd.errors.maxLength\">The max length is 50</div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"destination\">Destination(defult value is registered address, max length is 50)</label>\n    <input type=\"text\" placeholder=\"e.g. 123NW 123Street\" id=\"destination\" formControlName=\"destination\"\n           class=\"form-control\"\n           [ngClass]=\"{ 'is-invalid': submitted && f.destination.errors }\"/>\n    <div *ngIf=\"submitted && f.destination.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.destination.errors.maxLength\">The max length is 50</div>\n    </div>\n  </div>\n\n\n  <div class=\"form-group\">\n    <label for=\"timelimit\">Limit Time(hours) (up to 3 positive number)</label>\n    <input type=\"number\" id=\"timelimit\" formControlName=\"timelimit\" class=\"form-control\"\n           [ngClass]=\"{ 'is-invalid': submitted && f.timelimit.errors }\"/>\n    <div *ngIf=\"submitted && f.timelimit.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.timelimit.errors.required\">The time limit is required</div>\n      <div *ngIf=\"f.timelimit.errors.maxLength\">The max length of time limit is 3</div>\n      <div *ngIf=\"f.timelimit.errors.pattern\">The format is 3 digit number</div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"tip\">Tips (Max 2 decimal)</label>\n    <input type=\"number\" id=\"tip\" formControlName=\"tip\" class=\"form-control\"\n           [ngClass]=\"{ 'is-invalid': submitted && f.tip.errors }\"/>\n    <div *ngIf=\"submitted && f.tip.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.tip.errors.required\">The tip is required</div>\n      <div *ngIf=\"f.tip.errors.maxLength\">The max length of tip is 7</div>\n      <div *ngIf=\"f.tip.errors.pattern\">The format of tip is 2 decimal number</div>\n    </div>\n  </div>\n\n\n  <div class=\"form-group text-center\">\n    <button class=\"btn btn-primary\">Submit</button>\n    <a (click)=\"backtolast()\" class=\"btn btn-link\">Cancel</a>\n  </div>\n\n</form>\n\n<br><br>\n"

/***/ }),

/***/ "./src/app/create-order/create-order.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-order/create-order.component.ts ***!
  \********************************************************/
/*! exports provided: CreateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderComponent", function() { return CreateOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/order.service */ "./src/app/_services/order.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var CreateOrderComponent = /** @class */ (function () {
    function CreateOrderComponent(formBuilder, router, orderServie, alertService, location) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.orderServie = orderServie;
        this.alertService = alertService;
        this.location = location;
        this.loading = false;
        this.submitted = false;
    }
    CreateOrderComponent.prototype.ngOnInit = function () {
        this.orderForm = this.formBuilder.group({
            orderid: [],
            itemlist: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)])],
            storeadd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            state: [],
            timelimit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\d{1,3}?$')])],
            tip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\d{0,5}(\\.\\d{1,2})?$')])],
            maker: [],
            recipient: []
        });
    };
    Object.defineProperty(CreateOrderComponent.prototype, "f", {
        get: function () {
            return this.orderForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateOrderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.orderForm.value.maker = localStorage.getItem('currentUserID');
        if (!this.orderForm.controls.itemlist.errors && !this.orderForm.controls.storeadd.errors &&
            !this.orderForm.controls.destination.errors && !this.orderForm.controls.timelimit.errors &&
            !this.orderForm.controls.tip.errors) {
            this.orderServie.createOrder(this.orderForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (success) {
                console.log('success!');
                _this.router.navigate(['/dashboard', { outlets: { 'aux': ['dashhome'] } }]);
            });
        }
        ;
        this.loading = true;
    };
    CreateOrderComponent.prototype.backtolast = function () {
        this.location.back();
    };
    CreateOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-order',
            template: __webpack_require__(/*! ./create-order.component.html */ "./src/app/create-order/create-order.component.html"),
            styles: [__webpack_require__(/*! ./create-order.component.css */ "./src/app/create-order/create-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], CreateOrderComponent);
    return CreateOrderComponent;
}());



/***/ }),

/***/ "./src/app/created-order-list/created-order-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/created-order-list/created-order-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZWQtb3JkZXItbGlzdC9jcmVhdGVkLW9yZGVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/created-order-list/created-order-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/created-order-list/created-order-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-dark\" *ngIf='createdOrderList != []'>\n  <div *ngFor=\"let order of createdOrderList\" class=\"col-md-4\">\n    <div class=\"card mb-4 box-shadow\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\"> {{order.orderid}} </h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Time limit: {{order.timelimit}} hours.</h6>\n      </div>\n\n      <ul class=\"list-group list-group-flush text-left\">\n        <li class=\"list-group-item\">Store address: {{order.storeadd}} </li>\n        <li class=\"list-group-item\">Destination adress: {{order.destination}} </li>\n        <li class=\"list-group-item\">Tips: {{order.tip}} dollar</li>\n      </ul>\n\n      <div class=\"card-body\">\n        <a [routerLink]=\"['/dashboard', {outlets: {'aux': ['orderdetail', order.orderid]}}]\" class=\"card-link\">See Detail</a>\n        <a *ngIf= \"!order.rated\" (click)=\"rate(order.orderid, order.state)\" class=\"card-link text-primary\">Rate</a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/created-order-list/created-order-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/created-order-list/created-order-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CreatedOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedOrderListComponent", function() { return CreatedOrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _rate_order_dialog_rate_order_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rate-order-dialog/rate-order-dialog.component */ "./src/app/rate-order-dialog/rate-order-dialog.component.ts");







var CreatedOrderListComponent = /** @class */ (function () {
    function CreatedOrderListComponent(orderService, dialog, router, route) {
        this.orderService = orderService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.createdOrderList = [];
    }
    CreatedOrderListComponent.prototype.ngOnInit = function () {
        this.currentUserID = localStorage.getItem('currentUserID');
        this.getCreatedOrderlist();
    };
    CreatedOrderListComponent.prototype.getCreatedOrderlist = function () {
        var _this = this;
        this.orderService.getCreatedOrder(this.currentUserID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (orders) {
            _this.createdOrderList = orders;
        });
    };
    CreatedOrderListComponent.prototype.rate = function (orderid, state) {
        this.openRateDialog(orderid, state);
    };
    CreatedOrderListComponent.prototype.openRateDialog = function (orderid, state) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { orderid: orderid, state: state };
        this.dialog.open(_rate_order_dialog_rate_order_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RateOrderDialogComponent"], dialogConfig);
    };
    CreatedOrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-created-order-list',
            template: __webpack_require__(/*! ./created-order-list.component.html */ "./src/app/created-order-list/created-order-list.component.html"),
            styles: [__webpack_require__(/*! ./created-order-list.component.css */ "./src/app/created-order-list/created-order-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CreatedOrderListComponent);
    return CreatedOrderListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Links */\na,\na:focus,\na:hover {\n  color: #fff;\n}\n.navcontainer{\n  width: 1020px;\n  margin-left: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDs7O0VBR0UsWUFBWTtDQUNiO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTGlua3MgKi9cbmEsXG5hOmZvY3VzLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2Y29udGFpbmVye1xuICB3aWR0aDogMTAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light h-10\" style=\"background-color: #f0b07b;\">\n  <div class=\"navcontainer\">\n    <div class=\"row\">\n      <a class=\"navbar-brand \" routerLink=\"\">Errands</a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard', {outlets: {'aux': ['dashhome']}}]\">Home<span\n              class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard', {outlets: {'aux': ['createorder']}}]\">Create Order</a>\n          </li>\n          <li classs=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard', {outlets: {'aux': ['myorder']}}]\">My order</a>\n          </li>\n\n        </ul>\n\n        <div class=\"nav-item dropdown\">\n          <button *ngIf=\"currentUser\" class=\" btn dropdown-toggle text-primary\" id=\"dropdownMenuButton\" type=\"button\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{currentUser.username}}\n          </button>\n\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item text-dark\" [routerLink]=\"['/dashboard', {outlets: {'aux': ['profile']}}]\">Edit Profile</a>\n            <a class=\"dropdown-item text-dark\" (click)=\"userLogout()\">Log Out</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"jumbotron h-90\">\n  <div class=\"container\">\n    <router-outlet name=\"aux\"></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.currentUserID = localStorage.getItem('currentUserID');
        this.getUserbyuserId(this.currentUserID);
    };
    DashboardComponent.prototype.getUserbyuserId = function (userId) {
        var _this = this;
        this.userService.getUserById(this.currentUserID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (user) {
            _this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
        });
    };
    DashboardComponent.prototype.userLogout = function () {
        localStorage.clear();
        this.router.navigate(['']);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashhome/dashhome.component.css":
/*!*************************************************!*\
  !*** ./src/app/dashhome/dashhome.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hob21lL2Rhc2hob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashhome/dashhome.component.html":
/*!**************************************************!*\
  !*** ./src/app/dashhome/dashhome.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-dark\" *ngIf='orderList != []'>\n  <div *ngFor=\"let order of orderList\" class=\"col-md-4\">\n    <div class=\"card mb-4 box-shadow\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\"> {{order.orderid}} </h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Time limit: {{order.timelimit}} hours.</h6>\n      </div>\n\n      <ul class=\"list-group list-group-flush text-left\">\n        <li class=\"list-group-item\">Store address: {{order.storeadd}} </li>\n        <li class=\"list-group-item\">Destination adress: {{order.destination}} </li>\n        <li class=\"list-group-item\">Tips: {{order.tip}} dollar</li>\n      </ul>\n\n      <div class=\"card-body\">\n        <a [routerLink]=\"['/dashboard', {outlets: {'aux': ['orderdetail', order.orderid]}}]\" class=\"card-link\">See Detail</a>\n        <a routerLink=\" \" *ngIf=\"order.maker.userid != currentUserID\" class=\"card-link\" (click)=\"accept(order.orderid)\">Accept</a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashhome/dashhome.component.ts":
/*!************************************************!*\
  !*** ./src/app/dashhome/dashhome.component.ts ***!
  \************************************************/
/*! exports provided: DashhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashhomeComponent", function() { return DashhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/order.service */ "./src/app/_services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _accept_dialog_accept_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../accept-dialog/accept-dialog.component */ "./src/app/accept-dialog/accept-dialog.component.ts");







var DashhomeComponent = /** @class */ (function () {
    function DashhomeComponent(orderService, router, dialog) {
        this.orderService = orderService;
        this.router = router;
        this.dialog = dialog;
        this.orderList = [];
    }
    DashhomeComponent.prototype.ngOnInit = function () {
        this.getOrderList();
        this.currentUserID = localStorage.getItem('currentUserID');
    };
    DashhomeComponent.prototype.getOrderList = function () {
        var _this = this;
        this.orderService.getOrderlist().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (orderList) {
            _this.orderList = orderList;
        });
    };
    DashhomeComponent.prototype.accept = function (orderid) {
        var _this = this;
        this.orderService.acceptOrder(this.currentUserID, orderid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (result) {
            result.toString();
            console.log(result);
            _this.acceptResult = result;
            _this.openAcceptDialog();
        });
    };
    DashhomeComponent.prototype.openAcceptDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            acceptResult: this.acceptResult
        };
        this.dialog.open(_accept_dialog_accept_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AcceptDialogComponent"], dialogConfig);
    };
    DashhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashhome',
            template: __webpack_require__(/*! ./dashhome.component.html */ "./src/app/dashhome/dashhome.component.html"),
            styles: [__webpack_require__(/*! ./dashhome.component.css */ "./src/app/dashhome/dashhome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], DashhomeComponent);
    return DashhomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Links */\na,\na:focus,\na:hover {\n  color: #fff;\n}\n/* Custom default button */\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n/*\n * Base structure\n */\n.cover-container {\n  max-width: 42em;\n}\n/*\n * Cover\n */\n.cover {\n  padding: 0 1.5rem;\n}\n.cover .btn-lg {\n  padding: .75rem 1.25rem;\n  font-weight: 700;\n}\n.masthead {\n  margin-bottom: 2rem;\n}\n/*\n * Footer\n */\n.mastfoot {\n  color: rgba(255, 255, 255, .5);\n}\n.masthead-brand {\n  margin-bottom: 0;\n}\n.nav-masthead .nav-link {\n  padding: .25rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, .5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent;\n}\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, .25);\n}\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n.nav-masthead .active {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left;\n  }\n  .nav-masthead {\n    float: right;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYOzs7RUFHRSxZQUFZO0NBQ2I7QUFFRCwyQkFBMkI7QUFDM0I7OztFQUdFLFlBQVk7RUFDWixrQkFBa0IsQ0FBQyxxQ0FBcUM7RUFDeEQsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtDQUMzQjtBQUVEOztHQUVHO0FBRUg7RUFDRSxnQkFBZ0I7Q0FDakI7QUFFRDs7R0FFRztBQUNIO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDs7R0FFRztBQUNIO0VBQ0UsK0JBQStCO0NBQ2hDO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5Qix3Q0FBd0M7Q0FDekM7QUFFRDs7RUFFRSw4Q0FBOEM7Q0FDL0M7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0U7SUFDRSxZQUFZO0dBQ2I7RUFDRDtJQUNFLGFBQWE7R0FDZDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMaW5rcyAqL1xuYSxcbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIEN1c3RvbSBkZWZhdWx0IGJ1dHRvbiAqL1xuLmJ0bi1zZWNvbmRhcnksXG4uYnRuLXNlY29uZGFyeTpob3Zlcixcbi5idG4tc2Vjb25kYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtc2hhZG93OiBub25lOyAvKiBQcmV2ZW50IGluaGVyaXRhbmNlIGZyb20gYGJvZHlgICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogLjA1cmVtIHNvbGlkICNmZmY7XG59XG5cbi8qXG4gKiBCYXNlIHN0cnVjdHVyZVxuICovXG5cbi5jb3Zlci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDQyZW07XG59XG5cbi8qXG4gKiBDb3ZlclxuICovXG4uY292ZXIge1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbn1cbi5jb3ZlciAuYnRuLWxnIHtcbiAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tYXN0aGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4vKlxuICogRm9vdGVyXG4gKi9cbi5tYXN0Zm9vdCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbn1cblxuLm1hc3RoZWFkLWJyYW5kIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbmsge1xuICBwYWRkaW5nOiAuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IC4yNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbms6aG92ZXIsXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcbn1cblxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbmsgKyAubmF2LWxpbmsge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLm5hdi1tYXN0aGVhZCAuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC5tYXN0aGVhZC1icmFuZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLm5hdi1tYXN0aGVhZCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\n\n  <header class=\"masthead mb-auto\">\n    <div class=\"inner\">\n      <h3 class=\"masthead-brand\">Errands</h3>\n      <nav class=\"nav nav-masthead justify-content-center\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        <a class=\"nav-link\" routerLink=\"/aboutUs\" routerLinkActive=\"active\">About us</a>\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Log in</a>\n        <a class=\"nav-link\" routerLink=\"/signup\" routerLinkActive=\"active\">Sign up</a>\n      </nav>\n    </div>\n  </header>\n  \n  <main role=\"main\" class=\"inner cover\">\n    <h1 class=\"cover-heading\">Get someone run your errands.</h1><br>\n    <p class=\"lead\">Errands is an app that people can post an order contains things they want to buy and other people can take the order and earn money from it.</p><br>\n    <p class=\"lead\">\n      <button routerLink=\"/login\" class=\"btn btn-lg btn-secondary mr-5\">Log in</button>\n      <button routerLink=\"/signup\" class=\"btn btn-lg btn-secondary\">Sign up</button>\n    </p>\n  </main>\n\n  <footer class=\"mastfoot mt-auto\">\n    <div class=\"inner\">\n      <p>Website for <a href=\"http://web.engr.oregonstate.edu/~scaffidc/courses/cs562/index.shtml?cb=1547975610290\">CS562</a>, by <a href=\"https://github.com/lirance/errands\">@Lirance and Brian</a>.</p>\n    </div>\n  </footer>\n\n</div>\n"

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

module.exports = ".form-signin {\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: auto;\n  }\n.form-signin .checkbox {\n    font-weight: 400;\n}\n.form-signin .form-control {\n    position: relative;\n    box-sizing: border-box;\n    font-size: 16px;\n}\n.form-signin .form-control:focus {\n    z-index: 2;\n}\n.form-signin input[type=\"phone\"] {\n    margin-bottom: 10px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\na,\na:focus,\na:hover {\n  color: #fff;\n}\n.masthead {\n  margin-bottom: 2rem;\n}\n.cover-container {\n  max-width: 42em;\n}\n.cover {\n  padding: 0.5rem;\n}\n.cover .btn-lg {\n  padding: .75rem 1.25rem;\n  font-weight: 700;\n}\n.mastfoot {\n  color: rgba(255, 255, 255, .5);\n}\n.masthead-brand {\n  margin-bottom: 0;\n}\n.nav-masthead .nav-link {\n  padding: .25rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, .5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent;\n}\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, .25);\n}\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n.nav-masthead .active {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left;\n  }\n  .nav-masthead {\n    float: right;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7R0FDZDtBQUNIO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksV0FBVztDQUNkO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDZCQUE2QjtHQUM5QjtBQUNEO0lBQ0Usb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQiwyQkFBMkI7R0FDNUI7QUFFSDs7O0VBR0UsWUFBWTtFQUNaLGtCQUFrQixDQUFDLHFDQUFxQztFQUN4RCx1QkFBdUI7RUFDdkIsMEJBQTBCO0NBQzNCO0FBR0Q7OztFQUdFLFlBQVk7Q0FDYjtBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsK0JBQStCO0NBQ2hDO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5Qix3Q0FBd0M7Q0FDekM7QUFFRDs7RUFFRSw4Q0FBOEM7Q0FDL0M7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0U7SUFDRSxZQUFZO0dBQ2I7RUFDRDtJQUNFLGFBQWE7R0FDZDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXNpZ25pbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgei1pbmRleDogMjtcbn1cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGhvbmVcIl0ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIH1cblxuLmJ0bi1zZWNvbmRhcnksXG4uYnRuLXNlY29uZGFyeTpob3Zlcixcbi5idG4tc2Vjb25kYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtc2hhZG93OiBub25lOyAvKiBQcmV2ZW50IGluaGVyaXRhbmNlIGZyb20gYGJvZHlgICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogLjA1cmVtIHNvbGlkICNmZmY7XG59XG5cblxuYSxcbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXN0aGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jb3Zlci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDQyZW07XG59XG4uY292ZXIge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4uY292ZXIgLmJ0bi1sZyB7XG4gIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1hc3Rmb290IHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xufVxuXG4ubWFzdGhlYWQtYnJhbmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IC4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpob3Zlcixcbi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayArIC5uYXYtbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLm1hc3RoZWFkLWJyYW5kIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAubmF2LW1hc3RoZWFkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\n  <header class=\"masthead mb-auto\">\n    <div class=\"inner\">\n      <h3 class=\"masthead-brand\">Errands</h3>\n      <nav class=\"nav nav-masthead justify-content-center\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        <a class=\"nav-link\" routerLink=\"/aboutUs\" routerLinkActive=\"active\">About us</a>\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Log in</a>\n        <a class=\"nav-link\" routerLink=\"/signup\" routerLinkActive=\"active\">Sign up</a>\n      </nav>\n    </div>\n  </header>\n\n  <main role=\"main\" class=\"inner cover\">\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\" class=\"form-signin\">\n\n      <h1 class=\"mb-3 font-weight-normal\">Please log in</h1>\n\n      <div class=\"form-group\">\n        <label for=\"phone\" class=\"sr-only\">Phone Number</label>\n        <input type=\"phone\" id=\"phone\" class=\"form-control\" formControlName=\"phone\" placeholder=\"Phone Number\" required=\"\" autofocus=\"\">\n        <div *ngIf=\"loginForm.controls.phone.touched && !loginForm.controls.phone.valid\" class=\"alert alert-danger\">\n          Phone number is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required=\"\">\n        <div *ngIf=\"loginForm.controls.password.touched && loginForm.controls.password.errors\">\n          <div *ngIf=\"loginForm.controls.password.errors.invalidLogin\"\n               class=\"alert alert-danger\">\n            Phone number or password is invalid.\n          </div>\n          <div *ngIf=\"loginForm.controls.password.errors.required\" class=\"alert alert-danger\">\n            Password is required.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-lg btn-secondary btn-block mt-auto\" type=\"submit\">Log in</button>\n      </div>\n\n    </form>\n  </main>\n\n  <footer class=\"mastfoot mt-auto\">\n    <div class=\"inner\">\n      <p>Website for <a href=\"http://web.engr.oregonstate.edu/~scaffidc/courses/cs562/index.shtml?cb=1547975610290\">CS562</a>,\n        by <a href=\"https://github.com/lirance/errands\">@Lirance and Brian</a>.</p>\n    </div>\n  </footer>\n\n</div>\n"

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
        this.userService.login(this.loginForm.controls['phone'].value, this.loginForm.controls['password'].value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
            if (data.toString() != '-1') {
                _this.currentUserID = data;
                localStorage.setItem('currentUserID', JSON.stringify(_this.currentUserID));
                _this.router.navigate(['/dashboard', { outlets: { 'aux': ['dashhome'] } }]);
            }
            ;
            if (data.toString() == '-1') {
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

/***/ "./src/app/my-order/my-order.component.css":
/*!*************************************************!*\
  !*** ./src/app/my-order/my-order.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVyL215LW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/my-order/my-order.component.html":
/*!**************************************************!*\
  !*** ./src/app/my-order/my-order.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-dark text-left\">Choose <strong>Created</strong> to view all created order, <strong>Accepted</strong> to view all accepted order</p>\n<ul class=\"nav nav-tabs text-dark\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link {{created_active}}\" (click)=\"switch_created()\"><strong>Created</strong> </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link {{accepted_active}}\" (click)=\"switch_accepted()\"><strong>Accepted</strong> </a>\n</ul>\n<br><br>\n<div *ngIf='switch_flag == 0'>\n  <app-created-order-list></app-created-order-list>\n</div>\n\n<div *ngIf='switch_flag == 1'>\n  <app-accepted-order-list></app-accepted-order-list>\n</div>\n"

/***/ }),

/***/ "./src/app/my-order/my-order.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-order/my-order.component.ts ***!
  \************************************************/
/*! exports provided: MyOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderComponent", function() { return MyOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyOrderComponent = /** @class */ (function () {
    function MyOrderComponent() {
        this.switch_flag = 0;
        this.created_active = 'active';
        this.accepted_active = '';
    }
    MyOrderComponent.prototype.ngOnInit = function () {
    };
    MyOrderComponent.prototype.switch_created = function () {
        this.switch_flag = 0;
        this.accepted_active = '';
        this.created_active = 'active';
    };
    MyOrderComponent.prototype.switch_accepted = function () {
        this.switch_flag = 1;
        this.accepted_active = 'active';
        this.created_active = '';
    };
    MyOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-order',
            template: __webpack_require__(/*! ./my-order.component.html */ "./src/app/my-order/my-order.component.html"),
            styles: [__webpack_require__(/*! ./my-order.component.css */ "./src/app/my-order/my-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyOrderComponent);
    return MyOrderComponent;
}());



/***/ }),

/***/ "./src/app/order-detail/order-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='orderDetail' class=\"text-center text-dark\">\n  <div class=\"card text-center\">\n    <div class=\"card-header text-muted\">\n      <p>Order ID:  {{orderDetail.orderid}}</p>\n    </div>\n\n    <div class=\"card-body\">\n      <div class=\"col-center-block text-center\">\n        <dl class=\"row text-left\">\n          <dt class=\"col-sm-3\">Item list:</dt>\n          <dd class=\"col-sm-9\"><p>{{orderDetail.itemlist}}</p>\n          </dd>\n          <dt class=\"col-sm-3\">Store address:</dt>\n          <dd class=\"col-sm-9\"><p>{{orderDetail.storeadd}}</p></dd>\n\n          <dt class=\"col-sm-3\">Destination:</dt>\n          <dd class=\"col-sm-9\"><p>{{orderDetail.destination}}</p></dd>\n\n          <dt class=\"col-sm-3\">Time limit:</dt>\n          <dd class=\"col-sm-9\"><p>{{orderDetail.timelimit}}</p></dd>\n\n          <dt class=\"col-sm-3\">Tips:</dt>\n          <dd class=\"col-sm-9\"><p>{{orderDetail.tip}}</p></dd>\n\n          <dt class=\"col-sm-3\">Poster:</dt>\n          <dd class=\"col-sm-9\">\n            <a [routerLink]=\"['/dashboard', {outlets: {'aux': ['publicprofile', orderDetail.maker.userid]}}]\">{{orderDetail.maker.username}}</a>\n          </dd>\n\n          <dt class=\"col-sm-3\">State:</dt>\n          <dd class=\"col-sm-9\"><p>{{orderDetail.state}}</p></dd>\n\n          <dt class=\"col-sm-3\">Accepter:</dt>\n          <dd class=\"col-sm-9\">\n            <a *ngIf=\"orderDetail.recipient != null\" [routerLink]=\"['/dashboard', {outlets: {'aux': ['publicprofile', orderDetail.recipient.userid]}}]\">{{orderDetail.recipient.username}}</a>\n            <p *ngIf=\"orderDetail.recipient == null\">Haven't accepted by other user!</p>\n          </dd>\n        </dl>\n      </div>\n\n      <div class=\"button-block\">\n        <div  class=\"text-center row\">\n          <div *ngIf=\"orderDetail.maker != null && orderDetail.recipient !=null\n        && (orderDetail.maker.userid == currentUserId || orderDetail.recipient.userid == currentUserId)\" class=\"text-center col\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"complete()\">\n              Complete\n            </button>\n          </div>\n\n\n        <div class=\"text-center col \" *ngIf='orderDetail.state == \"ACCEPTED\" && orderDetail.recipient.userid == currentUserId'>\n          <button  type=\"button\" class=\"btn btn-primary\" (click)=\"cancelAcceptedOrder()\">\n            Cancel\n          </button>\n        </div>\n\n        <div class=\"text-center col\" *ngIf='orderDetail.state == \"ORDERED\" && orderDetail.maker.userid == currentUserId'>\n          <button  type=\"button\" class=\"btn btn-primary\" (click)=\"deleteOrder()\">\n            Delete\n          </button>\n        </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"card-footer text-muted\">\n      <!---->\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"backtolast()\">Back</button>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.ts ***!
  \********************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _complete_dialog_complete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../complete-dialog/complete-dialog.component */ "./src/app/complete-dialog/complete-dialog.component.ts");








var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(router, route, orderService, location, dialog) {
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.location = location;
        this.dialog = dialog;
        this.cancelResult = false;
        this.deleteResult = false;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        this.getOrder();
        this.currentUserId = localStorage.getItem('currentUserID');
    };
    OrderDetailComponent.prototype.getOrder = function () {
        var _this = this;
        var orderid = this.route.snapshot.paramMap.get('orderid');
        this.orderService.getOrderDetail(orderid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (order) {
            _this.orderDetail = order;
        });
    };
    OrderDetailComponent.prototype.complete = function () {
        var _this = this;
        var orderid = this.route.snapshot.paramMap.get('orderid');
        this.orderService.completeOrder(this.currentUserId, orderid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (result) {
            result.toString();
            _this.completeResult = result;
            _this.openCompleteDialog();
        });
    };
    OrderDetailComponent.prototype.cancelAcceptedOrder = function () {
        var _this = this;
        var orderid = this.route.snapshot.paramMap.get('orderid');
        var userid = localStorage.getItem('currentUserID');
        this.orderService.cancelAcceptedOrder(userid, orderid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (result) {
            if (result) {
                _this.cancelResult = true;
                _this.backtolast();
            }
            ;
        });
    };
    OrderDetailComponent.prototype.deleteOrder = function () {
        var _this = this;
        var orderid = this.route.snapshot.paramMap.get('orderid');
        var userid = localStorage.getItem('currentUserID');
        this.orderService.deleteOrder(userid, orderid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (result) {
            if (result) {
                _this.deleteResult = true;
                _this.backtolast();
            }
            ;
        });
    };
    OrderDetailComponent.prototype.openCompleteDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            completeResult: this.completeResult
        };
        this.dialog.open(_complete_dialog_complete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CompleteDialogComponent"], dialogConfig);
    };
    OrderDetailComponent.prototype.backtolast = function () {
        this.location.back();
    };
    OrderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.css */ "./src/app/order-detail/order-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_4__["OrderService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/public-profile/public-profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/public-profile/public-profile.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1wcm9maWxlL3B1YmxpYy1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/public-profile/public-profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/public-profile/public-profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='currentUser' class=\"text-center text-dark\">\n  <div class=\"card text-center\">\n    <div class=\"card-header text-muted\">\n      <p>User ID:  {{currentUser.userid}}</p>\n    </div>\n\n    <div class=\"card-body\">\n      <div class=\"col-center-block text-center\">\n        <dl class=\"row text-left\">\n          <dt class=\"col-sm-3\">User Name:</dt>\n          <dd class=\"col-sm-9\"><p>{{currentUser.username}}</p>\n          </dd>\n          <dt class=\"col-sm-3\">User address:</dt>\n          <dd class=\"col-sm-9\"><p>{{currentUser.address}}</p></dd>\n\n          <dt class=\"col-sm-3\">User phone number:</dt>\n          <dd class=\"col-sm-9\"><p>{{currentUser.phone}}</p></dd>\n\n          <dt class=\"col-sm-3\">User average rate:</dt>\n          <dd class=\"col-sm-9\">\n            <p *ngIf=\"currentUser.averagerate != null\">{{currentUser.averagerate}}</p>\n            <p *ngIf=\"currentUser.averagerate == null\">This user have get any rate yet</p>\n          </dd>\n\n          <dt class=\"col-sm-3\">User rate number:</dt>\n          <dd class=\"col-sm-9\"><p>{{currentUser.ratenumber}}</p></dd>\n        </dl>\n      </div>\n    </div>\n\n    <div class=\"card-footer text-muted\">\n      <!---->\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"backtolast()\">Back</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/public-profile/public-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/public-profile/public-profile.component.ts ***!
  \************************************************************/
/*! exports provided: PublicProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfileComponent", function() { return PublicProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var PublicProfileComponent = /** @class */ (function () {
    function PublicProfileComponent(router, route, userService, location) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.location = location;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    PublicProfileComponent.prototype.getUser = function () {
        var _this = this;
        var userid = this.route.snapshot.paramMap.get('userid');
        this.userService.getUserById(userid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (result) {
            _this.currentUser = result;
        });
    };
    PublicProfileComponent.prototype.backtolast = function () {
        this.location.back();
    };
    PublicProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__(/*! ./public-profile.component.html */ "./src/app/public-profile/public-profile.component.html"),
            styles: [__webpack_require__(/*! ./public-profile.component.css */ "./src/app/public-profile/public-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], PublicProfileComponent);
    return PublicProfileComponent;
}());



/***/ }),

/***/ "./src/app/rate-order-dialog/rate-order-dialog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/rate-order-dialog/rate-order-dialog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGUtb3JkZXItZGlhbG9nL3JhdGUtb3JkZXItZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/rate-order-dialog/rate-order-dialog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/rate-order-dialog/rate-order-dialog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"text-center\">Rate Order</h2>\n\n<mat-dialog-content *ngIf='state == \"COMPLETED\"' class=\"text-center text-light\">\n  <p >Please rate</p>\n  <ngb-rating [(rate)]=\"rate\"></ngb-rating>\n  <hr>\n  <pre class=\"text-light\">Rate: <b>{{rate}}</b></pre>\n  <p *ngIf=\"rateResult\"> Rate success!</p>\n  <p *ngIf=\"submitResult\"> You have aleady rated!</p>\n</mat-dialog-content>\n\n<mat-dialog-content *ngIf='state != \"COMPLETED\"' class=\"text-center text-light\">\n  <p class=\"text-light\">The order is not completed.</p>\n</mat-dialog-content>\n\n<div class=\"row\">\n  <div class=\"col-6 text-center \" *ngIf='state == \"COMPLETED\"'>\n    <button class=\"btn btn-info\" *ngIf='state == \"COMPLETED\"' (click)=\"submit()\">Submit</button>\n  </div>\n  <div class=\"col text-center\">\n    <button class=\"btn btn-info\" (click)=\"close()\">cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rate-order-dialog/rate-order-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/rate-order-dialog/rate-order-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: RateOrderDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateOrderDialogComponent", function() { return RateOrderDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RateOrderDialogComponent = /** @class */ (function () {
    function RateOrderDialogComponent(router, dialogRef, orderService, data, config) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.orderService = orderService;
        this.rate = 0;
        this.orderid = data.orderid;
        this.state = data.state;
        config.max = 5;
    }
    RateOrderDialogComponent.prototype.ngOnInit = function () {
        this.submitResult = false;
    };
    RateOrderDialogComponent.prototype.close = function () {
        this.dialogRef.close();
        window.location.reload();
    };
    RateOrderDialogComponent.prototype.submit = function () {
        var _this = this;
        this.submitResult = true;
        this.currentUserID = localStorage.getItem('currentUserID');
        this.orderService.rateOrder(this.currentUserID, this.orderid, this.rate.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (result) {
            result.toString();
            console.log(result);
            _this.rateResult = result;
        });
    };
    RateOrderDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rate-order-dialog',
            template: __webpack_require__(/*! ./rate-order-dialog.component.html */ "./src/app/rate-order-dialog/rate-order-dialog.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRatingConfig"]],
            styles: [__webpack_require__(/*! ./rate-order-dialog.component.css */ "./src/app/rate-order-dialog/rate-order-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services__WEBPACK_IMPORTED_MODULE_5__["OrderService"], Object, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRatingConfig"]])
    ], RateOrderDialogComponent);
    return RateOrderDialogComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signup {\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: auto;\n}\n\n.form-signup .checkbox {\n    font-weight: 400;\n}\n\n.form-signup .form-control {\n    position: relative;\n    box-sizing: border-box;\n    font-size: 16px;\n}\n\n.form-signup .form-control:focus {\n    z-index: 2;\n}\n\n.form-signup input{\n    margin-bottom: 10px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n\na,\na:focus,\na:hover {\n  color: #fff;\n}\n\n.masthead {\n  margin-bottom: 2rem;\n}\n\n.cover-container {\n    max-width: 42em;\n}\n\n.cover {\n    padding: 0.5rem;\n}\n\n.cover .btn-lg {\n    padding: .75rem 1.25rem;\n    font-weight: 700;\n}\n\n.mastfoot {\n    color: rgba(255, 255, 255, .5);\n}\n\n.masthead-brand {\n  margin-bottom: 0;\n}\n\n.nav-masthead .nav-link {\n  padding: .25rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, .5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent;\n}\n\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, .25);\n}\n\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n\n.nav-masthead .active {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left;\n  }\n  .nav-masthead {\n    float: right;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7Q0FDbkI7O0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDZCQUE2QjtHQUM5Qjs7QUFFSDs7O0VBR0UsWUFBWTtFQUNaLGtCQUFrQixDQUFDLHFDQUFxQztFQUN4RCx1QkFBdUI7RUFDdkIsMEJBQTBCO0NBQzNCOztBQUVEOzs7RUFHRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksK0JBQStCO0NBQ2xDOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLHdDQUF3QztDQUN6Qzs7QUFFRDs7RUFFRSw4Q0FBOEM7Q0FDL0M7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0U7SUFDRSxZQUFZO0dBQ2I7RUFDRDtJQUNFLGFBQWE7R0FDZDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWdudXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtLXNpZ251cCAuY2hlY2tib3gge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mb3JtLXNpZ251cCAuZm9ybS1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9ybS1zaWdudXAgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgei1pbmRleDogMjtcbn1cbi5mb3JtLXNpZ251cCBpbnB1dHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIH1cblxuLmJ0bi1zZWNvbmRhcnksXG4uYnRuLXNlY29uZGFyeTpob3Zlcixcbi5idG4tc2Vjb25kYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtc2hhZG93OiBub25lOyAvKiBQcmV2ZW50IGluaGVyaXRhbmNlIGZyb20gYGJvZHlgICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogLjA1cmVtIHNvbGlkICNmZmY7XG59IFxuXG5hLFxuYTpmb2N1cyxcbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hc3RoZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmNvdmVyLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA0MmVtO1xufVxuLmNvdmVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG4uY292ZXIgLmJ0bi1sZyB7XG4gICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tYXN0Zm9vdCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xufVxuXG4ubWFzdGhlYWQtYnJhbmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IC4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpob3Zlcixcbi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayArIC5uYXYtbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLm1hc3RoZWFkLWJyYW5kIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAubmF2LW1hc3RoZWFkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\n\n  <header class=\"masthead mb-auto\">\n    <div class=\"inner\">\n      <h3 class=\"masthead-brand\">Errands</h3>\n      <nav class=\"nav nav-masthead justify-content-center\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        <a class=\"nav-link\" routerLink=\"/aboutUs\" routerLinkActive=\"active\">About us</a>\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Log in</a>\n        <a class=\"nav-link\" routerLink=\"/signup\" routerLinkActive=\"active\">Sign up</a>\n      </nav>\n    </div>\n  </header>\n\n  <main role=\"main\" class=\"inner cover\">\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"signupForm\" class=\"form-signup mt-auto\">\n\n      <h1 class=\"mb-3 font-weight-normal\">Sign Up</h1>\n\n      <div *ngIf=\"invalidsignup&&submitted\" class=\"alert alert-danger\">\n        Invalid phone. This phone is already registered.\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"username\" class=\"sr-only\">Enter your username</label>\n        <input type=\"username\" id=\"username\" class=\"form-control\" formControlName=\"username\"\n               placeholder=\"Enter your username\" required=\"\"\n               autofocus=\"\">\n\n        <div *ngIf=\"signupForm.controls.username.touched && signupForm.controls.username.errors\">\n\n          <div *ngIf=\"signupForm.controls.username.errors.required && !signupForm.controls.username.errors.maxlength\"\n               class=\"alert alert-danger\">\n            Username is required\n          </div>\n\n          <div *ngIf=\"signupForm.controls.username.errors.maxlength && !signupForm.controls.username.errors.required\"\n               class=\"alert alert-danger\">\n            The max length of username is 20\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone\" class=\"sr-only\">Enter your phone number</label>\n        <input type=\"phone\" id=\"phone\" class=\"form-control\" formControlName=\"phone\"\n               placeholder=\"Enter your phone number\" required=\"\"\n               autofocus=\"\">\n\n        <div *ngIf=\"signupForm.controls.phone.touched && signupForm.controls.phone.errors\">\n\n          <div *ngIf=\"signupForm.controls.phone.errors.required && !signupForm.controls.phone.errors.pattern\"\n               class=\"alert alert-danger\">\n            Phone number is required.\n          </div>\n\n          <div *ngIf=\"signupForm.controls.phone.errors.pattern && !signupForm.controls.phone.errors.required\"\n               class=\"alert alert-danger\">\n            US phone number should be 10 numbers.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"address\" class=\"sr-only\">Enter your address</label>\n        <input type=\"address\" id=\"address\" class=\"form-control\" formControlName=\"address\"\n               placeholder=\"Enter your address\" required=\"\"\n               autofocus=\"\">\n\n        <div *ngIf=\"signupForm.controls.address.touched && signupForm.controls.address.errors\">\n\n          <div *ngIf=\"signupForm.controls.address.errors.maxlength && !signupForm.controls.address.errors.required\"\n               class=\"alert alert-danger\">\n            The max length of address is 50\n          </div>\n\n          <div *ngIf=\"signupForm.controls.address.errors.required && !signupForm.controls.address.errors.maxlength\"\n               class=\"alert alert-danger\">\n            Address is required\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\" class=\"sr-only\">Enter your password</label>\n        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\"\n               placeholder=\"Enter your password\" required=\"\">\n\n        <div *ngIf=\"signupForm.controls.password.touched && signupForm.controls.password.errors\">\n\n          <div *ngIf=\"signupForm.controls.password.errors.required && !signupForm.controls.password.errors.maxlength\"\n               class=\"alert alert-danger\">\n            Password is required\n          </div>\n\n          <div *ngIf=\"signupForm.controls.password.errors.maxlength && !signupForm.controls.password.errors.required\"\n               class=\"alert alert-danger\">\n            The max length of password is 20\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"confirmPassword\" class=\"sr-only\">Confirm your password</label>\n        <input type=\"password\" id=\"confirmPassword\" class=\"form-control\" formControlName=\"confirmPassword\"\n               placeholder=\"Confirm your password\" required=\"\">\n\n        <div *ngIf=\"signupForm.controls.confirmPassword.touched && signupForm.controls.confirmPassword.errors\">\n\n          <div\n            *ngIf=\"signupForm.controls.confirmPassword.errors.required && !signupForm.controls.confirmPassword.errors.EqualValidator\"\n            class=\"alert alert-danger\">\n            Confirm password is required\n          </div>\n          <div\n            *ngIf=\"signupForm.controls.confirmPassword.errors.EqualValidator && !signupForm.controls.confirmPassword.errors.required\"\n            class=\"alert alert-danger\">\n            Password is mismatch\n          </div>\n        </div>\n      </div>\n\n      <button class=\"btn btn-lg btn-secondary btn-block mt-5\" type=\"submit\">Sign up</button>\n\n    </form>\n  </main>\n\n  <footer class=\"mastfoot mt-5\">\n    <div class=\"inner\">\n      <p>Website for <a href=\"http://web.engr.oregonstate.edu/~scaffidc/courses/cs562/index.shtml?cb=1547975610290\">CS562</a>,\n        by <a href=\"https://github.com/lirance/errands\">@Lirance and Brian</a>.</p>\n    </div>\n  </footer>\n\n</div>\n"

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
/* harmony import */ var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_directives/equal-validator.directive */ "./src/app/_directives/equal-validator.directive.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(formBuilder, route, router, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.result = false;
        this.invalidsignup = false;
        this.submitted = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_5__["EqualValidator"])('password')]]
        });
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.signupForm.invalid) {
            console.log(this.signupForm.value);
            return;
        }
        this.userService.signup(this.signupForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
            data.toString();
            if (data) {
                _this.router.navigate(['/login']);
            }
            ;
            if (!data) {
                _this.invalidsignup = true;
            }
            ;
        }, function (error) { console.log('error'); });
    };
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

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-dark\">Profile</h2>\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\" class=\"text-dark text-left\">\n\n  <div class=\"form-group\">\n    <label>User Id</label>\n    <input type=\"text\" formControlName=\"userId\" readonly=\"readonly\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.userId.errors }\" />\n  </div>\n\n  <div class=\"form-group\">\n    <label>User Name</label>\n    <input type=\"text\" formControlName=\"userName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" />\n    <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.userName.errors.required\">User name is required</div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Phone Number</label>\n    <input type=\"text\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\n    <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.phone.errors.required\">Phone Number is required</div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" formControlName=\"address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\n    <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.address.errors.required\">Address is required</div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Rate Number</label>\n    <input type=\"text\" formControlName=\"rateNumber\" readonly=\"readonly\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.rateNumber.errors }\" />\n  </div>\n\n  <div class=\"form-group\">\n    <label>Average Rate</label>\n    <input type=\"text\" formControlName=\"averageRate\" readonly=\"readonly\" class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group text-center\">\n    <button [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\n    <a (click)=\"backtolast()\" class=\"btn btn-link\">Cancel</a>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(formBuilder, router, userService, alertService, location) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.location = location;
        this.loading = false;
        this.submitted = false;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.profileForm = this.formBuilder.group({
            userId: [this.currentUser.userid, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            userName: [this.currentUser.username, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: [this.currentUser.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: [this.currentUser.address, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rateNumber: [this.currentUser.ratenumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            averageRate: [this.currentUser.averagerate]
        });
    };
    Object.defineProperty(UserprofileComponent.prototype, "f", {
        get: function () { return this.profileForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserprofileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.profileForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.profileEdit(this.profileForm.value.userId, this.profileForm.value.phone, this.profileForm.value.userName, this.profileForm.value.address)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            data.toString();
            if (data) {
                console.log('update successful');
                _this.currentUserID = localStorage.getItem('currentUserID');
                localStorage.removeItem('currentUser');
                _this.userService.getUserById(_this.currentUserID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (user) {
                    _this.currentUser = user;
                    localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
                });
                _this.router.navigate(['/dashboard', { outlets: { 'aux': ['dashhome'] } }]);
            }
            ;
            if (!data) {
                console.log('update error');
            }
            ;
        });
    };
    UserprofileComponent.prototype.backtolast = function () {
        this.location.back();
    };
    UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], UserprofileComponent);
    return UserprofileComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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