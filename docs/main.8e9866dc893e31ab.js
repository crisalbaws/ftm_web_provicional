(self["webpackChunkFTM"] = self["webpackChunkFTM"] || []).push([[792],{

/***/ 49453:
/*!*************************************************************************!*\
  !*** ./src/app/administration/permissions/state/permissions.actions.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadPermissionsList: () => (/* binding */ loadPermissionsList),
/* harmony export */   loadedPermissionsList: () => (/* binding */ loadedPermissionsList)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadPermissionsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Permissions List] Init PermissionsList');
const loadedPermissionsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Permissions List] Finish PermissionsList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
// export const loadActionAddCompany = createAction(
//   '[Add Company] Init AddCompany',
//   props<{
//     loading: boolean,
//     company: PermissionModel,
//   }>()   //Propiedades
// );
// export const addCompany = createAction(
//   '[Add Company] Finish AddCompany',  //Type
//   props<{
//     loading: boolean,
//     company: PermissionModel,
//   }>()   //Propiedades
// );
// export const loadActionUpdateCompany = createAction(
//   '[Update Company] Init UpdateCompany',
//   props<{
//     loading: boolean,
//     company: PermissionModel,
//   }>()   //Propiedades
// );
// export const updateCompany = createAction(
//   '[Update Company] Update success',  //Type
//   props<{
//     loading: boolean,
//     company: PermissionModel,
//   }>()   //Propiedades
// );
// export const loadActionCompanyById = createAction(
//   '[GetById Company] Init GetByIdCompany',  //Type
//   props<{
//     loading: boolean,
//     company: PermissionModel,
//   }>()   //Propiedades
// );
// export const companyById = createAction(
//   '[GetById Company] Finish GetByIdCompany',  //Type
//   props<{
//     loading: boolean,
//     company: PermissionModel,
//   }>()   //Propiedades
// );
// export const loadActionDeleteCompany = createAction(
//   '[Delete Company] Init DeleteCompany',  //Type
//   props<{
//     loading: boolean,
//     company: PermissionModel,
//   }>()   //Propiedades
// );
// export const deleteCompany = createAction(
//   '[Delete Company] Finish DeleteCompany',  //Type
//   props<{
//     loading: boolean,
//     company: PermissionModel,
//   }>()   //Propiedades
// );
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 78164:
/*!*************************************************************************!*\
  !*** ./src/app/administration/permissions/state/permissions.effects.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsEffects: () => (/* binding */ PermissionsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _permissions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions.actions */ 49453);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicio.service */ 66977);
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/api.service */ 47018);









class PermissionsEffects {
  constructor(actions$, servicio, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.apiService = apiService;
    this.lan = '';
    this.permissionsList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Permissions List] Init PermissionsList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.servicio.GetRequest("permissions", "IdentityProvider").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_permissions_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Permissions List] Finish PermissionsList',
          permissionsList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    // addCompany = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType('[Add Company] Init AddCompany'),
    //         switchMap((body: any) =>
    //             this.servicio.PostRequest("Permissions", "APIREST", body.company).pipe(
    //                 catchError(error =>
    //                     of(errorApi({ loading: true, error: error }))
    //                 ),
    //                 map((response: any) => {
    //                     let validateResponse = this.apiService.finishResponseServer(response, 'Add');
    //                     validateResponse.refreshList == true ? this.storeDispatch.dispatch(loadPermissionsList()) : false;
    //                     return ({
    //                         type: '[Add Company] Finish AddCompany',
    //                         company: response,
    //                     });
    //                 })
    //             ))
    //     )
    // })
    // updateCompany = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType('[Update Company] Init UpdateCompany'),
    //         switchMap((body: any) =>
    //             this.servicio.PutRequest("Permissions/" + body.company.id, "APIREST", body.company).pipe(
    //                 catchError(error =>
    //                     of(errorApi({ loading: true, error: error }))
    //                 ),
    //                 map((response: any) => {
    //                     let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
    //                     validateResponse.refreshList == true ? this.storeDispatch.dispatch(loadPermissionsList()) : false;
    //                     return ({
    //                         type: '[Update Company] Finish UpdateCompany',
    //                         company: response,
    //                     });
    //                 })
    //             ))
    //     )
    // })
    // getByIdCompany = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType('[GetById Company] Init GetByIdCompany'),
    //         switchMap((body: any) =>
    //             this.servicio.GetRequest("Permissions/" + body.company.id, "APIREST").pipe(
    //                 catchError(error =>
    //                     of(errorApi({ loading: true, error: error }))
    //                 ),
    //                 map((response: any) => {
    //                     this.apiService.finishResponseServer(response, 'Get');
    //                     return ({
    //                         type: '[GetById Company] Finish GetByIdCompany',
    //                         company: response,
    //                     });
    //                 })
    //             ))
    //     )
    // })
    // deleteCompany = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType('[Delete Company] Init DeleteCompany'),
    //         switchMap((body: any) =>
    //             this.servicio.DeleteRequest("Permissions/" + body.company.id, "APIREST").pipe(
    //                 catchError(error =>
    //                     of(errorApi({ loading: true, error: error }))
    //                 ),
    //                 map((response: any) => {
    //                     let validateResponse = this.apiService.finishResponseServer(response, 'Delete');
    //                     validateResponse.refreshList == true ? this.storeDispatch.dispatch(loadPermissionsList()) : false;
    //                     return ({
    //                         type: '[Delete Company] Finish DeleteCompany',
    //                         company: response,
    //                     });
    //                 })
    //             ))
    //     )
    // })
    this.error = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Error Api] Error API'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(error => {
        return {
          type: '[Error Api] Error API',
          error: error
        };
      }));
    });
  }
  static {
    this.ɵfac = function PermissionsEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PermissionsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: PermissionsEffects,
      factory: PermissionsEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 23965:
/*!**************************************************************************!*\
  !*** ./src/app/administration/permissions/state/permissions.reducers.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   permissionsListReducer: () => (/* binding */ permissionsListReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _permissions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permissions.actions */ 49453);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  permissionsList: [],
  dateUpdate: ''
};
const permissionsListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_permissions_actions__WEBPACK_IMPORTED_MODULE_0__.loadPermissionsList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_permissions_actions__WEBPACK_IMPORTED_MODULE_0__.loadedPermissionsList, (state, permissionsList) => {
  return {
    ...state,
    loading: false,
    permissionsList: permissionsList.permissionsList,
    dateUpdate: permissionsList.dateUpdate
  };
}));
// export const companyByIdReducer = createReducer(
//     initialStatecompanyById,
//     on(companyById, (state, company) => {
//         return { ...state, loading: false, company: company.company }
//     }),
// );

/***/ }),

/***/ 35413:
/*!*************************************************************!*\
  !*** ./src/app/administration/roles/state/roles.actions.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRole: () => (/* binding */ addRole),
/* harmony export */   deleteRole: () => (/* binding */ deleteRole),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadActionAddRole: () => (/* binding */ loadActionAddRole),
/* harmony export */   loadActionDeleteRole: () => (/* binding */ loadActionDeleteRole),
/* harmony export */   loadActionRoleById: () => (/* binding */ loadActionRoleById),
/* harmony export */   loadActionUpdateRole: () => (/* binding */ loadActionUpdateRole),
/* harmony export */   loadRolesList: () => (/* binding */ loadRolesList),
/* harmony export */   loadedRolesList: () => (/* binding */ loadedRolesList),
/* harmony export */   roleById: () => (/* binding */ roleById),
/* harmony export */   updateRole: () => (/* binding */ updateRole)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadRolesList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Roles List] Init RolesList');
const loadedRolesList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Roles List] Finish RolesList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddRole = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Role] Init AddRole', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addRole = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Role] Finish AddRole',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateRole = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Role] Init UpdateRole', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateRole = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Role] Finish UpdateRole',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionRoleById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Role] Init GetByIdRole',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const roleById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Role] Finish GetByIdRole',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteRole = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Role] Init DeleteRole',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteRole = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Role] Finish DeleteRole',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 45292:
/*!*************************************************************!*\
  !*** ./src/app/administration/roles/state/roles.effects.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesEffects: () => (/* binding */ RolesEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _roles_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.actions */ 35413);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);











class RolesEffects {
  constructor(actions$, servicio, dialog, storeDispatch, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.dialog = dialog;
    this.storeDispatch = storeDispatch;
    this.apiService = apiService;
    this.rolesList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Roles List] Init RolesList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.servicio.GetRequest("roles", "IdentityProvider").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_roles_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Roles List] Finish RolesList',
          rolesList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.addRole = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add Role] Init AddRole'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("roles", "IdentityProvider", body.role).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_roles_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_roles_actions__WEBPACK_IMPORTED_MODULE_0__.loadRolesList)()) : false;
        return {
          type: '[Add Role] Finish AddRole',
          roles: response
        };
      }))));
    });
    this.updateRole = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update Role] Init UpdateRole'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("roles/" + body.role.id, "IdentityProvider", body.role).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_roles_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_roles_actions__WEBPACK_IMPORTED_MODULE_0__.loadRolesList)()) : false;
        return {
          type: '[Update Role] Finish UpdateRole',
          roles: body.role
        };
      }))));
    });
    this.getByIdRole = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById Role] Init GetByIdRole'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("roles/" + body.role.id, "IdentityProvider").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_roles_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById Role] Finish GetByIdRole',
          role: response
        };
      }))));
    });
    this.deleteRole = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete Role] Init DeleteRole'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("roles/" + body.role.id, "IdentityProvider").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_roles_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_roles_actions__WEBPACK_IMPORTED_MODULE_0__.loadRolesList)()) : false;
        return {
          type: '[Delete Role] Finish DeleteRole',
          roles: response
        };
      }))));
    });
    this.error = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Error Api] Error API'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(error => {
        return {
          type: '[Error Api] Error API',
          error: error
        };
      }));
    });
  }
  static {
    this.ɵfac = function RolesEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RolesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: RolesEffects,
      factory: RolesEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 60485:
/*!**************************************************************!*\
  !*** ./src/app/administration/roles/state/roles.reducers.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateRoleById: () => (/* binding */ initialStateRoleById),
/* harmony export */   roleByIdReducer: () => (/* binding */ roleByIdReducer),
/* harmony export */   rolesListReducer: () => (/* binding */ rolesListReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _roles_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.actions */ 35413);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  rolesList: [],
  dateUpdate: ''
};
const initialStateRoleById = {
  loading: false,
  role: {}
};
const rolesListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_roles_actions__WEBPACK_IMPORTED_MODULE_0__.loadRolesList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_roles_actions__WEBPACK_IMPORTED_MODULE_0__.loadedRolesList, (state, rolesList) => {
  return {
    ...state,
    loading: false,
    rolesList: rolesList.rolesList,
    dateUpdate: rolesList.dateUpdate
  };
}));
const roleByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateRoleById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_roles_actions__WEBPACK_IMPORTED_MODULE_0__.roleById, (state, role) => {
  return {
    ...state,
    loading: false,
    role: role.role
  };
}));

/***/ }),

/***/ 60221:
/*!*************************************************************!*\
  !*** ./src/app/administration/users/state/users.actions.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserById: () => (/* binding */ UserById),
/* harmony export */   addUser: () => (/* binding */ addUser),
/* harmony export */   deleteUser: () => (/* binding */ deleteUser),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadActionAddUser: () => (/* binding */ loadActionAddUser),
/* harmony export */   loadActionDeleteUser: () => (/* binding */ loadActionDeleteUser),
/* harmony export */   loadActionUpdateUser: () => (/* binding */ loadActionUpdateUser),
/* harmony export */   loadActionUserById: () => (/* binding */ loadActionUserById),
/* harmony export */   loadUsersList: () => (/* binding */ loadUsersList),
/* harmony export */   loadedUsersList: () => (/* binding */ loadedUsersList),
/* harmony export */   updateUser: () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadUsersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users List] Init UsersList');
const loadedUsersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users List] Finish UsersList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add User] Init AddUser', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add User] Finish AddUser',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update User] Init UpdateUser', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update User] Update success',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUserById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById User] Init GetByIdUser',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const UserById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById User] Finish GetByIdUser',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete User] Init DeleteUser',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete User] Finish DeleteUser',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 5700:
/*!*************************************************************!*\
  !*** ./src/app/administration/users/state/users.effects.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersEffects: () => (/* binding */ UsersEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions */ 60221);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);











class UsersEffects {
  constructor(actions$, servicio, dialog, storeDispatch, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.dialog = dialog;
    this.storeDispatch = storeDispatch;
    this.apiService = apiService;
    this.lan = '';
    this.usersList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Users List] Init UsersList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.servicio.GetRequest("users", "IdentityProvider").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_users_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Users List] Finish UsersList',
          usersList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.addUser = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add User] Init AddUser'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("users", "IdentityProvider", body.user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_users_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_users_actions__WEBPACK_IMPORTED_MODULE_0__.loadUsersList)()) : false;
        return {
          type: '[Add User] Finish AddUser',
          user: response
        };
      }))));
    });
    this.updateUser = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update User] Init UpdateUser'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("users/" + body.user.id, "IdentityProvider", body.user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_users_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_users_actions__WEBPACK_IMPORTED_MODULE_0__.loadUsersList)()) : false;
        return {
          type: '[Update User] Finish UpdateUser',
          user: response
        };
      }))));
    });
    this.getByIdUser = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById User] Init GetByIdUser'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("users/" + body.user.id, "IdentityProvider").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_users_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById User] Finish GetByIdUser',
          user: response
        };
      }))));
    });
    this.deleteUser = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete User] Init DeleteUser'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("users/" + body.user.id, "IdentityProvider").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_users_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_users_actions__WEBPACK_IMPORTED_MODULE_0__.loadUsersList)()) : false;
        return {
          type: '[Delete User] Finish DeleteUser',
          user: response
        };
      }))));
    });
    this.error = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Error Api] Error API'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(error => {
        return {
          type: '[Error Api] Error API',
          error: error
        };
      }));
    });
  }
  static {
    this.ɵfac = function UsersEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: UsersEffects,
      factory: UsersEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 20461:
/*!**************************************************************!*\
  !*** ./src/app/administration/users/state/users.reducers.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateUserById: () => (/* binding */ initialStateUserById),
/* harmony export */   userByIdReducer: () => (/* binding */ userByIdReducer),
/* harmony export */   usersListReducer: () => (/* binding */ usersListReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions */ 60221);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  usersList: [],
  dateUpdate: ''
};
const initialStateUserById = {
  loading: false,
  user: {}
};
const usersListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.loadUsersList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.loadedUsersList, (state, usersList) => {
  return {
    ...state,
    loading: false,
    usersList: usersList.usersList,
    dateUpdate: usersList.dateUpdate
  };
}));
const userByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateUserById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.UserById, (state, user) => {
  return {
    ...state,
    loading: false,
    user: user.user
  };
}));

/***/ }),

/***/ 36677:
/*!**************************************************************!*\
  !*** ./src/app/administration/users/state/users.selector.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectUserById: () => (/* binding */ selectUserById),
/* harmony export */   selectUserByIdFeature: () => (/* binding */ selectUserByIdFeature),
/* harmony export */   selectUsersList: () => (/* binding */ selectUsersList),
/* harmony export */   selectUsersListFeature: () => (/* binding */ selectUsersListFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const selectUsersListFeature = state => state.usersList;
const selectUserByIdFeature = state => state.userById;
const selectUsersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectUsersListFeature,
// selectPlazas2,
state => state);
const selectUserById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectUserByIdFeature,
// selectPlazas2,
state => state.user);

/***/ }),

/***/ 73818:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy/privacy.component */ 98480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 99156);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 87176);
/* harmony import */ var _shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards/guardsApp.guard */ 3539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);







const routes = [{
  path: 'dashboard',
  loadComponent: () => __webpack_require__.e(/*! import() */ 624).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.component */ 7624)).then(m => m.DashboardComponent),
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_3__.GuardsAppGuard]
}, {
  path: 'reports',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(76), __webpack_require__.e(775)]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 69775)).then(m => m.ReportsModule)
}, {
  path: 'operations',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(310), __webpack_require__.e(321)]).then(__webpack_require__.bind(__webpack_require__, /*! ./operations/operations.module */ 72321)).then(m => m.OperationsModule)
}, {
  path: 'administration',
  loadChildren: () => __webpack_require__.e(/*! import() */ 97).then(__webpack_require__.bind(__webpack_require__, /*! ./administration/administration.module */ 33097)).then(m => m.AdministrationModule)
}, {
  path: 'catalogs',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(310), __webpack_require__.e(76), __webpack_require__.e(177)]).then(__webpack_require__.bind(__webpack_require__, /*! ./catalogs/catalogs.module */ 94177)).then(m => m.CatalogsModule)
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
  canActivate: [_shared_guards_guardsApp_guard__WEBPACK_IMPORTED_MODULE_3__.GuardsAppGuard]
}, {
  path: 'privacy',
  component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_0__.PrivacyComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: '**',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 44836:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent),
/* harmony export */   InactivityModalComponent: () => (/* binding */ InactivityModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 96697);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 40605);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 77048);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 11161);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var _shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/data/language */ 59217);
/* harmony import */ var _shared_state_shared_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/state/shared.selector */ 64612);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_state_shared_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/state/shared.actions */ 99578);
/* harmony import */ var _shared_security_menu_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/security/menu-validate */ 39497);
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/language.service */ 29936);
/* harmony import */ var _shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guards/permissions.guard */ 71986);
/* harmony import */ var _shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/security/sesion-validate */ 9511);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _shared_services_spinner_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/spinner.services */ 48658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ 90882);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);
/* harmony import */ var _shared_component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/component/spinner/spinner.component */ 68628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _navbar_navBar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navBar.component */ 57182);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 67575);




























const _c0 = ["accordion"];
function AppComponent_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "spinner");
  }
}
function AppComponent_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 13)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_div_12_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 17)(6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faDashboard);
  }
}
function AppComponent_div_1_mat_expansion_panel_13_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_13_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faShieldAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Permissions : ctx_r1.en.Permissions, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_13_mat_divider_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_13_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_13_a_9_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faUserCog);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Roles : ctx_r1.en.Roles, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_13_mat_divider_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_13_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_13_a_11_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faUserFriends);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Users : ctx_r1.en.Users, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_13_mat_divider_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-expansion-panel", 19)(1, "mat-expansion-panel-header")(2, "mat-panel-title", 20)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, AppComponent_div_1_mat_expansion_panel_13_a_7_Template, 7, 2, "a", 21)(8, AppComponent_div_1_mat_expansion_panel_13_mat_divider_8_Template, 1, 0, "mat-divider", 1)(9, AppComponent_div_1_mat_expansion_panel_13_a_9_Template, 7, 2, "a", 22)(10, AppComponent_div_1_mat_expansion_panel_13_mat_divider_10_Template, 1, 0, "mat-divider", 1)(11, AppComponent_div_1_mat_expansion_panel_13_a_11_Template, 7, 2, "a", 23)(12, AppComponent_div_1_mat_expansion_panel_13_mat_divider_12_Template, 1, 0, "mat-divider", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Administration : ctx_r1.en.Administration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListPermissions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListPermissions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListRoles"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListRoles"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListUsers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListUsers"));
  }
}
function AppComponent_div_1_mat_expansion_panel_14_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_14_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faHandshake);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Customers : ctx_r1.en.Customers, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_mat_divider_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_14_a_9_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faGripHorizontal);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Components : ctx_r1.en.Components, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_mat_divider_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_14_a_11_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faBuildingNgo);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Companies : ctx_r1.en.Companies, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_mat_divider_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_14_a_13_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faCubes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Materials : ctx_r1.en.Materials, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_mat_divider_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_a_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_14_a_15_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faFileInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ProductionProcess : ctx_r1.en.ProductionProcess, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_mat_divider_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_a_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_14_a_17_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faBowlFood);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Products : ctx_r1.en.Products, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_mat_divider_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-expansion-panel", 19)(1, "mat-expansion-panel-header")(2, "mat-panel-title", 20)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, AppComponent_div_1_mat_expansion_panel_14_a_7_Template, 7, 2, "a", 28)(8, AppComponent_div_1_mat_expansion_panel_14_mat_divider_8_Template, 1, 0, "mat-divider", 1)(9, AppComponent_div_1_mat_expansion_panel_14_a_9_Template, 7, 2, "a", 29)(10, AppComponent_div_1_mat_expansion_panel_14_mat_divider_10_Template, 1, 0, "mat-divider", 1)(11, AppComponent_div_1_mat_expansion_panel_14_a_11_Template, 7, 2, "a", 30)(12, AppComponent_div_1_mat_expansion_panel_14_mat_divider_12_Template, 1, 0, "mat-divider", 1)(13, AppComponent_div_1_mat_expansion_panel_14_a_13_Template, 7, 2, "a", 31)(14, AppComponent_div_1_mat_expansion_panel_14_mat_divider_14_Template, 1, 0, "mat-divider", 1)(15, AppComponent_div_1_mat_expansion_panel_14_a_15_Template, 7, 2, "a", 32)(16, AppComponent_div_1_mat_expansion_panel_14_mat_divider_16_Template, 1, 0, "mat-divider", 1)(17, AppComponent_div_1_mat_expansion_panel_14_a_17_Template, 7, 2, "a", 33)(18, AppComponent_div_1_mat_expansion_panel_14_mat_divider_18_Template, 1, 0, "mat-divider", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Catalogs : ctx_r1.en.Catalogs, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListCustomers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListCustomers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListComponents"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListComponents"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListCompanies"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListCompanies"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListMaterials"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListMaterials"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListProductionProcesses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListProductionProcesses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListItems"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListItems"));
  }
}
function AppComponent_div_1_mat_expansion_panel_15_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_15_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faFileInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.SalesOrders : ctx_r1.en.SalesOrders, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_15_mat_divider_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_15_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_15_a_9_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faList12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Orders : ctx_r1.en.Orders, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_15_mat_divider_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-expansion-panel", 19)(1, "mat-expansion-panel-header")(2, "mat-panel-title", 20)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, AppComponent_div_1_mat_expansion_panel_15_a_7_Template, 7, 2, "a", 40)(8, AppComponent_div_1_mat_expansion_panel_15_mat_divider_8_Template, 1, 0, "mat-divider", 1)(9, AppComponent_div_1_mat_expansion_panel_15_a_9_Template, 7, 2, "a", 41)(10, AppComponent_div_1_mat_expansion_panel_15_mat_divider_10_Template, 1, 0, "mat-divider", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Operations : ctx_r1.en.Operations, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListSalesOrders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListSalesOrders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListOrders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListOrders"));
  }
}
function AppComponent_div_1_mat_expansion_panel_16_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_16_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faFileAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ProductionLines : ctx_r1.en.ProductionLines, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_16_mat_divider_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_16_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_16_a_9_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faMoneyBill);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Bills : ctx_r1.en.Bills, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_16_mat_divider_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_16_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_16_a_11_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faMoneyBill);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.PayOrders : ctx_r1.en.PayOrders, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_16_mat_divider_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_16_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_mat_expansion_panel_16_a_13_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 17)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faMoneyBill);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.PaidOrders : ctx_r1.en.PaidOrders, " ");
  }
}
function AppComponent_div_1_mat_expansion_panel_16_mat_divider_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-divider");
  }
}
function AppComponent_div_1_mat_expansion_panel_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-expansion-panel", 19)(1, "mat-expansion-panel-header")(2, "mat-panel-title", 20)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, AppComponent_div_1_mat_expansion_panel_16_a_7_Template, 7, 2, "a", 44)(8, AppComponent_div_1_mat_expansion_panel_16_mat_divider_8_Template, 1, 0, "mat-divider", 1)(9, AppComponent_div_1_mat_expansion_panel_16_a_9_Template, 7, 2, "a", 45)(10, AppComponent_div_1_mat_expansion_panel_16_mat_divider_10_Template, 1, 0, "mat-divider", 1)(11, AppComponent_div_1_mat_expansion_panel_16_a_11_Template, 7, 2, "a", 46)(12, AppComponent_div_1_mat_expansion_panel_16_mat_divider_12_Template, 1, 0, "mat-divider", 1)(13, AppComponent_div_1_mat_expansion_panel_16_a_13_Template, 7, 2, "a", 47)(14, AppComponent_div_1_mat_expansion_panel_16_mat_divider_14_Template, 1, 0, "mat-divider", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Reports : ctx_r1.en.Reports, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ReportListSalesOrders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ReportListSalesOrders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ReportListBills"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ReportListBills"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ReportPayOrders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ReportPayOrders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ReportPaidOrders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ReportPaidOrders"));
  }
}
function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 3)(1, "app-navbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("propagar", function AppComponent_div_1_Template_app_navbar_propagar_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.procesaPropagar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-drawer-container", 5)(3, "mat-drawer", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("openedChange", function AppComponent_div_1_Template_mat_drawer_openedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.ShowSidebar, $event) || (ctx_r1.ShowSidebar = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_div_1_Template_fa_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.CerrarSideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "br")(9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "mat-accordion", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, AppComponent_div_1_div_12_Template, 8, 1, "div", 10)(13, AppComponent_div_1_mat_expansion_panel_13_Template, 13, 7, "mat-expansion-panel", 11)(14, AppComponent_div_1_mat_expansion_panel_14_Template, 19, 13, "mat-expansion-panel", 11)(15, AppComponent_div_1_mat_expansion_panel_15_Template, 11, 5, "mat-expansion-panel", 11)(16, AppComponent_div_1_mat_expansion_panel_16_Template, 15, 9, "mat-expansion-panel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "mat-drawer-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("opened", ctx_r1.ShowSidebar);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.Close : ctx_r1.en.Close);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r1.faAngleDoubleLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("Dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListUsers") || ctx_r1.permissionsGuard.Permission("ListPermissions") || ctx_r1.permissionsGuard.Permission("ListRoles"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListCompanies") || ctx_r1.permissionsGuard.Permission("ListMaterials") || ctx_r1.permissionsGuard.Permission("ListCustomers") || ctx_r1.permissionsGuard.Permission("ListItems") || ctx_r1.permissionsGuard.Permission("ListComponents") || ctx_r1.permissionsGuard.Permission("ListProductionProcesses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ListSalesOrders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ReportListSalesOrders"));
  }
}
function AppComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
}
const _c1 = ".example-icon[_ngcontent-%COMP%] {\n  padding: 2 2px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding-top: 0 !important;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  max-width: 400px;\n  padding: 20px;\n  padding-top: 0 !important;\n}\n\n.fullWidth[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.FotoUsuario[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 200px;\n  width: 200px;\n}\n\n.img-sidebar[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 100px;\n  padding-top: 20px;\n}\n\n.progressbar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: 1000000;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: rgb(43, 41, 126) !important;\n}\n\n.main-div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr;\n  height: 100%;\n}\n\n.app-sidenav[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.fuente[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold;\n}\n\n.position[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 5px;\n}\n\n[_nghost-%COMP%]     .nav {\n  background-color: rgba(22, 31, 52, 0.88);\n  color: white;\n}\n\n.icon-menu[_ngcontent-%COMP%] {\n  background: #eb8741;\n  border-radius: 20px;\n  border: 1px solid #fff;\n  width: 40px;\n  text-align: center;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 16px;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  background-color: #eb8741;\n  color: white;\n  border-radius: 20px;\n  border: 1px solid #e7bd2d !important;\n  outline: none;\n}\n\n.custom-button[_ngcontent-%COMP%]:focus {\n  border: 1px solid #e7bd2d !important;\n  outline: none;\n}\n\n.dash[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.dash[_ngcontent-%COMP%]:hover {\n  background: rgb(234, 233, 233);\n}";
class AppComponent {
  constructor(
  //private Progress: ProgressValidate,
  Menu, languageService, permissionsGuard, sesionValidate, storeDispatch, storeApi, dialog, spinnerService, _ruta) {
    this.Menu = Menu;
    this.languageService = languageService;
    this.permissionsGuard = permissionsGuard;
    this.sesionValidate = sesionValidate;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.dialog = dialog;
    this.spinnerService = spinnerService;
    this._ruta = _ruta;
    this.faDashboard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faDashboard;
    this.faUserFriends = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faUserFriends;
    this.faFileText = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faFileText;
    this.faUserShield = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faUserShield;
    this.faUserCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faUserCog;
    this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faAngleRight;
    this.faAngleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faAngleLeft;
    this.faAngleDoubleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faAngleDoubleLeft;
    this.faHandshake = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faHandshake;
    this.faBuildingNgo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faBuildingNgo;
    this.faShieldAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faShieldAlt;
    this.faGripHorizontal = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faGripHorizontal;
    this.faCubes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faCubes;
    this.faBowlFood = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faBowlFood;
    this.faPeopleArrowsLeftRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faPeopleArrowsLeftRight;
    this.faPeopleArrows = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faPeopleArrows;
    this.faFileInvoice = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faFileInvoice;
    this.faFileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faFileAlt;
    this.faList12 = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faList12;
    this.faMoneyBill = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faMoneyBill;
    this.lan = "es";
    this.es = _shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = _shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.title = 'citas';
    this.ShowSidebar = false;
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
    this.selectCatalogsSubs = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
    this.lang = '';
    this.timerActive = false;
    this.isLoading = false;
    this.go = () => {
      this._ruta.navigate(['home']);
    };
    this.NombreUsuario = this.Menu.ValorUsuario;
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.selectCatalogsSubs.unsubscribe();
    this.spinnerSubscription.unsubscribe();
  }
  ngOnInit() {
    this.spinnerSubscription = this.spinnerService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.resetInactivityTimer();
    document.addEventListener('mousemove', () => this.resetInactivityTimer());
    document.addEventListener('keydown', () => this.resetInactivityTimer());
    this.sesionValidate.validateSession();
    this.selectCatalogsSubs = this.storeApi.select(_shared_state_shared_selector__WEBPACK_IMPORTED_MODULE_1__.selectcatalogs).subscribe(data => {
      if (data != undefined && data.catalogs.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,_shared_state_shared_actions__WEBPACK_IMPORTED_MODULE_3__.loadcatalogs)());
        this.selectCatalogsSubs.unsubscribe();
      }
    });
  }
  resetInactivityTimer() {
    if (!this.permissionsGuard.Permission('NoAutoLogoutInactivity') && !this.timerActive && (localStorage.getItem('token') != null || localStorage.getItem("token") != undefined)) {
      if (this.inactivityTimer) {
        this.inactivityTimer.unsubscribe();
      }
      this.inactivityTimer = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.timer)(1000 * 60 * 10).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(() => {
        this.timerActive = true;
        this.inactivityTimer.unsubscribe();
        this.showInactivityModal();
      });
    }
  }
  showInactivityModal() {
    const dialogRef = this.dialog.open(InactivityModalComponent, {
      disableClose: true,
      height: "32vh",
      width: "40vw"
    });
    dialogRef.afterClosed().subscribe(() => {
      this.timerActive = false;
    });
  }
  procesaPropagar(mensaje) {
    if (mensaje) {
      if (this.ShowSidebar == false) this.ShowSidebar = mensaje;else this.ShowSidebar = !mensaje;
    } else this.ShowSidebar = false;
  }
  CerrarSideMenu() {
    this.ShowSidebar = false;
  }
  isAuth() {
    return localStorage.getItem('userData') ? true : false;
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_security_menu_validate__WEBPACK_IMPORTED_MODULE_4__.MenuValidate), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_6__.PermissionsGuard), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_7__.SessionValidate), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_spinner_services__WEBPACK_IMPORTED_MODULE_8__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatAccordion, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.Accordion = _t.first);
        }
      },
      inputs: {
        eventToggle: "eventToggle"
      },
      decls: 3,
      vars: 3,
      consts: [["accordion", "matAccordion"], [4, "ngIf"], ["class", "main-div", 4, "ngIf"], [1, "main-div"], [1, "mb-0", 3, "propagar"], [1, "app-sidenav"], ["mode", "over", 1, "m-0", "p-0", 3, "openedChange", "opened"], ["fxLayout", "row", "fxLayoutAlign", "end center", "tooltip", "Cerrar\n        menu"], ["src", "../../assets/img/logoTomas.jpg", "width", "auto", "height", "50", "alt", "", 1, "mr-a", "ml-20"], ["matTooltipPosition", "below", 1, "mr-20", "pointer", 3, "click", "icon", "matTooltip"], ["class", "mt-10 dash", 4, "ngIf"], ["class", "mat-elevation-z0 m-0 p-0", 4, "ngIf"], [2, "width", "100%"], [1, "mt-10", "dash"], ["mat-list-item", "", "routerLink", "/dashboard", 1, "fuente", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "icon-menu", 3, "icon"], [1, "position"], [1, "pointer"], [1, "mat-elevation-z0", "m-0", "p-0"], [1, "fuente"], ["mat-list-item", "", "routerLink", "/administration/permissions", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/administration/roles", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/administration/users", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/administration/permissions", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/administration/roles", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/administration/users", 1, "fuente", 3, "click"], ["fxLayout", " row", "fxLayoutAlign", "start center"], ["mat-list-item", "", "routerLink", "/catalogs/customers", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/catalogs/components", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/catalogs/companies", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/catalogs/materials", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/catalogs/production-process", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/catalogs/products", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/catalogs/customers", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/catalogs/components", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/catalogs/companies", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/catalogs/materials", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/catalogs/production-process", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/catalogs/products", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/operations/sales-orders", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/operations/orders", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/operations/sales-orders", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/operations/orders", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/reports/sales-orders", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/reports/bills", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/reports/pay-orders", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/reports/paid-orders", "class", "fuente", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/reports/sales-orders", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/reports/bills", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/reports/pay-orders", 1, "fuente", 3, "click"], ["mat-list-item", "", "routerLink", "/reports/paid-orders", 1, "fuente", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, AppComponent_spinner_0_Template, 1, 0, "spinner", 1)(1, AppComponent_div_1_Template, 19, 8, "div", 2)(2, AppComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isAuth());
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isAuth());
        }
      },
      dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FaIconComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelDescription, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDivider, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatDrawerContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListItem, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__.DefaultLayoutAlignDirective, _shared_component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLink, _navbar_navBar_component__WEBPACK_IMPORTED_MODULE_10__.NavbarComponent],
      styles: [_c1]
    });
  }
}
class InactivityModalComponent {
  constructor(dialogRef, route) {
    this.dialogRef = dialogRef;
    this.route = route;
    this.progress = 0;
    this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
  }
  ngOnInit() {
    this.intervalSubs = (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.interval)(1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_28__.takeWhile)(() => this.progress < 100)).subscribe(() => {
      console.log("INTERVAL CLOSE");
      this.progress += 10;
      if (this.progress == 100) {
        this.dialogRef.close();
        this.cerrarSesion();
      }
    });
  }
  stayHere() {
    this.intervalSubs.unsubscribe();
    this.dialogRef.close();
  }
  cerrarSesion() {
    setTimeout(() => {
      this.intervalSubs.unsubscribe();
      this.propagar.emit(false);
      localStorage.removeItem('userPermissions');
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      localStorage.removeItem("dateLogin");
      this.route.navigate(['/login']);
    }, 1500);
  }
  static {
    this.ɵfac = function InactivityModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InactivityModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: InactivityModalComponent,
      selectors: [["inactivity-modal-app"]],
      decls: 9,
      vars: 1,
      consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "p-20", "m-10", "flex-container"], [1, "m-b-10"], ["fxLayout", "row", "fxLayoutAlign", "start start"], ["mode", "determinate", "color", "warn", 1, "m-t-10", 3, "value"], [1, "custom-button", "m-t-10", "w-100", 3, "click"]],
      template: function InactivityModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "\u00A1Alerta de Inactividad!");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 2)(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Por inactividad, la aplicaci\u00F3n se cerrar\u00E1 en 10 segundos.");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "mat-progress-bar", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function InactivityModalComponent_Template_button_click_7_listener() {
            return ctx.stayHere();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Permanecer Aqu\u00ED");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx.progress);
        }
      },
      dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__.DefaultLayoutAlignDirective],
      styles: [_c1]
    });
  }
}

/***/ }),

/***/ 80803:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 44836);
/* harmony import */ var _navbar_navBar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navBar.component */ 57182);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 99156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/security/sesion-validate */ 9511);
/* harmony import */ var _shared_security_menu_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/security/menu-validate */ 39497);
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicio.service */ 66977);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 87176);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.service */ 4716);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ 57383);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ 73818);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 345);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ 29650);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.state */ 78970);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var _catalogs_materials_state_materials_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catalogs/materials/state/materials.effects */ 11942);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngrx/store-devtools */ 54268);
/* harmony import */ var _catalogs_companies_state_companies_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catalogs/companies/state/companies.effects */ 31922);
/* harmony import */ var _administration_users_state_users_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./administration/users/state/users.effects */ 5700);
/* harmony import */ var _catalogs_customers_state_customers_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catalogs/customers/state/customers.effects */ 6346);
/* harmony import */ var _shared_state_shared_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/state/shared.effects */ 48967);
/* harmony import */ var _administration_permissions_state_permissions_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./administration/permissions/state/permissions.effects */ 78164);
/* harmony import */ var _administration_roles_state_roles_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./administration/roles/state/roles.effects */ 45292);
/* harmony import */ var _catalogs_components_state_components_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./catalogs/components/state/components.effects */ 24968);
/* harmony import */ var _catalogs_products_state_products_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./catalogs/products/state/products.effects */ 5844);
/* harmony import */ var _operations_sales_order_state_sale_order_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./operations/sales-order/state/sale-order.effects */ 1651);
/* harmony import */ var _catalogs_production_process_state_production_process_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./catalogs/production-process/state/production-process.effects */ 54910);
/* harmony import */ var _reports_sales_orders_report_state_orders_report_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./reports/sales-orders-report/state/orders-report.effects */ 42070);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/interceptors/auth.interceptor */ 73716);
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./privacy/privacy.component */ 98480);
/* harmony import */ var _reports_bills_state_bills_effects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./reports/bills/state/bills.effects */ 61719);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/locales/es */ 37522);
/* harmony import */ var _dashboard_state_dashboard_effects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/state/dashboard.effects */ 59459);










































(0,_angular_common__WEBPACK_IMPORTED_MODULE_27__.registerLocaleData)(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_28__["default"]);
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.DatePipe, _servicio_service__WEBPACK_IMPORTED_MODULE_5__.ServicioService, _shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_3__.SessionValidate, _login_login_service__WEBPACK_IMPORTED_MODULE_7__.LoginService, _shared_security_menu_validate__WEBPACK_IMPORTED_MODULE_4__.MenuValidate, _navbar_navBar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__.LocationStrategy,
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__.HashLocationStrategy
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS,
        useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__.AuthInterceptorService,
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_29__.LOCALE_ID,
        useValue: 'es'
      }],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_9__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_33__.StoreModule.forRoot(_app_state__WEBPACK_IMPORTED_MODULE_10__.ROOT_REDUCERS), _ngrx_effects__WEBPACK_IMPORTED_MODULE_34__.EffectsModule.forRoot([_catalogs_materials_state_materials_effects__WEBPACK_IMPORTED_MODULE_11__.materialsEffects, _catalogs_companies_state_companies_effects__WEBPACK_IMPORTED_MODULE_12__.CompaniesEffects, _administration_users_state_users_effects__WEBPACK_IMPORTED_MODULE_13__.UsersEffects, _catalogs_customers_state_customers_effects__WEBPACK_IMPORTED_MODULE_14__.CustomersEffects, _shared_state_shared_effects__WEBPACK_IMPORTED_MODULE_15__.SharedEffects, _administration_permissions_state_permissions_effects__WEBPACK_IMPORTED_MODULE_16__.PermissionsEffects, _administration_roles_state_roles_effects__WEBPACK_IMPORTED_MODULE_17__.RolesEffects, _catalogs_components_state_components_effects__WEBPACK_IMPORTED_MODULE_18__.ComponentsEffects, _catalogs_products_state_products_effects__WEBPACK_IMPORTED_MODULE_19__.ProductsEffects, _operations_sales_order_state_sale_order_effects__WEBPACK_IMPORTED_MODULE_20__.SalesOrdersEffects, _catalogs_production_process_state_production_process_effects__WEBPACK_IMPORTED_MODULE_21__.productionProcessEffects, _reports_sales_orders_report_state_orders_report_effects__WEBPACK_IMPORTED_MODULE_22__.ordersReportEffects, _reports_bills_state_bills_effects__WEBPACK_IMPORTED_MODULE_25__.BillsEffects, _dashboard_state_dashboard_effects__WEBPACK_IMPORTED_MODULE_26__.DashboardEffects]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_35__.StoreDevtoolsModule.instrument({
        name: 'TEST'
      })]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _navbar_navBar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _navbar_navBar_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent, _app_component__WEBPACK_IMPORTED_MODULE_0__.InactivityModalComponent, _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__.PrivacyComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_9__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_33__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_34__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_35__.StoreDevtoolsModule]
  });
})();

/***/ }),

/***/ 78970:
/*!******************************!*\
  !*** ./src/app/app.state.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROOT_REDUCERS: () => (/* binding */ ROOT_REDUCERS)
/* harmony export */ });
/* harmony import */ var _catalogs_materials_state_materials_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogs/materials/state/materials.reducers */ 92747);
/* harmony import */ var _catalogs_companies_state_companies_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogs/companies/state/companies.reducers */ 535);
/* harmony import */ var _administration_users_state_users_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administration/users/state/users.reducers */ 20461);
/* harmony import */ var _catalogs_customers_state_customers_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalogs/customers/state/customers.reducers */ 1087);
/* harmony import */ var _administration_permissions_state_permissions_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administration/permissions/state/permissions.reducers */ 23965);
/* harmony import */ var _administration_roles_state_roles_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administration/roles/state/roles.reducers */ 60485);
/* harmony import */ var _catalogs_components_state_components_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalogs/components/state/components.reducers */ 1905);
/* harmony import */ var _catalogs_products_state_products_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catalogs/products/state/products.reducers */ 19805);
/* harmony import */ var _shared_state_shared_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/state/shared.reducers */ 13204);
/* harmony import */ var _operations_sales_order_state_sale_order_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./operations/sales-order/state/sale-order.reducers */ 44736);
/* harmony import */ var _catalogs_production_process_state_production_process_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catalogs/production-process/state/production-process.reducers */ 4019);
/* harmony import */ var _reports_sales_orders_report_state_orders_report_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports/sales-orders-report/state/orders-report.reducers */ 58267);
/* harmony import */ var _reports_bills_state_bills_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/bills/state/bills.reducers */ 75428);
/* harmony import */ var _dashboard_state_dashboard_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/state/dashboard.reducers */ 12336);














const ROOT_REDUCERS = {
  materialsList: _catalogs_materials_state_materials_reducers__WEBPACK_IMPORTED_MODULE_0__.materialsListReducer,
  materialById: _catalogs_materials_state_materials_reducers__WEBPACK_IMPORTED_MODULE_0__.materialByIdReducer,
  companiesList: _catalogs_companies_state_companies_reducers__WEBPACK_IMPORTED_MODULE_1__.companiesListReducer,
  companyById: _catalogs_companies_state_companies_reducers__WEBPACK_IMPORTED_MODULE_1__.companyByIdReducer,
  taxSectionList: _catalogs_customers_state_customers_reducers__WEBPACK_IMPORTED_MODULE_3__.taxSectionListReducer,
  usersList: _administration_users_state_users_reducers__WEBPACK_IMPORTED_MODULE_2__.usersListReducer,
  customersList: _catalogs_customers_state_customers_reducers__WEBPACK_IMPORTED_MODULE_3__.customersListReducer,
  userById: _administration_users_state_users_reducers__WEBPACK_IMPORTED_MODULE_2__.userByIdReducer,
  customerById: _catalogs_customers_state_customers_reducers__WEBPACK_IMPORTED_MODULE_3__.customerByIdReducer,
  customerTypeList: _catalogs_customers_state_customers_reducers__WEBPACK_IMPORTED_MODULE_3__.customerTypeListReducer,
  catalogs: _shared_state_shared_reducers__WEBPACK_IMPORTED_MODULE_8__.catalogsReducer,
  permissionsList: _administration_permissions_state_permissions_reducers__WEBPACK_IMPORTED_MODULE_4__.permissionsListReducer,
  rolesList: _administration_roles_state_roles_reducers__WEBPACK_IMPORTED_MODULE_5__.rolesListReducer,
  roleById: _administration_roles_state_roles_reducers__WEBPACK_IMPORTED_MODULE_5__.roleByIdReducer,
  componentById: _catalogs_components_state_components_reducers__WEBPACK_IMPORTED_MODULE_6__.componentByIdReducer,
  componentsList: _catalogs_components_state_components_reducers__WEBPACK_IMPORTED_MODULE_6__.componentsListReducer,
  productById: _catalogs_products_state_products_reducers__WEBPACK_IMPORTED_MODULE_7__.productByIdReducer,
  productsList: _catalogs_products_state_products_reducers__WEBPACK_IMPORTED_MODULE_7__.productsListReducer,
  salesOrders: _operations_sales_order_state_sale_order_reducers__WEBPACK_IMPORTED_MODULE_9__.salesOrdersListReducer,
  saleOrderById: _operations_sales_order_state_sale_order_reducers__WEBPACK_IMPORTED_MODULE_9__.saleOrderByIdReducer,
  lineSaleOrder: _operations_sales_order_state_sale_order_reducers__WEBPACK_IMPORTED_MODULE_9__.lineSaleOrderReducer,
  productionProcessList: _catalogs_production_process_state_production_process_reducers__WEBPACK_IMPORTED_MODULE_10__.productionProcessListReducer,
  productionProcessById: _catalogs_production_process_state_production_process_reducers__WEBPACK_IMPORTED_MODULE_10__.productionProcessByIdReducer,
  positionSaleOrder: _operations_sales_order_state_sale_order_reducers__WEBPACK_IMPORTED_MODULE_9__.positionSaleOrderReducer,
  ordersReport: _reports_sales_orders_report_state_orders_report_reducers__WEBPACK_IMPORTED_MODULE_11__.ordersReportReducer,
  productionProcessByUserList: _catalogs_production_process_state_production_process_reducers__WEBPACK_IMPORTED_MODULE_10__.productionProcessByUserListReducer,
  billsReport: _reports_bills_state_bills_reducers__WEBPACK_IMPORTED_MODULE_12__.billsReportReducer,
  billById: _reports_bills_state_bills_reducers__WEBPACK_IMPORTED_MODULE_12__.billByIdReducer,
  orders: _operations_sales_order_state_sale_order_reducers__WEBPACK_IMPORTED_MODULE_9__.OrdersListReducer,
  paysReport: _reports_bills_state_bills_reducers__WEBPACK_IMPORTED_MODULE_12__.paysReportReducer,
  payById: _reports_bills_state_bills_reducers__WEBPACK_IMPORTED_MODULE_12__.payByIdReducer,
  paidReport: _reports_bills_state_bills_reducers__WEBPACK_IMPORTED_MODULE_12__.paidsReportReducer,
  salesOrderStatusDashboard: _dashboard_state_dashboard_reducers__WEBPACK_IMPORTED_MODULE_13__.salesOrderStatusDashboardReducer,
  salesOrdersDashboard: _dashboard_state_dashboard_reducers__WEBPACK_IMPORTED_MODULE_13__.salesOrdersDashboardReducer,
  salesOrdersForExpiredDashboard: _dashboard_state_dashboard_reducers__WEBPACK_IMPORTED_MODULE_13__.salesOrdersForExpiredDashboardReducer,
  salesOrdersExpiredAllDashboard: _dashboard_state_dashboard_reducers__WEBPACK_IMPORTED_MODULE_13__.salesOrdersExpiredAllDashboardReducer,
  salesOrdersExpiredTodayDashboard: _dashboard_state_dashboard_reducers__WEBPACK_IMPORTED_MODULE_13__.salesOrdersExpiredTodayDashboardReducer,
  salesOrdersExpiredInSomeDaysDashboard: _dashboard_state_dashboard_reducers__WEBPACK_IMPORTED_MODULE_13__.salesOrdersExpiredInSomeDaysDashboardReducer
};

/***/ }),

/***/ 66587:
/*!***************************************************************!*\
  !*** ./src/app/catalogs/companies/state/companies.actions.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCompany: () => (/* binding */ addCompany),
/* harmony export */   addCompanyImage: () => (/* binding */ addCompanyImage),
/* harmony export */   companyById: () => (/* binding */ companyById),
/* harmony export */   deleteCompany: () => (/* binding */ deleteCompany),
/* harmony export */   deleteCompanyImage: () => (/* binding */ deleteCompanyImage),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadActionAddCompany: () => (/* binding */ loadActionAddCompany),
/* harmony export */   loadActionAddImageCompany: () => (/* binding */ loadActionAddImageCompany),
/* harmony export */   loadActionCompanyById: () => (/* binding */ loadActionCompanyById),
/* harmony export */   loadActionDeleteCompany: () => (/* binding */ loadActionDeleteCompany),
/* harmony export */   loadActionDeleteImageCompany: () => (/* binding */ loadActionDeleteImageCompany),
/* harmony export */   loadActionUpdateCompany: () => (/* binding */ loadActionUpdateCompany),
/* harmony export */   loadCompaniesList: () => (/* binding */ loadCompaniesList),
/* harmony export */   loadedCompaniesList: () => (/* binding */ loadedCompaniesList),
/* harmony export */   updateCompany: () => (/* binding */ updateCompany)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadCompaniesList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Companies List] Init CompaniesList');
const loadedCompaniesList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Companies List] Finish CompaniesList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddCompany = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Company] Init AddCompany', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addCompany = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Company] Finish AddCompany',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateCompany = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Company] Init UpdateCompany', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateCompany = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Company] Update success',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionCompanyById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Company] Init GetByIdCompany',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const companyById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Company] Finish GetByIdCompany',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteCompany = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Company] Init DeleteCompany',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteCompany = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Company] Finish DeleteCompany',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddImageCompany = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add CompanyImage] Init AddCompanyImage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addCompanyImage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add CompanyImage] Finish AddCompanyImage',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteImageCompany = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete CompanyImage] Init DeleteCompanyImage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteCompanyImage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete CompanyImage] Finish DeleteCompanyImage',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 31922:
/*!***************************************************************!*\
  !*** ./src/app/catalogs/companies/state/companies.effects.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompaniesEffects: () => (/* binding */ CompaniesEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _companies_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companies.actions */ 66587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);











class CompaniesEffects {
  constructor(actions$, servicio, dialog, storeDispatch, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.dialog = dialog;
    this.storeDispatch = storeDispatch;
    this.apiService = apiService;
    this.lan = '';
    this.companiesList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Companies List] Init CompaniesList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.servicio.GetRequest("companies", "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Companies List] Finish CompaniesList',
          companiesList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.addCompany = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add Company] Init AddCompany'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("companies", "APIREST", body.company).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompaniesList)()) : false;
        let data = {
          ...response,
          image: body.company.image,
          nameImage: body.company.nameImage
        };
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.loadActionAddImageCompany)({
          loading: true,
          company: data
        })) : false;
        return {
          type: '[Add Company] Finish AddCompany',
          company: response
        };
      }))));
    });
    this.updateCompany = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update Company] Init UpdateCompany'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("companies/" + body.company.id, "APIREST", body.company).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompaniesList)()) : false;
        let data = {
          ...response,
          urlDeleteImage: body.company.urlDeleteImage,
          id: body.company.id,
          image: body.company.image,
          nameImage: body.company.nameImage
        };
        if (body.company.urlDeleteImage != undefined && body.company.urlDeleteImage != '' && body.company.urlDeleteImage != null) {
          validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.loadActionDeleteImageCompany)({
            loading: true,
            company: data
          })) : false;
        }
        if (body.company.image != undefined && body.company.image != null && body.company.image != '') {
          validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.loadActionAddImageCompany)({
            loading: true,
            company: data
          })) : false;
        }
        return {
          type: '[Update Company] Finish UpdateCompany',
          company: response
        };
      }))));
    });
    this.getByIdCompany = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById Company] Init GetByIdCompany'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("companies/" + body.company.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById Company] Finish GetByIdCompany',
          company: response
        };
      }))));
    });
    this.deleteCompany = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete Company] Init DeleteCompany'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("companies/" + body.company.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompaniesList)()) : false;
        return {
          type: '[Delete Company] Finish DeleteCompany',
          company: response
        };
      }))));
    });
    this.error = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Error Api] Error API'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(error => {
        return {
          type: '[Error Api] Error API',
          error: error
        };
      }));
    });
    this.addCompanyImage = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add CompanyImage] Init AddCompanyImage'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequestImage("companies/" + body.company.id + '/document/' + body.company.nameImage + '.jpeg', "APIREST", body.company, 'company').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add', true, 'guardar');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompaniesList)()) : false;
        return {
          type: '[Add CompanyImage] Finish AddCompanyImage',
          added: response
        };
      }))));
    });
    this.deleteCompanyImage = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete CompanyImage] Init DeleteCompanyImage'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("companies/" + body.company.id + '/document/' + body.company.urlDeleteImage, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete', true, 'eliminar');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_companies_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompaniesList)()) : false;
        return {
          type: '[Delete CompanyImage] Finish DeleteCompanyImage',
          delete: response
        };
      }))));
    });
  }
  static {
    this.ɵfac = function CompaniesEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompaniesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: CompaniesEffects,
      factory: CompaniesEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 535:
/*!****************************************************************!*\
  !*** ./src/app/catalogs/companies/state/companies.reducers.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   companiesListReducer: () => (/* binding */ companiesListReducer),
/* harmony export */   companyByIdReducer: () => (/* binding */ companyByIdReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateTaxSectionList: () => (/* binding */ initialStateTaxSectionList),
/* harmony export */   initialStatecompanyById: () => (/* binding */ initialStatecompanyById)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _companies_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companies.actions */ 66587);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  companiesList: [],
  dateUpdate: ''
};
const initialStatecompanyById = {
  loading: false,
  company: {}
};
const initialStateTaxSectionList = {
  loading: false,
  taxSectionList: []
};
const companiesListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_companies_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompaniesList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_companies_actions__WEBPACK_IMPORTED_MODULE_0__.loadedCompaniesList, (state, companiesList) => {
  return {
    ...state,
    loading: false,
    companiesList: companiesList.companiesList,
    dateUpdate: companiesList.dateUpdate
  };
}));
const companyByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStatecompanyById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_companies_actions__WEBPACK_IMPORTED_MODULE_0__.companyById, (state, company) => {
  return {
    ...state,
    loading: false,
    company: company.company
  };
}));

/***/ }),

/***/ 31249:
/*!*****************************************************************!*\
  !*** ./src/app/catalogs/components/state/components.actions.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addComponent: () => (/* binding */ addComponent),
/* harmony export */   componentById: () => (/* binding */ componentById),
/* harmony export */   deleteComponent: () => (/* binding */ deleteComponent),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadActionAddComponent: () => (/* binding */ loadActionAddComponent),
/* harmony export */   loadActionComponentById: () => (/* binding */ loadActionComponentById),
/* harmony export */   loadActionDeleteComponent: () => (/* binding */ loadActionDeleteComponent),
/* harmony export */   loadActionUpdateComponent: () => (/* binding */ loadActionUpdateComponent),
/* harmony export */   loadComponentsList: () => (/* binding */ loadComponentsList),
/* harmony export */   loadedComponentsList: () => (/* binding */ loadedComponentsList),
/* harmony export */   updateComponent: () => (/* binding */ updateComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadComponentsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Components List] Init ComponentsList');
const loadedComponentsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Components List] Finish ComponentsList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddComponent = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Component] Init AddComponent', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addComponent = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Component] Finish AddComponent',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateComponent = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Component] Init UpdateComponent', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateComponent = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Component] Finish UpdateComponent',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionComponentById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Component] Init GetByIdComponent',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const componentById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Component] Finish GetByIdComponent',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteComponent = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Component] Init DeleteComponent',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteComponent = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Component] Finish DeleteComponent',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 24968:
/*!*****************************************************************!*\
  !*** ./src/app/catalogs/components/state/components.effects.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsEffects: () => (/* binding */ ComponentsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _components_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.actions */ 31249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);











class ComponentsEffects {
  constructor(actions$, servicio, dialog, storeDispatch, storeApi, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.dialog = dialog;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.apiService = apiService;
    this.materialsList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Components List] Init ComponentsList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest("components", "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_components_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Components List] Finish ComponentsList',
          componentsList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.addComponents = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add Component] Init AddComponent'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("components", "APIREST", body.component).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_components_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_components_actions__WEBPACK_IMPORTED_MODULE_1__.loadComponentsList)()) : false;
        return {
          type: '[Add Component] Finish AddComponent',
          component: response
        };
      }))));
    });
    this.updateComponents = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update Component] Init UpdateComponent'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("components/" + body.component.id, "APIREST", body.component).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_components_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_components_actions__WEBPACK_IMPORTED_MODULE_1__.loadComponentsList)()) : false;
        return {
          type: '[Update Component] Finish UpdateComponent',
          component: body.component
        };
      }))));
    });
    this.getByIdComponents = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById Component] Init GetByIdComponent'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("components/" + body.component.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_components_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById Component] Finish GetByIdComponent',
          component: response
        };
      }))));
    });
    this.deleteComponents = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete Component] Init DeleteComponent'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("components/" + body.component.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_components_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_components_actions__WEBPACK_IMPORTED_MODULE_1__.loadComponentsList)()) : false;
        return {
          type: '[Delete Component] Finish DeleteComponent',
          component: response
        };
      }))));
    });
  }
  static {
    this.ɵfac = function ComponentsEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ComponentsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: ComponentsEffects,
      factory: ComponentsEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 1905:
/*!******************************************************************!*\
  !*** ./src/app/catalogs/components/state/components.reducers.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   componentByIdReducer: () => (/* binding */ componentByIdReducer),
/* harmony export */   componentsListReducer: () => (/* binding */ componentsListReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateComponentById: () => (/* binding */ initialStateComponentById)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _components_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.actions */ 31249);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  componentsList: [],
  dateUpdate: ''
};
const initialStateComponentById = {
  loading: false,
  component: {
    id: 0,
    name: "",
    status: true
  }
};
const componentsListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_components_actions__WEBPACK_IMPORTED_MODULE_0__.loadComponentsList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_components_actions__WEBPACK_IMPORTED_MODULE_0__.loadedComponentsList, (state, componentsList) => {
  return {
    ...state,
    loading: false,
    componentsList: componentsList.componentsList,
    dateUpdate: componentsList.dateUpdate
  };
}));
const componentByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateComponentById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_components_actions__WEBPACK_IMPORTED_MODULE_0__.componentById, (state, component) => {
  return {
    ...state,
    loading: false,
    component: component.component
  };
}));

/***/ }),

/***/ 10883:
/*!***************************************************************!*\
  !*** ./src/app/catalogs/customers/state/customers.actions.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerById: () => (/* binding */ CustomerById),
/* harmony export */   addCustomer: () => (/* binding */ addCustomer),
/* harmony export */   addCustomerImage: () => (/* binding */ addCustomerImage),
/* harmony export */   deleteCustomer: () => (/* binding */ deleteCustomer),
/* harmony export */   deleteCustomerImage: () => (/* binding */ deleteCustomerImage),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadActionAddCustomer: () => (/* binding */ loadActionAddCustomer),
/* harmony export */   loadActionAddImageCustomer: () => (/* binding */ loadActionAddImageCustomer),
/* harmony export */   loadActionCustomerById: () => (/* binding */ loadActionCustomerById),
/* harmony export */   loadActionDeleteCustomer: () => (/* binding */ loadActionDeleteCustomer),
/* harmony export */   loadActionDeleteImageCustomer: () => (/* binding */ loadActionDeleteImageCustomer),
/* harmony export */   loadActionUpdateCustomer: () => (/* binding */ loadActionUpdateCustomer),
/* harmony export */   loadCustomerTypeList: () => (/* binding */ loadCustomerTypeList),
/* harmony export */   loadCustomersList: () => (/* binding */ loadCustomersList),
/* harmony export */   loadTaxSectionList: () => (/* binding */ loadTaxSectionList),
/* harmony export */   loadedCustomerTypeList: () => (/* binding */ loadedCustomerTypeList),
/* harmony export */   loadedCustomersList: () => (/* binding */ loadedCustomersList),
/* harmony export */   loadedTaxSectionList: () => (/* binding */ loadedTaxSectionList),
/* harmony export */   updateCustomer: () => (/* binding */ updateCustomer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadCustomersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Customers List] Init CustomersList');
const loadedCustomersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Customers List] Finish CustomersList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddCustomer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Customer] Init AddCustomer', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addCustomer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Customer] Finish AddCustomer',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateCustomer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Customer] Init UpdateCustomer', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateCustomer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Customer] Finish UpdateCustomer',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionCustomerById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Customer] Init GetByIdCustomer',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const CustomerById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Customer] Finish GetByIdCustomer',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteCustomer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Customer] Init DeleteCustomer',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteCustomer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Customer] Finish DeleteCustomer',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadTaxSectionList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[TaxSection List] Init TaxSectionList');
const loadedTaxSectionList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[TaxSection List] Finish TaxSectionList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadCustomerTypeList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CustomerType List] Init CustomerTypeList');
const loadedCustomerTypeList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CustomerType List] Finish CustomerTypeList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddImageCustomer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add CustomerImage] Init AddCustomerImage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addCustomerImage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add CustomerImage] Finish AddCustomerImage',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteImageCustomer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete CustomerImage] Init DeleteCustomerImage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteCustomerImage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete CustomerImage] Finish DeleteCustomerImage',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 6346:
/*!***************************************************************!*\
  !*** ./src/app/catalogs/customers/state/customers.effects.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomersEffects: () => (/* binding */ CustomersEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _customers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.actions */ 10883);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);











class CustomersEffects {
  constructor(actions$, servicio, dialog, storeDispatch, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.dialog = dialog;
    this.storeDispatch = storeDispatch;
    this.apiService = apiService;
    this.lan = '';
    this.customersList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Customers List] Init CustomersList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.servicio.GetRequest("customers", "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Customers List] Finish CustomersList',
          customersList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.addCustomer = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add Customer] Init AddCustomer'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("customers", "APIREST", body.customer).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadCustomersList)()) : false;
        let data = {
          ...response,
          image: body.customer.image,
          nameImage: body.customer.nameImage
        };
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadActionAddImageCustomer)({
          loading: true,
          customer: data
        })) : false;
        return {
          type: '[Add Customer] Finish AddCustomer',
          customer: response
        };
      }))));
    });
    this.updateCustomer = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update Customer] Init UpdateCustomer'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("customers/" + body.customer.id, "APIREST", body.customer).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadCustomersList)()) : false;
        let data = {
          ...response,
          urlDeleteImage: body.customer.urlDeleteImage,
          id: body.customer.id,
          image: body.customer.image,
          nameImage: body.customer.nameImage
        };
        if (body.customer.urlDeleteImage != undefined && body.customer.urlDeleteImage != '' && body.customer.urlDeleteImage != null) {
          validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadActionDeleteImageCustomer)({
            loading: true,
            customer: data
          })) : false;
        }
        if (body.customer.image != undefined && body.customer.image != null && body.customer.image != '') {
          validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadActionAddImageCustomer)({
            loading: true,
            customer: data
          })) : false;
        }
        return {
          type: '[Update Customer] Finish UpdateCustomer',
          customer: body.customer
        };
      }))));
    });
    this.getByIdCustomer = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById Customer] Init GetByIdCustomer'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("customers/" + body.customer.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById Customer] Finish GetByIdCustomer',
          customer: response
        };
      }))));
    });
    this.deleteCustomer = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete Customer] Init DeleteCustomer'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("customers/" + body.customer.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadCustomersList)()) : false;
        return {
          type: '[Delete Customer] Finish DeleteCustomer',
          customer: response
        };
      }))));
    });
    this.taxSectionList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[TaxSection List] Init TaxSectionList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.servicio.GetRequest("tax-sections", "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[TaxSection List] Finish TaxSectionList',
          taxSectionList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.customerTypeList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[CustomerType List] Init CustomerTypeList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.servicio.GetRequest("customer-types", "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[CustomerType List] Finish CustomerTypeList',
          customerTypeList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.addCustomersImage = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add CustomerImage] Init AddCustomerImage'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequestImage("customers/" + body.customer.id + '/document/' + body.customer.nameImage + '.jpeg', "APIREST", body.customer, 'customer').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add', true, 'guardar');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadCustomersList)()) : false;
        return {
          type: '[Add CustomerImage] Finish AddCustomerImage',
          added: response
        };
      }))));
    });
    this.deleteCustomersImage = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete CustomerImage] Init DeleteCustomerImage'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("customers/" + body.customer.id + '/document/' + body.customer.urlDeleteImage, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete', true, 'eliminar');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadCustomersList)()) : false;
        return {
          type: '[Delete CustomerImage] Finish DeleteCustomerImage',
          delete: response
        };
      }))));
    });
    this.error = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Error Api] Error API'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(error => {
        return {
          type: '[Error Api] Error API',
          error: error
        };
      }));
    });
  }
  static {
    this.ɵfac = function CustomersEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustomersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: CustomersEffects,
      factory: CustomersEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 1087:
/*!****************************************************************!*\
  !*** ./src/app/catalogs/customers/state/customers.reducers.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerByIdReducer: () => (/* binding */ customerByIdReducer),
/* harmony export */   customerTypeListReducer: () => (/* binding */ customerTypeListReducer),
/* harmony export */   customersListReducer: () => (/* binding */ customersListReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateCustomerById: () => (/* binding */ initialStateCustomerById),
/* harmony export */   initialStateTaxSectionList: () => (/* binding */ initialStateTaxSectionList),
/* harmony export */   initialStatecustomerTypeList: () => (/* binding */ initialStatecustomerTypeList),
/* harmony export */   taxSectionListReducer: () => (/* binding */ taxSectionListReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _customers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.actions */ 10883);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  customersList: [],
  dateUpdate: ''
};
const initialStateCustomerById = {
  loading: false,
  customer: {}
};
const initialStateTaxSectionList = {
  loading: false,
  taxSectionList: [],
  dateUpdate: ''
};
const initialStatecustomerTypeList = {
  loading: false,
  customerTypeList: [],
  dateUpdate: ''
};
const customersListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadCustomersList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadedCustomersList, (state, customersList) => {
  return {
    ...state,
    loading: false,
    customersList: customersList.customersList,
    dateUpdate: customersList.dateUpdate
  };
}));
const customerByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateCustomerById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customers_actions__WEBPACK_IMPORTED_MODULE_0__.CustomerById, (state, customer) => {
  return {
    ...state,
    loading: false,
    customer: customer.customer
  };
}));
const taxSectionListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateTaxSectionList, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadTaxSectionList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadedTaxSectionList, (state, taxSectionList) => {
  return {
    ...state,
    loading: false,
    taxSectionList: taxSectionList.taxSectionList,
    dateUpdate: taxSectionList.dateUpdate
  };
}));
const customerTypeListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStatecustomerTypeList, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadCustomerTypeList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_customers_actions__WEBPACK_IMPORTED_MODULE_0__.loadedCustomerTypeList, (state, customerTypeList) => {
  return {
    ...state,
    loading: false,
    customerTypeList: customerTypeList.customerTypeList,
    dateUpdate: customerTypeList.dateUpdate
  };
}));

/***/ }),

/***/ 85967:
/*!***************************************************************!*\
  !*** ./src/app/catalogs/materials/state/materials.actions.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMaterial: () => (/* binding */ addMaterial),
/* harmony export */   deleteMaterial: () => (/* binding */ deleteMaterial),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadActionAddMaterial: () => (/* binding */ loadActionAddMaterial),
/* harmony export */   loadActionDeleteMaterial: () => (/* binding */ loadActionDeleteMaterial),
/* harmony export */   loadActionMaterialById: () => (/* binding */ loadActionMaterialById),
/* harmony export */   loadActionUpdateMaterial: () => (/* binding */ loadActionUpdateMaterial),
/* harmony export */   loadMaterialsList: () => (/* binding */ loadMaterialsList),
/* harmony export */   loadedMaterialsList: () => (/* binding */ loadedMaterialsList),
/* harmony export */   materialById: () => (/* binding */ materialById),
/* harmony export */   updateMaterial: () => (/* binding */ updateMaterial)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadMaterialsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Materials List] Init MaterialsList');
const loadedMaterialsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Materials List] Finish MaterialsList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddMaterial = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Material] Init AddMaterial', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addMaterial = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Material] Finish AddMaterial',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateMaterial = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Material] Init UpdateMaterial', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateMaterial = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Material] Finish UpdateMaterial',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionMaterialById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Material] Init GetByIdMaterial',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const materialById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Material] Finish GetByIdMaterial',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteMaterial = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Material] Init DeleteMaterial',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteMaterial = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Material] Finish DeleteMaterial',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 11942:
/*!***************************************************************!*\
  !*** ./src/app/catalogs/materials/state/materials.effects.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   materialsEffects: () => (/* binding */ materialsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _materials_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materials.actions */ 85967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);











class materialsEffects {
  constructor(actions$, servicio, dialog, storeDispatch, storeApi, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.dialog = dialog;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.apiService = apiService;
    this.materialsList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Materials List] Init MaterialsList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest("materials", "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_materials_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Materials List] Finish MaterialsList',
          MaterialsList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.addMaterial = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add Material] Init AddMaterial'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("materials", "APIREST", body.material).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_materials_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_materials_actions__WEBPACK_IMPORTED_MODULE_1__.loadMaterialsList)()) : false;
        return {
          type: '[Add Material] Finish AddMaterial',
          material: response
        };
      }))));
    });
    this.updateMaterial = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update Material] Init UpdateMaterial'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("materials/" + body.material.id, "APIREST", body.material).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_materials_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_materials_actions__WEBPACK_IMPORTED_MODULE_1__.loadMaterialsList)()) : false;
        return {
          type: '[Update Material] Finish UpdateMaterial',
          material: body.material
        };
      }))));
    });
    this.getByIdMaterial = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById Material] Init GetByIdMaterial'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("materials/" + body.material.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_materials_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById Material] Finish GetByIdMaterial',
          material: response
        };
      }))));
    });
    this.deleteMaterial = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete Material] Init DeleteMaterial'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("materials/" + body.material.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_materials_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_materials_actions__WEBPACK_IMPORTED_MODULE_1__.loadMaterialsList)()) : false;
        return {
          type: '[Delete Material] Finish DeleteMaterial',
          material: response
        };
      }))));
    });
  }
  static {
    this.ɵfac = function materialsEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || materialsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: materialsEffects,
      factory: materialsEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 92747:
/*!****************************************************************!*\
  !*** ./src/app/catalogs/materials/state/materials.reducers.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateMaterialById: () => (/* binding */ initialStateMaterialById),
/* harmony export */   materialByIdReducer: () => (/* binding */ materialByIdReducer),
/* harmony export */   materialsListReducer: () => (/* binding */ materialsListReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _materials_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materials.actions */ 85967);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  materialsList: [],
  dateUpdate: ''
};
const initialStateMaterialById = {
  loading: false,
  material: {
    id: 0,
    name: "",
    description: "",
    // isAntique: false,
    status: true
  }
};
const materialsListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_materials_actions__WEBPACK_IMPORTED_MODULE_0__.loadMaterialsList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_materials_actions__WEBPACK_IMPORTED_MODULE_0__.loadedMaterialsList, (state, materialsList) => {
  return {
    ...state,
    loading: false,
    materialsList: materialsList.MaterialsList,
    dateUpdate: materialsList.dateUpdate
  };
}));
const materialByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateMaterialById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_materials_actions__WEBPACK_IMPORTED_MODULE_0__.materialById, (state, material) => {
  return {
    ...state,
    loading: false,
    material: material.material
  };
}));

/***/ }),

/***/ 64439:
/*!*********************************************************************************!*\
  !*** ./src/app/catalogs/production-process/state/production-process.actions.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProductionProcess: () => (/* binding */ addProductionProcess),
/* harmony export */   deleteProductionProcess: () => (/* binding */ deleteProductionProcess),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadActionAddProductionProcess: () => (/* binding */ loadActionAddProductionProcess),
/* harmony export */   loadActionDeleteProductionProcess: () => (/* binding */ loadActionDeleteProductionProcess),
/* harmony export */   loadActionProductionProcessById: () => (/* binding */ loadActionProductionProcessById),
/* harmony export */   loadActionUpdateProductionProcess: () => (/* binding */ loadActionUpdateProductionProcess),
/* harmony export */   loadProductionProcessByUserList: () => (/* binding */ loadProductionProcessByUserList),
/* harmony export */   loadProductionProcessList: () => (/* binding */ loadProductionProcessList),
/* harmony export */   loadedProductionProcessByUserList: () => (/* binding */ loadedProductionProcessByUserList),
/* harmony export */   loadedProductionProcessList: () => (/* binding */ loadedProductionProcessList),
/* harmony export */   productionProcessById: () => (/* binding */ productionProcessById),
/* harmony export */   updateProductionProcess: () => (/* binding */ updateProductionProcess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadProductionProcessList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ProductionProcess List] Init ProductionProcessList');
const loadedProductionProcessList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ProductionProcess List] Finish ProductionProcessList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadProductionProcessByUserList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ProductionProcessByUser List] Init ProductionProcessByUserList');
const loadedProductionProcessByUserList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ProductionProcessByUser List] Finish ProductionProcessByUserList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddProductionProcess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add ProductionProcess] Init AddProductionProcess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addProductionProcess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add ProductionProcess] Finish AddProductionProcess',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateProductionProcess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update ProductionProcess] Init UpdateProductionProcess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateProductionProcess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update ProductionProcess] Finish UpdateProductionProcess',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionProductionProcessById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById ProductionProcess] Init GetByIdProductionProcess',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const productionProcessById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById ProductionProcess] Finish GetByIdProductionProcess',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteProductionProcess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete ProductionProcess] Init DeleteProductionProcess',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteProductionProcess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete ProductionProcess] Finish DeleteProductionProcess',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 54910:
/*!*********************************************************************************!*\
  !*** ./src/app/catalogs/production-process/state/production-process.effects.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productionProcessEffects: () => (/* binding */ productionProcessEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _production_process_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./production-process.actions */ 64439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);











class productionProcessEffects {
  constructor(actions$, servicio, dialog, storeDispatch, storeApi, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.dialog = dialog;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.apiService = apiService;
    this.productionProcessList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[ProductionProcess List] Init ProductionProcessList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest("production-processes", "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[ProductionProcess List] Finish ProductionProcessList',
          productionProcessList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.productionProcessByUserList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[ProductionProcessByUser List] Init ProductionProcessByUserList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest(`production-processes?status=${true}&filterByUser=${true}`, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[ProductionProcessByUser List] Finish ProductionProcessByUserList',
          productionProcessList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.addProductionProcess = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add ProductionProcess] Init AddProductionProcess'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("production-processes", "APIREST", body.productionProcess).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductionProcessList)()) : false;
        return {
          type: '[Add ProductionProcess] Finish AddProductionProcess',
          productionProcess: response
        };
      }))));
    });
    this.updateProductionProcess = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update ProductionProcess] Init UpdateProductionProcess'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("production-processes/" + body.productionProcess.id, "APIREST", body.productionProcess).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductionProcessList)()) : false;
        return {
          type: '[Update ProductionProcess] Finish UpdateProductionProcess',
          productionProcess: body.productionProcess
        };
      }))));
    });
    this.getByIdProductionProcess = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById ProductionProcess] Init GetByIdProductionProcess'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("production-processes/" + body.productionProcess.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById ProductionProcess] Finish GetByIdProductionProcess',
          productionProcess: response
        };
      }))));
    });
    this.deleteProductionProcess = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete ProductionProcess] Init DeleteProductionProcess'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("production-processes/" + body.productionProcess.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_production_process_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductionProcessList)()) : false;
        return {
          type: '[Delete ProductionProcess] Finish DeleteProductionProcess',
          productionProcess: response
        };
      }))));
    });
  }
  static {
    this.ɵfac = function productionProcessEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || productionProcessEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: productionProcessEffects,
      factory: productionProcessEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 4019:
/*!**********************************************************************************!*\
  !*** ./src/app/catalogs/production-process/state/production-process.reducers.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateByUser: () => (/* binding */ initialStateByUser),
/* harmony export */   initialStateProductionProcessById: () => (/* binding */ initialStateProductionProcessById),
/* harmony export */   productionProcessByIdReducer: () => (/* binding */ productionProcessByIdReducer),
/* harmony export */   productionProcessByUserListReducer: () => (/* binding */ productionProcessByUserListReducer),
/* harmony export */   productionProcessListReducer: () => (/* binding */ productionProcessListReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _production_process_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./production-process.actions */ 64439);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  productionProcessList: [],
  dateUpdate: ''
};
const initialStateByUser = {
  loading: false,
  productionProcessList: [],
  dateUpdate: ''
};
const initialStateProductionProcessById = {
  loading: false,
  productionProcess: {
    id: 0,
    name: "",
    order: 0,
    status: true
  }
};
const productionProcessListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_production_process_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductionProcessList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_production_process_actions__WEBPACK_IMPORTED_MODULE_0__.loadedProductionProcessList, (state, productionProcessList) => {
  return {
    ...state,
    loading: false,
    productionProcessList: productionProcessList.productionProcessList,
    dateUpdate: productionProcessList.dateUpdate
  };
}));
const productionProcessByUserListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateByUser, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_production_process_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductionProcessByUserList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_production_process_actions__WEBPACK_IMPORTED_MODULE_0__.loadedProductionProcessByUserList, (state, productionProcessList) => {
  return {
    ...state,
    loading: false,
    productionProcessList: productionProcessList.productionProcessList,
    dateUpdate: productionProcessList.dateUpdate
  };
}));
const productionProcessByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateProductionProcessById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_production_process_actions__WEBPACK_IMPORTED_MODULE_0__.productionProcessById, (state, productionProcess) => {
  return {
    ...state,
    loading: false,
    productionProcess: productionProcess.productionProcess
  };
}));

/***/ }),

/***/ 16691:
/*!**********************************************************************************!*\
  !*** ./src/app/catalogs/production-process/state/production-process.selector.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectLoadingProductionProcessByUserList: () => (/* binding */ selectLoadingProductionProcessByUserList),
/* harmony export */   selectLoadingProductionProcessList: () => (/* binding */ selectLoadingProductionProcessList),
/* harmony export */   selectProductionProcessById: () => (/* binding */ selectProductionProcessById),
/* harmony export */   selectProductionProcessByIdFeature: () => (/* binding */ selectProductionProcessByIdFeature),
/* harmony export */   selectProductionProcessByUserList: () => (/* binding */ selectProductionProcessByUserList),
/* harmony export */   selectProductionProcessByUserListFeature: () => (/* binding */ selectProductionProcessByUserListFeature),
/* harmony export */   selectProductionProcessList: () => (/* binding */ selectProductionProcessList),
/* harmony export */   selectProductionProcessListFeature: () => (/* binding */ selectProductionProcessListFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const selectProductionProcessListFeature = state => state.productionProcessList;
const selectProductionProcessByIdFeature = state => state.productionProcessById;
const selectProductionProcessByUserListFeature = state => state.productionProcessByUserList;
// export const selectPlazas2 = (state: AppState) => state.rutasList;
const selectLoadingProductionProcessList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductionProcessListFeature,
// selectPlazas2,
state => state.loading);
const selectProductionProcessList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductionProcessListFeature,
// selectPlazas2,
state => state);
const selectLoadingProductionProcessByUserList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductionProcessByUserListFeature, state => state.loading);
const selectProductionProcessByUserList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductionProcessByUserListFeature, state => state);
const selectProductionProcessById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductionProcessByIdFeature,
// selectPlazas2,
state => state.productionProcess);

/***/ }),

/***/ 37677:
/*!*************************************************************!*\
  !*** ./src/app/catalogs/products/state/products.actions.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProduct: () => (/* binding */ addProduct),
/* harmony export */   addProductImage: () => (/* binding */ addProductImage),
/* harmony export */   deleteProduct: () => (/* binding */ deleteProduct),
/* harmony export */   deleteProductImage: () => (/* binding */ deleteProductImage),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadActionAddImageProduct: () => (/* binding */ loadActionAddImageProduct),
/* harmony export */   loadActionAddProduct: () => (/* binding */ loadActionAddProduct),
/* harmony export */   loadActionDeleteImageProduct: () => (/* binding */ loadActionDeleteImageProduct),
/* harmony export */   loadActionDeleteProduct: () => (/* binding */ loadActionDeleteProduct),
/* harmony export */   loadActionProductById: () => (/* binding */ loadActionProductById),
/* harmony export */   loadActionUpdateProduct: () => (/* binding */ loadActionUpdateProduct),
/* harmony export */   loadProductsList: () => (/* binding */ loadProductsList),
/* harmony export */   loadedProductsList: () => (/* binding */ loadedProductsList),
/* harmony export */   productById: () => (/* binding */ productById),
/* harmony export */   updateProduct: () => (/* binding */ updateProduct)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadProductsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products List] Init ProductsList');
const loadedProductsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products List] Finish ProductsList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Product] Init AddProduct', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Product] Finish AddProduct',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddImageProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add ProductImage] Init AddProductImage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addProductImage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add ProductImage] Finish AddProductImage',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteImageProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete ProductImage] Init DeleteProductImage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteProductImage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete ProductImage] Finish DeleteProductImage',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Product] Init UpdateProduct', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Product] Finish UpdateProduct',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionProductById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Product] Init GetByIdProduct',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const productById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Product] Finish GetByIdProduct',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Product] Init DeleteProduct',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Product] Finish DeleteProduct',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 5844:
/*!*************************************************************!*\
  !*** ./src/app/catalogs/products/state/products.effects.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsEffects: () => (/* binding */ ProductsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _products_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.actions */ 37677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);











class ProductsEffects {
  constructor(actions$, servicio, dialog, storeDispatch, storeApi, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.dialog = dialog;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.apiService = apiService;
    this.productsList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Products List] Init ProductsList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest("items", "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Products List] Finish ProductsList',
          productsList: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.addProducts = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add Product] Init AddProduct'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("items", "APIREST", body.product).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductsList)()) : false;
        let data = {
          ...response,
          image: body.product.image,
          nameImage: body.product.nameImage
        };
        // let data = { ...response, image: 'C:/Users/crisa/Downloads/imagenPrueba2.jpg' };
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionAddImageProduct)({
          loading: true,
          product: data
        })) : false;
        return {
          type: '[Add Product] Finish AddProduct',
          product: response
        };
      }))));
    });
    this.addProductsImage = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add ProductImage] Init AddProductImage'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequestImage("items/" + body.product.id + '/document/' + body.product.nameImage + '.jpeg', "APIREST", body.product).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Add', true, 'guardar');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductsList)()) : false;
        return {
          type: '[Add ProductImage] Finish AddProductImage',
          added: response
        };
      }))));
    });
    this.deleteProductsImage = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete ProductImage] Init DeleteProductImage'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("items/" + body.product.id + '/document/' + body.product.urlDeleteImage, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete', true, 'eliminar');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductsList)()) : false;
        return {
          type: '[Delete ProductImage] Finish DeleteProductImage',
          delete: response
        };
      }))));
    });
    this.updateProducts = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update Product] Init UpdateProduct'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("items/" + body.product.id, "APIREST", body.product).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductsList)()) : false;
        let data = {
          ...response,
          urlDeleteImage: body.product.urlDeleteImage,
          id: body.product.id,
          image: body.product.image,
          nameImage: body.product.nameImage
        };
        if (body.product.urlDeleteImage != undefined && body.product.urlDeleteImage != '' && body.product.urlDeleteImage != null) {
          validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionDeleteImageProduct)({
            loading: true,
            product: data
          })) : false;
        }
        if (body.product.image != undefined && body.product.image != null && body.product.image != '') {
          validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionAddImageProduct)({
            loading: true,
            product: data
          })) : false;
        }
        return {
          type: '[Update Product] Finish UpdateProduct',
          product: body.product
        };
      }))));
    });
    this.getByIdProducts = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById Product] Init GetByIdProduct'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("items/" + body.product.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById Product] Finish GetByIdProduct',
          product: response
        };
      }))));
    });
    this.deleteProducts = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete Product] Init DeleteProduct'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("items/" + body.product.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_products_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductsList)()) : false;
        return {
          type: '[Delete Product] Finish DeleteProduct',
          product: response
        };
      }))));
    });
  }
  static {
    this.ɵfac = function ProductsEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: ProductsEffects,
      factory: ProductsEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 19805:
/*!**************************************************************!*\
  !*** ./src/app/catalogs/products/state/products.reducers.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateProductById: () => (/* binding */ initialStateProductById),
/* harmony export */   productByIdReducer: () => (/* binding */ productByIdReducer),
/* harmony export */   productsListReducer: () => (/* binding */ productsListReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _products_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.actions */ 37677);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  productsList: [],
  dateUpdate: ''
};
const initialStateProductById = {
  loading: false,
  product: {
    id: 0,
    key: null,
    taxItemKey: null,
    satUnitMeasurement: null,
    name: null,
    descriptionSpanish: null,
    descriptionEnglish: null,
    taxAmount: null,
    sellPrice: null,
    components: []
  }
};
const productsListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_products_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_products_actions__WEBPACK_IMPORTED_MODULE_0__.loadedProductsList, (state, productsList) => {
  return {
    ...state,
    loading: false,
    productsList: productsList.productsList,
    dateUpdate: productsList.dateUpdate
  };
}));
const productByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateProductById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_products_actions__WEBPACK_IMPORTED_MODULE_0__.productById, (state, product) => {
  return {
    ...state,
    loading: false,
    product: product.product
  };
}));

/***/ }),

/***/ 92166:
/*!******************************************************!*\
  !*** ./src/app/dashboard/state/dashboard.actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorSalesOrdersExpiredInSomeDaysDashboard: () => (/* binding */ errorSalesOrdersExpiredInSomeDaysDashboard),
/* harmony export */   errorSalesOrdersExpiredTodayDashboard: () => (/* binding */ errorSalesOrdersExpiredTodayDashboard),
/* harmony export */   loadSalesOrderStatusDashboard: () => (/* binding */ loadSalesOrderStatusDashboard),
/* harmony export */   loadSalesOrdersAllExpired: () => (/* binding */ loadSalesOrdersAllExpired),
/* harmony export */   loadSalesOrdersAllExpiredFailed: () => (/* binding */ loadSalesOrdersAllExpiredFailed),
/* harmony export */   loadSalesOrdersDashboard: () => (/* binding */ loadSalesOrdersDashboard),
/* harmony export */   loadSalesOrdersDashboardError: () => (/* binding */ loadSalesOrdersDashboardError),
/* harmony export */   loadSalesOrdersExpiredInSomeDaysDashboard: () => (/* binding */ loadSalesOrdersExpiredInSomeDaysDashboard),
/* harmony export */   loadSalesOrdersExpiredTodayDashboard: () => (/* binding */ loadSalesOrdersExpiredTodayDashboard),
/* harmony export */   loadSalesOrdersForExpiredDashboard: () => (/* binding */ loadSalesOrdersForExpiredDashboard),
/* harmony export */   loadSalesOrdersForExpiredDashboardError: () => (/* binding */ loadSalesOrdersForExpiredDashboardError),
/* harmony export */   loadedSalesOrderStatusDashboard: () => (/* binding */ loadedSalesOrderStatusDashboard),
/* harmony export */   loadedSalesOrdersAllExpired: () => (/* binding */ loadedSalesOrdersAllExpired),
/* harmony export */   loadedSalesOrdersDashboard: () => (/* binding */ loadedSalesOrdersDashboard),
/* harmony export */   loadedSalesOrdersExpiredInSomeDaysDashboard: () => (/* binding */ loadedSalesOrdersExpiredInSomeDaysDashboard),
/* harmony export */   loadedSalesOrdersExpiredTodayDashboard: () => (/* binding */ loadedSalesOrdersExpiredTodayDashboard),
/* harmony export */   loadedSalesOrdersForExpiredDashboard: () => (/* binding */ loadedSalesOrdersForExpiredDashboard)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

// Acción para iniciar la carga de los datos
const loadSalesOrderStatusDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrderStatus Dashboard] Init Load SalesOrderStatus Dashboard', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Acción para finalizar la carga de los datos
const loadedSalesOrderStatusDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrderStatus Dashboard] Finish Load SalesOrderStatus Dashboard', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadSalesOrdersDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrders Dashboard] Init Load SalesOrders Dashboard', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Acción para finalizar la carga con éxito
const loadedSalesOrdersDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrders Dashboard] Finish Load SalesOrders Dashboard', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Acción para manejar errores al cargar datos
const loadSalesOrdersDashboardError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrders Dashboard] Load SalesOrders Dashboard Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Acción para iniciar la carga de datos
const loadSalesOrdersForExpiredDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrders For Expired Dashboard] Init Load', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Acción para finalizar la carga con éxito
const loadedSalesOrdersForExpiredDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrders For Expired Dashboard] Finish Load', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Acción para manejar errores al cargar datos
const loadSalesOrdersForExpiredDashboardError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrders For Expired Dashboard] Load Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadSalesOrdersAllExpired = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrdersAllExpired Dashboard] Load Sales Orders Expired');
const loadedSalesOrdersAllExpired = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrdersAllExpired Dashboard] Loaded Sales Orders Expired', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadSalesOrdersAllExpiredFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrdersAllExpired Dashboard] Load Sales Orders Expired Failed');
const loadSalesOrdersExpiredTodayDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrdersExpiredToday Dashboard] Load Sales Orders Expired Today');
const loadedSalesOrdersExpiredTodayDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrdersExpiredToday Dashboard] Loaded Sales Orders Expired Today', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const errorSalesOrdersExpiredTodayDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrdersExpiredToday Dashboard] Error Sales Orders Expired Today');
const loadSalesOrdersExpiredInSomeDaysDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrdersExpiredInSomeDays Dashboard] Load Sales Orders Expired In Some Days', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadedSalesOrdersExpiredInSomeDaysDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrdersExpiredInSomeDays Dashboard] Loaded Sales Orders Expired In Some Days', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const errorSalesOrdersExpiredInSomeDaysDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrdersExpiredInSomeDays Dashboard] Error Sales Orders Expired In Some Days');

/***/ }),

/***/ 59459:
/*!******************************************************!*\
  !*** ./src/app/dashboard/state/dashboard.effects.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardEffects: () => (/* binding */ DashboardEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboard_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.actions */ 92166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);



 // Para el formateo de la fecha




class DashboardEffects {
  constructor(actions$, dashboardService) {
    this.actions$ = actions$;
    this.dashboardService = dashboardService;
    this.loadSalesOrderStatusDashboard$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrderStatusDashboard),
    // Acción que dispara el efecto
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(request => this.dashboardService.GetRequest("reports/sales-orders/aggregate/status/start-date/" + request.startDate + "/end-date/" + request.endDate, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadedSalesOrderStatusDashboard)({
      loading: false,
      salesOrdersStatusDashboard: [],
      dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD')
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(response => {
      return (0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadedSalesOrderStatusDashboard)({
        loading: false,
        salesOrdersStatusDashboard: response,
        dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD')
      });
    })))));
    this.loadSalesOrdersDashboard$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersDashboard), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({
      startDate,
      endDate,
      status
    }) => this.dashboardService.GetRequest(`reports/sales-orders/details/status/${status}/start-date/${startDate}/end-date/${endDate}`, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(response => (0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadedSalesOrdersDashboard)({
      loading: false,
      salesOrdersDashboard: response,
      dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD')
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersDashboardError)({
      error
    })))))));
    this.loadSalesOrdersForExpiredDashboard$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersForExpiredDashboard), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({
      days
    }) => this.dashboardService.GetRequest(`reports/sales-orders/aggregate/deliverydate/expired/days/${days}`, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(response => (0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadedSalesOrdersForExpiredDashboard)({
      salesOrdersForExpiredDashboard: response,
      dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD')
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersForExpiredDashboardError)({
      error
    })))))));
    this.loadSalesOrdersExpired$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersAllExpired), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.dashboardService.GetRequest(`reports/sales-orders/details/deliverydate/expired/all`, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(response => (0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadedSalesOrdersAllExpired)({
      salesOrdersAllExpired: response,
      lastUpdate: new Date().toISOString()
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersAllExpiredFailed)()))))));
    this.loadSalesOrdersExpiredTodayDashboard$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersExpiredTodayDashboard), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.dashboardService.GetRequest(`reports/sales-orders/details/deliverydate/expired/today`, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(response => (0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadedSalesOrdersExpiredTodayDashboard)({
      salesOrdersExpiredToday: response,
      lastUpdate: new Date().toISOString()
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.errorSalesOrdersExpiredTodayDashboard)()))))));
    this.loadSalesOrdersExpiredInSomeDaysDashboard$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersExpiredInSomeDaysDashboard), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({
      days
    }) => this.dashboardService.GetRequest(`reports/sales-orders/details/deliverydate/expired/days/${days}`, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(response => (0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.loadedSalesOrdersExpiredInSomeDaysDashboard)({
      salesOrdersExpiredInSomeDays: response,
      lastUpdate: new Date().toISOString()
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__.errorSalesOrdersExpiredInSomeDaysDashboard)()))))));
  }
  static {
    this.ɵfac = function DashboardEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DashboardEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: DashboardEffects,
      factory: DashboardEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 12336:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/state/dashboard.reducers.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialSalesOrdersExpiredInSomeDaysDashboardState: () => (/* binding */ initialSalesOrdersExpiredInSomeDaysDashboardState),
/* harmony export */   initialSalesOrdersExpiredTodayDashboardState: () => (/* binding */ initialSalesOrdersExpiredTodayDashboardState),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateSalesOrdersDashboard: () => (/* binding */ initialStateSalesOrdersDashboard),
/* harmony export */   initialStateSalesOrdersExpiredAllDashboard: () => (/* binding */ initialStateSalesOrdersExpiredAllDashboard),
/* harmony export */   initialStateSalesOrdersForExpiredDashboard: () => (/* binding */ initialStateSalesOrdersForExpiredDashboard),
/* harmony export */   salesOrderStatusDashboardReducer: () => (/* binding */ salesOrderStatusDashboardReducer),
/* harmony export */   salesOrdersDashboardReducer: () => (/* binding */ salesOrdersDashboardReducer),
/* harmony export */   salesOrdersExpiredAllDashboardReducer: () => (/* binding */ salesOrdersExpiredAllDashboardReducer),
/* harmony export */   salesOrdersExpiredInSomeDaysDashboardReducer: () => (/* binding */ salesOrdersExpiredInSomeDaysDashboardReducer),
/* harmony export */   salesOrdersExpiredTodayDashboardReducer: () => (/* binding */ salesOrdersExpiredTodayDashboardReducer),
/* harmony export */   salesOrdersForExpiredDashboardReducer: () => (/* binding */ salesOrdersForExpiredDashboardReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _dashboard_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.actions */ 92166);


// Estado inicial
const initialState = {
  loading: false,
  salesOrdersStatusDashboard: [],
  dateUpdate: ''
};
const salesOrderStatusDashboardReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadSalesOrderStatusDashboard, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadedSalesOrderStatusDashboard, (state, {
  salesOrdersStatusDashboard,
  dateUpdate
}) => ({
  ...state,
  loading: false,
  salesOrdersStatusDashboard: salesOrdersStatusDashboard,
  dateUpdate: dateUpdate
})));
const initialStateSalesOrdersDashboard = {
  loading: false,
  salesOrdersDashboard: [],
  dateUpdate: ''
};
const salesOrdersDashboardReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateSalesOrdersDashboard, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadSalesOrdersDashboard, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadedSalesOrdersDashboard, (state, {
  salesOrdersDashboard,
  dateUpdate
}) => ({
  ...state,
  loading: false,
  salesOrdersDashboard,
  dateUpdate
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadSalesOrdersDashboardError, state => ({
  ...state,
  loading: false
})));
const initialStateSalesOrdersForExpiredDashboard = {
  loading: false,
  salesOrdersForExpiredDashboard: null,
  dateUpdate: ''
};
const salesOrdersForExpiredDashboardReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateSalesOrdersForExpiredDashboard, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadSalesOrdersForExpiredDashboard, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadedSalesOrdersForExpiredDashboard, (state, {
  salesOrdersForExpiredDashboard,
  dateUpdate
}) => ({
  ...state,
  loading: false,
  salesOrdersForExpiredDashboard,
  dateUpdate
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadSalesOrdersForExpiredDashboardError, state => ({
  ...state,
  loading: false
})));
const initialStateSalesOrdersExpiredAllDashboard = {
  loading: false,
  salesOrdersAllExpired: [],
  lastUpdate: ''
};
const salesOrdersExpiredAllDashboardReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateSalesOrdersExpiredAllDashboard, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadSalesOrdersAllExpired, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadedSalesOrdersAllExpired, (state, {
  salesOrdersAllExpired,
  lastUpdate
}) => ({
  ...state,
  loading: false,
  salesOrdersAllExpired,
  lastUpdate
})));
const initialSalesOrdersExpiredTodayDashboardState = {
  loading: false,
  salesOrdersExpiredToday: [],
  lastUpdate: ''
};
const salesOrdersExpiredTodayDashboardReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialSalesOrdersExpiredTodayDashboardState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadSalesOrdersExpiredTodayDashboard, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadedSalesOrdersExpiredTodayDashboard, (state, {
  salesOrdersExpiredToday,
  lastUpdate
}) => ({
  ...state,
  loading: false,
  salesOrdersExpiredToday,
  lastUpdate
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.errorSalesOrdersExpiredTodayDashboard, state => ({
  ...state,
  loading: false
})));
const initialSalesOrdersExpiredInSomeDaysDashboardState = {
  loading: false,
  salesOrdersExpiredInSomeDays: [],
  lastUpdate: ''
};
const salesOrdersExpiredInSomeDaysDashboardReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialSalesOrdersExpiredInSomeDaysDashboardState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadSalesOrdersExpiredInSomeDaysDashboard, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.loadedSalesOrdersExpiredInSomeDaysDashboard, (state, {
  salesOrdersExpiredInSomeDays,
  lastUpdate
}) => ({
  ...state,
  loading: false,
  salesOrdersExpiredInSomeDays,
  lastUpdate
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.errorSalesOrdersExpiredInSomeDaysDashboard, state => ({
  ...state,
  loading: false
})));

/***/ }),

/***/ 87176:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/language.service */ 29936);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ 16195);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);





class HomeComponent {
  constructor(languageService) {
    this.languageService = languageService;
    this.dateNow = moment__WEBPACK_IMPORTED_MODULE_0__(moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DDThh:mm:ss'));
    this.dateFinish = moment__WEBPACK_IMPORTED_MODULE_0__('2023-04-25T11:59:59');
    this.name = 'Angular';
    this.clock = "";
    this.showMessage = false;
  }
  ngOnDestroy() {
    clearInterval(this.clockHandle);
  }
  ngOnInit() {
    let lsShowMessage = localStorage.getItem('showMessage');
    let dateF = moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFinish).valueOf();
    let dateN = moment__WEBPACK_IMPORTED_MODULE_0__(this.dateNow).valueOf();
    if (dateF >= dateN && lsShowMessage == undefined) {
      this.showMessage = true;
    }
    // if (this.showMessage) {
    this.clockHandle = setInterval(() => {
      this.clock = new Date().toLocaleString();
    }, 1000);
    //   const dialogRef = this.dialog.open(MessageInfoComponent, {
    //     width: '30%',
    //     disableClose: true
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     if (result == 1) {
    //       localStorage.setItem('showMessage', 'true');
    //     }
    //   });
    // }
  }
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 9,
      vars: 2,
      consts: [["cols", "1", "rowWidth", "100vw", "rowHeight", "92vh", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "bg-color"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "img"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "fontTitle"], [1, "display-5", "fw-bold"], [1, "sizeTitle"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "col-lg-6", "mx-auto", "fontDate"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-list", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3)(4, "strong", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.languageService.language.getValue() == "es" ? "\u00A1Bienvenido al sistema FTM!" : "Welcome to the FTM system!", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.clock);
        }
      },
      dependencies: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__.MatGridList, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective],
      styles: [".home[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 40vw;\n  height: 71vh;\n  background-image: url('logoTomas.eebba42fc8a3ecfb.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.75;\n  border-radius: 20px;\n  text-align: center;\n  border: 1px solid rgba(255, 206, 32, 0.25);\n}\n\n.xs-img[_ngcontent-%COMP%] {\n  width: 78vw;\n  height: 36vh;\n  background-image: url('logoTomas.eebba42fc8a3ecfb.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.75;\n  border-radius: 20px;\n  text-align: center;\n  border: 1px solid rgba(255, 206, 32, 0.25);\n}\n\n.gt-img[_ngcontent-%COMP%] {\n  width: 80vw;\n  height: 59vh;\n  background-image: url('logoTomas.eebba42fc8a3ecfb.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.75;\n  border-radius: 20px;\n  text-align: center;\n  border: 1px solid rgba(255, 206, 32, 0.25);\n}\n\n.fontTitle[_ngcontent-%COMP%] {\n  color: #000000;\n  background: rgba(255, 206, 32, 0.39);\n  width: 85%;\n  border-radius: 20px;\n}\n\n.sizeTitle[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 32px;\n}\n\n.fontDate[_ngcontent-%COMP%] {\n  color: #000000;\n  background: rgba(255, 206, 32, 0.39);\n  width: 35%;\n  border-radius: 20px;\n  font-size: 20px;\n  margin-top: 30px;\n  font-size: 25px;\n}\n\n.md-sizeTitle[_ngcontent-%COMP%] {\n  font-size: 21px;\n  color: black;\n}\n\n.md-sizeDate[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: black;\n}\n\n.sm-sizeTitle[_ngcontent-%COMP%] {\n  font-size: 21px;\n  color: black;\n}\n\n.sm-sizeDate[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: black;\n}\n\n.xs-sizeTitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: black;\n}\n\n.xs-sizeDate[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: black;\n}\n\n.md-img[_ngcontent-%COMP%] {\n  width: 45vw;\n  height: 54vh;\n  background-image: url('logoTomas.eebba42fc8a3ecfb.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.75;\n  border-radius: 20px;\n  text-align: center;\n}\n\nhr.rojo[_ngcontent-%COMP%] {\n  border-top: 5px solid red;\n  z-index: 3;\n}\n\nhr.azul[_ngcontent-%COMP%] {\n  border-top: 5px solid #252850;\n  width: 100%;\n}\n\n.clock[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 1px 5px;\n  grid-template-columns: auto auto auto;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  align-self: center;\n  width: 100%;\n}\n\n.clock[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 2rem;\n}\n\n.hours[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.horas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: column-reverse;\n  justify-content: center;\n  align-items: baseline;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: #777777;\n}\n\n.mishoras[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 10rem;\n}\n\n.ampm[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 200;\n}\n\n.segundos[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n  font-size: 0.8rem;\n  font-size: 100;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  border: 0;\n  border-top: 1px solid;\n  opacity: 1.25;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center !important;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  color: red;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  text-align: justify;\n}\n\n.bg-color[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}"]
    });
  }
}

/***/ }),

/***/ 99156:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97144);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ 38350);
/* harmony import */ var _administration_users_state_users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../administration/users/state/users.actions */ 60221);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var _administration_users_state_users_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../administration/users/state/users.selector */ 36677);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_data_language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/data/language */ 59217);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _shared_security_menu_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/security/menu-validate */ 39497);
/* harmony import */ var _shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/security/sesion-validate */ 9511);
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../servicio.service */ 66977);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/language.service */ 29936);
/* harmony import */ var _shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/guards/permissions.guard */ 71986);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 60177);
























function LoginComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "El correo es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Correo no v\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "La contrase\u00F1a es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "La contrase\u00F1a debe tener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(http, route, snackBar, Menu, sesionValidate, services, storeApi, storeDispatch, languageService, activatedRoute, fb, permissionsGuard) {
    this.http = http;
    this.route = route;
    this.snackBar = snackBar;
    this.Menu = Menu;
    this.sesionValidate = sesionValidate;
    this.services = services;
    this.storeApi = storeApi;
    this.storeDispatch = storeDispatch;
    this.languageService = languageService;
    this.activatedRoute = activatedRoute;
    this.fb = fb;
    this.permissionsGuard = permissionsGuard;
    this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.versionSystem;
    this.showContent = false;
    this.loading = false;
    this.Mensaje = false;
    this.hide = true;
    this.IdUsuario = 0;
    this.loged = false;
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
    this.lan = 'es';
    this.es = _shared_data_language__WEBPACK_IMPORTED_MODULE_5__.es;
    this.en = _shared_data_language__WEBPACK_IMPORTED_MODULE_5__.en;
    this.loginData = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.email]],
      // Validación de email
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]] // Validación de contraseña mínima de 6 caracteres
    });
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
    // this.validateSession();
    this.Menu.OcultarNav();
    // this.ObtenerServicio = new ServicioService(this.http);
    // for (let index = 0; index < 1000000; index++) {
    //   clearInterval(index);
    // }
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
  }
  ngOnInit() {
    this.sesionValidate.validateSession();
    this.sesionValidate.showLogin.subscribe(value => {
      this.showContent = value;
      if (!value) {
        const currentRoute = this.activatedRoute.snapshot.routeConfig?.path;
        if (currentRoute === 'login') {
          if (this.permissionsGuard.Permission('Dashboard')) {
            this.route.navigate(['/dashboard']);
          } else {
            this.route.navigate(['/home']);
          }
        }
      }
    });
  }
  login() {
    this.snackBar.dismiss();
    if (this.loginData.controls['email'].value == "") {
      this.snackBar.open('Es necesario ingresar el correo electrónico', '', {
        duration: 3000,
        panelClass: ['mensaje-error']
      });
    } else {
      if (this.ValidateEmail(this.loginData.controls['email'].value) == false) {
        // this.loginData.controls['email'].value = this.loginData.controls['email'].value + "@gmail.com";
        this.snackBar.open('Formato de correo electrónico inválido', '', {
          duration: 3000,
          panelClass: ['mensaje-error']
        });
        return;
      }
      this.loading = true;
      let loginDto = {
        username: this.loginData.controls['email'].value,
        password: this.loginData.controls['password'].value,
        rememberLogin: true
      };
      this.services.PostRequest('authentication/sign-in', 'IdentityProvider', loginDto).subscribe(response => {
        this.getDecodedAccessToken(response.access_token).then(decode => {
          this.sesionValidate.token = decode;
          this.services.PostRequest('permissions/describe', 'IdentityProvider', {
            subjectId: this.sesionValidate.token.sub
          }).subscribe(responsePermissions => {
            this.loading = false;
            localStorage.setItem("token", JSON.stringify(response.access_token));
            if (responsePermissions && responsePermissions.length > 0) {
              let userPermissions = [];
              responsePermissions.forEach(permissions => {
                userPermissions.push(permissions.action);
              });
              localStorage.setItem("userPermissions", JSON.stringify(userPermissions));
              this.getUserById(this.sesionValidate.token.sub);
            } else {
              localStorage.setItem("userPermissions", JSON.stringify([]));
              this.getUserById(this.sesionValidate.token.sub);
            }
          }, err => {
            this.loading = false;
            this.snackBar.open('Error al comunicarse con el servidor', '', {
              duration: 3000,
              panelClass: ['mensaje-error']
            });
          });
        });
      }, error => {
        this.loading = false;
        if (error && error.error && error.error.errors && error.error.errors[0].message && error.error.errors[0].message == 'Cannot sign in, invalid credentials') {
          let message = 'No se pudo iniciar sesion, credenciales invalidas';
          if (this.lan == 'en') {
            message = 'Cannot sign in, invalid credentials';
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        }
        let message = 'Error al comunicarse con el servidor';
        if (this.lan == 'en') {
          message = 'Error communicating with server';
        }
        this.snackBar.open(message, '', {
          panelClass: "mensaje-error",
          duration: 3000
        });
      });
    }
  }
  getUserById(userId) {
    let userByIdSubs = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
    let data = {
      id: userId
    };
    this.storeDispatch.dispatch((0,_administration_users_state_users_actions__WEBPACK_IMPORTED_MODULE_2__.loadActionUserById)({
      loading: true,
      user: data
    }));
    userByIdSubs = this.storeApi.select(_administration_users_state_users_selector__WEBPACK_IMPORTED_MODULE_3__.selectUserById).subscribe(user => {
      localStorage.setItem('userData', JSON.stringify(user));
      let dateLogin = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD');
      localStorage.setItem('dateLogin', dateLogin);
      this.sesionValidate.userData = user;
      userByIdSubs.unsubscribe();
      this.Menu.MostrarNav();
      const currentRoute = this.activatedRoute.snapshot.routeConfig?.path;
      if (currentRoute === 'login') {
        if (this.permissionsGuard.Permission('Dashboard')) {
          this.route.navigate(['/dashboard']);
        } else {
          this.route.navigate(['/home']);
        }
      }
    });
  }
  //Recuperar contraseña
  RecuperarContrasena() {
    if (this.loginData.controls['email'].value == "" || this.ValidateEmail(this.loginData.controls['email'].value) == false) {
      this.snackBar.open('Es necesario ingresar el correo electrónico', '', {
        duration: 5000,
        panelClass: ['mensaje-error']
      });
    } else {
      this.snackBar.dismiss();
      window.open('' + "Recuperar/" + this.loginData.controls['email'].value);
    }
  }
  ValidateEmail(Email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(Email);
  }
  getDecodedAccessToken(token) {
    return new Promise((resolve, reject) => {
      try {
        resolve((0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token));
      } catch (Error) {
        reject(null);
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_security_menu_validate__WEBPACK_IMPORTED_MODULE_6__.MenuValidate), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_7__.SessionValidate), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_servicio_service__WEBPACK_IMPORTED_MODULE_8__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_language_service__WEBPACK_IMPORTED_MODULE_9__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_10__.PermissionsGuard));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 37,
      vars: 8,
      consts: [[1, "login-wrapper"], [1, "login-container"], [1, "login-image"], ["src", "../../assets/img/logoTomas.jpg", "alt", "Logo", 1, "image"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "form-header"], ["appearance", "outline", 1, "form-field-custom"], ["formControlName", "email", "matInput", "", "type", "email"], [4, "ngIf"], ["appearance", "outline", 1, "form-field"], ["formControlName", "password", "matInput", "", 1, "eee", 3, "type"], ["matSuffix", "", 3, "click"], [1, "extra-links"], ["href", "#", 1, "forgot-password", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "btn-login", 3, "click"], [1, "footer"], ["href", "#", 1, "policy-link"], [1, "version"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 5)(6, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Bienvenido");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Log in para acceder a tu cuenta");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "mat-form-field", 6)(11, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, LoginComponent_mat_error_14_Template, 2, 0, "mat-error", 8)(15, LoginComponent_mat_error_15_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "mat-form-field", 9)(17, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_20_listener() {
            return ctx.hide = !ctx.hide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, LoginComponent_mat_error_22_Template, 2, 0, "mat-error", 8)(23, LoginComponent_mat_error_23_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 12)(25, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_25_listener() {
            return ctx.RecuperarContrasena();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Recuperar contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Log In");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 15)(30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Al iniciar sesi\u00F3n, usted acepta nuestra ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Politica de privacidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.loginData);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loginData.get("email").hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loginData.get("email").hasError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loginData.get("password").hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loginData.get("password").hasError("minlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("v", ctx.version, "");
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf],
      styles: [":root {\n  --mdc-filled-text-field-focus-label-text-color: #ffffff;\n  --mdc-filled-text-field-label-text-color: white;\n  --mdc-filled-text-field-hover-label-text-color: #ffffff;\n  --mdc-filled-text-field-disabled-label-text-color: #B0B0B0;\n  --mdc-filled-text-field-input-text-color: white;\n  --mdc-filled-text-field-error-label-text-color: rgb(255, 102, 102);\n  --mdc-outlined-text-field-focus-outline-color: rgb(255, 255, 255);\n  --mdc-outlined-text-field-focus-label-text-color: #ffffff;\n  --mdc-outlined-text-field-label-text-color: white;\n  --mdc-outlined-text-field-hover-label-text-color: #ffffff;\n  --mdc-outlined-text-field-disabled-label-text-color: #B0B0B0;\n  --mdc-outlined-text-field-input-text-color: white;\n  --mdc-outlined-text-field-error-label-text-color: rgb(255, 102, 102);\n  --mdc-outlined-text-field-outline-color: rgb(171, 171, 171);\n  --mdc-outlined-text-field-disabled-outline-color: rgb(171, 171, 171);\n  --mdc-outlined-text-field-hover-outline-color: rgb(255, 255, 255);\n  --mat-form-field-error-text-color: rgb(255, 102, 102);\n}\n\n.login-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background: linear-gradient(135deg, #1e2a47, #243b55);\n  color: white;\n}\n\n.login-container {\n  display: flex;\n  width: 90%;\n  max-width: 1200px;\n  height: 80%;\n  background: #1c253a;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);\n}\n\n/* Left Section */\n.login-image {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #1a243b;\n  border-right: 1px rgba(255, 255, 255, 0.049) solid;\n}\n\n.login-image img {\n  max-width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  object-fit: contain;\n  background: white;\n}\n\n/* Right Section */\n.login-form {\n  flex: 1.2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 2rem;\n  background: #1a243b;\n}\n\n.form-header h1 {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n.form-header p {\n  font-size: 1rem;\n  color: #b0b8c2;\n  margin-bottom: 2rem;\n}\n\n.form-field-custom {\n  width: 100%;\n  margin-bottom: 1.5rem;\n}\n\n.extra-links {\n  text-align: right;\n  margin-bottom: 2rem;\n}\n\n.extra-links a {\n  color: #4aa3ff;\n  text-decoration: none;\n}\n\n.extra-links a:hover {\n  text-decoration: underline;\n}\n\n.btn-login {\n  width: 100%;\n  background: #4aa3ff;\n  color: white;\n  padding: 0.8rem;\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 6px;\n  text-transform: uppercase;\n}\n\n.btn-login:hover {\n  background: #2f8af5;\n}\n\n.footer {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: #b0b8c2;\n}\n\n.footer .policy-link {\n  color: #4aa3ff;\n  text-decoration: none;\n}\n\n.footer .policy-link:hover {\n  text-decoration: underline;\n}\n\n.version {\n  display: block;\n  margin-top: 1rem;\n  font-size: 0.8rem;\n  color: #616e7c;\n}\n\n/* Responsiveness */\n@media (max-width: 768px) {\n  .login-container {\n    flex-direction: column;\n    height: auto;\n  }\n  .login-image {\n    height: 200px;\n  }\n  .login-form {\n    padding: 1.5rem;\n  }\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: white;\n}\n::ng-deep mat-form-field .mat-hint,\n::ng-deep mat-form-field input,\n::ng-deep mat-form-field ::placeholder,\n::ng-deep mat-form-field .mat-form-field-label {\n  color: white;\n}"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4716:
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService),
/* harmony export */   loginDto: () => (/* binding */ loginDto)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 21626);



class LoginService {
  constructor(http) {
    this.http = http;
    this.response = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
  }
  login(loginDto) {
    this.response.next(true);
    if (loginDto.username != "ftm@gmail.com" || loginDto.password != "ftm123$") {
      this.response.next(false);
    }
    return this.response;
  }
  static {
    this.ɵfac = function LoginService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
  }
}
class loginDto {
  constructor() {
    this.username = "";
    this.password = "";
    this.rememberLogin = true;
  }
}

/***/ }),

/***/ 57182:
/*!********************************************!*\
  !*** ./src/app/navbar/navBar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordComponent: () => (/* binding */ ChangePasswordComponent),
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 18810);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var _shared_services_paginator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/paginator.service */ 66541);
/* harmony import */ var _shared_data_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/language */ 59217);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 97144);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _notifications_notification_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notifications/notification-dialog.component */ 37590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_security_menu_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/security/menu-validate */ 39497);
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/language.service */ 29936);
/* harmony import */ var _shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/security/sesion-validate */ 9511);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/guards/permissions.guard */ 71986);
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../servicio.service */ 66977);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/badge */ 1975);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 67575);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 55911);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 59115);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ 59042);
































function NavbarComponent_mat_toolbar_0_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavbarComponent_mat_toolbar_0_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r1.faKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ChangePassword : ctx_r1.en.ChangePassword, " ");
  }
}
function NavbarComponent_mat_toolbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-toolbar", 3)(1, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavbarComponent_mat_toolbar_0_Template_fa_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onPropagar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavbarComponent_mat_toolbar_0_Template_fa_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.go());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "span", 5)(7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavbarComponent_mat_toolbar_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-menu", null, 0)(16, "div", 9)(17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, NavbarComponent_mat_toolbar_0_button_23_Template, 4, 2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavbarComponent_mat_toolbar_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r1.languageService.changeLanguage();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.PaginatorService());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavbarComponent_mat_toolbar_0_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.CerrarSesion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](15);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.OpenMenu : ctx_r1.en.OpenMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r1.faBars);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.lan == "es" ? ctx_r1.es.GoHome : ctx_r1.en.GoHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r1.faHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matBadge", ctx_r1.badgeCount)("matBadgeColor", ctx_r1.unreadCount > 0 ? "warn" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", menu_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r1.faUserCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.getUser(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r1.faCodeBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Version : ctx_r1.en.Version, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.permissionsGuard.Permission("ChangePassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r1.faShieldAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Privacy : ctx_r1.en.Privacy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r1.faLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ChangeLan : ctx_r1.en.ChangeLan, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r1.faSignOutAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.Logout : ctx_r1.en.Logout, " ");
  }
}
function NavbarComponent_mat_progress_bar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-progress-bar", 17);
  }
}
const _c0 = ".example-icon[_ngcontent-%COMP%] {\n  padding: 2 2px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.indicador-red-not[_ngcontent-%COMP%] {\n  background: #b50909;\n  color: white;\n  border-radius: 12px;\n  font-size: 8px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold;\n  animation: twinkle 0.5s infinite alternate;\n  animation: infinite _ngcontent-%COMP%_resplandorAnimationRedNot 2s;\n  width: 13px;\n  height: 13px;\n  text-align: center;\n  margin-top: -3px;\n  position: absolute;\n  margin-left: 11px;\n  z-index: 3;\n}\n\n@keyframes _ngcontent-%COMP%_resplandorAnimationRedNot {\n  0%, 100% {\n    box-shadow: 0px 0px 20px rgb(191, 49, 5);\n  }\n  50% {\n    box-shadow: 0px 0px 0px;\n  }\n}\n.position-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 2;\n  left: 78%;\n  top: 0%;\n  background-color: rgb(43, 41, 126) !important;\n  color: white;\n  justify-content: center;\n  padding-top: 5px;\n  padding-left: 18px;\n  padding-right: 18px;\n}\n\n.extraInfo[_ngcontent-%COMP%] {\n  width: 85%;\n  justify-content: end;\n  display: flex;\n}\n\n.color-w[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.notificationItem[_ngcontent-%COMP%] {\n  width: 25%;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     .bar {\n  background-color: rgba(22, 31, 52, 0.88);\n  color: white;\n}\n\n  .mat-badge-content {\n  top: 30% !important;\n}\n\n  .custom-badge-button .mat-badge-content {\n  right: auto !important;\n  left: -20px !important;\n  transform: none !important;\n}";
class NavbarComponent {
  constructor(route, Menu, _ruta, languageService, sessionValidate, dialog, permissionsGuard, service) {
    this.route = route;
    this.Menu = Menu;
    this._ruta = _ruta;
    this.languageService = languageService;
    this.sessionValidate = sessionValidate;
    this.dialog = dialog;
    this.permissionsGuard = permissionsGuard;
    this.service = service;
    this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.versionSystem;
    this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faBars;
    this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faHome;
    this.faCodeBranch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faCodeBranch;
    this.faKey = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faKey;
    this.faLanguage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faLanguage;
    this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faSignOutAlt;
    this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faUserCircle;
    this.faShieldAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faShieldAlt;
    this.lan = "es";
    this.es = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es;
    this.en = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en;
    this.notificationsList = [];
    this.cerrar = false;
    this.showN = true;
    this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.go = () => {
      this._ruta.navigate(['/home']);
    };
    this.ShowNav = this.Menu.ValorNav;
    this.Usuario = this.Menu.ValorUsuario;
    this.propagar.emit(false);
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    clearInterval(this.interval);
  }
  CerrarSesion() {
    this.cerrar = true;
    setTimeout(() => {
      this.cerrar = false;
      this.showN = false;
      this.propagar.emit(false);
      localStorage.removeItem('userPermissions');
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      localStorage.removeItem("dateLogin");
      this.sessionValidate.userData = null;
      this.sessionValidate.token = null;
      this.route.navigate(['/login']);
      this.sessionValidate.showLogin.next(true);
      this.Menu.OcultarNav();
    }, 1500);
  }
  changePassword() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '80vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.CerrarSesion();
      }
    });
  }
  onPropagar() {
    this.propagar.emit(true);
  }
  ngOnInit() {
    this.showN = false;
    if (localStorage.removeItem('SessionCob') != null || localStorage.removeItem('SessionCob') != undefined) this.showN = true;
    this.getUnreadNotifications();
    this.interval = setInterval(() => {
      this.getUnreadNotifications();
    }, 1000 * 60 * 10);
  }
  PaginatorService() {
    (0,_shared_services_paginator_service__WEBPACK_IMPORTED_MODULE_0__.PaginatorService)();
  }
  getUser() {
    let fullName = '';
    if (this.sessionValidate && this.sessionValidate.userData && this.sessionValidate.userData.fullName) {
      fullName = this.sessionValidate.userData.fullName;
    }
    return fullName;
  }
  get unreadCount() {
    return this.notificationsList.filter(notif => !notif.read).length;
  }
  get badgeCount() {
    const count = this.unreadCount;
    return count > 99 ? '+99' : count.toString();
  }
  getUnreadNotifications() {
    this.service.GetRequest("notifications/unread", "APIREST").subscribe(response => {
      this.notificationsList = response.sort((a, b) => Number(a.read) - Number(b.read)).sort((a, b) => {
        if (a.read === b.read) {
          return a.type === 'SalesOrderWithoutOutputProcess' ? -1 : b.type === 'SalesOrderWithoutOutputProcess' ? 1 : 0;
        }
        return 0;
      });
    }, error => {
      if (error.status === 401) {
        this.CerrarSesion();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(error);
    });
  }
  openDialog() {
    if (this.unreadCount <= 0) {
      return;
    }
    const dialogRef = this.dialog.open(_notifications_notification_dialog_component__WEBPACK_IMPORTED_MODULE_3__.NotificationDialogComponent, {
      width: '500px',
      maxHeight: '80vh',
      data: {
        notifications: this.notificationsList
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUnreadNotifications();
    });
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_security_menu_validate__WEBPACK_IMPORTED_MODULE_4__.MenuValidate), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_6__.SessionValidate), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_7__.PermissionsGuard), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_servicio_service__WEBPACK_IMPORTED_MODULE_8__.ServicioService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      outputs: {
        propagar: "propagar"
      },
      decls: 3,
      vars: 4,
      consts: [["menu", "matMenu"], ["class", "bar", "style", "height: 9vh;", 4, "ngIf"], ["class", "progressbar", "mode", "indeterminate", "color", "warn", 4, "ngIf"], [1, "bar", 2, "height", "9vh"], [1, "mr-10", "pointer", 3, "click", "icon", "matTooltip"], [1, "example-spacer"], ["matBadgePosition", "above after", "mat-icon-button", "", 2, "margin-right", "20px", 3, "click", "matBadge", "matBadgeColor"], [1, "btn-l-warning-auto", 3, "matMenuTriggerFor"], [1, "mr-5", 3, "icon"], ["fxLayout", "column", "fxLayoutAlign", "start start"], [1, "ml-20", "mt-10", "mb-20"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "mb-10"], [1, "ml-20", 3, "icon"], [1, "mr-10"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["routerLink", "/privacy", "mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mode", "indeterminate", "color", "warn", 1, "progressbar"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NavbarComponent_mat_toolbar_0_Template, 36, 19, "mat-toolbar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NavbarComponent_mat_progress_bar_2_Template, 1, 0, "mat-progress-bar", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, ctx.ShowNav));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.cerrar);
        }
      },
      dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__.MatBadge, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuTrigger, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe],
      styles: [_c0]
    });
  }
}
class ChangePasswordComponent {
  constructor(dialogRef, snackBar, languageService, servicioService, authService, router) {
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.languageService = languageService;
    this.servicioService = servicioService;
    this.authService = authService;
    this.router = router;
    this.es = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es;
    this.en = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en;
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faClose;
    this.lan = "es";
    this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.required]);
    this.newPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.required]);
    this.confirmNewPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.required]);
    languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
  }
  ngOnInit() {}
  closeAndCancelModal() {
    this.dialogRef.close();
  }
  save() {
    if (!this.password.valid || !this.newPassword.valid || !this.confirmNewPassword.valid) {
      let message = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es.CompleteRequiredFields;
      if (this.lan == 'en') {
        message = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en.CompleteRequiredFields;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 3000
      });
      return;
    } else if (this.newPassword.value != this.confirmNewPassword.value) {
      let message = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es.NewPasswordIsDiferentToConfirmNewPassword;
      if (this.lan == 'en') {
        message = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en.NewPasswordIsDiferentToConfirmNewPassword;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 3000
      });
      return;
    }
    let userData = this.authService.getUserData();
    const url = 'users/' + userData.id + '/change-password/by-user';
    this.servicioService.PutRequest(url, 'IdentityProvider', {
      currentPassword: this.password.value,
      newPassword: this.newPassword.value,
      confirmNewPassword: this.confirmNewPassword.value
    }).subscribe(response => {
      let message = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es.RestorePasswordOk;
      if (this.lan == 'en') {
        message = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en.RestorePasswordOk;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-confirmation",
        duration: 3000
      });
      setTimeout(() => {
        this.dialogRef.close(true);
      }, 2000);
    }, err => {
      let message = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.es.ErrorServer;
      if (this.lan == 'en') {
        message = _shared_data_language__WEBPACK_IMPORTED_MODULE_1__.en.ErrorServer;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 3000
      });
      return;
    });
  }
  static {
    this.ɵfac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_servicio_service__WEBPACK_IMPORTED_MODULE_8__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_6__.SessionValidate), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      decls: 31,
      vars: 17,
      consts: [["input", ""], [1, "m-card", "p-20", "overflowA", 2, "max-height", "80vh"], ["fxLayout", "row", "fxLayoutAlign", "end start"], [1, "color-boton", "boton", "closeIcon", "pointer", 3, "click", "icon", "matTooltip"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px", "width", "100%"], [1, "customText", "fuente", "f-w-b"], ["fxLayout", "row", "fxLayoutAlign", "end start", 1, "mt-20", "mr-a"], [1, "mr-10", "mb-10"], ["color", "warn", 1, "btn-l-warning", 3, "click", "matTooltip"], [1, "mb-10"], ["color", "primary", 1, "btn-l-100b", 3, "click", "matTooltip"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "mt-20", "mb-10"], ["fxLayout.xs", "column", "fxLayout", "column", "fxLayoutAlign", "start start", 1, "w-100"], [1, "w-100", "mr-20", "mb-10"], ["matInput", "", 3, "formControl", "maxLength"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "fa-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_fa_icon_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.closeAndCancelModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 4)(4, "mat-card-title", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.closeAndCancelModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 9)(11, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "mat-form-field", 13)(17, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-form-field", 13)(22, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-form-field", 13)(27, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "input", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Close : ctx.en.Close);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faClose);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.ChangePassword : ctx.en.ChangePassword, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("matTooltip", "\n        ", ctx.lan == "es" ? ctx.es.Save : ctx.en.Save, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Save : ctx.en.Save, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.CurrentPassword : ctx.en.CurrentPassword, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx.password)("maxLength", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.NewPassword : ctx.en.NewPassword, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx.newPassword)("maxLength", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.ConfirmNewPassword : ctx.en.ConfirmNewPassword, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx.confirmNewPassword)("maxLength", 50);
        }
      },
      dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatLabel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardTitle, _angular_material_input__WEBPACK_IMPORTED_MODULE_30__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormControlDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective],
      styles: [_c0]
    });
  }
}

/***/ }),

/***/ 37590:
/*!****************************************************************!*\
  !*** ./src/app/notifications/notification-dialog.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationDialogComponent: () => (/* binding */ NotificationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 57383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 18810);
/* harmony import */ var _operations_sales_order_detail_production_line_detail_production_line_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations/sales-order/detail-production-line/detail-production-line.component */ 69079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicio.service */ 66977);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_security_menu_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/security/menu-validate */ 39497);
/* harmony import */ var _shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/security/sesion-validate */ 9511);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 16038);

















const _c0 = a0 => ({
  "read-title": a0
});
const _c1 = a0 => ({
  "read-subtitle": a0
});
function NotificationDialogComponent_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotificationDialogComponent_div_4_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const notification_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.setReadNotification(notification_r2.id, notification_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function NotificationDialogComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotificationDialogComponent_div_4_Template_div_click_0_listener() {
      const notification_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.goToOrder(notification_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, NotificationDialogComponent_div_4_div_6_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", notification_r2.read ? "read" : "unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, notification_r2.read));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.getNotificationTitle(notification_r2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c1, notification_r2.read));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" PO#: ", notification_r2.message.notes, ", Orden: ", notification_r2.message.position, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !notification_r2.read);
  }
}
class NotificationDialogComponent {
  constructor(dialogRef, data, service, route, Menu, sessionValidate, snackBar, dialog) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.service = service;
    this.route = route;
    this.Menu = Menu;
    this.sessionValidate = sessionValidate;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.isNowOpen = false;
    this.notifications = data.notifications;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  goToOrder(notification) {
    if (this.isNowOpen) {
      return;
    }
    this.isNowOpen = true;
    const dialogRef = this.dialog.open(_operations_sales_order_detail_production_line_detail_production_line_component__WEBPACK_IMPORTED_MODULE_1__.DetailProductionLineComponent, {
      width: '98vw',
      height: '98vh',
      panelClass: 'full-screen-modal',
      data: {
        position: notification.message.position,
        modal: true,
        id: notification.message.salesOrderId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isNowOpen = false;
    });
  }
  getNotificationTitle(notification) {
    return notification.type === 'SalesOrderWithoutOutputProcess' ? 'Orden sin proceso de salida' : 'Orden por vencer día de entrega';
  }
  get unreadCount() {
    return this.notifications.filter(notif => !notif.read).length;
  }
  setReadNotification(id, notification) {
    this.service.PostRequest(`notifications/${id}/read`, "APIREST", {}).subscribe(response => {
      this.snackBar.open('Notificación marcada como leída.', '', {
        panelClass: "mensaje-confirmation",
        duration: 3000
      });
      this.dialogRef.close();
      this.goToOrder(notification);
    }, error => {
      if (error.status === 401) {
        this.CerrarSesion();
      }
      this.snackBar.open('No se pudo marcar la notificación como leída.', '', {
        panelClass: "mensaje-error",
        duration: 3000
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
    });
  }
  CerrarSesion() {
    setTimeout(() => {
      localStorage.removeItem('userPermissions');
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      localStorage.removeItem("dateLogin");
      this.sessionValidate.userData = null;
      this.sessionValidate.token = null;
      this.route.navigate(['/login']);
      this.sessionValidate.showLogin.next(true);
      this.Menu.OcultarNav();
    }, 1500);
  }
  static {
    this.ɵfac = function NotificationDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotificationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_security_menu_validate__WEBPACK_IMPORTED_MODULE_3__.MenuValidate), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_4__.SessionValidate), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: NotificationDialogComponent,
      selectors: [["app-notification-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["class", "notification-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "notification-item", 3, "click", "ngClass"], [1, "notification-text"], [1, "notification-title", 3, "ngClass"], [1, "notification-subtitle", 3, "ngClass"], [4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["color", "primary"]],
      template: function NotificationDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, NotificationDialogComponent_div_4_Template, 7, 11, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-dialog-actions", 2)(6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotificationDialogComponent_Template_button_click_6_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Cerrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.unreadCount, " Notificaciones sin leer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.notifications);
        }
      },
      dependencies: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatList, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule],
      styles: [".notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.1411764706);\n  margin: 10px;\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.0588235294);\n}\n\n.notification-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.read[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n}\n\n.unread[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.notification-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #424242;\n}\n\n.read-title[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n\n.notification-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #757575;\n}\n\n.read-subtitle[_ngcontent-%COMP%] {\n  color: #1565c0;\n}"]
    });
  }
}

/***/ }),

/***/ 69079:
/*!***************************************************************************************************!*\
  !*** ./src/app/operations/sales-order/detail-production-line/detail-production-line.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailProductionLineComponent: () => (/* binding */ DetailProductionLineComponent),
/* harmony export */   LineHistoryComponent: () => (/* binding */ LineHistoryComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var _state_sale_order_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/sale-order.selector */ 11400);
/* harmony import */ var _state_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/sale-order.actions */ 53014);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var src_app_catalogs_production_process_state_production_process_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/catalogs/production-process/state/production-process.selector */ 16691);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var src_app_shared_component_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/popup/popup.component */ 42476);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto-js */ 31471);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var src_app_catalogs_production_process_state_production_process_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/catalogs/production-process/state/production-process.actions */ 64439);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf-autotable */ 34941);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dom_to_pdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dom-to-pdf */ 62297);
/* harmony import */ var dom_to_pdf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dom_to_pdf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! qrcode */ 68314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 345);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/guards/permissions.guard */ 71986);
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/shared.service */ 32175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ 16038);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);






































const _c0 = ["contentToConvert"];
function DetailProductionLineComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", ctx_r1.type == "in" ? ctx_r1.lan == "es" ? ctx_r1.es.OutOf : ctx_r1.en.OutOf : ctx_r1.lan == "es" ? ctx_r1.es.EnterTo : ctx_r1.en.EnterTo, " ", ctx_r1.dataTransform.productionProcesses[ctx_r1.dataTransform.productionProcesses.length - 1].productionProcessName, " ");
  }
}
function DetailProductionLineComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.NoProcess : ctx_r1.en.NoProcess, " ");
  }
}
function DetailProductionLineComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate4"](" ", x_r3.componentName, " ", x_r3.materialName, " ", x_r3.materialDescription, " ", x_r3.notes, " ");
  }
}
function DetailProductionLineComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DetailProductionLineComponent_div_25_div_1_Template, 4, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.dataTransform.components);
  }
}
function DetailProductionLineComponent_img_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 30);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", ctx_r1.itemImage, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function DetailProductionLineComponent_img_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 31);
  }
}
function DetailProductionLineComponent_img_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 32);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", ctx_r1.quintoImage, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function DetailProductionLineComponent_img_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 33);
  }
}
function DetailProductionLineComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Notas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.dataTransform.salesOrderPositionNotes);
  }
}
const _c1 = (a0, a1) => [a0, a1];
const _c2 = () => [25, 50, 100];
function LineHistoryComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.InputDate : ctx_r1.en.InputDate, " ");
  }
}
function LineHistoryComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c1, element_r3.active, element_r3.deletedDate ? "deleted" : "doneProccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r3.inputDate, " ");
  }
}
function LineHistoryComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.InputUsername : ctx_r1.en.InputUsername, " ");
  }
}
function LineHistoryComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c1, element_r4.active, element_r4.deletedDate ? "deleted" : "doneProccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r4.inputUsername, " ");
  }
}
function LineHistoryComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.EntryNotes : ctx_r1.en.EntryNotes, " ");
  }
}
function LineHistoryComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c1, element_r5.active, element_r5.deletedDate ? "deleted" : "doneProccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r5.inputNotes, " ");
  }
}
function LineHistoryComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.OutputDate : ctx_r1.en.OutputDate, " ");
  }
}
function LineHistoryComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c1, element_r6.active, element_r6.deletedDate ? "deleted" : "doneProccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r6.outputDate, " ");
  }
}
function LineHistoryComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.OutputUsername : ctx_r1.en.OutputUsername, " ");
  }
}
function LineHistoryComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c1, element_r7.active, element_r7.deletedDate ? "deleted" : "doneProccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r7.outputUsername, " ");
  }
}
function LineHistoryComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.OutputNotes : ctx_r1.en.OutputNotes, " ");
  }
}
function LineHistoryComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c1, element_r8.active, element_r8.deletedDate ? "deleted" : "doneProccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r8.outputNotes, " ");
  }
}
function LineHistoryComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.ProductionProcess : ctx_r1.en.ProductionProcess, " ");
  }
}
function LineHistoryComponent_td_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](element_r9.productionProcessName);
  }
}
function LineHistoryComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, LineHistoryComponent_td_32_span_1_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c1, element_r9.active, element_r9.deletedDate ? "deleted" : "doneProccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", element_r9.productionProcessName);
  }
}
function LineHistoryComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.DateOfReprocessing : ctx_r1.en.DateOfReprocessing, " ");
  }
}
function LineHistoryComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c1, element_r10.active, element_r10.deletedDate ? "deleted" : "doneProccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r10.deletedDate, " ");
  }
}
function LineHistoryComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.lan == "es" ? ctx_r1.es.RejectionForReprocessing : ctx_r1.en.RejectionForReprocessing, " ");
  }
}
function LineHistoryComponent_td_38_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function LineHistoryComponent_td_38_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function LineHistoryComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, LineHistoryComponent_td_38_span_1_Template, 2, 0, "span", 27)(2, LineHistoryComponent_td_38_span_2_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](3, _c1, element_r11.active, element_r11.deletedDate ? "deleted" : "doneProccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", element_r11.deletedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !element_r11.deletedDate);
  }
}
function LineHistoryComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 28);
  }
}
function LineHistoryComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 29);
  }
}
function LineHistoryComponent_mat_paginator_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-paginator", 30);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c2));
  }
}
class DetailProductionLineComponent {
  constructor(router, languageService, storeDispatch, storeApi, dateAdapter, actions$, redirect, dialog, sanitizer, snackBar, permissionsGuard, sharedService, dataForModal, dialogRef) {
    this.router = router;
    this.languageService = languageService;
    this.storeDispatch = storeDispatch;
    this.storeApi = storeApi;
    this.dateAdapter = dateAdapter;
    this.actions$ = actions$;
    this.redirect = redirect;
    this.dialog = dialog;
    this.sanitizer = sanitizer;
    this.snackBar = snackBar;
    this.permissionsGuard = permissionsGuard;
    this.sharedService = sharedService;
    this.dataForModal = dataForModal;
    this.dialogRef = dialogRef;
    this.name = 's';
    this.openUrl = '';
    this.qrCodeUrl = '';
    this.dataTransform = {
      salesOrderId: null,
      customerSalesOrderId: null,
      customerId: null,
      customerName: '',
      salesOrderStatusName: '',
      salesOrderNotes: '',
      itemId: null,
      itemName: '',
      position: null,
      quantity: null,
      image: '',
      quinto: '',
      creationDate: '',
      salesOrderDate: '',
      shipmentDate: '',
      deliveryDate: '',
      shippingDate: '',
      salesOrderPositionNotes: '',
      currentProductionProcess: {},
      lastProductionProcess: {},
      components: [],
      itemDocuments: [],
      customerDocuments: [],
      productionProcesses: [],
      measures: ''
      // imageFind: this.getUrlImahe(this.itemData.itemId)
    };
    this.dataPdf = document.getElementById('contentToConvert');
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.en;
    this.showSatusList = true;
    this.showProcessesList = true;
    this.processList = [];
    this.processListMemory = [];
    this.estatusList = [];
    this.changeStatus = '';
    this.changeProcess = '';
    this.position = 0;
    this.type = 'in';
    this.updateProcessSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.updatesStatusLineSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.getImage = false;
    this.itemImage = '';
    this.quintoImage = '';
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.positionSaleOrderSubs = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.productionProcessListSubs = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.paramMapSubs = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.configuration = "";
    this.logoFtm = '';
    this.dateAdapter.setLocale('en-GB');
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
  }
  ngOnInit() {
    this.getBase64ImageFromAws('https://ftm-public-bucket.s3.us-east-2.amazonaws.com/documents/logoTomas.jpg').then(result => {
      this.logoFtm = result;
    });
    this.ensambleQrFromUrl();
    this.getProcesList();
  }
  generateQRCode() {
    const options = {
      errorCorrectionLevel: 'H',
      margin: 0,
      scale: 10
    };
    qrcode__WEBPACK_IMPORTED_MODULE_10__.toDataURL(this.openUrl, options).then(url => {
      this.qrCodeUrl = url;
    }).catch(err => console.error(err));
  }
  getBase64ImageFromAws(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
      img.onerror = error => {
        reject(error);
      };
      img.src = url;
    });
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.positionSaleOrderSubs.unsubscribe();
    this.productionProcessListSubs.unsubscribe();
    this.paramMapSubs.unsubscribe();
    this.updatesStatusLineSubscription.unsubscribe();
    this.updatesStatusLineSubscription.unsubscribe();
  }
  patchValue() {
    this.positionSaleOrderSubs = this.storeApi.select(_state_sale_order_selector__WEBPACK_IMPORTED_MODULE_0__.selectPositionSaleOrder).subscribe(positionSaleOrder => {
      if (positionSaleOrder != undefined && positionSaleOrder != null) {
        this.itemData = positionSaleOrder.positionSaleOrder;
        this.dataTransform = {
          salesOrderId: this.itemData.salesOrderId,
          customerSalesOrderId: this.itemData.customerSalesOrderId,
          customerId: this.itemData.customerId,
          customerName: this.itemData.customerName,
          salesOrderStatusName: this.itemData.salesOrderStatusName,
          salesOrderNotes: this.itemData.salesOrderNotes,
          itemId: this.itemData.itemId,
          itemName: this.itemData.itemName,
          position: this.itemData.position,
          quantity: this.itemData.quantity,
          image: this.itemData.image,
          quinto: this.itemData.quinto,
          creationDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.itemData.creationDate).format('YYYY-MM-DD'),
          salesOrderDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.itemData.salesOrderDate).format('YYYY-MM-DD'),
          shipmentDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.itemData.shipmentDate).format('YYYY-MM-DD'),
          deliveryDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.itemData.deliveryDate).format('YYYY-MM-DD'),
          shippingDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.itemData.shippingDate).format('YYYY-MM-DD'),
          salesOrderPositionNotes: this.itemData.salesOrderPositionNotes,
          currentProductionProcess: this.itemData.currentProductionProcess,
          lastProductionProcess: this.itemData.lastProductionProcess,
          components: this.itemData.components,
          productionProcesses: this.itemData.productionProcesses == undefined ? [] : this.itemData.productionProcesses,
          itemDocuments: this.itemData.itemDocuments == undefined ? [] : this.itemData.itemDocuments,
          customerDocuments: this.itemData.customerDocuments == undefined ? [] : this.itemData.customerDocuments,
          measures: this.itemData.measures
          // imageFind: this.getUrlImahe(this.itemData.itemId)
        };
        if (this.dataTransform && this.dataTransform.productionProcesses && this.dataTransform.productionProcesses.length > 0) {
          if (this.dataTransform.productionProcesses[this.dataTransform.productionProcesses.length - 1].inputDate != '' && this.dataTransform.productionProcesses[this.dataTransform.productionProcesses.length - 1].outputDate == null) {
            this.processList = [];
            this.processList.push({
              name: this.dataTransform.productionProcesses[this.dataTransform.productionProcesses.length - 1].productionProcessName,
              id: this.dataTransform.productionProcesses[this.dataTransform.productionProcesses.length - 1].productionProcessId
            });
            this.type = 'out';
          } else {
            this.processList = this.processListMemory;
            this.type = 'in';
          }
        } else {
          this.processList = this.processListMemory;
          this.type = 'in';
        }
        this.getUrlImage(this.itemData);
        this.positionSaleOrderSubs.unsubscribe();
        //  this.toDataURL(this.dataTransform.itemDocuments[0].url);
      }
    });
  }
  getProcesList() {
    this.productionProcessListSubs = this.storeApi.select(src_app_catalogs_production_process_state_production_process_selector__WEBPACK_IMPORTED_MODULE_4__.selectProductionProcessByUserList).subscribe(data => {
      this.processList = data.productionProcessList;
      this.processListMemory = data.productionProcessList;
      if (data != undefined && data.productionProcessList.length == 0 && !data.loading && data.dateUpdate != moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD')) {
        this.storeDispatch.dispatch((0,src_app_catalogs_production_process_state_production_process_actions__WEBPACK_IMPORTED_MODULE_7__.loadProductionProcessByUserList)());
        this.productionProcessListSubs.unsubscribe();
      }
    });
  }
  ensambleQrFromUrl() {
    // JsBarcode(".codigo").options({
    //   format: "CODE128",
    //   displayValue: false,
    //   text: this.barCodeValue,
    // })
    //   .init();
    this.getLineByPosition();
  }
  getLineByPosition() {
    if (this.dataForModal.modal) {
      let data = {
        id: this.dataForModal.id,
        position: this.dataForModal.position
      };
      let value = crypto_js__WEBPACK_IMPORTED_MODULE_6__.AES.encrypt('operations/sales-order/' + data.id + '/position/' + data.position, 'ftmSystem');
      this.openUrl = value.toString();
      this.generateQRCode();
      this.getLineOrderDetails(data);
      this.paramMapSubs.unsubscribe();
    } else {
      this.paramMapSubs = this.router.paramMap.subscribe(params => {
        console.log(params.get('id'));
        let id = params.get('id');
        this.configuration = params.get('configuration');
        let position = params.get('position');
        if (id) {
          if (id != 'new') {
            let data = {
              id: 0
            };
            data.id = params.get('id');
            data.id = Number(data.id);
          }
        }
        if (position) {
          if (position != 'new') {
            let data = {
              id: id,
              position: 0
            };
            data.position = params.get('position');
            data.position = Number(data.position);
            let value = crypto_js__WEBPACK_IMPORTED_MODULE_6__.AES.encrypt('operations/sales-order/' + data.id + '/position/' + data.position, 'ftmSystem');
            this.openUrl = value.toString();
            this.getLineOrderDetails(data);
            this.paramMapSubs.unsubscribe();
          }
        }
      });
    }
  }
  getLineOrderDetails(data) {
    this.storeDispatch.dispatch((0,_state_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionPositionSaleOrder)({
      loading: true,
      positionSaleOrder: data
    }));
    this.updatesStatusLineSubscription = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.ofType)('[Get PositionSaleOrder] Finish GetPositionSaleOrder')).subscribe(result => {
      this.patchValue();
      this.updatesStatusLineSubscription.unsubscribe();
    });
  }
  getUrlImage(item) {
    let url = "";
    let urlCustomer = "";
    // if (item != undefined && opc == 1) {
    if (item.itemDocuments != undefined && item.itemDocuments.length > 0) {
      url = item.itemDocuments[0].url;
      this.getBase64ImageFromURL(url).then(result => {
        this.itemImage = result;
      });
      this.itemImage;
    }
    // }
    // else if (item != undefined && opc == 2) {
    if (item.customerDocuments != undefined && item.customerDocuments.length > 0) {
      urlCustomer = item.customerDocuments[0].url;
      this.getBase64ImageFromURL(urlCustomer).then(result => {
        this.quintoImage = result;
      });
      this.quintoImage;
    }
    // }
  }
  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
      img.onerror = error => {
        reject(error);
      };
      img.src = url;
    });
  }
  preparePDF() {
    const element = this.contentToConvert.nativeElement;
    const options = {
      filename: this.itemData.customerSalesOrderId + '-' + this.itemData.salesOrderNotes + '-Line-' + this.itemData.position + '.pdf',
      jsPDF: {
        orientation: 'p',
        unit: 'mm',
        format: 'letter',
        compress: true
      },
      html2canvas: {
        scale: 2,
        // Aumenta la escala para mejor calidad
        useCORS: true // Permite el uso de recursos CORS
      }
    };
    dom_to_pdf__WEBPACK_IMPORTED_MODULE_9__(element, options, () => {
      console.log('PDF generated!');
      this.dialogRef.close();
    });
  }
  getStatusList(statusLine, position) {
    if (!this.permissionsGuard.Permission('UpdateSalesOrderPositionStatus')) {
      const message = this.lan === 'en' ? src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.en.NotHavePermissions : src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.es.NotHavePermissions;
      this.snackBar.open(message, '', {
        panelClass: 'mensaje-error',
        duration: 4000
      });
      return;
    }
    this.position = position;
    let list = [];
    const isNew = this.itemData && this.itemData.salesOrderStatusName === 'New';
    const isPartiallyApproved = this.itemData && this.itemData.salesOrderStatusName === 'PartiallyApproved';
    const isApproved = this.itemData && this.itemData.salesOrderStatusName === 'Approved';
    const isInProcess = this.itemData && this.itemData.salesOrderStatusName === 'InProcess';
    const isDone = this.itemData && this.itemData.salesOrderStatusName === 'Done';
    switch (statusLine) {
      case 'Undefined':
        list = this.itemData === undefined ? ['Undefined'] : [];
        break;
      case 'New':
        list = isNew ? ['Approved', 'Canceled'] : [];
        break;
      case 'Approved':
        list = isNew ? ['Canceled', 'Done'] : isPartiallyApproved ? ['Canceled', 'Done'] : isApproved ? ['Canceled'] : [];
        break;
      case 'InProcess':
        list = isNew || isPartiallyApproved || isInProcess ? ['Done', 'Canceled'] : [];
        break;
      case 'Done':
        list = isDone ? ['InProcess'] : [];
        break;
      case 'Invoiced':
        list = [];
        break;
    }
    this.estatusList = list;
    if (this.estatusList.length === 0) {
      return;
    }
    const data = {
      statusList: list,
      position: position,
      id: this.itemData.salesOrderId,
      op: 'changeStatusLine'
    };
    const dialogRef = this.dialog.open(src_app_shared_component_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__.PopupComponent, {
      width: '18vw',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getLineByPosition();
      }
    });
  }
  getProccessList(position) {
    if (this.type == 'in' && !this.permissionsGuard.Permission('SalesOrderPositionProcessIn')) {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.es.NotHavePermissions;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.en.NotHavePermissions;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 4000
      });
      return;
    }
    if (this.type == 'out' && !this.permissionsGuard.Permission('SalesOrderPositionProcessOut')) {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.es.NotHavePermissions;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.en.NotHavePermissions;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 4000
      });
      return;
    }
    let processName = "Sin proceso";
    if (this.dataTransform.productionProcesses.length > 0) {
      processName = this.dataTransform.productionProcesses[this.dataTransform.productionProcesses.length - 1].productionProcessName;
    }
    let processListView = [...this.processList];
    this.dataTransform.productionProcesses.forEach(element => {
      if (element.inputDate && element.outputDate && !element.deletedDate) {
        processListView = processListView.filter(x => x.id !== element.productionProcessId);
      }
    });
    this.position = position;
    let data = {
      processList: processListView,
      position: position,
      id: this.itemData.salesOrderId,
      op: 'changeProccessLine',
      processName: processName,
      type: this.type,
      history: this.dataTransform.productionProcesses
    };
    const dialogRef = this.dialog.open(src_app_shared_component_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__.PopupComponent, {
      width: '500px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getLineByPosition();
      }
    });
  }
  changeStatusLine(newStatus) {
    if (newStatus == "Undefine") {
      return;
    }
    let lineSaleOrder = {
      id: this.dataTransform.salesOrderId,
      position: this.position,
      status: newStatus
    };
    this.storeDispatch.dispatch((0,_state_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionUpdateStatusLineSaleOrder)({
      loading: true,
      lineSaleOrder: lineSaleOrder
    }));
    this.updatesStatusLineSubscription = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.ofType)('[Update StatusLineSaleOrder] Finish UpdateStatusLineSaleOrder')).subscribe(result => {
      console.log('Updta status line production ---> ', result);
      let newData = {
        id: this.dataTransform.salesOrderId,
        position: this.position
      };
      this.updatesStatusLineSubscription.unsubscribe();
      this.storeDispatch.dispatch((0,_state_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionPositionSaleOrder)({
        loading: true,
        positionSaleOrder: newData
      }));
    });
  }
  formatDate(value) {
    let newDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(value)).format('DD-MM-YYYY');
    return newDate;
  }
  estatusOrder(value) {
    let status = 'Undefined';
    if (this.lan == "es") {
      status = 'Sin definir';
    }
    switch (value) {
      case 'New':
        status = 'Nuevo';
        if (this.lan == "en") {
          status = 'New';
        }
        break;
      case 'Approved':
        status = 'Aprobada';
        if (this.lan == "en") {
          status = 'Approved';
        }
        break;
      case 'Canceled':
        status = 'Cancelada';
        if (this.lan == "en") {
          status = 'Canceled';
        }
        break;
      case 'PartiallyApproved':
        status = 'Parcialmente aprobada';
        if (this.lan == "en") {
          status = 'PartiallyApproved';
        }
        break;
      case 'InProcess':
        status = 'En proceso';
        if (this.lan == "en") {
          status = 'InProcess';
        }
        break;
      case 'Done':
        status = 'Terminada';
        if (this.lan == "en") {
          status = 'Done';
        }
        break;
      case 'Invoiced':
        status = 'Facturada';
        if (this.lan == "en") {
          status = 'Invoiced';
        }
        break;
      default:
        break;
    }
    return status;
  }
  closeAndCancelModal() {
    if (this.dataForModal.modal) {
      this.dialogRef.close();
      return;
    }
    if (this.configuration && this.configuration == "a") {
      this.redirect.navigate(['operations/sales-orders/' + this.dataTransform.salesOrderId]);
    } else {
      this.redirect.navigate(['operations/orders']);
    }
  }
  openHistory() {
    if (!this.dataTransform.productionProcesses.length) {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.es.NotProccess;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.en.NotProccess;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 4000
      });
      return;
    }
    if (!this.permissionsGuard.Permission('SalesOrderPositionRecord')) {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.es.NotHavePermissions;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.en.NotHavePermissions;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 4000
      });
      return;
    }
    const dialogRef = this.dialog.open(LineHistoryComponent, {
      width: '80vw',
      maxHeight: '80vh',
      data: {
        history: this.dataTransform.productionProcesses,
        poAndLine: 'PO# ' + this.dataTransform.customerSalesOrderId + ' (' + this.dataTransform.salesOrderNotes + ')' + (this.lan == "es" ? "- línea " : " - line ") + this.dataTransform.position
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getLineByPosition();
      }
    });
  }
  releaseProcess() {
    if (!this.dataTransform.productionProcesses.length) {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.es.NotProccess;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.en.NotProccess;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 4000
      });
      return;
    }
    if (!this.permissionsGuard.Permission('ReleaseProductionProccess')) {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.es.NotHavePermissions;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.en.NotHavePermissions;
      }
      this.snackBar.open(message, '', {
        panelClass: "mensaje-error",
        duration: 4000
      });
      return;
    }
    let processesToRelease = this.dataTransform.productionProcesses.filter(process => {
      return process.inputDate != null && process.inputDate != "" && process.outputDate != null && process.outputDate != "" && (process.deletedDate == null || process.deletedDate == "");
    });
    if (processesToRelease && processesToRelease.length > 0) {
      let data = {
        item: this.dataTransform,
        processList: processesToRelease,
        position: this.dataTransform.position,
        id: this.itemData.salesOrderId,
        op: 'releaseProcess'
      };
      const dialogRef = this.dialog.open(src_app_shared_component_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__.PopupComponent, {
        width: '18vw',
        data: data
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getLineByPosition();
        }
      });
    }
  }
  f(url) {
    let img = this.sanitizer.sanitize(4, url);
    return img;
  }
  transformDate(date) {
    return moment__WEBPACK_IMPORTED_MODULE_2__(new Date(date)).format('DD-MM-YYYY');
  }
  static {
    this.ɵfac = function DetailProductionLineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DetailProductionLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_11__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_18__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_18__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_19__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_12__.PermissionsGuard), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_13__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogRef, 8));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: DetailProductionLineComponent,
      selectors: [["app-detail-production-line"]],
      viewQuery: function DetailProductionLineComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.contentToConvert = _t.first);
        }
      },
      inputs: {
        name: [0, "", "name"]
      },
      decls: 65,
      vars: 24,
      consts: [["contentToConvert", ""], [1, "row"], [1, "inLine"], [3, "click"], [3, "ngClass"], [1, "labelChipLastProductionProccess2", "labelLastProductionProccess", "mr-10", 3, "click"], [4, "ngIf"], [1, "labelChipLastProductionProccess", "history", "mr-10", "pointer", 3, "click"], [1, "labelChipLastProductionProccess", "releaseProductionProccess", "mr-10", 3, "click"], [1, "btn-l-100b", "ml-a", "mr-10", 3, "click"], [1, "btn-l-warning", 3, "click"], ["id", "contentToConvert", 1, "w-100", "mt-20"], [1, "containerOrder"], [1, "row", "w-100", 2, "width", "28% !important", "margin-left", "20px"], ["id", "firma", "alt", "Logo", "crossOrigin", "Anonymous", 1, "logo", 3, "src"], [1, "row", "w-100"], [1, "font-components"], [1, "row", "w-100", 2, "width", "36% !important", "margin-left", "auto"], ["class", "product", "alt", "Item Image", 3, "src", 4, "ngIf"], ["class", "product", "src", "../../assets/img/sin_imagen.jpg", "alt", "Sin Imagen", 4, "ngIf"], ["class", "quinto", "alt", "Quinto Image", 3, "src", 4, "ngIf"], ["class", "quinto", "src", "../../assets/img/sin_imagen.jpg", "alt", "Sin Quinto Image", 4, "ngIf"], ["alt", "C\u00F3digo QR", 1, "qr", 3, "src"], [1, "w-100"], [1, "inLine", "mt-20"], [1, "font-info"], [1, "font-info", "mr-30"], [1, "font-info", "mr-10"], ["class", "inLine", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["alt", "Item Image", 1, "product", 3, "src"], ["src", "../../assets/img/sin_imagen.jpg", "alt", "Sin Imagen", 1, "product"], ["alt", "Quinto Image", 1, "quinto", 3, "src"], ["src", "../../assets/img/sin_imagen.jpg", "alt", "Sin Quinto Image", 1, "quinto"], [1, "font-info", "cr"]],
      template: function DetailProductionLineComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DetailProductionLineComponent_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.getStatusList(ctx.dataTransform.salesOrderStatusName, ctx.dataTransform.position));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DetailProductionLineComponent_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.getProccessList(ctx.dataTransform.position));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, DetailProductionLineComponent_span_6_Template, 2, 2, "span", 6)(7, DetailProductionLineComponent_span_7_Template, 2, 1, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DetailProductionLineComponent_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.openHistory());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DetailProductionLineComponent_Template_div_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.releaseProcess());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DetailProductionLineComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.preparePDF());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DetailProductionLineComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.closeAndCancelModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 11, 0)(19, "div", 12)(20, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 15)(23, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, DetailProductionLineComponent_div_25_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, DetailProductionLineComponent_img_29_Template, 1, 1, "img", 18)(30, DetailProductionLineComponent_img_30_Template, 1, 0, "img", 19)(31, DetailProductionLineComponent_img_31_Template, 1, 1, "img", 20)(32, DetailProductionLineComponent_img_32_Template, 1, 0, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 17)(34, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](35, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 23)(37, "div", 24)(38, "div", 2)(39, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "PO#: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 2)(44, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45, "L\u00EDnea:");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 2)(49, "div", 2)(50, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51, "Recibido:");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div", 2)(55, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56, "Envio:");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "div", 2)(60, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, "Cantidad:");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](64, DetailProductionLineComponent_div_64_Template, 5, 1, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", "mr-10 labelChip label" + ctx.dataTransform.salesOrderStatusName);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.estatusOrder(ctx.dataTransform.salesOrderStatusName), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.dataTransform.productionProcesses && ctx.dataTransform.productionProcesses.length > 0 && (ctx.dataTransform.productionProcesses[ctx.dataTransform.productionProcesses.length - 1].deletedDate == null || ctx.dataTransform.productionProcesses[ctx.dataTransform.productionProcesses.length - 1].deletedDate == ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.dataTransform.productionProcesses || ctx.dataTransform.productionProcesses.length == 0 || ctx.dataTransform.productionProcesses[ctx.dataTransform.productionProcesses.length - 1].deletedDate != null && ctx.dataTransform.productionProcesses[ctx.dataTransform.productionProcesses.length - 1].deletedDate != "");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.ViewHistory : ctx.en.ViewHistory, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.ReleaseProcess : ctx.en.ReleaseProcess, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.GeneratePDF : ctx.en.GeneratePDF, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx.logoFtm, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Medidas: ", ctx.dataTransform.measures, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.dataTransform.components);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Quinto: ", ctx.dataTransform.customerName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.itemImage);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.itemImage);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.quintoImage);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.quintoImage);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx.qrCodeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.dataTransform.salesOrderNotes);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx.dataTransform.position, " de ", ctx.sharedService.quantitiesOrders, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.transformDate(ctx.dataTransform.shipmentDate));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.transformDate(ctx.dataTransform.shippingDate));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.dataTransform.quantity);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.dataTransform && ctx.dataTransform.salesOrderPositionNotes && ctx.dataTransform.salesOrderPositionNotes != "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultClassDirective],
      styles: [".containerOrder[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  width: 100%;\n  flex-direction: row;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n\n.qr[_ngcontent-%COMP%] {\n  max-width: 450px;\n  max-height: 385px;\n  object-fit: cover;\n}\n\n.quinto[_ngcontent-%COMP%] {\n  max-width: 250px;\n  max-height: 250px;\n  object-fit: cover;\n  margin-left: auto;\n  margin-top: 20px;\n}\n\n.product[_ngcontent-%COMP%] {\n  max-width: 450px;\n  max-height: 390px;\n  object-fit: contain;\n}\n\n.font-components[_ngcontent-%COMP%] {\n  font-family: Arial;\n  font-size: 23px;\n}\n\n.font-info[_ngcontent-%COMP%] {\n  font-family: Arial;\n  font-size: 25px;\n}\n\n.inLine[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n  .cdk-overlay-pane {\n  max-width: 100vw !important;\n  max-height: 100vh !important;\n}\n\n.cr[_ngcontent-%COMP%] {\n  color: rgb(164, 9, 9);\n}"]
    });
  }
}
class LineHistoryComponent {
  constructor(data, languageService, dialogRef, _paginator) {
    this.data = data;
    this.languageService = languageService;
    this.dialogRef = dialogRef;
    this._paginator = _paginator;
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.lan = "es";
    this.es = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.es;
    this.en = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_3__.en;
    this.displayedColumns = ['productionProcessName', 'inputDate', 'inputUsername', 'inputNotes', 'outputDate', 'outputUsername', 'outputNotes', 'released', 'dateOfReprocessing'];
    this.showPaginator = false;
    this.type = [];
    this.history = new _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableDataSource(this.type);
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__.faClose;
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
    this.history.data = [];
    this.data.history.forEach(element => {
      let newElement = {
        ...element,
        active: ""
      };
      newElement.inputDate ? newElement.inputDate = moment__WEBPACK_IMPORTED_MODULE_2__(newElement.inputDate).format("YYYY-MM-DD") : newElement.inputDate = newElement.inputDate;
      newElement.outputDate ? newElement.outputDate = moment__WEBPACK_IMPORTED_MODULE_2__(newElement.outputDate).format("YYYY-MM-DD") : newElement.outputDate = newElement.outputDate;
      newElement.deletedDate ? newElement.deletedDate = moment__WEBPACK_IMPORTED_MODULE_2__(newElement.outputDate).format("YYYY-MM-DD") : newElement.deletedDate = newElement.deletedDate;
      this.history.data.push(newElement);
    });
    this.history.data = this.history.data.reverse();
    if (this.history.data.length > 0) {
      this.history.data[0].inputDate && !this.history.data[0].outputDate && !this.history.data[0].deletedDate ? this.history.data[0].active = "inProccess" : '';
      this.history.data = this.history.data;
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.history.paginator = this.paginator;
      this.history.sort = this.sort;
    }, 500);
  }
  closeAndCancelModal() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function LineHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LineHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_11__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorIntl));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: LineHistoryComponent,
      selectors: [["app-bills-report"]],
      viewQuery: function LineHistoryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 42,
      vars: 8,
      consts: [["table", ""], [1, "m-card", "p-20", "overflowA"], ["fxLayout.xs", "column", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px", "width", "100%"], [1, "ml-0", "containerComponent__orders-title", 2, "margin-right", "auto"], ["fxLayout", "row", "fxLayoutAlign", "end start", 1, "m-t-20", "m-l-a"], [1, "m-r-10", "m-b-10"], ["color", "warn", 1, "btn-l-warning", 3, "click", "matTooltip"], [1, "containerComponent__table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "inputDate"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "inputUsername"], ["matColumnDef", "inputNotes"], ["matColumnDef", "outputDate"], ["matColumnDef", "outputUsername"], ["matColumnDef", "outputNotes"], ["matColumnDef", "productionProcessName"], ["matColumnDef", "dateOfReprocessing"], ["matColumnDef", "released"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "ngClass"], ["class", "labelChipLastProductionProccess labelLastProductionProccess", 4, "ngIf"], [1, "labelChipLastProductionProccess", "labelLastProductionProccess"], [4, "ngIf"], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions"]],
      template: function LineHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "mat-card-title", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LineHistoryComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.closeAndCancelModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 7)(10, "table", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](12, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, LineHistoryComponent_th_13_Template, 2, 1, "th", 10)(14, LineHistoryComponent_td_14_Template, 2, 5, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](15, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, LineHistoryComponent_th_16_Template, 2, 1, "th", 10)(17, LineHistoryComponent_td_17_Template, 2, 5, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](18, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, LineHistoryComponent_th_19_Template, 2, 1, "th", 10)(20, LineHistoryComponent_td_20_Template, 2, 5, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](21, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, LineHistoryComponent_th_22_Template, 2, 1, "th", 10)(23, LineHistoryComponent_td_23_Template, 2, 5, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](24, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, LineHistoryComponent_th_25_Template, 2, 1, "th", 10)(26, LineHistoryComponent_td_26_Template, 2, 5, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](27, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, LineHistoryComponent_th_28_Template, 2, 1, "th", 10)(29, LineHistoryComponent_td_29_Template, 2, 5, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](30, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, LineHistoryComponent_th_31_Template, 2, 1, "th", 10)(32, LineHistoryComponent_td_32_Template, 2, 5, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](33, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, LineHistoryComponent_th_34_Template, 2, 1, "th", 10)(35, LineHistoryComponent_td_35_Template, 2, 5, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](36, 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, LineHistoryComponent_th_37_Template, 2, 1, "th", 10)(38, LineHistoryComponent_td_38_Template, 3, 6, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, LineHistoryComponent_tr_39_Template, 1, 0, "tr", 20)(40, LineHistoryComponent_tr_40_Template, 1, 0, "tr", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, LineHistoryComponent_mat_paginator_41_Template, 1, 2, "mat-paginator", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", ctx.lan == "es" ? ctx.es.History : ctx.en.History, " ", ctx.data.poAndLine, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.lan == "es" ? ctx.es.Cancel : ctx.en.Cancel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx.history);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showPaginator);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortHeader, _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardTitle, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginator, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultClassDirective],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 53014:
/*!********************************************************************!*\
  !*** ./src/app/operations/sales-order/state/sale-order.actions.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddPositionToSaleOrder: () => (/* binding */ AddPositionToSaleOrder),
/* harmony export */   addImagePositionSaleOrder: () => (/* binding */ addImagePositionSaleOrder),
/* harmony export */   addSaleOrder: () => (/* binding */ addSaleOrder),
/* harmony export */   deleteSaleOrder: () => (/* binding */ deleteSaleOrder),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadActionAddImagePositionSaleOrder: () => (/* binding */ loadActionAddImagePositionSaleOrder),
/* harmony export */   loadActionAddPositionToSaleOrder: () => (/* binding */ loadActionAddPositionToSaleOrder),
/* harmony export */   loadActionAddSaleOrder: () => (/* binding */ loadActionAddSaleOrder),
/* harmony export */   loadActionDeleteSaleOrder: () => (/* binding */ loadActionDeleteSaleOrder),
/* harmony export */   loadActionPositionSaleOrder: () => (/* binding */ loadActionPositionSaleOrder),
/* harmony export */   loadActionSaleOrderById: () => (/* binding */ loadActionSaleOrderById),
/* harmony export */   loadActionUpdateLineSaleOrder: () => (/* binding */ loadActionUpdateLineSaleOrder),
/* harmony export */   loadActionUpdateProcessLineSaleOrder: () => (/* binding */ loadActionUpdateProcessLineSaleOrder),
/* harmony export */   loadActionUpdateSaleOrder: () => (/* binding */ loadActionUpdateSaleOrder),
/* harmony export */   loadActionUpdateStatusLineSaleOrder: () => (/* binding */ loadActionUpdateStatusLineSaleOrder),
/* harmony export */   loadOrdersList: () => (/* binding */ loadOrdersList),
/* harmony export */   loadSalesOrdersList: () => (/* binding */ loadSalesOrdersList),
/* harmony export */   loadedOrdersList: () => (/* binding */ loadedOrdersList),
/* harmony export */   loadedSalesOrdersList: () => (/* binding */ loadedSalesOrdersList),
/* harmony export */   positionSaleOrder: () => (/* binding */ positionSaleOrder),
/* harmony export */   saleOrderById: () => (/* binding */ saleOrderById),
/* harmony export */   updateLineSaleOrder: () => (/* binding */ updateLineSaleOrder),
/* harmony export */   updateProcessLineSaleOrder: () => (/* binding */ updateProcessLineSaleOrder),
/* harmony export */   updateSaleOrder: () => (/* binding */ updateSaleOrder),
/* harmony export */   updateStatusLineSaleOrder: () => (/* binding */ updateStatusLineSaleOrder)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadSalesOrdersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrders List] Init SalesOrdersList');
const loadedSalesOrdersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SalesOrders List] Finish SalesOrdersList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadOrdersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Orders List] Init OrdersList', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadedOrdersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Orders List] Finish OrdersList',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add SaleOrder] Init AddSaleOrder', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add SaleOrder] Finish AddSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update SaleOrder] Init UpdateSaleOrder', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update SaleOrder] Finish UpdateSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddPositionToSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add PositionToSaleOrder] Init AddPositionToSaleOrder', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const AddPositionToSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add PositionToSaleOrder] Finish AddPositionToSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionSaleOrderById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById SaleOrder] Init GetByIdSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const saleOrderById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById SaleOrder] Finish GetByIdSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete SaleOrder] Init DeleteSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete SaleOrder] Finish DeleteSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateLineSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update LineSaleOrder] Init UpdateLineSaleOrder', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateLineSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update LineSaleOrder] Finish UpdateLineSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateStatusLineSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update StatusLineSaleOrder] Init UpdateStatusLineSaleOrder', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateStatusLineSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update StatusLineSaleOrder] Finish UpdateStatusLineSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionPositionSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Get PositionSaleOrder] Init GetPositionSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const positionSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Get PositionSaleOrder] Finish GetPositionSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateProcessLineSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update ProcessLineSaleOrder] Init UpdateProcessLineSaleOrder', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateProcessLineSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update ProcessLineSaleOrder] Finish UpdateProcessLineSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionAddImagePositionSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add ImagePositionSaleOrder] Init AddImagePositionSaleOrder', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const addImagePositionSaleOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add ImagePositionSaleOrder] Finish AddImagePositionSaleOrder',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
// export const loadActionDeleteImagePosition = createAction(
//   '[Delete PositionImage] Init DeletePositionImage',
//   props<{
//     loading: boolean,
//     position: any,
//   }>()   //Propiedades
// );
// export const deletePositionImage = createAction(
//   '[Delete PositionImage] Finish DeletePositionImage',  //Type
//   props<{
//     loading: boolean,
//     delete: any,
//   }>()   //Propiedades
// );

/***/ }),

/***/ 1651:
/*!********************************************************************!*\
  !*** ./src/app/operations/sales-order/state/sale-order.effects.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOrdersEffects: () => (/* binding */ SalesOrdersEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _sale_order_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-order.actions */ 53014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);











class SalesOrdersEffects {
  addImageToPosition(element) {
    if (element) {
      this.storeDispatch.dispatch((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionAddImagePositionSaleOrder)({
        loading: true,
        image: element
      }));
    }
  }
  // deleteCompanyImage = createEffect(() => {
  //     return this.actions$.pipe(
  //         ofType('[Delete PositionImage] Init DeletePositionImage'),
  //         switchMap((body: any) =>
  //             this.servicio.DeleteRequest("companies/" + body.position.id + '/document/' + body.position.urlDeleteImage, "APIREST",).pipe(
  //                 catchError(error =>
  //                     of(errorApi({ loading: true, error: error }))
  //                 ),
  //                 map((response: any) => {
  //                     let validateResponse = this.apiService.finishResponseServer(response, 'Delete',true,'eliminar');
  //                     validateResponse.refreshList == true ? this.storeDispatch.dispatch(loadCompaniesList()) : false;
  //                     return ({
  //                         type: '[Delete CompanyImage] Finish DeleteCompanyImage',
  //                         delete: response,
  //                     });
  //                 })
  //             ))
  //     )
  // })
  constructor(actions$, servicio, storeDispatch, apiService, router) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.storeDispatch = storeDispatch;
    this.apiService = apiService;
    this.router = router;
    this.salesOrdersList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[SalesOrders List] Init SalesOrdersList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest("sales-order", "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[SalesOrders List] Finish SalesOrdersList',
          salesOrders: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.OrdersList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Orders List] Init OrdersList'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest("reports" + params.params, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Orders List] Finish OrdersList',
          orders: response.salesOrderPositions,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.addSaleOrder = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add SaleOrder] Init AddSaleOrder'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("sales-order", "APIREST", body.saleOrder).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        body.saleOrder.items.forEach((element, index) => {
          let time = 3000;
          if (element.image) {
            setTimeout(() => {
              let newData = {
                ...element,
                saleOrderId: response.id
              };
              this.addImageToPosition(newData);
            }, time * index);
          }
        });
        let validateResponse = this.apiService.finishResponseServer(response, 'Add');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersList)()) : false;
        validateResponse.refreshList == true ? this.router.navigate(['operations/sales-orders']) : false;
        return {
          type: '[Add SaleOrder] Finish AddSaleOrder',
          saleOrder: response
        };
      }))));
    });
    this.addPositionToSaleOrder = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add PositionToSaleOrder] Init AddPositionToSaleOrder'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("sales-order/" + body.position.saleOrderId + "/position", "APIREST", body.position).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        if (body && body.position && body.position.image) {
          let newData = {
            ...body.position,
            saleOrderId: body.position.saleOrderId
          };
          this.addImageToPosition(newData);
        }
        let validateResponse = this.apiService.finishResponseServer(response, 'Add');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersList)()) : false;
        return {
          type: '[Add PositionToSaleOrder] Finish AddPositionToSaleOrder',
          position: response
        };
      }))));
    });
    this.updateSaleOrder = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update SaleOrder] Init UpdateSaleOrder'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("sales-order/" + body.saleOrder.id, "APIREST", body.saleOrder).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersList)()) : false;
        return {
          type: '[Update SaleOrder] Finish UpdateSaleOrder',
          saleOrder: validateResponse.refreshList == true ? body.saleOrder : undefined
        };
      }))));
    });
    this.updateLineSaleOrder = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update LineSaleOrder] Init UpdateLineSaleOrder'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("sales-order/" + body.lineSaleOrder.salesOrderId + "/position/" + body.lineSaleOrder.position + '/full', "APIREST", body.lineSaleOrder).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersList)()) : false;
        if (validateResponse.refreshList && body.lineSaleOrder.image && body.lineSaleOrder.updateImage) {
          // if (body.lineSaleOrder.urlDeleteImage != undefined && body.lineSaleOrder.urlDeleteImage != '' && body.lineSaleOrder.urlDeleteImage != null) {
          //     validateResponse.refreshList == true ? this.storeDispatch.dispatch(loadActionDeleteImagePosition({ loading: true, position: body.lineSaleOrder })) : false;
          // }
          this.addImageToPosition(body.lineSaleOrder);
        }
        return {
          type: '[Update LineSaleOrder] Finish UpdateLineSaleOrder',
          lineSaleOrder: body.lineSaleOrder
        };
      }))));
    });
    this.updateStatusLineSaleOrder = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update StatusLineSaleOrder] Init UpdateStatusLineSaleOrder'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("sales-order/" + body.lineSaleOrder.id + "/position/" + body.lineSaleOrder.position + "/update-status/" + body.lineSaleOrder.status, "APIREST", body.lineSaleOrder).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Edit');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersList)()) : false;
        return {
          type: '[Update StatusLineSaleOrder] Finish UpdateStatusLineSaleOrder',
          lineSaleOrder: body.lineSaleOrder
        };
      }))));
    });
    this.updateProcessLineSaleOrder = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update ProcessLineSaleOrder] Init UpdateProcessLineSaleOrder'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("sales-order/" + body.processLineSaleOrder.id + "/position/" + body.processLineSaleOrder.position + "/production-process/" + body.processLineSaleOrder.type, "APIREST", body.processLineSaleOrder).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        // let validateResponse = this.apiService.finishResponseServer(response, 'EditLineProduction',);
        // validateResponse.refreshList == true ? this.storeDispatch.dispatch(loadSalesOrdersList()) : false;
        return {
          type: '[Update ProcessLineSaleOrder] Finish UpdateProcessLineSaleOrder',
          processLineSaleOrder: body.processLineSaleOrder
        };
      }))));
    });
    this.getByIdSaleOrder = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById SaleOrder] Init GetByIdSaleOrder'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("sales-order/" + body.saleOrder.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById SaleOrder] Finish GetByIdSaleOrder',
          saleOrder: response
        };
      }))));
    });
    this.getPositionSaleOrder = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Get PositionSaleOrder] Init GetPositionSaleOrder'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("sales-order/" + body.positionSaleOrder.id + "/position/" + body.positionSaleOrder.position, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Get PositionSaleOrder] Finish GetPositionSaleOrder',
          positionSaleOrder: response
        };
      }))));
    });
    this.deleteSaleOrder = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete SaleOrder] Init DeleteSaleOrder'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("sales-order/" + body.saleOrder.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        let validateResponse = this.apiService.finishResponseServer(response, 'Delete');
        validateResponse.refreshList == true ? this.storeDispatch.dispatch((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadSalesOrdersList)()) : false;
        return {
          type: '[Delete SaleOrder] Finish DeleteSaleOrder',
          saleOrder: response
        };
      }))));
    });
    this.addProductsImage = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add ImagePositionSaleOrder] Init AddImagePositionSaleOrder'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequestImage("sales-order/" + (body.image.saleOrderId ? body.image.saleOrderId : body.image.salesOrderId) + '/position/' + body.image.position + '/upload/document', "APIREST", body.image.image, 'position').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        // let validateResponse = this.apiService.finishResponseServer(response, 'Add', true, 'guardar');
        return {
          type: '[Add ImagePositionSaleOrder] Finish AddImagePositionSaleOrder',
          added: response
        };
      }))));
    });
  }
  static {
    this.ɵfac = function SalesOrdersEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SalesOrdersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: SalesOrdersEffects,
      factory: SalesOrdersEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 44736:
/*!*********************************************************************!*\
  !*** ./src/app/operations/sales-order/state/sale-order.reducers.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersListReducer: () => (/* binding */ OrdersListReducer),
/* harmony export */   initialLineStateSaleOrder: () => (/* binding */ initialLineStateSaleOrder),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateOrders: () => (/* binding */ initialStateOrders),
/* harmony export */   initialStatePositionSaleOrder: () => (/* binding */ initialStatePositionSaleOrder),
/* harmony export */   initialStateSaleOrderById: () => (/* binding */ initialStateSaleOrderById),
/* harmony export */   lineSaleOrderReducer: () => (/* binding */ lineSaleOrderReducer),
/* harmony export */   positionSaleOrderReducer: () => (/* binding */ positionSaleOrderReducer),
/* harmony export */   saleOrderByIdReducer: () => (/* binding */ saleOrderByIdReducer),
/* harmony export */   salesOrdersListReducer: () => (/* binding */ salesOrdersListReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _sale_order_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-order.actions */ 53014);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  salesOrders: [],
  dateUpdate: ''
};
const initialStateOrders = {
  loading: false,
  orders: [],
  dateUpdate: ''
};
const initialStateSaleOrderById = {
  loading: false,
  saleOrder: {
    customerId: null,
    salesOrderDate: null,
    notes: null,
    items: []
  }
};
const initialLineStateSaleOrder = {
  loading: false,
  lineSaleOrder: {
    shipmentDate: null,
    deliveryDate: null,
    shippingDate: null,
    notes: null
  }
};
const initialStatePositionSaleOrder = {
  loading: false,
  positionSaleOrder: {
    salesOrderId: null,
    customerSalesOrderId: null,
    customerId: null,
    customerName: null,
    salesOrderStatusName: null,
    salesOrderNotes: null,
    itemId: null,
    itemName: null,
    position: null,
    quantity: null,
    image: null,
    quinto: null,
    creationDate: null,
    salesOrderDate: null,
    shipmentDate: null,
    deliveryDate: null,
    shippingDate: null,
    salesOrderPositionNotes: null,
    currentProductionProcess: null,
    lastProductionProcess: null,
    components: [],
    productionProcesses: []
  }
};
const salesOrdersListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_sale_order_actions__WEBPACK_IMPORTED_MODULE_0__.loadSalesOrdersList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_sale_order_actions__WEBPACK_IMPORTED_MODULE_0__.loadedSalesOrdersList, (state, salesOrders) => {
  return {
    ...state,
    loading: false,
    salesOrders: salesOrders.salesOrders,
    dateUpdate: salesOrders.dateUpdate
  };
}));
const OrdersListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateOrders, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_sale_order_actions__WEBPACK_IMPORTED_MODULE_0__.loadOrdersList, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_sale_order_actions__WEBPACK_IMPORTED_MODULE_0__.loadedOrdersList, (state, orders) => {
  return {
    ...state,
    loading: false,
    orders: orders.orders,
    dateUpdate: orders.dateUpdate
  };
}));
const saleOrderByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateSaleOrderById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_sale_order_actions__WEBPACK_IMPORTED_MODULE_0__.saleOrderById, (state, saleOrder) => {
  return {
    ...state,
    loading: false,
    saleOrder: saleOrder.saleOrder
  };
}));
const lineSaleOrderReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialLineStateSaleOrder, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_sale_order_actions__WEBPACK_IMPORTED_MODULE_0__.updateLineSaleOrder, (state, lineSaleOrder) => {
  return {
    ...state,
    loading: false,
    lineSaleOrder: lineSaleOrder.lineSaleOrder
  };
}));
const positionSaleOrderReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStatePositionSaleOrder, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_sale_order_actions__WEBPACK_IMPORTED_MODULE_0__.positionSaleOrder, (state, positionSaleOrder) => {
  return {
    ...state,
    loading: false,
    positionSaleOrder: positionSaleOrder.positionSaleOrder
  };
}));

/***/ }),

/***/ 11400:
/*!*********************************************************************!*\
  !*** ./src/app/operations/sales-order/state/sale-order.selector.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectLineSaleOrder: () => (/* binding */ selectLineSaleOrder),
/* harmony export */   selectLineSalesOrder: () => (/* binding */ selectLineSalesOrder),
/* harmony export */   selectLoadingOrdersList: () => (/* binding */ selectLoadingOrdersList),
/* harmony export */   selectLoadingSalesOrdersList: () => (/* binding */ selectLoadingSalesOrdersList),
/* harmony export */   selectOrdersListFeature: () => (/* binding */ selectOrdersListFeature),
/* harmony export */   selectPositionSaleOrder: () => (/* binding */ selectPositionSaleOrder),
/* harmony export */   selectPositionSalesOrder: () => (/* binding */ selectPositionSalesOrder),
/* harmony export */   selectSaleOrderById: () => (/* binding */ selectSaleOrderById),
/* harmony export */   selectSaleOrderByIdFeature: () => (/* binding */ selectSaleOrderByIdFeature),
/* harmony export */   selectSalesOrdersList: () => (/* binding */ selectSalesOrdersList),
/* harmony export */   selectSalesOrdersListFeature: () => (/* binding */ selectSalesOrdersListFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const selectSalesOrdersListFeature = state => state.salesOrders;
const selectOrdersListFeature = state => state.orders;
const selectSaleOrderByIdFeature = state => state.saleOrderById;
const selectLineSaleOrder = state => state.saleOrderById;
const selectPositionSaleOrder = state => state.positionSaleOrder;
// export const selectPlazas2 = (state: AppState) => state.rutasList;
const selectLoadingSalesOrdersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectSalesOrdersListFeature,
// selectPlazas2,
state => state.loading);
const selectLoadingOrdersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectOrdersListFeature,
// selectPlazas2,
state => state.loading);
const selectSalesOrdersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectSalesOrdersListFeature,
// selectPlazas2,
state => state);
const selectSaleOrderById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectSaleOrderByIdFeature,
// selectPlazas2,
state => state.saleOrder);
const selectLineSalesOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectLineSaleOrder,
// selectPlazas2,
state => state.saleOrder);
const selectPositionSalesOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectPositionSaleOrder,
// selectPlazas2,
state => state.positionSaleOrder);

/***/ }),

/***/ 98480:
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyComponent: () => (/* binding */ PrivacyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7901);


class PrivacyComponent {
  constructor() {
    this.arroba = '@';
  }
  static {
    this.ɵfac = function PrivacyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PrivacyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrivacyComponent,
      selectors: [["app-privacy"]],
      decls: 29,
      vars: 1,
      consts: [[1, "privacy-container"], ["href", "mailto:crisalbaworkspace@gmail.com"], [1, "button-container"], ["routerLink", "/login"]],
      template: function PrivacyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pol\u00EDtica de Privacidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "La aplicaci\u00F3n FTM1970 y el sitio web FTM1970 respetan y protegen la privacidad de los usuarios.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No recopilamos ninguna informaci\u00F3n personal identificable de los usuarios de la aplicaci\u00F3n ni del sitio web. No solicitamos ni almacenamos datos como nombres, direcciones, n\u00FAmeros de tel\u00E9fono u otra informaci\u00F3n personal.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p")(8, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Acceso a Datos del Dispositivo:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "La aplicaci\u00F3n FTM1970 puede requerir acceso a la c\u00E1mara para funciones espec\u00EDficas, como visualizar detalles de pedidos mediante la captura de c\u00F3digos QR. No se accede ni se solicita ning\u00FAn otro dato del dispositivo sin el consentimiento expl\u00EDcito del usuario.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p")(13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Comunicaci\u00F3n con Nosotros:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Si tienes alguna pregunta o inquietud sobre nuestra pol\u00EDtica de privacidad, puedes ponerte en contacto con nosotros utilizando la siguiente informaci\u00F3n:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul")(18, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "N\u00FAmero de contacto: 3324241307");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Correo electr\u00F3nico: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Agradecemos tu confianza en nosotros y queremos asegurarte que tomamos medidas adecuadas para proteger tu privacidad mientras utilizas nuestra aplicaci\u00F3n y nuestro sitio web. Esta pol\u00EDtica de privacidad est\u00E1 sujeta a cambios, y cualquier modificaci\u00F3n se reflejar\u00E1 en esta p\u00E1gina.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2)(27, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Volver");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("crisalbaworkspace", ctx.arroba, "gmail.com");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 68586:
/*!******************************************************!*\
  !*** ./src/app/reports/bills/state/bills.actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillById: () => (/* binding */ BillById),
/* harmony export */   PayById: () => (/* binding */ PayById),
/* harmony export */   deleteBill: () => (/* binding */ deleteBill),
/* harmony export */   deletePaid: () => (/* binding */ deletePaid),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadActionBillById: () => (/* binding */ loadActionBillById),
/* harmony export */   loadActionDeleteBill: () => (/* binding */ loadActionDeleteBill),
/* harmony export */   loadActionDeletePaid: () => (/* binding */ loadActionDeletePaid),
/* harmony export */   loadActionPayById: () => (/* binding */ loadActionPayById),
/* harmony export */   loadActionUpdateBill: () => (/* binding */ loadActionUpdateBill),
/* harmony export */   loadActionUpdatePay: () => (/* binding */ loadActionUpdatePay),
/* harmony export */   loadBillsReport: () => (/* binding */ loadBillsReport),
/* harmony export */   loadCreateBill: () => (/* binding */ loadCreateBill),
/* harmony export */   loadCreatePay: () => (/* binding */ loadCreatePay),
/* harmony export */   loadPaidReport: () => (/* binding */ loadPaidReport),
/* harmony export */   loadPaysReport: () => (/* binding */ loadPaysReport),
/* harmony export */   loadedBillsReport: () => (/* binding */ loadedBillsReport),
/* harmony export */   loadedCreateBill: () => (/* binding */ loadedCreateBill),
/* harmony export */   loadedCreatePay: () => (/* binding */ loadedCreatePay),
/* harmony export */   loadedPaidReport: () => (/* binding */ loadedPaidReport),
/* harmony export */   loadedPaysReport: () => (/* binding */ loadedPaysReport),
/* harmony export */   updateBill: () => (/* binding */ updateBill),
/* harmony export */   updatePay: () => (/* binding */ updatePay)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadBillsReport = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Bills Report] Init BillsReport', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Pro
);
const loadedBillsReport = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Bills Report] Finish BillsReport',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadCreateBill = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Bill] Init AddBill', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Pro
);
const loadedCreateBill = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Bill] Finish AddBill',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionBillById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Bill] Init GetByIdBill',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const BillById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Bill] Finish GetByIdBill',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdateBill = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Bill] Init UpdateBill', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updateBill = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Bill] Finish UpdateBill',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
//PAYS
const loadPaysReport = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Pays Report] Init PaysReport', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Pro
);
const loadedPaysReport = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Pays Report] Finish PaysReport',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadCreatePay = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Pay] Init AddPay', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Pro
);
const loadedCreatePay = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Pay] Finish AddPay',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionPayById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Pay] Init GetByIdPay',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const PayById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetById Pay] Finish GetByIdPay',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionUpdatePay = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Pay] Init UpdatePay', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const updatePay = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Update Pay] Finish UpdatePay',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeleteBill = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Bill] Init DeleteBill', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deleteBill = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Bill] Finish DeleteBill',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
//PAID
const loadPaidReport = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Paid Report] Init PaidReport', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Pro
);
const loadedPaidReport = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Paid Report] Finish PaidReport',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const loadActionDeletePaid = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Paid] Init DeletePaid',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const deletePaid = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Delete Paid] Finish DeletePaid',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 61719:
/*!******************************************************!*\
  !*** ./src/app/reports/bills/state/bills.effects.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillsEffects: () => (/* binding */ BillsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _state_bills_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/bills.actions */ 68586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicio.service */ 66977);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/api.service */ 47018);










class BillsEffects {
  constructor(actions$, servicio, storeDispatch, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.storeDispatch = storeDispatch;
    this.apiService = apiService;
    this.addBill = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add Bill] Init AddBill'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("deliveries", "APIREST", body.createBill).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Add', undefined, undefined, false);
        return {
          type: '[Add Bill] Finish AddBill',
          createBill: response
        };
      }))));
    });
    this.billsReport = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Bills Report] Init BillsReport'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest("deliveries/search" + params.params, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Bills Report] Finish BillsReport',
          billsReport: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.getByIdBill = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById Bill] Init GetByIdBill'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("deliveries/" + body.bill.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById Bill] Finish GetByIdBill',
          bill: response
        };
      }))));
    });
    this.updateBill = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update Bill] Init UpdateBill'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("deliveries/" + body.bill.id, "APIREST", body.bill).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        return {
          type: '[Update Bill] Finish UpdateBill',
          bill: body.bill
        };
      }))));
    });
    this.deleteBill = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete Bill] Init DeleteBill'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.DeleteRequest("deliveries/" + body.bill.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        return {
          type: '[Delete Bill] Finish DeleteBill',
          bill: body.bill
        };
      }))));
    });
    this.addPay = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Add Pay] Init AddPay'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PostRequest("sales-order/positions/production-processes/payments", "APIREST", body.createPay).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Add', undefined, undefined, false);
        return {
          type: '[Add Pay] Finish AddPay',
          createPay: response
        };
      }))));
    });
    this.PaysReport = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Pays Report] Init PaysReport'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest("sales-order/positions/production-processes" + params.params, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Pays Report] Finish PaysReport',
          paysReport: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.getByIdPay = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[GetById Pay] Init GetByIdPay'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.GetRequest("sales-order/positions/production-processes/payments/" + body.pay.id, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[GetById Pay] Finish GetByIdPay',
          pay: response
        };
      }))));
    });
    this.updatePay = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Update Pay] Init UpdatePay'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("deliveries/" + body.pay.id, "APIREST", body.pay).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        return {
          type: '[Update Pay] Finish UpdatePay',
          pay: body.bill
        };
      }))));
    });
    this.PaidReport = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Paid Report] Init PaidReport'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest("sales-order/positions/production-processes/payments" + params.params, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Paid Report] Finish PaidReport',
          paidReport: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.DeletePay = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Delete Paid] Init DeletePaid'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(body => this.servicio.PutRequest("sales-order/positions/production-processes/payments/" + body.paid.id + "/cancel", "APIREST", {
        notes: body.paid.notes
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_state_bills_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Delete Paid] Finish DeletePaid',
          paid: response
        };
      }))));
    });
  }
  static {
    this.ɵfac = function BillsEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BillsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: BillsEffects,
      factory: BillsEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 75428:
/*!*******************************************************!*\
  !*** ./src/app/reports/bills/state/bills.reducers.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   billByIdReducer: () => (/* binding */ billByIdReducer),
/* harmony export */   billsReportReducer: () => (/* binding */ billsReportReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   initialStateBillById: () => (/* binding */ initialStateBillById),
/* harmony export */   initialStatePaid: () => (/* binding */ initialStatePaid),
/* harmony export */   initialStatePay: () => (/* binding */ initialStatePay),
/* harmony export */   initialStatePayById: () => (/* binding */ initialStatePayById),
/* harmony export */   paidsReportReducer: () => (/* binding */ paidsReportReducer),
/* harmony export */   payByIdReducer: () => (/* binding */ payByIdReducer),
/* harmony export */   paysReportReducer: () => (/* binding */ paysReportReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _bills_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bills.actions */ 68586);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  billsReport: [],
  dateUpdate: ''
};
const initialStateBillById = {
  loading: false,
  bill: null
};
const billsReportReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_bills_actions__WEBPACK_IMPORTED_MODULE_0__.loadBillsReport, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_bills_actions__WEBPACK_IMPORTED_MODULE_0__.loadedBillsReport, (state, billsReport) => {
  return {
    ...state,
    loading: false,
    billsReport: billsReport.billsReport,
    dateUpdate: billsReport.dateUpdate
  };
}));
const billByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStateBillById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_bills_actions__WEBPACK_IMPORTED_MODULE_0__.loadActionBillById, (state, bill) => {
  return {
    ...state,
    loading: false,
    bill: bill.bill
  };
}));
const initialStatePay = {
  loading: false,
  paysReport: [],
  dateUpdate: ''
};
const initialStatePayById = {
  loading: false,
  pay: null
};
const paysReportReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStatePay, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_bills_actions__WEBPACK_IMPORTED_MODULE_0__.loadPaysReport, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_bills_actions__WEBPACK_IMPORTED_MODULE_0__.loadedPaysReport, (state, paysReport) => {
  return {
    ...state,
    loading: false,
    paysReport: paysReport.paysReport,
    dateUpdate: paysReport.dateUpdate
  };
}));
const payByIdReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStatePayById, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_bills_actions__WEBPACK_IMPORTED_MODULE_0__.loadActionBillById, (state, bill) => {
  return {
    ...state,
    loading: false,
    bill: bill.bill
  };
}));
const initialStatePaid = {
  loading: false,
  paidReport: [],
  dateUpdate: ''
};
const paidsReportReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialStatePaid, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_bills_actions__WEBPACK_IMPORTED_MODULE_0__.loadPaidReport, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_bills_actions__WEBPACK_IMPORTED_MODULE_0__.loadedPaidReport, (state, paidReport) => {
  return {
    ...state,
    loading: false,
    paidReport: paidReport.paidReport,
    dateUpdate: paidReport.dateUpdate
  };
}));

/***/ }),

/***/ 5311:
/*!****************************************************************************!*\
  !*** ./src/app/reports/sales-orders-report/state/orders-report.actions.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearOrderReport: () => (/* binding */ clearOrderReport),
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadOrdersReport: () => (/* binding */ loadOrdersReport),
/* harmony export */   loadedOrdersReport: () => (/* binding */ loadedOrdersReport)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadOrdersReport = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Orders Report] Init OrdersReport', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Pro
);
const loadedOrdersReport = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Orders Report] Finish OrdersReport',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const clearOrderReport = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Clear Report] Finish ClearReport');
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 42070:
/*!****************************************************************************!*\
  !*** ./src/app/reports/sales-orders-report/state/orders-report.effects.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ordersReportEffects: () => (/* binding */ ordersReportEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _orders_report_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders-report.actions */ 5311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);









class ordersReportEffects {
  constructor(actions$, servicio, apiService) {
    this.actions$ = actions$;
    this.servicio = servicio;
    this.apiService = apiService;
    this.ordersReport = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Orders Report] Init OrdersReport'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.servicio.GetRequest("reports/customer/" + params.ordersReport.customerId + '/sales-orders/status/' + params.ordersReport.salesOrderStatus + '/start-date/' + params.ordersReport.startDate + '/end-date/' + params.ordersReport.endDate, "APIREST").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_orders_report_actions__WEBPACK_IMPORTED_MODULE_1__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[Orders Report] Finish OrdersReport',
          ordersReport: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
  }
  static {
    this.ɵfac = function ordersReportEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ordersReportEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: ordersReportEffects,
      factory: ordersReportEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 58267:
/*!*****************************************************************************!*\
  !*** ./src/app/reports/sales-orders-report/state/orders-report.reducers.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   ordersReportReducer: () => (/* binding */ ordersReportReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _orders_report_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-report.actions */ 5311);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  ordersReport: [],
  dateUpdate: ''
};
const ordersReportReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_orders_report_actions__WEBPACK_IMPORTED_MODULE_0__.loadOrdersReport, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_orders_report_actions__WEBPACK_IMPORTED_MODULE_0__.loadedOrdersReport, (state, ordersReport) => {
  return {
    ...state,
    loading: false,
    ordersReport: ordersReport.ordersReport,
    dateUpdate: ordersReport.dateUpdate
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_orders_report_actions__WEBPACK_IMPORTED_MODULE_0__.clearOrderReport, (state, ordersReport) => {
  return initialState;
}));

/***/ }),

/***/ 66977:
/*!*************************************!*\
  !*** ./src/app/servicio.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicioService: () => (/* binding */ ServicioService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ 97144);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/security/sesion-validate */ 9511);






class ServicioService {
  constructor(http, sessionValidate) {
    this.http = http;
    this.sessionValidate = sessionValidate;
    this.validReasigRoute = false;
    this.validIntercamRoute = false;
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    this.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    this.headers.append('Accept', 'application/json');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers.append('Autorization', 'Bearer ' + this.sessionValidate.token);
  }
  PostRequest(endPoint, Tipo, data) {
    let serverName = "";
    switch (Tipo) {
      case 'APIREST':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
        break;
      case 'IdentityProvider':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IdentityProvider;
        break;
    }
    return this.http.post(serverName + endPoint, data, {
      headers: this.headers
    });
  }
  PutRequest(endPoint, Tipo, data) {
    let serverName = "";
    switch (Tipo) {
      case 'APIREST':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
        break;
      case 'IdentityProvider':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IdentityProvider;
        break;
    }
    return this.http.put(serverName + endPoint, data, {
      headers: this.headers
    });
  }
  DeleteRequest(endPoint, Tipo) {
    let serverName = "";
    switch (Tipo) {
      case 'APIREST':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
        break;
      case 'IdentityProvider':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IdentityProvider;
        break;
    }
    return this.http.delete(serverName + endPoint, {
      headers: this.headers
    });
  }
  GetRequest(api, type) {
    let serverName = "";
    switch (type) {
      case 'APIREST':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
        break;
      case 'IdentityProvider':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IdentityProvider;
        break;
    }
    return this.http.get(serverName + api, {
      headers: this.headers
    });
  }
  get(api) {
    return this.http.get(api, {
      headers: this.headers
    });
  }
  GetPDFRequest(endPoint, Tipo) {
    let serverName = "";
    switch (Tipo) {
      case 'APIREST':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
        break;
      case 'IdentityProvider':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IdentityProvider;
        break;
    }
    return this.http.get(serverName + endPoint, {
      headers: this.headers,
      responseType: 'blob'
    });
  }
  PostRequestImage(endPoint, Tipo, data, typeImage) {
    // const headers = new HttpHeaders(
    //   {
    //     'Content-Type': 'image/jpg',
    //     'FileType': 'Image'
    //   }
    // );
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    // headers.append('Accept', 'application/json');
    // headers.set('Content-Type', 'image/jpg');
    // headers.set();
    let obs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(true);
    if (!data.nameImage && typeImage != 'position' || typeImage == 'position' && !data) {
      return obs;
    }
    let serverName = "";
    switch (Tipo) {
      case 'APIREST':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
        break;
      case 'IdentityProvider':
        serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IdentityProvider;
        break;
    }
    switch (typeImage) {
      case 'customer':
        return this.http.post(serverName + endPoint, data.image, {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'image/jpeg',
            'FileType': 'quinto'
          })
        });
      case 'company':
        return this.http.post(serverName + endPoint, data.image, {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'image/jpeg',
            'FileType': 'logo'
          })
        });
      case 'position':
        let parts = endPoint.split("/");
        let relevantParts = parts.filter(part => part !== "upload" && part !== "document" && part !== "sales-order");
        let transformedUrl = relevantParts.join("");
        return this.http.post(serverName + endPoint, data ? data : data.image, {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'image/jpeg',
            'FileType': 'Image',
            'FileName': new Date().getTime() + '.jpeg'
          })
        });
      default:
        return this.http.post(serverName + endPoint, data.image, {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'image/jpeg',
            'FileType': 'Image'
          })
        });
    }
  }
  PostRequestCreatePDF(data) {
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.PDFService + 'create-pdf', data, {
      headers: this.headers
    });
  }
  static {
    this.ɵfac = function ServicioService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServicioService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_security_sesion_validate__WEBPACK_IMPORTED_MODULE_1__.SessionValidate));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ServicioService,
      factory: ServicioService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 54544:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/component/documents-modal/documents-modal.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentsModalComponent: () => (/* binding */ DocumentsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);

class DocumentsModalComponent {
  static {
    this.ɵfac = function DocumentsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentsModalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentsModalComponent,
      selectors: [["app-documents-modal"]],
      decls: 2,
      vars: 0,
      template: function DocumentsModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "documents-modal works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 42476:
/*!***********************************************************!*\
  !*** ./src/app/shared/component/popup/popup.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupComponent: () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45383);
/* harmony import */ var _data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/language */ 59217);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var src_app_operations_sales_order_state_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/operations/sales-order/state/sale-order.actions */ 53014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language.service */ 29936);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicio.service */ 66977);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/extended */ 16038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60177);






















function PopupComponent_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_div_3_div_4_Template_span_click_1_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r2.changeStatus = item_r2;
      ctx_r2.showStatusList = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.showChangeStatus = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "mb-10 labelChip label" + item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.estatusOrder(item_r2), "");
  }
}
function PopupComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PopupComponent_div_3_div_4_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.SelectNewStatus : ctx_r2.en.SelectNewStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.data.statusList);
  }
}
function PopupComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 10)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11)(5, "div", 12)(6, "div", 13)(7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_div_4_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r2.showChangeStatus = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.dialogRef.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 15)(10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_div_4_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.changeStatusLine(ctx_r2.changeStatus));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r2.lan == "es" ? ctx_r2.es.ChangeStatus : ctx_r2.en.ChangeStatus, " ", ctx_r2.estatusOrder(ctx_r2.changeStatus), "? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Cancel : ctx_r2.en.Cancel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Accept : ctx_r2.en.Accept, " ");
  }
}
function PopupComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_div_5_div_4_Template_span_click_1_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r2.changeProcess = item_r6.name;
      ctx_r2.showProcessList = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.showChangeProcess = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "labelChipLastProductionProccess2 labelLastProductionProccess mb-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.name, "");
  }
}
function PopupComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PopupComponent_div_5_div_4_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r2.lan == "es" ? ctx_r2.es.SelectProcess : ctx_r2.en.SelectProcess, " ", ctx_r2.data.type == "in" ? ctx_r2.lan == "es" ? ctx_r2.es.ToIn : ctx_r2.en.ToIn : ctx_r2.lan == "es" ? ctx_r2.es.ToOut : ctx_r2.en.ToOut, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.data.processList);
  }
}
function PopupComponent_div_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.data.type == "in" ? "Entrada" : "Salida", " ");
  }
}
function PopupComponent_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.data.type == "in" ? "In" : "Out", " ");
  }
}
function PopupComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 10)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PopupComponent_div_6_span_4_Template, 2, 1, "span", 4)(5, PopupComponent_div_6_span_5_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 19)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "textarea", 20, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_div_6_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r2.showChangeProcess = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.dialogRef.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15)(18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_div_6_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.changeProcessInOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.ChangeProcess : ctx_r2.en.ChangeProcess, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.lan == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.lan == "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.changeProcess, "? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Notes : ctx_r2.en.Notes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r2.notesProccess)("maxlength", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Cancel : ctx_r2.en.Cancel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Accept : ctx_r2.en.Accept, " ");
  }
}
function PopupComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_div_7_div_4_Template_span_click_1_listener() {
      const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r2.releaseProcessValue = item_r9;
      ctx_r2.showConfirmReleaseProcess = true;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.showReleaseProcess = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "productionProcesses");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r9.productionProcessName, "");
  }
}
function PopupComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PopupComponent_div_7_div_4_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.ReleaseProcess : ctx_r2.en.ReleaseProcess, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.data.processList);
  }
}
function PopupComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 10)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11)(5, "div", 12)(6, "div", 13)(7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_div_8_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r2.showConfirmReleaseProcess = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.dialogRef.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 15)(10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_div_8_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.releaseProcess(ctx_r2.releaseProcessValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r2.lan == "es" ? "\u00BF" + ctx_r2.es.ReleaseProcess : ctx_r2.en.ReleaseProcess, " ", ctx_r2.releaseProcessValue.productionProcessName, "? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Cancel : ctx_r2.en.Cancel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.lan == "es" ? ctx_r2.es.Accept : ctx_r2.en.Accept, " ");
  }
}
class PopupComponent {
  constructor(snackBar, languageService, storeDispatch, actions$, dialogRef, services, data) {
    this.snackBar = snackBar;
    this.languageService = languageService;
    this.storeDispatch = storeDispatch;
    this.actions$ = actions$;
    this.dialogRef = dialogRef;
    this.services = services;
    this.data = data;
    this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faClose;
    this.es = _data_language__WEBPACK_IMPORTED_MODULE_0__.es;
    this.en = _data_language__WEBPACK_IMPORTED_MODULE_0__.en;
    this.lan = "";
    this.showStatusList = false;
    this.showChangeStatus = false;
    this.showConfirmReleaseProcess = false;
    this.showProcessList = false;
    this.showChangeProcess = false;
    this.showReleaseProcess = false;
    this.changeStatus = "";
    this.changeProcess = "";
    this.updatesStatusLineSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.updatesProcessLineSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.notesProccess = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("");
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
    });
    console.log(data);
  }
  ngOnInit() {
    switch (this.data.op) {
      case 'changeStatusLine':
        this.showStatusList = true;
        break;
      case 'changeProccessLine':
        console.log(this.data.processList);
        this.showProcessList = true;
        break;
      case 'releaseProcess':
        console.log(this.data.processList);
        this.showReleaseProcess = true;
        break;
    }
  }
  ngOnDestroy() {
    this.languageServiceSubs.unsubscribe();
    this.updatesStatusLineSubscription.unsubscribe();
    this.updatesProcessLineSubscription.unsubscribe();
  }
  estatusOrder(value) {
    let status = 'Undefined';
    if (this.lan == "es") {
      status = 'Sin definir';
    }
    switch (value) {
      case 'New':
        status = 'Nuevo';
        if (this.lan == "en") {
          status = 'New';
        }
        break;
      case 'Approved':
        status = 'Aprobada';
        if (this.lan == "en") {
          status = 'Approved';
        }
        break;
      case 'Canceled':
        status = 'Cancelada';
        if (this.lan == "en") {
          status = 'Canceled';
        }
        break;
      case 'PartiallyApproved':
        status = 'Parcialmente aprobada';
        if (this.lan == "en") {
          status = 'PartiallyApproved';
        }
        break;
      case 'InProcess':
        status = 'En proceso';
        if (this.lan == "en") {
          status = 'InProcess';
        }
        break;
      case 'Done':
        status = 'Terminada';
        if (this.lan == "en") {
          status = 'Done';
        }
        break;
      case 'Invoiced':
        status = 'Facturada';
        if (this.lan == "en") {
          status = 'Invoiced';
        }
        break;
      default:
        break;
    }
    return status;
  }
  changeStatusLine(newStatus) {
    if (newStatus == "Undefine") {
      return;
    }
    let lineSaleOrder = {
      id: this.data.id,
      position: this.data.position,
      status: newStatus
    };
    this.storeDispatch.dispatch((0,src_app_operations_sales_order_state_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionUpdateStatusLineSaleOrder)({
      loading: true,
      lineSaleOrder: lineSaleOrder
    }));
    this.updatesStatusLineSubscription = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)('[Update StatusLineSaleOrder] Finish UpdateStatusLineSaleOrder')).subscribe(result => {
      console.log('Updta status line production ---> ', result);
      this.updatesStatusLineSubscription.unsubscribe();
      this.dialogRef.close(true);
    });
  }
  changeProcessInOut() {
    let productionProcessId = this.data.processList.find(p => p.name === this.changeProcess);
    let findComment = this.data.history.find(x => x.productionProcessId == productionProcessId.id);
    let processLineSaleOrder = {
      id: this.data.id,
      position: this.data.position,
      productionProcessId: productionProcessId.id,
      type: this.data.type,
      notes: this.notesProccess.value
    };
    this.storeDispatch.dispatch((0,src_app_operations_sales_order_state_sale_order_actions__WEBPACK_IMPORTED_MODULE_1__.loadActionUpdateProcessLineSaleOrder)({
      loading: true,
      processLineSaleOrder: processLineSaleOrder
    }));
    console.log('updateListProcess');
    this.updatesProcessLineSubscription = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)('[Update ProcessLineSaleOrder] Finish UpdateProcessLineSaleOrder')).subscribe(result => {
      this.updatesProcessLineSubscription.unsubscribe();
      let data = {
        type: this.data.type,
        process: productionProcessId.name
      };
      this.dialogRef.close(data);
    });
  }
  releaseProcess(process) {
    console.log(process);
    let opc;
    if (process && process.inputDate && !process.outputDate) {
      opc = 1;
    } else if (process && process.inputDate && process.outputDate) {
      opc = 2;
    }
    switch (opc) {
      case 1:
        this.services.DeleteRequest(`sales-order/${this.data.id}/position/${this.data.position}/production-process/${process.productionProcessId}/movement-type/in`, 'APIREST').subscribe(response => {
          let message = _data_language__WEBPACK_IMPORTED_MODULE_0__.es.ReleasedProcessCorrectly;
          if (this.lan == 'en') {
            message = _data_language__WEBPACK_IMPORTED_MODULE_0__.en.ReleasedProcessCorrectly;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-confirmation",
            duration: 3000
          });
          this.dialogRef.close(true);
        }, error => {
          let message = _data_language__WEBPACK_IMPORTED_MODULE_0__.es.ErrorServer;
          if (this.lan == 'en') {
            message = _data_language__WEBPACK_IMPORTED_MODULE_0__.en.ErrorServer;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        });
        break;
      case 2:
        this.services.DeleteRequest(`sales-order/${this.data.id}/position/${this.data.position}/production-process/${process.productionProcessId}/movement-type/out`, 'APIREST').subscribe(response => {
          this.services.DeleteRequest(`sales-order/${this.data.id}/position/${this.data.position}/production-process/${process.productionProcessId}/movement-type/in`, 'APIREST').subscribe(response => {
            let message = _data_language__WEBPACK_IMPORTED_MODULE_0__.es.ReleasedProcessCorrectly;
            if (this.lan == 'en') {
              message = _data_language__WEBPACK_IMPORTED_MODULE_0__.en.ReleasedProcessCorrectly;
            }
            this.snackBar.open(message, '', {
              panelClass: "mensaje-confirmation",
              duration: 3000
            });
            this.dialogRef.close(true);
          }, error => {
            let message = _data_language__WEBPACK_IMPORTED_MODULE_0__.es.ErrorServer;
            if (this.lan == 'en') {
              message = _data_language__WEBPACK_IMPORTED_MODULE_0__.en.ErrorServer;
            }
            this.snackBar.open(message, '', {
              panelClass: "mensaje-error",
              duration: 3000
            });
            return;
          });
        }, error => {
          let message = _data_language__WEBPACK_IMPORTED_MODULE_0__.es.ErrorServer;
          if (this.lan == 'en') {
            message = _data_language__WEBPACK_IMPORTED_MODULE_0__.en.ErrorServer;
          }
          this.snackBar.open(message, '', {
            panelClass: "mensaje-error",
            duration: 3000
          });
          return;
        });
        break;
      default:
        break;
    }
  }
  static {
    this.ɵfac = function PopupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_servicio_service__WEBPACK_IMPORTED_MODULE_3__.ServicioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PopupComponent,
      selectors: [["app-popup"]],
      decls: 9,
      vars: 8,
      consts: [["input", ""], [1, "m-card", "p-20", "overflowA", 2, "max-height", "80vh"], ["fxLayout", "column", "fxLayoutAlign", "end end", 1, "w-100", "mb-10"], [1, "color-boton", "boton", "closeIcon", "pointer", 3, "click", "icon", "matTooltip"], [4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center start", 1, "w-100", "mb-20"], [1, "tx-c"], ["fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "pointer", "tx-c", 3, "click", "ngClass"], ["fxLayout", "column", "fxLayoutAlign", "center start", 1, "w-100"], [1, "p-10"], ["fxLayout", "row", "fxLayoutAlign", "center start", 1, "mt-20", "mr-a"], [1, "mr-10", "mb-10"], ["color", "warn", 1, "btn-l-warning", 3, "click"], [1, "mb-10"], ["color", "primary", 1, "btn-l-100b", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "w-100", "mb-20"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "pointer", "tx-c", 3, "click", "ngClass"], [1, "w-100", "mt-10"], ["matInput", "", 3, "formControl", "maxlength"]],
      template: function PopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "fa-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopupComponent_Template_fa_icon_click_2_listener() {
            return ctx.dialogRef.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PopupComponent_div_3_Template, 5, 2, "div", 4)(4, PopupComponent_div_4_Template, 12, 4, "div", 4)(5, PopupComponent_div_5_Template, 5, 3, "div", 4)(6, PopupComponent_div_6_Template, 20, 9, "div", 4)(7, PopupComponent_div_7_Template, 5, 2, "div", 4)(8, PopupComponent_div_8_Template, 12, 4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx.lan == "es" ? ctx.es.Close : ctx.en.Close);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faClose);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showStatusList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showChangeStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showProcessList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showChangeProcess);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showReleaseProcess);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showConfirmReleaseProcess);
        }
      },
      dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf],
      styles: ["[_nghost-%COMP%]     .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  height: auto;\n}\n\n.mat-column-orderStatus[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-product[_ngcontent-%COMP%], \n.mat-column-priority[_ngcontent-%COMP%], \n.mat-column-deliveryDate[_ngcontent-%COMP%], \n.mat-column-shipmentDate[_ngcontent-%COMP%], \n.mat-column-shippingDate[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-process[_ngcontent-%COMP%], \n.mat-column-order[_ngcontent-%COMP%], \n.mat-column-PO[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToPay[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-productionProcessName[_ngcontent-%COMP%], \n.mat-column-inputNotes[_ngcontent-%COMP%], \n.mat-column-folio[_ngcontent-%COMP%], \n.mat-column-creationDate[_ngcontent-%COMP%], \n.mat-column-idFtm[_ngcontent-%COMP%], \n.mat-column-invoiceNumber[_ngcontent-%COMP%], \n.mat-column-trackingNumber[_ngcontent-%COMP%], \n.mat-column-subTotal[_ngcontent-%COMP%], \n.mat-column-taxPercentage[_ngcontent-%COMP%], \n.mat-column-taxAmount[_ngcontent-%COMP%], \n.mat-column-total[_ngcontent-%COMP%], \n.mat-column-totalPieces[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-customer[_ngcontent-%COMP%], \n.mat-column-shippingPrice[_ngcontent-%COMP%], \n.mat-column-remainingQuantityToDeliver[_ngcontent-%COMP%], \n.mat-column-quantityToBill[_ngcontent-%COMP%], \n.mat-column-salesOrderStatusName[_ngcontent-%COMP%], \n.mat-column-quantity[_ngcontent-%COMP%], \n.mat-column-itemKey[_ngcontent-%COMP%], \n.mat-column-itemName[_ngcontent-%COMP%], \n.mat-column-position[_ngcontent-%COMP%], \n.mat-column-expiredDays[_ngcontent-%COMP%], \n.mat-column-salesOrderId[_ngcontent-%COMP%], \n.mat-column-customerSalesOrderId[_ngcontent-%COMP%], \n.mat-column-po[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-select[_ngcontent-%COMP%], \n.mat-column-consecutive[_ngcontent-%COMP%], \n.mat-column-ordertatus[_ngcontent-%COMP%], \n.mat-column-customerName[_ngcontent-%COMP%], \n.mat-column-name[_ngcontent-%COMP%], \n.mat-column-material[_ngcontent-%COMP%], \n.mat-column-client[_ngcontent-%COMP%], \n.mat-column-descriptionSpanish[_ngcontent-%COMP%], \n.mat-column-descriptionEnglish[_ngcontent-%COMP%], \n.mat-column-image[_ngcontent-%COMP%], \n.mat-column-status[_ngcontent-%COMP%], \n.mat-column-price[_ngcontent-%COMP%], \n.mat-column-description[_ngcontent-%COMP%], \n.mat-column-isAntique[_ngcontent-%COMP%], \n.mat-column-lastUpdateDate[_ngcontent-%COMP%], \n.mat-column-creationUser[_ngcontent-%COMP%], \n.mat-column-lastUpdateUser[_ngcontent-%COMP%], \n.mat-column-countryCode[_ngcontent-%COMP%], \n.mat-column-extension[_ngcontent-%COMP%], \n.mat-column-phoneNumber[_ngcontent-%COMP%], \n.mat-column-country[_ngcontent-%COMP%], \n.mat-column-state[_ngcontent-%COMP%], \n.mat-column-city[_ngcontent-%COMP%], \n.mat-column-district[_ngcontent-%COMP%], \n.mat-column-zipCode[_ngcontent-%COMP%], \n.mat-column-addressLine1[_ngcontent-%COMP%], \n.mat-column-addressLine2[_ngcontent-%COMP%], \n.mat-column-notes[_ngcontent-%COMP%], \n.mat-column-addressType[_ngcontent-%COMP%], \n.mat-column-key[_ngcontent-%COMP%], \n.mat-column-logo[_ngcontent-%COMP%], \n.mat-column-email[_ngcontent-%COMP%], \n.mat-column-firstName[_ngcontent-%COMP%], \n.mat-column-lastName[_ngcontent-%COMP%], \n.mat-column-profile[_ngcontent-%COMP%], \n.mat-column-active[_ngcontent-%COMP%], \n.mat-column-lock[_ngcontent-%COMP%], \n.mat-column-fullName[_ngcontent-%COMP%], \n.mat-column-actions[_ngcontent-%COMP%], \n.mat-column-code[_ngcontent-%COMP%], \n.mat-column-moduleName[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 3% !important;\n  text-align: center !important;\n  height: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-height: 80vh;\n  overflow: auto;\n}\n\n.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #4a4a4a;\n  margin-bottom: 1rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n\n.privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a4a4a;\n  margin-bottom: 0.5rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.8rem 1.5rem;\n  background-color: #243b55;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.privacy-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #20344b;\n}"]
    });
  }
}

/***/ }),

/***/ 68628:
/*!***************************************************************!*\
  !*** ./src/app/shared/component/spinner/spinner.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerComponent: () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 52920);


class SpinnerComponent {
  static {
    this.ɵfac = function SpinnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SpinnerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["spinner"]],
      decls: 2,
      vars: 0,
      consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "overlay"], [1, "lds-hourglass"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective],
      styles: [".lds-hourglass[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-hourglass[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  border-radius: 50%;\n  width: 0;\n  height: 0;\n  margin: 8px;\n  box-sizing: border-box;\n  border: 32px solid rgb(253, 253, 42);\n  border-color: rgb(253, 253, 42) transparent rgb(169, 169, 31) transparent;\n  animation: _ngcontent-%COMP%_lds-hourglass 1.2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_lds-hourglass {\n  0% {\n    transform: rotate(0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    transform: rotate(900deg);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(74, 74, 74, 0.8);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-self: center;\n}"]
    });
  }
}

/***/ }),

/***/ 83579:
/*!*************************************!*\
  !*** ./src/app/shared/data/data.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User),
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   material: () => (/* binding */ material),
/* harmony export */   product: () => (/* binding */ product),
/* harmony export */   response: () => (/* binding */ response),
/* harmony export */   role: () => (/* binding */ role),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
class response {}
class material {}
class User {}
class role {}
class product {}
class component {}
const routes = [
//#region Administration
{
  route: '/dashboard',
  permission: 'Dashboard'
}, {
  route: '/administration/users',
  permission: 'ListUsers'
}, {
  route: '/administration/permissions',
  permission: 'ListPermissions'
}, {
  route: '/administration/roles',
  permission: 'ListRoles'
},
//#endregion
//#region Catalogs
{
  route: '/catalogs/companies',
  permission: 'ListCompanies'
}, {
  route: '/catalogs/materials',
  permission: 'ListMaterials'
}, {
  route: '/catalogs/customers',
  permission: 'ListCustomers'
}, {
  route: '/catalogs/products',
  permission: 'ListItems'
}, {
  route: '/catalogs/components',
  permission: 'ListComponents'
}, {
  route: '/catalogs/production-process',
  permission: 'ListProductionProcesses'
},
//#endregion
//#region Operations
{
  route: '/operations/sales-orders',
  permission: 'ListSalesOrders'
}, {
  route: '/operations/orders',
  permission: 'ListOrders'
},
//#endregion
//#region reports
{
  route: '/reports/sales-orders',
  permission: 'ReportListSalesOrders'
}, {
  route: '/reports/bills',
  permission: 'ReportListBills'
}, {
  route: '/reports/pay-orders',
  permission: 'ReportPayOrders'
}, {
  route: '/reports/paid-orders',
  permission: 'ReportPaidOrders'
}
//#endregion
];
// export const PermissionsApp = [
//     //#region Catalogs
//     { id: 1, permission: 'ftm.handicrafts:ListCompanies::', module: 1, description: 'Listado de empresas', name: 'Listado de empresas', },
//     { id: 2, permission: 'ftm.handicrafts:GetCompanyById::', module: 1, description: 'Ver empresa', name: 'Ver empresa', },
//     { id: 3, permission: 'ftm.handicrafts:CreateCompany::', module: 1, description: 'Crear empresa', name: 'Crear empresa', },
//     { id: 4, permission: 'ftm.handicrafts:UpdateCompany::', module: 1, description: 'Actualizar empresa', name: 'Actualizar empresa', },
//     { id: 5, permission: 'ftm.handicrafts:DeleteCompany::', module: 1, description: 'Eliminar empresa', name: 'Eliminar empresa', },
//     { id: 6, permission: 'ftm.handicrafts:UploadCompanyDocument::', module: 1, description: 'Agregar documentos a la empresa', name: 'Agregar documentos a la empresa', },
//     { id: 7, permission: 'ftm.handicrafts:RemoveCompanyDocument::', module: 1, description: 'Eliminar documentos de la empresa', name: 'Eliminar documentos de la empresa', },
//     { id: 8, permission: 'ftm.handicrafts:ListCustomers::', module: 2, description: 'Listado de clientes', name: 'Listado de clientes', },
//     { id: 9, permission: 'ftm.handicrafts:GetCustomerById::', module: 2, description: 'Ver cliente', name: 'Ver cliente', },
//     { id: 10, permission: 'ftm.handicrafts:CreateCustomer::', module: 2, description: 'Crear cliente', name: 'Crear cliente', },
//     { id: 11, permission: 'ftm.handicrafts:UpdateCustomer::', module: 2, description: 'Actualizar cliente', name: 'Actualizar cliente', },
//     { id: 12, permission: 'ftm.handicrafts:DeleteCustomer::', module: 2, description: 'Eliminar cliente', name: 'Eliminar cliente', },
//     { id: 13, permission: 'ftm.handicrafts:UploadCustomerDocument::', module: 2, description: 'Agregar documentos a cliente', name: 'Agregar documentos a cliente', },
//     { id: 14, permission: 'ftm.handicrafts:RemoveCustomerDocument::', module: 2, description: 'Eliminar documentos del cliente', name: 'Eliminar documentos del cliente', },
//     { id: 15, permission: 'ftm.handicrafts:ListItems::', module: 3, description: 'Listado de artículos', name: 'Listado de artículos', },
//     { id: 16, permission: 'ftm.handicrafts:GetItemById::', module: 3, description: 'Ver artículo', name: 'Ver artículo', },
//     { id: 17, permission: 'ftm.handicrafts:CreateItem::', module: 3, description: 'Crear artículo', name: 'Crear artículo', },
//     { id: 18, permission: 'ftm.handicrafts:UpdateItem::', module: 3, description: 'Actualizar artículo', name: 'Actualizar artículo', },
//     { id: 19, permission: 'ftm.handicrafts:DeleteItem::', module: 3, description: 'Eliminar artículo', name: 'Eliminar artículo', },
//     { id: 20, permission: 'ftm.handicrafts:UploadItemDocument::', module: 3, description: 'Agregar documentos a artículo', name: 'Agregar documentos a artículo', },
//     { id: 21, permission: 'ftm.handicrafts:RemoveItemDocument::', module: 3, description: 'Eliminar documentos del artículo', name: 'Eliminar documentos del artículo', },
//     { id: 22, permission: 'ftm.handicrafts:ListComponents::', module: 4, description: 'Listado de componentes', name: 'Listado de componentes', },
//     { id: 23, permission: 'ftm.handicrafts:GetComponentById::', module: 4, description: 'Ver componente', name: 'Ver componente', },
//     { id: 24, permission: 'ftm.handicrafts:CreateComponent::', module: 4, description: 'Crear componente', name: 'Crear componente', },
//     { id: 25, permission: 'ftm.handicrafts:UpdateComponent::', module: 4, description: 'Actualizar componente', name: 'Actualizar componente', },
//     { id: 26, permission: 'ftm.handicrafts:DeleteComponent::', module: 4, description: 'Eliminar componente', name: 'Eliminar componente', },
//     { id: 27, permission: 'ftm.handicrafts:ListMaterials::', module: 5, description: 'Listado de materiales', name: 'Listado de materiales', },
//     { id: 28, permission: 'ftm.handicrafts:GetMaterialById::', module: 5, description: 'Ver material', name: 'Ver material', },
//     { id: 29, permission: 'ftm.handicrafts:CreateMaterial::', module: 5, description: 'Crear material', name: 'Crear material', },
//     { id: 30, permission: 'ftm.handicrafts:UpdateMaterial::', module: 5, description: 'Actualizar material', name: 'Actualizar material', },
//     { id: 31, permission: 'ftm.handicrafts:DeleteMaterial::', module: 5, description: 'Eliminar material', name: 'Eliminar material', },
//     { id: 32, permission: 'ftm.handicrafts:ListProductionProcesses::', module: 6, description: 'Listado de procesos de producción', name: 'Listado de procesos de producción', },
//     { id: 33, permission: 'ftm.handicrafts:GetProductionProcessById::', module: 6, description: 'Ver proceso de producción', name: 'Ver proceso de producción', },
//     { id: 34, permission: 'ftm.handicrafts:CreateProductionProcess::', module: 6, description: 'Crear proceso de producción', name: 'Crear proceso de producción', },
//     { id: 35, permission: 'ftm.handicrafts:UpdateProductionProcess::', module: 6, description: 'Actualizar proceso de producción', name: 'Actualizar proceso de producción', },
//     { id: 36, permission: 'ftm.handicrafts:DeleteProductionProcess::', module: 6, description: 'Eliminar proceso de producción', name: 'Eliminar proceso de producción', },
//     //#endregion
//     //#region Operations
//     { id: 37, permission: 'ftm.handicrafts:ListSalesOrders::', module: 7, description: 'Listado de pedidos', name: 'Listado de pedidos', },
//     { id: 38, permission: 'ftm.handicrafts:GetSalesOrderById::', module: 7, description: 'Ver pedido', name: 'Ver pedido', },
//     { id: 39, permission: 'ftm.handicrafts:GetSalesOrderPosition::', module: 7, description: 'Ver línea de pedido', name: 'Ver línea de pedido', },
//     { id: 40, permission: 'ftm.handicrafts:CreateSalesOrder::', module: 7, description: 'Crear pedido', name: 'Crear pedido', },
//     { id: 41, permission: 'ftm.handicrafts:UpdateSalesOrder::', module: 7, description: 'Actualizar pedido', name: 'Actualizar pedido', },
//     { id: 42, permission: 'ftm.handicrafts:UpdateSalesOrderPosition::', module: 7, description: 'Actualizar línea de pedido', name: 'Actualizar línea de pedido', },
//     { id: 43, permission: 'ftm.handicrafts:UpdateSalesOrderPositionStatus::', module: 7, description: 'Actualizar estatus de línea de pedido', name: 'Actualizar estatus de línea de pedido', },
//     { id: 44, permission: 'ftm.handicrafts:SalesOrderPositionProcessIn::', module: 7, description: 'Entrada de proceso', name: 'Entrada de proceso', },
//     { id: 45, permission: 'ftm.handicrafts:SalesOrderPositionProcessOut::', module: 7, description: 'Fin de proceso', name: 'Fin de proceso', },
//     { id: 46, permission: 'ftm.handicrafts:DeleteSalesOrder::', module: 7, description: 'Eliminar pedido', name: 'Eliminar pedido', },
//     // //#endregion
//     //#region Reports
//     { id: 47, permission: 'ftm.handicrafts:ReportListSalesOrders::', module: 8, description: 'Reporte - Listado de pedidos', name: 'Reporte - Listado de pedidos', },
//     //#endregion
//     //#region Administration
//     { id: 48, permission: "ftm.handicrafts:ListUsers::", module: 9, description: "Listado de usuarios", name: "Listado de usuarios" },
//     { id: 49, permission: "ftm.handicrafts:GetUserById::", module: 9, description: "Ver usuario", name: "Ver usuario" },
//     { id: 50, permission: "ftm.handicrafts:CreateUser::", module: 9, description: "Crear usuario", name: "Crear usuario" },
//     { id: 51, permission: "ftm.handicrafts:UpdateUser::", module: 9, description: "Actualizar usuario", name: "Actualizar usuario" },
//     { id: 52, permission: "ftm.handicrafts:ListRoles::", module: 9, description: "Listado de roles", name: "Listado de roles" },
//     { id: 53, permission: "ftm.handicrafts:GetRoleById::", module: 9, description: "Ver rol", name: "Ver rol" },
//     { id: 54, permission: "ftm.handicrafts:CreateRole::", module: 9, description: "Crear rol", name: "Crear rol" },
//     { id: 55, permission: "ftm.handicrafts:UpdateRole::", module: 9, description: "Actualizar rol", name: "Actualizar rol" },
//     { id: 56, permission: "ftm.handicrafts:ListPermissions::", module: 9, description: "Listado de permisos", name: "Listado de permisos" }
//     //#endregion
// ];

/***/ }),

/***/ 59217:
/*!*****************************************!*\
  !*** ./src/app/shared/data/language.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   en: () => (/* binding */ en),
/* harmony export */   es: () => (/* binding */ es)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97144);

const version = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.versionSystem;
const es = {
  //#region agregados
  User: "Usuario",
  EditSucces: 'Registro modificado correctamente',
  DeleteSucces: 'No se pudo eliminar el registro',
  AddSucces: 'Registro guardado correctamente',
  Filter: 'Filtrar',
  Add: 'Agregar',
  Delete: 'Eliminar',
  Edit: 'Editar',
  Reload: 'Recargar tabla',
  Name: "Nombre",
  Description: "Descripción",
  Antique: "Antique",
  Status: "Estatus",
  Actions: "Acciones",
  Materials: "Materiales",
  EditMaterial: 'Editar material',
  AddMaterial: 'Agregar material',
  DeleteMaterial: 'Eliminar material',
  EditUser: 'Editar usuario',
  AddUser: 'Agregar usuario',
  DeleteUser: 'Eliminar usuario',
  Active: 'Activo',
  Inactive: 'Inactivo',
  Close: 'Cerrar',
  Save: 'Guardar',
  Cancel: 'Cancelar',
  Email: 'Correo',
  FirstName: 'Nombre',
  LastName: 'Apellido paterno',
  SecondLastName: 'Apellido materno',
  FullName: 'Nombre completo',
  Profile: 'Perfil',
  Lock: 'Bloqueado',
  Permissions: 'Permisos',
  Password: 'Contraseña',
  ConfirmPassword: 'Confirmar contraseña',
  Yes: 'Si',
  No: 'No',
  Module: 'Modulo',
  Administration: 'Administración',
  OpenMenu: 'Abrir menu',
  CloseMenu: 'Cerrar menu',
  GoHome: 'Ir a home',
  Version: 'Versión ' + version,
  ChangePassword: 'Cambiar contraseña',
  ChangeLan: 'Cambiar a ingles',
  Logout: 'Cerrar sesión',
  Bills: 'Facturas',
  Catalogs: 'Catálogos',
  Users: 'Usuarios',
  Profiles: 'Perfiles',
  EditProfile: 'Editar perfil',
  AddProfile: 'Agregar perfil',
  DeleteProfile: 'Eliminar perfil',
  Menus: 'Menus',
  EditPermission: 'Editar permiso',
  AddPermission: 'Agregar permiso',
  DeletePermission: 'Eliminar permiso',
  Permission: 'Permiso',
  PermissionsList: 'Lista de permisos',
  Code: 'Código',
  Tax: 'Impuesto',
  esDescription: 'Descripción en español',
  enDescription: 'Descripción en ingles',
  SellPrice: 'Precio de venta',
  Image: 'Imagen',
  SATKey: 'Código del sat',
  Line: 'Linea',
  EditProduct: 'Editar producto',
  AddProduct: 'Agregar producto',
  DeleteProduct: 'Eliminar producto',
  Products: 'Productos',
  ViewImg: 'Ver imagen',
  Client: 'Cliente',
  Material: "Material",
  Components: 'Componentes',
  EditComponent: 'Editar componente',
  AddComponent: 'Agregar componente',
  DeleteComponent: 'Eliminar componente',
  Component: 'Componente',
  ChangeImg: 'Cambiar imagen',
  Logo: 'Logo',
  Key: 'Clave',
  Companies: 'Empresas',
  AddCompany: 'Agregar empresa',
  EditCompany: 'Editar empresa',
  DeleteCompany: 'Eliminar empresa',
  Company: 'Empresa',
  Notes: 'Comentarios',
  AddEmail: 'Agregar correo',
  DeleteEmail: 'Eliminar correo',
  EditEmail: 'Editar correo',
  CountryCode: 'Código de país',
  Extension: 'Extensión',
  PhoneNumber: 'Número de teléfono',
  PhoneNumbers: 'Números de teléfono',
  Emails: 'Correos',
  NewEmail: 'Nuevo correo',
  NewNumber: 'Nuevo número',
  DeletePhone: 'Eliminar teléfono',
  EditPhone: 'Editar teléfono',
  GeneralInformation: 'Información general',
  EnterValidNumber: 'Ingrese un número válido',
  EnterValidEmail: 'Ingrese un correo válido',
  MailAlreadyExists: 'El correo ya existe',
  EnterCountryCodeValid: 'Ingrese un código de país valido (números)',
  EnterExtensionValid: 'Ingrese una extension valida (números)',
  PhoneAlreadyExists: 'El número de teléfono ya existe',
  Addresses: 'Direcciones',
  Country: 'País',
  State: 'Estado',
  City: 'Ciudad',
  District: 'Colonia',
  ZipCode: 'Código postal',
  AddressLine1: 'Dirección Línea 1',
  AddressLine2: 'Dirección Línea 2',
  AddNewAddress: 'Agregar nueva dirección',
  ListAddressesAdded: 'Lista de direcciones agregadas',
  AddNewPhohe: 'Agregar nuevo teléfono',
  ListPhonesAdded: 'Lista de teléfonos agregados',
  AddNewEmail: 'Añadir nuevo correo electrónico',
  ListEmailsAdded: 'Lista de correos electrónicos agregados',
  AddressAlreadyExists: 'La dirección ya existe',
  MandatoryFieldsFillingIn: 'Hay campos obligatorios sin rellenar',
  DeleteAddress: 'Eliminar dirección',
  EditAddress: 'Editar dirección',
  AddressType: 'Tipo de dirección',
  TaxSection: 'Sección de Impuestos',
  ErrorServer: 'Ocurrió un error, inténtalo de nuevo',
  SavedSuccessfully: 'Guardado correctamente',
  DeletedSuccessfully: 'Eliminado correctamente',
  Customers: 'Clientes',
  Customer: 'Cliente',
  AddCustomer: 'Agregar cliente',
  EditCustomer: 'Editar cliente',
  DeleteCustomer: 'Eliminar cliente',
  CustomerType: 'Tipo de cliente',
  ModuleName: 'Nombre del modulo',
  Role: 'Role',
  Roles: 'Roles',
  AddRole: 'Agregar role',
  EditRole: 'Editar role',
  DeleteRole: 'Eliminar role',
  SearchPermission: 'Buscar permiso...',
  CompleteRequiredFields: 'Complete todos los campos requeridos',
  PatternPassword: '*Una letra mayúscula *Una letra minúscula *Un número *Mínimo 8 caracteres *Máximo 15 caracteres *Un carácter especial',
  ConfirmPasswordNotMatch: 'Confirmar contraseña no coincide',
  SelectImage: 'Seleccionar imagen',
  SelectedImage: 'Imagen seleccionada',
  OnlyImagesPngJpgFormat: 'Solo imágenes en formato png y jpeg',
  ChangeImage: 'Cambiar imagen',
  isAntique: 'Es antique',
  itsNotAntique: 'No es antique',
  ListComponentsAdded: 'Lista de componentes agregados',
  ComponentAddedToList: 'Componente añadido a la lista',
  ProductComponents: 'Componentes del producto',
  ProductDetails: 'Detalles del producto',
  SalesOrders: 'Pedidos',
  Operations: 'Operaciones',
  AddSaleOrder: 'Agregar nuevo pedido',
  EditSaleOrder: 'Editar pedido',
  DeleteSaleOrder: 'Eliminar pedido',
  Order: 'Línea',
  Product: 'Producto',
  ListProductsAdded: 'Lista de productos agregados',
  Quantity: 'Cantidad',
  ShipmentDate: 'Fecha de recibido',
  ShippingDate: 'Fecha de envío',
  DeliveryDate: 'Fecha de entrega',
  Priority: 'Prioridad',
  ProductAddedToList: 'Producto agregado a la lista',
  AddProductToList: 'Agregue por lo menos un producto a la lista',
  Consecutive: 'PO#',
  OrderStatus: 'Estatus de la línea',
  SaleOrderStatus: 'Estatus del pedido',
  CreationUser: 'Usuario que creo',
  DeleteProductionLine: 'Eliminar línea de producción',
  ViewProductionLine: 'Ver línea de producción',
  EditProductionLine: 'Editar línea de producción',
  ViewCards: 'Ver tarjetas',
  ViewTable: 'Ver tabla',
  ViewForm: 'Ver formulario',
  HideForm: 'Ocultar formulario',
  ListOfProductionLines: 'Lista de líneas de producción',
  ProductAlreadyAdded: '¡Producto ya agregado!',
  ComponentAlreadyAdded: '¡Componente ya agregado!',
  ChangeStatus: '¿Estás seguro que quieres cambiar el estatus a ',
  Accept: 'Aceptar',
  ChangeProcess: '¿Estás seguro que quieres cambiar el proceso a ',
  Process: 'Proceso',
  ProductionProcess: 'Proceso de produccion',
  ProductionProcesses: 'Procesos de producción',
  AddProductionProcess: 'Agregar proceso de producción',
  EditProductionProcess: 'Editar proceso de producción',
  DeleteProductionProcess: 'Eliminar proceso de producción',
  isAntiqueRequired: 'Es antique es requerido',
  ProductionLine: 'Línea de producción',
  GeneratePDF: 'Generar pdf',
  NoProcess: 'Sin proceso',
  NecessaryToApprove: 'Se necesita aprobar la línea antes de entrar a un proceso de producción',
  UnitOfMeasurementSat: 'Unidad de medida SAT',
  SelectNewStatus: 'Selecciona el nuevo estatus',
  SelectProcess: 'Selecciona el proceso',
  Reports: 'Reportes',
  SalesOrdersReport: 'Reporte líneas de producción',
  ItemKey: 'Clave del producto',
  ItemName: 'Nombre del producto',
  DaysExpired: 'Días vencidos',
  Select: 'Seleccionar',
  CheckIn: 'Facturar',
  StartDate: 'Fecha de inicio',
  EndDate: 'Fecha de fin',
  Search: 'Buscar...',
  NoProductionOrdersFoundSearch: 'No se encontraron líneas de producción para esta búsqueda',
  TaxName: 'Nombre fiscal',
  TaxItemKey: 'Código del SAT',
  TariffFraction: 'Fracción arancelaria',
  TaxAmount: 'Impuesto del producto',
  SatUnitMeasurement: 'Unidad de medida del SAT',
  Measures: 'Medidas',
  Price: 'Precio',
  ProductionLines: 'Líneas de producción',
  Report: 'Reporte',
  EnterNumberGuide: 'Ingresa el número de guía',
  NumberGuide: 'Número de guía',
  InstructionLetter: 'Carta de instrucciones',
  PackingList: 'Lista de embalaje',
  CertificationOfOrigin: 'Certificado de origen',
  SelectOneOrder: 'Seleccione por lo menos una línea para poder realizar la factura',
  Next: 'Siguiente',
  NotHavePermissions: 'No cuentas con permisos para esta acción',
  NotProccess: 'Sin procesos registrados.',
  EnterTo: 'Entro a ',
  OutOf: 'Salió de ',
  ToIn: 'para dar entrada',
  ToOut: 'para dar salida',
  //#endregion
  NotDeleteLine: 'Solo se pueden eliminar lineas en estatus sin definir, cancelela en su lugar.',
  RestorePasswordOk: 'Se reinicio la contraseña',
  ResetPassword: 'Resetear password',
  NewPassword: 'Nueva contraseña',
  ConfirmNewPassword: 'Confirmar nueva contraseña',
  CurrentPassword: 'Contraseña actual',
  NewPasswordIsDiferentToConfirmNewPassword: 'La nueva contraseña es diferente a la confirmación de la nueva contraseña',
  AdminResetPassword: 'Pidele al administrador que reinicie tu contraseña',
  PreBill: "Pre factura",
  ViewHistory: "Ver histórico",
  LineHistory: "Histórico de la línea",
  InputDate: "Fecha de entrada",
  InputUsername: "Usuario entrada",
  OutputDate: "Fecha de salida",
  OutputUsername: "Usuario salida",
  History: "Historico",
  ReleaseProcess: "Liberar proceso",
  ReleasedProcessCorrectly: "Proceso liberado correctamente",
  Privacy: "Política de Privacidad",
  RejectionForReprocessing: "Rechazo para reproceso",
  EntryNotes: "Comentarios de entrada",
  OutputNotes: "Comentarios de salida",
  DateOfReprocessing: "Fecha de liberacion de proceso",
  InvoiceNumber: "Número de factura",
  CustomRegiment: "Régimen personalizado",
  CommercialAddressNecessary: "Es necesario una direccion comercial del cliente y de la empresa",
  UpdateBill: "Editar factura",
  ViewDetailBill: "Ver detalle de factura",
  CustomerConsecutiveIsRequired: "El consecutivo del cliente es requerido (PO#)",
  EndDateIsRequired: "Fecha de fin es requerida",
  OrdersReport: "Reporte de órdenes",
  Orders: "Órdenes",
  UserType: "Tipo de usuario",
  CustomerRequired: 'El cliente es requerido para usuario de tipo cliente',
  QuantityToBill: 'Cantidad a facturar',
  RemainingQuantityToDeliver: 'Cantidad restante a facturar',
  PayOrdersForProductionProcesses: 'Pagar órdenes por procesos de production',
  OrdersPaidByProductionProcesses: 'Órdenes pagadas por procesos de production',
  RemainingQuantityToPay: 'Cantidad restante de pagar',
  GeneratePay: 'Generar pago',
  PayOrders: 'Pagar líneas',
  PaidOrders: 'Líneas pagadas',
  CreatedDate: 'Fecha de creación',
  YouCannotPayMore: 'No se puede pagar mas de la cantidad de la orden.',
  PriceNecessary: 'Es necesario ingresar el precio.',
  CancelBill: 'Cancelar factura',
  ShippingPrice: 'Precio de envío',
  PreBillWithTotal: 'Pre factura con total',
  DaysToExpiredDays: 'Dias para que expire',
  CreationDate: 'Fecha de creación'
};
const en = {
  //#region agregados
  User: "User",
  EditSucces: 'Item modified successfully',
  DeleteSucces: 'Could not delete item',
  AddSucces: 'Item saved successfully',
  Filter: 'Filter',
  Add: 'Add',
  Delete: 'Delete',
  Edit: 'Edit',
  Reload: 'Reload table',
  Name: "Name",
  Description: "Description",
  Antique: "Antique",
  Status: "Status",
  Actions: "Actions",
  Materials: "Materials",
  EditMaterial: 'Edit material',
  AddMaterial: 'Add material',
  DeleteMaterial: 'Delete material',
  Active: 'Active',
  Inactive: 'Inactive',
  Close: 'Close',
  Save: 'Save',
  Cancel: 'Cancel',
  Email: 'Email',
  FirstName: 'First name',
  LastName: 'Last name',
  SecondLastName: 'Second first name',
  FullName: 'Full name',
  Profile: 'Profile',
  Lock: 'Locked',
  EditUser: 'Edit user',
  AddUser: 'Add user',
  DeleteUser: 'Delete user',
  Permissions: 'Permissions',
  Password: 'Password',
  ConfirmPassword: 'Confirm password',
  Yes: 'Yes',
  No: 'No',
  Module: 'Module',
  Administration: 'Administration',
  OpenMenu: 'Open menu',
  CloseMenu: 'Close menu',
  GoHome: 'Go to home',
  Version: 'Version ' + version,
  ChangePassword: 'Change password',
  ChangeLan: 'Change to spanish',
  Logout: 'Logout',
  Bills: 'Bills',
  Catalogs: 'Catalogs',
  Users: 'Users',
  Profiles: 'Profiles',
  EditProfile: 'Edit profile',
  AddProfile: 'Add profile',
  DeleteProfile: 'Delete profile',
  Menus: 'Menus',
  EditPermission: 'Edit permission',
  AddPermission: 'Add permission',
  DeletePermission: 'Delete permission',
  Permission: 'Permission',
  PermissionsList: 'Permissions list',
  Code: 'Code',
  Tax: 'Tax',
  esDescription: 'Description in spanish',
  enDescription: 'Description in english',
  SellPrice: 'Sell price',
  Image: 'Image',
  SATKey: 'SAT Key',
  Line: 'Line',
  EditProduct: 'Edit product',
  AddProduct: 'Add product',
  DeleteProduct: 'Delete product',
  Products: 'Products',
  ViewImg: 'View image',
  Client: 'Client',
  Material: "Material",
  Components: 'Components',
  EditComponent: 'Edit component',
  AddComponent: 'Add component',
  DeleteComponent: 'Delete component',
  Component: 'Component',
  ChangeImg: 'Change image',
  Logo: 'Logo',
  Key: 'Key',
  Companies: 'Companies',
  AddCompany: 'Add company',
  EditCompany: 'Edit company',
  DeleteCompany: 'Delete company',
  Company: 'Company',
  Notes: 'Notes',
  AddEmail: 'Add email',
  DeleteEmail: 'Delete email',
  EditEmail: 'Edit email',
  CountryCode: 'Country code',
  Extension: 'Extension',
  PhoneNumber: 'Phone number',
  PhoneNumbers: 'Phones number',
  Emails: 'Emails',
  NewEmail: 'New mail',
  NewNumber: 'New number',
  DeletePhone: 'Delete phone',
  EditPhone: 'Edit phone',
  GeneralInformation: 'General information',
  EnterValidNumber: 'Enter a valid number',
  EnterValidEmail: 'Enter a valid email',
  MailAlreadyExists: 'The mail already exists',
  EnterCountryCodeValid: 'Enter a valid country code (numbers)',
  EnterExtensionValid: 'Enter a valid extension (numbers)',
  PhoneAlreadyExists: 'The phone number already exists',
  Addresses: 'Addresses',
  Country: 'Country',
  State: 'State',
  City: 'City',
  District: 'District',
  ZipCode: 'Zip code',
  AddressLine1: 'Address line 1',
  AddressLine2: 'Address line 2',
  AddNewAddress: 'Add new address',
  ListAddressesAdded: 'List addresses added',
  AddNewPhohe: 'Add new phohe',
  ListPhonesAdded: 'List phohes added',
  AddNewEmail: 'Add new email',
  ListEmailsAdded: 'List emails added',
  AddressAlreadyExists: 'The address already exists',
  MandatoryFieldsFillingIn: 'There are mandatory fields without filling in',
  DeleteAddress: 'Delete address',
  EditAddress: 'Edit address',
  AddressType: 'Address type',
  TaxSection: 'Tax section',
  ErrorServer: 'An error occurred, try again',
  SavedSuccessfully: 'Saved successfully',
  DeletedSuccessfully: 'Deleted successfully',
  Customers: 'Customers',
  Customer: 'Customer',
  AddCustomer: 'Add customer',
  EditCustomer: 'Edit customer',
  DeleteCustomer: 'Delete customer',
  CustomerType: 'Customer type',
  ModuleName: 'Module name',
  Role: 'Role',
  Roles: 'Roles',
  AddRole: 'Add role',
  EditRole: 'Edit role',
  DeleteRole: 'Delete role',
  SearchPermission: 'Search permission...',
  CompleteRequiredFields: 'Complete all the required fields',
  PatternPassword: '*One uppercase letter *One lowercase letter *One number *Minimum 8 characters *Maximum 15 characters *One special character',
  ConfirmPasswordNotMatch: 'Confirm password not match',
  SelectImage: 'Select image',
  SelectedImage: 'Selected image',
  OnlyImagesPngJpgFormat: 'Only images png and jpeg format',
  ChangeImage: 'Change image',
  isAntique: 'Is antique',
  itsNotAntique: 'it is not antique',
  ListComponentsAdded: 'List of added components',
  ComponentAddedToList: 'Component added to list',
  ProductComponents: 'Product components',
  ProductDetails: 'Product details',
  SalesOrders: 'Orders ',
  Operations: 'Operations',
  AddSaleOrder: 'Add new sale order',
  EditSaleOrder: 'Edit sale order',
  DeleteSaleOrder: 'Delete sale order',
  Order: 'Line',
  Product: 'Product',
  ListProductsAdded: 'List products added',
  Quantity: 'Quantity',
  ShipmentDate: 'Received date',
  ShippingDate: 'Shipping date',
  DeliveryDate: 'Delivery date',
  Priority: 'Priority',
  ProductAddedToList: 'Product added to list',
  AddProductToList: 'Add at least one product to the list',
  Consecutive: 'PO#',
  OrderStatus: 'Line status',
  SaleOrderStatus: 'Sale order status',
  CreationUser: 'Creation user',
  DeleteProductionLine: 'Delete production line',
  ViewProductionLine: 'View production line',
  EditProductionLine: 'Edit production line',
  ViewCards: 'View cards',
  ViewTable: 'View table',
  ViewForm: 'View form',
  HideForm: 'Hide form',
  ListOfProductionLines: 'List of production lines',
  ProductAlreadyAdded: 'Product already added!',
  ComponentAlreadyAdded: 'Component already added!',
  ChangeStatus: 'Are you sure you want to change the status to ',
  Accept: 'Accept',
  ChangeProcess: 'Are you sure you want to change the process to ',
  Process: 'Process',
  ProductionProcess: 'Production process',
  ProductionProcesses: 'Production processes',
  AddProductionProcess: 'Add production process',
  EditProductionProcess: 'Edit production process',
  DeleteProductionProcess: 'Delete production process',
  isAntiqueRequired: 'is antique required',
  ProductionLine: 'Production line',
  GeneratePDF: 'Generate PDF',
  NoProcess: 'No process',
  NecessaryToApprove: 'It is necessary to approve the line before entering a production process',
  UnitOfMeasurementSat: 'Unit of measurement SAT',
  SelectNewStatus: 'Select a new status',
  SelectProcess: 'Select a process',
  Reports: 'Reportes',
  SalesOrdersReport: 'Sales lines report',
  ItemKey: 'Item key',
  ItemName: 'Item name',
  DaysExpired: 'Days expired',
  Select: 'Select',
  CheckIn: 'Check in',
  StartDate: 'Start date',
  EndDate: 'End date',
  Search: 'Search...',
  NoProductionOrdersFoundSearch: 'No production lines found for this search',
  TaxName: 'Tax name',
  TaxItemKey: 'SAT code',
  TariffFraction: 'Tariff fraction',
  TaxAmount: 'TaxAmount',
  SatUnitMeasurement: 'Sat unit measurement',
  Measures: 'Measures',
  Price: 'Price',
  ProductionLines: 'Production lines',
  Report: 'Report',
  EnterNumberGuide: 'Enter guide number',
  NumberGuide: 'Number guide',
  InstructionLetter: 'Instruction letter',
  PackingList: 'Packing list',
  CertificationOfOrigin: 'Certification of origin',
  SelectOneOrder: 'Select at least one order to be able to make the invoice',
  Next: 'Next',
  NotHavePermissions: 'You do not have permissions for this action',
  NotProccess: 'No registered processes.',
  EnterTo: 'Enter to ',
  OutOf: 'Out fo ',
  ToIn: 'to in',
  ToOut: 'to out',
  //#endregion
  NotDeleteLine: 'You can only delete lines in undefined status, cancel instead',
  RestorePasswordOk: 'Password reset',
  ResetPassword: 'Reset password',
  NewPassword: 'New password',
  ConfirmNewPassword: 'Confirm new password',
  CurrentPassword: 'Current password',
  NewPasswordIsDiferentToConfirmNewPassword: 'New password is diferent to confirm new password',
  AdminResetPassword: 'Ask your administrator to reset your password',
  PreBill: "Pre bill",
  ViewHistory: "View history",
  LineHistory: "Line history",
  InputDate: "Input Date",
  InputUsername: "Usuario entrada",
  OutputDate: "Output date",
  OutputUsername: "Output user",
  History: "History",
  ReleaseProcess: "Release process",
  ReleasedProcessCorrectly: "Released process correctly",
  Privacy: "Privacy Policy",
  RejectionForReprocessing: "Rejection for reprocessing",
  EntryNotes: "Entry notes",
  OutputNotes: "Output Notes",
  DateOfReprocessing: "Date of reprocessing",
  InvoiceNumber: "Invoice number",
  CustomRegiment: "Custom regiment",
  CommercialAddressNecessary: "A commercial address of the client and the company is necessary",
  UpdateBill: "Update bill",
  ViewDetailBill: "View detail bill",
  CustomerConsecutiveIsRequired: "Customer consecutive (PO#) is required",
  EndDateIsRequired: "End date is required",
  OrdersReport: "Orders report",
  Orders: "Orders",
  UserType: "User type",
  CustomerRequired: 'Customer is required for customer user type',
  QuantityToBill: 'Quantity to bill',
  RemainingQuantityToDeliver: 'Remaining quantity to bill',
  PayOrdersForProductionProcesses: 'Pay orders for production processes',
  OrdersPaidByProductionProcesses: 'Orders paid by production processes',
  RemainingQuantityToPay: 'Remaining quantity to pay',
  GeneratePay: 'Generate pay',
  PayOrders: 'Pay lines',
  PaidOrders: 'Paid lines',
  CreatedDate: 'Created date',
  YouCannotPayMore: 'You cannot pay more than the order amount.',
  PriceNecessary: 'It is necessary to enter the price.',
  CancelBill: 'Cancel bill',
  ShippingPrice: 'Shipping price',
  PreBillWithTotal: 'Pre bill with total',
  DaysToExpiredDays: 'Days to expired days',
  CreationDate: 'Creation date'
};

/***/ }),

/***/ 3539:
/*!**************************************************!*\
  !*** ./src/app/shared/guards/guardsApp.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuardsAppGuard: () => (/* binding */ GuardsAppGuard)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ 83579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _security_sesion_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../security/sesion-validate */ 9511);




class GuardsAppGuard {
  constructor(router, sessionService) {
    this.router = router;
    this.sessionService = sessionService;
  }
  canActivate() {
    return this.PermissionSeccion();
  }
  PermissionSeccion() {
    let Permission = false;
    if (localStorage['userPermissions'] != undefined && localStorage['userPermissions'] != null) {
      let userPermissions = JSON.parse(localStorage['userPermissions']);
      let r = this.router.getCurrentNavigation();
      let dataUrl = r.finalUrl.root.children.primary.segments;
      let arrayUrl = [];
      dataUrl.forEach(element => {
        arrayUrl.push('/' + element.path);
      });
      let url = "";
      arrayUrl.forEach(element => {
        url = url + element;
      });
      if (url.includes('/operations/sales-orders/')) {
        url = '/operations/sales-orders';
      }
      ;
      let findRoute = _data_data__WEBPACK_IMPORTED_MODULE_0__.routes.find(r => r.route == url);
      userPermissions.forEach(permission => {
        if (findRoute && permission == findRoute.permission) {
          Permission = true;
        }
      });
      if (url == '/home') {
        Permission = true;
      }
    }
    return Permission;
  }
  static {
    this.ɵfac = function GuardsAppGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GuardsAppGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_security_sesion_validate__WEBPACK_IMPORTED_MODULE_1__.SessionValidate));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: GuardsAppGuard,
      factory: GuardsAppGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 71986:
/*!****************************************************!*\
  !*** ./src/app/shared/guards/permissions.guard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsGuard: () => (/* binding */ PermissionsGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);

class PermissionsGuard {
  Permission(action) {
    let Permission = false;
    if (localStorage['userPermissions'] != undefined && localStorage['userPermissions'] != null) {
      let userPermissions = JSON.parse(localStorage['userPermissions']);
      userPermissions.forEach(permission => {
        if (permission == action) {
          Permission = true;
        }
      });
    }
    return Permission;
  }
  static {
    this.ɵfac = function PermissionsGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PermissionsGuard)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PermissionsGuard,
      factory: PermissionsGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 73716:
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptorService: () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 18810);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _security_sesion_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../security/sesion-validate */ 9511);
/* harmony import */ var _security_menu_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../security/menu-validate */ 39497);






class AuthInterceptorService {
  constructor(router, sessionValidate, Menu) {
    this.router = router;
    this.sessionValidate = sessionValidate;
    this.Menu = Menu;
  }
  intercept(req, next) {
    const tokenP = localStorage.getItem('token');
    const token = JSON.parse(tokenP);
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      if (err.status === 401) {
        console.log("Cierre de sesion por 401");
        localStorage.removeItem('userPermissions');
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        localStorage.removeItem("dateLogin");
        this.sessionValidate.userData = null;
        this.sessionValidate.token = null;
        this.sessionValidate.showLogin.next(true);
        this.Menu.OcultarNav();
        this.router.navigateByUrl('/login');
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
    }));
  }
  static {
    this.ɵfac = function AuthInterceptorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_security_sesion_validate__WEBPACK_IMPORTED_MODULE_0__.SessionValidate), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_security_menu_validate__WEBPACK_IMPORTED_MODULE_1__.MenuValidate));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthInterceptorService,
      factory: AuthInterceptorService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 24479:
/*!************************************************************!*\
  !*** ./src/app/shared/interceptors/spinner.interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerInterceptor: () => (/* binding */ SpinnerInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_spinner_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/spinner.services */ 48658);



class SpinnerInterceptor {
  constructor(spinnerSvc) {
    this.spinnerSvc = spinnerSvc;
  }
  intercept(req, next) {
    this.spinnerSvc.show();
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.spinnerSvc.hide()));
  }
  static {
    this.ɵfac = function SpinnerInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SpinnerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_spinner_services__WEBPACK_IMPORTED_MODULE_0__.SpinnerService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SpinnerInterceptor,
      factory: SpinnerInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 39497:
/*!**************************************************!*\
  !*** ./src/app/shared/security/menu-validate.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuValidate: () => (/* binding */ MenuValidate)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);



class MenuValidate {
  constructor(Route) {
    this.Route = Route;
    this.Usuario = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
    this.Nav = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
  }
  get ValorUsuario() {
    return this.Usuario.asObservable();
  }
  get ValorNav() {
    return this.Nav.asObservable();
  }
  ActualizarNombreUsuario() {
    let Usuario = localStorage.getItem('sesionUsuario');
    if (Usuario) this.Usuario.next(Usuario);
  }
  MostrarNav() {
    this.Nav.next(true);
  }
  OcultarNav() {
    this.Nav.next(false);
  }
  static {
    this.ɵfac = function MenuValidate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MenuValidate)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MenuValidate,
      factory: MenuValidate.ɵfac
    });
  }
}

/***/ }),

/***/ 9511:
/*!****************************************************!*\
  !*** ./src/app/shared/security/sesion-validate.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionValidate: () => (/* binding */ SessionValidate)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84412);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 38350);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _guards_permissions_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/permissions.guard */ 71986);
/* harmony import */ var _menu_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-validate */ 39497);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);









class SessionValidate {
  constructor(permissionsGuard, Route, Menu, snackBar, activatedRoute) {
    this.permissionsGuard = permissionsGuard;
    this.Route = Route;
    this.Menu = Menu;
    this.snackBar = snackBar;
    this.activatedRoute = activatedRoute;
    this.showLogin = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(true);
    this.autorizado = false;
    this.routeSubscription = this.Route.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        if (event.url == "/login") {
          this.navigateTotHome();
        }
      }
    });
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
  /* Validar Sesion */
  validateSession() {
    let respuesta = false;
    let userSesion = localStorage.getItem('userData');
    let token = localStorage.getItem('token');
    let dateLogin = localStorage.getItem('dateLogin');
    let userPermissions = localStorage.getItem('userPermissions');
    let dateNow = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
    if (!userSesion || !token || !dateLogin || !userPermissions || dateLogin != dateNow) {
      respuesta = false;
      this.autorizado = false;
      console.log("Usuario No Autorizado");
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      localStorage.removeItem("dateLogin");
      localStorage.removeItem("userPermissions");
      // this.snackBar.open('Cierre de sesión automático', '', {
      //     duration: 3000,
      //     panelClass: ['mensaje-error']
      //   });
      this.Menu.OcultarNav();
      this.showLogin.next(true);
      this.Route.navigate(['/login']);
    } else {
      this.autorizado = true;
      let token = localStorage.getItem("token");
      let userData = localStorage.getItem("userData");
      this.getDecodedAccessToken(token).then(decode => {
        this.token = decode;
      });
      this.userData = JSON.parse(userData);
      console.log("Usuario Autorizado");
      respuesta = true;
      this.Menu.MostrarNav();
      this.Menu.ActualizarNombreUsuario();
      this.showLogin.next(false);
      const currentRoute = this.activatedRoute.snapshot.routeConfig?.path;
      if (currentRoute === 'login') {
        if (this.permissionsGuard.Permission('Dashboard')) {
          this.Route.navigate(['/dashboard']);
        } else {
          this.Route.navigate(['/home']);
        }
      }
    }
    return respuesta;
  }
  navigateTotHome() {
    if (this.autorizado) {
      let token = localStorage.getItem("token");
      let userData = localStorage.getItem("userData");
      this.getDecodedAccessToken(token).then(decode => {
        this.token = decode;
      });
      this.userData = JSON.parse(userData);
      console.log("Usuario Autorizado");
      this.Menu.MostrarNav();
      this.Menu.ActualizarNombreUsuario();
      this.showLogin.next(false);
      const currentRoute = this.activatedRoute.snapshot.routeConfig?.path;
      if (currentRoute === 'login') {
        if (this.permissionsGuard.Permission('Dashboard')) {
          this.Route.navigate(['/dashboard']);
        } else {
          this.Route.navigate(['/home']);
        }
      }
    }
  }
  getToken() {
    return this.token;
  }
  getUserData() {
    return this.userData;
  }
  getDecodedAccessToken(token) {
    return new Promise((resolve, reject) => {
      try {
        resolve((0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token));
      } catch (Error) {
        reject(null);
      }
    });
  }
  static {
    this.ɵfac = function SessionValidate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SessionValidate)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_2__.PermissionsGuard), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_menu_validate__WEBPACK_IMPORTED_MODULE_3__.MenuValidate), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: SessionValidate,
      factory: SessionValidate.ɵfac
    });
  }
}

/***/ }),

/***/ 47018:
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/language */ 59217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.service */ 29936);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);






class ApiService {
  constructor(dialog, languageService, snackBar) {
    this.dialog = dialog;
    this.languageService = languageService;
    this.snackBar = snackBar;
    this.lan = "";
    this.languageServiceSubs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    this.languageServiceSubs = languageService.getLanguage().subscribe(lan => {
      this.lan = lan;
      this.languageServiceSubs.unsubscribe();
    });
  }
  finishResponseServer(response, opc, changePositionMessage, typeImage, closeModal = true) {
    let type = '';
    let message = '';
    let refreshList = false;
    if (response != undefined && response != false && response.error != undefined && response.error.status != 200 && response.error.status != 201) {
      let message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.ErrorServer;
      if (this.lan == 'en') {
        message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.ErrorServer;
      }
      if (changePositionMessage) {
        setTimeout(() => {
          this.snackBar.open('Error al ' + typeImage + ' imagen, inténtelo nuevamente', 'Error', {
            panelClass: "mensaje-error",
            duration: 3000
          });
        }, 3000);
      } else {
        this.snackBar.open(message, 'Error', {
          panelClass: "mensaje-error",
          duration: 3000
        });
      }
      type = '[Error Api] Error API';
    } else {
      switch (opc) {
        case 'Add':
          message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.SavedSuccessfully;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.SavedSuccessfully;
          }
          break;
        case 'Delete':
          message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.DeletedSuccessfully;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.DeletedSuccessfully;
          }
          break;
        case 'Edit':
          message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.es.SavedSuccessfully;
          if (this.lan == 'en') {
            message = src_app_shared_data_language__WEBPACK_IMPORTED_MODULE_0__.en.SavedSuccessfully;
          }
          break;
      }
      if (opc != 'Get' && closeModal) {
        refreshList = true;
        this.snackBar.open(message, 'Ok', {
          panelClass: "mensaje-confirmation",
          duration: 3000
        });
        this.dialog.closeAll();
      }
    }
    let data = {
      type: type,
      refreshList: refreshList
    };
    return data;
  }
  static {
    this.ɵfac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 29936:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/language.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);


class LanguageService {
  constructor() {
    this.language = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('es');
  }
  ngOnInit() {
    let lan = localStorage.getItem('language');
    lan == undefined || lan == 'es' ? this.language.next('es') : this.language.next('en');
  }
  changeLanguage() {
    if (this.language.getValue() == 'en') {
      this.changeLanguageToEs();
      return;
    }
    this.changeLanguageToEn();
  }
  changeLanguageToEs() {
    this.language.next('es');
    localStorage.setItem('language', 'es');
  }
  changeLanguageToEn() {
    this.language.next('en');
    localStorage.setItem('language', 'en');
  }
  getLanguage() {
    return this.language;
  }
  static {
    this.ɵfac = function LanguageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LanguageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LanguageService,
      factory: LanguageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 66541:
/*!******************************************************!*\
  !*** ./src/app/shared/services/paginator.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginatorService: () => (/* binding */ PaginatorService)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 96695);

function PaginatorService() {
  const customPaginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl();
  let lan = localStorage.getItem('language');
  if (lan == "es") {
    customPaginatorIntl.itemsPerPageLabel = "Registros por pagina:";
  } else {
    customPaginatorIntl.itemsPerPageLabel = "Items per page:";
  }
  return customPaginatorIntl;
}

/***/ }),

/***/ 32175:
/*!***************************************************!*\
  !*** ./src/app/shared/services/shared.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedService: () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);



class SharedService {
  constructor(http) {
    this.http = http;
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
    this.quantitiesOrders = 0;
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    this.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    this.headers.append('Accept', 'application/json');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }
  getCatalogs() {
    return this.http.get('assets/catalogs.xlsx', {
      responseType: 'blob'
    });
  }
  getImage(imageUrl) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
    headers.set('X-Requested-With', 'XMLHttpRequest');
    return this.http.get(imageUrl, {
      headers: headers
    });
  }
  setQuantitiesOrders(quantitie) {
    this.quantitiesOrders = quantitie;
  }
  static {
    this.ɵfac = function SharedService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 48658:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/spinner.services.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerService: () => (/* binding */ SpinnerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);


class SpinnerService {
  constructor() {
    this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  show() {
    this.isLoading$.next(true);
  }
  hide() {
    this.isLoading$.next(false);
  }
  static {
    this.ɵfac = function SpinnerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SpinnerService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SpinnerService,
      factory: SpinnerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 57383:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng2-charts */ 68860);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 81391);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @fullcalendar/angular */ 6064);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/paginator */ 96695);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 99213);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ 5951);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 88834);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ 82765);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 25596);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ 59115);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 96850);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/grid-list */ 16195);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 55911);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ 53719);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/input */ 59042);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 25084);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 71997);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ 67575);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ 90882);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/autocomplete */ 60850);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ 36013);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 26450);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 11161);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 82798);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 95416);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 34006);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9183);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 14823);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ 1975);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 2042);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ 36471);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tree */ 47358);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/slide-toggle */ 30450);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/flex-layout */ 90608);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 62796);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 3);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 29927);
/* harmony import */ var _interceptors_spinner_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors/spinner.interceptor */ 24479);
/* harmony import */ var _component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/spinner/spinner.component */ 68628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _component_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/popup/popup.component */ 42476);
/* harmony import */ var _component_documents_modal_documents_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/documents-modal/documents-modal.component */ 54544);



// import { QRCodeModule } from 'angular2-qrcode';



//material









































// import { QRCodeComponent } from 'ngx-qrcode';
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
        useClass: _interceptors_spinner_interceptor__WEBPACK_IMPORTED_MODULE_0__.SpinnerInterceptor,
        multi: true
      }, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(_angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule)],
      imports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule,
      // ServiceWorkerModule.register('ngsw-worker.js', {
      //   enabled: environment.production,
      //   // Register the ServiceWorker as soon as the app is stable
      //   // or after 30 seconds (whichever comes first).
      //   registrationStrategy: 'registerWhenStable:30000'
      // }),
      _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadgeModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBarModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__.MatGridListModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_36__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__.MatTreeModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__.MatSlideToggleModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_41__.DragDropModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__.FlexLayoutModule, ng2_charts__WEBPACK_IMPORTED_MODULE_43__.NgChartsModule,
      // QRCodeModule,
      _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_44__.FullCalendarModule, _angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule,
      // ServiceWorkerModule.register('ngsw-worker.js', {
      //   enabled: environment.production,
      //   // Register the ServiceWorker as soon as the app is stable
      //   // or after 30 seconds (whichever comes first).
      //   registrationStrategy: 'registerWhenStable:30000'
      // }),
      _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadgeModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBarModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__.MatGridListModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_36__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__.MatTreeModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__.MatSlideToggleModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_41__.DragDropModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__.FlexLayoutModule, ng2_charts__WEBPACK_IMPORTED_MODULE_43__.NgChartsModule,
      // QRCodeModule,
      _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_44__.FullCalendarModule, _angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _component_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__.PopupComponent, _component_documents_modal_documents_modal_component__WEBPACK_IMPORTED_MODULE_3__.DocumentsModalComponent],
    imports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the app is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadgeModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBarModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__.MatGridListModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_36__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__.MatTreeModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__.MatSlideToggleModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_41__.DragDropModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__.FlexLayoutModule, ng2_charts__WEBPACK_IMPORTED_MODULE_43__.NgChartsModule,
    // QRCodeModule,
    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_44__.FullCalendarModule, _angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule],
    exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the app is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadgeModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBarModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__.MatGridListModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_36__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__.MatTreeModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__.MatSlideToggleModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_41__.DragDropModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__.FlexLayoutModule, ng2_charts__WEBPACK_IMPORTED_MODULE_43__.NgChartsModule,
    // QRCodeModule,
    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_44__.FullCalendarModule, _component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, _component_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__.PopupComponent]
  });
})();

/***/ }),

/***/ 99578:
/*!************************************************!*\
  !*** ./src/app/shared/state/shared.actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorApi: () => (/* binding */ errorApi),
/* harmony export */   loadcatalogs: () => (/* binding */ loadcatalogs),
/* harmony export */   loadedcatalogs: () => (/* binding */ loadedcatalogs)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const loadcatalogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[catalogs List] Init catalogs');
const loadedcatalogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[catalogs List] Finish catalogs',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);
const errorApi = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Error Api] Error API',
//Type
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() //Propiedades
);

/***/ }),

/***/ 48967:
/*!************************************************!*\
  !*** ./src/app/shared/state/shared.effects.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedEffects: () => (/* binding */ SharedEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 84962);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 99437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.actions */ 99578);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared.service */ 32175);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 47018);









class SharedEffects {
  constructor(actions$, sharedService, apiService) {
    this.actions$ = actions$;
    this.sharedService = sharedService;
    this.apiService = apiService;
    this.lan = '';
    this.customersList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[catalogs List] Init catalogs'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.sharedService.getCatalogs().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_shared_actions__WEBPACK_IMPORTED_MODULE_0__.errorApi)({
        loading: true,
        error: error
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
        this.apiService.finishResponseServer(response, 'Get');
        return {
          type: '[catalogs List] Finish catalogs',
          catalogs: response,
          dateUpdate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
        };
      }))));
    });
    this.error = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)('[Error Api] Error API'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(error => {
        return {
          type: '[Error Api] Error API',
          error: error
        };
      }));
    });
  }
  static {
    this.ɵfac = function SharedEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: SharedEffects,
      factory: SharedEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 13204:
/*!*************************************************!*\
  !*** ./src/app/shared/state/shared.reducers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   catalogsReducer: () => (/* binding */ catalogsReducer),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9310);
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.actions */ 99578);


//ESTADO INICIAL O INICIALIZACION DE VARIABLES
const initialState = {
  loading: false,
  catalogs: [],
  dateUpdate: ''
};
const catalogsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_shared_actions__WEBPACK_IMPORTED_MODULE_0__.loadcatalogs, state => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_shared_actions__WEBPACK_IMPORTED_MODULE_0__.loadedcatalogs, (state, catalogs) => {
  return {
    ...state,
    loading: false,
    catalogs: catalogs.catalogs,
    dateUpdate: catalogs.dateUpdate
  };
}));

/***/ }),

/***/ 64612:
/*!*************************************************!*\
  !*** ./src/app/shared/state/shared.selector.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectcatalogs: () => (/* binding */ selectcatalogs),
/* harmony export */   selectcatalogsFeature: () => (/* binding */ selectcatalogsFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const selectcatalogsFeature = state => state.catalogs;
const selectcatalogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectcatalogsFeature,
// selectPlazas2,
state => state);

/***/ }),

/***/ 97144:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment),
/* harmony export */   versionSystem: () => (/* binding */ versionSystem)
/* harmony export */ });
const environment = {
  production: true,
  API: 'https://api.ftm1970.com/api/',
  IdentityProvider: 'https://idp.ftm1970.com/api/',
  Identity: 'https://identity.ftm1970.com/api/',
  PDFService: 'http://tomasmercado-001-site9.jtempurl.com/api/'
};
const {
  version: versionSystem
} = __webpack_require__(/*! ../../package.json */ 8330);

/***/ }),

/***/ 65413:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 345);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 80803);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 35358:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 11544,
	"./af.js": 11544,
	"./ar": 33108,
	"./ar-dz": 52155,
	"./ar-dz.js": 52155,
	"./ar-kw": 53583,
	"./ar-kw.js": 53583,
	"./ar-ly": 41638,
	"./ar-ly.js": 41638,
	"./ar-ma": 87823,
	"./ar-ma.js": 87823,
	"./ar-ps": 7712,
	"./ar-ps.js": 7712,
	"./ar-sa": 78261,
	"./ar-sa.js": 78261,
	"./ar-tn": 56703,
	"./ar-tn.js": 56703,
	"./ar.js": 33108,
	"./az": 46508,
	"./az.js": 46508,
	"./be": 16766,
	"./be.js": 16766,
	"./bg": 28564,
	"./bg.js": 28564,
	"./bm": 97462,
	"./bm.js": 97462,
	"./bn": 17107,
	"./bn-bd": 43438,
	"./bn-bd.js": 43438,
	"./bn.js": 17107,
	"./bo": 9004,
	"./bo.js": 9004,
	"./br": 50927,
	"./br.js": 50927,
	"./bs": 87768,
	"./bs.js": 87768,
	"./ca": 56291,
	"./ca.js": 56291,
	"./cs": 85301,
	"./cs.js": 85301,
	"./cv": 66666,
	"./cv.js": 66666,
	"./cy": 55163,
	"./cy.js": 55163,
	"./da": 87360,
	"./da.js": 87360,
	"./de": 45932,
	"./de-at": 43248,
	"./de-at.js": 43248,
	"./de-ch": 83222,
	"./de-ch.js": 83222,
	"./de.js": 45932,
	"./dv": 6405,
	"./dv.js": 6405,
	"./el": 60718,
	"./el.js": 60718,
	"./en-au": 36319,
	"./en-au.js": 36319,
	"./en-ca": 80597,
	"./en-ca.js": 80597,
	"./en-gb": 51800,
	"./en-gb.js": 51800,
	"./en-ie": 807,
	"./en-ie.js": 807,
	"./en-il": 95960,
	"./en-il.js": 95960,
	"./en-in": 84418,
	"./en-in.js": 84418,
	"./en-nz": 46865,
	"./en-nz.js": 46865,
	"./en-sg": 32647,
	"./en-sg.js": 32647,
	"./eo": 61931,
	"./eo.js": 61931,
	"./es": 46679,
	"./es-do": 41805,
	"./es-do.js": 41805,
	"./es-mx": 83445,
	"./es-mx.js": 83445,
	"./es-us": 81516,
	"./es-us.js": 81516,
	"./es.js": 46679,
	"./et": 88150,
	"./et.js": 88150,
	"./eu": 80757,
	"./eu.js": 80757,
	"./fa": 65742,
	"./fa.js": 65742,
	"./fi": 33958,
	"./fi.js": 33958,
	"./fil": 46720,
	"./fil.js": 46720,
	"./fo": 98352,
	"./fo.js": 98352,
	"./fr": 4059,
	"./fr-ca": 42096,
	"./fr-ca.js": 42096,
	"./fr-ch": 95759,
	"./fr-ch.js": 95759,
	"./fr.js": 4059,
	"./fy": 15958,
	"./fy.js": 15958,
	"./ga": 94143,
	"./ga.js": 94143,
	"./gd": 67028,
	"./gd.js": 67028,
	"./gl": 80428,
	"./gl.js": 80428,
	"./gom-deva": 76861,
	"./gom-deva.js": 76861,
	"./gom-latn": 57718,
	"./gom-latn.js": 57718,
	"./gu": 26827,
	"./gu.js": 26827,
	"./he": 21936,
	"./he.js": 21936,
	"./hi": 31332,
	"./hi.js": 31332,
	"./hr": 91957,
	"./hr.js": 91957,
	"./hu": 48928,
	"./hu.js": 48928,
	"./hy-am": 56215,
	"./hy-am.js": 56215,
	"./id": 586,
	"./id.js": 586,
	"./is": 90211,
	"./is.js": 90211,
	"./it": 70170,
	"./it-ch": 22340,
	"./it-ch.js": 22340,
	"./it.js": 70170,
	"./ja": 39770,
	"./ja.js": 39770,
	"./jv": 73875,
	"./jv.js": 73875,
	"./ka": 79499,
	"./ka.js": 79499,
	"./kk": 93573,
	"./kk.js": 93573,
	"./km": 68807,
	"./km.js": 68807,
	"./kn": 65082,
	"./kn.js": 65082,
	"./ko": 20137,
	"./ko.js": 20137,
	"./ku": 70111,
	"./ku-kmr": 63744,
	"./ku-kmr.js": 63744,
	"./ku.js": 70111,
	"./ky": 99187,
	"./ky.js": 99187,
	"./lb": 35969,
	"./lb.js": 35969,
	"./lo": 33526,
	"./lo.js": 33526,
	"./lt": 90411,
	"./lt.js": 90411,
	"./lv": 32621,
	"./lv.js": 32621,
	"./me": 85869,
	"./me.js": 85869,
	"./mi": 35881,
	"./mi.js": 35881,
	"./mk": 92391,
	"./mk.js": 92391,
	"./ml": 21126,
	"./ml.js": 21126,
	"./mn": 44892,
	"./mn.js": 44892,
	"./mr": 59080,
	"./mr.js": 59080,
	"./ms": 70399,
	"./ms-my": 25950,
	"./ms-my.js": 25950,
	"./ms.js": 70399,
	"./mt": 79902,
	"./mt.js": 79902,
	"./my": 72985,
	"./my.js": 72985,
	"./nb": 67859,
	"./nb.js": 67859,
	"./ne": 13642,
	"./ne.js": 13642,
	"./nl": 65441,
	"./nl-be": 99875,
	"./nl-be.js": 99875,
	"./nl.js": 65441,
	"./nn": 81311,
	"./nn.js": 81311,
	"./oc-lnc": 72567,
	"./oc-lnc.js": 72567,
	"./pa-in": 56962,
	"./pa-in.js": 56962,
	"./pl": 61063,
	"./pl.js": 61063,
	"./pt": 78719,
	"./pt-br": 97476,
	"./pt-br.js": 97476,
	"./pt.js": 78719,
	"./ro": 51004,
	"./ro.js": 51004,
	"./ru": 51326,
	"./ru.js": 51326,
	"./sd": 72608,
	"./sd.js": 72608,
	"./se": 13911,
	"./se.js": 13911,
	"./si": 25147,
	"./si.js": 25147,
	"./sk": 23741,
	"./sk.js": 23741,
	"./sl": 93000,
	"./sl.js": 93000,
	"./sq": 60451,
	"./sq.js": 60451,
	"./sr": 55046,
	"./sr-cyrl": 40905,
	"./sr-cyrl.js": 40905,
	"./sr.js": 55046,
	"./ss": 85765,
	"./ss.js": 85765,
	"./sv": 99290,
	"./sv.js": 99290,
	"./sw": 53449,
	"./sw.js": 53449,
	"./ta": 72688,
	"./ta.js": 72688,
	"./te": 32060,
	"./te.js": 32060,
	"./tet": 93290,
	"./tet.js": 93290,
	"./tg": 8294,
	"./tg.js": 8294,
	"./th": 1231,
	"./th.js": 1231,
	"./tk": 3746,
	"./tk.js": 3746,
	"./tl-ph": 49040,
	"./tl-ph.js": 49040,
	"./tlh": 17187,
	"./tlh.js": 17187,
	"./tr": 60153,
	"./tr.js": 60153,
	"./tzl": 88521,
	"./tzl.js": 88521,
	"./tzm": 18010,
	"./tzm-latn": 22234,
	"./tzm-latn.js": 22234,
	"./tzm.js": 18010,
	"./ug-cn": 63349,
	"./ug-cn.js": 63349,
	"./uk": 68479,
	"./uk.js": 68479,
	"./ur": 43024,
	"./ur.js": 43024,
	"./uz": 19800,
	"./uz-latn": 72376,
	"./uz-latn.js": 72376,
	"./uz.js": 19800,
	"./vi": 89366,
	"./vi.js": 89366,
	"./x-pseudo": 69702,
	"./x-pseudo.js": 69702,
	"./yo": 72655,
	"./yo.js": 72655,
	"./zh-cn": 575,
	"./zh-cn.js": 575,
	"./zh-hk": 18351,
	"./zh-hk.js": 18351,
	"./zh-mo": 51626,
	"./zh-mo.js": 51626,
	"./zh-tw": 8887,
	"./zh-tw.js": 8887
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35358;

/***/ }),

/***/ 50477:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8330:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"ftm1970","version":"2.0.6","scripts":{"ng":"ng","start":"ng serve","build":"ng build","watch":"ng build --watch --configuration development","test":"ng test","b-qa":"node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng build --configuration=qa","b-p":"node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng build --configuration=production"},"private":true,"dependencies":{"@angular/animations":"^18.0.0","@angular/cdk":"^18.0.0","@angular/common":"^18.0.0","@angular/compiler":"^18.0.0","@angular/core":"^18.0.0","@angular/flex-layout":"^15.0.0-beta.42","@angular/forms":"^18.0.0","@angular/material":"^18.0.0","@angular/platform-browser":"^18.0.0","@angular/platform-browser-dynamic":"^18.0.0","@angular/router":"^18.0.0","@daypilot/daypilot-lite-angular":"^3.12.1","@fortawesome/angular-fontawesome":"^0.15.0","@fortawesome/fontawesome-svg-core":"^6.4.0","@fortawesome/free-solid-svg-icons":"^6.4.0","@fullcalendar/angular":"^6.1.15","@fullcalendar/core":"^6.1.15","@fullcalendar/daygrid":"^6.1.15","@fullcalendar/interaction":"^6.1.15","@fullcalendar/list":"^6.1.15","@fullcalendar/timegrid":"^6.1.15","@ngrx/effects":"^18.0.0","@ngrx/store":"^18.0.0","@ngrx/store-devtools":"^18.0.0","@swimlane/ngx-charts":"^20.1.2","angular-oauth2-oidc":"^18.0.0","babel-loader":"^7.1.5","bootstrap":"^5.2.3","chart.js":"^3.6.0","crypto-js":"^4.1.1","date-fns":"^2.29.3","dom-to-pdf":"^0.3.2","exceljs":"^4.3.0","export-to-csv":"^0.2.1","file-saver":"^2.0.5","font-awesome":"^4.7.0","ftm1970":"file:","html-to-pdfmake":"^2.4.22","html2canvas":"^1.4.1","jsbarcode":"^3.11.5","jspdf":"^2.5.1","jspdf-autotable":"^3.8.2","jwt-decode":"^3.1.2","moment":"^2.29.4","ng2-charts":"^4.1.1","ngx-pagination":"^6.0.3","pdf-lib":"^1.17.1","pdfmake":"^0.2.7","qrcode":"^1.5.4","rxjs":"^7.4.0","tippy.js":"^6.2.5","tslib":"^2.3.0","xlsx":"^0.18.5","zone.js":"~0.14.10"},"devDependencies":{"@angular-devkit/build-angular":"^18.0.0","@angular/cli":"^18.0.0","@angular/compiler-cli":"^18.0.0","@types/crypto-js":"^4.1.1","@types/file-saver":"^2.0.5","@types/html-to-pdfmake":"^2.4.1","@types/jasmine":"~4.3.0","@types/lodash":"^4.14.191","@types/pdfmake":"^0.2.2","@types/qrcode":"^1.5.5","jasmine-core":"~4.5.0","karma":"~6.4.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.0.0","typescript":"^5.4.0"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [502], () => (__webpack_exec__(65413)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);