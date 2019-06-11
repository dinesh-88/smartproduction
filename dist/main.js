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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"wrapper\">\n  <div id=\"content-wrapper\" class=\"d-flex flex-column \">\n\n    <div id=\"content\">\n      <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

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
        this.title = 'smartproduction';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _summary_widget_summary_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summary-widget/summary-widget.component */ "./src/app/summary-widget/summary-widget.component.ts");
/* harmony import */ var _product_line_product_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-line/product-line.component */ "./src/app/product-line/product-line.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _message_parser_parser_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message-parser/parser.service */ "./src/app/message-parser/parser.service.ts");












var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _summary_widget_summary_widget_component__WEBPACK_IMPORTED_MODULE_4__["SummaryWidgetComponent"],
                _product_line_product_line_component__WEBPACK_IMPORTED_MODULE_5__["ProductLineComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            providers: [_message_parser_parser_service__WEBPACK_IMPORTED_MODULE_11__["MessageEvents"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/communication.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/communication.service.ts ***!
  \*************************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket.service */ "./src/app/common/websocket.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var WS_URL = 'ws://18.188.153.242:9000/WebSocket';
var CommunicationService = /** @class */ (function () {
    function CommunicationService(wsService) {
        this.messages = wsService.connect(WS_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = JSON.parse(response.data);
            return data;
        }));
    }
    CommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]])
    ], CommunicationService);
    return CommunicationService;
}());



/***/ }),

/***/ "./src/app/common/websocket.service.ts":
/*!*********************************************!*\
  !*** ./src/app/common/websocket.service.ts ***!
  \*********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log('Successfully connected: ' + url);
        }
        return this.subject;
    };
    WebsocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"].create(observer, observable);
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('sessionId')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-summary-widget></app-summary-widget>\n<app-product-line></app-product-line>\n\n"

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
/* harmony import */ var _common_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/communication.service */ "./src/app/common/communication.service.ts");
/* harmony import */ var _message_parser_parser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message-parser/parser.service */ "./src/app/message-parser/parser.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(communicationService, parser) {
        var _this = this;
        this.communicationService = communicationService;
        this.parser = parser;
        this.communicationService.messages.subscribe(function (msg) {
            _this.parser.parserMessage(msg);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"], _message_parser_parser_service__WEBPACK_IMPORTED_MODULE_3__["ParserService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n\n  <div class=\"col-xl-8 col-lg-8 col-md-8\">\n\n    <div class=\"card o-hidden border-0 shadow-lg my-5\">\n      <div class=\"card-body p-0\">\n        <!-- Nested Row within Card Body -->\n        <div class=\"row\">\n\n          <div class=\"col-lg-12\">\n            <div class=\"p-5 login\">\n              <div class=\"text-center\">\n                <h1 class=\"h4 text-gray-900 mb-4\">Smart Production!</h1>\n              </div>\n              <form class=\"user\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                <div class=\"form-group\">\n                  <input type=\"email\" formControlName=\"loginName\" class=\"form-control form-control-user\" id=\"exampleInputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter User Name...\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" formControlName=\"password\"  class=\"form-control form-control-user\" id=\"exampleInputPassword\" placeholder=\"Password\">\n                </div>\n\n                <button class=\"btn btn-primary btn-user btn-block\">\n                  Login\n                </button>\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/login/user.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            loginName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function () {
        var user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        user.reqType = 1;
        user.loginName = this.loginForm.get('loginName').value;
        user.password = this.loginForm.get('password').value;
        this.authService.login(user);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/user.ts":
/*!*******************************!*\
  !*** ./src/app/login/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/message-parser/message-object/summary.ts":
/*!**********************************************************!*\
  !*** ./src/app/message-parser/message-object/summary.ts ***!
  \**********************************************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
var Summary = /** @class */ (function () {
    function Summary(m) {
        this.parserData(m);
    }
    Summary.prototype.parserData = function (msg) {
        this.totalProductLine = msg.totalProductLine;
        this.totalProductLineInOperation = msg.totalProductLine_in_Operation;
        this.dailyTotalExpectedOutput = msg.dailyTotalExpectedOutput;
        this.currentTotalOutput = msg.currentTotalOutput;
    };
    return Summary;
}());



/***/ }),

/***/ "./src/app/message-parser/parser.service.ts":
/*!**************************************************!*\
  !*** ./src/app/message-parser/parser.service.ts ***!
  \**************************************************/
/*! exports provided: MessageEvents, ParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEvents", function() { return MessageEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserService", function() { return ParserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_object_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-object/summary */ "./src/app/message-parser/message-object/summary.ts");



var MessageEvents = /** @class */ (function () {
    function MessageEvents() {
        this.summaryUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    return MessageEvents;
}());

var ParserService = /** @class */ (function () {
    function ParserService(messageEvents) {
        this.messageEvents = messageEvents;
    }
    ParserService.prototype.parserMessage = function (message) {
        switch (message.responseType) {
            case 103:
                this.messageEvents.summaryUpdate.emit(new _message_object_summary__WEBPACK_IMPORTED_MODULE_2__["Summary"](message));
                break;
        }
    };
    ParserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MessageEvents])
    ], ParserService);
    return ParserService;
}());



/***/ }),

/***/ "./src/app/product-line/product-line.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-line/product-line.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGluZS9wcm9kdWN0LWxpbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-line/product-line.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-line/product-line.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <!-- Content Column -->\n  <div class=\"col-lg-12 mb-12\">\n\n    <!-- Project Card Example -->\n    <div class=\"card shadow mb-4\">\n      <div class=\"card-header py-3\">\n        <h6 class=\"m-0 font-weight-bold text-primary\">Products Line</h6>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"small font-weight-bold\">PRODCUT001 <span class=\"float-right\">20%</span></h4>\n        <div class=\"progress mb-4\">\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\"\n               aria-valuemax=\"100\"></div>\n        </div>\n<!--        <h4 class=\"small font-weight-bold\">Sales Tracking <span class=\"float-right\">40%</span></h4>-->\n<!--        <div class=\"progress mb-4\">-->\n<!--          <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\"-->\n<!--               aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\n<!--        </div>-->\n<!--        <h4 class=\"small font-weight-bold\">Customer Database <span class=\"float-right\">60%</span></h4>-->\n<!--        <div class=\"progress mb-4\">-->\n<!--          <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\"-->\n<!--               aria-valuemax=\"100\"></div>-->\n<!--        </div>-->\n<!--        <h4 class=\"small font-weight-bold\">Payout Details <span class=\"float-right\">80%</span></h4>-->\n<!--        <div class=\"progress mb-4\">-->\n<!--          <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\"-->\n<!--               aria-valuemax=\"100\"></div>-->\n<!--        </div>-->\n<!--        <h4 class=\"small font-weight-bold\">Account Setup <span class=\"float-right\">Complete!</span></h4>-->\n<!--        <div class=\"progress\">-->\n<!--          <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\"-->\n<!--               aria-valuemin=\"0\" aria-valuemax=\"100\"></div>-->\n<!--        </div>-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-line/product-line.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-line/product-line.component.ts ***!
  \********************************************************/
/*! exports provided: ProductLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLineComponent", function() { return ProductLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductLineComponent = /** @class */ (function () {
    function ProductLineComponent() {
    }
    ProductLineComponent.prototype.ngOnInit = function () {
    };
    ProductLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-line',
            template: __webpack_require__(/*! ./product-line.component.html */ "./src/app/product-line/product-line.component.html"),
            styles: [__webpack_require__(/*! ./product-line.component.css */ "./src/app/product-line/product-line.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductLineComponent);
    return ProductLineComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/communication.service */ "./src/app/common/communication.service.ts");




var AuthService = /** @class */ (function () {
    function AuthService(router, communicationService) {
        this.router = router;
        this.communicationService = communicationService;
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        this.communicationService.messages.next(user);
        this.communicationService.messages.subscribe(function (msg) {
            if (msg.responseType === 101 && msg.sid) {
                localStorage.setItem('sessionId', msg.sid);
                _this.router.navigate(['/home']);
            }
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/summary-widget/summary-widget.component.css":
/*!*************************************************************!*\
  !*** ./src/app/summary-widget/summary-widget.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1bW1hcnktd2lkZ2V0L3N1bW1hcnktd2lkZ2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/summary-widget/summary-widget.component.html":
/*!**************************************************************!*\
  !*** ./src/app/summary-widget/summary-widget.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row justify-content-center summary\">\n  <div class=\"col-xl-3 col-md-6 mb-4\">\n    <div class=\"card border-left-primary shadow h-100 py-2\">\n      <div class=\"card-body\">\n        <div class=\"row no-gutters align-items-center\">\n          <div class=\"col mr-2\">\n            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\"># Of Products</div>\n            <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{summary.totalProductLine}}</div>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col-xl-3 col-md-6 mb-4\">\n    <div class=\"card  border-left-success shadow h-100 py-2\">\n      <div class=\"card-body\">\n        <div class=\"row no-gutters align-items-center\">\n          <div class=\"col mr-2\">\n            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">In Operation</div>\n            <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{summary.totalProductLineInOperation}}</div>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-3 col-md-6 mb-4\">\n    <div class=\"card border-left-info shadow h-100 py-2\">\n      <div class=\"card-body\">\n        <div class=\"row no-gutters align-items-center\">\n          <div class=\"col mr-2\">\n            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">ExpectedOutput</div>\n            <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{summary.dailyTotalExpectedOutput}}</div>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-3 col-md-6 mb-4\">\n    <div class=\"card border-left-warning shadow h-100 py-2\">\n      <div class=\"card-body\">\n        <div class=\"row no-gutters align-items-center\">\n          <div class=\"col mr-2\">\n            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Current Output</div>\n            <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{summary.currentTotalOutput}}</div>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/summary-widget/summary-widget.component.ts":
/*!************************************************************!*\
  !*** ./src/app/summary-widget/summary-widget.component.ts ***!
  \************************************************************/
/*! exports provided: SummaryWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryWidgetComponent", function() { return SummaryWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_parser_parser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message-parser/parser.service */ "./src/app/message-parser/parser.service.ts");



var SummaryWidgetComponent = /** @class */ (function () {
    function SummaryWidgetComponent(messageEvents) {
        var _this = this;
        this.messageEvents = messageEvents;
        this.summary = {};
        this.messageEvents.summaryUpdate.subscribe(function (data) {
            _this.summary = data;
        });
    }
    SummaryWidgetComponent.prototype.ngOnInit = function () {
    };
    SummaryWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary-widget',
            template: __webpack_require__(/*! ./summary-widget.component.html */ "./src/app/summary-widget/summary-widget.component.html"),
            styles: [__webpack_require__(/*! ./summary-widget.component.css */ "./src/app/summary-widget/summary-widget.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_parser_parser_service__WEBPACK_IMPORTED_MODULE_2__["MessageEvents"]])
    ], SummaryWidgetComponent);
    return SummaryWidgetComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! /home/dinesh/Documents/Test/smartproduction/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map