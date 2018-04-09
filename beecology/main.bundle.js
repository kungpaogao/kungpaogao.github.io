webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* page banner (header, subheader) */\n\n.banner {\n\twidth: 100%;\n\toverflow: hidden;\n\tz-index: 0;\n\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/about-banner-blur.jpg") + ");\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n}\n\n.header {\n\tmargin-top: 55px;\n\tfont-size: 3em;\n\tpadding-top: 1em;\n}\n\n.subheader {\n\tfont-size: 2em;\n\tpadding-bottom: 6em;\n}\n\n/* page content - main card */\n\n.content {\n\twidth: 100%;\n\tmargin-top: -14em;\n\t-ms-flex-item-align: center;\n\t    -ms-grid-row-align: center;\n\t    align-self: center;\n}\n\n.container {\n\tmargin-top: 5%;\n\tbox-shadow: 0 0 10px 0 #00000033, 1px 2px 5px 0 #00000043;\n\tborder-radius: 3px;\n\tbackground: white;\n\tmargin-bottom: 5%;\n}\n\n.paragraph-header {\n\tpadding-top: 5%;\n\tpadding-bottom: 1%;\n\tmargin-left: 5%;\n\tmargin-right: 5%;\n}\n\n.paragraph-header>h2 {\n\tfont-weight: 400;\n}\n\n.information {\n\tfont-size: 16px;\n\ttext-align: left;\n\tmargin-left: 5%;\n\tmargin-right: 5%;\n}\n\n.image {\n\tpadding: 2%;\n\tpadding-left: 5%;\n\tpadding-right: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n\t<div class=\"row header justify-content-center\">Background</div>\n\t<div class=\"row subheader justify-content-center\">About conservation</div>\n</div>\n\n<div class=\"content\">\n\t<div class=\"container\">\n\t\t<div class=\"row paragraph-header\">\n\t\t\t<h2>What are pollinators?</h2>\n\t\t</div>\n\t\t<div class=\"row information justify-content-center\">\n\t\t\tPollination is the spread of pollen from one plant to another, and it is the means by which most plants reproduce. Pollinators\n\t\t\tare insects or animals that assist in the spread of pollen. These include bumblebees, honeybees, and hummingbirds. Pollinators\n\t\t\tcollect both pollen and nectar as a food source; the interaction is mutually beneficial.\n\t\t</div>\n\n\t\t<div class=\"row paragraph-header\">\n\t\t\t<h2>Bumblebees and honeybees</h2>\n\t\t</div>\n\t\t<div class=\"row information justify-content-center\">\n\t\t\tPollinators, in general, are facing population decline. However, reporting on \"Colony Collapse Disorder\", which is specific\n\t\t\tto Honeybees, has given many the impression that solving CCD will solve pollinator decline. This is simply not the case.\n\t\t</div>\n\t\t<div class=\"row justify-content-center image\">\n\t\t\t<img src=\"assets/bumblebee-honeybee.svg\" alt=\"bumblebee-honeybee\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"row information justify-content-center\">\n\t\t\tHoneybees are important, although not critical, to agricultural and industrial activity. Bumblebees pollinate a far broader\n\t\t\trange of floral species, and support higher levels of the ecosystem.\n\t\t</div>\n\n\t\t<div class=\"row paragraph-header\">\n\t\t\t<h2>Why are bumblebees important?</h2>\n\t\t</div>\n\t\t<div class=\"row information justify-content-center\">\n\t\t\tBumblebees aren't widely used in agriculture, so why is their survival a concern? Bumblebees are a keystone species for ecological\n\t\t\tsystems. This means that when their population fluctuates, it has a cascading effect on other levels of the system. When\n\t\t\tplants aren't reproducing, there is less food for animals that consume them. This reduces the population of those animals,\n\t\t\tand effect continues.\n\t\t</div>\n\t\t<div class=\"row justify-content-center image\">\n\t\t\t<img src=\"assets/bumblebee-importance.svg\" alt=\"bumblebee-importance\" class=\"img-fluid\">\n\t\t</div>\n\n\t\t<div class=\"row paragraph-header\">\n\t\t\t<h2>So what causes population decline?</h2>\n\t\t</div>\n\t\t<div class=\"row information justify-content-center\">\n\t\t\tHistorically, 11 species of bumblebee could be found in Massachusetts. Recently, however, only 5-6 of these species could\n\t\t\tbe identified. There is no direct explanation for their decline, however several factors are at play.\n\t\t</div>\n\t\t<div class=\"row justify-content-center image\">\n\t\t\t<img src=\"assets/decline-factors.svg\" alt=\"decline-factors\" class=\"img-fluid\">\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-page',
            template: __webpack_require__("../../../../../src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-bee-detail/app-bee-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <button mat-icon-button (click)=\"goBack()\">\n    <mat-icon aria-label=\"Click to go back\">arrow_back</mat-icon>\n  </button>\n</mat-toolbar>\n\n<mat-card>\n  <mat-card-header>\n    <img mat-card-avatar src=\"http://beecology.wpi.edu/{{ bee.bee_pic_path }}\" alt=\"Photo of {{ bee.bee_name }}\">\n    <mat-card-title>{{ bee.bee_name }}</mat-card-title>\n    <mat-card-subtitle>{{ bee.common_name }}</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"http://beecology.wpi.edu/{{ bee.bee_pic_path }}\" alt=\"Photo of {{ bee.bee_name }}\">\n  <mat-card-content>\n    <p>\n      {{ bee.description }}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button (click)=\"goBack()\">DONE</button>\n  </mat-card-actions>\n</mat-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/app-bee-detail/app-bee-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-toolbar {\n  position: fixed;\n  top: 55px;\n  background: white;\n  z-index: 10;\n  border-bottom: 1px solid #f0f0f0; }\n  .mat-toolbar .mat-icon-button {\n    position: relative;\n    left: 5px;\n    z-index: 10; }\n\n.mat-card {\n  margin-top: 120px;\n  box-shadow: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-bee-detail/app-bee-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBeeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bee__ = __webpack_require__("../../../../../src/app/bee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beedex_service__ = __webpack_require__("../../../../../src/app/beedex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppBeeDetailComponent = (function () {
    function AppBeeDetailComponent(route, beeService, location) {
        this.route = route;
        this.beeService = beeService;
        this.location = location;
    }
    AppBeeDetailComponent.prototype.ngOnInit = function () {
        this.getBee();
    };
    AppBeeDetailComponent.prototype.getBee = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.beeService.getBee(id).subscribe(function (bee) { return _this.bee = bee; });
    };
    AppBeeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__bee__["a" /* Bee */])
    ], AppBeeDetailComponent.prototype, "bee", void 0);
    AppBeeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-bee-detail',
            template: __webpack_require__("../../../../../src/app/app-bee-detail/app-bee-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-bee-detail/app-bee-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__beedex_service__["a" /* BeedexService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], AppBeeDetailComponent);
    return AppBeeDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-beedex/app-beedex.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <a mat-list-item routerLink=\"/detail/{{bee.bee_id}}\" *ngFor=\"let bee of bees\">\n    <img matListAvatar src=\"http://beecology.wpi.edu/{{ bee.bee_pic_path }}\" alt=\"beeimg\">\n    <h3 matLine> {{ bee.bee_name }} </h3>\n    <p matLine> {{ bee.common_name }} </p>\n  </a>\n</mat-nav-list>"

/***/ }),

/***/ "../../../../../src/app/app-beedex/app-beedex.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-nav-list {\n  padding-top: 105px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-beedex/app-beedex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBeedexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beedex_service__ = __webpack_require__("../../../../../src/app/beedex.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppBeedexComponent = (function () {
    function AppBeedexComponent(beedexService) {
        this.beedexService = beedexService;
    }
    AppBeedexComponent.prototype.ngOnInit = function () {
        this.getBeedex();
    };
    AppBeedexComponent.prototype.getBeedex = function () {
        var _this = this;
        this.beedexService.getBeedex()
            .subscribe(function (bees) { return _this.bees = bees; });
    };
    AppBeedexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-beedex',
            template: __webpack_require__("../../../../../src/app/app-beedex/app-beedex.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-beedex/app-beedex.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__beedex_service__["a" /* BeedexService */]])
    ], AppBeedexComponent);
    return AppBeedexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-home/app-home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  app-home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/app-home/app-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-home/app-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHomeComponent = (function () {
    function AppHomeComponent() {
    }
    AppHomeComponent.prototype.ngOnInit = function () {
    };
    AppHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-home',
            template: __webpack_require__("../../../../../src/app/app-home/app-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-home/app-home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHomeComponent);
    return AppHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-logs/app-logs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  app-logs works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/app-logs/app-logs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-logs/app-logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppLogsComponent = (function () {
    function AppLogsComponent() {
    }
    AppLogsComponent.prototype.ngOnInit = function () {
    };
    AppLogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-logs',
            template: __webpack_require__("../../../../../src/app/app-logs/app-logs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-logs/app-logs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppLogsComponent);
    return AppLogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-page/app-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".media-section {\n  margin-top: 70px;\n}\n\n.blocks {\n  width: 100%;\n}\n\n.blocks .btn {\n  padding: 24px 12px;\n  margin: 10px 0;\n  border-radius: 0;\n}\n\n.button-custom {\n  background: red;\n}\n\n.mat-tab-nav-bar {\n  z-index: 3;\n  background: white;\n  position: fixed;\n  top: 55px;\n  width: 100%;\n}\n\n.mat-tab-link {\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  opacity: 1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-page/app-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid media-section\">\n  <div class=\"btn-group btn-group-vertical btn-group-lg blocks\">\n    <button type=\"button\" class=\"btn button-custom\">\n      <i class=\"fa fa-play align-middle\" aria-hidden=\"true\"></i>\n      <span class=\"align-middle\">Click here to Play</span>\n    </button>\n    <button type=\"button\" class=\"btn button-custom\">2</button>\n    <button type=\"button\" class=\"btn button-custom\">3</button>\n    <button type=\"button\" class=\"btn button-custom\">4</button>\n  </div>\n</div> -->\n\n<nav fxLayout=\"column\" mat-tab-nav-bar>\n  <div mat-tab-link\n    *ngFor=\"let link of navLinks\"\n    [routerLink]=\"link.path\"\n    routerLinkActive #rla=\"routerLinkActive\"\n    fxFlex=\"20%\"\n    [active]=\"rla.isActive\">\n    {{link.label}}\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app-page/app-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPageComponent = (function () {
    function AppPageComponent() {
        this.navLinks = [
            { path: 'home', label: 'Home' },
            { path: 'logs', label: 'Logs' },
            { path: 'beedex', label: 'Beedex' },
            { path: 'tutorial', label: 'Tutorial' },
            { path: 'setting', label: 'Setting' },
        ];
    }
    AppPageComponent.prototype.ngOnInit = function () {
    };
    AppPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-page',
            template: __webpack_require__("../../../../../src/app/app-page/app-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-page/app-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppPageComponent);
    return AppPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__faq_page_faq_page_component__ = __webpack_require__("../../../../../src/app/faq-page/faq-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__front_page_front_page_component__ = __webpack_require__("../../../../../src/app/front-page/front-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_page_app_page_component__ = __webpack_require__("../../../../../src/app/app-page/app-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_page_tools_page_component__ = __webpack_require__("../../../../../src/app/tools-page/tools-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_page_about_page_component__ = __webpack_require__("../../../../../src/app/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_home_app_home_component__ = __webpack_require__("../../../../../src/app/app-home/app-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_logs_app_logs_component__ = __webpack_require__("../../../../../src/app/app-logs/app-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_beedex_app_beedex_component__ = __webpack_require__("../../../../../src/app/app-beedex/app-beedex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_tutorial_app_tutorial_component__ = __webpack_require__("../../../../../src/app/app-tutorial/app-tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_setting_app_setting_component__ = __webpack_require__("../../../../../src/app/app-setting/app-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_bee_detail_app_bee_detail_component__ = __webpack_require__("../../../../../src/app/app-bee-detail/app-bee-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__help_page_help_page_component__ = __webpack_require__("../../../../../src/app/help-page/help-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tutorial_page_tutorial_page_component__ = __webpack_require__("../../../../../src/app/tutorial-page/tutorial-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__front_page_front_page_component__["a" /* FrontPageComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_page_contact_page_component__["a" /* ContactPageComponent */] },
    {
        path: 'app',
        component: __WEBPACK_IMPORTED_MODULE_5__app_page_app_page_component__["a" /* AppPageComponent */],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__app_home_app_home_component__["a" /* AppHomeComponent */] },
            { path: 'logs', component: __WEBPACK_IMPORTED_MODULE_9__app_logs_app_logs_component__["a" /* AppLogsComponent */] },
            { path: 'beedex', component: __WEBPACK_IMPORTED_MODULE_10__app_beedex_app_beedex_component__["a" /* AppBeedexComponent */] },
            { path: 'tutorial', component: __WEBPACK_IMPORTED_MODULE_11__app_tutorial_app_tutorial_component__["a" /* AppTutorialComponent */] },
            { path: 'setting', component: __WEBPACK_IMPORTED_MODULE_12__app_setting_app_setting_component__["a" /* AppSettingComponent */] },
        ]
    },
    { path: 'tools', component: __WEBPACK_IMPORTED_MODULE_6__tools_page_tools_page_component__["a" /* ToolsPageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_page_about_page_component__["a" /* AboutPageComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_13__app_bee_detail_app_bee_detail_component__["a" /* AppBeeDetailComponent */] },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_14__help_page_help_page_component__["a" /* HelpPageComponent */] },
    { path: 'tutorial', component: __WEBPACK_IMPORTED_MODULE_15__tutorial_page_tutorial_page_component__["a" /* TutorialPageComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_0__faq_page_faq_page_component__["a" /* FaqPageComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-setting/app-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  app-setting works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/app-setting/app-setting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-setting/app-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSettingComponent = (function () {
    function AppSettingComponent() {
    }
    AppSettingComponent.prototype.ngOnInit = function () {
    };
    AppSettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-setting',
            template: __webpack_require__("../../../../../src/app/app-setting/app-setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-setting/app-setting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSettingComponent);
    return AppSettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-tutorial/app-tutorial.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  app-tutorial works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/app-tutorial/app-tutorial.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-tutorial/app-tutorial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTutorialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppTutorialComponent = (function () {
    function AppTutorialComponent() {
    }
    AppTutorialComponent.prototype.ngOnInit = function () {
    };
    AppTutorialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-tutorial',
            template: __webpack_require__("../../../../../src/app/app-tutorial/app-tutorial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-tutorial/app-tutorial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppTutorialComponent);
    return AppTutorialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n\tmin-height: 100%;\n\theight: 100vh;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n}\n\n.content {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 0 auto;\n\t        flex: 1 0 auto;\n}\n\n.footer {\n\t-ms-flex-negative: 0;\n\t    flex-shrink: 0;\n\tmargin-top: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav class=\"content\"></app-nav>\n<router-outlet class=\"content\"></router-outlet>\n<app-footer class=\"footer\"></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__front_page_front_page_component__ = __webpack_require__("../../../../../src/app/front-page/front-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_page_app_page_component__ = __webpack_require__("../../../../../src/app/app-page/app-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tools_page_tools_page_component__ = __webpack_require__("../../../../../src/app/tools-page/tools-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_page_about_page_component__ = __webpack_require__("../../../../../src/app/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_home_app_home_component__ = __webpack_require__("../../../../../src/app/app-home/app-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_logs_app_logs_component__ = __webpack_require__("../../../../../src/app/app-logs/app-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_beedex_app_beedex_component__ = __webpack_require__("../../../../../src/app/app-beedex/app-beedex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_tutorial_app_tutorial_component__ = __webpack_require__("../../../../../src/app/app-tutorial/app-tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_setting_app_setting_component__ = __webpack_require__("../../../../../src/app/app-setting/app-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__beedex_service__ = __webpack_require__("../../../../../src/app/beedex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_bee_detail_app_bee_detail_component__ = __webpack_require__("../../../../../src/app/app-bee-detail/app-bee-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__help_page_help_page_component__ = __webpack_require__("../../../../../src/app/help-page/help-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tutorial_page_tutorial_page_component__ = __webpack_require__("../../../../../src/app/tutorial-page/tutorial-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__faq_page_faq_page_component__ = __webpack_require__("../../../../../src/app/faq-page/faq-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__front_page_front_page_component__["a" /* FrontPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_page_contact_page_component__["a" /* ContactPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__app_page_app_page_component__["a" /* AppPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tools_page_tools_page_component__["a" /* ToolsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_page_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__app_home_app_home_component__["a" /* AppHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__app_logs_app_logs_component__["a" /* AppLogsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__app_beedex_app_beedex_component__["a" /* AppBeedexComponent */],
                __WEBPACK_IMPORTED_MODULE_18__app_tutorial_app_tutorial_component__["a" /* AppTutorialComponent */],
                __WEBPACK_IMPORTED_MODULE_19__app_setting_app_setting_component__["a" /* AppSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_22__app_bee_detail_app_bee_detail_component__["a" /* AppBeeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__help_page_help_page_component__["a" /* HelpPageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__tutorial_page_tutorial_page_component__["a" /* TutorialPageComponent */],
                __WEBPACK_IMPORTED_MODULE_25__faq_page_faq_page_component__["a" /* FaqPageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production }),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__beedex_service__["a" /* BeedexService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/bee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bee; });
var Bee = (function () {
    function Bee() {
    }
    return Bee;
}());



/***/ }),

/***/ "../../../../../src/app/beedex.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeedexService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeedexService = (function () {
    function BeedexService(http) {
        this.http = http;
        this.beedexUrl = 'http://beecology.wpi.edu/api_v2/api/beedex';
    }
    BeedexService.prototype.getBeedex = function () {
        return this.http.get(this.beedexUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (res) { return res.data; }));
    };
    BeedexService.prototype.getBee = function (id) {
        var url = this.beedexUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (res) { return res.data[0]; }));
    };
    BeedexService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BeedexService);
    return BeedexService;
}());



/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n\tbackground: #FCC02F;\n\tmargin-top: 55px;\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n\tfont-size: 48pt;\n\tmargin-bottom: 55px;\n}\n\n.paragraph-header {\n\tmargin-top: 55px;\n\tmargin-bottom: 25px;\n\tfont-size: 24pt;\n\ttext-align: left;\n}\n\n.profile {\n\tbox-shadow: 0px 0px 10px 0 #00000033;\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n\tmargin-right: 3%;\n\tmargin-top: 20px;\n}\n\n.picture {\n\tmargin-bottom: 7%;\n}\n\n.page-footer {\n\tmargin-top: 55px;\n\tbackground: #ffc107;\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n\ttext-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row header justify-content-center\">\n\t\tContact - Meet the Team\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 col-md-push-6\">\n\t\t\tFrom its inception to current developments, the Beecology Project has required a dedicated team of creators, investors, scientists,\n\t\t\tand programmers to get to where we are today. Here, we would like to acknowledge and thank all of the people who played\n\t\t\ta part in creating and maintaining this project. We couldn't have done it without you.\n\t\t</div>\n\t\t<div class=\"col-md-5 col-md-pull-5 col-md-offset-1\">\n\t\t\t<img src=\"http://via.placeholder.com/500x300\" class=\"img-fluid\" alt=\"group-photo\">\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row paragraph-header\">\n\t\t<div class=\"col\">\n\t\t\tProject Leaders\n\t\t</div>\n\t</div>\n\t<div class=\"row col\">\n\t\t<div class=\"profile text-center\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Leader 1</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Leader 2</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Leader 3</p>\n\t\t</div>\n\t</div>\n\n</div>\n\n<div class=\"container\">\n\t<div class=\"row paragraph-header\">\n\t\t<div class=\"col\">\n\t\t\tWeb Development Team\n\t\t</div>\n\t</div>\n\t<div class=\"row col\">\n\t\t<div class=\"profile text-center\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 1</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 2</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 3</p>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row paragraph-header\">\n\t\t<div class=\"col\">\n\t\t\tApp Development Team\n\t\t</div>\n\t</div>\n\t<div class=\"row col\">\n\t\t<div class=\"profile text-center\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 1</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 2</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 3</p>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row paragraph-header\">\n\t\t<div class=\"col\">\n\t\t\tDatabase Development Team\n\t\t</div>\n\t</div>\n\t<div class=\"row col\">\n\t\t<div class=\"profile text-center\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 1</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 2</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 3</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 4</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 5</p>\n\t\t</div>\n\t\t<div class=\"text-center profile\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid picture\">\n\t\t\t<p>Dev 6</p>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container-fluid\">\n\t<div class=\"row page-footer justify-content-center\">\n\t\t<div class=\"information\">\n\t\t\t<p>Looking for more information on the Beecology project or have further questions? </p>\n\t\t\t<p>Before contacting us try checking our\n\t\t\t\t<a href=\"\">Frequently Asked Questions</a>\n\t\t\t</p>\n\t\t\t<p>Email us at\n\t\t\t\t<a href=\"\">samplebeecologyemail@wpi.edu</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactPageComponent = (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-page',
            template: __webpack_require__("../../../../../src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-page/contact-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/faq-page/faq-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n\tbackground: #FCC02F;\n\tmargin-top: 55px;\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n\tfont-size: 48pt;\n}\n\n.paragraph-header {\n\tmargin-top: 55px;\n\tfont-size: 24pt;\n\ttext-align: left;\n\tmargin-bottom: 25px;\n}\n\n.picture {\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n}\n\n.name {\n\tfont-size: 12pt;\n\tmargin-top: 10px;\n}\n\n.latin-name {\n\tfont-size: 12pt;\n\tmargin-top: 10px;\n\tfont-style: italic;\n\tmargin-bottom: 15px;\n}\n\n.information {\n\tfont-size: 14pt;\n\ttext-align: left;\n}\n\n.page-footer {\n\tmargin-top: 55px;\n\tbackground: #FCC02F;\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq-page/faq-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row header justify-content-center\">\n\t\tFrequently Asked Questions (FAQ)\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row paragraph-header\">\n\t\t<div class=\"col\">\n\t\t\tWhat is a bumblebee and what is not?\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/200x200\" class=\"img-fluid\">\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-center name\">\n\t\t\t<p>Bumblebee</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center name\">\n\t\t\t<p>Yellow Jacket</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center name\">\n\t\t\t<p>Carpenter Bee</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center name\">\n\t\t\t<p>Honey Bee</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col information\">\n\t\t\t<p>Information about bumblebees</p>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row paragraph-header\">\n\t\t<div class=\"col\">\n\t\t\tWhat species of bumblebees are in Massachusetts?\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t</div>\n\t<div class=\"row justify-content-center\">\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus affinis</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus bimaculatus</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus borealis</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus fervidus</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus griseocollis</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus impatiens</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus pensylvanicus</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus perplexus</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus ternarius</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t\t<img src=\"http://via.placeholder.com/150x150\" class=\"img-fluid\">\n\t\t</div>\n\t\t<div class=\"col justify-content-center picture\">\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus terricola</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t\t<p>Bombus vagans</p>\n\t\t</div>\n\t\t<div class=\"col justify-content-center latin-name\">\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row paragraph-header\">\n\t\t<div class=\"col\">\n\t\t\tHow do I use the mobile or web application?\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-left information\">\n\t\t\t<p>Check out our collection of comprehensive video guides located on the\n\t\t\t\t<a href=\"tutorial\">Tutorial</a> page in the Help section. There you can find a complete overview on how to use the mobile and web application\n\t\t\t\tas well as how to properly photograph a bee and record your submission.</p>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row paragraph-header\">\n\t\t<div class=\"col\">\n\t\t\tWhere can I download the mobile application?\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-left information\">\n\t\t\t<p>To download the application on your phone check our download page on the\n\t\t\t<a href=\"\">Google Play Store!</a> Click on the banner to go there now. </p>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row paragraph-header\">\n\t\t<div class=\"col\">\n\t\t\tOther resources (this can be moved to Help section)\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-left information\">\n\t\t\t<p>To learn more about the plants in your area check out\n\t\t\t\t<a href=\"https://gobotany.newenglandwild.org\">Go Botany</a>.</p>\n\t\t\t<p>For more information about X, check out\n\t\t\t\t<a href=\"\">Y website</a>.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row paragraph-header\">\n\t\t<div class=\"col\">\n\t\t\tMore questions?\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col justify-content-left information\">\n\t\t\t<p>Email us at\n\t\t\t\t<a href=\"\">samplebeecologyemail@wpi.edu</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/faq-page/faq-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqPageComponent = (function () {
    function FaqPageComponent() {
    }
    FaqPageComponent.prototype.ngOnInit = function () {
    };
    FaqPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq-page',
            template: __webpack_require__("../../../../../src/app/faq-page/faq-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faq-page/faq-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqPageComponent);
    return FaqPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n\tbackground: #757575;\n}\n\n.footer-content {\n\twidth: 100%;\n\tpadding: 3%;\n}\n\n.brand {\n\tleft: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid\">\n\t<div class=\"row footer-content\">\n\t\t<div class=\"brand\">\n\t\t\t<h1> footer here</h1>\n\t\t</div>\n\n\t\t<p> best footer in the world</p>\n\t</div>\n\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/front-page/front-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n\tmin-height: 100vh;\n\twidth: 100%;\n\tbackground: #7c009e;\n\toverflow: hidden;\n}\n\n.main>.row {\n\theight: 100%;\n}\n\n.front {\n\twidth: 80%;\n\theight: 100%;\n\tpadding-top: 30vh;\n\tpadding-left: 100px;\n\tpadding-bottom: 20vh;\n}\n\n.front-header {\n\tfont-family: 'Nunito', sans-serif;\n\tpadding-bottom: 2rem;\n\tcolor: white;\n\tfont-weight: 800;\n\tfont-size: 70px;\n}\n\n.front-header>.brand {\n\tcolor: #ffc107;\n}\n\n.front-text {\n\tfont-weight: 500;\n\tfont-size: 20px;\n\tpadding-bottom: 3rem;\n\tcolor: white;\n}\n\n.front-button {\n\tpadding: 1em 2em;\n\tborder: 2px solid white;\n\tbox-shadow: none;\n\tcolor: white;\n\tborder-radius: 50px;\n\tbackground: transparent;\n\tfont-size: 15px;\n\tfont-weight: 700;\n\tfont-family: 'Nunito', sans-serif;\n}\n\n.front-button:hover {\n\tbackground: white;\n\tcolor: black;\n}\n\n/*\n@media only screen and (max-width: 1000px) {\n\t.front {\n\t\twidth: 100%;\n\t}\n\t.tiles-container {\n\t\tmin-width: 100%;\n\t}\n\t.tile {\n\t\tmax-width: calc(100%/3);\n\t\tfloat: left;\n\t}\n}\n*/\n\n@media only screen and (max-width: 700px) {\n\t.front {\n\t\twidth: 100%;\n\t}\n\t.tiles-container {\n\t\tmin-width: 100%;\n\t}\n\t.tile {\n\t\tmax-width: 100%;\n\t\tfloat: none;\n\t}\n}\n\n.tiles-container {\n\twidth: 20%;\n\tmin-height: 100vh;\n}\n\n.tile {\n\twidth: 100%;\n\theight: calc(100%/3);\n\tpadding: 0 40px;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-ms-flex-align: center;\n\t    align-items: center;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tcolor: white;\n\t-webkit-box-align: center;\n}\n\n/* different backgrounds for tiles */\n\n.tile.android-tile {\n\tbackground: #df6cff;\n}\n\n.tile.webapp-tile {\n\tbackground: #d643ff;\n}\n\n.tile.visual-tile {\n\tbackground: #cd19ff;\n}\n\n.tile-icon {\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.tile-icon>.material-icons {\n\tfont-size: 50px;\n}\n\n.tile-header {\n\twidth: 100%;\n\ttext-align: center;\n\tfont-family: 'Nunito', sans-serif;\n\tfont-size: 15px;\n\tfont-weight: 700;\n\tpadding-top: 5%;\n}\n\n.tile-text {\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 15px;\n\tfont-weight: 400;\n\tpadding-top: 5%;\n\tpadding-bottom: 10%;\n}\n\n.intro-title {\n\tfont-weight: 300;\n\tfont-size: 2em;\n\tmargin-top: 50px;\n\tmargin-bottom: 50px;\n}\n\n.intro-paragraph {\n\tmargin-bottom: 30px;\n\tline-height: 1.8em;\n\tfont-weight: 300;\n}\n\n.slide-text {\n\tfont-size: 2em;\n\tfont-weight: 200;\n\ttext-align: center;\n}\n\n.badge {\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n\n.custom-button {\n\theight: 60px;\n\twidth: 200px;\n\tborder: 1px solid #3147AD;\n}\n\n.banner-section {\n\tbackground: #BDBDBD;\n\tmargin-top: 55px;\n\tmargin-left: 0;\n\tmargin-right: 0;\n\twidth: 100%;\n\theight: 750px;\n\t/* might have to change this later */\n\tmax-height: 850px;\n}\n\n.slide-picture {\n\tpadding: 10px;\n\t/* centering vertically */\n}\n\n.slide-video {\n\theight: 300px;\n\tpadding: 10px;\n\t/* centering vertically */\n}\n\n.product-section {\n\tmargin-top: 7%;\n\tmargin-bottom: 50px;\n}\n\n.product-section-title {\n\tfont-size: 2em;\n\ttext-align: center;\n\tfont-weight: 300;\n\tmargin: 50px 0;\n}\n\n.product-paragraph {\n\tmargin-top: 20px;\n\tmargin-bottom: 100px;\n\tline-height: 1.8em;\n\tfont-weight: 300;\n}\n\n.product-title {\n\tfont-size: 1.5em;\n\tmargin-top: 25px;\n\tfont-weight: 300;\n}\n\n.product-image {\n\theight: 100px;\n}\n\n.carousel-control-prev {\n\twidth: 10%;\n}\n\n.carousel-control-next {\n\twidth: 10%;\n}\n\n@media (max-width: 767.99px) {\n\t.download-section {\n\t\theight: 95vh;\n\t}\n\t.download-now {\n\t\tfont-size: 1.6em;\n\t\ttext-align: center;\n\t}\n}\n\n.material-icons {\n\tfont-size: 36px;\n\t/* font-awesome icon sizing */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/front-page/front-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\t<div class=\"row\">\n\t\t<div class=\"front\">\n\t\t\t<div class=\"front-header row\">\n\t\t\t\tWE ARE&nbsp;<span class=\"brand\">BEECOLOGY</span>\n\t\t\t</div>\n\t\t\t<div class=\"front-text row\">\n\t\t\t\tProtecting our native pollinators through the power of citizen science.\n\t\t\t</div>\n\t\t\t<button class=\"front-button row\">\n\t\t\t\tLEARN MORE\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"tiles-container\">\n\t\t\t<div class=\"tile android-tile\">\n\t\t\t\t<div class=\"tile-icon\">\n\t\t\t\t\t<i class=\"material-icons\">android</i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tile-header\">\n\t\t\t\t\tANDROID APP\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tile-text\">\n\t\t\t\t\tLog bees using your Android device.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tile webapp-tile\">\n\t\t\t\t<div class=\"tile-icon\">\n\t\t\t\t\t<i class=\"material-icons\">language</i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tile-header\">\n\t\t\t\t\tWEB APP\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tile-text\">\n\t\t\t\t\tLog bees in your browser.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tile visual-tile\">\n\t\t\t\t<div class=\"tile-icon\">\n\t\t\t\t\t<i class=\"material-icons\">insert_chart</i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tile-header\">\n\t\t\t\t\tVISUALIZATION\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tile-text\">\n\t\t\t\t\tView collected data.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div id=\"mainSlides\" class=\"carousel slide\" data-ride=\"carousel\">\n\t<ol class=\"carousel-indicators\">\n\t\t<li data-target=\"#mainSlides\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t<li data-target=\"#mainSlides\" data-slide-to=\"1\"></li>\n\t\t<li data-target=\"#mainSlides\" data-slide-to=\"2\"></li>\n\t\t<li data-target=\"#mainSlides\" data-slide-to=\"3\"></li>\n\t\t<li data-target=\"#mainSlides\" data-slide-to=\"4\"></li>\n\t\t<li data-target=\"#mainSlides\" data-slide-to=\"5\"></li>\n\t</ol>\n\n\t<div class=\"carousel-inner\">\n\t\t<div class=\"carousel-item active\">\n\t\t\t<div class=\"row banner-section justify-content-center\">\n\t\t\t\t<div class=\"col-6 align-self-center\">\n\t\t\t\t\t<img src=\"assets/phone-screenshot.png\" alt=\"phone-screenshot\" class=\"img-fluid slide-picture\">\n\t\t\t\t\t<!-- scaling -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 align-self-center justify-content-center\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<div class=\"slide-text\">Download now.</div>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<img src=\"assets/google-play-badge.png\" alt=\"google-play-badge\" class=\"img-fluid\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"carousel-item\">\n\t\t\t<div class=\"row banner-section justify-content-center\">\n\t\t\t\t<div class=\"col-6 align-self-center\">\n\t\t\t\t\t<img src=\"assets/mainPageSlides-visual.svg\" alt=\"visual-slide\" class=\"img-fluid slide-picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 align-self-center justify-content-center\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<div class=\"slide-text\">\n\t\t\t\t\t\t\t<p>Support bumblebee conservation in Massachusetts.</p>\n\t\t\t\t\t\t\t<p>Donate here.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"carousel-item\">\n\t\t\t<div class=\"row banner-section justify-content-center\">\n\t\t\t\t<div class=\"col-6 align-self-center\">\n\t\t\t\t\t<img src=\"assets/mainPageSlides-apps.svg\" alt=\"apps-slide\" class=\"img-fluid slide-picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 align-self-center justify-content-center\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<div class=\"slide-text\">\n\t\t\t\t\t\t\t<p>Want to enjoy the great outdoors?</p>\n\t\t\t\t\t\t\t<p>Collect field data on bumblebees using our iPhone and Android apps!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"carousel-item\">\n\t\t\t<div class=\"row banner-section justify-content-center\">\n\t\t\t\t<div class=\"col-3 align-self-center justify-content-center\">\n\t\t\t\t\t<iframe class=\"slide-video\" width=\"100%\" src=\"https://www.youtube.com/embed/q4jMZdFfgm8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n\t\t\t\t\t allowfullscreen></iframe>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-3 align-self-center justify-content-center\">\n\t\t\t\t\t<iframe class=\"slide-video\" width=\"100%\" src=\"https://www.youtube.com/embed/0ebYlGa3Mm8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n\t\t\t\t\t allowfullscreen></iframe>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 align-self-center justify-content-center\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<div class=\"slide-text\">\n\t\t\t\t\t\t\t<p>Watch tutorial videos to become an expert Beecologist!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"carousel-item\">\n\t\t\t<div class=\"row banner-section justify-content-center\">\n\t\t\t\t<div class=\"col-6 align-self-center\">\n\t\t\t\t\t<img src=\"assets/mainPageSlides-data.svg\" alt=\"data-slide\" class=\"img-fluid slide-picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 align-self-center justify-content-center\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<div class=\"slide-text\">\n\t\t\t\t\t\t\t<p>See the power of citizen science with our database visualization tools.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"carousel-item\">\n\t\t\t<div class=\"row banner-section justify-content-center\">\n\t\t\t\t<div class=\"col-6 align-self-center\">\n\t\t\t\t\t<img src=\"http://via.placeholder.com/500x300\" alt=\"profile-slide\" class=\"img-fluid slide-picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 align-self-center justify-content-center\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<div class=\"slide-text\">\n\t\t\t\t\t\t\t<p>Track Your Journey as a Beecologist</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<a class=\"carousel-control-prev\" href=\"#mainSlides\" data-slide=\"prev\">\n\t\t<i class=\"material-icons\">keyboard_arrow_left</i>\n\t</a>\n\t<a class=\"carousel-control-next\" href=\"#mainSlides\" data-slide=\"next\">\n\t\t<i class=\"material-icons\">keyboard_arrow_right</i>\n\t</a>\n\n</div>\n\n<div class=\"container\">\n\t<div class=\"intro-title\">\n\t\tWho are we?\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 col-md-push-6 intro-paragraph-container\">\n\n\t\t\t<div class=\"intro-paragraph\">\n\t\t\t\t<p>Welcome to the Bee-cology Project! Our goal is to help discover the underlying reason behind the rapid decline of certain\n\t\t\t\t\tpollinators, specifically bumblebees. </p>\n\t\t\t\t<p>We are taking a closer look at bee populations in Massachusetts, but in order to do this we need an accurate picture\n\t\t\t\t\tof bumblebee species in the state. </p>\n\t\t\t\t<p>That is where you can help out.Your own data can make a difference in solving the problem of bumblebee species diversity\n\t\t\t\t\tdecline, so get started today!</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-5 offset-md-1 align-self-center col-md-pull-6\">\n\t\t\t<img src=\"http://via.placeholder.com/500x300\" class=\"img-fluid\">\n\t\t</div>\n\t</div>\n</div>\n\n\n<div class=\"container product-section\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4 text-center\">\n\t\t\t<img src=\"assets/contribution.png\" alt=\"contribution\" class=\"img-fluid product-image\">\n\t\t\t<div class=\"product-title\">Contribution</div>\n\t\t\t<div class=\"product-paragraph\">Submit logs through our Android app or web app</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-4 text-center\">\n\t\t\t<img src=\"assets/visualization.svg\" alt=\"visualization\" class=\"img-fluid product-image\">\n\t\t\t<div class=\"product-title\">Visualization</div>\n\t\t\t<div class=\"product-paragraph\">See how data is being used for conservation efforts</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-4 text-center\">\n\t\t\t<img src=\"assets/simulation.svg\" alt=\"simulation\" class=\"img-fluid product-image\">\n\t\t\t<div class=\"product-title\">Simulation</div>\n\t\t\t<div class=\"product-paragraph\">Simulate environmental effects in a virtual bee world</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/front-page/front-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontPageComponent = (function () {
    function FrontPageComponent() {
    }
    FrontPageComponent.prototype.ngOnInit = function () {
    };
    FrontPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-front-page',
            template: __webpack_require__("../../../../../src/app/front-page/front-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/front-page/front-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrontPageComponent);
    return FrontPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help-page/help-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n\tbackground: #FCC02F;\n\tmargin-top: 55px;\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n\tfont-size: 48pt;\n\tmargin-bottom: 55px;\n}\n\n.paragraph-header {\n\tmargin-top: 55px;\n\tfont-size: 36pt;\n}\n\n.information {\n\tfont-size: 12pt;\n\ttext-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help-page/help-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row header justify-content-center\">\n\t\tLinks\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row information justify-content-center\">\n\t\t<a href=\"tutorial\">Tutorial Page</a>\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<div class=\"row information justify-content-center\">\n\t\t<a href=\"faq\">FAQ Page</a>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/help-page/help-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpPageComponent = (function () {
    function HelpPageComponent() {
    }
    HelpPageComponent.prototype.ngOnInit = function () {
    };
    HelpPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-help-page',
            template: __webpack_require__("../../../../../src/app/help-page/help-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help-page/help-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpPageComponent);
    return HelpPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-item {\n\tmargin-right: 25px;\n\tfont-weight: 600;\n}\n\n.navbar-toggler {\n\tpadding-left: 6px;\n\tmargin-right: 20%;\n}\n\n@media only screen and (max-width: 600px) {\n\t.navbar-toggler {\n\t\tmargin-right: 5%;\n\t}\n\t.nav-app {\n\t\tfont-weight: 500;\n\t\tposition: absolute;\n\t\tright: 5%;\n\t}\n}\n\n.navbar-collapse.show {\n\tmin-height: 100vh;\n\tmargin-top: 25px;\n\tmargin-left: 30px;\n}\n\n.navbar-brand {\n\tmargin-left: 30px;\n\tfont-weight: 900;\n\tfont-family: 'Nunito', sans-serif;\n}\n\n.navbar-brand>.icon {\n\theight: 1.7em;\n\tmargin-right: 10px;\n\tvertical-align: middle;\n}\n\n.navbar-brand>.text {\n\tvertical-align: middle;\n}\n\n.navbar {\n\tbackground: white;\n\tbox-shadow: 0px 0px 10px 0 #00000033;\n\tpadding-top: 25px;\n\tpadding-bottom: 25px;\n}\n\n.navbar.trans {\n\tbackground: #00000000;\n\tbox-shadow: none;\n\tcolor: white;\n}\n\n.navbar.trans .nav-link {\n\tcolor: white;\n}\n\n.navbar.trans .navbar-brand * {\n\tcolor: white\n}\n\n.navbar.trans .nav-app {\n\tbackground: transparent;\n\tcolor: transparent;\n\tborder: none;\n\tbox-shadow: none;\n}\n\n.navbar.trans .app-link {\n\tcolor: transparent;\n}\n\n.navbar.trans .navbar-toggler {\n\tcolor: white;\n}\n\n.navbar-nav {\n\tmargin-right: 23%;\n}\n\n.nav-app {\n\tfont-weight: 500;\n\tposition: absolute;\n\tright: 5%;\n}\n\n.nav-link.active {\n\tcolor: #ffc107 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar trans navbar-expand-md navbar-light bg-faded fixed-top\">\n\n\t<a class=\"navbar-brand\" routerLink=\"home\">\n\t\t<img src=\"assets/icon/favicon.png\" class=\"img-fluid icon\">\n\t\t<span class=\"text\"> BEECOLOGY </span>\n\t</a>\n\t<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"toggleState()\">\n\t\t<i class=\"material-icons\">menu</i>\n\t</button>\n\t<div class=\"nav-app\">\n\t\t<a class=\"app-link\" routerLink=\"app\" routerLinkActive=\"active\" (click)=\"toggleState()\">APP</a>\n\t</div>\n\t<div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navShow }\" id=\"navbarNav\">\n\t\t<ul class=\"navbar-nav ml-auto\">\n\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link trans\" routerLink=\"home\" routerLinkActive=\"active\" (click)=\"toggleState()\">HOME</a>\n\t\t\t</li>\n\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link trans\" routerLink=\"tools\" routerLinkActive=\"active\" (click)=\"toggleState()\">PARTICIPATE</a>\n\t\t\t</li>\n\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link trans\" routerLink=\"about\" routerLinkActive=\"active\" (click)=\"toggleState()\">ABOUT</a>\n\t\t\t</li>\n\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link trans\" routerLink=\"help\" routerLinkActive=\"active\" (click)=\"toggleState()\">HELP</a>\n\t\t\t</li>\n\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link trans\" routerLink=\"contact\" routerLinkActive=\"active\" (click)=\"toggleState()\">CONTACT</a>\n\t\t\t</li>\n\n\t\t</ul>\n\n\t</div>\n\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent() {
        this.navShow = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(window).scroll(function () {
            var pathname = window.location.pathname;
            if (pathname == '/home') {
                if (__WEBPACK_IMPORTED_MODULE_1_jquery__(window).scrollTop() >= 50) {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar').removeClass('trans');
                    __WEBPACK_IMPORTED_MODULE_1_jquery__('.nav-link').removeClass('trans');
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar').addClass('trans');
                    __WEBPACK_IMPORTED_MODULE_1_jquery__('.nav-link').addClass('trans');
                }
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar').removeClass('trans');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.nav-link').removeClass('trans');
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar').hover(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.trans').addClass('hovering');
            __WEBPACK_IMPORTED_MODULE_1_jquery__(this).removeClass('trans');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.nav-link').removeClass('trans');
        }, function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.hovering').addClass('trans');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.hovering').removeClass('hovering');
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar-collapse').on('hidden.bs.collapse', function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar').removeClass('trans');
            console.log('shown');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.nav-link').removeClass('trans');
        });
    };
    /*
    hashChange() {
        $(window).on('hashchange', function () {
            var pathname = window.location.pathname;
            if (pathname == '/home') {
                $('.navbar').addClass('trans');
                $('.nav-link').addClass('trans');
            }
            else {
                $('.navbar').removeClass('trans');
                $('.nav-link').removeClass('trans');
            }
        });
    }
    

    noScroll() {
        $(':host').toggleClass('.no-scroll');
    } */
    NavComponent.prototype.toggleState = function (sidenav) {
        console.log('hi');
        this.navShow = !this.navShow;
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar').removeClass('trans');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.nav-link').removeClass('trans');
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools-page/tools-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* page banner (header, subheader) */\n\n.banner {\n\twidth: 100%;\n\toverflow: hidden;\n\tz-index: 0;\n\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/backdrops/claudel-rheault-28605-unsplash.jpg") + ");\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n}\n\n.header {\n\tmargin-top: 55px;\n\tfont-size: 3em;\n\tpadding-top: 4rem;\n\tpadding-bottom: 12rem;\n}\n\n.subheader {\n\tfont-size: 2em;\n\tpadding-bottom: 6em;\n}\n\n/* page content - main card */\n\n.content {\n\twidth: 100%;\n\tmargin-top: -14em;\n\t-ms-flex-item-align: center;\n\t    -ms-grid-row-align: center;\n\t    align-self: center;\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n}\n\n.container {\n\tmargin-top: 3%;\n\tbox-shadow: 0 0 10px 0 #00000033, 1px 2px 5px 0 #00000043;\n\tborder-radius: 3px;\n\tbackground: white;\n\tmargin-bottom: 0px;\n}\n\n@media screen and ( max-width: 600px) {\n\t.content {\n\t\tpadding-left: 20px;\n\t\tpadding-right: 20px;\n\t}\n}\n\n.container-start {\n\tmargin-top: 5%;\n}\n\n.container-end {\n\tmargin-bottom: 5%;\n}\n\n.section-header {\n\tbackground: none;\n\tpadding-top: 5%;\n\tpadding-bottom: 1%;\n\tpadding-left: 20%;\n\tpadding-right: 20%;\n\tbox-shadow: none;\n\t/* 0 0 10px 0 #00000033, 3px 0px 5px 0 #00000025; */\n}\n\n.section-header>h2 {\n\tfont-weight: 400;\n}\n\n.icon {\n\tposition: absolute;\n\tmargin-left: -8%;\n}\n\n.information {\n\tfont-size: 16px;\n\ttext-align: left;\n\tpadding-top: 2%;\n\tpadding-left: 20%;\n\tpadding-right: 20%;\n}\n\n.picture-row {\n\tpadding: 2%;\n\tpadding-left: 20%;\n\tpadding-right: 20%;\n\tpadding-bottom: 5%;\n}\n\n.picture {\n\tmargin-right: 5%;\n\tpadding-right: 10px;\n\tmargin-bottom: 1em;\n}\n\n.button {\n\tpadding-left: 20%;\n\tpadding-bottom: 5%;\n}\n\n.link-button {\n\tbackground: #ffc107;\n\tborder: none;\n\tpadding-left: 1em;\n\tpadding-right: 1em;\n\tpadding-top: .3em;\n\tpadding-bottom: .3em;\n\tmargin-bottom: 1em;\n\tmargin-right: 20%;\n\ttext-align: center;\n\tfont-size: 20px;\n\tborder-radius: 3px;\n\tbox-shadow: 0 0 10px 0 #00000033, 1px 2px 5px 0 #00000043;\n\tfont-weight: 400;\n\tcolor: black;\n}\n\n.material-icons {\n\tdisplay: inline;\n\tvertical-align: middle;\n\tpadding-left: 0;\n\tmargin-left: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools-page/tools-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n\t<div class=\"row header justify-content-center\">Participate</div>\n</div>\n\n<div class=\"content\">\n\n\t<div class=\"container container-start justify-content-center\">\n\t\t<div class=\"row section-header\">\n\t\t\t<h2>Android Application</h2>\n\t\t</div>\n\t\t<div class=\"row information\">\n\t\t\t<p>Some text about Android application.</p>\n\t\t\t<p>It is an app for Android that allows you log bees.</p>\n\t\t</div>\n\t\t<div class=\"row picture-row\">\n\t\t\t<img src=\"http://via.placeholder.com/200x300\" class=\"image-fluid picture\" alt=\"android-image\">\n\t\t\t<img src=\"http://via.placeholder.com/200x300\" class=\"image-fluid picture\" alt=\"android-image\">\n\t\t</div>\n\t\t<div class=\"row button\">\n\t\t\t<button class=\"link-button\"><i class=\"material-icons\">get_app</i> Download Android App</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container\">\n\t\t<div class=\"row section-header\">\n\t\t\t<h2>Web Application</h2>\n\t\t</div>\n\t\t<div class=\"row information\">\n\t\t\t<p>Some text about web application.</p>\n\t\t\t<p>Log bees using your web browser; compatible with all platforms.</p>\n\t\t</div>\n\t\t<div class=\"row picture-row\">\n\t\t\t<img src=\"http://via.placeholder.com/200x300\" class=\"image-fluid picture\" alt=\"android-image\">\n\t\t\t<img src=\"http://via.placeholder.com/200x300\" class=\"image-fluid picture\" alt=\"android-image\">\n\t\t</div>\n\t\t<div class=\"row button\">\n\t\t\t<button class=\"link-button\"><i class=\"material-icons\">exit_to_app</i> Go to Web App</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container container-end\">\n\t\t<div class=\"row section-header\">\n\t\t\t<h2>Data Visualization</h2>\n\t\t</div>\n\t\t<div class=\"row information\">\n\t\t\t<p>Some text about data visualization</p>\n\t\t\t<p>View where our apps have been used to log bees.</p>\n\t\t</div>\n\t\t<div class=\"row picture-row\">\n\t\t\t<img src=\"http://via.placeholder.com/200x300\" class=\"image-fluid picture\" alt=\"android-image\">\n\t\t\t<img src=\"http://via.placeholder.com/200x300\" class=\"image-fluid picture\" alt=\"android-image\">\n\t\t</div>\n\t\t<div class=\"row button\">\n\t\t\t<button class=\"link-button\"><i class=\"material-icons\">data_usage</i> View the Data</button>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/tools-page/tools-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolsPageComponent = (function () {
    function ToolsPageComponent() {
    }
    ToolsPageComponent.prototype.ngOnInit = function () {
    };
    ToolsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tools-page',
            template: __webpack_require__("../../../../../src/app/tools-page/tools-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools-page/tools-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolsPageComponent);
    return ToolsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tutorial-page/tutorial-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-footer {\n\tbackground: #FCC02F;\n\tpadding-bottom: 50px;\n}\n\n/* new css */\n\n/* page banner (header, subheader) */\n\n.banner {\n\twidth: 100%;\n\toverflow: hidden;\n\tz-index: 0;\n\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/backdrops/claudel-rheault-28605-unsplash.jpg") + ");\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n}\n\n.header {\n\tmargin-top: 55px;\n\tfont-size: 3em;\n\tpadding-top: 1em;\n}\n\n.subheader {\n\tfont-size: 2em;\n\tpadding-bottom: 6em;\n}\n\n/* page content - main cards */\n\n.content {\n\twidth: 100%;\n\tmargin-top: -14em;\n\t-ms-flex-item-align: center;\n\t    -ms-grid-row-align: center;\n\t    align-self: center;\n}\n\n.container {\n\tmargin-top: 3%;\n\tbox-shadow: 0 0 10px 0 #00000033, 1px 2px 5px 0 #00000043;\n\tborder-radius: 3px;\n\tbackground: white;\n\tmargin-bottom: 0px;\n}\n\n.container-start {\n\tmargin-top: 5%;\n}\n\n.container-end {\n\tmargin-bottom: 5%;\n}\n\n.section-header {\n\tbackground: none;\n\tpadding-top: 5%;\n\tpadding-bottom: 1%;\n\tpadding-left: 5%;\n\tpadding-right: 5%;\n\tbox-shadow: none;\n\t/* 0 0 10px 0 #00000033, 3px 0px 5px 0 #00000025; */\n}\n\n.section-header>h2 {\n\tfont-weight: 400;\n}\n\n.icon {\n\tposition: absolute;\n\tmargin-left: -8%;\n}\n\n.information {\n\tfont-size: 16px;\n\ttext-align: left;\n\tpadding-top: 2%;\n\tpadding-left: 20%;\n\tpadding-right: 20%;\n}\n\n.picture-row {\n\tpadding: 2%;\n\tpadding-left: 5%;\n\tpadding-right: 5%;\n\tpadding-bottom: 5%;\n}\n\n.picture {\n\tmargin-right: 5%;\n\tpadding-right: 10px;\n}\n\n.button {\n\tpadding-left: 20%;\n\tpadding-bottom: 5%;\n}\n\n.link-button {\n\tbackground: #ffc107;\n\tborder: none;\n\tpadding-left: 1em;\n\tpadding-right: 1em;\n\tpadding-top: .3em;\n\tpadding-bottom: .3em;\n\ttext-align: center;\n\tfont-size: 22px;\n\tborder-radius: 3px;\n\tbox-shadow: 0 0 10px 0 #00000033, 1px 2px 5px 0 #00000043;\n\tfont-weight: 400;\n\tcolor: black;\n}\n\n.material-icons {\n\tdisplay: inline;\n\tvertical-align: middle;\n\tpadding-left: 0;\n\tmargin-left: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tutorial-page/tutorial-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n\t<div class=\"row header justify-content-center\">Tutorial</div>\n\t<div class=\"row subheader justify-content-center\">About conservation</div>\n</div>\n\n<div class=\"content\">\n\n\t<div class=\"container\">\n\t\t<div class=\"row section-header\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<h2>How To ID and Photo a Bumblebee</h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row picture-row\">\n\t\t\t<div class=\"col-md-5 col-md-push-5 justify-content-left\">\n\t\t\t\t<iframe src=\"https://www.youtube.com/embed/q4jMZdFfgm8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 col-md-pull-6 justify-content-left\">\n\t\t\t\t<p>This video will:</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Teach you how to take a good video of a bumblebee</li>\n\t\t\t\t\t<li>Show you the key features for bee ID</li>\n\t\t\t\t\t<li>Help you snap the perfect screenshot</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>For written instructions click\n\t\t\t\t\t<a href=\"\">here!</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container\">\n\t\t<div class=\"row section-header\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<h2>Using the Beecology Android App</h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row picture-row\">\n\t\t\t<div class=\"col-md-5 col-md-push-5 justify-content-left\">\n\t\t\t\t<iframe src=\"https://www.youtube.com/embed/0ebYlGa3Mm8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 col-md-pull-6 justify-content-left\">\n\t\t\t\t<p>This video will:</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Show you how to download our Beecology Android App</li>\n\t\t\t\t\t<li>Tell you about the in-app features</li>\n\t\t\t\t\t<li>Give you tips and tricks to make the Android bee entry process a breeze</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>Written instructions can be found on our\n\t\t\t\t\t<a href=\"\">Android App!</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container\">\n\t\t<div class=\"row section-header\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<h2>Using the Website Bee Entry Tool</h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row picture-row\">\n\t\t\t<div class=\"col-md-5 col-md-push-5 justify-content-left\">\n\t\t\t\t<a href=\"https://placeholder.com\">\n\t\t\t\t\t<img src=\"http://via.placeholder.com/500x300\" class=\"img-fluid\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 col-md-pull-6 justify-content-left\">\n\t\t\t\t<p>This video will:</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Tell you about our web based bee entry tool</li>\n\t\t\t\t\t<li>Walk you through the bee entry process</li>\n\t\t\t\t\t<li>Give you tips and tricks to make the web bee entry process a breeze</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>For written instructions click\n\t\t\t\t\t<a href=\"\">here!</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n<div class=\"container-fluid\">\n\t<div class=\"row page-footer justify-content-center\">\n\t\t<div class=\"information\">\n\t\t\t<p>Did you find these videos helpful? Have a burning question still unanswered?</p>\n\t\t\t<p>Contact us at\n\t\t\t\t<a href=\"\">samplebeecologyemail@wpi.edu</a>\n\t\t\t</p>\n\t\t\t<p>Or check out our\n\t\t\t\t<a href=\"\">Facebook page</a>\n\t\t\t</p>\n\t\t\t<p>Thanks for the feedback!</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tutorial-page/tutorial-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialPageComponent = (function () {
    function TutorialPageComponent() {
    }
    TutorialPageComponent.prototype.ngOnInit = function () {
    };
    TutorialPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tutorial-page',
            template: __webpack_require__("../../../../../src/app/tutorial-page/tutorial-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tutorial-page/tutorial-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialPageComponent);
    return TutorialPageComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/about-banner-blur.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "about-banner-blur.a357c81a0fe6e01f362b.jpg";

/***/ }),

/***/ "../../../../../src/assets/backdrops/claudel-rheault-28605-unsplash.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "claudel-rheault-28605-unsplash.f695c6adefcbec281746.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map