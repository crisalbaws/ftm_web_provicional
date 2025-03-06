"use strict";
(self["webpackChunkFTM"] = self["webpackChunkFTM"] || []).push([[177],{

/***/ 58192:
/*!*****************************************************!*\
  !*** ./src/app/catalogs/catalogs-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogsRoutingModule: () => (/* binding */ CatalogsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _materials_materials_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materials/materials.component */ 11149);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/products.component */ 91675);
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies/companies.component */ 59249);
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.component */ 84429);
/* harmony import */ var _shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/guards/guardsApp.guard */ 3539);
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.component */ 1847);
/* harmony import */ var _production_process_production_process_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./production-process/production-process.component */ 17025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);










const routes = [{
  path: 'components',
  component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__.ComponentsComponent,
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_4__.GuardsAppGuard]
}, {
  path: 'customers',
  component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__.CustomersComponent,
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_4__.GuardsAppGuard]
}, {
  path: 'companies',
  component: _companies_companies_component__WEBPACK_IMPORTED_MODULE_2__.CompaniesComponent,
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_4__.GuardsAppGuard]
}, {
  path: 'materials',
  component: _materials_materials_component__WEBPACK_IMPORTED_MODULE_0__.MaterialsComponent,
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_4__.GuardsAppGuard]
}, {
  path: 'products',
  component: _products_products_component__WEBPACK_IMPORTED_MODULE_1__.ProductsComponent,
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_4__.GuardsAppGuard]
}, {
  path: 'production-process',
  component: _production_process_production_process_component__WEBPACK_IMPORTED_MODULE_6__.ProductionProcessComponent,
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_4__.GuardsAppGuard]
}];
class CatalogsRoutingModule {
  static {
    this.ɵfac = function CatalogsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CatalogsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: CatalogsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CatalogsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 94177:
/*!*********************************************!*\
  !*** ./src/app/catalogs/catalogs.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogsModule: () => (/* binding */ CatalogsModule)
/* harmony export */ });
/* harmony import */ var _catalogs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogs-routing.module */ 58192);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _materials_materials_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materials/materials.component */ 11149);
/* harmony import */ var _materials_material_modal_material_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materials/material-modal/material-modal.component */ 74428);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 57383);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ 91675);
/* harmony import */ var _products_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/product-modal/product-modal.component */ 77310);
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companies/companies.component */ 59249);
/* harmony import */ var _companies_companies_modal_companies_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./companies/companies-modal/companies-modal.component */ 70013);
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers/customers.component */ 84429);
/* harmony import */ var _customers_customer_modal_customer_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers/customer-modal/customer-modal.component */ 37737);
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.component */ 1847);
/* harmony import */ var _components_component_modal_component_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/component-modal/component-modal.component */ 55454);
/* harmony import */ var _production_process_production_process_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./production-process/production-process.component */ 17025);
/* harmony import */ var _production_process_production_process_modal_production_process_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./production-process/production-process-modal/production-process-modal.component */ 85033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 17705);
















class CatalogsModule {
  static {
    this.ɵfac = function CatalogsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CatalogsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
      type: CatalogsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _catalogs_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](CatalogsModule, {
    declarations: [_materials_materials_component__WEBPACK_IMPORTED_MODULE_1__.MaterialsComponent, _materials_material_modal_material_modal_component__WEBPACK_IMPORTED_MODULE_2__.MaterialModalComponent, _products_products_component__WEBPACK_IMPORTED_MODULE_4__.ProductsComponent, _products_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_5__.ProductModalComponent, _companies_companies_component__WEBPACK_IMPORTED_MODULE_6__.CompaniesComponent, _companies_companies_modal_companies_modal_component__WEBPACK_IMPORTED_MODULE_7__.CompaniesModalComponent, _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__.CustomersComponent, _customers_customer_modal_customer_modal_component__WEBPACK_IMPORTED_MODULE_9__.CustomerModalComponent, _components_components_component__WEBPACK_IMPORTED_MODULE_10__.ComponentsComponent, _components_component_modal_component_modal_component__WEBPACK_IMPORTED_MODULE_11__.ComponentModalComponent, _production_process_production_process_component__WEBPACK_IMPORTED_MODULE_12__.ProductionProcessComponent, _production_process_production_process_modal_production_process_modal_component__WEBPACK_IMPORTED_MODULE_13__.ProductionProcessModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _catalogs_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogsRoutingModule]
  });
})();

/***/ }),

/***/ 70013:
/*!*********************************************************************************!*\
  !*** ./src/app/catalogs/companies/companies-modal/companies-modal.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompaniesModalComponent: () => (/* binding */ CompaniesModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 96697);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _state_companies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/companies.actions */ 66587);
/* harmony import */ var _state_companies_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/companies.selector */ 65119);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var _customers_state_customers_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../customers/state/customers.actions */ 10883);
/* harmony import */ var src_app_shared_state_shared_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/state/shared.selector */ 64612);
/* harmony import */ var src_app_shared_state_shared_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/state/shared.actions */ 99578);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! xlsx */ 62288);
/* harmony import */ var _customers_state_customers_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../customers/state/customers.selector */ 32583);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ 99327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/shared.service */ 32175);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 345);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 82798);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/flex-layout/extended */ 16038);









































const _c0 = ["inputFile"];
const _c1 = (a0, a1) => ({
  "mr-10": a0,
  "": a1
});
const _c2 = (a0, a1) => ({
  "": a0,
  "ml-10": a1
});
const _c3 = (a0, a1) => ({
  "mr-10 ml-10": a0,
  "": a1
});
const _c4 = a0 => ({
  edit: a0
});
function CompaniesModalComponent_mat_card_title_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card-title", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddCompany : ctx_r1.en.AddCompany, " ");
  }
}
function CompaniesModalComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card-title", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.EditCompany : ctx_r1.en.EditCompany, " ");
  }
}
function CompaniesModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.save(4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                    ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, " ");
  }
}
function CompaniesModalComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 38)(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", option_r4.key, " ", option_r4.name, "");
  }
}
function CompaniesModalComponent_div_39_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Active : ctx_r1.en.Active, " ");
  }
}
function CompaniesModalComponent_div_39_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Inactive : ctx_r1.en.Inactive, " ");
  }
}
function CompaniesModalComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 40)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 41)(4, "mat-slide-toggle", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, CompaniesModalComponent_div_39_span_5_Template, 2, 1, "span", 43)(6, CompaniesModalComponent_div_39_span_6_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.lan == "es" ? ctx_r1.es.Status : ctx_r1.en.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.status.value == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.status.value == false);
  }
}
function CompaniesModalComponent_mat_card_title_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card-title", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ListEmailsAdded : ctx_r1.en.ListEmailsAdded, " ");
  }
}
function CompaniesModalComponent_div_58_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Email : ctx_r1.en.Email, " ");
  }
}
function CompaniesModalComponent_div_58_td_5_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_58_td_5_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.emailEdit, $event) || (ctx_r1.emailEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.emailEdit);
  }
}
function CompaniesModalComponent_div_58_td_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r6.email);
  }
}
function CompaniesModalComponent_div_58_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_58_td_5_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_58_td_5_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r6.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r6.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r6.editActive);
  }
}
function CompaniesModalComponent_div_58_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Notes : ctx_r1.en.Notes, " ");
  }
}
function CompaniesModalComponent_div_58_td_8_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_58_td_8_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.notesEdit, $event) || (ctx_r1.notesEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.notesEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notesEdit);
  }
}
function CompaniesModalComponent_div_58_td_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r8.notes);
  }
}
function CompaniesModalComponent_div_58_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_58_td_8_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_58_td_8_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r8.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r8.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r8.editActive);
  }
}
function CompaniesModalComponent_div_58_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Actions : ctx_r1.en.Actions, " ");
  }
}
function CompaniesModalComponent_div_58_td_11_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_58_td_11_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      ctx_r1.removeEditList(1, element_r10.id);
      element_r10.editActive = true;
      ctx_r1.emailEdit = element_r10.email;
      ctx_r1.notesEdit = element_r10.notes;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.idMailSelected = element_r10.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.EditEmail : ctx_r1.en.EditEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faEdit);
  }
}
function CompaniesModalComponent_div_58_td_11_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_58_td_11_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      element_r10.editActive = false;
      ctx_r1.keyEdit = "";
      ctx_r1.notesEdit = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.idMailSelected = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Cancel : ctx_r1.en.Cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faClose);
  }
}
function CompaniesModalComponent_div_58_td_11_fa_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_58_td_11_fa_icon_4_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.save(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faSave);
  }
}
function CompaniesModalComponent_div_58_td_11_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_58_td_11_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.delete(element_r10, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.DeleteEmail : ctx_r1.en.DeleteEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faTrashAlt);
  }
}
function CompaniesModalComponent_div_58_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CompaniesModalComponent_div_58_td_11_fa_icon_2_Template, 1, 2, "fa-icon", 57)(3, CompaniesModalComponent_div_58_td_11_fa_icon_3_Template, 1, 2, "fa-icon", 58)(4, CompaniesModalComponent_div_58_td_11_fa_icon_4_Template, 1, 2, "fa-icon", 57)(5, CompaniesModalComponent_div_58_td_11_fa_icon_5_Template, 1, 2, "fa-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](5, _c4, element_r10.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r10.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r10.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r10.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r10.editActive);
  }
}
function CompaniesModalComponent_div_58_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 61);
  }
}
function CompaniesModalComponent_div_58_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 62);
  }
}
function CompaniesModalComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 44)(1, "table", 45, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](3, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CompaniesModalComponent_div_58_th_4_Template, 2, 1, "th", 47)(5, CompaniesModalComponent_div_58_td_5_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](6, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, CompaniesModalComponent_div_58_th_7_Template, 2, 1, "th", 47)(8, CompaniesModalComponent_div_58_td_8_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](9, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, CompaniesModalComponent_div_58_th_10_Template, 2, 1, "th", 47)(11, CompaniesModalComponent_div_58_td_11_Template, 6, 7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, CompaniesModalComponent_div_58_tr_12_Template, 1, 0, "tr", 51)(13, CompaniesModalComponent_div_58_tr_13_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r1.emails);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns1);
  }
}
function CompaniesModalComponent_mat_card_title_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card-title", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ListPhonesAdded : ctx_r1.en.ListPhonesAdded, " ");
  }
}
function CompaniesModalComponent_div_87_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.CountryCode : ctx_r1.en.CountryCode, " ");
  }
}
function CompaniesModalComponent_div_87_td_5_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_87_td_5_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.countryCodeEdit, $event) || (ctx_r1.countryCodeEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.countryCodeEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.countryCodeEdit);
  }
}
function CompaniesModalComponent_div_87_td_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r15.countryCode);
  }
}
function CompaniesModalComponent_div_87_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_87_td_5_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_87_td_5_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r15.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r15.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r15.editActive);
  }
}
function CompaniesModalComponent_div_87_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Extension : ctx_r1.en.Extension, " ");
  }
}
function CompaniesModalComponent_div_87_td_8_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_87_td_8_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.extensionEdit, $event) || (ctx_r1.extensionEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.extensionEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.extensionEdit);
  }
}
function CompaniesModalComponent_div_87_td_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r17.extension);
  }
}
function CompaniesModalComponent_div_87_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_87_td_8_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_87_td_8_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r17.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r17.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r17.editActive);
  }
}
function CompaniesModalComponent_div_87_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.PhoneNumber : ctx_r1.en.PhoneNumber, " ");
  }
}
function CompaniesModalComponent_div_87_td_11_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_87_td_11_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumberEdit, $event) || (ctx_r1.phoneNumberEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.phoneNumberEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumberEdit);
  }
}
function CompaniesModalComponent_div_87_td_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r19.phoneNumber);
  }
}
function CompaniesModalComponent_div_87_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_87_td_11_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_87_td_11_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r19.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r19.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r19.editActive);
  }
}
function CompaniesModalComponent_div_87_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Notes : ctx_r1.en.Notes, " ");
  }
}
function CompaniesModalComponent_div_87_td_14_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_87_td_14_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.notesPhoneEdit, $event) || (ctx_r1.notesPhoneEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.notesPhoneEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notesPhoneEdit);
  }
}
function CompaniesModalComponent_div_87_td_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r21.notes);
  }
}
function CompaniesModalComponent_div_87_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_87_td_14_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_87_td_14_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r21.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r21.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r21.editActive);
  }
}
function CompaniesModalComponent_div_87_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Actions : ctx_r1.en.Actions, " ");
  }
}
function CompaniesModalComponent_div_87_td_17_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_87_td_17_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      const element_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      ctx_r1.removeEditList(2, element_r23.id);
      element_r23.editActive = true;
      ctx_r1.countryCodeEdit = element_r23.countryCode;
      ctx_r1.notesPhoneEdit = element_r23.notes;
      ctx_r1.extensionEdit = element_r23.extension;
      ctx_r1.phoneNumberEdit = element_r23.phoneNumber;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.idPhoneSelected = element_r23.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.EditPhone : ctx_r1.en.EditPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faEdit);
  }
}
function CompaniesModalComponent_div_87_td_17_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_87_td_17_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const element_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      element_r23.editActive = false;
      ctx_r1.countryCodeEdit = "";
      ctx_r1.notesPhoneEdit = "";
      ctx_r1.extensionEdit = "";
      ctx_r1.phoneNumberEdit = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.idPhoneSelected = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Cancel : ctx_r1.en.Cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faClose);
  }
}
function CompaniesModalComponent_div_87_td_17_fa_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_87_td_17_fa_icon_4_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25);
      const element_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.delete(element_r23, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.DeletePhone : ctx_r1.en.DeletePhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faTrashAlt);
  }
}
function CompaniesModalComponent_div_87_td_17_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_87_td_17_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.save(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faSave);
  }
}
function CompaniesModalComponent_div_87_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CompaniesModalComponent_div_87_td_17_fa_icon_2_Template, 1, 2, "fa-icon", 57)(3, CompaniesModalComponent_div_87_td_17_fa_icon_3_Template, 1, 2, "fa-icon", 58)(4, CompaniesModalComponent_div_87_td_17_fa_icon_4_Template, 1, 2, "fa-icon", 58)(5, CompaniesModalComponent_div_87_td_17_fa_icon_5_Template, 1, 2, "fa-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](5, _c4, element_r23.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r23.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r23.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r23.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r23.editActive);
  }
}
function CompaniesModalComponent_div_87_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 61);
  }
}
function CompaniesModalComponent_div_87_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 62);
  }
}
function CompaniesModalComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 44)(1, "table", 63, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](3, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CompaniesModalComponent_div_87_th_4_Template, 2, 1, "th", 47)(5, CompaniesModalComponent_div_87_td_5_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](6, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, CompaniesModalComponent_div_87_th_7_Template, 2, 1, "th", 47)(8, CompaniesModalComponent_div_87_td_8_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](9, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, CompaniesModalComponent_div_87_th_10_Template, 2, 1, "th", 47)(11, CompaniesModalComponent_div_87_td_11_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](12, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, CompaniesModalComponent_div_87_th_13_Template, 2, 1, "th", 47)(14, CompaniesModalComponent_div_87_td_14_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](15, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, CompaniesModalComponent_div_87_th_16_Template, 2, 1, "th", 47)(17, CompaniesModalComponent_div_87_td_17_Template, 6, 7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, CompaniesModalComponent_div_87_tr_18_Template, 1, 0, "tr", 51)(19, CompaniesModalComponent_div_87_tr_19_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r1.phones);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns2);
  }
}
function CompaniesModalComponent_mat_option_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 38)(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r27.ISOAlpha3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](option_r27.Nombre);
  }
}
function CompaniesModalComponent_mat_option_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 38)(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r28.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](option_r28.name);
  }
}
function CompaniesModalComponent_mat_card_title_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card-title", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ListAddressesAdded : ctx_r1.en.ListAddressesAdded, " ");
  }
}
function CompaniesModalComponent_div_143_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Country : ctx_r1.en.Country, " ");
  }
}
function CompaniesModalComponent_div_143_td_5_mat_form_field_1_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 38)(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r30.ISOAlpha3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](option_r30.Nombre);
  }
}
function CompaniesModalComponent_div_143_td_5_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-form-field", 77)(1, "mat-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_143_td_5_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.countryEdit, $event) || (ctx_r1.countryEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CompaniesModalComponent_div_143_td_5_mat_form_field_1_mat_option_2_Template, 3, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", element_r31.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.countryEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.countriesCatalog);
  }
}
function CompaniesModalComponent_div_143_td_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r31.countryName);
  }
}
function CompaniesModalComponent_div_143_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_143_td_5_mat_form_field_1_Template, 3, 3, "mat-form-field", 76)(2, CompaniesModalComponent_div_143_td_5_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r31.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r31.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r31.editActive);
  }
}
function CompaniesModalComponent_div_143_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.State : ctx_r1.en.State, " ");
  }
}
function CompaniesModalComponent_div_143_td_8_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_143_td_8_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.stateEdit, $event) || (ctx_r1.stateEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateEdit);
  }
}
function CompaniesModalComponent_div_143_td_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r33.state);
  }
}
function CompaniesModalComponent_div_143_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_143_td_8_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_143_td_8_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r33.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r33.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r33.editActive);
  }
}
function CompaniesModalComponent_div_143_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.City : ctx_r1.en.City, " ");
  }
}
function CompaniesModalComponent_div_143_td_11_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_143_td_11_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.cityEdit, $event) || (ctx_r1.cityEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityEdit);
  }
}
function CompaniesModalComponent_div_143_td_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r35.city);
  }
}
function CompaniesModalComponent_div_143_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_143_td_11_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_143_td_11_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r35.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r35.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r35.editActive);
  }
}
function CompaniesModalComponent_div_143_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.District : ctx_r1.en.District, " ");
  }
}
function CompaniesModalComponent_div_143_td_14_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_143_td_14_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.districtEdit, $event) || (ctx_r1.districtEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.districtEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.districtEdit);
  }
}
function CompaniesModalComponent_div_143_td_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r37.district);
  }
}
function CompaniesModalComponent_div_143_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_143_td_14_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_143_td_14_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r37.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r37.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r37.editActive);
  }
}
function CompaniesModalComponent_div_143_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ZipCode : ctx_r1.en.ZipCode, " ");
  }
}
function CompaniesModalComponent_div_143_td_17_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_143_td_17_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.zipCodeEdit, $event) || (ctx_r1.zipCodeEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.zipCodeEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.zipCodeEdit);
  }
}
function CompaniesModalComponent_div_143_td_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r39.zipCode);
  }
}
function CompaniesModalComponent_div_143_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_143_td_17_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_143_td_17_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r39.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r39.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r39.editActive);
  }
}
function CompaniesModalComponent_div_143_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddressLine1 : ctx_r1.en.AddressLine1, " ");
  }
}
function CompaniesModalComponent_div_143_td_20_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_143_td_20_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.addressLine1Edit, $event) || (ctx_r1.addressLine1Edit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressLine1Edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.addressLine1Edit);
  }
}
function CompaniesModalComponent_div_143_td_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r41.addressLine1);
  }
}
function CompaniesModalComponent_div_143_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_143_td_20_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_143_td_20_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r41.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r41.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r41.editActive);
  }
}
function CompaniesModalComponent_div_143_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddressLine2 : ctx_r1.en.AddressLine2, " ");
  }
}
function CompaniesModalComponent_div_143_td_23_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_143_td_23_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.addressLine2Edit, $event) || (ctx_r1.addressLine2Edit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressLine2Edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.addressLine2Edit);
  }
}
function CompaniesModalComponent_div_143_td_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r43.addressLine2);
  }
}
function CompaniesModalComponent_div_143_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_143_td_23_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_143_td_23_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r43.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r43.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r43.editActive);
  }
}
function CompaniesModalComponent_div_143_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Notes : ctx_r1.en.Notes, " ");
  }
}
function CompaniesModalComponent_div_143_td_26_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_143_td_26_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.notesAddressEdit, $event) || (ctx_r1.notesAddressEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.notesAddressEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notesAddressEdit);
  }
}
function CompaniesModalComponent_div_143_td_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r45.notes);
  }
}
function CompaniesModalComponent_div_143_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_143_td_26_input_1_Template, 1, 2, "input", 55)(2, CompaniesModalComponent_div_143_td_26_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r45.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r45.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r45.editActive);
  }
}
function CompaniesModalComponent_div_143_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddressType : ctx_r1.en.AddressType, " ");
  }
}
function CompaniesModalComponent_div_143_td_29_mat_form_field_1_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 38)(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](option_r47.name);
  }
}
function CompaniesModalComponent_div_143_td_29_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-form-field", 77)(1, "mat-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CompaniesModalComponent_div_143_td_29_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.addressTypeId, $event) || (ctx_r1.addressTypeId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CompaniesModalComponent_div_143_td_29_mat_form_field_1_mat_option_2_Template, 3, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", element_r48.addressTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.addressTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.catalogAddressType);
  }
}
function CompaniesModalComponent_div_143_td_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](element_r48.addressTypeName);
  }
}
function CompaniesModalComponent_div_143_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CompaniesModalComponent_div_143_td_29_mat_form_field_1_Template, 3, 3, "mat-form-field", 79)(2, CompaniesModalComponent_div_143_td_29_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](3, _c4, element_r48.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r48.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r48.editActive);
  }
}
function CompaniesModalComponent_div_143_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Actions : ctx_r1.en.Actions, " ");
  }
}
function CompaniesModalComponent_div_143_td_32_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_143_td_32_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const element_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      ctx_r1.removeEditList(3, element_r50.id);
      element_r50.editActive = true;
      ctx_r1.countryEdit = element_r50.country;
      ctx_r1.stateEdit = element_r50.state;
      ctx_r1.cityEdit = element_r50.city;
      ctx_r1.districtEdit = element_r50.district;
      ctx_r1.zipCodeEdit = element_r50.zipCode;
      ctx_r1.addressLine1Edit = element_r50.addressLine1;
      ctx_r1.addressLine2Edit = element_r50.addressLine2;
      ctx_r1.notesAddressEdit = element_r50.notes;
      ctx_r1.idAddressSelected = element_r50.id;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.addressTypeId = element_r50.addressTypeId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.EditAddress : ctx_r1.en.EditAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faEdit);
  }
}
function CompaniesModalComponent_div_143_td_32_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_143_td_32_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const element_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      element_r50.editActive = false;
      ctx_r1.countryEdit = "";
      ctx_r1.stateEdit = "";
      ctx_r1.cityEdit = "";
      ctx_r1.districtEdit = "";
      ctx_r1.zipCodeEdit = "";
      ctx_r1.addressLine1Edit = "";
      ctx_r1.addressLine2Edit = "";
      ctx_r1.notesAddressEdit = "";
      ctx_r1.idAddressSelected = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.addressTypeId = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Cancel : ctx_r1.en.Cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faClose);
  }
}
function CompaniesModalComponent_div_143_td_32_fa_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_143_td_32_fa_icon_4_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r52);
      const element_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.delete(element_r50, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.DeleteAddress : ctx_r1.en.DeleteAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faTrashAlt);
  }
}
function CompaniesModalComponent_div_143_td_32_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_div_143_td_32_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.save(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faSave);
  }
}
function CompaniesModalComponent_div_143_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CompaniesModalComponent_div_143_td_32_fa_icon_2_Template, 1, 2, "fa-icon", 57)(3, CompaniesModalComponent_div_143_td_32_fa_icon_3_Template, 1, 2, "fa-icon", 58)(4, CompaniesModalComponent_div_143_td_32_fa_icon_4_Template, 1, 2, "fa-icon", 58)(5, CompaniesModalComponent_div_143_td_32_fa_icon_5_Template, 1, 2, "fa-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](5, _c4, element_r50.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r50.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r50.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !element_r50.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r50.editActive);
  }
}
function CompaniesModalComponent_div_143_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 61);
  }
}
function CompaniesModalComponent_div_143_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 62);
  }
}
function CompaniesModalComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 44)(1, "table", 63, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](3, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CompaniesModalComponent_div_143_th_4_Template, 2, 1, "th", 47)(5, CompaniesModalComponent_div_143_td_5_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](6, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, CompaniesModalComponent_div_143_th_7_Template, 2, 1, "th", 47)(8, CompaniesModalComponent_div_143_td_8_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](9, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, CompaniesModalComponent_div_143_th_10_Template, 2, 1, "th", 47)(11, CompaniesModalComponent_div_143_td_11_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](12, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, CompaniesModalComponent_div_143_th_13_Template, 2, 1, "th", 47)(14, CompaniesModalComponent_div_143_td_14_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](15, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, CompaniesModalComponent_div_143_th_16_Template, 2, 1, "th", 47)(17, CompaniesModalComponent_div_143_td_17_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](18, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, CompaniesModalComponent_div_143_th_19_Template, 2, 1, "th", 47)(20, CompaniesModalComponent_div_143_td_20_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](21, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, CompaniesModalComponent_div_143_th_22_Template, 2, 1, "th", 47)(23, CompaniesModalComponent_div_143_td_23_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](24, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, CompaniesModalComponent_div_143_th_25_Template, 2, 1, "th", 47)(26, CompaniesModalComponent_div_143_td_26_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](27, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, CompaniesModalComponent_div_143_th_28_Template, 2, 1, "th", 47)(29, CompaniesModalComponent_div_143_td_29_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](30, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, CompaniesModalComponent_div_143_th_31_Template, 2, 1, "th", 47)(32, CompaniesModalComponent_div_143_td_32_Template, 6, 7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, CompaniesModalComponent_div_143_tr_33_Template, 1, 0, "tr", 51)(34, CompaniesModalComponent_div_143_tr_34_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r1.addresses);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns3);
  }
}
function CompaniesModalComponent_fa_icon_148_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fa-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_fa_icon_148_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r54);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r1.inputFile.nativeElement.value = "";
      ctx_r1.binaryImage = "";
      ctx_r1.imageEncodeBase64 = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.imageData = {
        url: "",
        id: ""
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Delete : ctx_r1.en.Delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faClose);
  }
}
function CompaniesModalComponent_img_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 81);
  }
}
function CompaniesModalComponent_img_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 82);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.imageEncodeBase64 || ctx_r1.imageData.url, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function CompaniesModalComponent_div_151_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.SelectImage : ctx_r1.en.SelectImage, " ");
  }
}
function CompaniesModalComponent_div_151_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ChangeImage : ctx_r1.en.ChangeImage, " ");
  }
}
function CompaniesModalComponent_div_151_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 83)(1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CompaniesModalComponent_div_151_span_2_Template, 2, 1, "span", 43)(3, CompaniesModalComponent_div_151_span_3_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "fa-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "input", 86, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CompaniesModalComponent_div_151_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r55);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.getBase64($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.imageEncodeBase64 == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.imageEncodeBase64 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.OnlyImagesPngJpgFormat : ctx_r1.en.OnlyImagesPngJpgFormat);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faCircleQuestion);
  }
}
class CompaniesModalComponent {
  constructor(dialogRef, snackBar, languageService, storeDispatch, storeApi, actions$, cdRef, data, sharedService, sanitizer, permissionsGuard, breakpointObserver) {
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.languageService = languageService;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.actions$ = actions$;
    this.cdRef = cdRef;
    this.data = data;
    this.sharedService = sharedService;
    this.sanitizer = sanitizer;
    this.permissionsGuard = permissionsGuard;
    this.breakpointObserver = breakpointObserver;
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faClose;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faEdit;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faTrashAlt;
    this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faSave;
    this.faAdd = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faAdd;
    this.faCircleQuestion = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faCircleQuestion;
    this.isXsScreen = false;
    this.displayedColumns1 = ['email', 'notes', 'actions'];
    this.displayedColumns2 = ['countryCode', 'extension', 'phoneNumber', 'notes', 'actions'];
    this.displayedColumns3 = ['country', 'state', 'city', 'district', 'zipCode', 'addressType', 'addressLine1', 'addressLine2', 'notes', 'actions'];
    this.catalogAddressType = [{
      id: 1,
      name: 'Comercial'
    }, {
      id: 2,
      name: 'Fiscal'
    }];
    this.catalogTax = [{
      id: '1',
      name: 'Tax 1'
    }];
    this.catalogTaxSection = [];
    this.countriesCatalog = [];
    this.key = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.tax = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.taxName = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.notes = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("");
    this.taxSection = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.logo = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.countryCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.notesPhone = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("");
    this.extension = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("");
    this.phoneNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(10)]);
    this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("MEX", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.district = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.zipCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.addressLine1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.addressLine2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("");
    this.notesAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("");
    this.addressType = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
    this.addressTypeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null);
    this.type = [];
    this.type2 = [];
    this.type3 = [];
    this.emails = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.type);
    this.phones = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.type2);
    this.addresses = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.type3);
    this.keyEdit = "";
    this.notesEdit = "";
    this.emailEdit = "";
    this.countryCodeEdit = "";
    this.notesPhoneEdit = "";
    this.extensionEdit = "";
    this.phoneNumberEdit = "";
    this.countryEdit = "";
    this.stateEdit = "";
    this.cityEdit = "";
    this.districtEdit = "";
    this.zipCodeEdit = "";
    this.addressLine1Edit = "";
    this.addressLine2Edit = "";
    this.notesAddressEdit = "";
    this.idMailSelected = null;
    this.idPhoneSelected = null;
    this.idAddressSelected = null;
    this.addressTypeId = null;
    this.isNew = true;
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.patternNumbers = '^[0-9]+$';
    this.patternMail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.imageEncodeBase64 = '';
    this.imageData = "";
    this.addCompanySubscription = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.updateCompanySubscription = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.binaryImage = "";
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.companiesListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.taxSectionListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.companyByIdSubs = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.catalogsSubs = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.itemData = data;
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.isNew = false;
    } else {
      this.getList();
    }
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.companiesListSubs.unsubscribe();
    this.taxSectionListSubs.unsubscribe();
    this.companyByIdSubs.unsubscribe();
    this.catalogsSubs.unsubscribe();
    this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__.Breakpoints.XSmall]).subscribe(result => {
      this.isXsScreen = result.matches;
    });
  }
  ngOnInit() {
    this.getTaxSectionList();
    this.getCatalogsExcell();
  }
  getList() {
    this.companiesListSubs = this.storeApi.select(_state_companies_selector__WEBPACK_IMPORTED_MODULE_2__.selectCompaniesList).subscribe(data => {
      // if (data.companiesList.length > 0) {
      //   let valuesArray: number[] = [];
      //   data.companiesList.forEach((element: any) => {
      //     valuesArray.push(Number(element.key));
      //   });
      //   this.key.patchValue((Math.max(...valuesArray) + 1).toString());
      // }
      // else {
      //   this.key.patchValue('1');
      // }
      if (data.companiesList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_companies_actions__WEBPACK_IMPORTED_MODULE_1__.loadCompaniesList)());
        this.companiesListSubs.unsubscribe();
      }
    });
  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  getTaxSectionList() {
    this.taxSectionListSubs = this.storeApi.select(_customers_state_customers_selector__WEBPACK_IMPORTED_MODULE_6__.selectTaxSectionList).subscribe(data => {
      this.catalogTaxSection = data.taxSectionList;
      if (this.catalogTaxSection == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_customers_state_customers_actions__WEBPACK_IMPORTED_MODULE_3__.loadTaxSectionList)());
        this.taxSectionListSubs.unsubscribe();
      }
    });
  }
  getById(data) {
    this.storeDispatch.dispatch((0,_state_companies_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionCompanyById)({
      loading: true,
      company: data
    }));
    this.companyByIdSubs = this.storeApi.select(_state_companies_selector__WEBPACK_IMPORTED_MODULE_2__.selectCompanyById).subscribe(item => {
      this.patchValues(item);
      this.companyByIdSubs.unsubscribe();
    }, () => {
      console.log("Error get biId");
    });
  }
  patchValues(itemData) {
    this.itemData = itemData;
    this.key.patchValue(itemData.key);
    this.name.patchValue(itemData.name);
    this.status.patchValue(itemData.status);
    this.addresses.data = itemData.addresses;
    this.phones.data = itemData.phones;
    this.emails.data = itemData.emails;
    this.tax.patchValue(itemData.taxId);
    this.taxName.patchValue(itemData.taxName);
    this.taxSection.patchValue(itemData.taxSectionId);
    let urlImage = {
      url: '',
      id: ''
    };
    if (itemData != undefined && itemData.documents != undefined && itemData.documents.length > 0) {
      urlImage = itemData.documents[itemData.documents.length - 1];
    }
    this.imageData = urlImage;
    this.addEditActiveParam();
  }
  save(opc) {
    if (!this.key.valid || !this.name.valid || !this.tax.valid || !this.taxSection.valid) {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.CompleteRequiredFields;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.CompleteRequiredFields;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 3000
      });
      return;
    }
    let nameImage = "";
    if (this.binaryImage != undefined && this.binaryImage != null && this.binaryImage != "") {
      nameImage = this.binaryImage.name.toString().replace('-', '');
      nameImage = nameImage.replace('/', '');
      nameImage = nameImage.replace('|', '');
    }
    switch (opc) {
      case 1:
        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.emailEdit)) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterValidEmail;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterValidEmail;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        this.emails.data.forEach(element => {
          if (element.id == this.idMailSelected) {
            element.notes = this.notesEdit;
            element.email = this.emailEdit;
            element.editActive = false;
          }
        });
        this.emails.data = this.emails.data;
        this.notesEdit = "";
        this.emailEdit = "";
        this.idMailSelected = null;
        break;
      case 2:
        if (!/^[0-9]+$/.test(this.phoneNumberEdit)) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterValidNumber;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterValidNumber;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!/^[0-9]+$/.test(this.countryCodeEdit)) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterCountryCodeValid;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterCountryCodeValid;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        this.phones.data.forEach(element => {
          if (element.id == this.idPhoneSelected) {
            element.countryCode = this.countryCodeEdit;
            element.notes = this.notesPhoneEdit;
            element.extension = this.extensionEdit;
            element.phoneNumber = this.phoneNumberEdit;
            element.editActive = false;
          }
        });
        this.phones.data = this.phones.data;
        this.countryCodeEdit = "";
        this.notesPhoneEdit = "";
        this.extensionEdit = "";
        this.phoneNumberEdit = "";
        this.idPhoneSelected = null;
        break;
      case 3:
        let addessTypeFind = this.catalogAddressType.find(address => address.id == this.addressTypeId);
        this.addresses.data.forEach(element => {
          if (element.id == this.idAddressSelected) {
            element.country = this.countryEdit;
            element.state = this.stateEdit;
            element.city = this.cityEdit;
            element.district = this.districtEdit;
            element.zipCode = this.zipCodeEdit;
            element.addressLine1 = this.addressLine1Edit;
            element.addressLine2 = this.addressLine2Edit;
            element.notes = this.notesAddressEdit;
            element.editActive = false;
            element.addressTypeId = this.addressTypeId;
            element.addressTypeName = addessTypeFind.name;
            let countryFindf = this.countriesCatalog.find(x => this.countryEdit == x.ISOAlpha3);
            if (countryFindf != undefined) {
              element.countryName = countryFindf.Nombre;
            }
          }
        });
        this.addresses.data = this.addresses.data;
        this.countryEdit = '';
        this.stateEdit = '';
        this.cityEdit = '';
        this.districtEdit = '';
        this.zipCodeEdit = '';
        this.addressLine1Edit = '';
        this.addressLine2Edit = '';
        this.notesAddressEdit = '';
        this.idAddressSelected = null;
        break;
      case 4:
        this.addresses.data.forEach(address => {
          if (address && address.id != null) {
            if (address.id.toString().length >= 10) {
              let newData = address;
              delete newData['id'];
              address = newData;
            }
          }
        });
        this.phones.data.forEach(phone => {
          if (phone && phone.id != null) {
            if (phone.id.toString().length >= 10) {
              let newData = phone;
              delete newData['id'];
              phone = newData;
            }
          }
        });
        this.emails.data.forEach(email => {
          if (email && email.id != null) {
            if (email.id.toString().length >= 10) {
              let newData = email;
              delete newData['id'];
              email = newData;
            }
          }
        });
        this.addresses.data = this.addresses.data;
        this.phones.data = this.phones.data;
        this.emails.data = this.emails.data;
        if (this.isNew) {
          let company = {
            key: this.key.value,
            taxSectionId: this.taxSection.value,
            name: this.name.value,
            taxName: this.taxName.value,
            taxId: this.tax.value,
            // logo: '../../assets/img/logoTomas.jpg',
            addresses: this.addresses.data,
            phones: this.phones.data,
            emails: this.emails.data,
            image: this.binaryImage,
            nameImage: nameImage
          };
          this.storeDispatch.dispatch((0,_state_companies_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionAddCompany)({
            loading: true,
            company: company
          }));
          this.addCompanySubscription = this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.ofType)('[Add Company] Finish AddCompany')).subscribe(result => {
            this.addEditActiveParam();
            this.addCompanySubscription.unsubscribe();
          });
        } else {
          let company = {
            id: this.itemData.id,
            key: this.key.value,
            taxSectionId: this.taxSection.value,
            name: this.name.value,
            taxName: this.taxName.value,
            taxId: this.tax.value,
            // logo: '../../assets/img/logoTomas.jpg',
            addresses: this.addresses.data,
            phones: this.phones.data,
            emails: this.emails.data,
            status: this.status.value,
            urlDeleteImage: '',
            image: null,
            nameImage: nameImage
          };
          if (this.binaryImage != undefined && this.binaryImage != null && this.binaryImage != '') {
            company = {
              id: this.itemData.id,
              key: this.key.value,
              taxSectionId: this.taxSection.value,
              name: this.name.value,
              taxName: this.taxName.value,
              taxId: this.tax.value,
              // logo: '../../assets/img/logoTomas.jpg',
              addresses: this.addresses.data,
              phones: this.phones.data,
              emails: this.emails.data,
              status: this.status.value,
              urlDeleteImage: this.imageData.id != '' ? this.imageData.id : '',
              image: this.binaryImage,
              nameImage: nameImage
            };
          }
          this.storeDispatch.dispatch((0,_state_companies_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionUpdateCompany)({
            loading: true,
            company: company
          }));
          // let subscription = new Subscription();
          // subscription = 
          this.updateCompanySubscription = this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.ofType)('[Update Company] Finish UpdateCompany')).subscribe(result => {
            this.getById(result.company);
            this.updateCompanySubscription.unsubscribe();
            // subscription.unsubscribe();
          });
        }
        break;
    }
  }
  delete(item, opc) {
    switch (opc) {
      case 1:
        this.emails.data = this.emails.data.filter(element => {
          return element.id != item.id;
        });
        break;
      case 2:
        this.phones.data = this.phones.data.filter(element => {
          return element.id != item.id;
        });
        break;
      case 3:
        this.addresses.data = this.addresses.data.filter(element => {
          return element.id != item.id;
        });
        break;
    }
  }
  add(opc) {
    switch (opc) {
      case 1:
        let findEmail = this.emails.data.find(email => this.email.value == email.email);
        if (findEmail != undefined) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.MailAlreadyExists;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.MailAlreadyExists;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!this.email.valid) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterValidEmail;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterValidEmail;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        let newArray = [];
        this.emails.data.forEach(element => {
          newArray.push(element);
        });
        let newitem = {
          id: 1111111111 + this.emails.data.length + 1,
          email: this.email.value,
          notes: this.notes.value,
          editActive: false
        };
        this.email.reset();
        this.notes.reset();
        newArray.push(newitem);
        this.emails.data = newArray;
        break;
      case 2:
        let findNumber = this.phones.data.find(phoneNumber => this.phoneNumber.value?.trim()?.toUpperCase() == phoneNumber.phoneNumber?.trim()?.toUpperCase());
        if (findNumber != undefined) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.PhoneAlreadyExists;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.PhoneAlreadyExists;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!this.phoneNumber.valid) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterValidNumber;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterValidNumber;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!this.countryCode.valid) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterCountryCodeValid;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterCountryCodeValid;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        let newArrayPhones = [];
        this.phones.data.forEach(element => {
          newArrayPhones.push(element);
        });
        let newitemPhone = {
          id: 1111111111 + this.phones.data.length + 1,
          countryCode: this.countryCode.value,
          extension: this.extension.value,
          notes: this.notesPhone.value,
          phoneNumber: this.phoneNumber.value,
          editActive: false
        };
        this.countryCode.reset();
        this.extension.reset();
        this.notesPhone.reset();
        this.phoneNumber.reset();
        newArrayPhones.push(newitemPhone);
        this.phones.data = newArrayPhones;
        break;
      case 3:
        let findAddress = this.addresses.data.find(address => this.country.value?.trim()?.toUpperCase() == address.country?.trim()?.toUpperCase() && this.state.value?.trim()?.toUpperCase() == address.state?.trim()?.toUpperCase() && this.city.value?.trim()?.toUpperCase() == address.city?.trim()?.toUpperCase() && this.district.value?.trim()?.toUpperCase() == address.district?.trim()?.toUpperCase() && this.zipCode.value?.trim()?.toUpperCase() == address.zipCode?.trim()?.toUpperCase() && this.addressLine1.value?.trim()?.toUpperCase() == address.addressLine1?.trim()?.toUpperCase() && this.addressLine2.value?.trim()?.toUpperCase() == address.addressLine2?.trim()?.toUpperCase());
        if (findAddress != undefined) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.AddressAlreadyExists;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.AddressAlreadyExists;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!this.country.valid || !this.state.valid || !this.city.valid || !this.district.valid || !this.zipCode.valid || !this.addressLine1.valid || !this.addressLine2.valid || !this.notesAddress.valid) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.MandatoryFieldsFillingIn;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.MandatoryFieldsFillingIn;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        let countryFind = this.countriesCatalog.find(x => this.country.value == x.ISOAlpha3);
        let newArrayAddresses = [];
        this.addresses.data.forEach(element => {
          newArrayAddresses.push(element);
        });
        let addessTypeFind = this.catalogAddressType.find(address => address.id == this.addressTypeControl.value);
        let newitemAddress = {
          id: 1111111111 + this.addresses.data.length + 1,
          country: this.country.value,
          state: this.state.value,
          city: this.city.value,
          district: this.district.value,
          zipCode: this.zipCode.value,
          addressLine1: this.addressLine1.value,
          addressLine2: this.addressLine2.value,
          notes: this.notesAddress.value,
          editActive: false,
          addressTypeId: addessTypeFind.id,
          addressTypeName: addessTypeFind.name,
          countryName: countryFind.Nombre
        };
        // this.country.reset();
        this.state.reset();
        this.city.reset();
        this.district.reset();
        this.zipCode.reset();
        this.addressLine1.reset();
        this.addressLine2.reset();
        this.notesAddress.reset();
        this.addressType.reset();
        newArrayAddresses.push(newitemAddress);
        this.addresses.data = newArrayAddresses;
        break;
    }
  }
  removeEditList(opc, id) {
    switch (opc) {
      case 1:
        this.emails.data.forEach(item => {
          if (item.id != id) {
            item.editActive = false;
          }
        });
        break;
      case 2:
        this.phones.data.forEach(item => {
          if (item.id != id) {
            item.editActive = false;
          }
        });
        break;
      case 3:
        this.addresses.data.forEach(item => {
          if (item.id != id) {
            item.editActive = false;
          }
        });
        break;
    }
  }
  addEditActiveParam() {
    if (this.emails != undefined && this.emails.data.length > 0) {
      let newEmails = this.emails.data.map(item => ({
        ...item,
        editActive: false
      }));
      this.emails.data = newEmails;
    }
    if (this.phones != undefined && this.phones.data.length > 0) {
      let newPhones = this.phones.data.map(item => ({
        ...item,
        editActive: false
      }));
      this.phones.data = newPhones;
    }
    if (this.addresses != undefined && this.addresses.data.length > 0) {
      let newAddresses = this.addresses.data.map(item => ({
        ...item,
        editActive: false,
        countryName: ''
      }));
      let interval = setInterval(() => {
        if (this.countriesCatalog.length > 0) {
          newAddresses.forEach(element => {
            let countryFind = this.countriesCatalog.find(x => element.country == x.ISOAlpha3);
            if (countryFind != undefined) {
              element.countryName = countryFind.Nombre;
            }
          });
          clearInterval(interval);
          this.addresses.data = newAddresses;
        }
      }, 1000);
    }
  }
  getCatalogsExcell() {
    this.catalogsSubs = this.storeApi.select(src_app_shared_state_shared_selector__WEBPACK_IMPORTED_MODULE_4__.selectcatalogs).subscribe(data => {
      if (data != undefined && data.catalogs.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,src_app_shared_state_shared_actions__WEBPACK_IMPORTED_MODULE_5__.loadcatalogs)());
        this.catalogsSubs.unsubscribe();
      } else {
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = data.catalogs;
        reader.onload = () => {
          const data = reader.result;
          workBook = xlsx__WEBPACK_IMPORTED_MODULE_19__.read(data, {
            type: 'binary'
          });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_19__.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          this.countriesCatalog = jsonData.paises;
          if (this.itemData != undefined && this.itemData != null) {
            this.getById(this.itemData.item);
          }
        };
        if (file != undefined && file.length != 0) {
          reader.readAsBinaryString(file);
        }
      }
    });
  }
  getBase64(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result != undefined && reader.result != null) {
        let newValue = reader.result.toString();
        if (newValue.includes('data:image/png;base64') || newValue.includes('data:image/jpeg;base64')) {
          if (reader.result) {
            this.imageEncodeBase64 = reader.result;
            this.getBinaryImage(event);
          }
        } else {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.OnlyImagesPngJpgFormat;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.OnlyImagesPngJpgFormat;
          }
          this.imageEncodeBase64 = "";
          this.inputFile.nativeElement.value = '';
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
      }
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  getBinaryImage(event) {
    const image = event.target.files[0];
    try {
      const data = new FormData();
      data.append('image', image);
      this.binaryImage = image;
    } catch (error) {}
  }
  // transform() {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageEncodeBase64);
  // }
  alreadyImage() {
    if (this.imageData != undefined && this.imageData != "" && this.imageData.url != "" || this.imageEncodeBase64 != '') {
      return true;
    } else {
      return false;
    }
  }
  static {
    this.ɵfac = function CompaniesModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompaniesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_22__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_22__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_10__.PermissionsGuard), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__.BreakpointObserver));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: CompaniesModalComponent,
      selectors: [["app-companies-modal"]],
      viewQuery: function CompaniesModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.inputFile = _t.first);
        }
      },
      decls: 152,
      vars: 161,
      consts: [["input", ""], ["table", ""], ["inputFile", ""], [1, "m-card", "p-20", "overflowA", 2, "max-height", "80vh"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px", "width", "100%"], [1, "w-100"], ["class", "containerComponent__custom-title", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end end", 1, "mt-20", "w-100"], [1, "mr-10", "mb-10"], ["color", "warn", 1, "btn-l-warning", 3, "click", "matTooltip"], ["class", "mb-10", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "mt-20", "mb-10"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "w-100"], ["appearance", "outline", 1, "w-100", 3, "ngClass"], ["matInput", "", 3, "formControl", "maxlength"], [1, "w-100", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start start", 3, "ngClass"], ["fxLayout", "column", "fxLayoutAlign", "center center", "class", "mb-10", 4, "ngIf"], [1, "customText", "fuente", "f-s-14", "mt-10", "b-g-b-t"], [1, "customText", "fuente", "f-w-b", "f-s-14", "mt-10", "mr-a", "f-c-o"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "w-100", "mt-10"], ["appearance", "outline", 1, "w-100"], ["matInput", "", 3, "formControl", "maxlength", "pattern"], [1, "w-25", "mt-10"], [1, "icon-button", "pointer", 3, "click", "icon", "matTooltip"], ["class", "customText fuente f-w-b f-s-14 mt-10 mr-a f-c-o", 4, "ngIf"], ["class", "containerComponent__table-container w-100", 4, "ngIf"], [1, "customText", "fuente", "f-w-b", "f-s-14", "mt-20", "b-g-b-t"], [1, "w-25", "mt-10", "ml-10"], [1, "icon-button", "mr-a", "pointer", 3, "click", "icon", "matTooltip"], ["matTooltipPosition", "below", "class", "mr-20 pointer deleteImg", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "mr-a whidthImage2 mt-3", "src", "./assets/img/sin_imagen.jpg", 4, "ngIf"], ["class", "whidthImage2 mr-a", 3, "src", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start start", "class", "w-100 mt-10", 4, "ngIf"], [1, "containerComponent__custom-title"], [1, "mb-10"], ["color", "primary", 1, "btn-l-100b", 3, "click", "matTooltip"], [3, "value"], [1, "fuente"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-10"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "primary", 1, "mt-10", 3, "formControl"], [4, "ngIf"], [1, "containerComponent__table-container", "w-100"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "email"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "notes"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "ngClass"], ["type", "text", "class", "inputEdit", 3, "ngModel", "value", "ngModelChange", 4, "ngIf"], ["type", "text", 1, "inputEdit", 3, "ngModelChange", "ngModel", "value"], ["class", "icon-button mr-10 pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "icon-button-warning mr-10 pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-10", "pointer", 3, "click", "icon", "matTooltip"], [1, "icon-button-warning", "mr-10", "pointer", 3, "click", "icon", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["mat-table", "", "matSort", "", 1, "backTableForm", "c-b-10", 3, "dataSource"], ["matColumnDef", "countryCode"], ["matColumnDef", "extension"], ["matColumnDef", "phoneNumber"], ["class", "icon-button pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["matColumnDef", "country"], ["matColumnDef", "state"], ["matColumnDef", "city"], ["matColumnDef", "district"], ["matColumnDef", "zipCode"], ["matColumnDef", "addressLine1"], ["matColumnDef", "addressLine2"], ["matColumnDef", "addressType"], ["appearance", "outline", "style", "width: 160px; text-align:\n                        center; margin-top:25px", 4, "ngIf"], ["appearance", "outline", 2, "width", "160px", "text-align", "center", "margin-top", "25px"], [1, "w-100", 3, "ngModelChange", "value", "ngModel"], ["appearance", "outline", "style", "width: 160px; text-align:\n                            center; margin-top:25px", 4, "ngIf"], ["matTooltipPosition", "below", 1, "mr-20", "pointer", "deleteImg", 3, "click", "icon", "matTooltip"], ["src", "./assets/img/sin_imagen.jpg", 1, "mr-a", "whidthImage2", "mt-3"], [1, "whidthImage2", "mr-a", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "w-100", "mt-10"], ["onclick", "document.getElementById('getFile').click()", 1, "inputFile"], ["matSuffix", "", 1, "icon-pattern-required", "mr-5", 3, "icon", "matTooltip"], ["id", "getFile", "type", "file", "accept", "image/png, image/jpeg", 1, "inputFile", 2, "display", "none", 3, "change"]],
      template: function CompaniesModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, CompaniesModalComponent_mat_card_title_3_Template, 2, 1, "mat-card-title", 6)(4, CompaniesModalComponent_mat_card_title_4_Template, 2, 1, "mat-card-title", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 7)(6, "div", 8)(7, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.dialogRef.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, CompaniesModalComponent_div_9_Template, 3, 3, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 11)(12, "div", 12)(13, "mat-form-field", 13)(14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "mat-form-field", 13)(19, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "mat-form-field", 13)(24, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " RFC/ITIN ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "mat-form-field", 13)(29, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](31, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "mat-form-field", 13)(34, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "mat-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, CompaniesModalComponent_mat_option_37_Template, 3, 3, "mat-option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, CompaniesModalComponent_div_39_Template, 7, 4, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "mat-card-title", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "mat-card-title", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 21)(45, "mat-form-field", 22)(46, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "input", 23, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "mat-form-field", 13)(51, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](53, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "div", 24)(56, "fa-icon", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_Template_fa_icon_click_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.add(1));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](57, CompaniesModalComponent_mat_card_title_57_Template, 2, 1, "mat-card-title", 26)(58, CompaniesModalComponent_div_58_Template, 14, 3, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "mat-card-title", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "mat-card-title", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "div", 21)(64, "mat-form-field", 13)(65, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](67, "input", 23, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "mat-form-field", 13)(70, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](72, "input", 23, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "mat-form-field", 13)(75, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](77, "input", 23, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "mat-form-field", 13)(80, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](82, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "div", 24)(85, "fa-icon", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_Template_fa_icon_click_85_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.add(2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](86, CompaniesModalComponent_mat_card_title_86_Template, 2, 1, "mat-card-title", 26)(87, CompaniesModalComponent_div_87_Template, 20, 3, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "mat-card-title", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "mat-card-title", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "div", 21)(93, "mat-form-field", 13)(94, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](95);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "mat-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](97, CompaniesModalComponent_mat_option_97_Template, 3, 2, "mat-option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "mat-form-field", 13)(99, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](101, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "mat-form-field", 22)(104, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](105);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](106, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "div", 12)(109, "mat-form-field", 13)(110, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](112, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "mat-form-field", 13)(115, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](117, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "mat-form-field", 22)(120, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](121);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](122, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "div", 12)(125, "mat-form-field", 13)(126, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](127);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](128, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "mat-form-field", 13)(131, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](132);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](133, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "mat-form-field", 22)(136, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](137);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "mat-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](139, CompaniesModalComponent_mat_option_139_Template, 3, 2, "mat-option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "div", 29)(141, "fa-icon", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CompaniesModalComponent_Template_fa_icon_click_141_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.add(3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](142, CompaniesModalComponent_mat_card_title_142_Template, 2, 1, "mat-card-title", 26)(143, CompaniesModalComponent_div_143_Template, 35, 3, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "mat-card-title", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "mat-card-title", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](147);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](148, CompaniesModalComponent_fa_icon_148_Template, 1, 2, "fa-icon", 31)(149, CompaniesModalComponent_img_149_Template, 1, 0, "img", 32)(150, CompaniesModalComponent_img_150_Template, 1, 1, "img", 33)(151, CompaniesModalComponent_div_151_Template, 7, 4, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isNew || !ctx.isNew && ctx.permissionsGuard.Permission("UpdateCompany"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](110, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Key : ctx.en.Key, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.key)("maxlength", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](113, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Name : ctx.en.Name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.name)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](116, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.tax)("maxlength", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](119, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.TaxName : ctx.en.TaxName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.taxName)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](122, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.TaxSection : ctx.en.TaxSection, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.taxSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.catalogTaxSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](125, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Emails : ctx.en.Emails, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddNewEmail : ctx.en.AddNewEmail, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.NewEmail : ctx.en.NewEmail, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.email)("maxlength", 100)("pattern", ctx.patternMail);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](128, _c3, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Notes : ctx.en.Notes, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.notes)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Add : ctx.en.Add);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.faAdd);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.emails.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.emails.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.PhoneNumbers : ctx.en.PhoneNumbers, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddNewPhohe : ctx.en.AddNewPhohe, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](131, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.NewNumber : ctx.en.NewNumber, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.phoneNumber)("maxlength", 15)("pattern", ctx.patternNumbers);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](134, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.CountryCode : ctx.en.CountryCode, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.countryCode)("maxlength", 5)("pattern", ctx.patternNumbers);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](137, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Extension : ctx.en.Extension, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.extension)("maxlength", 5)("pattern", ctx.patternNumbers);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](140, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Notes : ctx.en.Notes, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.notesPhone)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Add : ctx.en.Add);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.faAdd);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.phones.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.phones.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Addresses : ctx.en.Addresses, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddNewAddress : ctx.en.AddNewAddress, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](143, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Country : ctx.en.Country, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.country);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.countriesCatalog);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](146, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.State : ctx.en.State, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.state)("maxlength", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.City : ctx.en.City, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.city)("maxlength", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](149, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.District : ctx.en.District, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.district)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](152, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.ZipCode : ctx.en.ZipCode, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.zipCode)("maxlength", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddressLine1 : ctx.en.AddressLine1, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.addressLine1)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](155, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddressLine2 : ctx.en.AddressLine2, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.addressLine2)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](158, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Notes : ctx.en.Notes, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.notesAddress)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddressType : ctx.en.AddressType, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.addressTypeControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.catalogAddressType);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Add : ctx.en.Add);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.faAdd);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.addresses.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.addresses.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Logo : ctx.en.Logo, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Logo : ctx.en.Logo, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.alreadyImage() && (ctx.isNew || !ctx.isNew && ctx.permissionsGuard.Permission("RemoveCustomerDocument") && ctx.permissionsGuard.Permission("UploadCustomerDocument")));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.alreadyImage());
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.alreadyImage());
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.permissionsGuard.Permission("UploadCustomerDocument"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortHeader, _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_32__.MatCardTitle, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_35__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_35__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_36__.DefaultClassDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 59249:
/*!***********************************************************!*\
  !*** ./src/app/catalogs/companies/companies.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompaniesComponent: () => (/* binding */ CompaniesComponent)
/* harmony export */ });
/* harmony import */ var _companies_modal_companies_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companies-modal/companies-modal.component */ 70013);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var _state_companies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/companies.actions */ 66587);
/* harmony import */ var _state_companies_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/companies.selector */ 65119);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);



























const _c0 = () => [25, 50, 100];
function CompaniesComponent_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompaniesComponent_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx_r2.lan == "es" ? ctx_r2.es.AddCompany : ctx_r2.en.AddCompany, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.FaPlus);
  }
}
function CompaniesComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Key : ctx_r2.en.Key, " ");
  }
}
function CompaniesComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r4.key, " ");
  }
}
function CompaniesComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Name : ctx_r2.en.Name, " ");
  }
}
function CompaniesComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r5.name);
  }
}
function CompaniesComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Logo : ctx_r2.en.Logo, " ");
  }
}
function CompaniesComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r6.logo, " ");
  }
}
function CompaniesComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Status : ctx_r2.en.Status, " ");
  }
}
function CompaniesComponent_td_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Active : ctx_r2.en.Active, " ");
  }
}
function CompaniesComponent_td_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Inactive : ctx_r2.en.Inactive, " ");
  }
}
function CompaniesComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CompaniesComponent_td_27_span_1_Template, 2, 1, "span", 25)(2, CompaniesComponent_td_27_span_2_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r7.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r7.status == false);
  }
}
function CompaniesComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Actions : ctx_r2.en.Actions, " ");
  }
}
function CompaniesComponent_td_30_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompaniesComponent_td_30_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.edit(element_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.EditCompany : ctx_r2.en.EditCompany, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faEdit);
  }
}
function CompaniesComponent_td_30_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompaniesComponent_td_30_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.delete(element_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.DeleteCompany : ctx_r2.en.DeleteCompany, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faTrashAlt);
  }
}
function CompaniesComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CompaniesComponent_td_30_fa_icon_2_Template, 1, 3, "fa-icon", 27)(3, CompaniesComponent_td_30_fa_icon_3_Template, 1, 3, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("GetCompanyById"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("DeleteCompany"));
  }
}
function CompaniesComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 31);
  }
}
function CompaniesComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 32);
  }
}
function CompaniesComponent_mat_paginator_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-paginator", 33);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class CompaniesComponent {
  constructor(
  // private usersService: UsersService,
  snackBar, dialog, languageService, _paginator, storeDispatch, storeApi, permissionsGuard) {
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.languageService = languageService;
    this._paginator = _paginator;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.permissionsGuard = permissionsGuard;
    this.FaPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPlus;
    this.FaRedoAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faRedoAlt;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTrashAlt;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faEdit;
    this.showPaginator = false;
    this.type = [];
    this.countriesCatalog = [];
    this.list = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.filterList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en;
    this.displayedColumns = ['key', 'name',
    // 'logo',
    'status', 'actions'];
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.companiesListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
      this.showPaginator = false;
      if (lan == "es") {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Registros por pagina:";
          this.showPaginator = true;
        }, 100);
      } else {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Items per page:";
          this.showPaginator = true;
        }, 100);
      }
    });
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.companiesListSubs.unsubscribe();
  }
  ngOnInit() {
    this.getList();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    }, 500);
  }
  getList() {
    this.companiesListSubs = this.storeApi.select(_state_companies_selector__WEBPACK_IMPORTED_MODULE_3__.selectCompaniesList).subscribe(data => {
      this.list.data = data.companiesList;
      if (this.list.data.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_companies_actions__WEBPACK_IMPORTED_MODULE_2__.loadCompaniesList)());
        this.companiesListSubs.unsubscribe();
      }
    });
  }
  add() {
    const dialogRef = this.dialog.open(_companies_modal_companies_modal_component__WEBPACK_IMPORTED_MODULE_0__.CompaniesModalComponent, {
      width: '80vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result) {
        this.getList();
      }
    });
  }
  delete(item) {
    this.storeDispatch.dispatch((0,_state_companies_actions__WEBPACK_IMPORTED_MODULE_2__.loadActionDeleteCompany)({
      loading: true,
      company: item
    }));
  }
  edit(item) {
    const dialogRef = this.dialog.open(_companies_modal_companies_modal_component__WEBPACK_IMPORTED_MODULE_0__.CompaniesModalComponent, {
      width: '80vw',
      data: {
        item
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.success) {
        setTimeout(() => {
          // this.list.data.push(result.user);
          this.getList();
        }, 500);
      }
    });
  }
  reload() {
    this.storeDispatch.dispatch((0,_state_companies_actions__WEBPACK_IMPORTED_MODULE_2__.loadCompaniesList)());
  }
  applyFilter(filterValue) {
    this.list.filter = filterValue.value.trim().toLowerCase();
    if (this.list.paginator) {
      this.list.paginator.firstPage();
    }
    if (this.list.filter != null) {
      this.filterList.data = this.list.filteredData;
    }
  }
  static {
    this.ɵfac = function CompaniesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: CompaniesComponent,
      selectors: [["app-companies"]],
      viewQuery: function CompaniesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 34,
      vars: 12,
      consts: [["table", ""], [1, "containerComponent"], [1, "containerComponent__custom"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "ml-0", "containerComponent__custom-title", 2, "margin-right", "auto"], ["class", "icon-button mr-20 mt-10", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-20", "mt-10", 3, "click", "icon", "matTooltip"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", 1, "forceCenter", 3, "keyup", "placeholder"], ["matSuffix", ""], [1, "containerComponent__table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "key"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "logo"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["src", "../../assets/img/logoTomas.jpg", "width", "auto", "height", "70", 1, "m-10"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["class", "icon-button\n                            mr-10 pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "icon-button-warning pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-10", "pointer", 3, "click", "icon", "matTooltip"], [1, "icon-button-warning", "pointer", 3, "click", "icon", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions"]],
      template: function CompaniesComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CompaniesComponent_fa_icon_5_Template, 1, 3, "fa-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "fa-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompaniesComponent_Template_fa_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.reload());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 7)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function CompaniesComponent_Template_input_keyup_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.applyFilter($event.target));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "table", 11, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CompaniesComponent_th_17_Template, 2, 1, "th", 13)(18, CompaniesComponent_td_18_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, CompaniesComponent_th_20_Template, 2, 1, "th", 13)(21, CompaniesComponent_td_21_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, CompaniesComponent_th_23_Template, 2, 1, "th", 13)(24, CompaniesComponent_td_24_Template, 3, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, CompaniesComponent_th_26_Template, 2, 1, "th", 13)(27, CompaniesComponent_td_27_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](28, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, CompaniesComponent_th_29_Template, 2, 1, "th", 13)(30, CompaniesComponent_td_30_Template, 4, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CompaniesComponent_tr_31_Template, 1, 0, "tr", 19)(32, CompaniesComponent_tr_32_Template, 1, 0, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, CompaniesComponent_mat_paginator_33_Template, 1, 2, "mat-paginator", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Companies : ctx.en.Companies, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.permissionsGuard.Permission("CreateCompany"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx.lan == "es" ? ctx.es.Reload : ctx.en.Reload, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.FaRedoAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.list);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showPaginator);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 55454:
/*!**********************************************************************************!*\
  !*** ./src/app/catalogs/components/component-modal/component-modal.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentModalComponent: () => (/* binding */ ComponentModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 96697);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _state_components_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/components.selector */ 40417);
/* harmony import */ var _state_components_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/components.actions */ 31249);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);
























function ComponentModalComponent_mat_card_title_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-title", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddComponent : ctx_r1.en.AddComponent, " ");
  }
}
function ComponentModalComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-title", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.EditComponent : ctx_r1.en.EditComponent, " ");
  }
}
function ComponentModalComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ComponentModalComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                    ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, " ");
  }
}
function ComponentModalComponent_div_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Active : ctx_r1.en.Active, " ");
  }
}
function ComponentModalComponent_div_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Inactive : ctx_r1.en.Inactive, " ");
  }
}
function ComponentModalComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 19)(4, "mat-slide-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ComponentModalComponent_div_20_span_5_Template, 2, 1, "span", 21)(6, ComponentModalComponent_div_20_span_6_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.lan == "es" ? ctx_r1.es.Status : ctx_r1.en.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.status.value == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.status.value == false);
  }
}
class ComponentModalComponent {
  constructor(dialogRef, snackBar, languageService, storeDispatch, actions$, storeApi, data, permissionsGuard) {
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.languageService = languageService;
    this.storeDispatch = storeDispatch;
    this.actions$ = actions$;
    this.storeApi = storeApi;
    this.data = data;
    this.permissionsGuard = permissionsGuard;
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faClose;
    this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.isNew = true;
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.updateComponentSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.componentByIdSubs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.itemData = data;
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.isNew = false;
    }
  }
  ngOnInit() {
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.getById(this.itemData.item);
    }
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.componentByIdSubs.unsubscribe();
  }
  closeAndCancelModal() {
    this.dialogRef.close();
  }
  save() {
    if (this.isNew) {
      let component = {
        name: this.name.value
      };
      this.storeDispatch.dispatch((0,_state_components_actions__WEBPACK_IMPORTED_MODULE_2__.loadActionAddComponent)({
        loading: true,
        component: component
      }));
    } else {
      let component = {
        id: this.itemData.id,
        name: this.name.value,
        status: this.status.value
      };
      this.storeDispatch.dispatch((0,_state_components_actions__WEBPACK_IMPORTED_MODULE_2__.loadActionUpdateComponent)({
        loading: true,
        component: component
      }));
      this.updateComponentSubscription = this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)('[Update Component] Finish UpdateComponent')).subscribe(result => {
        this.getById(result.material);
        this.updateComponentSubscription.unsubscribe();
      });
    }
  }
  getById(component) {
    this.storeDispatch.dispatch((0,_state_components_actions__WEBPACK_IMPORTED_MODULE_2__.loadActionComponentById)({
      loading: true,
      component: component
    }));
    this.componentByIdSubs = this.storeApi.select(_state_components_selector__WEBPACK_IMPORTED_MODULE_1__.selectComponentById).subscribe(component => {
      this.patchValues(component);
      this.componentByIdSubs.unsubscribe();
    }, () => {
      console.log("Error get biId");
    });
  }
  patchValues(itemData) {
    this.itemData = itemData;
    this.name.patchValue(itemData.name);
    this.status.patchValue(itemData.status);
  }
  static {
    this.ɵfac = function ComponentModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ComponentModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_4__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ComponentModalComponent,
      selectors: [["app-component-modal"]],
      decls: 21,
      vars: 9,
      consts: [["input", ""], [1, "m-card", "p-20", "overflowA", 2, "max-height", "80vh"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px", "width", "100%"], [1, "w-100"], ["class", "containerComponent__custom-title", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end end", 1, "mt-20", "w-100"], [1, "mr-10", "mb-10"], ["color", "warn", 1, "btn-l-warning", 3, "click", "matTooltip"], [1, "mb-10"], ["class", "btn-l-100b", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "mt-20", "mb-10"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "w-100"], ["appearance", "outline", 1, "w-100", "mr-20", "mb-10"], ["matInput", "", 3, "formControl", "maxLength"], ["fxLayout", "row", "fxLayoutAlign", "start start"], ["fxLayout", "column", "fxLayoutAlign", "center center", "class", "mb-10", 4, "ngIf"], [1, "containerComponent__custom-title"], ["color", "primary", 1, "btn-l-100b", 3, "click", "matTooltip"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-10"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "primary", 1, "mt-10", 3, "formControl"], [4, "ngIf"]],
      template: function ComponentModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ComponentModalComponent_mat_card_title_3_Template, 2, 1, "mat-card-title", 4)(4, ComponentModalComponent_mat_card_title_4_Template, 2, 1, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ComponentModalComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeAndCancelModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ComponentModalComponent_button_10_Template, 2, 3, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 13, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ComponentModalComponent_div_20_Template, 7, 4, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isNew || !ctx.isNew && ctx.permissionsGuard.Permission("UpdateComponent"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Name : ctx.en.Name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.name)("maxLength", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isNew);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__.MatSlideToggle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 1847:
/*!*************************************************************!*\
  !*** ./src/app/catalogs/components/components.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsComponent: () => (/* binding */ ComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var _component_modal_component_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-modal/component-modal.component */ 55454);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _state_components_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/components.selector */ 40417);
/* harmony import */ var _state_components_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/components.actions */ 31249);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);



























const _c0 = () => [25, 50, 100];
function ComponentsComponent_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ComponentsComponent_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx_r2.lan == "es" ? ctx_r2.es.AddComponent : ctx_r2.en.AddComponent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.FaPlus);
  }
}
function ComponentsComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Name : ctx_r2.en.Name, " ");
  }
}
function ComponentsComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r4.name);
  }
}
function ComponentsComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Status : ctx_r2.en.Status, " ");
  }
}
function ComponentsComponent_td_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Active : ctx_r2.en.Active, " ");
  }
}
function ComponentsComponent_td_21_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Inactive : ctx_r2.en.Inactive, " ");
  }
}
function ComponentsComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ComponentsComponent_td_21_span_1_Template, 2, 1, "span", 22)(2, ComponentsComponent_td_21_span_2_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r5.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r5.status == false);
  }
}
function ComponentsComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Actions : ctx_r2.en.Actions, " ");
  }
}
function ComponentsComponent_td_24_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ComponentsComponent_td_24_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.edit(element_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.EditComponent : ctx_r2.en.EditComponent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faEdit);
  }
}
function ComponentsComponent_td_24_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ComponentsComponent_td_24_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.delete(element_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.DeleteComponent : ctx_r2.en.DeleteComponent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faTrashAlt);
  }
}
function ComponentsComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ComponentsComponent_td_24_fa_icon_2_Template, 1, 3, "fa-icon", 24)(3, ComponentsComponent_td_24_fa_icon_3_Template, 1, 3, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("GetComponentById"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("DeleteComponent"));
  }
}
function ComponentsComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 28);
  }
}
function ComponentsComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 29);
  }
}
function ComponentsComponent_mat_paginator_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-paginator", 30);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class ComponentsComponent {
  constructor(
  // private usersService: UsersService,
  snackBar, dialog, languageService, _paginator, storeDispatch, storeApi, permissionsGuard) {
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.languageService = languageService;
    this._paginator = _paginator;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.permissionsGuard = permissionsGuard;
    this.FaPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPlus;
    this.FaRedoAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faRedoAlt;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTrashAlt;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faEdit;
    this.showPaginator = false;
    this.type = [];
    this.list = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.filterList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en;
    this.displayedColumns = ['name',
    // 'description',
    // 'isAntique',
    'status', 'actions'];
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.componentsListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
      this.showPaginator = false;
      if (lan == "es") {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Registros por pagina:";
          this.showPaginator = true;
        }, 100);
      } else {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Items per page:";
          this.showPaginator = true;
        }, 100);
      }
    });
  }
  ngOnInit() {
    this.getList();
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.componentsListSubs.unsubscribe();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    }, 500);
  }
  getList() {
    this.componentsListSubs = this.storeApi.select(_state_components_selector__WEBPACK_IMPORTED_MODULE_2__.selectComponentsList).subscribe(data => {
      this.list.data = data.componentsList;
      if (data.componentsList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_components_actions__WEBPACK_IMPORTED_MODULE_3__.loadComponentsList)());
        this.componentsListSubs.unsubscribe();
      }
    });
  }
  refreshList() {
    this.storeDispatch.dispatch((0,_state_components_actions__WEBPACK_IMPORTED_MODULE_3__.loadComponentsList)());
  }
  add() {
    const dialogRef = this.dialog.open(_component_modal_component_modal_component__WEBPACK_IMPORTED_MODULE_0__.ComponentModalComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result) {
        this.getList();
      }
    });
  }
  delete(item) {
    this.storeDispatch.dispatch((0,_state_components_actions__WEBPACK_IMPORTED_MODULE_3__.loadActionDeleteComponent)({
      loading: true,
      component: item
    }));
  }
  edit(item) {
    const dialogRef = this.dialog.open(_component_modal_component_modal_component__WEBPACK_IMPORTED_MODULE_0__.ComponentModalComponent, {
      width: '500px',
      data: {
        item
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.success) {
        setTimeout(() => {
          this.getList();
        }, 500);
      }
    });
  }
  applyFilter(filterValue) {
    this.list.filter = filterValue.value.trim().toLowerCase();
    if (this.list.paginator) {
      this.list.paginator.firstPage();
    }
    if (this.list.filter != null) {
      this.filterList.data = this.list.filteredData;
    }
  }
  static {
    this.ɵfac = function ComponentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ComponentsComponent,
      selectors: [["app-components"]],
      viewQuery: function ComponentsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 28,
      vars: 12,
      consts: [["table", ""], [1, "containerComponent"], [1, "containerComponent__custom"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "ml-0", "containerComponent__custom-title", 2, "margin-right", "auto"], ["class", "icon-button mr-20 mt-10", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-20", "mt-10", 3, "click", "icon", "matTooltip"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", 1, "forceCenter", 3, "keyup", "placeholder"], ["matSuffix", ""], [1, "containerComponent__table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["class", "icon-button\n                            mr-10 pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "icon-button-warning\n                            pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-10", "pointer", 3, "click", "icon", "matTooltip"], [1, "icon-button-warning", "pointer", 3, "click", "icon", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions"]],
      template: function ComponentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ComponentsComponent_fa_icon_5_Template, 1, 3, "fa-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "fa-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ComponentsComponent_Template_fa_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.refreshList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 7)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ComponentsComponent_Template_input_keyup_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.applyFilter($event.target));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "table", 11, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ComponentsComponent_th_17_Template, 2, 1, "th", 13)(18, ComponentsComponent_td_18_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ComponentsComponent_th_20_Template, 2, 1, "th", 13)(21, ComponentsComponent_td_21_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ComponentsComponent_th_23_Template, 2, 1, "th", 13)(24, ComponentsComponent_td_24_Template, 4, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ComponentsComponent_tr_25_Template, 1, 0, "tr", 17)(26, ComponentsComponent_tr_26_Template, 1, 0, "tr", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, ComponentsComponent_mat_paginator_27_Template, 1, 2, "mat-paginator", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Components : ctx.en.Components, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.permissionsGuard.Permission("CreateComponent"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx.lan == "es" ? ctx.es.Reload : ctx.en.Reload, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.FaRedoAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.list);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showPaginator);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 37737:
/*!*******************************************************************************!*\
  !*** ./src/app/catalogs/customers/customer-modal/customer-modal.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerModalComponent: () => (/* binding */ CustomerModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 96697);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _state_customers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/customers.actions */ 10883);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var _state_customers_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/customers.selector */ 32583);
/* harmony import */ var src_app_shared_state_shared_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/state/shared.actions */ 99578);
/* harmony import */ var src_app_shared_state_shared_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/state/shared.selector */ 64612);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! xlsx */ 62288);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ 99327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 82798);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout/extended */ 16038);





































const _c0 = ["inputFile"];
const _c1 = (a0, a1) => ({
  "mr-10 ml-10": a0,
  "": a1
});
const _c2 = (a0, a1) => ({
  "mr-10": a0,
  "": a1
});
const _c3 = a0 => ({
  edit: a0
});
function CustomerModalComponent_mat_card_title_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddCustomer : ctx_r1.en.AddCustomer, " ");
  }
}
function CustomerModalComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.EditCustomer : ctx_r1.en.EditCustomer, " ");
  }
}
function CustomerModalComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.save(4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                    ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, " ");
  }
}
function CustomerModalComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37)(1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r4.name);
  }
}
function CustomerModalComponent_mat_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37)(1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", option_r5.key, " ", option_r5.name, "");
  }
}
function CustomerModalComponent_div_45_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Active : ctx_r1.en.Active, " ");
  }
}
function CustomerModalComponent_div_45_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Inactive : ctx_r1.en.Inactive, " ");
  }
}
function CustomerModalComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 41)(5, "mat-slide-toggle", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CustomerModalComponent_div_45_span_6_Template, 2, 1, "span", 43)(7, CustomerModalComponent_div_45_span_7_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.lan == "es" ? ctx_r1.es.Status : ctx_r1.en.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.status.value == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.status.value == false);
  }
}
function CustomerModalComponent_mat_card_title_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ListEmailsAdded : ctx_r1.en.ListEmailsAdded, " ");
  }
}
function CustomerModalComponent_div_64_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Email : ctx_r1.en.Email, " ");
  }
}
function CustomerModalComponent_div_64_td_5_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_64_td_5_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.emailEdit, $event) || (ctx_r1.emailEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.emailEdit);
  }
}
function CustomerModalComponent_div_64_td_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r7.email);
  }
}
function CustomerModalComponent_div_64_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_64_td_5_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_64_td_5_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r7.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r7.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r7.editActive);
  }
}
function CustomerModalComponent_div_64_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Notes : ctx_r1.en.Notes, " ");
  }
}
function CustomerModalComponent_div_64_td_8_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_64_td_8_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.notesEdit, $event) || (ctx_r1.notesEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.notesEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notesEdit);
  }
}
function CustomerModalComponent_div_64_td_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r9.notes);
  }
}
function CustomerModalComponent_div_64_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_64_td_8_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_64_td_8_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r9.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r9.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r9.editActive);
  }
}
function CustomerModalComponent_div_64_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Actions : ctx_r1.en.Actions, " ");
  }
}
function CustomerModalComponent_div_64_td_11_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_64_td_11_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r1.removeEditList(1, element_r11.id);
      element_r11.editActive = true;
      ctx_r1.emailEdit = element_r11.email;
      ctx_r1.notesEdit = element_r11.notes;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.idMailSelected = element_r11.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.EditEmail : ctx_r1.en.EditEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faEdit);
  }
}
function CustomerModalComponent_div_64_td_11_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_64_td_11_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      element_r11.editActive = false;
      ctx_r1.keyEdit = "";
      ctx_r1.notesEdit = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.idMailSelected = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Cancel : ctx_r1.en.Cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faClose);
  }
}
function CustomerModalComponent_div_64_td_11_fa_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_64_td_11_fa_icon_4_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.save(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faSave);
  }
}
function CustomerModalComponent_div_64_td_11_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_64_td_11_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.delete(element_r11, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.DeleteEmail : ctx_r1.en.DeleteEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faTrashAlt);
  }
}
function CustomerModalComponent_div_64_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CustomerModalComponent_div_64_td_11_fa_icon_2_Template, 1, 2, "fa-icon", 57)(3, CustomerModalComponent_div_64_td_11_fa_icon_3_Template, 1, 2, "fa-icon", 58)(4, CustomerModalComponent_div_64_td_11_fa_icon_4_Template, 1, 2, "fa-icon", 57)(5, CustomerModalComponent_div_64_td_11_fa_icon_5_Template, 1, 2, "fa-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c3, element_r11.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r11.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r11.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r11.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r11.editActive);
  }
}
function CustomerModalComponent_div_64_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 61);
  }
}
function CustomerModalComponent_div_64_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 62);
  }
}
function CustomerModalComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 44)(1, "table", 45, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](3, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CustomerModalComponent_div_64_th_4_Template, 2, 1, "th", 47)(5, CustomerModalComponent_div_64_td_5_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](6, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CustomerModalComponent_div_64_th_7_Template, 2, 1, "th", 47)(8, CustomerModalComponent_div_64_td_8_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](9, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, CustomerModalComponent_div_64_th_10_Template, 2, 1, "th", 47)(11, CustomerModalComponent_div_64_td_11_Template, 6, 7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, CustomerModalComponent_div_64_tr_12_Template, 1, 0, "tr", 51)(13, CustomerModalComponent_div_64_tr_13_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r1.emails);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns1);
  }
}
function CustomerModalComponent_mat_card_title_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ListPhonesAdded : ctx_r1.en.ListPhonesAdded, " ");
  }
}
function CustomerModalComponent_div_93_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.CountryCode : ctx_r1.en.CountryCode, " ");
  }
}
function CustomerModalComponent_div_93_td_5_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_93_td_5_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.countryCodeEdit, $event) || (ctx_r1.countryCodeEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.countryCodeEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.countryCodeEdit);
  }
}
function CustomerModalComponent_div_93_td_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r16.countryCode);
  }
}
function CustomerModalComponent_div_93_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_93_td_5_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_93_td_5_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r16.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r16.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r16.editActive);
  }
}
function CustomerModalComponent_div_93_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Extension : ctx_r1.en.Extension, " ");
  }
}
function CustomerModalComponent_div_93_td_8_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_93_td_8_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.extensionEdit, $event) || (ctx_r1.extensionEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.extensionEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.extensionEdit);
  }
}
function CustomerModalComponent_div_93_td_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r18.extension);
  }
}
function CustomerModalComponent_div_93_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_93_td_8_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_93_td_8_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r18.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r18.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r18.editActive);
  }
}
function CustomerModalComponent_div_93_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.PhoneNumber : ctx_r1.en.PhoneNumber, " ");
  }
}
function CustomerModalComponent_div_93_td_11_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_93_td_11_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumberEdit, $event) || (ctx_r1.phoneNumberEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.phoneNumberEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumberEdit);
  }
}
function CustomerModalComponent_div_93_td_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r20.phoneNumber);
  }
}
function CustomerModalComponent_div_93_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_93_td_11_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_93_td_11_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r20.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r20.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r20.editActive);
  }
}
function CustomerModalComponent_div_93_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Notes : ctx_r1.en.Notes, " ");
  }
}
function CustomerModalComponent_div_93_td_14_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_93_td_14_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.notesPhoneEdit, $event) || (ctx_r1.notesPhoneEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.notesPhoneEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notesPhoneEdit);
  }
}
function CustomerModalComponent_div_93_td_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r22.notes);
  }
}
function CustomerModalComponent_div_93_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_93_td_14_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_93_td_14_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r22.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r22.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r22.editActive);
  }
}
function CustomerModalComponent_div_93_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Actions : ctx_r1.en.Actions, " ");
  }
}
function CustomerModalComponent_div_93_td_17_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_93_td_17_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);
      const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r1.removeEditList(2, element_r24.id);
      element_r24.editActive = true;
      ctx_r1.countryCodeEdit = element_r24.countryCode;
      ctx_r1.notesPhoneEdit = element_r24.notes;
      ctx_r1.extensionEdit = element_r24.extension;
      ctx_r1.phoneNumberEdit = element_r24.phoneNumber;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.idPhoneSelected = element_r24.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.EditPhone : ctx_r1.en.EditPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faEdit);
  }
}
function CustomerModalComponent_div_93_td_17_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_93_td_17_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      element_r24.editActive = false;
      ctx_r1.countryCodeEdit = "";
      ctx_r1.notesPhoneEdit = "";
      ctx_r1.extensionEdit = "";
      ctx_r1.phoneNumberEdit = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.idPhoneSelected = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Cancel : ctx_r1.en.Cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faClose);
  }
}
function CustomerModalComponent_div_93_td_17_fa_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_93_td_17_fa_icon_4_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.delete(element_r24, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.DeletePhone : ctx_r1.en.DeletePhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faTrashAlt);
  }
}
function CustomerModalComponent_div_93_td_17_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_93_td_17_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.save(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faSave);
  }
}
function CustomerModalComponent_div_93_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CustomerModalComponent_div_93_td_17_fa_icon_2_Template, 1, 2, "fa-icon", 57)(3, CustomerModalComponent_div_93_td_17_fa_icon_3_Template, 1, 2, "fa-icon", 58)(4, CustomerModalComponent_div_93_td_17_fa_icon_4_Template, 1, 2, "fa-icon", 58)(5, CustomerModalComponent_div_93_td_17_fa_icon_5_Template, 1, 2, "fa-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c3, element_r24.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r24.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r24.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r24.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r24.editActive);
  }
}
function CustomerModalComponent_div_93_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 61);
  }
}
function CustomerModalComponent_div_93_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 62);
  }
}
function CustomerModalComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 44)(1, "table", 63, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](3, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CustomerModalComponent_div_93_th_4_Template, 2, 1, "th", 47)(5, CustomerModalComponent_div_93_td_5_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](6, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CustomerModalComponent_div_93_th_7_Template, 2, 1, "th", 47)(8, CustomerModalComponent_div_93_td_8_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](9, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, CustomerModalComponent_div_93_th_10_Template, 2, 1, "th", 47)(11, CustomerModalComponent_div_93_td_11_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](12, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, CustomerModalComponent_div_93_th_13_Template, 2, 1, "th", 47)(14, CustomerModalComponent_div_93_td_14_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](15, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, CustomerModalComponent_div_93_th_16_Template, 2, 1, "th", 47)(17, CustomerModalComponent_div_93_td_17_Template, 6, 7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, CustomerModalComponent_div_93_tr_18_Template, 1, 0, "tr", 51)(19, CustomerModalComponent_div_93_tr_19_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r1.phones);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns2);
  }
}
function CustomerModalComponent_mat_option_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37)(1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r28.ISOAlpha3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r28.Nombre);
  }
}
function CustomerModalComponent_mat_option_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37)(1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r29.name);
  }
}
function CustomerModalComponent_mat_card_title_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ListAddressesAdded : ctx_r1.en.ListAddressesAdded, " ");
  }
}
function CustomerModalComponent_div_149_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Country : ctx_r1.en.Country, " ");
  }
}
function CustomerModalComponent_div_149_td_5_mat_form_field_1_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37)(1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r31.ISOAlpha3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r31.Nombre);
  }
}
function CustomerModalComponent_div_149_td_5_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 77)(1, "mat-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_149_td_5_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.countryEdit, $event) || (ctx_r1.countryEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CustomerModalComponent_div_149_td_5_mat_form_field_1_mat_option_2_Template, 3, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", element_r32.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.countryEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.countriesCatalog);
  }
}
function CustomerModalComponent_div_149_td_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r32.countryName);
  }
}
function CustomerModalComponent_div_149_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_149_td_5_mat_form_field_1_Template, 3, 3, "mat-form-field", 76)(2, CustomerModalComponent_div_149_td_5_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r32.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r32.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r32.editActive);
  }
}
function CustomerModalComponent_div_149_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.State : ctx_r1.en.State, " ");
  }
}
function CustomerModalComponent_div_149_td_8_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_149_td_8_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.stateEdit, $event) || (ctx_r1.stateEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateEdit);
  }
}
function CustomerModalComponent_div_149_td_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r34.state);
  }
}
function CustomerModalComponent_div_149_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_149_td_8_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_149_td_8_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r34.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r34.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r34.editActive);
  }
}
function CustomerModalComponent_div_149_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.City : ctx_r1.en.City, " ");
  }
}
function CustomerModalComponent_div_149_td_11_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_149_td_11_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.cityEdit, $event) || (ctx_r1.cityEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityEdit);
  }
}
function CustomerModalComponent_div_149_td_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r36.city);
  }
}
function CustomerModalComponent_div_149_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_149_td_11_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_149_td_11_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r36.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r36.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r36.editActive);
  }
}
function CustomerModalComponent_div_149_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.District : ctx_r1.en.District, " ");
  }
}
function CustomerModalComponent_div_149_td_14_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_149_td_14_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.districtEdit, $event) || (ctx_r1.districtEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.districtEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.districtEdit);
  }
}
function CustomerModalComponent_div_149_td_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r38.district);
  }
}
function CustomerModalComponent_div_149_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_149_td_14_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_149_td_14_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r38.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r38.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r38.editActive);
  }
}
function CustomerModalComponent_div_149_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ZipCode : ctx_r1.en.ZipCode, " ");
  }
}
function CustomerModalComponent_div_149_td_17_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_149_td_17_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.zipCodeEdit, $event) || (ctx_r1.zipCodeEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.zipCodeEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.zipCodeEdit);
  }
}
function CustomerModalComponent_div_149_td_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r40.zipCode);
  }
}
function CustomerModalComponent_div_149_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_149_td_17_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_149_td_17_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r40.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r40.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r40.editActive);
  }
}
function CustomerModalComponent_div_149_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddressLine1 : ctx_r1.en.AddressLine1, " ");
  }
}
function CustomerModalComponent_div_149_td_20_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_149_td_20_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.addressLine1Edit, $event) || (ctx_r1.addressLine1Edit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressLine1Edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.addressLine1Edit);
  }
}
function CustomerModalComponent_div_149_td_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r42.addressLine1);
  }
}
function CustomerModalComponent_div_149_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_149_td_20_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_149_td_20_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r42.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r42.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r42.editActive);
  }
}
function CustomerModalComponent_div_149_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddressLine2 : ctx_r1.en.AddressLine2, " ");
  }
}
function CustomerModalComponent_div_149_td_23_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_149_td_23_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.addressLine2Edit, $event) || (ctx_r1.addressLine2Edit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressLine2Edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.addressLine2Edit);
  }
}
function CustomerModalComponent_div_149_td_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r44.addressLine2);
  }
}
function CustomerModalComponent_div_149_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_149_td_23_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_149_td_23_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r44.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r44.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r44.editActive);
  }
}
function CustomerModalComponent_div_149_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Notes : ctx_r1.en.Notes, " ");
  }
}
function CustomerModalComponent_div_149_td_26_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_149_td_26_input_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.notesAddressEdit, $event) || (ctx_r1.notesAddressEdit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r1.notesAddressEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notesAddressEdit);
  }
}
function CustomerModalComponent_div_149_td_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r46.notes);
  }
}
function CustomerModalComponent_div_149_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_149_td_26_input_1_Template, 1, 2, "input", 55)(2, CustomerModalComponent_div_149_td_26_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r46.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r46.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r46.editActive);
  }
}
function CustomerModalComponent_div_149_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddressType : ctx_r1.en.AddressType, " ");
  }
}
function CustomerModalComponent_div_149_td_29_mat_form_field_1_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37)(1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r48.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r48.name);
  }
}
function CustomerModalComponent_div_149_td_29_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 77)(1, "mat-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CustomerModalComponent_div_149_td_29_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.addressTypeId, $event) || (ctx_r1.addressTypeId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CustomerModalComponent_div_149_td_29_mat_form_field_1_mat_option_2_Template, 3, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", element_r49.addressTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.addressTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.catalogAddressType);
  }
}
function CustomerModalComponent_div_149_td_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r49.addressTypeName);
  }
}
function CustomerModalComponent_div_149_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerModalComponent_div_149_td_29_mat_form_field_1_Template, 3, 3, "mat-form-field", 79)(2, CustomerModalComponent_div_149_td_29_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, element_r49.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r49.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r49.editActive);
  }
}
function CustomerModalComponent_div_149_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Actions : ctx_r1.en.Actions, " ");
  }
}
function CustomerModalComponent_div_149_td_32_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_149_td_32_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const element_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r1.removeEditList(3, element_r51.id);
      element_r51.editActive = true;
      ctx_r1.countryEdit = element_r51.country;
      ctx_r1.stateEdit = element_r51.state;
      ctx_r1.cityEdit = element_r51.city;
      ctx_r1.districtEdit = element_r51.district;
      ctx_r1.zipCodeEdit = element_r51.zipCode;
      ctx_r1.addressLine1Edit = element_r51.addressLine1;
      ctx_r1.addressLine2Edit = element_r51.addressLine2;
      ctx_r1.notesAddressEdit = element_r51.notes;
      ctx_r1.idAddressSelected = element_r51.id;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.addressTypeId = element_r51.addressTypeId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.EditAddress : ctx_r1.en.EditAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faEdit);
  }
}
function CustomerModalComponent_div_149_td_32_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_149_td_32_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52);
      const element_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      element_r51.editActive = false;
      ctx_r1.countryEdit = "";
      ctx_r1.stateEdit = "";
      ctx_r1.cityEdit = "";
      ctx_r1.districtEdit = "";
      ctx_r1.zipCodeEdit = "";
      ctx_r1.addressLine1Edit = "";
      ctx_r1.addressLine2Edit = "";
      ctx_r1.notesAddressEdit = "";
      ctx_r1.idAddressSelected = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.addressTypeId = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Cancel : ctx_r1.en.Cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faClose);
  }
}
function CustomerModalComponent_div_149_td_32_fa_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_149_td_32_fa_icon_4_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53);
      const element_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.delete(element_r51, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.DeleteAddress : ctx_r1.en.DeleteAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faTrashAlt);
  }
}
function CustomerModalComponent_div_149_td_32_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_div_149_td_32_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.save(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faSave);
  }
}
function CustomerModalComponent_div_149_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CustomerModalComponent_div_149_td_32_fa_icon_2_Template, 1, 2, "fa-icon", 57)(3, CustomerModalComponent_div_149_td_32_fa_icon_3_Template, 1, 2, "fa-icon", 58)(4, CustomerModalComponent_div_149_td_32_fa_icon_4_Template, 1, 2, "fa-icon", 58)(5, CustomerModalComponent_div_149_td_32_fa_icon_5_Template, 1, 2, "fa-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c3, element_r51.editActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r51.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r51.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !element_r51.editActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r51.editActive);
  }
}
function CustomerModalComponent_div_149_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 61);
  }
}
function CustomerModalComponent_div_149_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 62);
  }
}
function CustomerModalComponent_div_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 44)(1, "table", 63, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](3, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CustomerModalComponent_div_149_th_4_Template, 2, 1, "th", 47)(5, CustomerModalComponent_div_149_td_5_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](6, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CustomerModalComponent_div_149_th_7_Template, 2, 1, "th", 47)(8, CustomerModalComponent_div_149_td_8_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](9, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, CustomerModalComponent_div_149_th_10_Template, 2, 1, "th", 47)(11, CustomerModalComponent_div_149_td_11_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](12, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, CustomerModalComponent_div_149_th_13_Template, 2, 1, "th", 47)(14, CustomerModalComponent_div_149_td_14_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](15, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, CustomerModalComponent_div_149_th_16_Template, 2, 1, "th", 47)(17, CustomerModalComponent_div_149_td_17_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](18, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, CustomerModalComponent_div_149_th_19_Template, 2, 1, "th", 47)(20, CustomerModalComponent_div_149_td_20_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](21, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, CustomerModalComponent_div_149_th_22_Template, 2, 1, "th", 47)(23, CustomerModalComponent_div_149_td_23_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](24, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, CustomerModalComponent_div_149_th_25_Template, 2, 1, "th", 47)(26, CustomerModalComponent_div_149_td_26_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](27, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, CustomerModalComponent_div_149_th_28_Template, 2, 1, "th", 47)(29, CustomerModalComponent_div_149_td_29_Template, 3, 5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](30, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, CustomerModalComponent_div_149_th_31_Template, 2, 1, "th", 47)(32, CustomerModalComponent_div_149_td_32_Template, 6, 7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, CustomerModalComponent_div_149_tr_33_Template, 1, 0, "tr", 51)(34, CustomerModalComponent_div_149_tr_34_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r1.addresses);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns3);
  }
}
function CustomerModalComponent_fa_icon_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_fa_icon_154_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r1.inputFileImage.nativeElement.value = "";
      ctx_r1.binaryImage = "";
      ctx_r1.imageEncodeBase64 = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.imageData = {
        url: "",
        id: ""
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Delete : ctx_r1.en.Delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faClose);
  }
}
function CustomerModalComponent_img_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 81);
  }
}
function CustomerModalComponent_img_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 82);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.imageEncodeBase64 || ctx_r1.imageData.url, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function CustomerModalComponent_div_157_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.SelectImage : ctx_r1.en.SelectImage, " ");
  }
}
function CustomerModalComponent_div_157_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ChangeImage : ctx_r1.en.ChangeImage, " ");
  }
}
function CustomerModalComponent_div_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83)(1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CustomerModalComponent_div_157_span_2_Template, 2, 1, "span", 43)(3, CustomerModalComponent_div_157_span_3_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "fa-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "input", 86, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CustomerModalComponent_div_157_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.getBase64($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.imageEncodeBase64 == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.imageEncodeBase64 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.OnlyImagesPngJpgFormat : ctx_r1.en.OnlyImagesPngJpgFormat);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faCircleQuestion);
  }
}
class CustomerModalComponent {
  constructor(dialogRef, snackBar, languageService, storeDispatch, storeApi, actions$, cdRef, breakpointObserver, data, permissionsGuard) {
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.languageService = languageService;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.actions$ = actions$;
    this.cdRef = cdRef;
    this.breakpointObserver = breakpointObserver;
    this.data = data;
    this.permissionsGuard = permissionsGuard;
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faClose;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEdit;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTrashAlt;
    this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faSave;
    this.faAdd = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAdd;
    this.faCircleQuestion = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCircleQuestion;
    this.displayedColumns1 = ['email', 'notes', 'actions'];
    this.displayedColumns2 = ['countryCode', 'extension', 'phoneNumber', 'notes', 'actions'];
    this.displayedColumns3 = ['country', 'state', 'city', 'district', 'zipCode', 'addressType', 'addressLine1', 'addressLine2', 'notes', 'actions'];
    this.catalogAddressType = [{
      id: 1,
      name: 'Comercial'
    }, {
      id: 2,
      name: 'Fiscal'
    }];
    this.catalogTax = [{
      id: '1',
      name: 'Tax 1'
    }];
    this.catalogTaxSection = [];
    this.customerTypeCatalog = [];
    this.countriesCatalog = [];
    this.key = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.tax = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.taxName = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.notes = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("");
    this.taxSection = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.customerType = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.logo = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.countryCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.notesPhone = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("");
    this.extension = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("");
    this.phoneNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(10)]);
    this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("MEX", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.district = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.zipCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.addressLine1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.addressLine2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("");
    this.notesAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("");
    this.addressType = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
    this.addressTypeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null);
    this.addCustomerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.updateCustomerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.type = [];
    this.type2 = [];
    this.type3 = [];
    this.emails = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.type);
    this.phones = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.type2);
    this.addresses = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.type3);
    this.keyEdit = "";
    this.notesEdit = "";
    this.emailEdit = "";
    this.countryCodeEdit = "";
    this.notesPhoneEdit = "";
    this.extensionEdit = "";
    this.phoneNumberEdit = "";
    this.countryEdit = "";
    this.stateEdit = "";
    this.cityEdit = "";
    this.districtEdit = "";
    this.zipCodeEdit = "";
    this.addressLine1Edit = "";
    this.addressLine2Edit = "";
    this.notesAddressEdit = "";
    this.idMailSelected = null;
    this.idPhoneSelected = null;
    this.idAddressSelected = null;
    this.addressTypeId = null;
    this.isNew = true;
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.imageData = "";
    this.patternNumbers = '^[0-9]+$';
    this.patternMail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.binaryImage = "";
    this.imageEncodeBase64 = '';
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.customersListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.taxSectionListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.customerTypeListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.customerByIdSubs = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.catalogsSubs = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.isXsScreen = false;
    this.itemData = data;
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.isNew = false;
    } else {
      this.getList();
    }
  }
  ngOnInit() {
    this.getTaxSectionList();
    this.getCatalogsExcell();
    this.getCustomerTypeList();
    this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__.Breakpoints.XSmall]).subscribe(result => {
      this.isXsScreen = result.matches;
    });
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.customersListSubs.unsubscribe();
    this.taxSectionListSubs.unsubscribe();
    this.customerTypeListSubs.unsubscribe();
    this.customerByIdSubs.unsubscribe();
    this.catalogsSubs.unsubscribe();
  }
  getList() {
    this.customersListSubs = this.storeApi.select(_state_customers_selector__WEBPACK_IMPORTED_MODULE_2__.selectCustomersList).subscribe(data => {
      // if (data.customersList.length > 0) {
      //   let valuesArray: number[] = [];
      //   data.customersList.forEach((element: any) => {
      //     valuesArray.push(Number(element.key));
      //   });
      //   this.key.patchValue((Math.max(...valuesArray) + 1).toString());
      // }
      // else {
      //   this.key.patchValue('1');
      // }
      if (data.customersList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_customers_actions__WEBPACK_IMPORTED_MODULE_1__.loadCustomersList)());
        this.customersListSubs.unsubscribe();
      }
    });
  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  getTaxSectionList() {
    this.taxSectionListSubs = this.storeApi.select(_state_customers_selector__WEBPACK_IMPORTED_MODULE_2__.selectTaxSectionList).subscribe(data => {
      this.catalogTaxSection = data.taxSectionList;
      if (this.catalogTaxSection == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_customers_actions__WEBPACK_IMPORTED_MODULE_1__.loadTaxSectionList)());
        this.taxSectionListSubs.unsubscribe();
      }
    });
  }
  getCustomerTypeList() {
    this.customerTypeListSubs = this.storeApi.select(_state_customers_selector__WEBPACK_IMPORTED_MODULE_2__.selectCustomerTypeList).subscribe(data => {
      this.customerTypeCatalog = data.customerTypeList;
      if (this.customerTypeCatalog.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_customers_actions__WEBPACK_IMPORTED_MODULE_1__.loadCustomerTypeList)());
        this.customerTypeListSubs.unsubscribe();
      }
    });
  }
  getById(data) {
    this.storeDispatch.dispatch((0,_state_customers_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionCustomerById)({
      loading: true,
      customer: data
    }));
    this.customerByIdSubs = this.storeApi.select(_state_customers_selector__WEBPACK_IMPORTED_MODULE_2__.selectCustomerById).subscribe(item => {
      this.patchValues(item);
      this.customerByIdSubs.unsubscribe();
    });
  }
  patchValues(itemData) {
    this.itemData = itemData;
    this.key.patchValue(itemData.key);
    this.name.patchValue(itemData.name);
    this.status.patchValue(itemData.status);
    this.addresses.data = itemData.addresses;
    this.phones.data = itemData.phones;
    this.emails.data = itemData.emails;
    this.tax.patchValue(itemData.taxId);
    this.taxName.patchValue(itemData.taxName);
    this.taxSection.patchValue(itemData.taxSectionId);
    this.customerType.patchValue(itemData.customerTypeId);
    let urlImage = {
      url: '',
      id: ''
    };
    if (itemData != undefined && itemData.documents != undefined && itemData.documents.length > 0) {
      urlImage = itemData.documents[itemData.documents.length - 1];
    }
    this.imageData = urlImage;
    this.addEditActiveParam();
  }
  save(opc) {
    if (!this.key.valid || !this.name.valid || !this.tax.valid || !this.taxSection.valid || !this.customerType.valid) {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.CompleteRequiredFields;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.CompleteRequiredFields;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 3000
      });
      return;
    }
    let nameImage = "";
    if (this.binaryImage != undefined && this.binaryImage != null && this.binaryImage != "") {
      nameImage = this.binaryImage.name.toString().replace('-', '');
      nameImage = nameImage.replace('/', '');
      nameImage = nameImage.replace('|', '');
    }
    switch (opc) {
      case 1:
        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.emailEdit)) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterValidEmail;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterValidEmail;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        this.emails.data.forEach(element => {
          if (element.id == this.idMailSelected) {
            element.notes = this.notesEdit;
            element.email = this.emailEdit;
            element.editActive = false;
          }
        });
        this.emails.data = this.emails.data;
        this.notesEdit = "";
        this.emailEdit = "";
        this.idMailSelected = null;
        break;
      case 2:
        if (!/^[0-9]+$/.test(this.phoneNumberEdit)) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterValidNumber;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterValidNumber;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!/^[0-9]+$/.test(this.countryCodeEdit)) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterCountryCodeValid;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterCountryCodeValid;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        this.phones.data.forEach(element => {
          if (element.id == this.idPhoneSelected) {
            element.countryCode = this.countryCodeEdit;
            element.notes = this.notesPhoneEdit;
            element.extension = this.extensionEdit;
            element.phoneNumber = this.phoneNumberEdit;
            element.editActive = false;
          }
        });
        this.phones.data = this.phones.data;
        this.countryCodeEdit = "";
        this.notesPhoneEdit = "";
        this.extensionEdit = "";
        this.phoneNumberEdit = "";
        this.idPhoneSelected = null;
        break;
      case 3:
        let addessTypeFind = this.catalogAddressType.find(address => address.id == this.addressTypeId);
        this.addresses.data.forEach(element => {
          if (element.id == this.idAddressSelected) {
            element.country = this.countryEdit;
            element.state = this.stateEdit;
            element.city = this.cityEdit;
            element.district = this.districtEdit;
            element.zipCode = this.zipCodeEdit;
            element.addressLine1 = this.addressLine1Edit;
            element.addressLine2 = this.addressLine2Edit;
            element.notes = this.notesAddressEdit;
            element.editActive = false;
            element.addressTypeId = this.addressTypeId;
            element.addressTypeName = addessTypeFind.name;
            let countryFindf = this.countriesCatalog.find(x => this.countryEdit == x.ISOAlpha3);
            if (countryFindf != undefined) {
              element.countryName = countryFindf.Nombre;
            }
          }
        });
        this.addresses.data = this.addresses.data;
        this.countryEdit = '';
        this.stateEdit = '';
        this.cityEdit = '';
        this.districtEdit = '';
        this.zipCodeEdit = '';
        this.addressLine1Edit = '';
        this.addressLine2Edit = '';
        this.notesAddressEdit = '';
        this.idAddressSelected = null;
        break;
      case 4:
        this.addresses.data.forEach(address => {
          if (address && address.id != null) {
            if (address.id.toString().length >= 10) {
              let newData = address;
              delete newData['id'];
              address = newData;
            }
          }
        });
        this.phones.data.forEach(phone => {
          if (phone && phone.id != null) {
            if (phone.id.toString().length >= 10) {
              let newData = phone;
              delete newData['id'];
              phone = newData;
            }
          }
        });
        this.emails.data.forEach(email => {
          if (email && email.id != null) {
            if (email.id.toString().length >= 10) {
              let newData = email;
              delete newData['id'];
              email = newData;
            }
          }
        });
        this.addresses.data = this.addresses.data;
        this.phones.data = this.phones.data;
        this.emails.data = this.emails.data;
        if (this.isNew) {
          let customer = {
            key: this.key.value,
            taxSectionId: this.taxSection.value,
            name: this.name.value,
            taxName: this.taxName.value,
            taxId: this.tax.value,
            // logo: '../../assets/img/logoTomas.jpg',
            addresses: this.addresses.data,
            phones: this.phones.data,
            emails: this.emails.data,
            customerTypeId: this.customerType.value,
            image: this.binaryImage,
            nameImage: nameImage
          };
          this.storeDispatch.dispatch((0,_state_customers_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionAddCustomer)({
            loading: true,
            customer: customer
          }));
          this.addCustomerSubscription = this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.ofType)('[Add Customer] Finish AddCustomer')).subscribe(result => {
            this.addEditActiveParam();
            this.addCustomerSubscription.unsubscribe();
          });
        } else {
          let customer = {
            id: this.itemData.id,
            key: this.key.value,
            taxSectionId: this.taxSection.value,
            name: this.name.value,
            taxName: this.taxName.value,
            taxId: this.tax.value,
            // logo: '../../assets/img/logoTomas.jpg',
            addresses: this.addresses.data,
            phones: this.phones.data,
            emails: this.emails.data,
            status: this.status.value,
            customerTypeId: this.customerType.value,
            urlDeleteImage: '',
            image: null,
            nameImage: nameImage
          };
          if (this.binaryImage != undefined && this.binaryImage != null && this.binaryImage != '') {
            customer = {
              id: this.itemData.id,
              key: this.key.value,
              taxSectionId: this.taxSection.value,
              name: this.name.value,
              taxName: this.taxName.value,
              taxId: this.tax.value,
              // logo: '../../assets/img/logoTomas.jpg',
              addresses: this.addresses.data,
              phones: this.phones.data,
              emails: this.emails.data,
              status: this.status.value,
              customerTypeId: this.customerType.value,
              urlDeleteImage: this.imageData.id != '' ? this.imageData.id : '',
              image: this.binaryImage,
              nameImage: nameImage
            };
          }
          this.storeDispatch.dispatch((0,_state_customers_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionUpdateCustomer)({
            loading: true,
            customer: customer
          }));
          // let subscription = new Subscription();
          // subscription = 
          this.updateCustomerSubscription = this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.ofType)('[Update Customer] Finish UpdateCustomer')).subscribe(result => {
            this.getById(result.customer);
            this.updateCustomerSubscription.unsubscribe();
            // subscription.unsubscribe();
          });
        }
        break;
    }
  }
  delete(item, opc) {
    switch (opc) {
      case 1:
        this.emails.data = this.emails.data.filter(element => {
          return element.id != item.id;
        });
        break;
      case 2:
        this.phones.data = this.phones.data.filter(element => {
          return element.id != item.id;
        });
        break;
      case 3:
        this.addresses.data = this.addresses.data.filter(element => {
          return element.id != item.id;
        });
        break;
    }
  }
  add(opc) {
    switch (opc) {
      case 1:
        let findEmail = this.emails.data.find(email => this.email.value == email.email);
        if (findEmail != undefined) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.MailAlreadyExists;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.MailAlreadyExists;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!this.email.valid) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterValidEmail;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterValidEmail;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        let newArray = [];
        this.emails.data.forEach(element => {
          newArray.push(element);
        });
        let newitem = {
          id: 1111111111 + this.emails.data.length + 1,
          email: this.email.value,
          notes: this.notes.value,
          editActive: false
        };
        this.email.reset();
        this.notes.reset();
        newArray.push(newitem);
        this.emails.data = newArray;
        break;
      case 2:
        let findNumber = this.phones.data.find(phoneNumber => this.phoneNumber.value?.trim()?.toUpperCase() == phoneNumber.phoneNumber?.trim()?.toUpperCase());
        if (findNumber != undefined) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.PhoneAlreadyExists;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.PhoneAlreadyExists;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!this.phoneNumber.valid) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterValidNumber;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterValidNumber;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!this.countryCode.valid) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterCountryCodeValid;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterCountryCodeValid;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!this.extension.valid) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.EnterExtensionValid;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.EnterExtensionValid;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        let newArrayPhones = [];
        this.phones.data.forEach(element => {
          newArrayPhones.push(element);
        });
        let newitemPhone = {
          id: 1111111111 + this.phones.data.length + 1,
          countryCode: this.countryCode.value,
          extension: this.extension.value,
          notes: this.notesPhone.value,
          phoneNumber: this.phoneNumber.value,
          editActive: false
        };
        this.countryCode.reset();
        this.extension.reset();
        this.notesPhone.reset();
        this.phoneNumber.reset();
        newArrayPhones.push(newitemPhone);
        this.phones.data = newArrayPhones;
        break;
      case 3:
        let findAddress = this.addresses.data.find(address => this.country.value?.trim()?.toUpperCase() == address.country?.trim()?.toUpperCase() && this.state.value?.trim()?.toUpperCase() == address.state?.trim()?.toUpperCase() && this.city.value?.trim()?.toUpperCase() == address.city?.trim()?.toUpperCase() && this.district.value?.trim()?.toUpperCase() == address.district?.trim()?.toUpperCase() && this.zipCode.value?.trim()?.toUpperCase() == address.zipCode?.trim()?.toUpperCase() && this.addressLine1.value?.trim()?.toUpperCase() == address.addressLine1?.trim()?.toUpperCase() && this.addressLine2.value?.trim()?.toUpperCase() == address.addressLine2?.trim()?.toUpperCase());
        if (findAddress != undefined) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.AddressAlreadyExists;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.AddressAlreadyExists;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        if (!this.country.valid || !this.state.valid || !this.city.valid || !this.district.valid || !this.zipCode.valid || !this.addressLine1.valid || !this.addressLine2.valid || !this.notesAddress.valid) {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.MandatoryFieldsFillingIn;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.MandatoryFieldsFillingIn;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        let countryFind = this.countriesCatalog.find(x => this.country.value == x.ISOAlpha3);
        let newArrayAddresses = [];
        this.addresses.data.forEach(element => {
          newArrayAddresses.push(element);
        });
        let addessTypeFind = this.catalogAddressType.find(address => address.id == this.addressTypeControl.value);
        let newitemAddress = {
          id: 1111111111 + this.addresses.data.length + 1,
          country: this.country.value,
          state: this.state.value,
          city: this.city.value,
          district: this.district.value,
          zipCode: this.zipCode.value,
          addressLine1: this.addressLine1.value,
          addressLine2: this.addressLine2.value,
          notes: this.notesAddress.value,
          editActive: false,
          addressTypeId: addessTypeFind.id,
          addressTypeName: addessTypeFind.name,
          countryName: countryFind.Nombre
        };
        // this.country.reset();
        this.state.reset();
        this.city.reset();
        this.district.reset();
        this.zipCode.reset();
        this.addressLine1.reset();
        this.addressLine2.reset();
        this.notesAddress.reset();
        this.addressType.reset();
        newArrayAddresses.push(newitemAddress);
        this.addresses.data = newArrayAddresses;
        break;
    }
  }
  removeEditList(opc, id) {
    switch (opc) {
      case 1:
        this.emails.data.forEach(item => {
          if (item.id != id) {
            item.editActive = false;
          }
        });
        break;
      case 2:
        this.phones.data.forEach(item => {
          if (item.id != id) {
            item.editActive = false;
          }
        });
        break;
      case 3:
        this.addresses.data.forEach(item => {
          if (item.id != id) {
            item.editActive = false;
          }
        });
        break;
    }
  }
  addEditActiveParam() {
    if (this.emails != undefined && this.emails.data.length > 0) {
      let newEmails = this.emails.data.map(item => ({
        ...item,
        editActive: false
      }));
      this.emails.data = newEmails;
    }
    if (this.phones != undefined && this.phones.data.length > 0) {
      let newPhones = this.phones.data.map(item => ({
        ...item,
        editActive: false
      }));
      this.phones.data = newPhones;
    }
    if (this.addresses != undefined && this.addresses.data.length > 0) {
      let newAddresses = this.addresses.data.map(item => ({
        ...item,
        editActive: false,
        countryName: ''
      }));
      let interval = setInterval(() => {
        if (this.countriesCatalog.length > 0) {
          newAddresses.forEach(element => {
            let countryFind = this.countriesCatalog.find(x => element.country == x.ISOAlpha3);
            if (countryFind != undefined) {
              element.countryName = countryFind.Nombre;
            }
          });
          clearInterval(interval);
          this.addresses.data = newAddresses;
        }
      }, 1000);
    }
  }
  getCatalogsExcell() {
    this.catalogsSubs = this.storeApi.select(src_app_shared_state_shared_selector__WEBPACK_IMPORTED_MODULE_4__.selectcatalogs).subscribe(data => {
      if (data != undefined && data.catalogs.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,src_app_shared_state_shared_actions__WEBPACK_IMPORTED_MODULE_3__.loadcatalogs)());
        this.catalogsSubs.unsubscribe();
      } else {
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = data.catalogs;
        reader.onload = () => {
          const data = reader.result;
          workBook = xlsx__WEBPACK_IMPORTED_MODULE_16__.read(data, {
            type: 'binary'
          });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_16__.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          this.countriesCatalog = jsonData.paises;
          if (this.itemData != undefined && this.itemData != null) {
            this.getById(this.itemData.item);
          }
        };
        if (file != undefined && file.length != 0) {
          reader.readAsBinaryString(file);
        }
      }
    });
  }
  getBase64(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result != undefined && reader.result != null) {
        let newValue = reader.result.toString();
        if (newValue.includes('data:image/png;base64') || newValue.includes('data:image/jpeg;base64')) {
          if (reader.result) {
            this.imageEncodeBase64 = reader.result;
            this.getBinaryImage(event);
          }
        } else {
          let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.OnlyImagesPngJpgFormat;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.OnlyImagesPngJpgFormat;
          }
          this.imageEncodeBase64 = "";
          this.inputFileImage.nativeElement.value = '';
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
      }
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  getBinaryImage(event) {
    const image = event.target.files[0];
    try {
      const data = new FormData();
      data.append('image', image);
      this.binaryImage = image;
    } catch (error) {}
  }
  alreadyImage() {
    if (this.imageData != undefined && this.imageData != "" && this.imageData.url != "" || this.imageEncodeBase64 != '') {
      return true;
    } else {
      return false;
    }
  }
  static {
    this.ɵfac = function CustomerModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustomerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_7__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: CustomerModalComponent,
      selectors: [["app-customer-modal"]],
      viewQuery: function CustomerModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.inputFileImage = _t.first);
        }
      },
      decls: 158,
      vars: 152,
      consts: [["input", ""], ["table", ""], ["inputFile", ""], [1, "m-card", "p-20", "overflowA", 2, "max-height", "80vh"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px", "width", "100%"], [1, "w-100"], ["class", "containerComponent__custom-title", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end end", 1, "mt-20", "w-100"], [1, "mr-10", "mb-10"], ["color", "warn", 1, "btn-l-warning", 3, "click", "matTooltip"], [1, "mb-10"], ["class", "btn-l-100b", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "mt-20", "mb-10"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "w-100"], ["appearance", "outline", 1, "w-100"], ["matInput", "", 3, "formControl", "maxlength"], ["appearance", "outline", 1, "w-100", 3, "ngClass"], [1, "w-100", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start start", "class", "ml-10", 4, "ngIf"], [1, "customText", "fuente", "f-s-14", "mt-10", "b-g-b-t"], [1, "customText", "fuente", "f-w-b", "f-s-14", "mt-10", "mr-a", "f-c-o"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "w-100", "mt-10"], ["matInput", "", 3, "formControl", "maxlength", "pattern"], [1, "w-25", "mt-10"], [1, "icon-button", "pointer", 3, "click", "icon", "matTooltip"], ["class", "customText fuente f-w-b f-s-14 mt-10 mr-a f-c-o", 4, "ngIf"], ["class", "containerComponent__table-container w-100", 4, "ngIf"], [1, "customText", "fuente", "f-w-b", "f-s-14", "mt-20", "b-g-b-t"], [1, "w-25", "mt-10", "ml-10"], [1, "icon-button", "mr-a", "pointer", 3, "click", "icon", "matTooltip"], ["matTooltipPosition", "below", "class", "mr-20 pointer deleteImg", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "mr-a whidthImage2 mt-3", "src", "./assets/img/sin_imagen.jpg", 4, "ngIf"], ["class", "whidthImage2 mr-a", 3, "src", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start start", "class", "w-100 mt-10", 4, "ngIf"], [1, "containerComponent__custom-title"], ["color", "primary", 1, "btn-l-100b", 3, "click", "matTooltip"], [3, "value"], [1, "fuente"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "ml-10"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-10"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "primary", 1, "mt-10", 3, "formControl"], [4, "ngIf"], [1, "containerComponent__table-container", "w-100"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "email"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "notes"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "ngClass"], ["type", "text", "class", "inputEdit", 3, "ngModel", "value", "ngModelChange", 4, "ngIf"], ["type", "text", 1, "inputEdit", 3, "ngModelChange", "ngModel", "value"], ["class", "icon-button mr-10 pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "icon-button-warning mr-10 pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-10", "pointer", 3, "click", "icon", "matTooltip"], [1, "icon-button-warning", "mr-10", "pointer", 3, "click", "icon", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["mat-table", "", "matSort", "", 1, "backTableForm", "c-b-10", 3, "dataSource"], ["matColumnDef", "countryCode"], ["matColumnDef", "extension"], ["matColumnDef", "phoneNumber"], ["class", "icon-button pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["matColumnDef", "country"], ["matColumnDef", "state"], ["matColumnDef", "city"], ["matColumnDef", "district"], ["matColumnDef", "zipCode"], ["matColumnDef", "addressLine1"], ["matColumnDef", "addressLine2"], ["matColumnDef", "addressType"], ["appearance", "outline", "style", "width: 160px; text-align:\n                        center; margin-top:25px", 4, "ngIf"], ["appearance", "outline", 2, "width", "160px", "text-align", "center", "margin-top", "25px"], [1, "w-100", 3, "ngModelChange", "value", "ngModel"], ["appearance", "outline", "style", "width: 160px; text-align:\n                            center; margin-top:25px", 4, "ngIf"], ["matTooltipPosition", "below", 1, "mr-20", "pointer", "deleteImg", 3, "click", "icon", "matTooltip"], ["src", "./assets/img/sin_imagen.jpg", 1, "mr-a", "whidthImage2", "mt-3"], [1, "whidthImage2", "mr-a", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "w-100", "mt-10"], ["onclick", "document.getElementById('getFile').click()", 1, "inputFile"], ["matSuffix", "", 1, "icon-pattern-required", "mr-5", 3, "icon", "matTooltip"], ["id", "getFile", "type", "file", "accept", "image/png, image/jpeg", 1, "inputFile", 2, "display", "none", 3, "change"]],
      template: function CustomerModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CustomerModalComponent_mat_card_title_3_Template, 2, 1, "mat-card-title", 6)(4, CustomerModalComponent_mat_card_title_4_Template, 2, 1, "mat-card-title", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 7)(6, "div", 8)(7, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.dialogRef.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, CustomerModalComponent_button_10_Template, 2, 3, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 12)(13, "div", 13)(14, "mat-form-field", 14)(15, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-form-field", 16)(20, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-form-field", 14)(25, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, CustomerModalComponent_mat_option_28_Template, 3, 2, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 13)(30, "mat-form-field", 14)(31, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " RFC/ITIN ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-form-field", 16)(36, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-form-field", 16)(41, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "mat-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, CustomerModalComponent_mat_option_44_Template, 3, 3, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, CustomerModalComponent_div_45_Template, 8, 4, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-card-title", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "mat-card-title", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 22)(51, "mat-form-field", 14)(52, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "input", 23, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "mat-form-field", 16)(57, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 24)(62, "fa-icon", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_Template_fa_icon_click_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.add(1));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, CustomerModalComponent_mat_card_title_63_Template, 2, 1, "mat-card-title", 26)(64, CustomerModalComponent_div_64_Template, 14, 3, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "mat-card-title", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "mat-card-title", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 22)(70, "mat-form-field", 16)(71, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](73, "input", 23, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "mat-form-field", 16)(76, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](78, "input", 23, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "mat-form-field", 16)(81, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](83, "input", 23, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "mat-form-field", 16)(86, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](88, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 24)(91, "fa-icon", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_Template_fa_icon_click_91_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.add(2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](92, CustomerModalComponent_mat_card_title_92_Template, 2, 1, "mat-card-title", 26)(93, CustomerModalComponent_div_93_Template, 20, 3, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "mat-card-title", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "mat-card-title", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 22)(99, "mat-form-field", 16)(100, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "mat-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](103, CustomerModalComponent_mat_option_103_Template, 3, 2, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "mat-form-field", 16)(105, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](107, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "mat-form-field", 14)(110, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](112, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "div", 13)(115, "mat-form-field", 16)(116, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](118, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "mat-form-field", 16)(121, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](123, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "mat-form-field", 14)(126, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](128, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div", 13)(131, "mat-form-field", 16)(132, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](134, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "mat-form-field", 16)(137, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](138);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](139, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "mat-form-field", 14)(142, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](143);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "mat-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](145, CustomerModalComponent_mat_option_145_Template, 3, 2, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "div", 29)(147, "fa-icon", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerModalComponent_Template_fa_icon_click_147_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.add(3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](148, CustomerModalComponent_mat_card_title_148_Template, 2, 1, "mat-card-title", 26)(149, CustomerModalComponent_div_149_Template, 35, 3, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "mat-card-title", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "mat-card-title", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](153);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](154, CustomerModalComponent_fa_icon_154_Template, 1, 2, "fa-icon", 31)(155, CustomerModalComponent_img_155_Template, 1, 0, "img", 32)(156, CustomerModalComponent_img_156_Template, 1, 1, "img", 33)(157, CustomerModalComponent_div_157_Template, 7, 4, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isNew || !ctx.isNew && ctx.permissionsGuard.Permission("UpdateCustomer"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Key : ctx.en.Key, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.key)("maxlength", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](110, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Name : ctx.en.Name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.name)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.CustomerType : ctx.en.CustomerType, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.customerType);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.customerTypeCatalog);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.tax)("maxlength", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](113, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.TaxName : ctx.en.TaxName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.taxName)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](116, _c2, !ctx.isXsScreen && !ctx.isNew, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.TaxSection : ctx.en.TaxSection, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.taxSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.catalogTaxSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Emails : ctx.en.Emails, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddNewEmail : ctx.en.AddNewEmail, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.NewEmail : ctx.en.NewEmail, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.email)("maxlength", 100)("pattern", ctx.patternMail);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](119, _c1, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Notes : ctx.en.Notes, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.notes)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Add : ctx.en.Add);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faAdd);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.emails.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.emails.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.PhoneNumbers : ctx.en.PhoneNumbers, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddNewPhohe : ctx.en.AddNewPhohe, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](122, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.NewNumber : ctx.en.NewNumber, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.phoneNumber)("maxlength", 15)("pattern", ctx.patternNumbers);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](125, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.CountryCode : ctx.en.CountryCode, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.countryCode)("maxlength", 5)("pattern", ctx.patternNumbers);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](128, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Extension : ctx.en.Extension, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.extension)("maxlength", 5)("pattern", ctx.patternNumbers);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](131, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Notes : ctx.en.Notes, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.notesPhone)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Add : ctx.en.Add);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faAdd);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.phones.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.phones.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Addresses : ctx.en.Addresses, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddNewAddress : ctx.en.AddNewAddress, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](134, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Country : ctx.en.Country, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.country);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.countriesCatalog);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](137, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.State : ctx.en.State, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.state)("maxlength", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.City : ctx.en.City, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.city)("maxlength", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](140, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.District : ctx.en.District, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.district)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](143, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.ZipCode : ctx.en.ZipCode, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.zipCode)("maxlength", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddressLine1 : ctx.en.AddressLine1, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.addressLine1)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](146, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddressLine2 : ctx.en.AddressLine2, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.addressLine2)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](149, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Notes : ctx.en.Notes, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.notesAddress)("maxlength", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.AddressType : ctx.en.AddressType, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.addressTypeControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.catalogAddressType);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Add : ctx.en.Add);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faAdd);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.addresses.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.addresses.data.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Logo : ctx.en.Logo, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Logo : ctx.en.Logo, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.alreadyImage() && (ctx.isNew || !ctx.isNew && ctx.permissionsGuard.Permission("RemoveCustomerDocument") && ctx.permissionsGuard.Permission("UploadCustomerDocument")));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.alreadyImage());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.alreadyImage());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.permissionsGuard.Permission("UploadCustomerDocument"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortHeader, _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardTitle, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__.DefaultClassDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 84429:
/*!***********************************************************!*\
  !*** ./src/app/catalogs/customers/customers.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomersComponent: () => (/* binding */ CustomersComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var _customer_modal_customer_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-modal/customer-modal.component */ 37737);
/* harmony import */ var _state_customers_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/customers.actions */ 10883);
/* harmony import */ var _state_customers_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/customers.selector */ 32583);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);



























const _c0 = () => [25, 50, 100];
function CustomersComponent_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CustomersComponent_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx_r2.lan == "es" ? ctx_r2.es.AddCustomer : ctx_r2.en.AddCustomer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.FaPlus);
  }
}
function CustomersComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Key : ctx_r2.en.Key, " ");
  }
}
function CustomersComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r4.key, " ");
  }
}
function CustomersComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Name : ctx_r2.en.Name, " ");
  }
}
function CustomersComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r5.name);
  }
}
function CustomersComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Logo : ctx_r2.en.Logo, " ");
  }
}
function CustomersComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r6.logo, " ");
  }
}
function CustomersComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Status : ctx_r2.en.Status, " ");
  }
}
function CustomersComponent_td_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Active : ctx_r2.en.Active, " ");
  }
}
function CustomersComponent_td_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Inactive : ctx_r2.en.Inactive, " ");
  }
}
function CustomersComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomersComponent_td_27_span_1_Template, 2, 1, "span", 25)(2, CustomersComponent_td_27_span_2_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r7.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r7.status == false);
  }
}
function CustomersComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Actions : ctx_r2.en.Actions, " ");
  }
}
function CustomersComponent_td_30_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CustomersComponent_td_30_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.edit(element_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.EditCustomer : ctx_r2.en.EditCustomer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faEdit);
  }
}
function CustomersComponent_td_30_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CustomersComponent_td_30_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.delete(element_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.DeleteCustomer : ctx_r2.en.DeleteCustomer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faTrashAlt);
  }
}
function CustomersComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CustomersComponent_td_30_fa_icon_2_Template, 1, 3, "fa-icon", 27)(3, CustomersComponent_td_30_fa_icon_3_Template, 1, 3, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("GetCustomerById"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("DeleteCustomer"));
  }
}
function CustomersComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 31);
  }
}
function CustomersComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 32);
  }
}
function CustomersComponent_mat_paginator_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-paginator", 33);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class CustomersComponent {
  constructor(
  // private usersService: UsersService,
  snackBar, dialog, languageService, _paginator, storeDispatch, storeApi, permissionsGuard) {
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.languageService = languageService;
    this._paginator = _paginator;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.permissionsGuard = permissionsGuard;
    this.FaPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPlus;
    this.FaRedoAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faRedoAlt;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTrashAlt;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faEdit;
    this.showPaginator = false;
    this.type = [];
    this.countriesCatalog = [];
    this.list = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.filterList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.displayedColumns = ['key', 'name',
    // 'logo',
    'status', 'actions'];
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.customersListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
      this.showPaginator = false;
      if (lan == "es") {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Registros por pagina:";
          this.showPaginator = true;
        }, 100);
      } else {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Items per page:";
          this.showPaginator = true;
        }, 100);
      }
    });
  }
  ngOnInit() {
    this.getList();
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.customersListSubs.unsubscribe();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    }, 500);
  }
  getList() {
    this.customersListSubs = this.storeApi.select(_state_customers_selector__WEBPACK_IMPORTED_MODULE_3__.selectCustomersList).subscribe(data => {
      this.list.data = data.customersList;
      if (data.customersList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_customers_actions__WEBPACK_IMPORTED_MODULE_2__.loadCustomersList)());
        this.customersListSubs.unsubscribe();
      }
    });
  }
  refreshList() {
    this.storeDispatch.dispatch((0,_state_customers_actions__WEBPACK_IMPORTED_MODULE_2__.loadCustomersList)());
  }
  add() {
    const dialogRef = this.dialog.open(_customer_modal_customer_modal_component__WEBPACK_IMPORTED_MODULE_1__.CustomerModalComponent, {
      width: '80vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result) {
        this.getList();
      }
    });
  }
  delete(item) {
    this.storeDispatch.dispatch((0,_state_customers_actions__WEBPACK_IMPORTED_MODULE_2__.loadActionDeleteCustomer)({
      loading: true,
      customer: item
    }));
  }
  edit(item) {
    const dialogRef = this.dialog.open(_customer_modal_customer_modal_component__WEBPACK_IMPORTED_MODULE_1__.CustomerModalComponent, {
      width: '80vw',
      data: {
        item
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.success) {
        setTimeout(() => {
          this.getList();
        }, 500);
      }
    });
  }
  reload() {
    this.getList();
  }
  applyFilter(filterValue) {
    this.list.filter = filterValue.value.trim().toLowerCase();
    if (this.list.paginator) {
      this.list.paginator.firstPage();
    }
    if (this.list.filter != null) {
      this.filterList.data = this.list.filteredData;
    }
  }
  static {
    this.ɵfac = function CustomersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: CustomersComponent,
      selectors: [["app-customers"]],
      viewQuery: function CustomersComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 34,
      vars: 12,
      consts: [["table", ""], [1, "containerComponent"], [1, "containerComponent__custom"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "ml-0", "containerComponent__custom-title", 2, "margin-right", "auto"], ["class", "icon-button mr-20 mt-10", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-20", "mt-10", 3, "click", "icon", "matTooltip"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", 1, "forceCenter", 3, "keyup", "placeholder"], ["matSuffix", ""], [1, "containerComponent__table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "key"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "logo"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["src", "../../assets/img/logoTomas.jpg", "width", "auto", "height", "70", 1, "m-10"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["class", "icon-button\n                            mr-10 pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "icon-button-warning pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-10", "pointer", 3, "click", "icon", "matTooltip"], [1, "icon-button-warning", "pointer", 3, "click", "icon", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions"]],
      template: function CustomersComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CustomersComponent_fa_icon_5_Template, 1, 3, "fa-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "fa-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CustomersComponent_Template_fa_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.refreshList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 7)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function CustomersComponent_Template_input_keyup_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.applyFilter($event.target));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "table", 11, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CustomersComponent_th_17_Template, 2, 1, "th", 13)(18, CustomersComponent_td_18_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, CustomersComponent_th_20_Template, 2, 1, "th", 13)(21, CustomersComponent_td_21_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, CustomersComponent_th_23_Template, 2, 1, "th", 13)(24, CustomersComponent_td_24_Template, 3, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, CustomersComponent_th_26_Template, 2, 1, "th", 13)(27, CustomersComponent_td_27_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](28, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, CustomersComponent_th_29_Template, 2, 1, "th", 13)(30, CustomersComponent_td_30_Template, 4, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CustomersComponent_tr_31_Template, 1, 0, "tr", 19)(32, CustomersComponent_tr_32_Template, 1, 0, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, CustomersComponent_mat_paginator_33_Template, 1, 2, "mat-paginator", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Customers : ctx.en.Customers, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.permissionsGuard.Permission("CreateCustomer"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx.lan == "es" ? ctx.es.Reload : ctx.en.Reload, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.FaRedoAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.list);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showPaginator);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 74428:
/*!*******************************************************************************!*\
  !*** ./src/app/catalogs/materials/material-modal/material-modal.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModalComponent: () => (/* binding */ MaterialModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 96697);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _state_materials_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/materials.selector */ 83787);
/* harmony import */ var _state_materials_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/materials.actions */ 85967);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);
























function MaterialModalComponent_mat_card_title_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-title", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddMaterial : ctx_r1.en.AddMaterial, " ");
  }
}
function MaterialModalComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-title", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.EditMaterial : ctx_r1.en.EditMaterial, " ");
  }
}
function MaterialModalComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MaterialModalComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                    ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, " ");
  }
}
function MaterialModalComponent_div_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Active : ctx_r1.en.Active, " ");
  }
}
function MaterialModalComponent_div_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Inactive : ctx_r1.en.Inactive, " ");
  }
}
function MaterialModalComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 19)(4, "mat-slide-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MaterialModalComponent_div_20_span_5_Template, 2, 1, "span", 21)(6, MaterialModalComponent_div_20_span_6_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.lan == "es" ? ctx_r1.es.Status : ctx_r1.en.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.status.value == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.status.value == false);
  }
}
class MaterialModalComponent {
  constructor(dialogRef, snackBar, languageService, storeDispatch, actions$, storeApi, data, permissionsGuard) {
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.languageService = languageService;
    this.storeDispatch = storeDispatch;
    this.actions$ = actions$;
    this.storeApi = storeApi;
    this.data = data;
    this.permissionsGuard = permissionsGuard;
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faClose;
    this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    // isAntique = new FormControl(false, [Validators.required]);
    this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.isNew = true;
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.updateMaterialSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.materialByIdSubs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.itemData = data;
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.isNew = false;
    }
  }
  ngOnInit() {
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.getById(this.itemData.item);
    }
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.updateMaterialSubscription.unsubscribe();
    this.materialByIdSubs.unsubscribe();
  }
  closeAndCancelModal() {
    this.dialogRef.close();
  }
  save() {
    if (this.isNew) {
      let material = {
        description: this.description.value,
        name: this.name.value
        // isAntique: this.isAntique.value
      };
      this.storeDispatch.dispatch((0,_state_materials_actions__WEBPACK_IMPORTED_MODULE_2__.loadActionAddMaterial)({
        loading: true,
        material: material
      }));
    } else {
      let material = {
        id: this.itemData.id,
        description: this.description.value,
        name: this.name.value,
        // isAntique: this.isAntique.value,
        status: this.status.value
      };
      this.storeDispatch.dispatch((0,_state_materials_actions__WEBPACK_IMPORTED_MODULE_2__.loadActionUpdateMaterial)({
        loading: true,
        material: material
      }));
      this.updateMaterialSubscription = this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)('[Update Material] Finish UpdateMaterial')).subscribe(result => {
        this.getById(result.material);
        this.updateMaterialSubscription.unsubscribe();
      });
    }
  }
  getById(data) {
    this.storeDispatch.dispatch((0,_state_materials_actions__WEBPACK_IMPORTED_MODULE_2__.loadActionMaterialById)({
      loading: true,
      material: data
    }));
    this.materialByIdSubs = this.storeApi.select(_state_materials_selector__WEBPACK_IMPORTED_MODULE_1__.selectMaterialById).subscribe(material => {
      this.patchValues(material);
      this.materialByIdSubs.unsubscribe();
    }, () => {
      console.log("Error get biId");
    });
  }
  patchValues(itemData) {
    this.itemData = itemData;
    this.name.patchValue(itemData.name);
    this.description.patchValue(itemData.description);
    // this.isAntique.patchValue(itemData.isAntique);
    this.status.patchValue(itemData.status);
  }
  static {
    this.ɵfac = function MaterialModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaterialModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_4__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: MaterialModalComponent,
      selectors: [["app-material-modal"]],
      decls: 21,
      vars: 9,
      consts: [["input", ""], [1, "m-card", "p-20", "overflowA", 2, "max-height", "80vh"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px", "width", "100%"], [1, "w-100"], ["class", "containerComponent__custom-title", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end end", 1, "mt-20", "w-100"], [1, "mr-10", "mb-10"], ["color", "warn", 1, "btn-l-warning", 3, "click", "matTooltip"], [1, "mb-10"], ["class", "btn-l-100b", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "mt-20", "mb-10"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "w-100"], ["appearance", "outline", 1, "w-100", "mb-10"], ["matInput", "", 3, "formControl", "maxLength"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "ml-10"], ["fxLayout", "column", "fxLayoutAlign", "center center", "class", "mb-10", 4, "ngIf"], [1, "containerComponent__custom-title"], ["color", "primary", 1, "btn-l-100b", 3, "click", "matTooltip"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-10"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "primary", 1, "mt-10", 3, "formControl"], [4, "ngIf"]],
      template: function MaterialModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, MaterialModalComponent_mat_card_title_3_Template, 2, 1, "mat-card-title", 4)(4, MaterialModalComponent_mat_card_title_4_Template, 2, 1, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MaterialModalComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeAndCancelModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, MaterialModalComponent_button_10_Template, 2, 3, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 13, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, MaterialModalComponent_div_20_Template, 7, 4, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isNew || !ctx.isNew && ctx.permissionsGuard.Permission("UpdateMaterial"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Name : ctx.en.Name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.name)("maxLength", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isNew);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__.MatSlideToggle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 11149:
/*!***********************************************************!*\
  !*** ./src/app/catalogs/materials/materials.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialsComponent: () => (/* binding */ MaterialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var _material_modal_material_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-modal/material-modal.component */ 74428);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _state_materials_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/materials.selector */ 83787);
/* harmony import */ var _state_materials_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/materials.actions */ 85967);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);



























const _c0 = () => [25, 50, 100];
function MaterialsComponent_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MaterialsComponent_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx_r2.lan == "es" ? ctx_r2.es.AddMaterial : ctx_r2.en.AddMaterial, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.FaPlus);
  }
}
function MaterialsComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Name : ctx_r2.en.Name, " ");
  }
}
function MaterialsComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r4.name);
  }
}
function MaterialsComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Status : ctx_r2.en.Status, " ");
  }
}
function MaterialsComponent_td_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Active : ctx_r2.en.Active, " ");
  }
}
function MaterialsComponent_td_21_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Inactive : ctx_r2.en.Inactive, " ");
  }
}
function MaterialsComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MaterialsComponent_td_21_span_1_Template, 2, 1, "span", 22)(2, MaterialsComponent_td_21_span_2_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r5.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r5.status == false);
  }
}
function MaterialsComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Actions : ctx_r2.en.Actions, " ");
  }
}
function MaterialsComponent_td_24_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MaterialsComponent_td_24_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.edit(element_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.EditMaterial : ctx_r2.en.EditMaterial, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faEdit);
  }
}
function MaterialsComponent_td_24_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MaterialsComponent_td_24_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.delete(element_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.DeleteMaterial : ctx_r2.en.DeleteMaterial, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faTrashAlt);
  }
}
function MaterialsComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 21)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MaterialsComponent_td_24_fa_icon_2_Template, 1, 3, "fa-icon", 24)(3, MaterialsComponent_td_24_fa_icon_3_Template, 1, 3, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("GetMaterialById"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("DeleteMaterial"));
  }
}
function MaterialsComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 28);
  }
}
function MaterialsComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 29);
  }
}
function MaterialsComponent_mat_paginator_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-paginator", 30);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class MaterialsComponent {
  constructor(
  // private usersService: UsersService,
  snackBar, dialog, languageService, _paginator, storeDispatch, storeApi, permissionsGuard) {
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.languageService = languageService;
    this._paginator = _paginator;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.permissionsGuard = permissionsGuard;
    this.FaPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPlus;
    this.FaRedoAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faRedoAlt;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTrashAlt;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faEdit;
    this.showPaginator = false;
    this.type = [];
    this.list = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.filterList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en;
    this.displayedColumns = ['name',
    // 'description',
    'status', 'actions'];
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.materialsListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
      this.showPaginator = false;
      if (lan == "es") {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Registros por pagina:";
          this.showPaginator = true;
        }, 100);
      } else {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Items per page:";
          this.showPaginator = true;
        }, 100);
      }
    });
  }
  ngOnInit() {
    this.getList();
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.materialsListSubs.unsubscribe();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    }, 500);
  }
  getList() {
    this.materialsListSubs = this.storeApi.select(_state_materials_selector__WEBPACK_IMPORTED_MODULE_2__.selectMaterialsList).subscribe(data => {
      this.list.data = data.materialsList;
      if (data.materialsList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_materials_actions__WEBPACK_IMPORTED_MODULE_3__.loadMaterialsList)());
        this.materialsListSubs.unsubscribe();
      }
    });
  }
  refreshList() {
    this.storeDispatch.dispatch((0,_state_materials_actions__WEBPACK_IMPORTED_MODULE_3__.loadMaterialsList)());
  }
  add() {
    const dialogRef = this.dialog.open(_material_modal_material_modal_component__WEBPACK_IMPORTED_MODULE_0__.MaterialModalComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result) {
        this.getList();
      }
    });
  }
  delete(item) {
    this.storeDispatch.dispatch((0,_state_materials_actions__WEBPACK_IMPORTED_MODULE_3__.loadActionDeleteMaterial)({
      loading: true,
      material: item
    }));
  }
  edit(item) {
    const dialogRef = this.dialog.open(_material_modal_material_modal_component__WEBPACK_IMPORTED_MODULE_0__.MaterialModalComponent, {
      width: '500px',
      data: {
        item
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.success) {
        setTimeout(() => {
          this.getList();
        }, 500);
      }
    });
  }
  applyFilter(filterValue) {
    this.list.filter = filterValue.value.trim().toLowerCase();
    if (this.list.paginator) {
      this.list.paginator.firstPage();
    }
    if (this.list.filter != null) {
      this.filterList.data = this.list.filteredData;
    }
  }
  static {
    this.ɵfac = function MaterialsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaterialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: MaterialsComponent,
      selectors: [["app-materials"]],
      viewQuery: function MaterialsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 28,
      vars: 12,
      consts: [["table", ""], [1, "containerComponent"], [1, "containerComponent__custom"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "ml-0", "containerComponent__custom-title", 2, "margin-right", "auto"], ["class", "icon-button mr-20 mt-10", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-20", "mt-10", 3, "click", "icon", "matTooltip"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", 1, "forceCenter", 3, "keyup", "placeholder"], ["matSuffix", ""], [1, "containerComponent__table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["class", "icon-button\n                            mr-10\n                            pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "icon-button-warning\n                            pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-10", "pointer", 3, "click", "icon", "matTooltip"], [1, "icon-button-warning", "pointer", 3, "click", "icon", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions"]],
      template: function MaterialsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MaterialsComponent_fa_icon_5_Template, 1, 3, "fa-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "fa-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MaterialsComponent_Template_fa_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.refreshList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 7)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function MaterialsComponent_Template_input_keyup_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.applyFilter($event.target));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "table", 11, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, MaterialsComponent_th_17_Template, 2, 1, "th", 13)(18, MaterialsComponent_td_18_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, MaterialsComponent_th_20_Template, 2, 1, "th", 13)(21, MaterialsComponent_td_21_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, MaterialsComponent_th_23_Template, 2, 1, "th", 13)(24, MaterialsComponent_td_24_Template, 4, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, MaterialsComponent_tr_25_Template, 1, 0, "tr", 17)(26, MaterialsComponent_tr_26_Template, 1, 0, "tr", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, MaterialsComponent_mat_paginator_27_Template, 1, 2, "mat-paginator", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Materials : ctx.en.Materials, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.permissionsGuard.Permission("CreateMaterial"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx.lan == "es" ? ctx.es.Reload : ctx.en.Reload, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.FaRedoAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.list);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showPaginator);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 85033:
/*!************************************************************************************************************!*\
  !*** ./src/app/catalogs/production-process/production-process-modal/production-process-modal.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductionProcessModalComponent: () => (/* binding */ ProductionProcessModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 96697);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var _state_production_process_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/production-process.actions */ 64439);
/* harmony import */ var _state_production_process_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/production-process.selector */ 16691);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);























function ProductionProcessModalComponent_mat_card_title_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-title", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddProductionProcess : ctx_r1.en.AddProductionProcess, " ");
  }
}
function ProductionProcessModalComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-title", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.EditProductionProcess : ctx_r1.en.EditProductionProcess, " ");
  }
}
function ProductionProcessModalComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductionProcessModalComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                    ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, " ");
  }
}
function ProductionProcessModalComponent_div_25_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Active : ctx_r1.en.Active, " ");
  }
}
function ProductionProcessModalComponent_div_25_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Inactive : ctx_r1.en.Inactive, " ");
  }
}
function ProductionProcessModalComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 21)(4, "mat-slide-toggle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProductionProcessModalComponent_div_25_span_5_Template, 2, 1, "span", 23)(6, ProductionProcessModalComponent_div_25_span_6_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.lan == "es" ? ctx_r1.es.Status : ctx_r1.en.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.status.value == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.status.value == false);
  }
}
class ProductionProcessModalComponent {
  constructor(dialogRef, languageService, storeDispatch, actions$, storeApi, data, permissionsGuard) {
    this.dialogRef = dialogRef;
    this.languageService = languageService;
    this.storeDispatch = storeDispatch;
    this.actions$ = actions$;
    this.storeApi = storeApi;
    this.data = data;
    this.permissionsGuard = permissionsGuard;
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faClose;
    this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.price = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    // isAntique = new FormControl(false, [Validators.required]);
    this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.isNew = true;
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.updateProductionProcessSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.productionProcessByIdSubs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.itemData = data;
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.isNew = false;
    }
  }
  ngOnInit() {
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.getById(this.itemData.item);
    }
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.updateProductionProcessSubscription.unsubscribe();
    this.productionProcessByIdSubs.unsubscribe();
  }
  closeAndCancelModal() {
    this.dialogRef.close();
  }
  save() {
    if (this.isNew) {
      let productionProcess = {
        name: this.name.value,
        order: 0,
        price: this.price.value
        // isAntique: this.isAntique.value
      };
      this.storeDispatch.dispatch((0,_state_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionAddProductionProcess)({
        loading: true,
        productionProcess: productionProcess
      }));
    } else {
      let productionProcess = {
        id: this.itemData.id,
        order: 0,
        name: this.name.value,
        // isAntique: this.isAntique.value,
        status: this.status.value,
        price: this.price.value
      };
      this.storeDispatch.dispatch((0,_state_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionUpdateProductionProcess)({
        loading: true,
        productionProcess: productionProcess
      }));
      this.updateProductionProcessSubscription = this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)('[Update ProductionloadActionAddProductionProcess] Finish UpdateProductionloadActionAddProductionProcess')).subscribe(result => {
        this.getById(result.productionProcess);
        this.updateProductionProcessSubscription.unsubscribe();
      });
    }
  }
  getById(data) {
    this.storeDispatch.dispatch((0,_state_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionProductionProcessById)({
      loading: true,
      productionProcess: data
    }));
    this.productionProcessByIdSubs = this.storeApi.select(_state_production_process_selector__WEBPACK_IMPORTED_MODULE_2__.selectProductionProcessById).subscribe(productionProcess => {
      this.patchValues(productionProcess);
      this.productionProcessByIdSubs.unsubscribe();
    }, () => {
      console.log("Error get biId");
    });
  }
  patchValues(itemData) {
    this.itemData = itemData;
    this.name.patchValue(itemData.name);
    this.status.patchValue(itemData.status);
    this.price.patchValue(itemData.price);
  }
  static {
    this.ɵfac = function ProductionProcessModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductionProcessModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_4__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProductionProcessModalComponent,
      selectors: [["app-production-process-modal"]],
      decls: 26,
      vars: 11,
      consts: [["input", ""], [1, "m-card", "p-20", "overflowA", 2, "max-height", "80vh"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px", "width", "100%"], [1, "w-100"], ["class", "containerComponent__custom-title", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end end", 1, "mt-20", "w-100"], [1, "mr-10", "mb-10"], ["color", "warn", 1, "btn-l-warning", 3, "click", "matTooltip"], [1, "mb-10"], ["class", "btn-l-100b", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "mt-20", "mb-10"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "w-100"], ["appearance", "outline", 1, "w-100", "mr-20", "mb-10"], ["matInput", "", 3, "formControl", "maxLength"], ["appearance", "outline", 1, "w-100", "mb-10"], ["matInput", "", "type", "number", 3, "formControl"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "ml-10"], ["fxLayout", "column", "fxLayoutAlign", "center center", "class", "mb-10", 4, "ngIf"], [1, "containerComponent__custom-title"], ["color", "primary", 1, "btn-l-100b", 3, "click", "matTooltip"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-10"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "primary", 1, "mt-10", 3, "formControl"], [4, "ngIf"]],
      template: function ProductionProcessModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProductionProcessModalComponent_mat_card_title_3_Template, 2, 1, "mat-card-title", 4)(4, ProductionProcessModalComponent_mat_card_title_4_Template, 2, 1, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductionProcessModalComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeAndCancelModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProductionProcessModalComponent_button_10_Template, 2, 3, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 13, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 14)(20, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ProductionProcessModalComponent_div_25_Template, 7, 4, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isNew || !ctx.isNew && ctx.permissionsGuard.Permission("UpdateProductionProcess"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Name : ctx.en.Name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.name)("maxLength", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Price : ctx.en.Price, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.price);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isNew);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 17025:
/*!*****************************************************************************!*\
  !*** ./src/app/catalogs/production-process/production-process.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductionProcessComponent: () => (/* binding */ ProductionProcessComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_production_process_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/production-process.selector */ 16691);
/* harmony import */ var _state_production_process_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/production-process.actions */ 64439);
/* harmony import */ var _production_process_modal_production_process_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./production-process-modal/production-process-modal.component */ 85033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);



























const _c0 = () => [25, 50, 100];
function ProductionProcessComponent_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductionProcessComponent_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx_r2.lan == "es" ? ctx_r2.es.AddProductionProcess : ctx_r2.en.AddProductionProcess, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.FaPlus);
  }
}
function ProductionProcessComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Name : ctx_r2.en.Name, " ");
  }
}
function ProductionProcessComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r4.name);
  }
}
function ProductionProcessComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Price : ctx_r2.en.Price, " ");
  }
}
function ProductionProcessComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("$", element_r5.price, "");
  }
}
function ProductionProcessComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Status : ctx_r2.en.Status, " ");
  }
}
function ProductionProcessComponent_td_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Active : ctx_r2.en.Active, " ");
  }
}
function ProductionProcessComponent_td_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Inactive : ctx_r2.en.Inactive, " ");
  }
}
function ProductionProcessComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductionProcessComponent_td_24_span_1_Template, 2, 1, "span", 23)(2, ProductionProcessComponent_td_24_span_2_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r6.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r6.status == false);
  }
}
function ProductionProcessComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Actions : ctx_r2.en.Actions, " ");
  }
}
function ProductionProcessComponent_td_27_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductionProcessComponent_td_27_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.edit(element_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.EditProductionProcess : ctx_r2.en.EditProductionProcess, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faEdit);
  }
}
function ProductionProcessComponent_td_27_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductionProcessComponent_td_27_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.delete(element_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.DeleteProductionProcess : ctx_r2.en.DeleteProductionProcess, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faTrashAlt);
  }
}
function ProductionProcessComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 22)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProductionProcessComponent_td_27_fa_icon_2_Template, 1, 3, "fa-icon", 25)(3, ProductionProcessComponent_td_27_fa_icon_3_Template, 1, 3, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("GetProductionProcessById"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("DeleteProductionProcess"));
  }
}
function ProductionProcessComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 29);
  }
}
function ProductionProcessComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 30);
  }
}
function ProductionProcessComponent_mat_paginator_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-paginator", 31);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class ProductionProcessComponent {
  constructor(
  // private usersService: UsersService,
  snackBar, dialog, languageService, _paginator, storeDispatch, storeApi, permissionsGuard) {
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.languageService = languageService;
    this._paginator = _paginator;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.permissionsGuard = permissionsGuard;
    this.FaPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPlus;
    this.FaRedoAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faRedoAlt;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTrashAlt;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faEdit;
    this.showPaginator = false;
    this.type = [];
    this.list = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.filterList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.displayedColumns = ['name', 'price', 'status', 'actions'];
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.productionProcessListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
      this.showPaginator = false;
      if (lan == "es") {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Registros por pagina:";
          this.showPaginator = true;
        }, 100);
      } else {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Items per page:";
          this.showPaginator = true;
        }, 100);
      }
    });
  }
  ngOnInit() {
    this.getList();
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.productionProcessListSubs.unsubscribe();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    }, 500);
  }
  getList() {
    this.productionProcessListSubs = this.storeApi.select(_state_production_process_selector__WEBPACK_IMPORTED_MODULE_2__.selectProductionProcessList).subscribe(data => {
      this.list.data = data.productionProcessList;
      if (data != undefined && data.productionProcessList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_production_process_actions__WEBPACK_IMPORTED_MODULE_3__.loadProductionProcessList)());
        this.productionProcessListSubs.unsubscribe();
      }
    });
  }
  refreshList() {
    this.storeDispatch.dispatch((0,_state_production_process_actions__WEBPACK_IMPORTED_MODULE_3__.loadProductionProcessList)());
  }
  add() {
    const dialogRef = this.dialog.open(_production_process_modal_production_process_modal_component__WEBPACK_IMPORTED_MODULE_4__.ProductionProcessModalComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result) {
        this.getList();
      }
    });
  }
  delete(item) {
    this.storeDispatch.dispatch((0,_state_production_process_actions__WEBPACK_IMPORTED_MODULE_3__.loadActionDeleteProductionProcess)({
      loading: true,
      productionProcess: item
    }));
  }
  edit(item) {
    const dialogRef = this.dialog.open(_production_process_modal_production_process_modal_component__WEBPACK_IMPORTED_MODULE_4__.ProductionProcessModalComponent, {
      width: '600px',
      data: {
        item
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.success) {
        setTimeout(() => {
          // this.list.data.push(result.user);
          this.getList();
        }, 500);
      }
    });
  }
  applyFilter(filterValue) {
    this.list.filter = filterValue.value.trim().toLowerCase();
    if (this.list.paginator) {
      this.list.paginator.firstPage();
    }
    if (this.list.filter != null) {
      this.filterList.data = this.list.filteredData;
    }
  }
  static {
    this.ɵfac = function ProductionProcessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductionProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ProductionProcessComponent,
      selectors: [["app-production-process"]],
      viewQuery: function ProductionProcessComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 31,
      vars: 12,
      consts: [["table", ""], [1, "containerComponent"], [1, "containerComponent__custom"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "ml-0", "containerComponent__custom-title", 2, "margin-right", "auto"], ["class", "icon-button mr-20 mt-10", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-20", "mt-10", 3, "click", "icon", "matTooltip"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", 1, "forceCenter", 3, "keyup", "placeholder"], ["matSuffix", ""], [1, "containerComponent__table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "price"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["class", "icon-button\n                            mr-10 pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "icon-button-warning pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-10", "pointer", 3, "click", "icon", "matTooltip"], [1, "icon-button-warning", "pointer", 3, "click", "icon", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions"]],
      template: function ProductionProcessComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ProductionProcessComponent_fa_icon_5_Template, 1, 3, "fa-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "fa-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductionProcessComponent_Template_fa_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.refreshList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 7)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ProductionProcessComponent_Template_input_keyup_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.applyFilter($event.target));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "table", 11, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ProductionProcessComponent_th_17_Template, 2, 1, "th", 13)(18, ProductionProcessComponent_td_18_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ProductionProcessComponent_th_20_Template, 2, 1, "th", 13)(21, ProductionProcessComponent_td_21_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ProductionProcessComponent_th_23_Template, 2, 1, "th", 13)(24, ProductionProcessComponent_td_24_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ProductionProcessComponent_th_26_Template, 2, 1, "th", 13)(27, ProductionProcessComponent_td_27_Template, 4, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ProductionProcessComponent_tr_28_Template, 1, 0, "tr", 18)(29, ProductionProcessComponent_tr_29_Template, 1, 0, "tr", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ProductionProcessComponent_mat_paginator_30_Template, 1, 2, "mat-paginator", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.ProductionProcesses : ctx.en.ProductionProcesses, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.permissionsGuard.Permission("CreateProductionProcess"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx.lan == "es" ? ctx.es.Reload : ctx.en.Reload, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.FaRedoAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.list);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showPaginator);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 91675:
/*!*********************************************************!*\
  !*** ./src/app/catalogs/products/products.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _state_products_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/products.selector */ 24981);
/* harmony import */ var _state_products_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/products.actions */ 37677);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-modal/product-modal.component */ 77310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);



























const _c0 = () => [25, 50, 100];
function ProductsComponent_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductsComponent_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx_r2.lan == "es" ? ctx_r2.es.AddProduct : ctx_r2.en.AddProduct, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.FaPlus);
  }
}
function ProductsComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Code : ctx_r2.en.Code, " ");
  }
}
function ProductsComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r4.key);
  }
}
function ProductsComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Name : ctx_r2.en.Name, " ");
  }
}
function ProductsComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r5.name);
  }
}
function ProductsComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Client : ctx_r2.en.Client, " ");
  }
}
function ProductsComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r6.clientName, " ");
  }
}
function ProductsComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.esDescription : ctx_r2.en.esDescription, " ");
  }
}
function ProductsComponent_td_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r7.descriptionSpanish, " ");
  }
}
function ProductsComponent_td_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r7.descriptionSpanish, " ");
  }
}
function ProductsComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductsComponent_td_27_span_1_Template, 2, 1, "span", 27)(2, ProductsComponent_td_27_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.lan == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.lan == "en");
  }
}
function ProductsComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.enDescription : ctx_r2.en.enDescription, " ");
  }
}
function ProductsComponent_td_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r8.descriptionEnglish, " ");
  }
}
function ProductsComponent_td_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r8.descriptionEnglish, " ");
  }
}
function ProductsComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductsComponent_td_30_span_1_Template, 2, 1, "span", 27)(2, ProductsComponent_td_30_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.lan == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.lan == "en");
  }
}
function ProductsComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Image : ctx_r2.en.Image, " ");
  }
}
function ProductsComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r9.logo, " ");
  }
}
function ProductsComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Status : ctx_r2.en.Status, " ");
  }
}
function ProductsComponent_td_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Active : ctx_r2.en.Active, " ");
  }
}
function ProductsComponent_td_36_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Inactive : ctx_r2.en.Inactive, " ");
  }
}
function ProductsComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductsComponent_td_36_span_1_Template, 2, 1, "span", 27)(2, ProductsComponent_td_36_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r10.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r10.status == false);
  }
}
function ProductsComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Actions : ctx_r2.en.Actions, " ");
  }
}
function ProductsComponent_td_39_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductsComponent_td_39_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const element_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.edit(element_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.EditProduct : ctx_r2.en.EditProduct, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faEdit);
  }
}
function ProductsComponent_td_39_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductsComponent_td_39_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const element_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.delete(element_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.DeleteProduct : ctx_r2.en.DeleteProduct, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faTrashAlt);
  }
}
function ProductsComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProductsComponent_td_39_fa_icon_2_Template, 1, 3, "fa-icon", 30)(3, ProductsComponent_td_39_fa_icon_3_Template, 1, 3, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("GetItemById"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("DeleteItem"));
  }
}
function ProductsComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 34);
  }
}
function ProductsComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 35);
  }
}
function ProductsComponent_mat_paginator_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-paginator", 36);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class ProductsComponent {
  constructor(
  // private usersService: UsersService,
  snackBar, dialog, languageService, _paginator, storeDispatch, storeApi, permissionsGuard) {
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.languageService = languageService;
    this._paginator = _paginator;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.permissionsGuard = permissionsGuard;
    this.displayedColumns = ['code', 'name', 'client', 'descriptionSpanish', 'descriptionEnglish',
    // 'image',
    'status', 'actions'];
    this.FaPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPlus;
    this.FaRedoAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faRedoAlt;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTrashAlt;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faEdit;
    this.showPaginator = false;
    this.type = [];
    this.list = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.filterList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.type);
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.customersList = [];
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.productsListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
      this.showPaginator = false;
      if (lan == "es") {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Registros por pagina:";
          this.showPaginator = true;
        }, 100);
      } else {
        setTimeout(() => {
          this._paginator.itemsPerPageLabel = "Items per page:";
          this.showPaginator = true;
        }, 100);
      }
    });
  }
  ngOnInit() {
    this.getList();
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.productsListSubs.unsubscribe();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    }, 500);
  }
  getList() {
    this.productsListSubs = this.storeApi.select(_state_products_selector__WEBPACK_IMPORTED_MODULE_1__.selectProductsList).subscribe(data => {
      this.list.data = data.productsList;
      if (data.productsList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_products_actions__WEBPACK_IMPORTED_MODULE_2__.loadProductsList)());
        this.productsListSubs.unsubscribe();
      }
    });
  }
  refreshList() {
    this.storeDispatch.dispatch((0,_state_products_actions__WEBPACK_IMPORTED_MODULE_2__.loadProductsList)());
  }
  add() {
    const dialogRef = this.dialog.open(_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_4__.ProductModalComponent, {
      width: '80vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result) {
        this.getList();
      }
    });
  }
  delete(item) {
    this.storeDispatch.dispatch((0,_state_products_actions__WEBPACK_IMPORTED_MODULE_2__.loadActionDeleteProduct)({
      loading: true,
      product: item
    }));
  }
  edit(item) {
    const dialogRef = this.dialog.open(_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_4__.ProductModalComponent, {
      width: '80vw',
      data: {
        item
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.success) {
        setTimeout(() => {
          this.getList();
        }, 500);
      }
    });
  }
  applyFilter(filterValue) {
    this.list.filter = filterValue.value.trim().toLowerCase();
    if (this.list.paginator) {
      this.list.paginator.firstPage();
    }
    if (this.list.filter != null) {
      this.filterList.data = this.list.filteredData;
    }
  }
  static {
    this.ɵfac = function ProductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      viewQuery: function ProductsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 43,
      vars: 12,
      consts: [["table", ""], [1, "containerComponent"], [1, "containerComponent__custom"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "ml-0", "containerComponent__custom-title", 2, "margin-right", "auto"], ["class", "icon-button mr-20 mt-10", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-20", "mt-10", 3, "click", "icon", "matTooltip"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", 1, "forceCenter", 3, "keyup", "placeholder"], ["matSuffix", ""], [1, "containerComponent__table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "client"], ["matColumnDef", "descriptionSpanish"], ["matColumnDef", "descriptionEnglish"], ["matColumnDef", "image"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], ["src", "../../assets/img/logoTomas.jpg", "width", "auto", "height", "70", 1, "m-10"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["class", "icon-button\n                            mr-10\n                            pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "icon-button-warning pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "mr-10", "pointer", 3, "click", "icon", "matTooltip"], [1, "icon-button-warning", "pointer", 3, "click", "icon", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ProductsComponent_fa_icon_5_Template, 1, 3, "fa-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "fa-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductsComponent_Template_fa_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.refreshList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 7)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ProductsComponent_Template_input_keyup_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.applyFilter($event.target));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "table", 11, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ProductsComponent_th_17_Template, 2, 1, "th", 13)(18, ProductsComponent_td_18_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ProductsComponent_th_20_Template, 2, 1, "th", 13)(21, ProductsComponent_td_21_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ProductsComponent_th_23_Template, 2, 1, "th", 13)(24, ProductsComponent_td_24_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ProductsComponent_th_26_Template, 2, 1, "th", 13)(27, ProductsComponent_td_27_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](28, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ProductsComponent_th_29_Template, 2, 1, "th", 13)(30, ProductsComponent_td_30_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](31, 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ProductsComponent_th_32_Template, 2, 1, "th", 13)(33, ProductsComponent_td_33_Template, 3, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](34, 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ProductsComponent_th_35_Template, 2, 1, "th", 13)(36, ProductsComponent_td_36_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](37, 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, ProductsComponent_th_38_Template, 2, 1, "th", 13)(39, ProductsComponent_td_39_Template, 4, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, ProductsComponent_tr_40_Template, 1, 0, "tr", 22)(41, ProductsComponent_tr_41_Template, 1, 0, "tr", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ProductsComponent_mat_paginator_42_Template, 1, 2, "mat-paginator", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Products : ctx.en.Products, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.permissionsGuard.Permission("CreateItem"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx.lan == "es" ? ctx.es.Reload : ctx.en.Reload, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.FaRedoAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.list);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showPaginator);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ })

}]);