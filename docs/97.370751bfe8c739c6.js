"use strict";
(self["webpackChunkFTM"] = self["webpackChunkFTM"] || []).push([[97],{

/***/ 30648:
/*!*****************************************************************!*\
  !*** ./src/app/administration/administration-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdministrationRoutingModule: () => (/* binding */ AdministrationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/users.component */ 1880);
/* harmony import */ var _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions/permissions.component */ 56655);
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles/roles.component */ 6515);
/* harmony import */ var _shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guards/guardsApp.guard */ 3539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);







const routes = [{
  path: 'roles',
  component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_2__.RolesComponent,
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_3__.GuardsAppGuard]
}, {
  path: 'permissions',
  component: _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_1__.PermissionsComponent,
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_3__.GuardsAppGuard]
}, {
  path: 'users',
  component: _users_users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent,
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_3__.GuardsAppGuard]
}];
class AdministrationRoutingModule {
  static {
    this.ɵfac = function AdministrationRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdministrationRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AdministrationRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdministrationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 33097:
/*!*********************************************************!*\
  !*** ./src/app/administration/administration.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdministrationModule: () => (/* binding */ AdministrationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/users.component */ 1880);
/* harmony import */ var _administration_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administration-routing.module */ 30648);
/* harmony import */ var _users_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/user-modal/user-modal.component */ 43784);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 57383);
/* harmony import */ var _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions/permissions.component */ 56655);
/* harmony import */ var _permissions_permissions_modal_permissions_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions/permissions-modal/permissions-modal.component */ 43364);
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles/roles.component */ 6515);
/* harmony import */ var _roles_role_modal_role_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roles/role-modal/role-modal.component */ 68679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);










class AdministrationModule {
  static {
    this.ɵfac = function AdministrationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdministrationModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AdministrationModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _administration_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdministrationRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AdministrationModule, {
    declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent, _users_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_2__.UserModalComponent, _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_4__.PermissionsComponent, _permissions_permissions_modal_permissions_modal_component__WEBPACK_IMPORTED_MODULE_5__.PermissionsModalComponent, _roles_roles_component__WEBPACK_IMPORTED_MODULE_6__.RolesComponent, _roles_role_modal_role_modal_component__WEBPACK_IMPORTED_MODULE_7__.RoleModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _administration_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdministrationRoutingModule]
  });
})();

/***/ }),

/***/ 43364:
/*!*********************************************************************************************!*\
  !*** ./src/app/administration/permissions/permissions-modal/permissions-modal.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsModalComponent: () => (/* binding */ PermissionsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 82798);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);





















function PermissionsModalComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.AddPermission : ctx_r0.en.AddPermission, " ");
  }
}
function PermissionsModalComponent_mat_card_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.EditPermission : ctx_r0.en.EditPermission, " ");
  }
}
function PermissionsModalComponent_mat_card_title_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.PermissionsList + " del modulo " + ctx_r0.itemData.item.name : ctx_r0.en.PermissionsList + " of module " + ctx_r0.itemData.item.name, " ");
  }
}
function PermissionsModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.dialogRef.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r0.lan == "es" ? ctx_r0.es.Cancel : ctx_r0.en.Cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Cancel : ctx_r0.en.Cancel, " ");
  }
}
function PermissionsModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r0.isNew = true;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.editPermission = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r0.lan == "es" ? ctx_r0.es.Cancel : ctx_r0.en.Cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Cancel : ctx_r0.en.Cancel, " ");
  }
}
function PermissionsModalComponent_div_14_mat_list_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list", 20)(1, "mat-list-item", 16)(2, "div", 21)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 22)(8, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_div_14_mat_list_9_Template_fa_icon_click_8_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r0.editPermission = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.edit(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r0.lan == "es" ? ctx_r0.es.EditPermission : ctx_r0.en.EditPermission, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r0.faEdit);
  }
}
function PermissionsModalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "mat-list-item", 16)(2, "div", 17)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PermissionsModalComponent_div_14_mat_list_9_Template, 9, 5, "mat-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Name : ctx_r0.en.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Description : ctx_r0.en.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Actions : ctx_r0.en.Actions, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.itemData.item.permissions);
  }
}
function PermissionsModalComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "mat-form-field", 25)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 26, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 25)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 26, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 25)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 26, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 22)(17, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_div_15_Template_fa_icon_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.delete(ctx_r0.itemData.item.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Name : ctx_r0.en.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Description : ctx_r0.en.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Permission : ctx_r0.en.Permission, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.permission);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                ", ctx_r0.lan == "es" ? ctx_r0.es.DeletePermission : ctx_r0.en.DeletePermission, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r0.faTrashAlt);
  }
}
function PermissionsModalComponent_div_16_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r7, " ");
  }
}
function PermissionsModalComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "mat-form-field", 25)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PermissionsModalComponent_div_16_mat_option_5_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 25)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 26, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 25)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 26, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 25)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 26, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Module : ctx_r0.en.Module, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.lan == "es" ? ctx_r0.es.Module : ctx_r0.en.Module);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.module);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.modulesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Name : ctx_r0.en.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Description : ctx_r0.en.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.lan == "es" ? ctx_r0.es.Permission : ctx_r0.en.Permission, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.permission);
  }
}
class PermissionsModalComponent {
  constructor(dialogRef, snackBar, languageService, data) {
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.languageService = languageService;
    this.data = data;
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faClose;
    this.FaPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlus;
    this.FaRedoAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faRedoAlt;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrashAlt;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEdit;
    this.lan = 'es';
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.isNew = true;
    this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.permission = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.module = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.editPermission = false;
    this.permissionsList = [];
    this.modulesList = [];
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.itemData = data;
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.isNew = true;
      this.editPermission = true;
    }
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
  }
  ngOnInit() {
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {}
  }
  closeAndCancelModal() {
    this.dialogRef.close();
  }
  saveUser() {
    // console.log(this.profile.value);
    // if (this.name.value == undefined && this.name.value == null || this.name.value === "") {
    //   this.snackBar.open("Ingrese un nombre", '',
    //     {
    //       panelClass: "mensaje-error",
    //       duration: 3000
    //     });
    //   return;
    // }
    // if (this.profile.value == undefined && this.profile.value == null || this.profile.value === '') {
    //   this.snackBar.open("Seleccione el perfil", '',
    //     {
    //       panelClass: "mensaje-error",
    //       duration: 3000
    //     });
    //   return;
    // }
    // this.show = true;
  }
  edit(item) {
    this.isNew = false;
    this.editPermission = true;
    this.patchValues(item);
  }
  delete(id) {}
  patchValues(item) {
    this.name.patchValue(item.name);
    this.description.patchValue(item.description);
    this.permission.patchValue(item.permission);
  }
  static {
    this.ɵfac = function PermissionsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PermissionsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PermissionsModalComponent,
      selectors: [["app-permissions-modal"]],
      decls: 17,
      vars: 12,
      consts: [["input", ""], [1, "m-card", "p-20", "overflowA", 2, "max-height", "80vh"], ["fxLayout", "row", "fxLayoutAlign", "end start"], [1, "color-boton", "boton", "closeIcon", "pointer", 3, "click", "icon", "matTooltip"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px", "width", "100%"], ["class", "customText fuente f-w-b", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end start", 1, "mt-20", "mr-a"], ["class", "mr-10 mb-10", 4, "ngIf"], [1, "mb-10"], ["color", "primary", 1, "btn-l-100b", 3, "click", "matTooltip"], ["fxLayout", "column", "fxLayoutAlign", "start center", "class", "w-100", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", "class", "mt-20 mb-10", 4, "ngIf"], [1, "customText", "fuente", "f-w-b"], [1, "mr-10", "mb-10"], ["color", "warn", 1, "btn-l-warning", 3, "click", "matTooltip"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "w-100"], ["role", "listitem", 1, "w-100"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100", "mt-10", "mb-10"], [1, "f-w-b"], ["role", "list", "class", "w-100", 4, "ngFor", "ngForOf"], ["role", "list", 1, "w-100"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "icon-button", "mr-10", "mt-5", "pointer", 3, "click", "icon", "matTooltip"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "mt-20", "mb-10"], [1, "w-100"], ["matInput", "", 3, "formControl"], [1, "icon-button-warning", "mr-10", "mt-5", "pointer", 3, "click", "icon", "matTooltip"], ["name", "Perfil", 3, "placeholder", "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function PermissionsModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "fa-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_Template_fa_icon_click_2_listener() {
            return ctx.closeAndCancelModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PermissionsModalComponent_mat_card_title_4_Template, 2, 1, "mat-card-title", 5)(5, PermissionsModalComponent_mat_card_title_5_Template, 2, 1, "mat-card-title", 5)(6, PermissionsModalComponent_mat_card_title_6_Template, 2, 1, "mat-card-title", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PermissionsModalComponent_div_8_Template, 3, 2, "div", 7)(9, PermissionsModalComponent_div_9_Template, 3, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_Template_button_click_11_listener() {
            return ctx.saveUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, PermissionsModalComponent_div_14_Template, 10, 4, "div", 10)(15, PermissionsModalComponent_div_15_Template, 18, 9, "div", 11)(16, PermissionsModalComponent_div_16_Template, 21, 10, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Close : ctx.en.Close);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faClose);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isNew && !ctx.editPermission);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isNew && ctx.editPermission);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isNew && ctx.editPermission);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isNew && ctx.editPermission || ctx.isNew && !ctx.editPermission);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isNew && ctx.editPermission);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Save : ctx.en.Save);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Save : ctx.en.Save, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isNew && ctx.editPermission);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isNew && ctx.editPermission);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isNew && !ctx.editPermission);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListItem, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutAlignDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 56655:
/*!*********************************************************************!*\
  !*** ./src/app/administration/permissions/permissions.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsComponent: () => (/* binding */ PermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _state_permissions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/permissions.actions */ 49453);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_permissions_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/permissions.selector */ 89717);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);























const _c0 = () => [25, 50, 100];
function PermissionsComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Name : ctx_r1.en.Name, " ");
  }
}
function PermissionsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r3.name);
  }
}
function PermissionsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Code : ctx_r1.en.Code, " ");
  }
}
function PermissionsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r4.code);
  }
}
function PermissionsComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ModuleName : ctx_r1.en.ModuleName, " ");
  }
}
function PermissionsComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r5.moduleName);
  }
}
function PermissionsComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Description : ctx_r1.en.Description, " ");
  }
}
function PermissionsComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r6.description);
  }
}
function PermissionsComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 22);
  }
}
function PermissionsComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 23);
  }
}
function PermissionsComponent_mat_paginator_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-paginator", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
  }
}
class PermissionsComponent {
  constructor(languageService, _paginator, storeDispatch, storeApi) {
    this.languageService = languageService;
    this._paginator = _paginator;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.FaPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPlus;
    this.FaRedoAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faRedoAlt;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faTrashAlt;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEdit;
    this.showPaginator = false;
    this.type = [];
    this.list = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.type);
    this.filterList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.type);
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.displayedColumns = ['code', 'name', 'moduleName', 'description'];
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.permissionsListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    }, 500);
  }
  ngOnInit() {
    this.getList();
    this.languageServiceSubs = this.languageService.getLanguage().subscribe(lan => {
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
    this.permissionsListSubs.unsubscribe();
  }
  getList() {
    this.permissionsListSubs = this.storeApi.select(_state_permissions_selector__WEBPACK_IMPORTED_MODULE_3__.selectPermissionsList).subscribe(data => {
      this.list.data = data.permissionsList;
      if (this.list.data.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_permissions_actions__WEBPACK_IMPORTED_MODULE_1__.loadPermissionsList)());
        this.permissionsListSubs.unsubscribe();
      }
    });
  }
  reload() {
    this.storeDispatch.dispatch((0,_state_permissions_actions__WEBPACK_IMPORTED_MODULE_1__.loadPermissionsList)());
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
    this.ɵfac = function PermissionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: PermissionsComponent,
      selectors: [["app-permissions"]],
      viewQuery: function PermissionsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 30,
      vars: 11,
      consts: [["table", ""], [1, "containerComponent"], [1, "containerComponent__custom"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "ml-0", "containerComponent__custom-title", 2, "margin-right", "auto"], [1, "icon-button", "mr-20", "mt-10", 3, "click", "icon", "matTooltip"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", 1, "forceCenter", 3, "keyup", "placeholder"], ["matSuffix", ""], [1, "containerComponent__table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["matColumnDef", "moduleName"], ["matColumnDef", "description"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions"]],
      template: function PermissionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "fa-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PermissionsComponent_Template_fa_icon_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.reload());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 6)(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function PermissionsComponent_Template_input_keyup_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.applyFilter($event.target));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9)(13, "table", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PermissionsComponent_th_16_Template, 2, 1, "th", 12)(17, PermissionsComponent_td_17_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, PermissionsComponent_th_19_Template, 2, 1, "th", 12)(20, PermissionsComponent_td_20_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](21, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, PermissionsComponent_th_22_Template, 2, 1, "th", 12)(23, PermissionsComponent_td_23_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](24, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, PermissionsComponent_th_25_Template, 2, 1, "th", 12)(26, PermissionsComponent_td_26_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, PermissionsComponent_tr_27_Template, 1, 0, "tr", 17)(28, PermissionsComponent_tr_28_Template, 1, 0, "tr", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, PermissionsComponent_mat_paginator_29_Template, 1, 2, "mat-paginator", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Permissions : ctx.en.Permissions, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx.lan == "es" ? ctx.es.Reload : ctx.en.Reload, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.FaRedoAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.list);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPaginator);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 89717:
/*!**************************************************************************!*\
  !*** ./src/app/administration/permissions/state/permissions.selector.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectPermissionsList: () => (/* binding */ selectPermissionsList),
/* harmony export */   selectPermissonsListFeature: () => (/* binding */ selectPermissonsListFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const selectPermissonsListFeature = state => state.permissionsList;
const selectPermissionsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectPermissonsListFeature,
// selectPlazas2,
state => state);
// export const selectCompanyById = createSelector(
//     selectCompanyByIdFeature,
//     // selectPlazas2,
//     (state: CompanyState) => state.company,
// );

/***/ }),

/***/ 68679:
/*!*************************************************************************!*\
  !*** ./src/app/administration/roles/role-modal/role-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleModalComponent: () => (/* binding */ RoleModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 99172);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 96354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 96697);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var _state_roles_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/roles.actions */ 35413);
/* harmony import */ var _state_roles_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/roles.selector */ 86365);
/* harmony import */ var _permissions_state_permissions_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../permissions/state/permissions.selector */ 89717);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _permissions_state_permissions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../permissions/state/permissions.actions */ 49453);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/keycodes */ 67336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ 36471);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ 60850);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);
































const _c0 = ["permissionInput"];
function RoleModalComponent_mat_card_title_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddRole : ctx_r1.en.AddRole, " ");
  }
}
function RoleModalComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.EditRole : ctx_r1.en.EditRole, " ");
  }
}
function RoleModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RoleModalComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                    ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, " ");
  }
}
function RoleModalComponent_div_22_span_5_Template(rf, ctx) {
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
function RoleModalComponent_div_22_span_6_Template(rf, ctx) {
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
function RoleModalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 28)(4, "mat-slide-toggle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RoleModalComponent_div_22_span_5_Template, 2, 1, "span", 30)(6, RoleModalComponent_div_22_span_6_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.lan == "es" ? ctx_r1.es.Status : ctx_r1.en.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.status.value == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.status.value == false);
  }
}
function RoleModalComponent_mat_chip_row_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-chip-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("removed", function RoleModalComponent_mat_chip_row_29_Template_mat_chip_row_removed_0_listener() {
      const permission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.remove(permission_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 32)(3, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const permission_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", permission_r5, " ");
  }
}
function RoleModalComponent_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const permission_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", permission_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", permission_r6.name, " ");
  }
}
class RoleModalComponent {
  constructor(dialogRef, snackBar, languageService, storeDispatch, actions$, storeApi, data, permissionsGuard) {
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.languageService = languageService;
    this.storeDispatch = storeDispatch;
    this.actions$ = actions$;
    this.storeApi = storeApi;
    this.data = data;
    this.permissionsGuard = permissionsGuard;
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faClose;
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
    this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
    // isAntique = new FormControl(false, [Validators.required]);
    this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
    this.isNew = true;
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.listPermissions = [];
    this.permissionsAdd = [];
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.COMMA];
    this.permissionCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('');
    this.updateRoleSub = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.getByIdSub = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.permissionListSub = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.itemData = data;
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.isNew = false;
    }
    this.filteredPermissions = this.permissionCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.startWith)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(permission => permission != undefined ? this._filter(permission) : this.listPermissions.slice()));
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.updateRoleSub.unsubscribe();
    this.getByIdSub.unsubscribe();
    this.permissionListSub.unsubscribe();
  }
  ngOnInit() {
    this.getListPermissions();
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.getById(this.itemData.item);
    }
  }
  closeAndCancelModal() {
    this.dialogRef.close();
  }
  save() {
    if (!this.permissionCtrl.valid || !this.name.valid || this.permissionsAdd.length == 0) {
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
    let arrayPermissions = [];
    this.permissionsAdd.forEach(value => {
      this.listPermissions.forEach(p => {
        if (p.name == value) {
          arrayPermissions.push(p.id);
        }
      });
    });
    if (this.isNew) {
      let role = {
        name: this.name.value,
        description: this.description.value,
        permissions: arrayPermissions
      };
      this.storeDispatch.dispatch((0,_state_roles_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionAddRole)({
        loading: true,
        role: role
      }));
    } else {
      let role = {
        id: this.itemData.id,
        name: this.name.value,
        description: this.description.value,
        status: this.status.value,
        permissions: arrayPermissions
      };
      this.storeDispatch.dispatch((0,_state_roles_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionUpdateRole)({
        loading: true,
        role: role
      }));
      this.updateRoleSub = this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.ofType)('[Update Role] Finish UpdateRole')).subscribe(result => {
        this.getById(result.Role);
        this.updateRoleSub.unsubscribe();
      });
    }
  }
  getById(data) {
    this.storeDispatch.dispatch((0,_state_roles_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionRoleById)({
      loading: true,
      role: data
    }));
    this.getByIdSub = this.storeApi.select(_state_roles_selector__WEBPACK_IMPORTED_MODULE_2__.selectRoleById).subscribe(role => {
      this.patchValues(role);
      this.getByIdSub.unsubscribe();
    });
  }
  patchValues(itemData) {
    this.permissionsAdd = [];
    this.itemData = itemData;
    this.name.patchValue(itemData.name);
    this.description.patchValue(itemData.description);
    this.status.patchValue(itemData.status);
    if (itemData && itemData.permissions) {
      itemData.permissions.forEach(value => {
        this.permissionsAdd.push(value.name);
      });
    }
    this.permissionsAdd = this.permissionsAdd;
  }
  getListPermissions() {
    this.permissionListSub = this.storeApi.select(_permissions_state_permissions_selector__WEBPACK_IMPORTED_MODULE_3__.selectPermissionsList).subscribe(data => {
      this.listPermissions = data.permissionsList;
      if (this.listPermissions.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_permissions_state_permissions_actions__WEBPACK_IMPORTED_MODULE_5__.loadPermissionsList)());
        this.permissionListSub.unsubscribe();
      }
    });
  }
  add(event) {
    let findPermission = this.permissionsAdd.find(p => p?.trim() == (event.value || '').trim());
    let findPermissionReady = this.listPermissions.find(p => p.name?.trim() == (event.value || '').trim());
    if (findPermission == undefined && findPermissionReady != undefined) {
      const value = (event.value || '').trim();
      this.permissionsAdd.push(value);
      event.chipInput.clear();
      this.permissionCtrl.setValue(null);
    }
  }
  remove(permission) {
    const index = this.permissionsAdd.indexOf(permission);
    if (index >= 0) {
      this.permissionsAdd.splice(index, 1);
      this.permissionsAdd = this.permissionsAdd;
    }
  }
  selected(event) {
    let findPermission = this.permissionsAdd.find(p => p?.trim() == event.option.viewValue.trim());
    let findPermissionReady = this.listPermissions.find(p => p.name?.trim() == event.option.viewValue.trim());
    if (findPermission == undefined && findPermissionReady != undefined) {
      this.permissionsAdd.push(event.option.viewValue?.trim());
      this.permissionInput.nativeElement.value = '';
      this.permissionCtrl.setValue(null);
    }
  }
  _filter(value) {
    if (value == undefined || value == '') {
      return [];
    } else {
      if (typeof value == 'string') {
        const filterValue = value.toLowerCase();
        let array = [];
        array = this.listPermissions.filter(permission => permission.name.toLowerCase().includes(filterValue));
        return array;
      } else {
        const filterValue = value.name.toLowerCase();
        let array = [];
        array = this.listPermissions.filter(permission => permission.name.toLowerCase().includes(filterValue));
        return array;
      }
    }
  }
  static {
    this.ɵfac = function RoleModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RoleModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_7__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: RoleModalComponent,
      selectors: [["app-role-modal"]],
      viewQuery: function RoleModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.permissionInput = _t.first);
        }
      },
      decls: 36,
      vars: 22,
      consts: [["input", ""], ["chipGrid", ""], ["permissionInput", ""], ["auto", "matAutocomplete"], [1, "m-card", "p-20", "overflowA", 2, "max-height", "90vh"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "w-100"], [1, "w-100"], ["class", "containerComponent__custom-title", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end end", 1, "mt-20", "w-100"], [1, "mr-10", "mb-10"], ["color", "warn", 1, "btn-l-warning", 3, "click", "matTooltip"], ["class", "mb-10", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "mt-20", "mb-10"], ["appearance", "outline", 1, "w-100", "mr-20", "mb-10"], ["matInput", "", 3, "formControl", "maxLength"], ["appearance", "outline", 1, "w-100", "mb-10", "mr-10"], ["matInput", "", 1, "mht", 3, "formControl", "maxLength"], ["fxLayout", "column", "fxLayoutAlign", "center center", "class", "mb-20", 4, "ngIf"], ["appearance", "outline", 1, "example-chip-list", "w-100"], ["aria-label", "Permission selection"], [3, "removed", 4, "ngFor", "ngForOf"], [3, "matChipInputTokenEnd", "placeholder", "formControl", "matChipInputFor", "matAutocomplete", "matChipInputSeparatorKeyCodes"], [3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], [1, "containerComponent__custom-title"], [1, "mb-10"], ["color", "primary", 1, "btn-l-100b", 3, "click", "matTooltip"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-20"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "primary", 1, "mt-10", 3, "formControl"], [4, "ngIf"], [3, "removed"], ["matChipRemove", ""], [2, "color", "red"], [3, "value"]],
      template: function RoleModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RoleModalComponent_mat_card_title_3_Template, 2, 1, "mat-card-title", 7)(4, RoleModalComponent_mat_card_title_4_Template, 2, 1, "mat-card-title", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 8)(6, "div", 9)(7, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RoleModalComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.closeAndCancelModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, RoleModalComponent_div_9_Template, 3, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 12)(12, "div", 5)(13, "mat-form-field", 13)(14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-form-field", 15)(19, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "textarea", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, RoleModalComponent_div_22_Template, 7, 4, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 5)(24, "mat-form-field", 18)(25, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-chip-grid", 19, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, RoleModalComponent_mat_chip_row_29_Template, 5, 1, "mat-chip-row", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "input", 21, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("matChipInputTokenEnd", function RoleModalComponent_Template_input_matChipInputTokenEnd_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.add($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-autocomplete", 22, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("optionSelected", function RoleModalComponent_Template_mat_autocomplete_optionSelected_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.selected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, RoleModalComponent_mat_option_34_Template, 2, 2, "mat-option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          const chipGrid_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](28);
          const auto_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isNew || !ctx.isNew && ctx.permissionsGuard.Permission("UpdateUser"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Name : ctx.en.Name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.name)("maxLength", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Description : ctx.en.Description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.description)("maxLength", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Permissions : ctx.en.Permissions, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.permissionsAdd);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.SearchPermission : ctx.en.SearchPermission);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.permissionCtrl)("matChipInputFor", chipGrid_r7)("matAutocomplete", auto_r8)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 20, ctx.filteredPermissions));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipRow, _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 6515:
/*!*********************************************************!*\
  !*** ./src/app/administration/roles/roles.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesComponent: () => (/* binding */ RolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _role_modal_role_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-modal/role-modal.component */ 68679);
/* harmony import */ var _state_roles_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/roles.actions */ 35413);
/* harmony import */ var _state_roles_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/roles.selector */ 86365);
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
function RolesComponent_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RolesComponent_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", " ", ctx_r2.lan == "es" ? ctx_r2.es.AddRole : ctx_r2.en.AddRole, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.FaPlus);
  }
}
function RolesComponent_th_17_Template(rf, ctx) {
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
function RolesComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r4.name, " ");
  }
}
function RolesComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Description : ctx_r2.en.Description, " ");
  }
}
function RolesComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r5.description, " ");
  }
}
function RolesComponent_th_23_Template(rf, ctx) {
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
function RolesComponent_td_24_span_1_Template(rf, ctx) {
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
function RolesComponent_td_24_span_2_Template(rf, ctx) {
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
function RolesComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RolesComponent_td_24_span_1_Template, 2, 1, "span", 24)(2, RolesComponent_td_24_span_2_Template, 2, 1, "span", 24);
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
function RolesComponent_th_26_Template(rf, ctx) {
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
function RolesComponent_td_27_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RolesComponent_td_27_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.edit(element_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.EditRole : ctx_r2.en.EditRole, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.faEdit);
  }
}
function RolesComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RolesComponent_td_27_fa_icon_2_Template, 1, 3, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("GetRoleById"));
  }
}
function RolesComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 28);
  }
}
function RolesComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 29);
  }
}
function RolesComponent_mat_paginator_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-paginator", 30);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class RolesComponent {
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
    this.displayedColumns = ['name', 'description', 'status', 'actions'];
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.selectRoleListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
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
    this.selectRoleListSubs.unsubscribe();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    }, 500);
  }
  getList() {
    this.selectRoleListSubs = this.storeApi.select(_state_roles_selector__WEBPACK_IMPORTED_MODULE_4__.selectRolesList).subscribe(data => {
      this.list.data = data.rolesList;
      if (data.rolesList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_roles_actions__WEBPACK_IMPORTED_MODULE_3__.loadRolesList)());
        this.selectRoleListSubs.unsubscribe();
      }
    });
  }
  refreshList() {
    this.storeDispatch.dispatch((0,_state_roles_actions__WEBPACK_IMPORTED_MODULE_3__.loadRolesList)());
  }
  add() {
    const dialogRef = this.dialog.open(_role_modal_role_modal_component__WEBPACK_IMPORTED_MODULE_2__.RoleModalComponent, {
      width: '80vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result) {
        this.getList();
      }
    });
  }
  delete(item) {
    this.storeDispatch.dispatch((0,_state_roles_actions__WEBPACK_IMPORTED_MODULE_3__.loadActionDeleteRole)({
      loading: true,
      role: item
    }));
  }
  edit(item) {
    const dialogRef = this.dialog.open(_role_modal_role_modal_component__WEBPACK_IMPORTED_MODULE_2__.RoleModalComponent, {
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
    this.ɵfac = function RolesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: RolesComponent,
      selectors: [["app-roles"]],
      viewQuery: function RolesComponent_Query(rf, ctx) {
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
      consts: [["table", ""], [1, "containerComponent"], [1, "containerComponent__custom"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "ml-0", "containerComponent__custom-title", 2, "margin-right", "auto"], ["class", "icon-button mt-10", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "ml-20", "mr-20", "mt-10", 3, "click", "icon", "matTooltip"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", 1, "forceCenter", 3, "keyup", "placeholder"], ["matSuffix", ""], [1, "containerComponent__table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", 4, "ngIf"], [1, "icon-button", "mt-10", 3, "click", "icon", "matTooltip"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["class", "icon-button\n                            pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "pointer", 3, "click", "icon", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions"]],
      template: function RolesComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, RolesComponent_fa_icon_5_Template, 1, 3, "fa-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "fa-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RolesComponent_Template_fa_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.refreshList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 7)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function RolesComponent_Template_input_keyup_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.applyFilter($event.target));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "table", 11, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, RolesComponent_th_17_Template, 2, 1, "th", 13)(18, RolesComponent_td_18_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, RolesComponent_th_20_Template, 2, 1, "th", 13)(21, RolesComponent_td_21_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, RolesComponent_th_23_Template, 2, 1, "th", 13)(24, RolesComponent_td_24_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RolesComponent_th_26_Template, 2, 1, "th", 13)(27, RolesComponent_td_27_Template, 3, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, RolesComponent_tr_28_Template, 1, 0, "tr", 18)(29, RolesComponent_tr_29_Template, 1, 0, "tr", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, RolesComponent_mat_paginator_30_Template, 1, 2, "mat-paginator", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Roles : ctx.en.Roles, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.permissionsGuard.Permission("CreateRole"));
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

/***/ 86365:
/*!**************************************************************!*\
  !*** ./src/app/administration/roles/state/roles.selector.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectRoleById: () => (/* binding */ selectRoleById),
/* harmony export */   selectRoleByIdFeature: () => (/* binding */ selectRoleByIdFeature),
/* harmony export */   selectRolesList: () => (/* binding */ selectRolesList),
/* harmony export */   selectRolesListFeature: () => (/* binding */ selectRolesListFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const selectRolesListFeature = state => state.rolesList;
const selectRoleByIdFeature = state => state.roleById;
const selectRolesList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRolesListFeature, state => state);
const selectRoleById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRoleByIdFeature,
// selectPlazas2,
state => state.role);

/***/ }),

/***/ 43784:
/*!*************************************************************************!*\
  !*** ./src/app/administration/users/user-modal/user-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModalComponent: () => (/* binding */ UserModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 99172);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 96354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 96697);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/keycodes */ 67336);
/* harmony import */ var _roles_state_roles_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../roles/state/roles.actions */ 35413);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _roles_state_roles_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../roles/state/roles.selector */ 86365);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var _state_users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/users.actions */ 60221);
/* harmony import */ var _state_users_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/users.selector */ 36677);
/* harmony import */ var src_app_catalogs_production_process_state_production_process_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/catalogs/production-process/state/production-process.selector */ 16691);
/* harmony import */ var src_app_catalogs_production_process_state_production_process_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/catalogs/production-process/state/production-process.actions */ 64439);
/* harmony import */ var src_app_catalogs_customers_state_customers_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/catalogs/customers/state/customers.selector */ 32583);
/* harmony import */ var src_app_catalogs_customers_state_customers_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/catalogs/customers/state/customers.actions */ 10883);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ 99327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ 82798);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/chips */ 36471);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/autocomplete */ 60850);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/flex-layout/extended */ 16038);










































const _c0 = ["roleInput"];
const _c1 = ["proccessInput"];
const _c2 = (a0, a1) => ({
  "mr-10 ml-10": a0,
  "": a1
});
const _c3 = (a0, a1) => ({
  "mr-10": a0,
  "": a1
});
function UserModalComponent_mat_card_title_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card-title", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.AddUser : ctx_r1.en.AddUser, " ");
  }
}
function UserModalComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card-title", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.EditUser : ctx_r1.en.EditUser, " ");
  }
}
function UserModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35)(1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UserModalComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Save : ctx_r1.en.Save, " ");
  }
}
function UserModalComponent_mat_form_field_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-form-field", 20)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "fa-icon", 37)(4, "input", 38, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](6, _c2, !ctx_r1.isXsScreen, ctx_r1.isXsScreen));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Password : ctx_r1.en.Password, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.PatternPassword : ctx_r1.en.PatternPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r1.faCircleQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.password)("pattern", ctx_r1.patternPassword);
  }
}
function UserModalComponent_mat_form_field_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-form-field", 18)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "fa-icon", 37)(4, "input", 38, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ConfirmPassword : ctx_r1.en.ConfirmPassword, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.PatternPassword : ctx_r1.en.PatternPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r1.faCircleQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.confirmPassword)("pattern", ctx_r1.patternPassword);
  }
}
function UserModalComponent_mat_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? item_r4.es : item_r4.en, " ");
  }
}
function UserModalComponent_mat_form_field_42_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UserModalComponent_mat_form_field_42_mat_option_6_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.getId("client"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r7.name);
  }
}
function UserModalComponent_mat_form_field_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-form-field", 18)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UserModalComponent_mat_form_field_42_Template_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.getId("client"));
    })("keyup", function UserModalComponent_mat_form_field_42_Template_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.applyFilterFiltersCustomers($event.target, "client"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-autocomplete", 41, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, UserModalComponent_mat_form_field_42_mat_option_6_Template, 3, 2, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const Clients_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Client : ctx_r1.en.Client, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.lan == "es" ? ctx_r1.es.Client : ctx_r1.en.Client);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.client)("matAutocomplete", Clients_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.customersList);
  }
}
function UserModalComponent_mat_chip_row_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-chip-row", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("removed", function UserModalComponent_mat_chip_row_49_Template_mat_chip_row_removed_0_listener() {
      const role_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.remove(role_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 46)(3, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const role_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", role_r10, " ");
  }
}
function UserModalComponent_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", role_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", role_r11.name, " ");
  }
}
function UserModalComponent_mat_chip_row_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-chip-row", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("removed", function UserModalComponent_mat_chip_row_61_Template_mat_chip_row_removed_0_listener() {
      const proccess_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.removeProccess(proccess_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 46)(3, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const proccess_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", proccess_r13, " ");
  }
}
function UserModalComponent_mat_option_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proccess_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", proccess_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", proccess_r14.name, " ");
  }
}
function UserModalComponent_div_68_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Active : ctx_r1.en.Active, " ");
  }
}
function UserModalComponent_div_68_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Inactive : ctx_r1.en.Inactive, " ");
  }
}
function UserModalComponent_div_68_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Yes : ctx_r1.en.Yes, " ");
  }
}
function UserModalComponent_div_68_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.No : ctx_r1.en.No, " ");
  }
}
function UserModalComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 50)(5, "mat-slide-toggle", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, UserModalComponent_div_68_span_6_Template, 2, 1, "span", 52)(7, UserModalComponent_div_68_span_7_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 53)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 50)(12, "mat-slide-toggle", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, UserModalComponent_div_68_span_13_Template, 2, 1, "span", 52)(14, UserModalComponent_div_68_span_14_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.lan == "es" ? ctx_r1.es.Status : ctx_r1.en.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.status.value == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.status.value == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.lan == "es" ? ctx_r1.es.Lock : ctx_r1.en.Lock);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.lockout);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.lockout.value == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.lockout.value == false);
  }
}
class UserModalComponent {
  constructor(dialogRef, languageService, storeDispatch, actions$, storeApi, snackBar, permissionsGuard, breakpointObserver, data) {
    this.dialogRef = dialogRef;
    this.languageService = languageService;
    this.storeDispatch = storeDispatch;
    this.actions$ = actions$;
    this.storeApi = storeApi;
    this.snackBar = snackBar;
    this.permissionsGuard = permissionsGuard;
    this.breakpointObserver = breakpointObserver;
    this.data = data;
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faClose;
    this.lan = 'es';
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.isNew = true;
    this.faCircleQuestion = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCircleQuestion;
    this.faQuestionCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faQuestionCircle;
    this.faQuestion = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faQuestion;
    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
    this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
    this.confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
    this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
    this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
    this.secondLastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
    this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
    this.lockout = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
    this.patternPassword = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$';
    this.patternMail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.listRoles = [];
    this.listProductionProccess = [];
    this.rolesAdd = [];
    this.proccessAdd = [];
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.COMMA];
    this.type = [];
    this.roleCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('');
    this.proccessCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('');
    this.client = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
    this.userType = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(2, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
    this.customersList = [];
    this.usersTypes = [{
      id: 1,
      es: 'Administrador',
      en: 'Administrator'
    }, {
      id: 2,
      es: 'Operador',
      en: 'Operator'
    }, {
      id: 3,
      es: 'Cliente',
      en: 'Client'
    }];
    this.filterListCustomers = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(this.type);
    this.IdCustomerSelected = 0;
    this.customersListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
    this.isXsScreen = false;
    this.updateUserSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
    this.userByIdSubs = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
    this.itemData = data;
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
    if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
      this.isNew = false;
    }
    this.filteredRoles = this.roleCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(role => role != undefined ? this._filter(role) : this.listRoles.slice()));
    this.filteredProccess = this.proccessCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(proccess => proccess != undefined ? this._filterProccess(proccess) : this.listProductionProccess.slice()));
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.userByIdSubs.unsubscribe();
    this.updateUserSubscription.unsubscribe();
    this.customersListSubs.unsubscribe();
    this.breakpointObserver.ngOnDestroy();
  }
  ngOnInit() {
    this.getListRoles();
    this.getListProductionProccess();
    this.getCustomersList();
    this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__.Breakpoints.XSmall]).subscribe(result => {
      this.isXsScreen = result.matches;
    });
  }
  getCustomersList() {
    this.customersListSubs = this.storeApi.select(src_app_catalogs_customers_state_customers_selector__WEBPACK_IMPORTED_MODULE_8__.selectCustomersList).subscribe(data => {
      this.customersList = data.customersList;
      this.filterListCustomers.data = data.customersList;
      if (data.customersList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,src_app_catalogs_customers_state_customers_actions__WEBPACK_IMPORTED_MODULE_9__.loadCustomersList)());
        this.customersListSubs.unsubscribe();
      }
    });
  }
  getById(data) {
    this.storeDispatch.dispatch((0,_state_users_actions__WEBPACK_IMPORTED_MODULE_4__.loadActionUserById)({
      loading: true,
      user: data
    }));
    this.languageServiceSubs.unsubscribe();
    this.userByIdSubs = this.storeApi.select(_state_users_selector__WEBPACK_IMPORTED_MODULE_5__.selectUserById).subscribe(user => {
      this.patchValues(user);
      this.userByIdSubs.unsubscribe();
    });
  }
  closeAndCancelModal() {
    this.dialogRef.close();
  }
  save() {
    if (this.userType.value == 3 && (!this.IdCustomerSelected || this.IdCustomerSelected == 0)) {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.CustomerRequired;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.CustomerRequired;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 3000
      });
      return;
    }
    let roles = [];
    this.rolesAdd.forEach(x => {
      let findRole = this.listRoles.find(role => role.name == x);
      if (findRole != undefined) {
        roles.push(findRole.id);
      }
    });
    let proccesses = [];
    this.proccessAdd.forEach(x => {
      let findProccess = this.listProductionProccess.find(proccess => proccess.name == x);
      if (findProccess != undefined) {
        proccesses.push(findProccess.id);
      }
    });
    if (this.isNew) {
      if (!this.firstName.valid || !this.lastName.valid || !this.secondLastName.valid || !this.email.valid || !this.password.valid || !this.confirmPassword.valid || this.rolesAdd.length == 0
      // this.proccessAdd.length == 0
      ) {
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
      if (this.email.valid && this.password.valid && this.password.value != this.confirmPassword.value) {
        let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.ConfirmPasswordNotMatch;
        if (this.lan == 'en') {
          message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.ConfirmPasswordNotMatch;
        }
        this.snackBar.open(message, '', {
          panelClass: "mensaje-error",
          duration: 3000
        });
        return;
      }
      let user = {
        // id: number,
        email: this.email.value,
        password: this.password.value,
        confirmPassword: this.confirmPassword.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        secondLastName: this.secondLastName.value,
        roles: roles,
        productionProcessIds: proccesses,
        userType: this.userType.value == 1 ? 'Administrator' : this.userType.value == 2 ? 'Operator' : 'Client',
        customerId: this.userType.value == 3 ? this.IdCustomerSelected : null
      };
      this.storeDispatch.dispatch((0,_state_users_actions__WEBPACK_IMPORTED_MODULE_4__.loadActionAddUser)({
        loading: true,
        user: user
      }));
    } else {
      if (!this.firstName.valid || !this.lastName.valid || !this.secondLastName.valid || !this.email.valid || this.rolesAdd.length == 0
      // this.proccessAdd.length == 0
      ) {
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
      let user = {
        id: this.itemData.item.id,
        email: this.email.value,
        password: this.password.value,
        confirmPassword: this.confirmPassword.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        secondLastName: this.secondLastName.value,
        roles: roles,
        lockout: this.lockout.value,
        status: this.status.value,
        productionProcessIds: proccesses,
        userType: this.userType.value == 1 ? 'Administrator' : this.userType.value == 2 ? 'Operator' : 'Client',
        customerId: this.userType.value == 3 ? this.IdCustomerSelected : null
      };
      this.storeDispatch.dispatch((0,_state_users_actions__WEBPACK_IMPORTED_MODULE_4__.loadActionUpdateUser)({
        loading: true,
        user: user
      }));
      this.updateUserSubscription = this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.take)(1), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_22__.ofType)('[Update User] Finish UpdateUser')).subscribe(result => {
        this.getById(result.user);
        this.updateUserSubscription.unsubscribe();
      });
    }
  }
  patchValues(itemData) {
    this.email.patchValue(itemData.email);
    this.secondLastName.patchValue(itemData.secondLastName);
    this.firstName.patchValue(itemData.firstName);
    this.lastName.patchValue(itemData.lastName);
    this.status.patchValue(itemData.status);
    this.lockout.patchValue(itemData.lockoutEnabled);
    this.userType.patchValue(itemData.userType == 'Client' ? 3 : itemData.userType == 'Operator' ? 2 : 1);
    if (itemData.customerId) {
      this.IdCustomerSelected = itemData.customerId;
      let findCustomer = this.customersList.find(customer => customer.id === this.IdCustomerSelected);
      this.client.patchValue(findCustomer.name);
    }
    this.rolesAdd = [];
    this.proccessAdd = [];
    if (itemData != undefined && itemData.roles != undefined) {
      itemData.roles.forEach(value => {
        let roleFind = this.rolesAdd.find(x => x == value.name);
        if (roleFind == undefined) {
          this.rolesAdd.push(value.name);
        }
      });
      this.rolesAdd = this.rolesAdd;
    }
    if (itemData != undefined && itemData.productionProcessIds != undefined) {
      itemData.productionProcessIds.forEach(value => {
        let findProccess = this.listProductionProccess.find(y => y.id == value);
        if (findProccess) {
          let proccessFindAdd = this.proccessAdd.find(x => x == findProccess.name);
          if (proccessFindAdd == undefined) {
            this.proccessAdd.push(findProccess.name);
          }
        }
      });
      this.proccessAdd = this.proccessAdd;
    }
  }
  getListRoles() {
    this.storeApi.select(_roles_state_roles_selector__WEBPACK_IMPORTED_MODULE_3__.selectRolesList).subscribe(data => {
      this.listRoles = data.rolesList;
      if (this.listRoles.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_roles_state_roles_actions__WEBPACK_IMPORTED_MODULE_1__.loadRolesList)());
      }
    });
  }
  getListProductionProccess() {
    this.storeApi.select(src_app_catalogs_production_process_state_production_process_selector__WEBPACK_IMPORTED_MODULE_6__.selectProductionProcessList).subscribe(data => {
      this.listProductionProccess = data.productionProcessList;
      if (this.itemData != undefined && this.itemData != null && this.itemData.item != undefined && this.itemData.item != null) {
        this.getById(this.itemData.item);
      }
      if (this.listProductionProccess.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,src_app_catalogs_production_process_state_production_process_actions__WEBPACK_IMPORTED_MODULE_7__.loadProductionProcessList)());
      }
    });
  }
  add(event) {
    let findrole = this.rolesAdd.find(p => p?.trim() == (event.value || '').trim());
    let findroleReady = this.listRoles.find(p => p.name?.trim() == (event.value || '').trim());
    if (findrole == undefined && findroleReady != undefined) {
      const value = (event.value || '').trim();
      this.rolesAdd.push(value);
      event.chipInput.clear();
      this.roleCtrl.setValue(null);
    }
  }
  addProccess(event) {
    let findProcces = this.proccessAdd.find(p => p?.trim() == (event.value || '').trim());
    let findProccesReady = this.listProductionProccess.find(p => p.name?.trim() == (event.value || '').trim());
    if (findProcces == undefined && findProccesReady != undefined) {
      const value = (event.value || '').trim();
      this.proccessAdd.push(value);
      event.chipInput.clear();
      this.proccessCtrl.setValue(null);
      console.log(this.proccessAdd);
    }
  }
  remove(role) {
    const index = this.rolesAdd.indexOf(role);
    if (index >= 0) {
      this.rolesAdd.splice(index, 1);
      this.rolesAdd = this.rolesAdd;
    }
  }
  removeProccess(proccess) {
    const index = this.proccessAdd.indexOf(proccess);
    if (index >= 0) {
      this.proccessAdd.splice(index, 1);
      this.proccessAdd = this.proccessAdd;
      console.log(this.proccessAdd);
    }
  }
  selected(event) {
    let findrole = this.rolesAdd.find(p => p?.trim() == event.option.viewValue.trim());
    let findroleReady = this.listRoles.find(p => p.name?.trim() == event.option.viewValue.trim());
    if (findrole == undefined && findroleReady != undefined) {
      this.rolesAdd.push(event.option.viewValue?.trim());
      this.roleInput.nativeElement.value = '';
      this.roleCtrl.setValue(null);
    }
  }
  selectedProccess(event) {
    let findProccess = this.proccessAdd.find(p => p?.trim() == event.option.viewValue.trim());
    let findProccessReady = this.listProductionProccess.find(p => p.name?.trim() == event.option.viewValue.trim());
    if (findProccess == undefined && findProccessReady != undefined) {
      this.proccessAdd.push(event.option.viewValue?.trim());
      this.proccessInput.nativeElement.value = '';
      this.proccessCtrl.setValue(null);
    }
  }
  _filterProccess(value) {
    if (value == undefined || value == '') {
      return this.listProductionProccess;
    } else {
      if (typeof value == 'string') {
        const filterValue = value.toLowerCase();
        let array = [];
        array = this.listProductionProccess.filter(proccess => proccess.name.toLowerCase().includes(filterValue));
        return array;
      } else {
        const filterValue = value.name.toLowerCase();
        let array = [];
        array = this.listProductionProccess.filter(proccess => proccess.name.toLowerCase().includes(filterValue));
        return array;
      }
    }
  }
  _filter(value) {
    if (value == undefined || value == '') {
      return this.listRoles;
    } else {
      if (typeof value == 'string') {
        const filterValue = value.toLowerCase();
        let array = [];
        array = this.listRoles.filter(role => role.name.toLowerCase().includes(filterValue));
        return array;
      } else {
        const filterValue = value.name.toLowerCase();
        let array = [];
        array = this.listRoles.filter(role => role.name.toLowerCase().includes(filterValue));
        return array;
      }
    }
  }
  applyFilterFiltersCustomers(filterValue, opc) {
    switch (opc) {
      case 'client':
        this.filterListCustomers.filter = filterValue.value.trim().toLowerCase();
        if (this.filterListCustomers.paginator) {
          this.filterListCustomers.paginator.firstPage();
        }
        if (this.filterListCustomers.filter != null) {
          this.customersList = this.filterListCustomers.filteredData;
        }
        break;
    }
  }
  getId(opc) {
    switch (opc) {
      case 'client':
        let idFindCustomer = this.customersList.find(item => item.name.toLowerCase() == this.client.value?.toLowerCase());
        if (idFindCustomer != undefined) {
          this.IdCustomerSelected = idFindCustomer.id;
        }
        break;
    }
  }
  clearCustomerSelected() {
    this.IdCustomerSelected = 0;
    this.client.patchValue('');
  }
  static {
    this.ɵfac = function UserModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_10__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_24__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_22__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_24__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_11__.PermissionsGuard), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: UserModalComponent,
      selectors: [["app-user-modal"]],
      viewQuery: function UserModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.roleInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.proccessInput = _t.first);
        }
      },
      decls: 69,
      vars: 54,
      consts: [["input", ""], ["chipGrid", ""], ["roleInput", ""], ["auto", "matAutocomplete"], ["chipGrid2", ""], ["proccessInput", ""], ["auto2", "matAutocomplete"], ["Clients", "matAutocomplete"], [1, "m-card", "p-20", "overflowA", 2, "max-height", "80vh"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px", "width", "100%"], [1, "w-100"], ["class", "containerComponent__custom-title", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end end", 1, "mt-20", "w-100"], [1, "mr-10", "mb-10"], ["color", "warn", 1, "btn-l-warning", 3, "click", "matTooltip"], ["class", "mb-10", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "mt-10", "w-100"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "w-100"], ["appearance", "outline", 1, "w-100"], ["matInput", "", 3, "formControl"], ["appearance", "outline", 1, "w-100", 3, "ngClass"], ["matInput", "", 3, "formControl", "readonly"], ["appearance", "outline", "class", "w-100", 3, "ngClass", 4, "ngIf"], ["appearance", "outline", "class", "w-100", 4, "ngIf"], ["name", "Perfil", 3, "selectionChange", "placeholder", "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "example-chip-list", "w-100", 3, "ngClass"], ["aria-label", "role selection"], [3, "removed", 4, "ngFor", "ngForOf"], [3, "matChipInputTokenEnd", "placeholder", "formControl", "matChipInputFor", "matAutocomplete", "matChipInputSeparatorKeyCodes"], [3, "optionSelected"], ["appearance", "outline", 1, "example-chip-list", "w-100"], ["aria-label", "proccess selection"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutAlign.xs", "space-between center", "class", "w-100 ml-10", 4, "ngIf"], [1, "containerComponent__custom-title"], [1, "mb-10"], ["color", "primary", 1, "btn-l-100b", 3, "click", "matTooltip"], ["matSuffix", "", 1, "icon-pattern-required", "mr-10", 3, "icon", "matTooltip"], ["matInput", "", 3, "formControl", "pattern"], [3, "value"], ["type", "text", "matInput", "", "required", "", 3, "click", "keyup", "placeholder", "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "click", "value"], [1, "fuente"], [3, "removed"], ["matChipRemove", ""], [2, "color", "red"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutAlign.xs", "space-between center", 1, "w-100", "ml-10"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-10", "mr-10"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "primary", 1, "mt-10", 3, "formControl"], [4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center"]],
      template: function UserModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, UserModalComponent_mat_card_title_3_Template, 2, 1, "mat-card-title", 11)(4, UserModalComponent_mat_card_title_4_Template, 2, 1, "mat-card-title", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 12)(6, "div", 13)(7, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function UserModalComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.closeAndCancelModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, UserModalComponent_div_9_Template, 3, 2, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 16)(12, "div", 17)(13, "mat-form-field", 18)(14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "input", 19, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "mat-form-field", 20)(19, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "input", 19, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "mat-form-field", 18)(24, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "input", 19, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 17)(29, "mat-form-field", 18)(30, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "input", 21, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, UserModalComponent_mat_form_field_34_Template, 6, 9, "mat-form-field", 22)(35, UserModalComponent_mat_form_field_35_Template, 6, 5, "mat-form-field", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 17)(37, "mat-form-field", 20)(38, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "mat-select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function UserModalComponent_Template_mat_select_selectionChange_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.clearCustomerSelected());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, UserModalComponent_mat_option_41_Template, 2, 2, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, UserModalComponent_mat_form_field_42_Template, 7, 5, "mat-form-field", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 17)(44, "mat-form-field", 26)(45, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "mat-chip-grid", 27, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](49, UserModalComponent_mat_chip_row_49_Template, 5, 1, "mat-chip-row", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "input", 29, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("matChipInputTokenEnd", function UserModalComponent_Template_input_matChipInputTokenEnd_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.add($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "mat-autocomplete", 30, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("optionSelected", function UserModalComponent_Template_mat_autocomplete_optionSelected_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.selected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](54, UserModalComponent_mat_option_54_Template, 2, 2, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](55, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "mat-form-field", 31)(57, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "mat-chip-grid", 32, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, UserModalComponent_mat_chip_row_61_Template, 5, 1, "mat-chip-row", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "input", 29, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("matChipInputTokenEnd", function UserModalComponent_Template_input_matChipInputTokenEnd_62_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.addProccess($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "mat-autocomplete", 30, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("optionSelected", function UserModalComponent_Template_mat_autocomplete_optionSelected_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.selectedProccess($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](66, UserModalComponent_mat_option_66_Template, 2, 2, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](67, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](68, UserModalComponent_div_68_Template, 15, 8, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const chipGrid_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](48);
          const auto_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](53);
          const chipGrid2_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](60);
          const auto2_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isNew || !ctx.isNew && ctx.permissionsGuard.Permission("UpdateRole"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.FirstName : ctx.en.FirstName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.firstName);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](45, _c2, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.LastName : ctx.en.LastName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.lastName);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.SecondLastName : ctx.en.SecondLastName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.secondLastName);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Email : ctx.en.Email, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.email)("readonly", !ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isNew);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](48, _c3, !ctx.isXsScreen && ctx.userType.value == 3, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.UserType : ctx.en.UserType, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.UserType : ctx.en.UserType);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.userType);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.usersTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.userType.value == 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](51, _c3, !ctx.isXsScreen, ctx.isXsScreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Roles : ctx.en.Roles, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.rolesAdd);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.Searchrole : ctx.en.Searchrole);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.roleCtrl)("matChipInputFor", chipGrid_r15)("matAutocomplete", auto_r16)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](55, 41, ctx.filteredRoles));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.ProductionProcesses : ctx.en.ProductionProcesses, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.proccessAdd);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.SearchProccess : ctx.en.SearchProccess);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.proccessCtrl)("matChipInputFor", chipGrid2_r17)("matAutocomplete", auto2_r18)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](67, 43, ctx.filteredProccess));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isNew);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_29__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__.MatChipRow, _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_34__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_36__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__.MatSlideToggle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_39__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_39__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_40__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 1880:
/*!*********************************************************!*\
  !*** ./src/app/administration/users/users.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-modal/user-modal.component */ 43784);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var _state_users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/users.actions */ 60221);
/* harmony import */ var _state_users_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/users.selector */ 36677);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../servicio.service */ 66977);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);




























const _c0 = () => [25, 50, 100];
function UsersComponent_fa_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_fa_icon_5_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r2.lan == "es" ? ctx_r2.es.AddUser : ctx_r2.en.AddUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r2.FaPlus);
  }
}
function UsersComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Email : ctx_r2.en.Email, " ");
  }
}
function UsersComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r4.email);
  }
}
function UsersComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.FullName : ctx_r2.en.FullName, " ");
  }
}
function UsersComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r5.fullName);
  }
}
function UsersComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Profile : ctx_r2.en.Profile, " ");
  }
}
function UsersComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r6.profile);
  }
}
function UsersComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Status : ctx_r2.en.Status, " ");
  }
}
function UsersComponent_td_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Active : ctx_r2.en.Active, " ");
  }
}
function UsersComponent_td_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Inactive : ctx_r2.en.Inactive, " ");
  }
}
function UsersComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UsersComponent_td_27_span_1_Template, 2, 1, "span", 26)(2, UsersComponent_td_27_span_2_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r7.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r7.status == false);
  }
}
function UsersComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Lock : ctx_r2.en.Lock, " ");
  }
}
function UsersComponent_td_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Yes : ctx_r2.en.Yes, " ");
  }
}
function UsersComponent_td_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.No : ctx_r2.en.No, " ");
  }
}
function UsersComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UsersComponent_td_30_span_1_Template, 2, 1, "span", 26)(2, UsersComponent_td_30_span_2_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r8.lockoutEnabled == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r8.lockoutEnabled == false);
  }
}
function UsersComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Actions : ctx_r2.en.Actions, " ");
  }
}
function UsersComponent_td_33_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_td_33_fa_icon_2_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.edit(element_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                            ", ctx_r2.lan == "es" ? ctx_r2.es.EditUser : ctx_r2.en.EditUser, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r2.faEdit);
  }
}
function UsersComponent_td_33_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_td_33_fa_icon_3_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.resetPassword(element_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("matTooltip", "\n                        ", ctx_r2.lan == "es" ? ctx_r2.es.ResetPassword : ctx_r2.en.ResetPassword, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r2.faKey);
  }
}
function UsersComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UsersComponent_td_33_fa_icon_2_Template, 1, 3, "fa-icon", 28)(3, UsersComponent_td_33_fa_icon_3_Template, 1, 3, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("GetUserById"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.permissionsGuard.Permission("AdminChangePassword"));
  }
}
function UsersComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 32);
  }
}
function UsersComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 33);
  }
}
function UsersComponent_mat_paginator_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-paginator", 34);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}
class UsersComponent {
  constructor(snackBar, dialog, languageService, _paginator, storeDispatch, storeApi, permissionsGuard, servicioService) {
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.languageService = languageService;
    this._paginator = _paginator;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.permissionsGuard = permissionsGuard;
    this.servicioService = servicioService;
    this.FaPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPlus;
    this.FaRedoAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faRedoAlt;
    this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTrashAlt;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEdit;
    this.faKey = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faKey;
    this.showPaginator = false;
    this.lan = "es";
    this.type = [];
    this.list = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.type);
    this.filterList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.type);
    this.displayedColumns = ['email',
    // 'firstName',
    // 'lastName',
    // 'secondLastName',
    'fullName',
    // 'profile',
    'active', 'lock', 'actions'];
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en;
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.usersListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.usersListSubs.unsubscribe();
  }
  ngOnInit() {
    this.list.paginator = this.paginator;
    this.list.sort = this.sort;
    this.getList();
    this.languageServiceSubs = this.languageService.getLanguage().subscribe(lan => {
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
  ngAfterViewInit() {
    setTimeout(() => {
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    }, 500);
  }
  getList() {
    this.usersListSubs = this.storeApi.select(_state_users_selector__WEBPACK_IMPORTED_MODULE_3__.selectUsersList).subscribe(data => {
      this.list.data = data.usersList;
      if (data.usersList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_state_users_actions__WEBPACK_IMPORTED_MODULE_2__.loadUsersList)());
        this.usersListSubs.unsubscribe();
      }
    });
  }
  add() {
    const dialogRef = this.dialog.open(_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_0__.UserModalComponent, {
      width: '80vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.success) {
        setTimeout(() => {
          this.list.data = this.list.data;
        }, 500);
      }
    });
  }
  delete(id) {}
  edit(item) {
    const dialogRef = this.dialog.open(_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_0__.UserModalComponent, {
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
  refreshList() {
    this.storeDispatch.dispatch((0,_state_users_actions__WEBPACK_IMPORTED_MODULE_2__.loadUsersList)());
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
  resetPassword(item) {
    const url = 'users/' + item.id + '/change-password/by-admin';
    this.servicioService.PutRequest(url, 'IdentityProvider', {
      password: 'Pass123$',
      confirmPassword: 'Pass123$'
    }).subscribe(response => {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es.RestorePasswordOk;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en.RestorePasswordOk;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-confirmation",
        duration: 3000
      });
      return;
    }, err => {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es.ErrorServer;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en.ErrorServer;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 3000
      });
      return;
    });
  }
  static {
    this.ɵfac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__.PermissionsGuard), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_servicio_service__WEBPACK_IMPORTED_MODULE_7__.ServicioService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      viewQuery: function UsersComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 37,
      vars: 11,
      consts: [["table", ""], [1, "containerComponent"], [1, "containerComponent__custom"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "ml-0", "containerComponent__custom-title", 2, "margin-right", "auto"], ["class", "icon-button ml-10 mt-10", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "ml-20", "mr-20", "mt-10", 3, "click", "icon", "matTooltip"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", 1, "forceCenter", 3, "keyup", "placeholder"], ["matSuffix", ""], [1, "containerComponent__table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "email"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fullName"], ["matColumnDef", "profile"], ["matColumnDef", "active"], ["matColumnDef", "lock"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", 4, "ngIf"], [1, "icon-button", "ml-10", "mt-10", 3, "click", "icon", "matTooltip"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["class", "icon-button\n                            pointer mr-5", 3, "icon", "matTooltip", "click", 4, "ngIf"], ["class", "icon-button\n                        pointer", 3, "icon", "matTooltip", "click", 4, "ngIf"], [1, "icon-button", "pointer", "mr-5", 3, "click", "icon", "matTooltip"], [1, "icon-button", "pointer", 3, "click", "icon", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-card-title", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, UsersComponent_fa_icon_5_Template, 1, 2, "fa-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "fa-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_Template_fa_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.refreshList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-form-field", 7)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function UsersComponent_Template_input_keyup_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.applyFilter($event.target));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10)(14, "table", 11, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, UsersComponent_th_17_Template, 2, 1, "th", 13)(18, UsersComponent_td_18_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](19, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, UsersComponent_th_20_Template, 2, 1, "th", 13)(21, UsersComponent_td_21_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](22, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, UsersComponent_th_23_Template, 2, 1, "th", 13)(24, UsersComponent_td_24_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](25, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, UsersComponent_th_26_Template, 2, 1, "th", 13)(27, UsersComponent_td_27_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](28, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, UsersComponent_th_29_Template, 2, 1, "th", 13)(30, UsersComponent_td_30_Template, 3, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](31, 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, UsersComponent_th_32_Template, 2, 1, "th", 13)(33, UsersComponent_td_33_Template, 4, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, UsersComponent_tr_34_Template, 1, 0, "tr", 20)(35, UsersComponent_tr_35_Template, 1, 0, "tr", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, UsersComponent_mat_paginator_36_Template, 1, 2, "mat-paginator", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.User : ctx.en.User, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.permissionsGuard.Permission("CreateUser"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Reload : ctx.en.Reload);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.FaRedoAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", ctx.lan == "es" ? ctx.es.Filter : ctx.en.Filter);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.list);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showPaginator);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatSuffix, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutAlignDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 32583:
/*!****************************************************************!*\
  !*** ./src/app/catalogs/customers/state/customers.selector.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectCustomerById: () => (/* binding */ selectCustomerById),
/* harmony export */   selectCustomerByIdFeature: () => (/* binding */ selectCustomerByIdFeature),
/* harmony export */   selectCustomerTypeList: () => (/* binding */ selectCustomerTypeList),
/* harmony export */   selectCustomerTypeListFeature: () => (/* binding */ selectCustomerTypeListFeature),
/* harmony export */   selectCustomersList: () => (/* binding */ selectCustomersList),
/* harmony export */   selectCustomersListFeature: () => (/* binding */ selectCustomersListFeature),
/* harmony export */   selectTaxSectionList: () => (/* binding */ selectTaxSectionList),
/* harmony export */   selectTaxSectionListFeature: () => (/* binding */ selectTaxSectionListFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const selectCustomersListFeature = state => state.customersList;
const selectCustomerByIdFeature = state => state.customerById;
const selectTaxSectionListFeature = state => state.taxSectionList;
const selectCustomerTypeListFeature = state => state.customerTypeList;
const selectCustomersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCustomersListFeature,
// selectPlazas2,
state => state);
const selectCustomerById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCustomerByIdFeature,
// selectPlazas2,
state => state.customer);
const selectTaxSectionList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectTaxSectionListFeature,
// selectPlazas2,
state => state);
const selectCustomerTypeList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCustomerTypeListFeature,
// selectPlazas2,
state => state);

/***/ })

}]);