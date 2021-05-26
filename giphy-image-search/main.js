(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/T4s":
/*!*************************************************!*\
  !*** ./src/app/shared/image/image.component.ts ***!
  \*************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_favorite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/favorite.service */ "kUbd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { favorited: a0 }; };
class ImageComponent {
    constructor(favoriteService) {
        this.favoriteService = favoriteService;
        this.loaded = false;
        this.favorited = false;
        this.favoriteService.store.subscribe((state) => {
            const { items } = state;
            this.giphyGifObjects = items;
        });
    }
    ngOnInit() {
        this.giphyGifObjects = this.favoriteService.state.items;
        this.favorited = this.giphyGifObjects.some((element) => element.id === this.giphyGifObject.id);
    }
    saveFavorite() {
        this.favoriteService.save(this.giphyGifObject);
        this.favorited = !this.favorited;
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_favorite_service__WEBPACK_IMPORTED_MODULE_1__["FavoriteService"])); };
ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], inputs: { giphyGifObject: "giphyGifObject" }, decls: 7, vars: 5, consts: [[1, "img-container", 3, "click"], [3, "srcset"], ["width", "100%", "height", "200", "alt", "giphy object", 1, "gallery-img", 3, "src"], [1, "overlay"], [3, "ngClass"], [1, "heart"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageComponent_Template_div_click_0_listener() { return ctx.saveFavorite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcset", ctx.giphyGifObject == null ? null : ctx.giphyGifObject.images == null ? null : ctx.giphyGifObject.images.fixed_height == null ? null : ctx.giphyGifObject.images.fixed_height.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.giphyGifObject == null ? null : ctx.giphyGifObject.images == null ? null : ctx.giphyGifObject.images.fixed_height == null ? null : ctx.giphyGifObject.images.fixed_height.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.favorited));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".img-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 16px;\n  min-height: 50px;\n  background: #dfe1e5;\n  border-radius: 5px;\n}\n.img-container[_ngcontent-%COMP%]   .gallery-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: url(\"https://media.giphy.com/media/hWZBZjMMuMl7sWe0x8/giphy.gif\");\n  background-size: cover;\n  object-fit: cover;\n  border-radius: 5px;\n  display: block;\n  border: 1px solid #dfe1e5;\n}\n.img-container[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0);\n  transition: background 0.5s ease;\n  border-radius: 5px;\n}\n.img-container[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%] {\n  background: url(\"/assets/img/heart.svg\");\n  display: block;\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n}\n.img-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.img-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n}\n.img-container[_ngcontent-%COMP%]:hover   .heart[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.img-container[_ngcontent-%COMP%]   .favorited[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%], .img-container[_ngcontent-%COMP%]   .favorited[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]:after, .img-container[_ngcontent-%COMP%]   .favorited[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]:before {\n  background: url(\"/assets/img/heart-favorited.svg\");\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZFQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0FBRko7QUFHSTtFQUNFLDhCQUFBO0FBRE47QUFJSTtFQUNFLFVBQUE7QUFGTjtBQU1FOzs7RUFHRSxrREFBQTtFQUNBLFVBQUE7QUFKSiIsImZpbGUiOiJpbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZGZlMWU1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgLmdhbGxlcnktaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvaFdaQlpqTU11TWw3c1dlMHg4L2dpcGh5LmdpZlwiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMWU1O1xuICB9XG5cbiAgLm92ZXJsYXkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAuaGVhcnQge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2hlYXJ0LnN2Z1wiKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvdHRvbTogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB9XG5cbiAgICAuaGVhcnQge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAuZmF2b3JpdGVkIC5oZWFydCxcbiAgLmZhdm9yaXRlZCAuaGVhcnQ6YWZ0ZXIsXG4gIC5mYXZvcml0ZWQgLmhlYXJ0OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvaGVhcnQtZmF2b3JpdGVkLnN2Z1wiKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/july/Dev/test/giphy-search/src/main.ts */"zUnb");


/***/ }),

/***/ "1C3V":
/*!***********************************************************!*\
  !*** ./src/app/shared/image-list/image-list.component.ts ***!
  \***********************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/image.component */ "/T4s");



function ImageListComponent_div_0_ng_container_4_app_image_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 12);
} if (rf & 2) {
    const image_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObject", image_r11);
} }
function ImageListComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_0_ng_container_4_app_image_1_Template, 1, 1, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r12 % 4 === 0);
} }
function ImageListComponent_div_0_ng_container_6_app_image_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 12);
} if (rf & 2) {
    const image_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObject", image_r15);
} }
function ImageListComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_0_ng_container_6_app_image_1_Template, 1, 1, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r16 % 4 === 1);
} }
function ImageListComponent_div_0_ng_container_8_app_image_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 12);
} if (rf & 2) {
    const image_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObject", image_r19);
} }
function ImageListComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_0_ng_container_8_app_image_1_Template, 1, 1, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r20 % 4 === 2);
} }
function ImageListComponent_div_0_ng_container_10_app_image_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 12);
} if (rf & 2) {
    const image_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObject", image_r23);
} }
function ImageListComponent_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_0_ng_container_10_app_image_1_Template, 1, 1, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r24 % 4 === 3);
} }
function ImageListComponent_div_0_ng_container_14_app_image_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 12);
} if (rf & 2) {
    const image_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObject", image_r27);
} }
function ImageListComponent_div_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_0_ng_container_14_app_image_1_Template, 1, 1, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r28 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r28 % 3 === 0);
} }
function ImageListComponent_div_0_ng_container_16_app_image_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 12);
} if (rf & 2) {
    const image_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObject", image_r31);
} }
function ImageListComponent_div_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_0_ng_container_16_app_image_1_Template, 1, 1, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r32 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r32 % 3 === 1);
} }
function ImageListComponent_div_0_ng_container_18_app_image_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 12);
} if (rf & 2) {
    const image_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObject", image_r35);
} }
function ImageListComponent_div_0_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_0_ng_container_18_app_image_1_Template, 1, 1, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r36 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r36 % 3 === 2);
} }
function ImageListComponent_div_0_ng_container_22_app_image_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 12);
} if (rf & 2) {
    const image_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObject", image_r39);
} }
function ImageListComponent_div_0_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_0_ng_container_22_app_image_1_Template, 1, 1, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r40 % 2 === 0);
} }
function ImageListComponent_div_0_ng_container_24_app_image_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 12);
} if (rf & 2) {
    const image_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObject", image_r43);
} }
function ImageListComponent_div_0_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_0_ng_container_24_app_image_1_Template, 1, 1, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r44 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r44 % 2 === 1);
} }
function ImageListComponent_div_0_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const image_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObject", image_r47);
} }
function ImageListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageListComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImageListComponent_div_0_ng_container_6_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImageListComponent_div_0_ng_container_8_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ImageListComponent_div_0_ng_container_10_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ImageListComponent_div_0_ng_container_14_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ImageListComponent_div_0_ng_container_16_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ImageListComponent_div_0_ng_container_18_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ImageListComponent_div_0_ng_container_22_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ImageListComponent_div_0_ng_container_24_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ImageListComponent_div_0_ng_container_28_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.giphyGifObjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.giphyGifObjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.giphyGifObjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.giphyGifObjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.giphyGifObjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.giphyGifObjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.giphyGifObjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.giphyGifObjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.giphyGifObjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.giphyGifObjects);
} }
class ImageListComponent {
    constructor() {
        this.loaded = false;
    }
}
ImageListComponent.ɵfac = function ImageListComponent_Factory(t) { return new (t || ImageListComponent)(); };
ImageListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageListComponent, selectors: [["app-image-list"]], inputs: { giphyGifObjects: "giphyGifObjects" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "hidden", "visible-xl"], [1, "img-list"], [1, "list-col", "base-4"], [4, "ngFor", "ngForOf"], [1, "hidden", "visible-lg", "hidden-xl"], [1, "list-col", "base-3"], [1, "hidden", "visible-md", "hidden-lg"], [1, "list-col", "base-2"], [1, "hidden-md"], [1, "list-col"], [3, "giphyGifObject", 4, "ngIf"], [3, "giphyGifObject"]], template: function ImageListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageListComponent_div_0_Template, 29, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.giphyGifObjects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _image_image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"]], styles: [".img-list[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.img-list[_ngcontent-%COMP%]   .list-col[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.img-list[_ngcontent-%COMP%]   .list-col.base-4[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  flex: 1 1 25%;\n}\n.img-list[_ngcontent-%COMP%]   .list-col.base-3[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  flex: 1 1 33.3333%;\n}\n.img-list[_ngcontent-%COMP%]   .list-col.base-2[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  flex: 1 1 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFBSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBRU47QUFDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNOO0FBRUk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQUFOIiwiZmlsZSI6ImltYWdlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcblxuICAubGlzdC1jb2wge1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICYuYmFzZS00IHtcbiAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgZmxleDogMSAxIDI1JTtcbiAgICB9XG5cbiAgICAmLmJhc2UtMyB7XG4gICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgIGZsZXg6IDEgMSAzMy4zMzMzJTtcbiAgICB9XG5cbiAgICAmLmJhc2UtMiB7XG4gICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgIGZsZXg6IDEgMSA1MCU7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


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
    production: false,
    app: {
        requestLimit: 20
    },
    api: {
        url: 'https://api.giphy.com/v1/gifs/search',
        key: '84KN24DnBE3Ox7jB9P9gmL1LtZomSYRP'
    }
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
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/favorite.service */ "kUbd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AppComponent_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const store_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](store_r1.items.length);
} }
function AppComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_13_ng_container_1_Template, 3, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const store_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", store_r1.items.length > 0);
} }
class AppComponent {
    constructor(favoriteService) {
        this.favoriteService = favoriteService;
        this.title = "Giphy Searcher";
        this.totalFavorited$ = this.favoriteService.store.asObservable();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_favorite_service__WEBPACK_IMPORTED_MODULE_1__["FavoriteService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 3, consts: [["id", "header"], [1, "container"], [1, "nav-logo"], ["width", "200", "src", "/assets/img/logo.gif", "alt", "Giphy Searcher"], [1, "nav-links"], ["routerLink", "search", "routerLinkActive", "active"], ["src", "/assets/img/loupe.png", "width", "30", 1, "hidden-md"], [1, "hidden", "visible-md"], ["routerLink", "saved", "routerLinkActive", "active", 1, "link-favorite"], ["src", "/assets/img/heart.svg", "width", "30", 1, "hidden-md"], [4, "ngIf"], [1, "badge", 2, "margin-left", "4px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My Favorited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_ng_container_13_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 1, ctx.totalFavorited$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["#header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;\n}\n#header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .nav-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n@media screen and (max-width: 768px) {\n  #header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .nav-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n#header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 1;\n  justify-content: flex-end;\n}\n#header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-decoration: none;\n  color: #3d3d3d;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n#header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #e6f7ff;\n}\n#header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1890ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsK0NBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUVNO0VBQ0UsWUFBQTtBQUFSO0FBQ1E7RUFGRjtJQUdJLFlBQUE7RUFFUjtBQUNGO0FBRUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFBTjtBQUVNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFUTtFQUNFLHlCQUFBO0FBQVY7QUFHUTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQURWIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDBweCAxMHB4IDBweDtcblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLm5hdi1sb2dvIHtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2LWxpbmtzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgYSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICMzZDNkM2Q7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "TtEx":
/*!*******************************************************!*\
  !*** ./src/app/services/giphy-api-service.service.ts ***!
  \*******************************************************/
/*! exports provided: GiphyApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiphyApiService", function() { return GiphyApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class GiphyApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.url;
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('api_key', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.key);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    search(query, offset = 0, limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].app.requestLimit) {
        if (!query.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }
        return this.httpClient.get(this.URL, {
            params: this.params.set('q', query)
                .set('limit', `${limit}`)
                .set('offset', `${offset}`)
        });
    }
}
GiphyApiService.ɵfac = function GiphyApiService_Factory(t) { return new (t || GiphyApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
GiphyApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GiphyApiService, factory: GiphyApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "X3mS":
/*!******************************************************!*\
  !*** ./src/app/saved-image/saved-image.component.ts ***!
  \******************************************************/
/*! exports provided: SavedImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedImageComponent", function() { return SavedImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/favorite.service */ "kUbd");
/* harmony import */ var _shared_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/image-list/image-list.component */ "1C3V");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SavedImageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You have no favorited images. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SavedImageComponent {
    constructor(favoriteService) {
        this.favoriteService = favoriteService;
        //giphyGifObjects!: GiphyGifObject[];
        this.giphyGifObjects = this.favoriteService.store.getValue().items;
    }
}
SavedImageComponent.ɵfac = function SavedImageComponent_Factory(t) { return new (t || SavedImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_favorite_service__WEBPACK_IMPORTED_MODULE_1__["FavoriteService"])); };
SavedImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavedImageComponent, selectors: [["app-saved-image"]], decls: 4, vars: 2, consts: [[1, "container", 2, "padding-top", "30px"], ["id", "image-list"], [3, "giphyGifObjects"], ["class", "alert alert-info", 4, "ngIf"], [1, "alert", "alert-info"]], template: function SavedImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-image-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SavedImageComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("giphyGifObjects", ctx.giphyGifObjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.giphyGifObjects.length == 0);
    } }, directives: [_shared_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_2__["ImageListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlZC1pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/image/image.component */ "/T4s");
/* harmony import */ var _shared_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/image-list/image-list.component */ "1C3V");
/* harmony import */ var _saved_image_saved_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saved-image/saved-image.component */ "X3mS");
/* harmony import */ var _search_image_search_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-image/search-image.component */ "jAHR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_image_image_component__WEBPACK_IMPORTED_MODULE_4__["ImageComponent"],
        _shared_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__["ImageListComponent"],
        _saved_image_saved_image_component__WEBPACK_IMPORTED_MODULE_6__["SavedImageComponent"],
        _search_image_search_image_component__WEBPACK_IMPORTED_MODULE_7__["SearchImageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();


/***/ }),

/***/ "jAHR":
/*!********************************************************!*\
  !*** ./src/app/search-image/search-image.component.ts ***!
  \********************************************************/
/*! exports provided: SearchImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchImageComponent", function() { return SearchImageComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_giphy_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/giphy-api-service.service */ "TtEx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/image-list/image-list.component */ "1C3V");






function SearchImageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchImageComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchImageComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.loadMoreItems(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Show More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchImageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Oh no! An error occurred while querying the API. We apologise for the inconvenience. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchImageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SearchImageComponent {
    constructor(giphyApiService) {
        this.giphyApiService = giphyApiService;
        this.giphyGifObjects = [];
        this.query = '';
        this.hasMoreData = false;
        this.hasError = false;
        this.hasLoading = true;
        this.hasNotData = false;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.query = 'singapore';
    }
    ngOnInit() {
        this.searchTermsChangedSubscription = this.searchTerms
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((query) => {
            //reset all settings before calling search api
            this.hasLoading = true;
            this.hasMoreData = false;
            this.query = query;
            this.giphyGifObjects = [];
            return this.searchGiphy();
        })).subscribe((res) => {
            this.processResult(res);
        });
        //load initial
        this.callGiphySearchApi();
    }
    search(term) {
        this.searchTerms.next(term);
    }
    loadMoreItems() {
        if (this.pagination.total_count > this.pagination.offset) {
            this.callGiphySearchApi();
        }
    }
    callGiphySearchApi() {
        if (this.callGiphySearchApiChangedSubscription) {
            this.callGiphySearchApiChangedSubscription.unsubscribe();
        }
        this.callGiphySearchApiChangedSubscription = this.searchGiphy()
            .subscribe((res) => {
            this.processResult(res);
        }, () => {
            this.hasError = true;
        });
    }
    processResult(res) {
        this.hasNotData = res.data.length > 0 ? false : true;
        this.pagination = res.pagination;
        this.giphyGifObjects = [...this.giphyGifObjects, ...res.data];
        this.hasMoreData = this.pagination.total_count > this.pagination.offset;
    }
    searchGiphy() {
        return this.giphyApiService
            .search(this.query, this.giphyGifObjects.length)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.hasLoading = false;
        }));
    }
    ngOnDestroy() {
        if (this.searchTermsChangedSubscription) {
            this.searchTermsChangedSubscription.unsubscribe();
        }
        if (this.callGiphySearchApiChangedSubscription) {
            this.callGiphySearchApiChangedSubscription.unsubscribe();
        }
    }
}
SearchImageComponent.ɵfac = function SearchImageComponent_Factory(t) { return new (t || SearchImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_giphy_api_service_service__WEBPACK_IMPORTED_MODULE_3__["GiphyApiService"])); };
SearchImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchImageComponent, selectors: [["app-search-image"]], decls: 11, vars: 5, consts: [[1, "container", 2, "padding-bottom", "32px"], ["id", "search-bar"], ["id", "search-box", "placeholder", "Search GIFs...", 3, "input"], ["searchBox", ""], ["id", "search-result"], ["class", "alert alert-danger", 4, "ngIf"], [3, "giphyGifObjects"], ["id", "actions-bar"], ["id", "btn-show-more", "class", "btn-primary", 3, "click", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "alert", "alert-danger"], ["id", "btn-show-more", 1, "btn-primary", 3, "click"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], ["id", "loading", 1, "sr-only"]], template: function SearchImageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function SearchImageComponent_Template_input_input_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SearchImageComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-image-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SearchImageComponent_button_8_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SearchImageComponent_div_9_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SearchImageComponent_div_10_Template, 3, 0, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasNotData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("giphyGifObjects", ctx.giphyGifObjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasMoreData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__["ImageListComponent"]], styles: ["#search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;\n  border: none;\n  border-radius: 10px;\n  width: 80%;\n  padding: 16px;\n  margin: 32px auto;\n  display: block;\n  font-size: 16px;\n}\n\n#actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n}\n\n#loading[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlYXJjaC1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBRkY7O0FBS0U7RUFDRTtJQUFLLHVCQUFBO0VBRFA7RUFFRTtJQUFPLHlCQUFBO0VBQ1Q7QUFDRiIsImZpbGUiOiJzZWFyY2gtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoLWJhciBpbnB1dCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMHB4IDEwcHggMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jYWN0aW9ucy1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuXG5cblxuI2xvYWRpbmd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH0iXX0= */"] });


/***/ }),

/***/ "kUbd":
/*!**********************************************!*\
  !*** ./src/app/services/favorite.service.ts ***!
  \**********************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FavoriteService {
    constructor() {
        this.state = {
            items: [],
        };
        this.store = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.state);
    }
    save(giphyGifObject) {
        if (this.state.items.some((element) => giphyGifObject.id === element.id)) {
            this.state = {
                items: this.state.items.filter(element => element.id !== giphyGifObject.id)
            };
        }
        else {
            this.state = {
                items: [...this.state.items, giphyGifObject],
            };
        }
        this.store.next(this.state);
    }
}
FavoriteService.ɵfac = function FavoriteService_Factory(t) { return new (t || FavoriteService)(); };
FavoriteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FavoriteService, factory: FavoriteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _saved_image_saved_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-image/saved-image.component */ "X3mS");
/* harmony import */ var _search_image_search_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-image/search-image.component */ "jAHR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'search', component: _search_image_search_image_component__WEBPACK_IMPORTED_MODULE_2__["SearchImageComponent"] },
    { path: 'saved', component: _saved_image_saved_image_component__WEBPACK_IMPORTED_MODULE_1__["SavedImageComponent"] },
    { path: '', redirectTo: '/search', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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