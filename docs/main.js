(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Randy\Desktop\Angular\lazyLoad\LazyLoad-Project\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MjVJ":
/*!************************************************!*\
  !*** ./src/app/lazyload/lazyload.component.ts ***!
  \************************************************/
/*! exports provided: LazyloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyloadComponent", function() { return LazyloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = ["loadingRef"];
function LazyloadComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r3, " ", item_r2.fileName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.creator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.updateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.publishDiv);
} }
function LazyloadComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u8F09\u5165\u66F4\u591A... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LazyloadComponent {
    constructor() {
        this.startIndex = 0;
        this.endIndex = 0;
        this.eachTimeCount = 10;
        this.rawData = [
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '黃小花',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
            {
                fileName: '公司報告.ppt',
                creator: '王大明',
                updateTime: '2022-01-20',
                publishDiv: '審計部'
            },
        ];
        this.displayArray = [];
    }
    ngOnInit() {
        this.appendData();
    }
    processData() {
    }
    appendData() {
        if (this.displayArray.length >= this.rawData.length)
            return;
        const originalStartIndex = this.startIndex;
        this.endIndex = this.eachTimeCount + this.startIndex;
        const slicedData = this.rawData.slice(this.startIndex, this.endIndex);
        this.displayArray = this.displayArray.concat(slicedData);
        this.startIndex = this.endIndex;
    }
    onScroll() {
        if (!this.loadingRef)
            return;
        if (this.loadingRef.nativeElement.getBoundingClientRect().top < 461) {
            this.appendData();
        }
    }
}
LazyloadComponent.ɵfac = function LazyloadComponent_Factory(t) { return new (t || LazyloadComponent)(); };
LazyloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LazyloadComponent, selectors: [["app-lazyload"]], viewQuery: function LazyloadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingRef = _t.first);
    } }, decls: 15, vars: 2, consts: [[1, "table-block", 3, "scroll"], [1, "w-100"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["loadingRef", ""], ["colspan", "4", 1, "loading-block"]], template: function LazyloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function LazyloadComponent_Template_div_scroll_0_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u6A94\u6848\u540D\u7A31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u4E0A\u50B3\u4EBA\u54E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u767C\u4F48\u55AE\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u66F4\u65B0\u6642\u9593");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LazyloadComponent_tr_13_Template, 9, 5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LazyloadComponent_tr_14_Template, 4, 0, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endIndex <= ctx.rawData.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["table[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n}\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: -1px;\r\n  background-color: #308470;\r\n  color: #fff;\r\n  letter-spacing: 1.2px;\r\n  padding: 5px 10px;\r\n  text-align: left;\r\n}\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid rgba(112, 112, 112, 0.3);\r\n}\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n  letter-spacing: 1.2px;\r\n  padding: 5px 10px;\r\n  text-align: left;\r\n  height: 40px;\r\n}\r\n.table-block[_ngcontent-%COMP%] {\r\n  max-height: 500px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .loading-block[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-color:rgba(112, 112, 112, 0.3)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenlsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEI7QUFDRiIsImZpbGUiOiJsYXp5bG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxudGFibGUgdGhlYWQgdGgge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAtMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDg0NzA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxudGFibGUgdGJvZHkgdHIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMyk7XHJcbn1cclxudGFibGUgdGJvZHkgdHIgdGR7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi50YWJsZS1ibG9jayB7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG50YWJsZSB0Ym9keSB0ciAubG9hZGluZy1ibG9jayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgxMTIsIDExMiwgMTEyLCAwLjMpXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _lazyload_lazyload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazyload/lazyload.component */ "MjVJ");


class AppComponent {
    constructor() {
        this.title = 'laztLoad';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-lazyload");
    } }, directives: [_lazyload_lazyload_component__WEBPACK_IMPORTED_MODULE_1__["LazyloadComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _lazyload_lazyload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazyload/lazyload.component */ "MjVJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _lazyload_lazyload_component__WEBPACK_IMPORTED_MODULE_2__["LazyloadComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map