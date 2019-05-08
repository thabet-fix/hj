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

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-chat></app-chat>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HelloJob-dev';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _emploi_emploi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./emploi/emploi.component */ "./src/app/emploi/emploi.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _shared_data_exchange_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/data-exchange.service */ "./src/app/shared/data-exchange.service.ts");
/* harmony import */ var _emploi_emploi_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./emploi/emploi.service */ "./src/app/emploi/emploi.service.ts");
/* harmony import */ var _inscription_inscription_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./inscription/inscription.service */ "./src/app/inscription/inscription.service.ts");
/* harmony import */ var _utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utilisateur/utilisateur.service */ "./src/app/utilisateur/utilisateur.service.ts");
/* harmony import */ var _utilisateur_education_education_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utilisateur/education/education.service */ "./src/app/utilisateur/education/education.service.ts");
/* harmony import */ var _utilisateur_experience_experience_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./utilisateur/experience/experience.service */ "./src/app/utilisateur/experience/experience.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilisateur_utilisateur_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./utilisateur/utilisateur.component */ "./src/app/utilisateur/utilisateur.component.ts");
/* harmony import */ var _connexion_connexion_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./connexion/connexion.component */ "./src/app/connexion/connexion.component.ts");
/* harmony import */ var _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./inscription/inscription.component */ "./src/app/inscription/inscription.component.ts");
/* harmony import */ var _emploi_filtre_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./emploi/filtre.pipe */ "./src/app/emploi/filtre.pipe.ts");
/* harmony import */ var _emploi_emploi_detail_emploi_detail_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./emploi/emploi-detail/emploi-detail.component */ "./src/app/emploi/emploi-detail/emploi-detail.component.ts");
/* harmony import */ var _utilisateur_education_education_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./utilisateur/education/education.component */ "./src/app/utilisateur/education/education.component.ts");
/* harmony import */ var _utilisateur_experience_experience_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./utilisateur/experience/experience.component */ "./src/app/utilisateur/experience/experience.component.ts");
/* harmony import */ var _utilisateur_langue_langue_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./utilisateur/langue/langue.component */ "./src/app/utilisateur/langue/langue.component.ts");
/* harmony import */ var _utilisateur_langue_langue_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./utilisateur/langue/langue.service */ "./src/app/utilisateur/langue/langue.service.ts");
/* harmony import */ var _utilisateur_technologie_technologie_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./utilisateur/technologie/technologie.component */ "./src/app/utilisateur/technologie/technologie.component.ts");
/* harmony import */ var _utilisateur_technologie_technologie_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./utilisateur/technologie/technologie.service */ "./src/app/utilisateur/technologie/technologie.service.ts");
/* harmony import */ var _utilisateur_renumeration_renumeration_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./utilisateur/renumeration/renumeration.component */ "./src/app/utilisateur/renumeration/renumeration.component.ts");
/* harmony import */ var _utilisateur_renumeration_renumeration_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./utilisateur/renumeration/renumeration.service */ "./src/app/utilisateur/renumeration/renumeration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/************** Import des components ************/








/************** Import de Material ***************/










/************** Import de Firebase/Firestore *******/




/************** Import des services ****************/




















var appRoutes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'emploi', component: _emploi_emploi_component__WEBPACK_IMPORTED_MODULE_10__["EmploiComponent"] },
    { path: 'emploi/fiche/:id', component: _emploi_emploi_detail_emploi_detail_component__WEBPACK_IMPORTED_MODULE_37__["EmploiDetailComponent"] },
    { path: 'compte', component: _utilisateur_utilisateur_component__WEBPACK_IMPORTED_MODULE_33__["UtilisateurComponent"] }
];
var firebaseConfig = {
    apiKey: "AIzaSyBoYsMF0LD_ZR_oR-2ai_LV6JVh3MuF3SY",
    authDomain: "hellojob-2d944.firebaseapp.com",
    databaseURL: "https://hellojob-2d944.firebaseio.com",
    projectId: "hellojob-2d944",
    storageBucket: "hellojob-2d944.appspot.com",
    messagingSenderId: "25445548653"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["PopUpInscription"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["PopUpConnexion"],
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _emploi_emploi_component__WEBPACK_IMPORTED_MODULE_10__["EmploiComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"],
                _utilisateur_utilisateur_component__WEBPACK_IMPORTED_MODULE_33__["UtilisateurComponent"],
                _connexion_connexion_component__WEBPACK_IMPORTED_MODULE_34__["ConnexionComponent"],
                _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_35__["InscriptionComponent"],
                _emploi_filtre_pipe__WEBPACK_IMPORTED_MODULE_36__["FiltrePipe"],
                _emploi_emploi_detail_emploi_detail_component__WEBPACK_IMPORTED_MODULE_37__["EmploiDetailComponent"],
                _utilisateur_education_education_component__WEBPACK_IMPORTED_MODULE_38__["EducationComponent"],
                _utilisateur_experience_experience_component__WEBPACK_IMPORTED_MODULE_39__["ExperienceComponent"],
                _utilisateur_langue_langue_component__WEBPACK_IMPORTED_MODULE_40__["LangueComponent"],
                _utilisateur_technologie_technologie_component__WEBPACK_IMPORTED_MODULE_42__["TechnologieComponent"],
                _utilisateur_renumeration_renumeration_component__WEBPACK_IMPORTED_MODULE_44__["RenumerationComponent"]
            ],
            imports: [
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_32__["RouterModule"].forRoot(appRoutes),
                _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__["AngularFireStorageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"]
            ],
            providers: [
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _shared_data_exchange_service__WEBPACK_IMPORTED_MODULE_26__["DataExchangeService"],
                _emploi_emploi_service__WEBPACK_IMPORTED_MODULE_27__["EmploiService"],
                _inscription_inscription_service__WEBPACK_IMPORTED_MODULE_28__["InscriptionService"],
                _utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_29__["UtilisateurService"],
                _utilisateur_education_education_service__WEBPACK_IMPORTED_MODULE_30__["EducationService"],
                _utilisateur_experience_experience_service__WEBPACK_IMPORTED_MODULE_31__["ExperienceService"],
                _utilisateur_technologie_technologie_service__WEBPACK_IMPORTED_MODULE_43__["TechnologieService"],
                _utilisateur_langue_langue_service__WEBPACK_IMPORTED_MODULE_41__["LangueService"],
                _utilisateur_renumeration_renumeration_service__WEBPACK_IMPORTED_MODULE_45__["RenumerationService"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_12__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_12__["ShowOnDirtyErrorStateMatcher"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorIntl"], useClass: _emploi_emploi_component__WEBPACK_IMPORTED_MODULE_10__["EmploiComponent"] },
                { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__["StorageBucket"], useValue: 'hellojob-2d944.appspot.com' }
            ],
            entryComponents: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["PopUpInscription"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["PopUpConnexion"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"say-hello\">\r\n  <div class=\"label-hello\">\r\n    Une questions ?\r\n  </div>\r\n  <!-- /.label-hello -->\r\n  <div class=\"bulle-hello\">\r\n    SAY HELLO !\r\n  </div>\r\n  <!-- /.bulle-hello -->\r\n</div>\r\n<!-- /.say-hello -->"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/connexion/connexion.component.html":
/*!****************************************************!*\
  !*** ./src/app/connexion/connexion.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  connexion works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/connexion/connexion.component.scss":
/*!****************************************************!*\
  !*** ./src/app/connexion/connexion.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/connexion/connexion.component.ts":
/*!**************************************************!*\
  !*** ./src/app/connexion/connexion.component.ts ***!
  \**************************************************/
/*! exports provided: ConnexionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionComponent", function() { return ConnexionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnexionComponent = /** @class */ (function () {
    function ConnexionComponent() {
    }
    ConnexionComponent.prototype.ngOnInit = function () {
    };
    ConnexionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connexion',
            template: __webpack_require__(/*! ./connexion.component.html */ "./src/app/connexion/connexion.component.html"),
            styles: [__webpack_require__(/*! ./connexion.component.scss */ "./src/app/connexion/connexion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConnexionComponent);
    return ConnexionComponent;
}());



/***/ }),

/***/ "./src/app/emploi/emploi-detail/emploi-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/emploi/emploi-detail/emploi-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/emploi/emploi-detail/emploi-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/emploi/emploi-detail/emploi-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"img-header\">\r\n        <img src=\"assets/images/header-compte.jpg\" class=\"img-responsive\" alt=\"\">\r\n    </div>\r\n    <!-- /.img-header -->\r\n\r\n    <div class=\"fils-ariane\">\r\n        <a [routerLink]=\"['/']\">Accueil</a> > <a [routerLink]=\"['/emploi']\">Emploi</a> <span *ngIf=\"(item | async)?.lieu!==undefined\"> > </span> <a [routerLink]=\"\" (click)=\"onClickLieu()\">{{ (item | async)?.lieu }}</a> <span *ngIf=\"(item | async)?.secteur!==undefined\"> > </span> <a [routerLink]=\"\" (click)=\"onClickSecteur()\">{{ (item | async)?.secteur }}</a> > {{ (item | async)?.titre }}\r\n    </div>\r\n    <!-- /.fils-ariane -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n            <h1 class=\"titre-interne\" *ngIf=\"(item | async)?.titre!==undefined\">\r\n                {{ (item | async)?.titre }}\r\n            </h1>\r\n            <!-- /.titre-interne -->\r\n\r\n            <h2 class=\"sous-titre-interne\" *ngIf=\"(item | async)?.description_generale!==undefined\">\r\n                À propos de cette offre :\r\n            </h2>\r\n            <!-- /.sous-titre-interne -->\r\n\r\n            <div class=\"desc-interne\" *ngIf=\"(item | async)?.description_generale!==undefined\">\r\n                {{ (item | async)?.description_generale }}\r\n            </div>\r\n            <!-- /.desc-interne -->\r\n            \r\n            <h2 class=\"sous-titre-interne\" *ngIf=\"(item | async)?.description!==undefined\">\r\n                Descriptif du poste :\r\n            </h2>\r\n            <!-- /.sous-titre-interne -->\r\n\r\n            <div class=\"desc-interne\" *ngIf=\"(item | async)?.description!==undefined\">\r\n                {{ (item | async)?.description }}\r\n            </div>\r\n            <!-- /.desc-interne -->\r\n            \r\n            <h2 class=\"sous-titre-interne\" *ngIf=\"(item | async)?.description_profile!==undefined\">\r\n                Profil recherché :\r\n            </h2>\r\n            <!-- /.sous-titre-interne -->\r\n\r\n            <div class=\"desc-interne\" *ngIf=\"(item | async)?.description_profile!==undefined\">\r\n                {{ (item | async)?.description_profile }}\r\n            </div>\r\n            <!-- /.desc-interne -->\r\n\r\n            <div class=\"offre-similaire\">\r\n                <div class=\"titre-recherche\">\r\n                    Ces offres peuvent également vous intéresser\r\n                </div>\r\n                <!-- /.titre-recherche -->\r\n                \r\n\r\n                <div class=\"item-job\" *ngFor=\"let emploi of emplois | filtre:reactifMotCle:secteur:reactifPays:reactifContrat:reactifRenumeration | slice:0:4\">\r\n                    <div class=\"container-img-offre\"><img class=\"img-offre\" alt=\"nom de la société\" src=\"img/jobicon.png\"/></div>\r\n                    <div class=\"jobdetail\">\r\n                        <h3 class=\"titre-offre\">{{emploi.titre}}</h3>\r\n                        <span class=\"contrat-offre\">{{emploi.type_contrat}}</span>\r\n                        <span class=\"type-offre\">{{emploi.type_temp}}</span>\r\n                        <div class=\"clearfix\"></div>\r\n                        <p class=\"societe-offre\">{{emploi.partenaire}}</p>\r\n                        <p class=\"adresse-offre\">{{emploi.lieu}}</p>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <a href=\"#\" class=\"detail-offre\">+ Détails</a>\r\n                </div>\r\n                <!-- /.item-job -->\r\n\r\n                \r\n            </div>\r\n            <!-- /.offre-similaire -->\r\n\r\n        </div>\r\n        <!-- /.col-sm-8 -->\r\n\r\n        <div class=\"col-sm-4\">\r\n            \r\n            <div class=\"job-infos-cles\">\r\n                <div class=\"titre-infos\">\r\n                    INFOS CL&Eacute;S\r\n                </div>\r\n                <!-- /.titre-infos -->\r\n                <div class=\"sous-titre-infos\" *ngIf=\"(item | async)?.lieu!==undefined\">\r\n                    <span>Lieu de poste</span>\r\n                    {{ (item | async)?.lieu }}\r\n                </div>\r\n                <!-- /.sous-titre-infos -->\r\n                <div class=\"sous-titre-infos\" *ngIf=\"(item | async)?.type_contrat!==undefined\">\r\n                    <span>Type de contrat</span>\r\n                    {{ (item | async)?.type_contrat }}\r\n                </div>\r\n                <!-- /.sous-titre-infos -->\r\n                <div class=\"sous-titre-infos\" *ngIf=\"(item | async)?.renumeration!==undefined\">\r\n                    <span>Salaire</span>\r\n                    {{ (item | async)?.renumeration }}\r\n                </div>\r\n                <!-- /.sous-titre-infos -->\r\n                <div class=\"sous-titre-infos\" *ngIf=\"(item | async)?.secteur!==undefined\">\r\n                    <span>Secteur d'activité</span>\r\n                    {{ (item | async)?.secteur }}\r\n                </div>\r\n                <!-- /.sous-titre-infos -->\r\n                <div class=\"sous-titre-infos\" *ngIf=\"(item | async)?.niveau_etude!==undefined\">\r\n                    <span>Niveau d'études</span>\r\n                    {{ (item | async)?.niveau_etude }}\r\n                </div>\r\n                <!-- /.sous-titre-infos -->\r\n                <div class=\"sous-titre-infos\" *ngIf=\"(item | async)?.experience!==undefined\">\r\n                    <span>Niveau de poste</span>\r\n                    {{ (item | async)?.experience }}\r\n                </div>\r\n                <!-- /.sous-titre-infos -->\r\n                <div class=\"btn-infos\">\r\n                    <button class=\"waves-effect waves-light btn\">Postuler</button>\r\n                </div>\r\n                <!-- /.btn-infos -->\r\n                \r\n            </div>\r\n            <!-- /.job-infos-cles -->\r\n            <div class=\"partage-annonce\">\r\n                Partagez cette offre\r\n                <div class=\"footer-follow\">\r\n                    <a href=\"#\"><i class=\"fa fa-envelope\"></i></a>\r\n                    <a href=\"#\"><i class=\"fa fa-facebook-f\"></i></a>\r\n                    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n                </div>\r\n            </div>\r\n            <!-- /.partage-annonce -->\r\n            <div class=\"inscription-mobile\">\r\n                <a href=\"\"><img src=\"img/newsletter-mobile.jpg\" class=\"img-responsive\" alt=\"\"></a>\r\n            </div>\r\n            <!-- /.inscription-mobile -->\r\n            <div class=\"inscription-mobile\">\r\n                <a href=\"\"><img src=\"img/inscription-mobile.jpg\" class=\"img-responsive\" alt=\"\"></a>\r\n            </div>\r\n            <!-- /.inscription-mobile -->\r\n            \r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n\r\n    </div>\r\n    <!-- /.row -->\r\n    \r\n    \r\n</div>\r\n<!-- /.container -->\r\n\r\n<div class=\"barre-annonce\">\r\n        <button class=\"waves-effect waves-light btn btn-gris\" (click)=\"onClickEmploi()\">Retour à la recherche</button>\r\n        <button class=\"waves-effect waves-light btn btn-gris\" (click)=\"onClickSecteur()\">Offres Similaires</button>\r\n        <button class=\"waves-effect waves-light btn\">Postuler à cette offre</button>\r\n        <a class=\"btn-floating btn-medium waves-effect waves-light rouge\"><i class=\"tiny-size material-icons\">favorite</i></a> <span>Sauvegarder</span>\r\n        <a class=\"btn-floating btn-medium waves-effect waves-light rouge\"><i class=\"tiny-size material-icons\">local_printshop</i></a> <span>Imprimer</span>\r\n</div>\r\n<!-- /.barre-annonce -->"

/***/ }),

/***/ "./src/app/emploi/emploi-detail/emploi-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/emploi/emploi-detail/emploi-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmploiDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploiDetailComponent", function() { return EmploiDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emploi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emploi.service */ "./src/app/emploi/emploi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmploiDetailComponent = /** @class */ (function () {
    function EmploiDetailComponent(router, route, emploiService) {
        this.router = router;
        this.route = route;
        this.emploiService = emploiService;
    }
    EmploiDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.item = this.emploiService.getEmploi();
        this.item.subscribe(function (datas) {
            console.log("datas", datas);
            _this.lieu = datas.lieu;
            _this.secteur = datas.secteur;
        }, function (err) { console.log("probleme : ", err); });
        this.emploiService.emploisChanged
            .subscribe(function (emplois) {
            _this.emplois = emplois;
        });
        this.emploiService.getEmplois();
    };
    EmploiDetailComponent.prototype.onClickLieu = function () {
        this.emploiService.setTmpPays(this.lieu);
        this.emploiService.setTmpSecteur(undefined);
        this.router.navigate(['./emploi']);
    };
    EmploiDetailComponent.prototype.onClickSecteur = function () {
        this.emploiService.setTmpPays(undefined);
        this.emploiService.setTmpSecteur(this.secteur);
        this.router.navigate(['./emploi']);
    };
    EmploiDetailComponent.prototype.onClickEmploi = function () {
        this.router.navigate(['./emploi']);
    };
    EmploiDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emploi-detail',
            template: __webpack_require__(/*! ./emploi-detail.component.html */ "./src/app/emploi/emploi-detail/emploi-detail.component.html"),
            styles: [__webpack_require__(/*! ./emploi-detail.component.css */ "./src/app/emploi/emploi-detail/emploi-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _emploi_service__WEBPACK_IMPORTED_MODULE_2__["EmploiService"]])
    ], EmploiDetailComponent);
    return EmploiDetailComponent;
}());



/***/ }),

/***/ "./src/app/emploi/emploi.component.html":
/*!**********************************************!*\
  !*** ./src/app/emploi/emploi.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"container\">\r\n        <div class=\"img-header\">\r\n            <img src=\"assets/images/header-liste.jpg\" class=\"img-responsive\" alt=\"\">\r\n        </div>\r\n        <!-- /.img-header -->\r\n        <h1 class=\"titre-page\">\r\n            <span>\r\n                Nous avons trouvé {{ (emplois | filtre:reactifMotCle:reactifSecteur:reactifPays:reactifContrat:reactifRenumeration:reactifExperience)?.length }}\r\n                <span *ngIf=\"(emplois | filtre:reactifMotCle:reactifSecteur:reactifPays:reactifContrat:reactifRenumeration:reactifExperience)?.length < 2, else plusieur;\">offre</span> \r\n                <ng-template #plusieur>offres</ng-template> \r\n                d'emploi pour vous\r\n            </span>\r\n            \r\n        </h1>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 filtre-recherche\">\r\n                <form #formFiltreEmploi=\"ngForm\" (ngSubmit)=\"onClickChercher(formFiltreEmploi)\">\r\n                  <div class=\"titre-recherche\">\r\n                      Recherche d'emploi\r\n                  </div>\r\n                  <!-- /.titre-recherche -->\r\n                  <mat-chip-list #chipList>\r\n                    <mat-chip *ngFor=\"let chipFilter of chipsFilter; let i = index\"  \r\n                        [removable]=\"removable\"\r\n                        (removed)=\"remove(formFiltreEmploi,i,chipFilter.type)\">\r\n                        {{chipFilter.critere}}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                    </mat-chip>\r\n                  </mat-chip-list><br>\r\n                  <mat-form-field class=\"validate white\">\r\n                    <input matInput placeholder=\"Mots-clé ...\" name=\"tmpMotCleInput\" [(ngModel)]=\"reactifMotCle\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select name=\"tmpSecteurInput\" placeholder=\"Secteur ..\" [(ngModel)]=\"reactifSecteur\" (selectionChange)=\"onChangeSelect(formFiltreEmploi,'reactifSecteur')\">\r\n                      <mat-option [value]=\"undefined\" selected>-- Tous les secteurs --</mat-option>\r\n                      <mat-option [value]=\"secteur[0].secteur\" *ngFor=\"let secteur of secteurs\"\r\n                      >{{ secteur[0].secteur }}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select name=\"tmpTypeEmploiInput\" placeholder=\"Contrat de type ..\" [(ngModel)]=\"reactifContrat\" (selectionChange)=\"onChangeSelect(formFiltreEmploi,'reactifContrat')\">\r\n                      <mat-option [value]=\"undefined\" selected>-- Tous les types --</mat-option>\r\n                      <mat-option [value]=\"typeEmploi[0].type_contrat\" *ngFor=\"let typeEmploi of typeEmplois\">{{ typeEmploi[0].type_contrat }}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select name=\"tmpPaysInput\" placeholder=\"Emplacement ..\" [(ngModel)]=\"reactifPays\" (selectionChange)=\"onChangeSelect(formFiltreEmploi,'reactifPays')\">\r\n                        <mat-option [value]=\"undefined\" selected>-- Tous les pays --</mat-option>\r\n                        <mat-option [value]=\"lieu[0].lieu\" *ngFor=\"let lieu of lieux\">{{ lieu[0].lieu }}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select name=\"tmpRenumerationInput\" placeholder=\"Rémunération ..\" [(ngModel)]=\"reactifRenumeration\" (selectionChange)=\"onChangeSelect(formFiltreEmploi,'reactifRenumeration')\">\r\n                      <mat-option [value]=\"undefined\" selected>-- Toutes les rénumérations --</mat-option>\r\n                      <mat-option [value]=\"renumeration[0].renumeration\" *ngFor=\"let renumeration of renumerations\">{{ renumeration[0].renumeration }}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select name=\"tmpExperienceInput\" placeholder=\"Niveau d'expérience ..\" [(ngModel)]=\"reactifExperience\" (selectionChange)=\"onChangeSelect(formFiltreEmploi,'reactifExperience')\">\r\n                      <mat-option [value]=\"undefined\" selected>-- Tous les expériences --</mat-option>\r\n                      <mat-option [value]=\"experience[0].experience\" *ngFor=\"let experience of experiences\">{{ experience[0].experience }}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"input-group\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-12 right\">\r\n                            <button type=\"submit\" class=\"bg-rouge\" mat-button color=\"warn\" mat-raised-button (click)=\"onClickReset()\">\r\n                                Réinitialiser <i class=\"fa fa-search\"></i>\r\n                            </button>\r\n                          </div>\r\n                          <!-- /.col-xs-6 -->\r\n                      </div>\r\n                      <!-- /.row -->\r\n                  </div>\r\n                  <!-- /.input-group -->\r\n                </form>  \r\n                <div class=\"titre-recherche\">\r\n                    Emplois par secteur\r\n                </div>\r\n                <!-- /.titre-recherche -->\r\n                <div class=\"bloc-secteur\">\r\n                    <div class=\"un-secteur\" *ngFor=\"let secteur of secteurs\">\r\n                        <a [routerLink]=\"\" [className]=\"reactifSecteur === secteur[0].secteur ? 'strong' : ''\" (click)=\"reactifSecteur = secteur[0].secteur\">\r\n                            <label>{{ secteur[0].secteur }}</label>\r\n                            <span class=\"nbr-secteur\">({{ secteur.length }})</span>\r\n                            <span class=\"clearfix\"></span>\r\n                        </a>                        \r\n                    </div>\r\n                    <!-- /.un-secteur -->\r\n                </div>\r\n                <!-- /.bloc-secteur -->\r\n                <div class=\"voir-tous\">\r\n                    <a [routerLink]=\"\" (click)=\"reactifSecteur = undefined\">Voir tout</a>\r\n                </div>\r\n                <!-- /.voir-tous -->\r\n                <div class=\"inscription-mobile\">\r\n                    <a href=\"\"><img src=\"assets/images/inscription-mobile.jpg\" class=\"img-responsive\" alt=\"\"></a>\r\n                </div>\r\n                <!-- /.inscription-mobile -->\r\n            </div>\r\n            <!-- /.col-sm-4 -->\r\n            <div class=\"col-sm-8\">\r\n                \r\n\r\n                <div class=\"container-result\">\r\n                    <div class=\"filter-liste\">\r\n                        <button class=\"waves-effect waves-light btn\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i> M'envoyer des offres pareils</button>\r\n                    </div>\r\n                    <!-- /.filter-liste -->\r\n                    <mat-paginator [length]=\"(emplois | filtre:reactifMotCle:reactifSecteur:reactifPays:reactifContrat:reactifRenumeration:reactifExperience)?.length\"\r\n                            [pageSize]=\"pageSize\"\r\n                            [pageSizeOptions]=\"pageSizeOptions\"\r\n                            (page)=\"pageEvent = getPaginationData($event)\">\r\n                    </mat-paginator>\r\n                    <div class=\"job-liste\" *ngIf=\"emplois; let emplois; else loading\">\r\n                        <div class=\"une-offre\" *ngFor=\"let emploi of emplois | filtre:reactifMotCle:reactifSecteur:reactifPays:reactifContrat:reactifRenumeration:reactifExperience | slice:pageIndex*pageSize:pageIndex*pageSize+pageSize\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-9 col-sm-8\">\r\n                                    <h2 class=\"titre-liste\">\r\n                                        {{ emploi.titre }}\r\n                                    </h2>\r\n                                    <!-- /.titre-liste -->\r\n                                    <div class=\"desc-liste\">\r\n                                        {{ emploi.descriptionTronque }}\r\n                                    </div>\r\n                                    <!-- /.desc-liste -->\r\n                                    <div class=\"type-liste\">\r\n                                        {{ emploi.lieu }} - <span>{{ emploi.secteur }}</span>\r\n                                    </div>\r\n                                    <!-- /.type-liste -->\r\n                                    <!--<div class=\"adresse-liste\">\r\n                                        16 rue tarek ibn zied، menzeh 5 - 2091\r\n                                    </div>-->\r\n                                    <!-- /.adresse-liste -->\r\n                                    <div class=\"partage-offre\">\r\n                                        <a href=\"#\"><i class=\"material-icons left\">email</i> Envoyer à un ami</a>\r\n                                        <a href=\"#\"><i class=\"material-icons left\">favorite</i> Enregistrer</a>\r\n                                        <a href=\"#\"><i class=\"material-icons left\">share</i> Partager</a>\r\n                                    </div>\r\n                                    <!-- /.partage-offre -->\r\n                                </div>\r\n                                <!-- /.col-md-9 col-sm-8 -->\r\n                                <div class=\"col-md-3 col-sm-4\">\r\n                                    <button class=\"bg-rouge color-blanc\" mat-button mat-raised-button (click)=\"onClickAfficherPlus(emploi.$key, emploi.titre)\">\r\n                                        Afficher plus\r\n                                    </button>\r\n                                </div>\r\n                                <!-- /.col-md-3 col-sm-4 -->\r\n                            </div>\r\n                            <!-- /.row -->\r\n                        </div>\r\n                        <!-- /.une-offre -->\r\n                        <ng-template #loading>Chargement des emplois&hellip;</ng-template>\r\n                        \r\n                    </div>\r\n                    <!-- /.job-liste -->\r\n                    \r\n                </div>\r\n                <!-- /.container-result -->\r\n                \r\n                \r\n            </div>\r\n            <!-- /.col-sm-8 -->\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    <!-- /.container -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/emploi/emploi.component.scss":
/*!**********************************************!*\
  !*** ./src/app/emploi/emploi.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/emploi/emploi.component.ts":
/*!********************************************!*\
  !*** ./src/app/emploi/emploi.component.ts ***!
  \********************************************/
/*! exports provided: EmploiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploiComponent", function() { return EmploiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _emploi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emploi.service */ "./src/app/emploi/emploi.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmploiComponent = /** @class */ (function (_super) {
    __extends(EmploiComponent, _super);
    function EmploiComponent(emploiService, router, route) {
        var _this = _super.call(this) || this;
        _this.emploiService = emploiService;
        _this.router = router;
        _this.route = route;
        _this.reactifMotCle = _this.emploiService.getTmpMotCle();
        _this.reactifSecteur = _this.emploiService.getTmpSecteur();
        _this.reactifPays = _this.emploiService.getTmpPays();
        _this.reactifContrat = _this.emploiService.getTmpContrat();
        _this.reactifRenumeration = _this.emploiService.getTmpRenumeration();
        _this.reactifExperience = _this.emploiService.getTmpExperience();
        _this.length = 100;
        _this.pageIndex = 0;
        _this.pageSize = 5;
        _this.pageSizeOptions = [5, 10, 25, 100];
        _this.itemsPerPageLabel = 'Offres par page';
        _this.nextPageLabel = 'Page suivante';
        _this.previousPageLabel = 'Page précédente';
        /******* Chips Filter */
        _this.visible = true;
        _this.selectable = true;
        _this.removable = true;
        _this.chipsFilter = [];
        return _this;
    }
    EmploiComponent.prototype.getPaginationData = function (event) {
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        return event;
    };
    EmploiComponent.prototype.remove = function (form, item, type) {
        this.chipsFilter.splice(item, 1);
        console.log(type);
        switch (type) {
            case 'reactifSecteur': {
                this.emploiService.setTmpSecteur(undefined);
                this.reactifSecteur = undefined;
                break;
            }
            case 'reactifPays': {
                this.emploiService.setTmpPays(undefined);
                this.reactifPays = undefined;
                break;
            }
            case 'reactifContrat': {
                this.emploiService.setTmpContrat(undefined);
                this.reactifContrat = undefined;
                break;
            }
            case 'reactifRenumeration': {
                this.emploiService.setTmpContrat(undefined);
                this.reactifRenumeration = undefined;
                break;
            }
            case 'reactifExperience': {
                this.emploiService.setTmpContrat(undefined);
                this.reactifExperience = undefined;
                break;
            }
            default: {
                break;
            }
        }
    };
    EmploiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emploiSubscription = this.emploiService.emploisChanged
            .subscribe(function (emplois) {
            _this.emplois = emplois;
            console.log(emplois);
            _this.secteurs = Object.values(_this.groupBy(_this.emplois.filter(function (data) {
                return data.secteur !== undefined;
            }), 'secteur')); //on filtre les enregistrement undefined avec la fonction .filter puis on applique le groupBy
            _this.lieux = Object.values(_this.groupBy(_this.emplois.filter(function (data) {
                return data.lieu !== undefined;
            }), 'lieu'));
            _this.typeEmplois = Object.values(_this.groupBy(_this.emplois.filter(function (data) {
                return data.type_contrat !== undefined;
            }), 'type_contrat'));
            _this.renumerations = Object.values(_this.groupBy(_this.emplois.filter(function (data) {
                return data.renumeration !== undefined;
            }), 'renumeration'));
            _this.experiences = Object.values(_this.groupBy(_this.emplois.filter(function (data) {
                return data.experience !== undefined;
            }), 'experience'));
            _this.initChipsFilter();
        });
        this.emploiService.getEmplois();
    };
    EmploiComponent.prototype.initChipsFilter = function () {
        this.addChipsFilter(this.reactifSecteur, "reactifSecteur");
        this.addChipsFilter(this.reactifPays, "reactifPays");
        this.addChipsFilter(this.reactifContrat, "reactifContrat");
        this.addChipsFilter(this.reactifRenumeration, "reactifRenumeration");
        this.addChipsFilter(this.reactifExperience, "reactifExperience");
    };
    EmploiComponent.prototype.addChipsFilter = function (critere, type) {
        this.chipsFilter.map(function (item, index, array) {
            if (item.type.indexOf(type) === 0) {
                array.splice(index, 1);
            }
        });
        if (critere !== undefined)
            this.chipsFilter.push({ "critere": critere, "type": type });
    };
    EmploiComponent.prototype.onChangeSelect = function (form, type) {
        switch (type) {
            case 'reactifSecteur': {
                this.emploiService.setTmpSecteur(form.value.tmpSecteurInput ? form.value.tmpSecteurInput : undefined);
                this.addChipsFilter(this.reactifSecteur, "reactifSecteur");
                break;
            }
            case 'reactifPays': {
                this.emploiService.setTmpPays(form.value.tmpPaysInput ? form.value.tmpPaysInput : undefined);
                this.addChipsFilter(this.reactifPays, "reactifPays");
                break;
            }
            case 'reactifContrat': {
                this.emploiService.setTmpContrat(form.value.tmpTypeEmploiInput ? form.value.tmpTypeEmploiInput : undefined);
                this.addChipsFilter(this.reactifContrat, "reactifContrat");
                break;
            }
            case 'reactifRenumeration': {
                this.emploiService.setTmpContrat(form.value.tmpRenumerationInput ? form.value.tmpRenumerationInput : undefined);
                this.addChipsFilter(this.reactifRenumeration, "reactifRenumeration");
                break;
            }
            case 'reactifExperience': {
                this.emploiService.setTmpContrat(form.value.tmpExperienceInput ? form.value.tmpExperienceInput : undefined);
                this.addChipsFilter(this.reactifExperience, "reactifExperience");
                break;
            }
            default: {
                break;
            }
        }
    };
    EmploiComponent.prototype.onClickAfficherPlus = function (idEmploi, titreEmploi) {
        this.emploiService.setIdEmploi(idEmploi);
        this.router.navigate(['fiche/' + titreEmploi], { relativeTo: this.route });
    };
    EmploiComponent.prototype.onClickReset = function () {
        this.formFiltreEmploi.reset();
        this.chipsFilter = [];
    };
    EmploiComponent.prototype.onClickRemove = function () {
        console.log("essai");
        this.visible = false;
    };
    EmploiComponent.prototype.groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], EmploiComponent.prototype, "formFiltreEmploi", void 0);
    EmploiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emploi',
            template: __webpack_require__(/*! ./emploi.component.html */ "./src/app/emploi/emploi.component.html"),
            styles: [__webpack_require__(/*! ./emploi.component.scss */ "./src/app/emploi/emploi.component.scss")]
        }),
        __metadata("design:paramtypes", [_emploi_service__WEBPACK_IMPORTED_MODULE_1__["EmploiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EmploiComponent);
    return EmploiComponent;
}(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorIntl"]));



/***/ }),

/***/ "./src/app/emploi/emploi.service.ts":
/*!******************************************!*\
  !*** ./src/app/emploi/emploi.service.ts ***!
  \******************************************/
/*! exports provided: EmploiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploiService", function() { return EmploiService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmploiService = /** @class */ (function () {
    function EmploiService(afs) {
        this.afs = afs;
        this.emploisChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.emploiChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.nbrEmploisChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tmpSecteurObs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    EmploiService.prototype.getEmplois = function () {
        var _this = this;
        //return this.afs.collection('emplois').valueChanges();
        return this.afs.collection('emplois')
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id, descriptionTronque: action.payload.doc.data().description ? _this.truncateText(action.payload.doc.data().description, 100, '..') : '' }, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.emploisLocalTmp = response;
            _this.emploisChanged.next(_this.emploisLocalTmp.slice()); // spread operator to create a copy
        });
    };
    EmploiService.prototype.setIdEmploi = function (idEmploi) {
        this.tmpIdEmploi = idEmploi;
    };
    EmploiService.prototype.getEmploi = function () {
        return this.afs.doc('emplois/' + this.tmpIdEmploi).valueChanges();
    };
    /*getEmploisParSecteur(){
        return this.afs.collection<any>('emplois', ref => ref.where('secteur', '==', 'Développement Mobile'))
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
            })
            .subscribe(
                (response: Emploi[]) => {
                    this.emploisLocalTmp = response;
                    this.emploisChanged.next([...this.emploisLocalTmp]); // spread operator to create a copy
                }
            );
    }

    getEmploisParCritere(motCle: String, secteur: String, pays:String) {
      
        // return this.afs.collection<any>('emplois', ref => ref.where('titre', '==', motCle?motCle:null).where('secteur', '==', secteur?secteur:null).where('lieu', '==', pays?pays:null))
        return this.afs.collection<any>('emplois', ref =>
            {
            let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
            if (motCle!=="") { query = query.where('titre', '==', motCle) };
            if (secteur!=="") { query = query.where('secteur', '==', secteur) };
            if (pays!=="") { query = query.where('lieu', '==', pays) };
            return query;
          })
        
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
            })
            .subscribe(
                (response: Emploi[]) => {
                    this.emploisLocalTmp = response;
                    this.emploisChanged.next([...this.emploisLocalTmp]); // spread operator to create a copy
                }
            );

            
    }*/
    EmploiService.prototype.getTmpMotCle = function () {
        return this.tmpMotCle;
    };
    EmploiService.prototype.getTmpSecteur = function () {
        return this.tmpSecteur;
    };
    EmploiService.prototype.getTmpSecteurObs = function () {
        this.tmpSecteurObs.next(this.tmpSecteur);
        return this.tmpSecteur;
    };
    EmploiService.prototype.getTmpPays = function () {
        return this.tmpPays;
    };
    EmploiService.prototype.getTmpContrat = function () {
        return this.tmpContrat;
    };
    EmploiService.prototype.getTmpRenumeration = function () {
        return this.tmpRenumeration;
    };
    EmploiService.prototype.getTmpExperience = function () {
        return this.tmpExperience;
    };
    EmploiService.prototype.setTmpMotCle = function (tmpMotCle) {
        this.tmpMotCle = tmpMotCle;
    };
    EmploiService.prototype.setTmpSecteur = function (tmpSecteur) {
        this.tmpSecteur = tmpSecteur;
    };
    EmploiService.prototype.setTmpPays = function (tmpPays) {
        this.tmpPays = tmpPays;
    };
    EmploiService.prototype.setTmpContrat = function (tmpContrat) {
        this.tmpContrat = tmpContrat;
    };
    EmploiService.prototype.setTmpRenumeration = function (tmpRenumeration) {
        this.tmpRenumeration = tmpRenumeration;
    };
    EmploiService.prototype.setTmpExperience = function (tmpExperience) {
        this.tmpExperience = tmpExperience;
    };
    EmploiService.prototype.truncateText = function (str, length, ending) {
        if (length == null) {
            length = 100;
        }
        if (ending == null) {
            ending = '...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        }
        else {
            return str;
        }
    };
    ;
    EmploiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]])
    ], EmploiService);
    return EmploiService;
}());



/***/ }),

/***/ "./src/app/emploi/filtre.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/emploi/filtre.pipe.ts ***!
  \***************************************/
/*! exports provided: FiltrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrePipe", function() { return FiltrePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltrePipe = /** @class */ (function () {
    function FiltrePipe() {
    }
    FiltrePipe.prototype.transform = function (emplois, reactifMotCle, reactifSecteur, reactifPays, reactifContrat, reactifRenumeration, reactifExperience) {
        if (emplois === undefined || (reactifMotCle === undefined && reactifSecteur === undefined && reactifPays === undefined && reactifContrat === undefined && reactifRenumeration === undefined && reactifExperience === undefined)) {
            return emplois;
        }
        else {
            return emplois.filter(function (item) {
                if ((item.titre === undefined && reactifMotCle) || (reactifMotCle && item.titre.toLowerCase().indexOf(reactifMotCle.toLowerCase()) === -1)) {
                    return false;
                }
                else if ((item.secteur === undefined && reactifSecteur) || (reactifSecteur && item.secteur.indexOf(reactifSecteur) === -1)) {
                    return false;
                }
                else if ((item.lieu === undefined && reactifPays) || (reactifPays && item.lieu.indexOf(reactifPays) === -1)) {
                    return false;
                }
                else if ((item.type_contrat === undefined && reactifContrat) || (reactifContrat && item.type_contrat.indexOf(reactifContrat) === -1)) {
                    return false;
                }
                else if ((item.renumeration === undefined && reactifRenumeration) || (reactifRenumeration && item.renumeration.indexOf(reactifRenumeration) === -1)) {
                    return false;
                }
                else if ((item.experience === undefined && reactifExperience) || (reactifExperience && item.experience.indexOf(reactifExperience) === -1)) {
                    return false;
                }
                else {
                    return true;
                }
            });
        }
    };
    FiltrePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filtre'
        })
    ], FiltrePipe);
    return FiltrePipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"col-md-12 col-xs-12 top-footer\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"logo-footer col-md-4\">\r\n        <img src=\"assets/images/helloJOB-principal.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-4 footer-col\">\r\n\r\n        <div class=\"bg-title-footer\">\r\n        </div>\r\n        <div class=\"footer-description\">\r\n          <span>\r\n            Hellojob.tn est le site d'emploi leader en Tunisie et en Afrique du Nord qui relie les chercheurs d'emploi aux employeurs\r\n            cherchant à embaucher. Les meilleurs employeurs dans la région ajoutent quotidiennement des centaines de nouveaux\r\n            emplois vacants sur la plateforme primée.\r\n          </span>\r\n        </div>\r\n        <div class=\"bg-title-footer titre-reseaux\">\r\n          <span class=\"title-footer-red\">suivez nous</span>\r\n        </div>\r\n        <div class=\"footer-follow\">\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-facebook-f\"></i>\r\n          </a>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-twitter\"></i>\r\n          </a>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-google\"></i>\r\n          </a>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-instagram\"></i>\r\n          </a>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-youtube\"></i>\r\n          </a>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-pinterest\"></i>\r\n          </a>\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-rss\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\" col-md-4  footer-col\">\r\n        <div class=\"bg-title-footer\">\r\n          <span class=\"title-footer-black\">liens rapides</span>\r\n        </div>\r\n        <ul class=\"menu-footer\">\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-angle-right\"></i>Inscription</a>\r\n          </li>\r\n\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-angle-right\"></i>Mon espace</a>\r\n          </li>\r\n\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-angle-right\"></i>Hello sur mobile</a>\r\n          </li>\r\n\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-angle-right\"></i>offre à la une </a>\r\n          </li>\r\n\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-angle-right\"></i>inscription newslettre</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-angle-right\"></i>Completer Votre cv</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"col-md-4  footer-col\">\r\n        <div class=\"container-facebook\">\r\n          <img src=\"assets/images/likebox.png\" class=\"img-responsive\" alt=\"\">\r\n        </div>\r\n        <a href=\"#\" class=\"to-top\">\r\n          <i class=\"fa fa-angle-up\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <!-- row -->\r\n\r\n  </div>\r\n  <!-- container -->\r\n  <div class=\"row footerlink\">\r\n    <p>Copyright &copy; 2018, HELLOJOB.TN |\r\n      <a href=\"#\">Privacy Policy</a> |\r\n      <a href=\"#\">Terms & Conditions</a>\r\n    </p>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-findcond\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n        <img id=\"logo\" class=\"img-responsive\" src=\"assets/images/helloJOB-principal.png\">\r\n      </a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a [routerLink]=\"['/emploi']\" class=\"animation\">No offres\r\n          </a>\r\n        </li>\r\n        <li class=\"active\" *ngIf=\"!isAuthenticated\">\r\n          <a [routerLink]=\"\" class=\"animation\" (click)=\"openDialog()\">Inscription\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"active\" *ngIf=\"!isAuthenticated\">\r\n          <a [routerLink]=\"\" class=\"animation\" (click)=\"openDialogConnexion()\">Connexion\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"active\" *ngIf=\"isAuthenticated\">\r\n          <a [routerLink]=\"['/compte']\" class=\"animation\">Mon Compte\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n\r\n      </ul>\r\n\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inscription_inscription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inscription/inscription.service */ "./src/app/inscription/inscription.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(inscriptionService, dialog) {
        this.inscriptionService = inscriptionService;
        this.dialog = dialog;
        this.isAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.inscriptionService.authChange.subscribe(function (authStatus) {
            _this.isAuthenticated = authStatus;
        });
    };
    HeaderComponent.prototype.openDialogConnexion = function () {
        var dialogRef = this.dialog.open(_home_home_component__WEBPACK_IMPORTED_MODULE_3__["PopUpConnexion"], {
            width: '50%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog connexion was closed');
        });
    };
    HeaderComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_home_home_component__WEBPACK_IMPORTED_MODULE_3__["PopUpInscription"], {
            width: '50%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_inscription_inscription_service__WEBPACK_IMPORTED_MODULE_1__["InscriptionService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div class=\"show\">\r\n    <div class=\"container\">\r\n      <div class=\"overlay\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"jobtext\">\r\n              <p class=\"first\">Votre Carriére en une simple recherche</p>\r\n              <p class=\"secand\">Trouvez votre job en une minute</p>\r\n              <p class=\"third\">{{ (emplois | filtre:reactifMotCle:reactifSecteur:reactifPays:reactifContrat:reactifRenumeration:reactifExperience)?.length }} jobs disponibles</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <form #formEmploi=\"ngForm\" class=\"recherche-home\" (ngSubmit)=\"onClickChercher(formEmploi)\">\r\n          <div class=\"row form\">\r\n            <div class=\"col-md-5\">\r\n              <mat-form-field class=\"validate white\">\r\n                <input matInput placeholder=\"Mots-clé ...\" ngModel name=\"tmpMotCleInput\" [(ngModel)]=\"reactifMotCle\">\r\n              </mat-form-field>\r\n            </div>            \r\n            <div class=\"col-md-3\">\r\n              <mat-form-field>\r\n                <mat-select ngModel name=\"tmpSecteurInput\" placeholder=\"Secteur ..\" [(ngModel)]=\"reactifSecteur\">\r\n                  <mat-option [value]=\"undefined\" selected>-- Tous les secteurs --</mat-option>\r\n                  <mat-option [value]=\"secteur[0].secteur\" *ngFor=\"let secteur of secteurs\">{{ secteur[0].secteur }}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <mat-form-field>\r\n                <mat-select ngModel name=\"tmpPaysInput\" placeholder=\"Pays ..\" [(ngModel)]=\"reactifPays\">\r\n                  <mat-option [value]=\"undefined\" selected>-- Tous les pays --</mat-option>\r\n                  <mat-option [value]=\"lieu[0].lieu\" *ngFor=\"let lieu of lieux\">{{ lieu[0].lieu }}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <button mat-button class=\"btn-recherche-home\">\r\n                  Chercher <i class=\"fa fa-search\"></i>\r\n              </button>\r\n              <a href=\"#rechercheAvancee\" class=\"recherche-avancee\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-controls=\"rechercheAvancee\">Recherche avancée</a>\r\n              \r\n              \r\n            </div>\r\n          </div>\r\n          <div class=\"collapse\" id=\"rechercheAvancee\">\r\n            <div class=\"well\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <mat-form-field>\r\n                    <mat-select name=\"tmpTypeEmploiInput\" placeholder=\"Contrat de type ..\" [(ngModel)]=\"reactifContrat\">\r\n                      <mat-option [value]=\"undefined\" selected>-- Tous les types --</mat-option>\r\n                      <mat-option [value]=\"typeEmploi[0].type_contrat\" *ngFor=\"let typeEmploi of typeEmplois\">{{ typeEmploi[0].type_contrat }}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <mat-form-field>\r\n                    <mat-select name=\"tmpRenumerationInput\" placeholder=\"Rémunération ..\" [(ngModel)]=\"reactifRenumeration\">\r\n                      <mat-option [value]=\"undefined\" selected>-- Toutes les rénumérations --</mat-option>\r\n                      <mat-option [value]=\"renumeration[0].renumeration\" *ngFor=\"let renumeration of renumerations\">{{ renumeration[0].renumeration }}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <mat-form-field>\r\n                    <mat-select name=\"tmpExperienceInput\" placeholder=\"Niveau d'expérience ..\" [(ngModel)]=\"reactifExperience\">\r\n                        <mat-option [value]=\"undefined\" selected>-- Tous les expériences --</mat-option>    \r\n                      <mat-option [value]=\"experience[0].experience\" *ngFor=\"let experience of experiences\">{{ experience[0].experience }}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <!-- /.row -->\r\n            </div>\r\n          </div>\r\n        </form>\r\n        \r\n      </div>\r\n      <div id=\"Carousel\" class=\"carousel slide\">     \r\n        <!-- Carousel items -->\r\n        <div class=\"carousel-inner\">\r\n          <!-- TODO gestion Item ! -->\r\n          <ng-container *ngFor=\"let item of emploisGroupedBySecteur; let i = index\">\r\n            <div class=\"item\" [ngClass]=\"{'active': i === 0 }\" *ngIf=\"i%4===0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\" *ngFor=\"let emploiGrouped of emploisGroupedBySecteur|slice:i:i + 4; let j = index\">\r\n                  <div class=\"slidesilk\">\r\n                    <div class=\"item-slide\">\r\n                      <p class=\"link-item\">\r\n                        <i class=\"fa fa-ellipsis-h\"></i>\r\n                      </p>\r\n                      <p class=\"secteur\">{{ emploiGrouped[0].secteur }}</p>\r\n                      <p class=\"offre-count\">{{ emploiGrouped.length }} Offre</p>\r\n                    </div>\r\n                  </div>\r\n                  <!-- slidesilk -->\r\n                </div>\r\n                <!-- col-md-3 -->\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n          \r\n          \r\n          \r\n        </div><!--.carousel-inner-->\r\n        <!--.carousel-inner-->\r\n        <span data-slide=\"prev\" (click)=\"onClickPrevC1()\" class=\"left carousel-control\">‹</span>\r\n        <span data-slide=\"next\" (click)=\"onClickNextC1()\" class=\"right carousel-control\">›</span>\r\n      \r\n      </div><!--.Carousel-->\r\n    </div>\r\n    <!-- /.container -->\r\n\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"note\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <p>Vous cherchez un job?\r\n            <span class=\"recherche\">Dites</span>\r\n            <span class=\"hello\">HELLO </span>\r\n            <span class=\"recherche\">! On s'occupe du reste !</span>\r\n          </p>\r\n          <span class=\"download-txt\">Téléchargez votre CV pour postuler facilement aux offres d'emploi</span>\r\n        </div>\r\n        <div class=\"col-md-2 col-xs-6\">\r\n          <button *ngIf=\"!isAuthenticated\" (click)=\"openDialog()\" class=\"add-cv waves-effect waves-light\">Ajouter votre CV</button>\r\n          <button *ngIf=\"isAuthenticated\" [routerLink]=\"['/compte']\" class=\"add-cv waves-effect waves-light\">Ajouter votre CV</button>\r\n        </div>\r\n        <div class=\"col-md-2 col-xs-6\">\r\n          <span class=\"hello-txt\">hello</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.container -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-xs-12\" id=\"app-box\">\r\n      <div class=\"col-md-6 col-xs-12 left-side\">\r\n        <div class=\"img-mobile\">\r\n          <img src=\"assets/images/mobile-app.png\" alt=\"Version Mobile\">\r\n        </div>\r\n        <!-- /.img-mobile -->\r\n        <div class=\"part1\">hello\r\n          <span class=\"job-txt\">job</span>\r\n        </div>\r\n        <div class=\"part2\">\r\n\r\n\r\n          <div class=\"mobileapp\">\r\n            <p>Disponible sur iOS et Android</p>\r\n            <img src=\"assets/images/playstore.svg\" class=\"playstore\">\r\n            <img src=\"assets/images/appstore.svg\" class=\"appstore\">\r\n          </div>\r\n        </div>\r\n        <div class=\"part3\"></div>\r\n\r\n      </div>\r\n      <div class=\"col-md-6 col-xs-12 right-side pull-right\">\r\n        <div class=\"titre-inscription\" *ngIf=\"!isAuthenticated\">\r\n          une simple inscription\r\n        </div>\r\n        <!-- /.titre-inscription -->\r\n        <div class=\"titre-inscription\" *ngIf=\"isAuthenticated\">\r\n          Accéder à votre compte\r\n        </div>\r\n        <!-- /.titre-inscription -->\r\n        <div class=\"text-inscription\" *ngIf=\"!isAuthenticated\">\r\n          Avec la vision d’un expert et une approche dédiée métier qui fait la différence, nous abordons les défis en ressources humaines\r\n          avec confiance, car notre équipe est expérimentée dans chaque secteur et chaque discipline que nous proposons.\r\n        </div>\r\n        <!-- /.text-inscription -->\r\n        <div class=\"text-inscription\" *ngIf=\"isAuthenticated\">\r\n          En complétant votre compte vous aurez plus de chance d'être consulté\r\n        </div>\r\n        <!-- /.text-inscription -->\r\n        \r\n        <div class=\"btn-container\">\r\n          <button mat-button class=\"btn-inscription bg-blanc\" (click)=\"openDialog()\" *ngIf=\"!isAuthenticated\">\r\n              Inscription\r\n          </button>\r\n          <button mat-button class=\"btn-inscription bg-blanc\" (click)=\"onClickCompte()\" *ngIf=\"isAuthenticated\">\r\n              Mon compte\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 col-xs-12\" id=\"newslettre\">\r\n      <div class=\"col-md-5 col-xs-12 col-md-offset-1 left-side\">\r\n        <div class=\"bloc-job-recent\">\r\n          <h2 class=\"titre-job-home\">JOBS récement ajoutés</h2>\r\n          <div class=\"jobs\" *ngIf=\"emplois; let emplois; else loading\">\r\n          \r\n            <div class=\"item-job\" *ngFor=\"let emploi of emplois | slice:0:4\">\r\n              <div class=\"container-img-offre\">\r\n                <img class=\"img-offre\" alt=\"nom de la société\" src=\"assets/images/jobicon.png\" />\r\n              </div>\r\n              <div class=\"jobdetail\">\r\n                <h3 class=\"titre-offre\" *ngIf=\"emploi.titre\">{{ emploi.titre}}</h3>\r\n                <span class=\"contrat-offre\" *ngIf=\"emploi.type_contrat\">{{ emploi.type_contrat}}</span>\r\n                <span class=\"type-offre\" *ngIf=\"emploi.type_temp\">{{ emploi.type_temp}}</span>\r\n                <div class=\"clearfix\"></div>\r\n                <p class=\"societe-offre\">{{ emploi.lieu}} -\r\n                  <span>{{ emploi.secteur}}</span>\r\n                </p>\r\n                <!--<p class=\"adresse-offre\">16 rue tarek ibn zied menzah 5-2091</p>-->\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <a href=\"#\" class=\"detail-offre\">+ Détails</a>\r\n            </div>\r\n          </div>\r\n          <ng-template #loading>Chargement Jobs&hellip;</ng-template>\r\n        </div>\r\n        <!-- /.bloc-job-recent -->\r\n\r\n      </div>\r\n      <div class=\"col-md-6 col-xs-12 right-side\">\r\n        <div class=\"newslettre-box\">\r\n          <p class=\"capitalize\">Inscrivez vous</p>\r\n          <p class=\"capitalize\">gratuitement</p>\r\n          <span class=\"normal\">à</span>\r\n          <span class=\"hello-text\">hello </span>\r\n          <span class=\"normal\">news</span>\r\n          <input type=\"text\" placeholder=\"Newslettre\" class=\"white\">\r\n          <button class=\"waves-effect waves-light\">inscription</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n  <!-- row -->\r\n \r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-xs-12 partner-title\">\r\n        <h3>Nos partenaires</h3>\r\n        \r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div id=\"Carousel2\" class=\"carousel slide\">\r\n          \r\n          <div class=\"carousel-inner\">\r\n  \r\n            <ng-container *ngFor=\"let item of imgPartenaire; let i = index\">\r\n              <div class=\"item\" [ngClass]=\"{'active': i === 0 }\" *ngIf=\"i % 4 === 0\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\" *ngFor=\"let picto of imgPartenaire|slice:i:i + 4; let i1 = index\">\r\n                    <a href=\"#\" class=\"thumbnail\"><img [attr.src]=\"picto\" /></a>\r\n                  </div>\r\n                  \r\n                </div>\r\n                <!--.row-->\r\n              </div>\r\n              <!--.item-->\r\n            </ng-container>\r\n  \r\n          </div>\r\n          <!--.carousel-inner-->\r\n          <span data-slide=\"prev\" (click)=\"onClickPrevC2()\" class=\"left carousel-control\">‹</span>\r\n          <span data-slide=\"next\" (click)=\"onClickNextC2()\" class=\"right carousel-control\">›</span>\r\n        </div>\r\n        <!--.Carousel-->\r\n  \r\n      </div>\r\n      \r\n      <div class=\"clearfix\"></div>\r\n      <!-- /.clearfix -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </div>\r\n  <!-- /.container -->\r\n</div>\r\n<!-- content -->"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent, PopUpInscription, PopUpConnexion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpInscription", function() { return PopUpInscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpConnexion", function() { return PopUpConnexion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _emploi_emploi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emploi/emploi.service */ "./src/app/emploi/emploi.service.ts");
/* harmony import */ var _utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilisateur/utilisateur.service */ "./src/app/utilisateur/utilisateur.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _inscription_inscription_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inscription/inscription.service */ "./src/app/inscription/inscription.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(emploiService, inscriptionService, utilisateurService, dialog, router, route, storage) {
        this.emploiService = emploiService;
        this.inscriptionService = inscriptionService;
        this.utilisateurService = utilisateurService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.nbr_emploi = null;
        this.isAuthenticated = false;
        //profileUrl: Observable<string | null>;
        this.imgPartenaire = [];
        this.selected = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emploiSubscription = this.emploiService.emploisChanged
            .subscribe(function (emplois) {
            _this.emplois = emplois;
            _this.nbr_emploi = emplois.length;
            console.log(_this.emplois);
            console.log(_this.nbr_emploi);
            _this.emploisGroupedBySecteur = Object.values(_this.groupBy(_this.emplois, 'secteur'));
            _this.secteurs = Object.values(_this.groupBy(_this.emplois.filter(function (data) {
                return data.secteur !== undefined;
            }), 'secteur')); //on filtre les enregistrement undefined avec la fonction .filter puis on applique le groupBy
            _this.lieux = Object.values(_this.groupBy(_this.emplois.filter(function (data) {
                return data.lieu !== undefined;
            }), 'lieu'));
            _this.typeEmplois = Object.values(_this.groupBy(_this.emplois.filter(function (data) {
                return data.type_contrat !== undefined;
            }), 'type_contrat'));
            _this.renumerations = Object.values(_this.groupBy(_this.emplois.filter(function (data) {
                return data.renumeration !== undefined;
            }), 'renumeration'));
            _this.experiences = Object.values(_this.groupBy(_this.emplois.filter(function (data) {
                return data.experience !== undefined;
            }), 'experience'));
        });
        this.emploiService.getEmplois();
        jQuery('#Carousel').carousel();
        jQuery('#Carousel2').carousel({
            interval: 5000
        });
        /*initialisation du status de connexion*/
        this.isAuthenticated = this.inscriptionService.isAuth();
        this.authSubscription = this.inscriptionService.authChange.subscribe(function (authStatus) {
            _this.isAuthenticated = authStatus;
            console.log("Bien connecté ! 3");
        });
        this.utilisateurService.utilisateursChanged.subscribe(function (datas) {
            _this.imgPartenaire = [];
            _this.imgTab = datas.map(function (value, index, array) {
                if (value.image !== undefined && value.type === "super partenaire") {
                    return value.image;
                }
            });
            _this.imgTab.forEach(function (imageRetournee) {
                if (imageRetournee !== undefined) {
                    var ref = _this.storage.ref('utilisateurs/' + imageRetournee);
                    ref.getDownloadURL().subscribe(function (data) {
                        console.log("bon bon");
                        console.log(data);
                        _this.imgPartenaire.push(data);
                    });
                }
                else
                    return "false";
            });
            console.log("obs image >> ");
            console.log(_this.imgPartenaire);
        });
        this.utilisateurService.getUtilisateurs();
    };
    HomeComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(PopUpInscription, {
            width: '51%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    HomeComponent.prototype.openDialogConnexion = function () {
        var dialogRef = this.dialog.open(PopUpConnexion, {
            width: '50%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog connexion was closed');
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.emploiSubscription.unsubscribe();
    };
    HomeComponent.prototype.groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    ;
    HomeComponent.prototype.onClickChercher = function (form) {
        this.emploiService.setTmpMotCle(form.value.tmpMotCleInput ? form.value.tmpMotCleInput : undefined);
        this.emploiService.setTmpSecteur(form.value.tmpSecteurInput ? form.value.tmpSecteurInput : undefined);
        this.emploiService.setTmpPays(form.value.tmpPaysInput ? form.value.tmpPaysInput : undefined);
        this.emploiService.setTmpContrat(form.value.tmpTypeEmploiInput ? form.value.tmpTypeEmploiInput : undefined);
        this.emploiService.setTmpRenumeration(form.value.tmpRenumerationInput ? form.value.tmpRenumerationInput : undefined);
        this.emploiService.setTmpExperience(form.value.tmpExperienceInput ? form.value.tmpExperienceInput : undefined);
        this.router.navigate(['emploi'], { relativeTo: this.route });
    };
    HomeComponent.prototype.onClickPrevC1 = function () {
        jQuery('#Carousel').carousel('prev');
    };
    HomeComponent.prototype.onClickNextC1 = function () {
        jQuery('#Carousel').carousel('next');
    };
    HomeComponent.prototype.onClickPrevC2 = function () {
        jQuery('#Carousel2').carousel('prev');
    };
    HomeComponent.prototype.onClickNextC2 = function () {
        jQuery('#Carousel2').carousel('next');
    };
    HomeComponent.prototype.onClickCompte = function () {
        this.router.navigate(['compte'], { relativeTo: this.route });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_emploi_emploi_service__WEBPACK_IMPORTED_MODULE_1__["EmploiService"],
            _inscription_inscription_service__WEBPACK_IMPORTED_MODULE_7__["InscriptionService"],
            _utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_2__["UtilisateurService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], HomeComponent);
    return HomeComponent;
}());

/***************** INSCRIPTION POP-UP *********************/


var PopUpInscription = /** @class */ (function () {
    function PopUpInscription(dialogRef, data, inscriptionService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.inscriptionService = inscriptionService;
        this.snackBar = snackBar;
        this.isAuthenticated = false;
    }
    PopUpInscription.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PopUpInscription.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.inscriptionService.authChange.subscribe(function (authStatus) {
            _this.isAuthenticated = authStatus;
            console.log(authStatus);
            _this.onNoClick();
            if (_this.isAuthenticated) {
                _this.snackBar.open("Inscription réussite", "", {
                    duration: 5000,
                });
            }
        });
        this.inscriptionService.errorChange.subscribe(function (errorStatus) {
            _this.errorStatus = errorStatus;
            _this.snackBar.open(_this.translateMessage(_this.errorStatus), "", {
                duration: 5000,
            });
        });
    };
    PopUpInscription.prototype.translateMessage = function (message) {
        switch (message) {
            case 'auth/email-already-in-use': {
                return "Email déja utilisé";
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
    };
    PopUpInscription.prototype.onSubmitInscription = function (form) {
        this.inscriptionService.inscriptionUtilisateur(form.value.nom_utilisateur, form.value.email, form.value.password);
    };
    PopUpInscription = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pop-up-inscription',
            template: __webpack_require__(/*! ./pop-up-inscription.html */ "./src/app/home/pop-up-inscription.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _inscription_inscription_service__WEBPACK_IMPORTED_MODULE_7__["InscriptionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], PopUpInscription);
    return PopUpInscription;
}());

/***************** CONNEXION POP-UP *********************/
var PopUpConnexion = /** @class */ (function () {
    function PopUpConnexion(dialogRef, data, inscriptionService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.inscriptionService = inscriptionService;
        this.snackBar = snackBar;
        this.isAuthenticated = false;
    }
    PopUpConnexion.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PopUpConnexion.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.inscriptionService.authChange.subscribe(function (authStatus) {
            _this.isAuthenticated = authStatus;
            console.log("Bien connecté ! 2");
            if (_this.isAuthenticated) {
                _this.onNoClick();
                _this.snackBar.open("Vous êtes connecté", "", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("Vous êtes pas connecté !", "", {
                    duration: 5000,
                });
            }
        });
    };
    PopUpConnexion.prototype.onSubmitConnexion = function (form) {
        this.inscriptionService.connexionUtilisateur(form.value.email, form.value.password);
    };
    PopUpConnexion = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pop-up-connexion',
            template: __webpack_require__(/*! ./pop-up-connexion.html */ "./src/app/home/pop-up-connexion.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _inscription_inscription_service__WEBPACK_IMPORTED_MODULE_7__["InscriptionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], PopUpConnexion);
    return PopUpConnexion;
}());



/***/ }),

/***/ "./src/app/home/pop-up-connexion.html":
/*!********************************************!*\
  !*** ./src/app/home/pop-up-connexion.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"onSubmitConnexion(f)\">\r\n    <div mat-dialog-content class=\"pop-up\">\r\n        <div class=\"\">\r\n            <div class=\"\">\r\n                <div class=\"row form\">\r\n                    <div class=\"col-sm-6 col-sm-push-3\">\r\n                        <div class=\"titre-recherche cnx\">\r\n                            Connexion\r\n                        </div>\r\n                        <!-- /.titre-recherche -->\r\n\r\n                        <mat-form-field>\r\n                            <input matInput ngModel placeholder=\"Email\" name=\"email\" email required #emailFormControl=\"ngModel\">\r\n                            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                                Veuillez entrer une adresse email valide !\r\n                            </mat-error>\r\n                            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                                Email est <strong>Obligatoire</strong>\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n                        <!-- /.input-field -->\r\n                        <mat-form-field>\r\n                            <input type=\"password\" matInput placeholder=\"Your password\" ngModel name=\"password\"\r\n                                required>\r\n                        </mat-form-field>\r\n                        <!-- /.input-field -->\r\n\r\n                    </div>\r\n                    <!-- /.col-sm-6 col-sm-push-3 -->\r\n                </div>\r\n                <!-- /.row -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row pop-up-footer\">\r\n        <div class=\"col-sm-6\">\r\n            <button mat-button (click)=\"onNoClick()\" class=\"btn bg-rouge color-blanc\">Fermer</button>\r\n        </div>\r\n        <!-- /.col-sm-6 -->\r\n        <div class=\"col-sm-6\">\r\n            <button mat-button style=\"float: right\" class=\"bg-rouge color-blanc\">\r\n                Connexion\r\n            </button>\r\n        </div>\r\n        <!-- /.col-sm-6 -->\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/home/pop-up-inscription.html":
/*!**********************************************!*\
  !*** ./src/app/home/pop-up-inscription.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"onSubmitInscription(f)\">\r\n    <div mat-dialog-content class=\"pop-up\">\r\n        <div class=\"\">\r\n            <div class=\"\">\r\n                <div class=\"row form\">\r\n                    <div class=\"col-sm-6 col-sm-push-3\">\r\n                        <div class=\"titre-recherche cnx\">\r\n                            Inscription Rapide\r\n                        </div>\r\n                        <!-- /.titre-recherche -->\r\n\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Nom d'utilisateur\" ngModel name=\"nom_utilisateur\" required>\r\n                        </mat-form-field>\r\n                        <!-- /.input-field -->\r\n                        <mat-form-field>\r\n                            <input matInput ngModel placeholder=\"Email\" name=\"email\" email required #emailFormControl=\"ngModel\">\r\n                            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                                Veuillez entrer une adresse email valide !\r\n                            </mat-error>\r\n                            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                                Email est <strong>Obligatoire</strong>\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n                        <!-- /.input-field -->\r\n                        <mat-form-field hintLabel=\"6 charactères au minimum\">\r\n                            <input type=\"password\" matInput placeholder=\"Your password\" ngModel name=\"password\"\r\n                                required minlength=\"6\" #pwInput=\"ngModel\">\r\n                            <mat-hint align=\"end\">{{ pwInput.value?.length }} / 6</mat-hint>\r\n                            <mat-error>Au minimum 6 charactères</mat-error>\r\n                        </mat-form-field>\r\n                        <!-- /.input-field -->\r\n\r\n\r\n                        <!-- /.bloc-connexion -->\r\n\r\n                    </div>\r\n                    <!-- /.col-sm-6 col-sm-push-3 -->\r\n                </div>\r\n                <!-- /.row -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row pop-up-footer\">\r\n        <div class=\"col-sm-6\">\r\n            <button mat-button (click)=\"onNoClick()\" class=\"btn bg-rouge color-blanc\">Fermer</button>\r\n        </div>\r\n        <!-- /.col-sm-6 -->\r\n        <div class=\"col-sm-6\">\r\n            <button mat-button style=\"float: right\" class=\"bg-rouge color-blanc\">\r\n                Inscription\r\n            </button>\r\n        </div>\r\n        <!-- /.col-sm-6 -->\r\n    </div>\r\n    <!-- /.row -->\r\n</form>"

/***/ }),

/***/ "./src/app/inscription/inscription.component.html":
/*!********************************************************!*\
  !*** ./src/app/inscription/inscription.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  inscription works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/inscription/inscription.component.scss":
/*!********************************************************!*\
  !*** ./src/app/inscription/inscription.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inscription/inscription.component.ts":
/*!******************************************************!*\
  !*** ./src/app/inscription/inscription.component.ts ***!
  \******************************************************/
/*! exports provided: InscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionComponent", function() { return InscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InscriptionComponent = /** @class */ (function () {
    function InscriptionComponent() {
    }
    InscriptionComponent.prototype.ngOnInit = function () {
    };
    InscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inscription',
            template: __webpack_require__(/*! ./inscription.component.html */ "./src/app/inscription/inscription.component.html"),
            styles: [__webpack_require__(/*! ./inscription.component.scss */ "./src/app/inscription/inscription.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InscriptionComponent);
    return InscriptionComponent;
}());



/***/ }),

/***/ "./src/app/inscription/inscription.service.ts":
/*!****************************************************!*\
  !*** ./src/app/inscription/inscription.service.ts ***!
  \****************************************************/
/*! exports provided: InscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionService", function() { return InscriptionService; });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilisateur/utilisateur.service */ "./src/app/utilisateur/utilisateur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*interface Post {
  title: string;
  content: string;
}*/
var InscriptionService = /** @class */ (function () {
    function InscriptionService(afAuth, utilisateurService) {
        this.afAuth = afAuth;
        this.utilisateurService = utilisateurService;
        this.isAuthenticated = false;
        this.authChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.errorChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    InscriptionService.prototype.inscriptionUtilisateur = function (nom_utilisateur, email, password) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            console.log(result.user.uid);
            _this.isAuthenticated = true;
            _this.authChange.next(true);
            _this.utilisateurService.creerUtilisateur(nom_utilisateur, email, result.user.uid);
        })
            .catch(function (error) {
            console.log(error);
            _this.errorChange.next(error.code);
        });
    }; /*test*/
    InscriptionService.prototype.connexionUtilisateur = function (email, password) {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            console.log(result.user.uid);
            _this.isAuthenticated = true;
            _this.authChange.next(true);
            console.log("Bien connecté !");
            _this.utilisateurService.connecterUtilisateur(result.user.uid);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    InscriptionService.prototype.deconnexionUtilisateur = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function (result) {
            console.log("deconnexion");
            _this.isAuthenticated = false;
            _this.authChange.next(false);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    InscriptionService.prototype.changerMotPasseUtilisateur = function (email, oldPassword, newPassword) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, oldPassword);
    };
    InscriptionService.prototype.updateUtilisateurCourant = function (result) {
        this.afAuth.auth.updateCurrentUser(result);
    };
    InscriptionService.prototype.isAuth = function () {
        return this.isAuthenticated;
    };
    InscriptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_4__["UtilisateurService"]])
    ], InscriptionService);
    return InscriptionService;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Inscription Réussite\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/notification/notification.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/shared/data-exchange.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/data-exchange.service.ts ***!
  \*************************************************/
/*! exports provided: DataExchangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExchangeService", function() { return DataExchangeService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataExchangeService = /** @class */ (function () {
    function DataExchangeService(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
    }
    DataExchangeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], DataExchangeService);
    return DataExchangeService;
}());



/***/ }),

/***/ "./src/app/utilisateur/education/education.component.css":
/*!***************************************************************!*\
  !*** ./src/app/utilisateur/education/education.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utilisateur/education/education.component.html":
/*!****************************************************************!*\
  !*** ./src/app/utilisateur/education/education.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bloc-option-profil\">\r\n  <div class=\"titre-option-profil souligne\">\r\n    &Eacute;ducation\r\n  </div>\r\n  <!-- /.titre-option-profil -->\r\n  <div class=\"row\" *ngIf=\"educations?.length > 0\">\r\n    <div class=\"col-sm-12\">\r\n      <table class=\"highlight\" matSort (matSortChange)=\"sortData($event)\">\r\n        <thead>\r\n          <tr>\r\n            <th mat-sort-header=\"titre\">Titre</th>\r\n            <th mat-sort-header=\"nom_ecole\">Nom de l'école</th>\r\n            <th mat-sort-header=\"date_debut\">Date début</th>\r\n            <th mat-sort-header=\"date_fin\">Date fin</th>\r\n            <th>Description</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let education of sortedEducations; let i = index\">\r\n            <td>{{education?.titre}}</td>\r\n            <td>{{education?.nom_ecole}}</td>\r\n            <td><span *ngIf=\"education.date_debut, else aucuneDate;\">{{education?.date_debut | date:'dd/MM/yyyy'}}</span><ng-template #aucuneDate>-</ng-template> </td>\r\n            <td><span *ngIf=\"education.date_debut, else aucuneDate;\">{{education?.date_fin | date:'dd/MM/yyyy'}}  </span><ng-template #aucuneDate>-</ng-template> </td>\r\n            <td>{{education?.description}}</td>\r\n            <td class=\"action\"> \r\n              <i class=\"material-icons \" [attr.aria-expanded]=\"!isCollapsed\" (click)=\"onClickModifierEducation(education.$key)\">create</i>            \r\n              <i class=\"material-icons \" (click)=\"onClickSupprimerEducation(education.$key)\">delete</i>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- /.col-sm-12 -->\r\n  </div>\r\n  <!-- /.row -->\r\n  <br>\r\n  <div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"txt-infos-profil\">\r\n          Ajoutez vos qualifications acquises, y compris les certificats ou les diplômes que vous pourriez avoir.\r\n        </div>\r\n        <!-- /.txt-infos-profil -->\r\n      </div>\r\n      <!-- /.col-sm-6 -->\r\n    </div>\r\n    <!-- /.row -->\r\n    <div id=\"ajouterEducation\" class=\"collapse\"  [ngbCollapse]=\"!isCollapsed\">\r\n      <div class=\"well\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <mat-form-field class=\"large\">\r\n              <input matInput placeholder=\"Titre\" name=\"titre\" (keyup)=\"onChangeInput($event)\" [ngModel]=\"(educationAModifier | async)?.titre\" required #titreFormControl=\"ngModel\">\r\n              \r\n            </mat-form-field>\r\n          </div>\r\n          <!-- /.col-sm-4 -->\r\n          <div class=\"col-sm-4\">\r\n            <mat-form-field class=\"large\">\r\n              <input matInput placeholder=\"Nom de l’école\" name=\"nom_ecole\" (keyup)=\"onChangeInput($event)\" [ngModel]=\"(educationAModifier | async)?.nom_ecole\">\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- /.col-sm-4 -->\r\n          <div class=\"col-sm-2\">\r\n            <mat-form-field class=\"large\">\r\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Date début\" name=\"date_debut\" (dateInput)=\"onChangeInput($event)\" [ngModel]=\"(educationAModifier | async)?.date_debut\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- /.col-sm-2 -->\r\n          <div class=\"col-sm-2\">\r\n            <mat-form-field class=\"large\">\r\n              <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date fin\" name=\"date_fin\" (dateInput)=\"onChangeInput($event)\" [ngModel]=\"(educationAModifier | async)?.date_fin\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker2></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- /.col-sm-2 -->\r\n        </div>\r\n        <!-- /.row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <mat-form-field class=\"large\">\r\n              <textarea matInput placeholder=\"Ajouter une petite description\" name=\"description\" (keyup)=\"onChangeInput($event)\" [ngModel]=\"(educationAModifier | async)?.description\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- /.col-sm-12 -->\r\n        </div>\r\n        <!-- /.row -->\r\n      </div>\r\n      <!-- /.well -->\r\n      \r\n    </div>\r\n    <!-- /#ajouterEducation -->\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6 col-sm-2\" *ngIf=\"!boutonModifier\">\r\n        <button *ngIf=\"!etatChange\" class=\"waves-effect waves-light btn large\"     [attr.aria-expanded]=\"!isCollapsed\" (click)=\"onClickAjouter()\" type=\"button\" >ajouter</button>\r\n        <button *ngIf=\"etatChange\"  class=\"waves-effect waves-light btn large\"     (click)=\"onClickEnregistrerEducation()\" type=\"button\" >Enregistrer</button>\r\n      </div>\r\n      <div class=\"col-xs-6 col-sm-2\" *ngIf=\"boutonModifier\">\r\n        <button *ngIf=\"!etatChange\" class=\"waves-effect waves-light btn large\"     type=\"button\">Modifier</button>\r\n        <button *ngIf=\"etatChange\"  class=\"waves-effect waves-light btn large\"     (click)=\"onClickEnregistrerModifEducation()\" type=\"button\">Enregistrer</button>\r\n      </div>\r\n      <!-- /.col-xs-6 col-sm-2 -->\r\n      <div class=\"col-xs-6 col-sm-2\" *ngIf=\"etatOuvert && !etatchange\">\r\n        <button class=\"waves-effect waves-light btn large btn-white\" type=\"button\" (click)=\"onClickFermer()\" >Fermer</button>\r\n      </div>\r\n      <!-- /.col-xs-6 col-sm-2 -->\r\n      <div class=\"col-xs-6 col-sm-2\" *ngIf=\"etatChange\">\r\n        <button class=\"waves-effect waves-light btn large btn-white\" type=\"button\" (click)=\"onClickAnnuler()\">Annuler</button>\r\n      </div>\r\n      <!-- /.col-xs-6 col-sm-2 -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </div>\r\n</div>\r\n<!-- /.bloc-option-profil -->"

/***/ }),

/***/ "./src/app/utilisateur/education/education.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/utilisateur/education/education.component.ts ***!
  \**************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _education_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education.service */ "./src/app/utilisateur/education/education.service.ts");
/* harmony import */ var _education_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education.model */ "./src/app/utilisateur/education/education.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EducationComponent = /** @class */ (function (_super) {
    __extends(EducationComponent, _super);
    function EducationComponent(educationService, adapter, snackBar, dialog) {
        var _this = _super.call(this) || this;
        _this.educationService = educationService;
        _this.adapter = adapter;
        _this.snackBar = snackBar;
        _this.dialog = dialog;
        _this.test = "titre de test";
        _this.tmpEducation = new _education_model__WEBPACK_IMPORTED_MODULE_2__["Education"]("", "", undefined, undefined, "");
        _this.etatChange = false;
        _this.etatOuvert = false;
        _this.config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
        _this.boutonModifier = false;
        _this.isCollapsed = false;
        return _this;
    }
    EducationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adapter.setLocale('fr');
        this.educationService.educationsChanged.subscribe(function (datas) {
            _this.educations = datas;
            //this.educations.reverse();
            console.log(_this.educations);
            _this.sortedEducations = _this.educations.slice();
        });
        this.educationService.getEducations(this.keyUtilisateur);
        this.config.duration = 5000;
    };
    EducationComponent.prototype.sortData = function (sort) {
        var _this = this;
        var data = this.educations.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedEducations = data;
            return;
        }
        this.sortedEducations = data.sort(function (a, b) {
            var isDesc = sort.direction === 'desc';
            switch (sort.active) {
                case 'titre': return _this.compare(a.titre, b.titre, isDesc);
                case 'nom_ecole': return _this.compare(a.nom_ecole, b.nom_ecole, isDesc);
                case 'description': return _this.compare(a.description, b.description, isDesc);
                case 'date_debut': return _this.compare(a.date_debut, b.date_debut, isDesc);
                case 'date_fin': return _this.compare(a.date_fin, b.date_fin, isDesc);
                default: return 0;
            }
        });
        console.log(this.sortedEducations);
    };
    EducationComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    EducationComponent.prototype.resetForms = function () {
        this.formEducation.controls['titre'].setValue(null);
        this.formEducation.controls['nom_ecole'].setValue(null);
        this.formEducation.controls['date_debut'].setValue(null);
        this.formEducation.controls['date_fin'].setValue(null);
        this.formEducation.controls['description'].setValue(null);
    };
    EducationComponent.prototype.onChangeInput = function (event) {
        this.etatChange = true;
        this.etatOuvert = false;
    };
    EducationComponent.prototype.afficherNotification = function (message, couleur) {
        this.config.panelClass = [couleur];
        this.snackBar.open(message, undefined, this.config);
    };
    EducationComponent.prototype.AjouterEducation = function () {
        var _this = this;
        this.educationService.ajouterEducation(this.keyUtilisateur, this.tmpEducation).then(function (result) {
            _this.afficherNotification('Ajouté', 'background-verte');
            _this.etatChange = false;
            _this.resetForms();
        })
            .catch(function (error) {
            _this.afficherNotification('Ajout non réussi', 'background-rouge');
        });
    };
    EducationComponent.prototype.onClickEnregistrerEducation = function () {
        this.tmpEducation.titre = this.formEducation.controls['titre'].value;
        this.tmpEducation.nom_ecole = this.formEducation.controls['nom_ecole'].value;
        this.tmpEducation.date_debut = this.formEducation.controls['date_debut'].value ? new Date(this.formEducation.controls['date_debut'].value) : undefined;
        this.tmpEducation.date_fin = this.formEducation.controls['date_fin'].value ? new Date(this.formEducation.controls['date_fin'].value) : undefined;
        this.tmpEducation.description = this.formEducation.controls['description'].value;
        this.isCollapsed = false;
        if (this.tmpEducation.date_debut < this.tmpEducation.date_fin) {
            this.AjouterEducation();
        }
        else {
            this.afficherNotification('La date de fin doit être suppérieure à la date de début', 'background-rouge');
            this.onClickAnnuler();
        }
    };
    EducationComponent.prototype.onClickSupprimerEducation = function (docEducationId) {
        var _this = this;
        this.educationService.supprimerEducation(this.keyUtilisateur, docEducationId).then(function (result) {
            _this.afficherNotification('Supprimé', 'background-verte');
            _this.etatChange = false;
            _this.resetForms();
        })
            .catch(function (error) {
            _this.afficherNotification('Suppression non réussite', 'background-rouge');
        });
    };
    EducationComponent.prototype.onClickEnregistrerModifEducation = function () {
        var _this = this;
        if (new Date(this.formEducation.controls['date_debut'].value) < new Date(this.formEducation.controls['date_fin'].value)) {
            this.educationService.modifierEducation(this.keyUtilisateur, this.docEducationIdCourant, this.getEducationAModifier()).then(function (result) {
                _this.afficherNotification('Modifié', 'background-verte');
                _this.boutonModifier = false;
                _this.etatChange = false;
                _this.isCollapsed = false;
                _this.resetForms();
            })
                .catch(function (error) {
                _this.afficherNotification('Modification non réussite', 'background-rouge');
            });
        }
        else {
            this.afficherNotification('La date de fin doit être suppérieure à la date de début', 'background-rouge');
            this.onClickAnnuler();
        }
    };
    EducationComponent.prototype.getEducationAModifier = function () {
        this.tmpNouvelleEducationModifie.titre = this.formEducation.controls['titre'].value;
        this.tmpNouvelleEducationModifie.nom_ecole = this.formEducation.controls['nom_ecole'].value;
        this.tmpNouvelleEducationModifie.date_debut = this.formEducation.controls['date_debut'].value ? new Date(this.formEducation.controls['date_debut'].value) : undefined;
        this.tmpNouvelleEducationModifie.date_fin = this.formEducation.controls['date_fin'].value ? new Date(this.formEducation.controls['date_fin'].value) : undefined;
        this.tmpNouvelleEducationModifie.description = this.formEducation.controls['description'].value;
        console.log(this.tmpNouvelleEducationModifie);
        return this.tmpNouvelleEducationModifie;
    };
    EducationComponent.prototype.onClickModifierEducation = function (docEducationId) {
        var _this = this;
        this.boutonModifier = true;
        this.etatOuvert = true;
        this.docEducationIdCourant = docEducationId;
        this.isCollapsed = true;
        this.educationAModifier = this.educationService.getEducation(this.keyUtilisateur, docEducationId);
        this.educationAModifier.subscribe(function (datas) {
            _this.tmpNouvelleEducationModifie = datas;
        });
    };
    EducationComponent.prototype.onClickAnnuler = function () {
        this.etatOuvert = false;
        this.boutonModifier = false;
        this.etatChange = false;
        this.isCollapsed = false;
        this.resetForms();
    };
    EducationComponent.prototype.onClickFermer = function () {
        this.etatOuvert = false;
        this.boutonModifier = false;
        this.etatChange = false;
        this.isCollapsed = false;
        this.resetForms();
    };
    EducationComponent.prototype.onClickAjouter = function () {
        this.etatOuvert = true;
        this.isCollapsed = true;
    };
    EducationComponent.prototype.onClickModifier = function () {
        this.etatOuvert = true;
        this.isCollapsed = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EducationComponent.prototype, "keyUtilisateur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('groupFormEducation'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], EducationComponent.prototype, "formEducation", void 0);
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/utilisateur/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/utilisateur/education/education.component.css")],
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"] }],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"], useValue: 'fr-FR' },
            ],
        }),
        __metadata("design:paramtypes", [_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], EducationComponent);
    return EducationComponent;
}(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerIntl"]));



/***/ }),

/***/ "./src/app/utilisateur/education/education.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/utilisateur/education/education.model.ts ***!
  \**********************************************************/
/*! exports provided: Education */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
var Education = /** @class */ (function () {
    function Education(titre, nom_ecole, date_debut, date_fin, description) {
        this.titre = titre;
        this.nom_ecole = nom_ecole;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.description = description;
    }
    return Education;
}());



/***/ }),

/***/ "./src/app/utilisateur/education/education.service.ts":
/*!************************************************************!*\
  !*** ./src/app/utilisateur/education/education.service.ts ***!
  \************************************************************/
/*! exports provided: EducationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationService", function() { return EducationService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EducationService = /** @class */ (function () {
    function EducationService(afs) {
        this.afs = afs;
        this.educationsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.educationChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    EducationService.prototype.getEducations = function (docUtilisateurId) {
        var _this = this;
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('educations', function (ref) { return ref.orderBy('date_fin'); })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id, date_debut: action.payload.doc.data().date_debut, date_fin: action.payload.doc.data().date_fin }, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.educationsLocalTmp = response;
            _this.educationsChanged.next(_this.educationsLocalTmp.slice()); // spread operator to create a copy
        });
    };
    EducationService.prototype.getEducation = function (docUtilisateurId, docEducationId) {
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('educations').doc(docEducationId).valueChanges();
    };
    EducationService.prototype.ajouterEducation = function (docUtilisateurId, education) {
        var educationJSON = JSON.parse(JSON.stringify(education));
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('educations').add(educationJSON);
    };
    EducationService.prototype.supprimerEducation = function (docUtilisateurId, docEducationId) {
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('educations').doc(docEducationId).delete();
    };
    EducationService.prototype.modifierEducation = function (docUtilisateurId, docEducationId, education) {
        var educationJSON = JSON.parse(JSON.stringify(education));
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('educations').doc(docEducationId).update(educationJSON);
    };
    EducationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]])
    ], EducationService);
    return EducationService;
}());



/***/ }),

/***/ "./src/app/utilisateur/experience/experience.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/utilisateur/experience/experience.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utilisateur/experience/experience.component.html":
/*!******************************************************************!*\
  !*** ./src/app/utilisateur/experience/experience.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bloc-option-profil\">\r\n  <div class=\"titre-option-profil souligne\">\r\n    Expérience\r\n  </div>\r\n  <!-- /.titre-option-profil -->\r\n  <div class=\"row\" *ngIf=\"experiences?.length > 0\">\r\n    <div class=\"col-sm-12\">\r\n      <table class=\"highlight\">\r\n        <thead>\r\n          <tr>\r\n            <th>Titre</th>\r\n            <th>Nom de la société</th>\r\n            <th>Date début</th>\r\n            <th>Date fin</th>\r\n            <th>Description</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let experience of experiences; let i = index\">\r\n            <td>{{experience?.titre}}</td>\r\n            <td>{{experience?.nom_societe}}</td>\r\n            <td><span *ngIf=\"experience.date_debut, else aucuneDate;\">{{experience?.date_debut | date:'dd/MM/yyyy'}}</span><ng-template #aucuneDate>-</ng-template> </td>\r\n            <td><span *ngIf=\"experience.date_debut, else aucuneDate;\">{{experience?.date_fin | date:'dd/MM/yyyy'}}  </span><ng-template #aucuneDate>-</ng-template> </td>\r\n            <td>{{experience?.description}}</td>\r\n            <td class=\"action\">\r\n              <i class=\"material-icons \" [attr.aria-expanded]=\"!isCollapsed\" (click)=\"onClickModifierExperience(experience.$key)\">create</i>            \r\n              <i class=\"material-icons \" (click)=\"onClickSupprimerExperience(experience.$key)\">delete</i>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- /.col-sm-12 -->\r\n  </div>\r\n  <!-- /.row -->\r\n  <br>\r\n  <div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"txt-infos-profil\">\r\n          Listez tous vos postes précédents ici. Montrez aux employeurs votre expérience.\r\n        </div>\r\n        <!-- /.txt-infos-profil -->\r\n      </div>\r\n      <!-- /.col-sm-6 -->\r\n    </div>\r\n    <!-- /.row -->\r\n    <div id=\"ajouterExperience\" class=\"collapse\" [ngbCollapse]=\"!isCollapsed\">\r\n      <div class=\"well\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <mat-form-field class=\"large\">\r\n              <input matInput placeholder=\"Titre\" name=\"titreExperience\" (keyup)=\"onChangeInput($event)\" [ngModel]=\"(experienceAModifier | async)?.titre\" required >\r\n              \r\n            </mat-form-field>\r\n          </div>\r\n          <!-- /.col-sm-4 -->\r\n          <div class=\"col-sm-4\">\r\n            <mat-form-field class=\"large\">\r\n              <input matInput placeholder=\"Nom de la société\" name=\"nom_societeExperience\" (keyup)=\"onChangeInput($event)\" [ngModel]=\"(experienceAModifier | async)?.nom_societe\">\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- /.col-sm-4 -->\r\n          <div class=\"col-sm-2\">\r\n            <mat-form-field class=\"large\">\r\n              <input matInput [matDatepicker]=\"picker3\" placeholder=\"Date début\" name=\"date_debutExperience\" (dateInput)=\"onChangeInput($event)\" [ngModel]=\"(experienceAModifier | async)?.date_debut\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker3></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- /.col-sm-2 -->\r\n          <div class=\"col-sm-2\">\r\n            <mat-form-field class=\"large\">\r\n              <input matInput [matDatepicker]=\"picker4\" placeholder=\"Date fin\" name=\"date_finExperience\" (dateInput)=\"onChangeInput($event)\" [ngModel]=\"(experienceAModifier | async)?.date_fin\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker4></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- /.col-sm-2 -->\r\n        </div>\r\n        <!-- /.row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <mat-form-field class=\"large\">\r\n              <textarea matInput placeholder=\"Ajouter une petite description\" name=\"descriptionExperience\" (keyup)=\"onChangeInput($event)\" [ngModel]=\"(experienceAModifier | async)?.description\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- /.col-sm-12 -->\r\n        </div>\r\n        <!-- /.row -->\r\n      </div>\r\n      <!-- /.well -->\r\n      \r\n    </div>\r\n    <!-- /#ajouterExperience -->\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6 col-sm-2\" *ngIf=\"!boutonModifier\">\r\n        <button *ngIf=\"!etatChange\" class=\"waves-effect waves-light btn large\"     [attr.aria-expanded]=\"!isCollapsed\" (click)=\"onClickAjouter()\" type=\"button\" >ajouter</button>\r\n        <button *ngIf=\"etatChange\"  class=\"waves-effect waves-light btn large\"     (click)=\"onClickEnregistrerExperience()\" type=\"button\" >Enregistrer</button>\r\n      </div>\r\n      <div class=\"col-xs-6 col-sm-2\" *ngIf=\"boutonModifier\">\r\n        <button *ngIf=\"!etatChange\" class=\"waves-effect waves-light btn large\"     type=\"button\">Modifier</button>\r\n        <button *ngIf=\"etatChange\"  class=\"waves-effect waves-light btn large\"     (click)=\"onClickEnregistrerModifExperience()\" type=\"button\">Enregistrer</button>\r\n      </div>\r\n      <!-- /.col-xs-6 col-sm-2 -->\r\n      <div class=\"col-xs-6 col-sm-2\" *ngIf=\"etatOuvert && !etatchange\">\r\n        <button class=\"waves-effect waves-light btn large btn-white\" type=\"button\" (click)=\"onClickFermer()\" >Fermer</button>\r\n      </div>\r\n      <!-- /.col-xs-6 col-sm-2 -->\r\n      <div class=\"col-xs-6 col-sm-2\" *ngIf=\"etatChange\">\r\n        <button class=\"waves-effect waves-light btn large btn-white\" type=\"button\" (click)=\"onClickAnnuler()\">Annuler</button>\r\n      </div>\r\n      <!-- /.col-xs-6 col-sm-2 -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </div>\r\n</div>\r\n<!-- /.bloc-option-profil -->"

/***/ }),

/***/ "./src/app/utilisateur/experience/experience.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/utilisateur/experience/experience.component.ts ***!
  \****************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _experience_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.service */ "./src/app/utilisateur/experience/experience.service.ts");
/* harmony import */ var _experience_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience.model */ "./src/app/utilisateur/experience/experience.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExperienceComponent = /** @class */ (function (_super) {
    __extends(ExperienceComponent, _super);
    function ExperienceComponent(experienceService, adapter, snackBar, dialog) {
        var _this = _super.call(this) || this;
        _this.experienceService = experienceService;
        _this.adapter = adapter;
        _this.snackBar = snackBar;
        _this.dialog = dialog;
        _this.nouvelleExperience = new _experience_model__WEBPACK_IMPORTED_MODULE_2__["Experience"]("", "", undefined, undefined, "");
        _this.etatChange = false;
        _this.etatOuvert = false;
        _this.config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
        _this.boutonModifier = false;
        _this.isCollapsed = false;
        return _this;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adapter.setLocale('fr');
        this.experienceService.experiencesChanged.subscribe(function (datas) {
            _this.experiences = datas;
            _this.experiences.reverse();
        });
        this.experienceService.getExperiences(this.keyUtilisateur);
        this.config.duration = 5000;
    };
    ExperienceComponent.prototype.resetForms = function () {
        this.formGroupExperience.controls['titreExperience'].setValue(null);
        this.formGroupExperience.controls['nom_societeExperience'].setValue(null);
        this.formGroupExperience.controls['date_debutExperience'].setValue(null);
        this.formGroupExperience.controls['date_finExperience'].setValue(null);
        this.formGroupExperience.controls['descriptionExperience'].setValue(null);
    };
    ExperienceComponent.prototype.onChangeInput = function (event) {
        this.etatChange = true;
        this.etatOuvert = false;
    };
    ExperienceComponent.prototype.afficherNotification = function (message, couleur) {
        this.config.panelClass = [couleur];
        this.snackBar.open(message, undefined, this.config);
    };
    ExperienceComponent.prototype.AjouterExperience = function () {
        var _this = this;
        this.experienceService.ajouterExperience(this.keyUtilisateur, this.nouvelleExperience).then(function (result) {
            _this.afficherNotification('Ajouté', 'background-verte');
            _this.etatChange = false;
            _this.resetForms();
        })
            .catch(function (error) {
            _this.afficherNotification('Ajout non réussi', 'background-rouge');
        });
    };
    ExperienceComponent.prototype.onClickEnregistrerExperience = function () {
        this.nouvelleExperience.titre = this.formGroupExperience.controls['titreExperience'].value;
        this.nouvelleExperience.nom_societe = this.formGroupExperience.controls['nom_societeExperience'].value;
        this.nouvelleExperience.date_debut = this.formGroupExperience.controls['date_debutExperience'].value ? new Date(this.formGroupExperience.controls['date_debutExperience'].value) : undefined;
        this.nouvelleExperience.date_fin = this.formGroupExperience.controls['date_finExperience'].value ? new Date(this.formGroupExperience.controls['date_finExperience'].value) : undefined;
        this.nouvelleExperience.description = this.formGroupExperience.controls['descriptionExperience'].value;
        this.isCollapsed = false;
        this.AjouterExperience();
    };
    ExperienceComponent.prototype.onClickSupprimerExperience = function (docExperienceId) {
        var _this = this;
        this.experienceService.supprimerExperience(this.keyUtilisateur, docExperienceId).then(function (result) {
            _this.afficherNotification('Supprimé', 'background-verte');
            _this.etatChange = false;
            _this.resetForms();
        })
            .catch(function (error) {
            _this.afficherNotification('Suppression non réussite', 'background-rouge');
        });
    };
    ExperienceComponent.prototype.onClickEnregistrerModifExperience = function () {
        var _this = this;
        this.experienceService.modifierExperience(this.keyUtilisateur, this.docExperienceIdCourant, this.getExperienceAModifier()).then(function (result) {
            _this.afficherNotification('Modifié', 'background-verte');
            _this.boutonModifier = false;
            _this.etatChange = false;
            _this.isCollapsed = false;
            _this.resetForms();
        })
            .catch(function (error) {
            _this.afficherNotification('Modification non réussite', 'background-rouge');
        });
    };
    ExperienceComponent.prototype.getExperienceAModifier = function () {
        this.tmpNouvelleExperienceModifie.titre = this.formGroupExperience.controls['titreExperience'].value;
        this.tmpNouvelleExperienceModifie.nom_societe = this.formGroupExperience.controls['nom_societeExperience'].value;
        this.tmpNouvelleExperienceModifie.date_debut = this.formGroupExperience.controls['date_debutExperience'].value ? new Date(this.formGroupExperience.controls['date_debutExperience'].value) : undefined;
        this.tmpNouvelleExperienceModifie.date_fin = this.formGroupExperience.controls['date_finExperience'].value ? new Date(this.formGroupExperience.controls['date_finExperience'].value) : undefined;
        this.tmpNouvelleExperienceModifie.description = this.formGroupExperience.controls['descriptionExperience'].value;
        return this.tmpNouvelleExperienceModifie;
    };
    ExperienceComponent.prototype.onClickModifierExperience = function (docExperienceId) {
        var _this = this;
        this.boutonModifier = true;
        this.etatOuvert = true;
        this.docExperienceIdCourant = docExperienceId;
        this.isCollapsed = true;
        this.experienceAModifier = this.experienceService.getExperience(this.keyUtilisateur, docExperienceId);
        this.experienceAModifier.subscribe(function (datas) {
            _this.tmpNouvelleExperienceModifie = datas;
        });
    };
    ExperienceComponent.prototype.onClickAnnuler = function () {
        this.boutonModifier = false;
        this.etatChange = false;
        this.isCollapsed = false;
        this.resetForms();
    };
    ExperienceComponent.prototype.onClickFermer = function () {
        this.etatOuvert = false;
        this.boutonModifier = false;
        this.etatChange = false;
        this.isCollapsed = false;
        this.resetForms();
    };
    ExperienceComponent.prototype.onClickAjouter = function () {
        this.etatOuvert = true;
        this.isCollapsed = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExperienceComponent.prototype, "keyUtilisateur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('groupFormExperience'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], ExperienceComponent.prototype, "formGroupExperience", void 0);
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/utilisateur/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/utilisateur/experience/experience.component.css")],
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"] }],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"], useValue: 'fr-FR' },
            ],
        }),
        __metadata("design:paramtypes", [_experience_service__WEBPACK_IMPORTED_MODULE_1__["ExperienceService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerIntl"]));



/***/ }),

/***/ "./src/app/utilisateur/experience/experience.model.ts":
/*!************************************************************!*\
  !*** ./src/app/utilisateur/experience/experience.model.ts ***!
  \************************************************************/
/*! exports provided: Experience */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
var Experience = /** @class */ (function () {
    function Experience(titre, nom_societe, date_debut, date_fin, description) {
        this.titre = titre;
        this.nom_societe = nom_societe;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.description = description;
    }
    return Experience;
}());



/***/ }),

/***/ "./src/app/utilisateur/experience/experience.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/utilisateur/experience/experience.service.ts ***!
  \**************************************************************/
/*! exports provided: ExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceService", function() { return ExperienceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExperienceService = /** @class */ (function () {
    function ExperienceService(afs) {
        this.afs = afs;
        this.experiencesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.experienceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ExperienceService.prototype.getExperiences = function (docUtilisateurId) {
        var _this = this;
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('experiences')
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id, date_debut: action.payload.doc.data().date_debut, date_fin: action.payload.doc.data().date_fin }, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.experiencesLocalTmp = response;
            _this.experiencesChanged.next(_this.experiencesLocalTmp.slice()); // spread operator to create a copy
        });
    };
    ExperienceService.prototype.getExperience = function (docUtilisateurId, docEducationId) {
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('experiences').doc(docEducationId).valueChanges();
    };
    ExperienceService.prototype.ajouterExperience = function (docUtilisateurId, experience) {
        var experienceJSON = JSON.parse(JSON.stringify(experience));
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('experiences').add(experienceJSON);
    };
    ExperienceService.prototype.supprimerExperience = function (docUtilisateurId, docExperienceId) {
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('experiences').doc(docExperienceId).delete();
    };
    ExperienceService.prototype.modifierExperience = function (docUtilisateurId, docExperienceId, experience) {
        var experienceJSON = JSON.parse(JSON.stringify(experience));
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('experiences').doc(docExperienceId).update(experienceJSON);
    };
    ExperienceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ExperienceService);
    return ExperienceService;
}());



/***/ }),

/***/ "./src/app/utilisateur/langue/langue.component.css":
/*!*********************************************************!*\
  !*** ./src/app/utilisateur/langue/langue.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utilisateur/langue/langue.component.html":
/*!**********************************************************!*\
  !*** ./src/app/utilisateur/langue/langue.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bloc-option-profil\">\r\n  <div class=\"titre-option-profil souligne\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n              Langues\r\n          </div>\r\n          <!-- /.col-sm-4 -->\r\n      </div>\r\n      <!-- /.row --> \r\n  </div>\r\n  <!-- /.titre-option-profil -->\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n          <div class=\"txt-infos-profil\">\r\n              Ajoutez toutes les langues que vous connaissez\r\n          </div>\r\n          <!-- /.txt-infos-profil -->\r\n      </div>\r\n      <!-- /.col-sm-6 -->\r\n  </div>\r\n  <!-- /.row -->\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <mat-form-field class=\"example-chip-list\">\r\n          <mat-chip-list #chipList>\r\n            <mat-chip\r\n              *ngFor=\"let langue of languesUtilisateur\"\r\n              [selectable]=\"selectable\"\r\n              [removable]=\"removable\"\r\n              (removed)=\"remove(langue, langue.$key)\">\r\n              {{langue.titre_langue}}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n              placeholder=\"Ajouter une langue\"\r\n              #langueInput\r\n              [formControl]=\"langueCtrl\"\r\n              [matAutocomplete]=\"auto\"\r\n              [matChipInputFor]=\"chipList\"\r\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n              [matChipInputAddOnBlur]=\"addOnBlur\"\r\n              (matChipInputTokenEnd)=\"add($event)\">\r\n          </mat-chip-list>\r\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n            <mat-option *ngFor=\"let langue of filteredLangues | async\" [value]=\"langue\">\r\n              {{langue.titre_langue}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n        \r\n      </div>\r\n      <!-- /.col-sm-4 -->\r\n  </div>\r\n  <!-- /.row -->\r\n</div>\r\n<!-- /.bloc-option-profil -->\r\n"

/***/ }),

/***/ "./src/app/utilisateur/langue/langue.component.ts":
/*!********************************************************!*\
  !*** ./src/app/utilisateur/langue/langue.component.ts ***!
  \********************************************************/
/*! exports provided: LangueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangueComponent", function() { return LangueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _langue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./langue.service */ "./src/app/utilisateur/langue/langue.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LangueComponent = /** @class */ (function () {
    function LangueComponent(langueService, snackBar) {
        this.langueService = langueService;
        this.snackBar = snackBar;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
    }
    LangueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config.duration = 5000;
        this.langueService.languesChanged.subscribe(function (datas) {
            _this.languesUtilisateur = JSON.parse(JSON.stringify(datas));
        });
        this.langueService.getLangues(this.keyUtilisateur);
        this.langueService.languesDisponibleChanged.subscribe(function (datas) {
            _this.allLangues = JSON.parse(JSON.stringify(datas));
            _this.filteredLangues = _this.formControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (langue) { return langue ? _this._filter(langue) : _this.allLangues.slice(); }));
        });
        this.langueService.getLanguesDisponible();
    };
    LangueComponent.prototype.add = function (event) {
        var _this = this;
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our langue
            if ((value || '').trim()) {
                this.languesUtilisateur.push({ 'titre_langue': value.trim() });
                this.langueService.ajouterLangue(this.keyUtilisateur, { 'titre_langue': value.trim() }).then(function (result) {
                    _this.afficherNotification('Ajouté', 'background-verte');
                })
                    .catch(function (error) {
                    _this.afficherNotification('Ajout non réussi', 'background-rouge');
                });
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.formControl.setValue(null);
        }
    };
    LangueComponent.prototype.remove = function (langue, docLangueId) {
        var _this = this;
        var index = this.languesUtilisateur.indexOf({ 'titre_langue': langue });
        this.langueService.supprimerLangue(this.keyUtilisateur, docLangueId).then(function (result) {
            _this.afficherNotification('Supprimé', 'background-verte');
        })
            .catch(function (error) {
            _this.afficherNotification('Suppression non réussite', 'background-rouge');
        });
        if (index >= 0) {
            this.languesUtilisateur.splice(index, 1);
        }
    };
    LangueComponent.prototype.selected = function (event) {
        var _this = this;
        var trouve = this.languesUtilisateur.map(function (a) { return a.titre_langue; }).includes(event.option.viewValue);
        if (!trouve) {
            this.languesUtilisateur.push({ 'titre_langue': event.option.viewValue });
            this.langueService.ajouterLangue(this.keyUtilisateur, { 'titre_langue': event.option.viewValue }).then(function (result) {
                _this.afficherNotification('Ajouté', 'background-verte');
            })
                .catch(function (error) {
                _this.afficherNotification('Ajout non réussi', 'background-rouge');
            });
            this.langueInput.nativeElement.value = '';
            this.formControl.setValue(null);
        }
    };
    LangueComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allLangues.filter(function (langue) { return langue.toLowerCase().indexOf(filterValue) === 0; });
    };
    LangueComponent.prototype.afficherNotification = function (message, couleur) {
        this.config.panelClass = [couleur];
        this.snackBar.open(message, undefined, this.config);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LangueComponent.prototype, "keyUtilisateur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('groupFormLangue'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], LangueComponent.prototype, "formGroupLangue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('langueInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LangueComponent.prototype, "langueInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"])
    ], LangueComponent.prototype, "matAutocomplete", void 0);
    LangueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-langue',
            template: __webpack_require__(/*! ./langue.component.html */ "./src/app/utilisateur/langue/langue.component.html"),
            styles: [__webpack_require__(/*! ./langue.component.css */ "./src/app/utilisateur/langue/langue.component.css")]
        }),
        __metadata("design:paramtypes", [_langue_service__WEBPACK_IMPORTED_MODULE_1__["LangueService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], LangueComponent);
    return LangueComponent;
}());



/***/ }),

/***/ "./src/app/utilisateur/langue/langue.service.ts":
/*!******************************************************!*\
  !*** ./src/app/utilisateur/langue/langue.service.ts ***!
  \******************************************************/
/*! exports provided: LangueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangueService", function() { return LangueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LangueService = /** @class */ (function () {
    function LangueService(afs) {
        this.afs = afs;
        this.languesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.languesDisponibleChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.langueChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LangueService.prototype.getLangues = function (docUtilisateurId) {
        var _this = this;
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('langues')
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.languesLocalTmp = response;
            _this.languesChanged.next(_this.languesLocalTmp.slice()); // spread operator to create a copy
        });
    };
    LangueService.prototype.getLangue = function (docUtilisateurId, docEducationId) {
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('langues').doc(docEducationId).valueChanges();
    };
    LangueService.prototype.ajouterLangue = function (docUtilisateurId, langue) {
        var langueJSON = JSON.parse(JSON.stringify(langue));
        console.log(langue);
        console.log(langueJSON);
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('langues').add(langueJSON);
    };
    LangueService.prototype.supprimerLangue = function (docUtilisateurId, docLangueId) {
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('langues').doc(docLangueId).delete();
    };
    LangueService.prototype.modifierLangue = function (docUtilisateurId, docLangueId, langue) {
        var langueJSON = JSON.parse(JSON.stringify(langue));
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('langues').doc(docLangueId).update(langueJSON);
    };
    LangueService.prototype.getLanguesDisponible = function () {
        var _this = this;
        return this.afs.collection('langues_disponibles')
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({}, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.languesDisponibleChanged.next(response.slice()); // spread operator to create a copy
        });
    };
    LangueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], LangueService);
    return LangueService;
}());



/***/ }),

/***/ "./src/app/utilisateur/renumeration/renumeration.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/utilisateur/renumeration/renumeration.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utilisateur/renumeration/renumeration.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/utilisateur/renumeration/renumeration.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-chip-list\">\r\n  <mat-chip-list #chipListRenum>\r\n    <mat-chip\r\n      *ngFor=\"let renumeration of renumerationsUtilisateur\"\r\n      [selectable]=\"selectable\"\r\n      [removable]=\"removable\"\r\n      (removed)=\"remove(renumeration, renumeration.$key)\">\r\n      {{renumeration.titre_renumeration}}\r\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <input\r\n      placeholder=\"Palier rémunération\"\r\n      #renumerationInput\r\n      [formControl]=\"renumerationCtrl\"\r\n      [matAutocomplete]=\"auto\"\r\n      [matChipInputFor]=\"chipListRenum\"\r\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n      [matChipInputAddOnBlur]=\"addOnBlur\"\r\n      (matChipInputTokenEnd)=\"add($event)\">\r\n  </mat-chip-list>\r\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n    <mat-option *ngFor=\"let renumeration of filteredRenumerations | async\" [value]=\"renumeration\">\r\n      {{renumeration.titre}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>\r\n\r\n"

/***/ }),

/***/ "./src/app/utilisateur/renumeration/renumeration.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/utilisateur/renumeration/renumeration.component.ts ***!
  \********************************************************************/
/*! exports provided: RenumerationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenumerationComponent", function() { return RenumerationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _renumeration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renumeration.service */ "./src/app/utilisateur/renumeration/renumeration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RenumerationComponent = /** @class */ (function () {
    function RenumerationComponent(renumerationService, snackBar) {
        this.renumerationService = renumerationService;
        this.snackBar = snackBar;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
    }
    RenumerationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config.duration = 5000;
        this.renumerationService.renumerationsChanged.subscribe(function (datas) {
            _this.renumerationsUtilisateur = JSON.parse(JSON.stringify(datas));
        });
        this.renumerationService.getRenumerations(this.keyUtilisateur);
        this.renumerationService.renumerationsDisponibleChanged.subscribe(function (datas) {
            _this.allRenumerations = JSON.parse(JSON.stringify(datas));
            _this.filteredRenumerations = _this.formControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (renumeration) { return renumeration ? _this._filter(renumeration) : _this.allRenumerations.slice(); }));
        });
        this.renumerationService.getRenumerationsDisponible();
    };
    RenumerationComponent.prototype.add = function (event) {
        var _this = this;
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our renumeration
            if ((value || '').trim()) {
                this.renumerationsUtilisateur.push({ 'titre_renumeration': value.trim() });
                this.renumerationService.ajouterRenumeration(this.keyUtilisateur, { 'titre_renumeration': value.trim() }).then(function (result) {
                    _this.afficherNotification('Ajouté', 'background-verte');
                })
                    .catch(function (error) {
                    _this.afficherNotification('Ajout non réussi', 'background-rouge');
                });
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.formControl.setValue(null);
        }
    };
    RenumerationComponent.prototype.remove = function (renumeration, docRenumerationId) {
        var _this = this;
        var index = this.renumerationsUtilisateur.indexOf({ 'titre_renumeration': renumeration });
        this.renumerationService.supprimerRenumeration(this.keyUtilisateur, docRenumerationId).then(function (result) {
            _this.afficherNotification('Supprimé', 'background-verte');
        })
            .catch(function (error) {
            _this.afficherNotification('Suppression non réussite', 'background-rouge');
        });
        if (index >= 0) {
            this.renumerationsUtilisateur.splice(index, 1);
        }
    };
    RenumerationComponent.prototype.selected = function (event) {
        var _this = this;
        var trouve = this.renumerationsUtilisateur.map(function (a) { return a.titre_renumeration; }).includes(event.option.viewValue);
        var nbr_renumeration = this.renumerationsUtilisateur.length;
        if (nbr_renumeration < 2) {
            if (!trouve) {
                this.renumerationsUtilisateur.push({ 'titre_renumeration': event.option.viewValue });
                this.renumerationService.ajouterRenumeration(this.keyUtilisateur, { 'titre_renumeration': event.option.viewValue }).then(function (result) {
                    _this.afficherNotification('Ajouté', 'background-verte');
                })
                    .catch(function (error) {
                    _this.afficherNotification('Ajout non réussi', 'background-rouge');
                });
                this.renumerationInput.nativeElement.value = '';
                this.formControl.setValue(null);
            }
        }
        else {
            this.afficherNotification('Choisir au maximum deux paliers', 'background-rouge');
        }
    };
    RenumerationComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allRenumerations.filter(function (renumeration) { return renumeration.toLowerCase().indexOf(filterValue) === 0; });
    };
    RenumerationComponent.prototype.afficherNotification = function (message, couleur) {
        this.config.panelClass = [couleur];
        this.snackBar.open(message, undefined, this.config);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RenumerationComponent.prototype, "keyUtilisateur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('groupFormRenumeration'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], RenumerationComponent.prototype, "formGroupRenumeration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('renumerationInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RenumerationComponent.prototype, "renumerationInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"])
    ], RenumerationComponent.prototype, "matAutocomplete", void 0);
    RenumerationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-renumeration',
            template: __webpack_require__(/*! ./renumeration.component.html */ "./src/app/utilisateur/renumeration/renumeration.component.html"),
            styles: [__webpack_require__(/*! ./renumeration.component.css */ "./src/app/utilisateur/renumeration/renumeration.component.css")]
        }),
        __metadata("design:paramtypes", [_renumeration_service__WEBPACK_IMPORTED_MODULE_1__["RenumerationService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], RenumerationComponent);
    return RenumerationComponent;
}());



/***/ }),

/***/ "./src/app/utilisateur/renumeration/renumeration.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/utilisateur/renumeration/renumeration.service.ts ***!
  \******************************************************************/
/*! exports provided: RenumerationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenumerationService", function() { return RenumerationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RenumerationService = /** @class */ (function () {
    function RenumerationService(afs) {
        this.afs = afs;
        this.renumerationsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.renumerationsDisponibleChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.renumerationChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    RenumerationService.prototype.getRenumerations = function (docUtilisateurId) {
        var _this = this;
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('renumerations', function (ref) { return ref.orderBy('titre_renumeration'); })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.renumerationsLocalTmp = response;
            _this.renumerationsChanged.next(_this.renumerationsLocalTmp.slice()); // spread operator to create a copy
        });
    };
    RenumerationService.prototype.getRenumeration = function (docUtilisateurId, docEducationId) {
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('renumerations').doc(docEducationId).valueChanges();
    };
    RenumerationService.prototype.ajouterRenumeration = function (docUtilisateurId, renumeration) {
        var renumerationJSON = JSON.parse(JSON.stringify(renumeration));
        console.log(renumeration);
        console.log(renumerationJSON);
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('renumerations').add(renumerationJSON);
    };
    RenumerationService.prototype.supprimerRenumeration = function (docUtilisateurId, docRenumerationId) {
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('renumerations').doc(docRenumerationId).delete();
    };
    RenumerationService.prototype.modifierRenumeration = function (docUtilisateurId, docRenumerationId, renumeration) {
        var renumerationJSON = JSON.parse(JSON.stringify(renumeration));
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('renumerations').doc(docRenumerationId).update(renumerationJSON);
    };
    RenumerationService.prototype.getRenumerationsDisponible = function () {
        var _this = this;
        return this.afs.collection('renumerations_disponibles', function (ref) { return ref.orderBy("titre"); })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({}, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.renumerationsDisponibleChanged.next(response.slice()); // spread operator to create a copy
        });
    };
    RenumerationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], RenumerationService);
    return RenumerationService;
}());



/***/ }),

/***/ "./src/app/utilisateur/technologie/technologie.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/utilisateur/technologie/technologie.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utilisateur/technologie/technologie.component.html":
/*!********************************************************************!*\
  !*** ./src/app/utilisateur/technologie/technologie.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bloc-option-profil technologie\">\r\n  <div class=\"titre-option-profil souligne\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n              Technologies\r\n          </div>\r\n          <!-- /.col-sm-4 -->\r\n      </div>\r\n      <!-- /.row --> \r\n  </div>\r\n  <!-- /.titre-option-profil -->\r\n  \r\n  <div class=\"row\" *ngIf=\"technologies?.length > 0\">\r\n    <div class=\"col-sm-12\">\r\n      <table class=\"highlight\">\r\n        <thead>\r\n          <tr>\r\n            <th>Nom de la technologie</th>\r\n            <th>Pourcentage de maitrise</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let technologie of technologies; let i = index\">\r\n            <td>{{technologie?.titre}}</td>\r\n            <td><mat-progress-bar class=\"margin-top5\" mode=\"determinate\" [value]=\"technologie.pourcentage\"></mat-progress-bar> <span>{{technologie?.pourcentage}}%</span></td>\r\n            <td class=\"action\"> \r\n              <i class=\"material-icons \" [attr.aria-expanded]=\"!isCollapsed\" (click)=\"onClickModifierTechnologie(technologie.$key)\">create</i>            \r\n              <i class=\"material-icons \" (click)=\"onClickSupprimerTechnologie(technologie.$key)\">delete</i>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- /.col-sm-12 -->\r\n  </div>\r\n  <!-- /.row -->\r\n  <br>\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n          <div class=\"txt-infos-profil\">\r\n              Ajoutez vos compétences en terme de pourcentage, un atout pour vos candidatures, ...\r\n          </div>\r\n          <!-- /.txt-infos-profil -->\r\n      </div>\r\n      <!-- /.col-sm-6 -->\r\n  </div>\r\n  <!-- /.row -->\r\n  <div id=\"ajouterTechnologie\" class=\"collapse\" [ngbCollapse]=\"!isCollapsed\">\r\n    <div class=\"well\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input type=\"text\" \r\n            placeholder=\"Technologie\" \r\n            aria-label=\"Technologie\" \r\n            matInput \r\n            [formControl]=\"inputTitreTechnologie\" \r\n            [matAutocomplete]=\"auto\"\r\n            >\r\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onChangeInput($event.option)\">\r\n              <mat-option *ngFor=\"let technologie of filteredTechnologies | async\" [value]=\"technologie.titre\">\r\n                {{technologie.titre}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-6\">\r\n          <mat-slider style=\"width: 100%\"\r\n          [ngModel]=\"(technologieAModifier | async)?.pourcentage\"\r\n          (change)=\"onChangePourcentage($event)\"\r\n          name=\"pourcentage\"\r\n          thumbLabel\r\n          [displayWith]=\"formatLabel\"\r\n          tickInterval=\"100\"\r\n          min=\"1\"\r\n          max=\"100\"\r\n          color=\"warn\"></mat-slider>\r\n        </div>\r\n        <!-- /.col-sm-8 -->\r\n      </div>\r\n      <!-- /.row -->\r\n    </div>\r\n    <!-- /.well -->\r\n  </div>\r\n  <!-- /#ajouterTechnologie -->\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6 col-sm-2\" *ngIf=\"!boutonModifier\">\r\n      <button *ngIf=\"!etatChange\" class=\"waves-effect waves-light btn large\"     [attr.aria-expanded]=\"!isCollapsed\" (click)=\"onClickAjouter()\" type=\"button\" >ajouter</button>\r\n      <button *ngIf=\"etatChange\"  class=\"waves-effect waves-light btn large\"     (click)=\"onClickEnregistrerTechnologie()\" type=\"button\" >Enregistrer</button>\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-2\" *ngIf=\"boutonModifier\">\r\n      <button *ngIf=\"!etatChange\" class=\"waves-effect waves-light btn large\"     type=\"button\">Modifier</button>\r\n      <button *ngIf=\"etatChange\"  class=\"waves-effect waves-light btn large\"     (click)=\"onClickEnregistrerModifTechnologie()\" type=\"button\">Enregistrer</button>\r\n    </div>\r\n    <!-- /.col-xs-6 col-sm-2 -->\r\n    <div class=\"col-xs-6 col-sm-2\" *ngIf=\"etatOuvert && !etatchange\">\r\n      <button class=\"waves-effect waves-light btn large btn-white\" type=\"button\" (click)=\"onClickFermer()\" >Fermer</button>\r\n    </div>\r\n    <!-- /.col-xs-6 col-sm-2 -->\r\n    <div class=\"col-xs-6 col-sm-2\" *ngIf=\"etatChange\">\r\n      <button class=\"waves-effect waves-light btn large btn-white\" type=\"button\" (click)=\"onClickAnnuler()\">Annuler</button>\r\n    </div>\r\n    <!-- /.col-xs-6 col-sm-2 -->\r\n  </div>\r\n  <!-- /.row -->\r\n</div>\r\n<!-- /.bloc-option-profil -->"

/***/ }),

/***/ "./src/app/utilisateur/technologie/technologie.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/utilisateur/technologie/technologie.component.ts ***!
  \******************************************************************/
/*! exports provided: TechnologieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologieComponent", function() { return TechnologieComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _technologie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technologie.service */ "./src/app/utilisateur/technologie/technologie.service.ts");
/* harmony import */ var _technologie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technologie.model */ "./src/app/utilisateur/technologie/technologie.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TechnologieComponent = /** @class */ (function () {
    function TechnologieComponent(technologieService, snackBar, dialog) {
        this.technologieService = technologieService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.tmpTechnologie = new _technologie_model__WEBPACK_IMPORTED_MODULE_3__["Technologie"]("", 10);
        this.etatChange = false;
        this.etatOuvert = false;
        this.config = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarConfig"]();
        this.boutonModifier = false;
        this.isCollapsed = false;
        this.technologiesDisponibles = [
            { titre: 'css', pourcentage: 50 },
            { titre: 'javascript', pourcentage: 70 },
            { titre: 'jQuery', pourcentage: 30 }
        ];
        this.inputTitreTechnologie = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.question = 'Voulez vous ajouter ';
    }
    TechnologieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.technologieService.technologiesChanged.subscribe(function (datas) {
            _this.technologies = datas.reverse();
        });
        this.technologieService.getTechnologies(this.keyUtilisateur);
        this.technologieService.technologiesDisponibleChanged.subscribe(function (datas) {
            _this.technologiesDisponibles = datas;
            _this.filteredTechnologies = _this.inputTitreTechnologie.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (technologie) { return technologie ? _this._filter(technologie) : _this.technologiesDisponibles.slice(); }));
        });
        this.technologieService.getTechnologiesDisponible();
        this.config.duration = 5000;
    };
    TechnologieComponent.prototype.resetForms = function () {
        this.formTechnologie.controls['pourcentage'].setValue(null);
    };
    TechnologieComponent.prototype.formatLabel = function (value) {
        if (!value) {
            return 0;
        }
        return value + "%";
    };
    TechnologieComponent.prototype._filter = function (name) {
        var filterValue = name.toLowerCase();
        var results = this.technologiesDisponibles.filter(function (option) { return option.titre.toLowerCase().indexOf(filterValue) === 0; });
        if (results.length < 1) {
            results = [{ titre: this.question + name + '?', pourcentage: 0 }];
            // results = [this.question + JSON.stringify(name) + '?'];
        }
        return results;
    };
    TechnologieComponent.prototype.onChangeInput = function (option) {
        this.etatChange = true;
        this.etatOuvert = false;
        if (option.value.indexOf(this.question) === 0) {
            var nouvelleTechnologie = option.value.substring(this.question.length).split('?')[0];
            console.log(nouvelleTechnologie);
            this.technologieService.ajouterTechnologieDisponible(nouvelleTechnologie);
            this.inputTitre = nouvelleTechnologie;
            this.inputTitreTechnologie.setValue(this.inputTitre);
        }
        else {
            this.inputTitre = option.value;
        }
    };
    TechnologieComponent.prototype.onChangePourcentage = function (event) {
        this.etatChange = true;
        this.etatOuvert = false;
        if (event.option) {
            this.inputTitre = event.option.value;
        }
    };
    TechnologieComponent.prototype.afficherNotification = function (message, couleur) {
        this.config.panelClass = [couleur];
        this.snackBar.open(message, undefined, this.config);
    };
    TechnologieComponent.prototype.AjouterTechnologie = function () {
        var _this = this;
        this.technologieService.ajouterTechnologie(this.keyUtilisateur, this.tmpTechnologie).then(function (result) {
            _this.afficherNotification('Ajouté', 'background-verte');
            _this.etatChange = false;
            //this.resetForms();
        })
            .catch(function (error) {
            _this.afficherNotification('Ajout non réussi', 'background-rouge');
        });
    };
    TechnologieComponent.prototype.onClickEnregistrerTechnologie = function () {
        this.tmpTechnologie.titre = this.inputTitre;
        this.tmpTechnologie.pourcentage = this.formTechnologie.controls['pourcentage'].value;
        this.isCollapsed = false;
        this.AjouterTechnologie();
    };
    TechnologieComponent.prototype.onClickSupprimerTechnologie = function (docTechnologieId) {
        var _this = this;
        this.technologieService.supprimerTechnologie(this.keyUtilisateur, docTechnologieId).then(function (result) {
            _this.afficherNotification('Supprimé', 'background-verte');
            _this.etatChange = false;
            _this.resetForms();
        })
            .catch(function (error) {
            _this.afficherNotification('Suppression non réussite', 'background-rouge');
        });
    };
    TechnologieComponent.prototype.onClickEnregistrerModifTechnologie = function () {
        var _this = this;
        this.technologieService.modifierTechnologie(this.keyUtilisateur, this.docTechnologieIdCourant, this.getTechnologieAModifier()).then(function (result) {
            _this.afficherNotification('Modifié', 'background-verte');
            _this.boutonModifier = false;
            _this.etatChange = false;
            _this.inputTitreTechnologie.setValue(undefined);
            _this.isCollapsed = false;
            _this.resetForms();
        })
            .catch(function (error) {
            _this.afficherNotification('Modification non réussite', 'background-rouge');
        });
    };
    TechnologieComponent.prototype.getTechnologieAModifier = function () {
        this.tmpNouvelleTechnologieModifie.pourcentage = this.formTechnologie.controls['pourcentage'].value;
        return this.tmpNouvelleTechnologieModifie;
    };
    TechnologieComponent.prototype.onClickModifierTechnologie = function (docTechnologieId) {
        var _this = this;
        this.boutonModifier = true;
        this.etatOuvert = true;
        this.docTechnologieIdCourant = docTechnologieId;
        this.isCollapsed = true;
        this.technologieAModifier = this.technologieService.getTechnologie(this.keyUtilisateur, docTechnologieId);
        this.technologieAModifier.subscribe(function (datas) {
            _this.tmpNouvelleTechnologieModifie = datas;
            _this.inputTitreTechnologie.disable();
            _this.inputTitreTechnologie.setValue(_this.tmpNouvelleTechnologieModifie.titre);
        });
    };
    TechnologieComponent.prototype.onClickAnnuler = function () {
        this.etatOuvert = false;
        this.boutonModifier = false;
        this.etatChange = false;
        this.isCollapsed = false;
        this.resetForms();
    };
    TechnologieComponent.prototype.onClickFermer = function () {
        this.etatOuvert = false;
        this.boutonModifier = false;
        this.etatChange = false;
        this.isCollapsed = false;
        this.resetForms();
    };
    TechnologieComponent.prototype.onClickAjouter = function () {
        this.etatOuvert = true;
        this.isCollapsed = true;
        this.inputTitreTechnologie.enable();
        this.inputTitreTechnologie.setValue("");
    };
    TechnologieComponent.prototype.onClickModifier = function () {
        this.etatOuvert = true;
        this.isCollapsed = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], TechnologieComponent.prototype, "keyUtilisateur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('groupFormTechnologie'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"])
    ], TechnologieComponent.prototype, "formTechnologie", void 0);
    TechnologieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technologie',
            template: __webpack_require__(/*! ./technologie.component.html */ "./src/app/utilisateur/technologie/technologie.component.html"),
            styles: [__webpack_require__(/*! ./technologie.component.css */ "./src/app/utilisateur/technologie/technologie.component.css")],
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"] }],
        }),
        __metadata("design:paramtypes", [_technologie_service__WEBPACK_IMPORTED_MODULE_2__["TechnologieService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], TechnologieComponent);
    return TechnologieComponent;
}());



/***/ }),

/***/ "./src/app/utilisateur/technologie/technologie.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/utilisateur/technologie/technologie.model.ts ***!
  \**************************************************************/
/*! exports provided: Technologie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Technologie", function() { return Technologie; });
var Technologie = /** @class */ (function () {
    function Technologie(titre, pourcentage) {
        this.titre = titre;
        this.pourcentage = pourcentage;
    }
    return Technologie;
}());



/***/ }),

/***/ "./src/app/utilisateur/technologie/technologie.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/utilisateur/technologie/technologie.service.ts ***!
  \****************************************************************/
/*! exports provided: TechnologieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologieService", function() { return TechnologieService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TechnologieService = /** @class */ (function () {
    function TechnologieService(afs) {
        this.afs = afs;
        this.technologiesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.technologieChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.technologiesDisponibleChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    TechnologieService.prototype.getTechnologies = function (docUtilisateurId) {
        var _this = this;
        //return this.afs.collection('emplois').valueChanges();
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('technologies', function (ref) { return ref.orderBy('pourcentage'); })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.technologiesLocalTmp = response;
            _this.technologiesChanged.next(_this.technologiesLocalTmp.slice()); // spread operator to create a copy
        });
    };
    TechnologieService.prototype.getTechnologie = function (docUtilisateurId, docTechnologieId) {
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('technologies').doc(docTechnologieId).valueChanges();
    };
    TechnologieService.prototype.ajouterTechnologie = function (docUtilisateurId, technologie) {
        var technologieJSON = JSON.parse(JSON.stringify(technologie));
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('technologies').add(technologieJSON);
    };
    TechnologieService.prototype.supprimerTechnologie = function (docUtilisateurId, docTechnologieId) {
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('technologies').doc(docTechnologieId).delete();
    };
    TechnologieService.prototype.modifierTechnologie = function (docUtilisateurId, docTechnologieId, technologie) {
        var technologieJSON = JSON.parse(JSON.stringify(technologie));
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('technologies').doc(docTechnologieId).update(technologieJSON);
    };
    TechnologieService.prototype.getTechnologiesDisponible = function () {
        var _this = this;
        return this.afs.collection('technologies_disponibles')
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({}, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.technologiesDisponibleChanged.next(response.slice()); // spread operator to create a copy
        });
    };
    TechnologieService.prototype.ajouterTechnologieDisponible = function (technologieDisponible) {
        return this.afs.collection('technologies_disponibles').add({ 'titre': technologieDisponible });
    };
    TechnologieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]])
    ], TechnologieService);
    return TechnologieService;
}());



/***/ }),

/***/ "./src/app/utilisateur/utilisateur.component.html":
/*!********************************************************!*\
  !*** ./src/app/utilisateur/utilisateur.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><div class=\"separation\"></div></div>\r\n  <!-- /.container -->\r\n\r\n  <div class=\"bloc-profil\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\">\r\n                <div class=\"avatar\">\r\n                    <img [attr.src]=\"imgProfil\"  class=\"img-circle shadow\" alt=\"\" width=\"80\">\r\n                    <div><button type=\"button\" class=\"btn-modifier\" mat-button (click)=\"imageProfilInput.click()\">Modifier</button></div>\r\n                    <input hidden type=\"file\" #imageProfilInput class=\"hidden\" (change)=\"changeImageProfil($event)\">\r\n                </div>\r\n                <!-- /.avatar -->\r\n            </div>\r\n            <!-- /.col-sm-1 -->          \r\n            <div class=\"col-sm-5\">\r\n                <div class=\"desc-profil\">\r\n                    <div class=\"nom-membre\">\r\n                        {{utilisateur?.nom_utilisateur}}\r\n                    </div>\r\n                    <!-- /.nom-membre -->\r\n                    <div class=\"nom-profil\">\r\n                        {{utilisateur?.nom}}\r\n                    </div>\r\n                    <!-- /.nom-membre -->\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n                <!-- /.desc-profil -->\r\n            </div>\r\n            <div class=\"col-sm-6 text-right btn-deconnexion\">\r\n                <button type=\"button\" mat-button color=\"warn\" (click)=\"onClickDeconnexion()\">Déconnexion</button>\r\n            </div>\r\n        </div>\r\n          \r\n      </div>\r\n      <!-- /.container -->\r\n  </div>\r\n  <!-- /.bloc-profil -->\r\n\r\n  <div class=\"menu-profil\">\r\n      <a href=\"\" class=\"active\">\r\n          <i class=\"material-icons\">error</i>\r\n          <span>Profil</span>\r\n      </a>\r\n      <a href=\"\">\r\n          <i class=\"material-icons\">error</i>\r\n          <span>Candidature</span>\r\n      </a>\r\n      <a href=\"\">\r\n          <i class=\"material-icons\">notifications_active</i>\r\n          <span>Alerte Job</span>\r\n      </a>\r\n      <a href=\"\">\r\n          <i class=\"material-icons\">favorite</i>\r\n          <span>Sauvegargdés</span>\r\n      </a>\r\n  </div>\r\n  <!-- /.menu-profil -->\r\n  \r\n  <div class=\"container\">\r\n    <form #formProfil=\"ngForm\" (ngSubmit)=\"onClickMettreAJour(formProfil)\">\r\n      <div class=\"info-etape\">\r\n          Compléter votre profil : 4 étapes restantes\r\n      </div>\r\n      <!-- /.info-etape -->\r\n      <div *ngIf=\"statusCompte\">\r\n        <div class=\"bloc-option-profil\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"titre-option-profil\">\r\n                        Uploader votre CV\r\n                    </div>\r\n                    <!-- /.titre-option-profil -->\r\n\r\n                    <div class=\"row\" *ngIf=\"downloadCvURLInitial || (downloadCvURLChanged | async) || afficheProgress\">\r\n                        <div class=\"col-sm-12\"> \r\n                            <table class=\"highlight\">\r\n                            <thead>\r\n                                <tr>\r\n                                <th>CV</th>\r\n                                <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                    \r\n                            <tbody>\r\n                                <tr>\r\n                                <td>\r\n                                    <mat-progress-bar *ngIf=\"afficheProgress\" mode=\"determinate\" [value]=\"uploadCvPercent | async\"></mat-progress-bar>\r\n                                    \r\n                                    <a *ngIf=\"downloadCvURLInitial && !(downloadCvURLChanged | async)\" [href]=\"downloadCvURLInitial\" target=\"_blank\">Votre CV</a>\r\n                                    <a *ngIf=\"downloadCvURLChanged | async\" [href]=\"downloadCvURLChanged | async\" target=\"_blank\">Votre nouveau CV</a>\r\n                                </td>\r\n                                <td class=\"action\"> \r\n                                    <i *ngIf=\"downloadCvURLInitial || (downloadCvURLChanged | async)\" class=\"material-icons \" (click)=\"onClickSupprimerCV($event)\">delete</i>\r\n                                </td>\r\n                                </tr>\r\n                            </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <!-- /.col-sm-12 -->\r\n                    </div>\r\n                    <!-- /.row -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-4\">\r\n                            <br>\r\n                            <button type=\"button\" class=\"bg-rouge\" mat-button color=\"warn\" mat-flat-button (click)=\"fileInput.click()\">\r\n                                Uploader <i class=\"fa fa-search\"></i>\r\n                            </button>\r\n                            <input hidden type=\"file\" #fileInput class=\"hidden\" (change)=\"uploadFile($event)\">\r\n                            \r\n                            \r\n                        </div>\r\n                    </div>\r\n                    <!-- /.row -->\r\n                </div>\r\n                <!-- /.col-sm-6 -->\r\n            </div>\r\n            <!-- /.row -->\r\n        </div>\r\n        <!-- /.bloc-option-profil -->\r\n      <div class=\"bloc-option-profil\">\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                  <div class=\"titre-option-profil\">\r\n                      Quel type de job vous recherchez?\r\n                  </div>\r\n                  <!-- /.titre-option-profil -->\r\n                  <div class=\"row\">\r\n                      <div class=\"col-xs-4\">\r\n                          <!-- <button class=\"waves-effect waves-light btn btn-type-contrat large (class.active disponible)\">plein temps</button> -->\r\n                          <button type=\"button\" mat-flat-button [ngClass]=\"{'bg-rouge': typeContrat === 'plein temps'}\" (click)=\"onClickTypeContrat('plein temps')\" class=\"bg-blanc large btn-type-contrat\">plein temps</button>\r\n                          \r\n                      </div>\r\n                      <!-- /.col-xs-6 -->\r\n                      <div class=\"col-xs-4\">\r\n                          <!-- <button class=\"waves-effect waves-light btn btn-type-contrat large (class.active disponible)\">temps partiel</button> -->\r\n                          <button type=\"button\" mat-flat-button [ngClass]=\"{'bg-rouge': typeContrat === 'temps partiel'}\" (click)=\"onClickTypeContrat('temps partiel')\" class=\"bg-blanc large btn-type-contrat\">temps partiel</button>\r\n                      </div>\r\n                      <!-- /.col-xs-6 -->\r\n                  </div>\r\n                  <!-- /.row -->\r\n              </div>\r\n              <!-- /.col-sm-6 -->\r\n              <div class=\"col-sm-6\">\r\n                  <div class=\"titre-option-profil\">\r\n                      Résumé\r\n                  </div>\r\n                  <!-- /.titre-option-profil -->\r\n                  <div class=\"input-group container-editable\">\r\n                      <span class=\"edit-champ\"><i class=\"material-icons\">create</i></span>\r\n\r\n                      <textarea [(ngModel)]=\"resumeAF\" name=\"resume\" id=\"textarea1\" class=\"champ-input materialize-textarea\" placeholder=\"Présentez-vous avec un court résumé et captez l'attention des employeurs en mettant en évidence vos meilleures caractéristiques et compétences.\" ></textarea>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-sm-4\">\r\n                            <button type=\"button\" class=\"bg-rouge\" mat-button color=\"warn\" mat-flat-button (click)=\"onClickEnregistrerResume(formProfil)\">\r\n                                Enregistrer <i class=\"fa fa-search\"></i>\r\n                            </button>\r\n                          </div>\r\n                          <!-- /.col-sm-2 -->\r\n                      </div>\r\n                      <!-- /.row -->\r\n                  </div>\r\n                  <!-- /.input-group -->\r\n                  \r\n              </div>\r\n              <!-- /.col-sm-6 -->\r\n          </div>\r\n          <!-- /.row -->\r\n      </div>\r\n      <!-- /.bloc-option-profil -->\r\n\r\n      <app-education   *ngIf=\"utilisateur\"     [groupFormEducation]=\"formProfil\" [keyUtilisateur]=\"utilisateur.$key\"></app-education>\r\n      <app-experience  *ngIf=\"utilisateur\"    [groupFormExperience]=\"formProfil\" [keyUtilisateur]=\"utilisateur.$key\"></app-experience>\r\n      <app-langue      *ngIf=\"utilisateur\"        [groupFormLangue]=\"formProfil\" [keyUtilisateur]=\"utilisateur.$key\"></app-langue>\r\n      <app-technologie *ngIf=\"utilisateur\"   [groupFormTechnologie]=\"formProfil\" [keyUtilisateur]=\"utilisateur.$key\"></app-technologie>\r\n      \r\n      \r\n      \r\n\r\n      <div class=\"bloc-option-profil\">\r\n          <div class=\"titre-option-profil souligne\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                      Motivations\r\n                  </div>\r\n                  <!-- /.col-sm-4 -->\r\n              </div>\r\n              <!-- /.row --> \r\n          </div>\r\n          <!-- /.titre-option-profil -->\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                  <div class=\"txt-infos-profil\">\r\n                      Raffiner votre rénumération annuelle souhaitée et les axes de motivation, ...\r\n                  </div>\r\n                  <!-- /.txt-infos-profil -->\r\n              </div>\r\n              <!-- /.col-sm-6 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-5\">\r\n                <app-renumeration *ngIf=\"utilisateur\" [groupFormRenumeration]=\"formProfil\" [keyUtilisateur]=\"utilisateur.$key\"></app-renumeration>\r\n                <br><label class=\"label-input\">Axe de motivation</label><br>\r\n                <textarea class=\"champ-input materialize-textarea\" [ngModel]=\"axeAF\" name=\"axeMotivation\" style=\"width:100%; height:120px;\"></textarea>\r\n                \r\n              </div>\r\n              <!-- /.col-sm-4 -->\r\n              <div class=\"col-sm-6 col-sm-push-1\">\r\n                  <div class=\"input-group input-sivp\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-sm-4\">\r\n                              \r\n                          </div>\r\n                          <!-- /.col-sm-3 -->\r\n                          <div class=\"col-sm-5\">\r\n                            <mat-slide-toggle \r\n                            color=\"warn\"\r\n                            (change)=\"onClickStatusSivp()\"\r\n                            [checked]=\"dureeSivpStatus\">\r\n                            Eligible au SIVP</mat-slide-toggle>\r\n                          </div>\r\n                          <!-- /.col-sm-3 -->\r\n                      </div>\r\n                      <!-- /.row -->\r\n                      <label class=\"label-input txt-sivp\">Durée SIVP restante ( <span *ngIf=\"dureeSivpAF!==undefined\">{{dureeSivpAF}}</span> mois )</label>\r\n                      <div class=\"range-field\">\r\n                          <label class=\"espacement\"></label>\r\n                          <mat-slider style=\"width: 100%\"\r\n                            name=\"dureeSivp\"\r\n                            \r\n                            [disabled]=\"!dureeSivpStatus\"\r\n                            [(ngModel)]=\"dureeSivpAF\"\r\n                            (change)=\"onChangeSivp($event)\"\r\n                            thumbLabel\r\n                            [displayWith]=\"formatLabel\"\r\n                            tickInterval=\"24\"\r\n                            min=\"1\"\r\n                            max=\"24\"\r\n                            color=\"warn\">\r\n                          </mat-slider>\r\n                          <div class=\"pull-left pourcentage\">\r\n                              1\r\n                          </div>\r\n                          <!-- /.pull-left pourcentage -->\r\n                          <div class=\"pull-right pourcentage\">\r\n                              24\r\n                          </div>\r\n                          <!-- /.pull-left pourcentage -->\r\n                          <div class=\"clearfix\"></div>\r\n                          <!-- /.clearfix -->\r\n                        </div>\r\n                  </div>\r\n                  <!-- /.input-group -->\r\n              </div>\r\n              <!-- /.col-sm-8 -->\r\n          </div>\r\n          <!-- /.row -->\r\n      </div>\r\n      <!-- /.bloc-option-profil -->\r\n      \r\n      <div class=\"bloc-option-profil\">\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                  <button class=\"waves-effect waves-light btn large\">mettre à jour le profil</button>\r\n              </div>\r\n              <!-- /.col-sm-4 -->\r\n          </div>\r\n          <!-- /.row -->\r\n      </div>\r\n      <!-- /.bloc-option-profil -->\r\n\r\n      <div class=\"bloc-option-profil\">\r\n          <div class=\"titre-option-profil souligne\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                      CHANGER LE MOT DE PASSE\r\n                  </div>\r\n                  <!-- /.col-sm-4 -->\r\n              </div>\r\n              <!-- /.row --> \r\n          </div>\r\n          <!-- /.titre-option-profil -->\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                  <mat-form-field class=\"large mp\">\r\n                    <input name=\"ancienMotDePasse\" matInput placeholder=\"Mot de passe actuel\" type=\"password\" ngModel required>\r\n                  </mat-form-field>\r\n              </div>\r\n              <!-- /.col-sm-4 -->\r\n              <div class=\"col-sm-4\">\r\n                <mat-form-field class=\"large mp\">\r\n                    <input name=\"newMotDePasse\" matInput placeholder=\"Nouveau mot de passe\" type=\"password\" ngModel required>\r\n                  </mat-form-field>\r\n              </div>\r\n              <!-- /.col-sm-4 -->\r\n              <div class=\"col-sm-4\">\r\n                  <div class=\"input-group input-mp\">\r\n                      <button type=\"button\" class=\"waves-effect waves-light btn large\" (click)=\"onClickModifierMotPasse()\">CHANGER LE MOT DE PASSE</button>\r\n                  </div>\r\n                  <!-- /.input-group -->\r\n              </div>\r\n              <!-- /.col-sm-4 -->\r\n          </div>\r\n          <!-- /.row -->\r\n      </div>\r\n      <!-- /.bloc-option-profil -->\r\n    </div>\r\n    <div class=\"bloc-option-profil\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <button type=\"button\" class=\"waves-effect waves-light btn btn-type-contrat large\" (click)=\"onClickSupprimerCompte()\"><span *ngIf=\"statusCompte, else activer\">Désactiver </span><ng-template #activer>Activer </ng-template> mon compte</button>\r\n            </div>\r\n            <!-- /.col-sm-4 -->\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    <!-- /.bloc-option-profil -->\r\n    </form>  \r\n  </div>\r\n  <!-- /.container -->\r\n"

/***/ }),

/***/ "./src/app/utilisateur/utilisateur.component.scss":
/*!********************************************************!*\
  !*** ./src/app/utilisateur/utilisateur.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utilisateur/utilisateur.component.ts":
/*!******************************************************!*\
  !*** ./src/app/utilisateur/utilisateur.component.ts ***!
  \******************************************************/
/*! exports provided: UtilisateurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilisateurComponent", function() { return UtilisateurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilisateur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilisateur.service */ "./src/app/utilisateur/utilisateur.service.ts");
/* harmony import */ var _inscription_inscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inscription/inscription.service */ "./src/app/inscription/inscription.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UtilisateurComponent = /** @class */ (function () {
    function UtilisateurComponent(inscriptionService, utilisateurService, snackBar, storage) {
        this.inscriptionService = inscriptionService;
        this.utilisateurService = utilisateurService;
        this.snackBar = snackBar;
        this.storage = storage;
        this.dureeSivpAF = 10;
        this.dureeSivpStatus = true;
        this.config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
        this.statusCv = false;
        this.afficheProgress = false;
        this.statusCompte = false;
    }
    UtilisateurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilisateurService.utilisateurChanged.subscribe(function (datas) {
            _this.utilisateurs = datas;
            _this.utilisateur = _this.utilisateurs[0];
            _this.typeContrat = _this.utilisateur.type_contrat;
            _this.utilisateurService.setDocUtilisateurId(_this.utilisateur.$key);
            _this.resumeAF = _this.utilisateur.resume;
            _this.axeAF = _this.utilisateur.axe_motivation;
            _this.dureeSivpStatus = _this.utilisateur.sivp;
            _this.dureeSivpAF = _this.utilisateur.duree_sivp;
            _this.statusCv = _this.utilisateur.cv;
            _this.urlImgProfil = _this.utilisateur.image;
            _this.statusCompte = _this.utilisateur.status;
            var refProfil = _this.storage.ref('utilisateurs/' + _this.utilisateur.nom_utilisateur + '/image-profil-' + _this.utilisateur.nom_utilisateur);
            refProfil.getDownloadURL().subscribe(function (data) {
                _this.imgProfil = data;
            }, function (error) {
                _this.imgProfil = "assets/images/avatar.png";
            });
            if (_this.statusCv) {
                var refCv = _this.storage.ref('utilisateurs/' + _this.utilisateur.nom_utilisateur + '/cv-' + _this.utilisateur.nom_utilisateur);
                refCv.getDownloadURL().subscribe(function (data) {
                    _this.downloadCvURLInitial = data;
                });
            }
        });
        //this.utilisateurService.getUtilisateurDev();
        this.utilisateurService.getUtilisateur();
        this.config.duration = 5000;
    };
    UtilisateurComponent.prototype.onClickDeconnexion = function () {
        this.inscriptionService.deconnexionUtilisateur();
    };
    UtilisateurComponent.prototype.onClickSupprimerCompte = function () {
        this.statusCompte = !this.statusCompte;
        this.utilisateur.status = this.statusCompte;
        this.modifierUtilisateur();
    };
    UtilisateurComponent.prototype.onClickModifierMotPasse = function () {
        var _this = this;
        this.inscriptionService.changerMotPasseUtilisateur(this.utilisateur.email, this.formProfil.value.ancienMotDePasse, this.formProfil.value.newMotDePasse)
            .then(function (result1) {
            result1.user.updatePassword(_this.formProfil.value.newMotDePasse).then(function (result) {
                _this.inscriptionService.updateUtilisateurCourant(result1.user);
                _this.afficherNotification('Mot de passe Modifié', 'background-verte');
                _this.formProfil.controls['ancienMotDePasse'].setValue('');
                _this.formProfil.controls['newMotDePasse'].setValue('');
            })
                .catch(function (error) {
                _this.afficherNotification('Entrer un nouveau mot de passe valide', 'background-rouge');
            });
        })
            .catch(function (error) {
            _this.afficherNotification('Ancien mot de passe invalide', 'background-rouge');
        });
    };
    UtilisateurComponent.prototype.onClickSupprimerCV = function (event) {
        var filePath = 'utilisateurs/' + this.utilisateur.nom_utilisateur + '/cv-' + this.utilisateur.nom_utilisateur;
        var fileRef = this.storage.ref(filePath).delete();
        this.downloadCvURLInitial = undefined;
        this.downloadCvURLChanged = undefined;
        this.utilisateur.cv = false;
        this.modifierUtilisateur();
    };
    UtilisateurComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = 'utilisateurs/' + this.utilisateur.nom_utilisateur + '/cv-' + this.utilisateur.nom_utilisateur;
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // observe percentage changes
        this.uploadCvPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            _this.downloadCvURLChanged = fileRef.getDownloadURL();
            console.log("votre cv");
            console.log(_this.downloadCvURLInitial);
            _this.downloadCvURLInitial = undefined;
            _this.afficheProgress = false;
            _this.utilisateur.cv = true;
            _this.modifierUtilisateur();
        }))
            .subscribe(function (data) {
            _this.downloadCvURLInitial = undefined;
            _this.afficheProgress = true;
        });
    };
    UtilisateurComponent.prototype.changeImageProfil = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = 'utilisateurs/' + this.utilisateur.nom_utilisateur + '/image-profil-' + this.utilisateur.nom_utilisateur;
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // observe percentage changes
        this.uploadCvPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            fileRef.getDownloadURL().subscribe(function (data) {
                _this.imgProfil = data;
            });
        }))
            .subscribe();
    };
    UtilisateurComponent.prototype.formatLabel = function (value) {
        if (!value) {
            return 0;
        }
        return value;
    };
    UtilisateurComponent.prototype.onChangeSivp = function (event) {
    };
    UtilisateurComponent.prototype.onClickStatusSivp = function () {
        this.dureeSivpStatus = !this.dureeSivpStatus;
        if (!this.dureeSivpStatus) {
            this.dureeSivpAF = 0;
        }
    };
    UtilisateurComponent.prototype.afficherNotification = function (message, couleur) {
        this.config.panelClass = [couleur];
        this.snackBar.open(message, undefined, this.config);
    };
    UtilisateurComponent.prototype.modifierUtilisateur = function () {
        var _this = this;
        this.utilisateurService.modifierUtilisateur(this.utilisateur).then(function (result) {
            _this.afficherNotification('Sauvegardé', 'background-verte');
        })
            .catch(function (error) {
            _this.afficherNotification('Sauvegarde non réussi', 'background-rouge');
        });
    };
    UtilisateurComponent.prototype.onClickEnregistrerResume = function (form) {
        this.utilisateur.resume = form.value.resume;
        this.modifierUtilisateur();
    };
    UtilisateurComponent.prototype.onClickMettreAJour = function () {
        this.utilisateur.resume = this.formProfil.value.resume;
        this.utilisateur.axe_motivation = this.formProfil.value.axeMotivation;
        this.utilisateur.sivp = this.dureeSivpStatus;
        this.utilisateur.duree_sivp = this.dureeSivpAF;
        this.modifierUtilisateur();
    };
    UtilisateurComponent.prototype.onClickTypeContrat = function (typeContratPassed) {
        this.utilisateur.type_contrat = typeContratPassed;
        this.modifierUtilisateur();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formProfil'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], UtilisateurComponent.prototype, "formProfil", void 0);
    UtilisateurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-utilisateur',
            template: __webpack_require__(/*! ./utilisateur.component.html */ "./src/app/utilisateur/utilisateur.component.html"),
            styles: [__webpack_require__(/*! ./utilisateur.component.scss */ "./src/app/utilisateur/utilisateur.component.scss")]
        }),
        __metadata("design:paramtypes", [_inscription_inscription_service__WEBPACK_IMPORTED_MODULE_2__["InscriptionService"], _utilisateur_service__WEBPACK_IMPORTED_MODULE_1__["UtilisateurService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], UtilisateurComponent);
    return UtilisateurComponent;
}());



/***/ }),

/***/ "./src/app/utilisateur/utilisateur.service.ts":
/*!****************************************************!*\
  !*** ./src/app/utilisateur/utilisateur.service.ts ***!
  \****************************************************/
/*! exports provided: UtilisateurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilisateurService", function() { return UtilisateurService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UtilisateurService = /** @class */ (function () {
    function UtilisateurService(afs) {
        this.afs = afs;
        this.utilisateursChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.utilisateurChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    UtilisateurService.prototype.getUtilisateurs = function () {
        var _this = this;
        //return this.afs.collection('emplois').valueChanges();
        return this.afs.collection('utilisateurs')
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.utilisateursLocalTmp = response;
            _this.utilisateursChanged.next(_this.utilisateursLocalTmp.slice()); // spread operator to create a copy
        });
    };
    UtilisateurService.prototype.getUtilisateur = function () {
        var _this = this;
        return this.afs.collection('utilisateurs', function (ref) { return ref.where('id', '==', _this.tmpIdUtilisateur); })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.utilisateurLocalTmp = response;
            _this.utilisateurChanged.next(_this.utilisateurLocalTmp.slice());
        });
    };
    UtilisateurService.prototype.getUtilisateurDev = function () {
        var _this = this;
        return this.afs.collection('utilisateurs', function (ref) { return ref.where('id', '==', 'QR7DZXIF8hR1x6vwc8MlmOtfAt22'); })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
        })
            .subscribe(function (response) {
            _this.utilisateurLocalTmp = response;
            _this.utilisateurChanged.next(_this.utilisateurLocalTmp.slice());
        });
    };
    UtilisateurService.prototype.setDocUtilisateurId = function (id) {
        this.docUtilisateurId = id; // On n'utilise plus l'id d'authentification, on utilise le key de document utilisateur
    };
    UtilisateurService.prototype.getDocUtilisateurId = function () {
        return this.docUtilisateurId; // On n'utilise plus l'id d'authentification, on utilise le key de document utilisateur
    };
    UtilisateurService.prototype.creerUtilisateur = function (nom_utilisateur, email, id) {
        var listeUtilisateurs = this.afs.collection('utilisateurs');
        listeUtilisateurs.add({ nom_utilisateur: nom_utilisateur, email: email, id: id });
        this.tmpIdUtilisateur = id; // On retourne l'id utilisée par l'autentification pour l'utiliser après pour getUtilisateur()
    };
    UtilisateurService.prototype.connecterUtilisateur = function (id) {
        this.tmpIdUtilisateur = id; // On retourne l'id utilisée par l'autentification pour l'utiliser après pour getUtilisateur()
    };
    UtilisateurService.prototype.modifierUtilisateur = function (utilisateur) {
        return this.afs.collection('utilisateurs').doc(this.getDocUtilisateurId()).update(utilisateur);
    };
    UtilisateurService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]])
    ], UtilisateurService);
    return UtilisateurService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! E:\VintoJob\hj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map