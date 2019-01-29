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

/***/ "./src/app/adp-ui-components/adp-ui-components.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/adp-ui-components/adp-ui-components.module.ts ***!
  \***************************************************************/
/*! exports provided: AdpUiComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdpUiComponentsModule", function() { return AdpUiComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/adp-ui-components/page-header/page-header.component.ts");
/* harmony import */ var _loading_indicator_loading_indicator_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-indicator/loading-indicator.interceptor */ "./src/app/adp-ui-components/loading-indicator/loading-indicator.interceptor.ts");
/* harmony import */ var _loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-indicator/loading-indicator.service */ "./src/app/adp-ui-components/loading-indicator/loading-indicator.service.ts");
/* harmony import */ var _input_error_input_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-error/input-error.component */ "./src/app/adp-ui-components/input-error/input-error.component.ts");








/**
 * UI Components for general use in the UI
 */
var AdpUiComponentsModule = /** @class */ (function () {
    function AdpUiComponentsModule() {
    }
    AdpUiComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"], _input_error_input_error_component__WEBPACK_IMPORTED_MODULE_7__["InputErrorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _loading_indicator_loading_indicator_interceptor__WEBPACK_IMPORTED_MODULE_5__["LoadingIndicatorInterceptor"], multi: true },
                _loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_6__["LoadingIndicatorService"]
            ],
            exports: [
                _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"],
                _input_error_input_error_component__WEBPACK_IMPORTED_MODULE_7__["InputErrorComponent"]
            ]
        })
    ], AdpUiComponentsModule);
    return AdpUiComponentsModule;
}());



/***/ }),

/***/ "./src/app/adp-ui-components/index.ts":
/*!********************************************!*\
  !*** ./src/app/adp-ui-components/index.ts ***!
  \********************************************/
/*! exports provided: AdpUiComponentsModule, PageHeaderComponent, LoadingIndicatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adp_ui_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adp-ui-components.module */ "./src/app/adp-ui-components/adp-ui-components.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdpUiComponentsModule", function() { return _adp_ui_components_module__WEBPACK_IMPORTED_MODULE_0__["AdpUiComponentsModule"]; });

/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/adp-ui-components/page-header/page-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"]; });

/* harmony import */ var _loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-indicator/loading-indicator.service */ "./src/app/adp-ui-components/loading-indicator/loading-indicator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorService", function() { return _loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_2__["LoadingIndicatorService"]; });






/***/ }),

/***/ "./src/app/adp-ui-components/input-error/input-error.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/adp-ui-components/input-error/input-error.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"error-message\" *ngIf=\"showErrorMessage()\">\r\n  {{message}}\r\n</span>\r\n  "

/***/ }),

/***/ "./src/app/adp-ui-components/input-error/input-error.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/adp-ui-components/input-error/input-error.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-input-error .error-message {\n  color: #E40514;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 5px;\n  display: block;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRwLXVpLWNvbXBvbmVudHMvaW5wdXQtZXJyb3IvQzpcXEFDXFxDaGFsbGVuZ2VcXEFEUENvZGVDaGFsbGVuZ2Uvc3JjXFxhcHBcXGFkcC11aS1jb21wb25lbnRzXFxpbnB1dC1lcnJvclxcaW5wdXQtZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFjO0VBQ2QseUNBQXdDO0VBQ3hDLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkcC11aS1jb21wb25lbnRzL2lucHV0LWVycm9yL2lucHV0LWVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWlucHV0LWVycm9yIHtcclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogI0U0MDUxNDtcclxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/adp-ui-components/input-error/input-error.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adp-ui-components/input-error/input-error.component.ts ***!
  \************************************************************************/
/*! exports provided: InputErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputErrorComponent", function() { return InputErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var InputErrorComponent = /** @class */ (function () {
    function InputErrorComponent() {
    }
    InputErrorComponent.prototype.ngOnInit = function () {
    };
    InputErrorComponent.prototype.showErrorMessage = function () {
        if (this.form === undefined || this.form === null) {
            return false; // no form object, don't show validator
        }
        var ctl = this.form.controls[this.for];
        if (ctl !== undefined && ctl !== null) {
            var err = ctl.errors !== undefined && ctl.errors !== null && ctl.errors[this.errorType] !== undefined;
            // only show the validator under these conditions
            return !ctl.valid && err && (this.form.submitted || ctl.touched);
        }
        return false; // could not find the control
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputErrorComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], InputErrorComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputErrorComponent.prototype, "for", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputErrorComponent.prototype, "errorType", void 0);
    InputErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-error',
            template: __webpack_require__(/*! ./input-error.component.html */ "./src/app/adp-ui-components/input-error/input-error.component.html"),
            styles: [__webpack_require__(/*! ./input-error.component.scss */ "./src/app/adp-ui-components/input-error/input-error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputErrorComponent);
    return InputErrorComponent;
}());



/***/ }),

/***/ "./src/app/adp-ui-components/loading-indicator/loading-indicator.interceptor.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/adp-ui-components/loading-indicator/loading-indicator.interceptor.ts ***!
  \**************************************************************************************/
/*! exports provided: LoadingIndicatorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorInterceptor", function() { return LoadingIndicatorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _loading_indicator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-indicator.service */ "./src/app/adp-ui-components/loading-indicator/loading-indicator.service.ts");




/**
 * Interceptor which captures every Http request to manage the loading indicator
 */
var LoadingIndicatorInterceptor = /** @class */ (function () {
    function LoadingIndicatorInterceptor(loadingIndicatorService) {
        this.loadingIndicatorService = loadingIndicatorService;
    }
    /**
     * Pass the request through but use this to determine when a request starts and ends.
     * @param req Request
     * @param next Next handler
     */
    LoadingIndicatorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // emit onStarted event before request execution
        this.loadingIndicatorService.onStarted(req);
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingIndicatorService.onFinished(req); }));
    };
    LoadingIndicatorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loading_indicator_service__WEBPACK_IMPORTED_MODULE_3__["LoadingIndicatorService"]])
    ], LoadingIndicatorInterceptor);
    return LoadingIndicatorInterceptor;
}());



/***/ }),

/***/ "./src/app/adp-ui-components/loading-indicator/loading-indicator.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/adp-ui-components/loading-indicator/loading-indicator.service.ts ***!
  \**********************************************************************************/
/*! exports provided: LoadingIndicatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorService", function() { return LoadingIndicatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingIndicatorService = /** @class */ (function () {
    function LoadingIndicatorService() {
        this.onLoadingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Stores all currently active requests
         */
        this.requests = [];
    }
    /**
     * Adds request to the storage and notifies observers
     */
    LoadingIndicatorService.prototype.onStarted = function (req) {
        this.requests.push(req);
        this.notify();
    };
    /**
     * Removes request from the storage and notifies observers
     */
    LoadingIndicatorService.prototype.onFinished = function (req) {
        var index = this.requests.indexOf(req);
        if (index !== -1) {
            this.requests.splice(index, 1);
        }
        this.notify();
    };
    /**
     * Notifies observers about whether there are any requests on fly
     */
    LoadingIndicatorService.prototype.notify = function () {
        this.onLoadingChanged.emit(this.requests.length !== 0);
    };
    LoadingIndicatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingIndicatorService);
    return LoadingIndicatorService;
}());



/***/ }),

/***/ "./src/app/adp-ui-components/page-header/page-header.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/adp-ui-components/page-header/page-header.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pb-2 mt-4 mb-2 border-bottom\">\r\n  <ng-content>\r\n  </ng-content>\r\n  <div *ngIf=\"showLoading && isLoading\" class=\"float-right\">\r\n    <div class=\"clearfix\">\r\n      <div class=\"spinner-border spinner-border-sm float-right\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/adp-ui-components/page-header/page-header.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/adp-ui-components/page-header/page-header.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkcC11aS1jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/adp-ui-components/page-header/page-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adp-ui-components/page-header/page-header.component.ts ***!
  \************************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading-indicator/loading-indicator.service */ "./src/app/adp-ui-components/loading-indicator/loading-indicator.service.ts");



/**
 * Simple component to highlight transclusion and to show working indicator on all pages
 */
var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent(loading) {
        this.loading = loading;
        this.showLoading = true; // should the loading indicator be shown
        this.isLoading = false; // initial state we aren't loading anything
        this.initializeLoadingIndicator();
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    /**
     * When changes occur to this component, reset the loading indicator
     */
    PageHeaderComponent.prototype.ngOnChanges = function () {
        this.initializeLoadingIndicator();
    };
    /**
     * When this component is destroyed, destroy
     */
    PageHeaderComponent.prototype.ngOnDestroy = function () {
        this.destroyLoading();
    };
    /**
     * Unsubscribe to the loading subscription when we are done
     */
    PageHeaderComponent.prototype.destroyLoading = function () {
        if (this.loadingSubscription) {
            this.loadingSubscription.unsubscribe();
            this.loadingSubscription = undefined;
        }
    };
    /**
     * Initialize Loading Subscription
     */
    PageHeaderComponent.prototype.initializeLoadingIndicator = function () {
        var _this = this;
        if (this.showLoading) {
            if (this.loadingSubscription === undefined) {
                this.loadingSubscription = this.loading.onLoadingChanged.subscribe(function (loading) {
                    // place in setTimeout to remove issue with: ExpressionChangedAfterItHasBeenCheckedError.
                    setTimeout(function () {
                        _this.isLoading = loading;
                    }, 0);
                });
            }
        }
        else {
            this.destroyLoading();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageHeaderComponent.prototype, "showLoading", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/adp-ui-components/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/adp-ui-components/page-header/page-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_2__["LoadingIndicatorService"]])
    ], PageHeaderComponent);
    return PageHeaderComponent;
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
/* harmony import */ var _adp_baseball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adp/baseball */ "./src/app/baseball/index.ts");




var routes = [
    {
        path: 'baseball',
        // component: HomeComponent
        loadChildren: function () { return _adp_baseball__WEBPACK_IMPORTED_MODULE_3__["BaseballModule"]; }
    },
    {
        path: '',
        redirectTo: 'baseball',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'ADPCodeChallenge';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _adp_uiComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adp/uiComponents */ "./src/app/adp-ui-components/index.ts");
/* harmony import */ var _adp_baseball__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @adp/baseball */ "./src/app/baseball/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _adp_uiComponents__WEBPACK_IMPORTED_MODULE_5__["AdpUiComponentsModule"],
                _adp_baseball__WEBPACK_IMPORTED_MODULE_6__["BaseballModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["BASEBALL_API_CONFIGURATION"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/baseball/baseball-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/baseball/baseball-data.service.ts ***!
  \***************************************************/
/*! exports provided: BaseballDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseballDataService", function() { return BaseballDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_baseball_api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/baseball-api-configuration */ "./src/app/baseball/models/baseball-api-configuration.ts");






/**
 * Provide data from theSportsDb.com
 */
var BaseballDataService = /** @class */ (function () {
    function BaseballDataService(http, config) {
        this.http = http;
        this.config = config;
        // maintain a list of items that are saved here.
        // this is here to SIMULATE SAVE so users can see the changes
        // in a real production app, this would not exist.
        this.savedTeamList = [];
    }
    //#region Helper functions
    BaseballDataService.prototype.buildUrl = function (route) {
        return this.config.baseUrl + "/" + this.config.apiKey + "/" + route;
    };
    //#endregion
    /**
     * Return a list of leagues that pertain to baseball only
     */
    BaseballDataService.prototype.getLeagues = function () {
        var url = this.buildUrl('all_leagues.php');
        var leagueName = 'Baseball';
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.leagues.filter(function (l) { return l.strSport === leagueName; }); }));
    };
    /**
     * Get all teams in the league
     * @param leagueName league name
     */
    BaseballDataService.prototype.getTeamsPerLeague = function (leagueName) {
        var _this = this;
        var url = this.buildUrl('search_all_teams.php');
        var httpParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('l', leagueName);
        return this.http
            .get(url, { params: httpParam })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.teams.map(function (item) { return _this.simulateGet(item.idTeam) || item; }); }));
    };
    /**
     * Get a team by their id
     * @param idTeam Team ID
     */
    BaseballDataService.prototype.getTeam = function (idTeam) {
        var _this = this;
        var url = this.buildUrl('lookupteam.php');
        var httpParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', idTeam);
        return this.http
            .get(url, { params: httpParam })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.teams === undefined || result.teams === null || result.teams.length === 0 ? {} : result.teams[0]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.simulateGet(result.idTeam) || result; }) // if we have in our cache, return from the cache
        );
    };
    /**
     * Simulate a save so we can merge this list with the results from the API to show the results.
     * This is only necessary because we aren't saving to a real API/DB
     * @param team Team to save
     */
    BaseballDataService.prototype.simulateSave = function (team) {
        // see if the team is already on the list
        var foundTeam = this.simulateGet(team.idTeam);
        if (foundTeam !== undefined) {
            foundTeam.strTeam = team.strTeam;
            foundTeam.strManager = team.strManager;
        }
        else {
            this.savedTeamList.push(team);
        }
    };
    /**
     * Find a team in our cache so we can make it look like it was saved to the DB
     * @param id team to search for
     */
    BaseballDataService.prototype.simulateGet = function (id) {
        var foundTeam = this.savedTeamList.filter(function (item) {
            return item.idTeam === id;
        });
        return foundTeam === undefined || foundTeam === null || foundTeam.length === 0 ? undefined : foundTeam[0];
    };
    /**
     * Simulate saving a team because there isn't an endpoint to do it
     * @param team team to save
     */
    BaseballDataService.prototype.saveTeam = function (team) {
        this.simulateSave(team);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(team).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000) // 1 second delay to simulate saving
        );
    };
    BaseballDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _models_baseball_api_configuration__WEBPACK_IMPORTED_MODULE_5__["BaseballAPIConfiguration"]])
    ], BaseballDataService);
    return BaseballDataService;
}());



/***/ }),

/***/ "./src/app/baseball/baseball-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/baseball/baseball-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BaseballRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseballRoutingModule", function() { return BaseballRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/baseball/home/home.component.ts");
/* harmony import */ var _team_edit_team_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-edit/team-edit.component */ "./src/app/baseball/team-edit/team-edit.component.ts");





var routes = [
    {
        path: 'list/:lid/:tid',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'list/:lid',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'list',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'edit/:id',
        component: _team_edit_team_edit_component__WEBPACK_IMPORTED_MODULE_4__["TeamEditComponent"]
    },
];
/**
 * Routing for the baseball module of the application
 */
var BaseballRoutingModule = /** @class */ (function () {
    function BaseballRoutingModule() {
    }
    BaseballRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BaseballRoutingModule);
    return BaseballRoutingModule;
}());



/***/ }),

/***/ "./src/app/baseball/baseball.module.ts":
/*!*********************************************!*\
  !*** ./src/app/baseball/baseball.module.ts ***!
  \*********************************************/
/*! exports provided: BaseballModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseballModule", function() { return BaseballModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _baseball_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseball-routing.module */ "./src/app/baseball/baseball-routing.module.ts");
/* harmony import */ var _models_baseball_api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/baseball-api-configuration */ "./src/app/baseball/models/baseball-api-configuration.ts");
/* harmony import */ var _league_list_league_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./league-list/league-list.component */ "./src/app/baseball/league-list/league-list.component.ts");
/* harmony import */ var _baseball_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./baseball-data.service */ "./src/app/baseball/baseball-data.service.ts");
/* harmony import */ var _adp_uiComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @adp/uiComponents */ "./src/app/adp-ui-components/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/baseball/home/home.component.ts");
/* harmony import */ var _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team-list/team-list.component */ "./src/app/baseball/team-list/team-list.component.ts");
/* harmony import */ var _team_edit_team_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team-edit/team-edit.component */ "./src/app/baseball/team-edit/team-edit.component.ts");













/**
 * Baseball module allows displaying baseball teams, leagues, etc.
 */
var BaseballModule = /** @class */ (function () {
    function BaseballModule() {
    }
    BaseballModule_1 = BaseballModule;
    BaseballModule.forRoot = function (config) {
        return {
            ngModule: BaseballModule_1,
            providers: [
                { provide: _models_baseball_api_configuration__WEBPACK_IMPORTED_MODULE_5__["BaseballAPIConfiguration"], useValue: config },
                _baseball_data_service__WEBPACK_IMPORTED_MODULE_7__["BaseballDataService"]
            ]
        };
    };
    var BaseballModule_1;
    BaseballModule = BaseballModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _league_list_league_list_component__WEBPACK_IMPORTED_MODULE_6__["LeagueListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_11__["TeamListComponent"],
                _team_edit_team_edit_component__WEBPACK_IMPORTED_MODULE_12__["TeamEditComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _baseball_routing_module__WEBPACK_IMPORTED_MODULE_4__["BaseballRoutingModule"],
                _adp_uiComponents__WEBPACK_IMPORTED_MODULE_8__["AdpUiComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                _baseball_data_service__WEBPACK_IMPORTED_MODULE_7__["BaseballDataService"]
            ],
            exports: [
                _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_11__["TeamListComponent"],
                _league_list_league_list_component__WEBPACK_IMPORTED_MODULE_6__["LeagueListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ]
        })
    ], BaseballModule);
    return BaseballModule;
}());



/***/ }),

/***/ "./src/app/baseball/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/baseball/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header>\r\n  Baseball Leagues and Teams\r\n</app-page-header>\r\n\r\n<div class=\"jumbotron\">\r\n  <h1 class=\"display-4\">Baseball Leagues and Teams!</h1>\r\n  <p class=\"lead\">\r\n    Please select a league and team below to be able to edit team details.\r\n  </p>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-6 col-sm-5 col-md-4 col-lg-3\">\r\n    <h6>Leagues</h6>\r\n    <app-league-list (leagueClicked)=\"leagueSelected($event)\"></app-league-list>\r\n  </div>\r\n  <div class=\"col-6 col-sm-7 col-md-8 col-lg-9\">\r\n    <h6>Teams</h6>\r\n    <app-team-list [league]=\"league\" (teamClicked)=\"teamSelected($event)\"></app-team-list>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/baseball/home/home.component.scss":
/*!***************************************************!*\
  !*** ./src/app/baseball/home/home.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ViYWxsL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/baseball/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/baseball/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _league_list_league_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../league-list/league-list.component */ "./src/app/baseball/league-list/league-list.component.ts");
/* harmony import */ var _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../team-list/team-list.component */ "./src/app/baseball/team-list/team-list.component.ts");





/**
 * Home Component to show the leagues and teams
 */
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.leagueId = paramMap.get('lid');
            _this.teamId = paramMap.get('tid');
            if (_this.leagueId !== undefined && _this.leagueId !== null && _this.leagueId !== '') {
                // get the list of leagues
                _this.leagueListComponent.leagueSelected = {
                    strLeague: _this.leagueId
                };
                _this.leagueSelected(_this.leagueListComponent.leagueSelected);
                if (_this.teamId !== undefined && _this.teamId !== null && _this.teamId !== '') {
                    _this.teamListComponent.teamSelected = {
                        idTeam: _this.teamId
                    };
                }
            }
        });
    };
    HomeComponent.prototype.leagueSelected = function (league) {
        this.league = league;
    };
    HomeComponent.prototype.teamSelected = function (team) {
        this.router.navigate(['edit', team.idTeam]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_league_list_league_list_component__WEBPACK_IMPORTED_MODULE_3__["LeagueListComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _league_list_league_list_component__WEBPACK_IMPORTED_MODULE_3__["LeagueListComponent"])
    ], HomeComponent.prototype, "leagueListComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_4__["TeamListComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_4__["TeamListComponent"])
    ], HomeComponent.prototype, "teamListComponent", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/baseball/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/baseball/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/baseball/index.ts":
/*!***********************************!*\
  !*** ./src/app/baseball/index.ts ***!
  \***********************************/
/*! exports provided: BaseballModule, BaseballAPIConfiguration, LeagueListComponent, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseball_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseball.module */ "./src/app/baseball/baseball.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseballModule", function() { return _baseball_module__WEBPACK_IMPORTED_MODULE_0__["BaseballModule"]; });

/* harmony import */ var _models_baseball_api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/baseball-api-configuration */ "./src/app/baseball/models/baseball-api-configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseballAPIConfiguration", function() { return _models_baseball_api_configuration__WEBPACK_IMPORTED_MODULE_1__["BaseballAPIConfiguration"]; });

/* harmony import */ var _league_list_league_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./league-list/league-list.component */ "./src/app/baseball/league-list/league-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeagueListComponent", function() { return _league_list_league_list_component__WEBPACK_IMPORTED_MODULE_2__["LeagueListComponent"]; });

/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/baseball/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]; });

/* empty/unused harmony star reexport */






/***/ }),

/***/ "./src/app/baseball/league-list/league-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/baseball/league-list/league-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" \r\n      [ngClass]=\"{active: isLeagueSelected(league)}\" \r\n      *ngFor=\"let league of leagues$ | async\"\r\n      (click)=\"leagueClick(league)\"> \r\n      {{ league.strLeague }}\r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/baseball/league-list/league-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/baseball/league-list/league-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ViYWxsL2xlYWd1ZS1saXN0L2xlYWd1ZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/baseball/league-list/league-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/baseball/league-list/league-list.component.ts ***!
  \***************************************************************/
/*! exports provided: LeagueListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueListComponent", function() { return LeagueListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _baseball_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../baseball-data.service */ "./src/app/baseball/baseball-data.service.ts");



var LeagueListComponent = /** @class */ (function () {
    function LeagueListComponent(dataService) {
        this.dataService = dataService;
        this.leagueClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LeagueListComponent.prototype.ngOnInit = function () {
        this.leagues$ = this.dataService.getLeagues();
    };
    /**
     * Is this league selected by the user?
     * @param league the league to check
     */
    LeagueListComponent.prototype.isLeagueSelected = function (league) {
        return (this.leagueSelected !== undefined &&
            this.leagueSelected !== null &&
            this.leagueSelected.strLeague === league.strLeague);
    };
    /**
     * Select this league
     * @param league The league that was clicked
     */
    LeagueListComponent.prototype.leagueClick = function (league) {
        this.leagueSelected = league;
        this.leagueClicked.emit(this.leagueSelected);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeagueListComponent.prototype, "leagueClicked", void 0);
    LeagueListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-league-list',
            template: __webpack_require__(/*! ./league-list.component.html */ "./src/app/baseball/league-list/league-list.component.html"),
            styles: [__webpack_require__(/*! ./league-list.component.scss */ "./src/app/baseball/league-list/league-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_baseball_data_service__WEBPACK_IMPORTED_MODULE_2__["BaseballDataService"]])
    ], LeagueListComponent);
    return LeagueListComponent;
}());



/***/ }),

/***/ "./src/app/baseball/models/baseball-api-configuration.ts":
/*!***************************************************************!*\
  !*** ./src/app/baseball/models/baseball-api-configuration.ts ***!
  \***************************************************************/
/*! exports provided: BaseballAPIConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseballAPIConfiguration", function() { return BaseballAPIConfiguration; });
/**
 * Configuration for baseball API
 */
var BaseballAPIConfiguration = /** @class */ (function () {
    function BaseballAPIConfiguration() {
    }
    return BaseballAPIConfiguration;
}());



/***/ }),

/***/ "./src/app/baseball/team-edit/team-edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/baseball/team-edit/team-edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header>\r\n  Edit Team Information\r\n</app-page-header>\r\n\r\n<form class=\"form\" #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"submitForm()\" [ngClass]=\"{'ng-submitted': editForm.submitted}\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-6\">\r\n      <div class=\"form-group app-form\">\r\n        <label for=\"teamName\">Team Name</label>\r\n        <input class=\"form-control\" type=\"text\" name=\"teamName\" [(ngModel)]=\"teamInfo.strTeam\" placeholder=\"Team Name\"\r\n          required>\r\n        <app-input-error message=\"Team Name is Required\" [form]=\"editForm\" for=\"teamName\" errorType=\"required\"></app-input-error>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-6\">\r\n      <div class=\"form-group app-form\">\r\n        <label for=\"manager\">Manager</label>\r\n        <input class=\"form-control\" type=\"text\" name=\"manager\" [(ngModel)]=\"teamInfo.strManager\" placeholder=\"Manager\"\r\n          required>\r\n        <app-input-error message=\"Manager is Required\" [form]=\"editForm\" for=\"manager\" errorType=\"required\"></app-input-error>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"text-center\" *ngIf=\"!showAlert\">\r\n    <button type=\"submit\" [disabled]=\"saveInProgress\" class=\"btn btn-primary\">\r\n      {{ saveInProgress ? 'Working...' : 'Save Changes'}}\r\n    </button>\r\n    <button type=\"button\" [disabled]=\"saveInProgress\" class=\"btn btn-secondary ml-2\" (click)=\"goBack()\">\r\n      Cancel\r\n    </button>\r\n  </div>\r\n</form>\r\n\r\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showAlert\">\r\n  <h4 class=\"alert-heading\">Team Saved</h4>\r\n  <hr>\r\n  <p>You will return to the league/team list shortly.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/baseball/team-edit/team-edit.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/baseball/team-edit/team-edit.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ViYWxsL3RlYW0tZWRpdC90ZWFtLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/baseball/team-edit/team-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/baseball/team-edit/team-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: TeamEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamEditComponent", function() { return TeamEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _baseball_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../baseball-data.service */ "./src/app/baseball/baseball-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _models_baseball_api_configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/baseball-api-configuration */ "./src/app/baseball/models/baseball-api-configuration.ts");








var TeamEditComponent = /** @class */ (function () {
    function TeamEditComponent(route, router, activatedRoute, dataService, location, config, zone) {
        this.route = route;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.location = location;
        this.config = config;
        this.zone = zone;
        this.teamInfo = {};
        this.saveInProgress = false;
        this.showAlert = false;
    }
    TeamEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.team$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            _this.teamId = params.get('id');
            return _this.dataService.getTeam(_this.teamId);
        }));
        this.team$.subscribe(function (data) {
            _this.teamInfo = data;
        });
    };
    /**
     * Submit the form, which in this case will show notification and route back to the root
     */
    TeamEditComponent.prototype.submitForm = function () {
        if (this.editForm.valid) {
            // continue saving since this form is valid.
            this.saveTeam();
        }
    };
    TeamEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    /**
     * Save the team
     */
    TeamEditComponent.prototype.saveTeam = function () {
        var _this = this;
        this.saveInProgress = true; // used for button indicator
        this.dataService.saveTeam(this.teamInfo).subscribe({
            next: function () {
                // show the alert before navigating from the form
                _this.showAlertDialog();
            },
            complete: function () {
                _this.saveInProgress = false; // remove working indicator on button
            }
        });
    };
    /**
     * Goto the list route
     */
    TeamEditComponent.prototype.gotoList = function () {
        this.router.navigate(['list', this.teamInfo.strLeague, this.teamInfo.idTeam]);
    };
    /**
     * show an alert when save is completed.
     */
    TeamEditComponent.prototype.showAlertDialog = function () {
        var _this = this;
        if (this.config.alertDelay === undefined || this.config.alertDelay === 0) {
            this.gotoList();
        }
        else {
            this.showAlert = true;
            setTimeout(function () {
                _this.showAlert = false;
                // redirect
                _this.zone.run(function () { return _this.gotoList(); });
            }, this.config.alertDelay);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], TeamEditComponent.prototype, "editForm", void 0);
    TeamEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-edit',
            template: __webpack_require__(/*! ./team-edit.component.html */ "./src/app/baseball/team-edit/team-edit.component.html"),
            styles: [__webpack_require__(/*! ./team-edit.component.scss */ "./src/app/baseball/team-edit/team-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _baseball_data_service__WEBPACK_IMPORTED_MODULE_3__["BaseballDataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _models_baseball_api_configuration__WEBPACK_IMPORTED_MODULE_7__["BaseballAPIConfiguration"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], TeamEditComponent);
    return TeamEditComponent;
}());



/***/ }),

/***/ "./src/app/baseball/team-list/team-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/baseball/team-list/team-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\r\n    <li class=\"list-group-item\" \r\n        [ngClass]=\"{active: isTeamSelected(team)}\" \r\n        *ngFor=\"let team of teams$ | async\"\r\n        (click)=\"teamClick(team)\"> \r\n        {{ team.strTeam }}\r\n    </li>\r\n  </ul>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/baseball/team-list/team-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/baseball/team-list/team-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ViYWxsL3RlYW0tbGlzdC90ZWFtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/baseball/team-list/team-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/baseball/team-list/team-list.component.ts ***!
  \***********************************************************/
/*! exports provided: TeamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamListComponent", function() { return TeamListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _baseball_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../baseball-data.service */ "./src/app/baseball/baseball-data.service.ts");



var TeamListComponent = /** @class */ (function () {
    function TeamListComponent(dataService) {
        this.dataService = dataService;
        this.teamClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TeamListComponent.prototype.ngOnInit = function () {
        this.loadTeams();
    };
    TeamListComponent.prototype.ngOnChanges = function (changes) {
        if (changes['league']) {
            this.loadTeams();
        }
    };
    /**
     * Is this team selected by the user?
     * @param team the team to check
     */
    TeamListComponent.prototype.isTeamSelected = function (team) {
        return (this.teamSelected !== undefined &&
            this.teamSelected !== null &&
            this.teamSelected.idTeam === team.idTeam);
    };
    /**
     * Select this team
     * @param team The team that was clicked
     */
    TeamListComponent.prototype.teamClick = function (team) {
        this.teamSelected = team;
        this.teamClicked.emit(this.teamSelected);
    };
    /**
     * Load all leagues
     */
    TeamListComponent.prototype.loadTeams = function () {
        if (this.league !== undefined && this.league !== null) {
            this.teams$ = this.dataService.getTeamsPerLeague(this.league.strLeague);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamListComponent.prototype, "teamClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamListComponent.prototype, "league", void 0);
    TeamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-list',
            template: __webpack_require__(/*! ./team-list.component.html */ "./src/app/baseball/team-list/team-list.component.html"),
            styles: [__webpack_require__(/*! ./team-list.component.scss */ "./src/app/baseball/team-list/team-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_baseball_data_service__WEBPACK_IMPORTED_MODULE_2__["BaseballDataService"]])
    ], TeamListComponent);
    return TeamListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, BASEBALL_API_CONFIGURATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASEBALL_API_CONFIGURATION", function() { return BASEBALL_API_CONFIGURATION; });
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
var BASEBALL_API_CONFIGURATION = {
    baseUrl: 'https://www.thesportsdb.com/api/v1/json',
    apiKey: '1',
    alertDelay: 0
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AC\Challenge\ADPCodeChallenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map