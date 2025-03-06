"use strict";
(self["webpackChunkFTM"] = self["webpackChunkFTM"] || []).push([[76],{

/***/ 65119:
/*!****************************************************************!*\
  !*** ./src/app/catalogs/companies/state/companies.selector.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectCompaniesList: () => (/* binding */ selectCompaniesList),
/* harmony export */   selectCompaniesListFeature: () => (/* binding */ selectCompaniesListFeature),
/* harmony export */   selectCompanyById: () => (/* binding */ selectCompanyById),
/* harmony export */   selectCompanyByIdFeature: () => (/* binding */ selectCompanyByIdFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9310);

const selectCompaniesListFeature = state => state.companiesList;
const selectCompanyByIdFeature = state => state.companyById;
const selectCompaniesList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCompaniesListFeature,
// selectPlazas2,
state => state);
const selectCompanyById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCompanyByIdFeature,
// selectPlazas2,
state => state.company);

/***/ })

}]);