"use strict";
(self["webpackChunklibrary_frontend"] = self["webpackChunklibrary_frontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register/register.component */ 3412);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/book-list/book-list.component */ 1852);
/* harmony import */ var _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/book-form/book-form.component */ 1679);
/* harmony import */ var _components_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/member-list/member-list.component */ 2369);
/* harmony import */ var _components_member_form_member_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/member-form/member-form.component */ 9027);
/* harmony import */ var _components_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loan-list/loan-list.component */ 2904);
/* harmony import */ var _components_loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loan-form/loan-form.component */ 7530);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: 'dashboard',
  component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'books',
  component: _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__.BookListComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'books/new',
  component: _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_4__.BookFormComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'books/edit/:id',
  component: _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_4__.BookFormComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'members',
  component: _components_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_5__.MemberListComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'members/new',
  component: _components_member_form_member_form_component__WEBPACK_IMPORTED_MODULE_6__.MemberFormComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'members/edit/:id',
  component: _components_member_form_member_form_component__WEBPACK_IMPORTED_MODULE_6__.MemberFormComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'loans',
  component: _components_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_7__.LoanListComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'loans/new',
  component: _components_loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_8__.LoanFormComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'loans/edit/:id',
  component: _components_loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_8__.LoanFormComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: '**',
  redirectTo: '/dashboard'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function AppComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class AppComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.title = 'Library Management System';
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 2,
      consts: [[1, "app-container"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["class", "navbar-nav ms-auto", 4, "ngIf"], [1, "container-fluid", "mt-4"], [1, "navbar-nav", "ms-auto"], [1, "btn", "btn-outline-light", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_5_Template, 3, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.isAuthenticated());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: [".app-container[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  padding: 0 20px;\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .container-fluid[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ 3412);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/book-list/book-list.component */ 1852);
/* harmony import */ var _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/book-form/book-form.component */ 1679);
/* harmony import */ var _components_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/member-list/member-list.component */ 2369);
/* harmony import */ var _components_member_form_member_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/member-form/member-form.component */ 9027);
/* harmony import */ var _components_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/loan-list/loan-list.component */ 2904);
/* harmony import */ var _components_loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/loan-form/loan-form.component */ 7530);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/book.service */ 4371);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/member.service */ 6341);
/* harmony import */ var _services_loan_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/loan.service */ 5272);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);





// Components









// Services




// Guards


class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService, _services_book_service__WEBPACK_IMPORTED_MODULE_12__.BookService, _services_member_service__WEBPACK_IMPORTED_MODULE_13__.MemberService, _services_loan_service__WEBPACK_IMPORTED_MODULE_14__.LoanService, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent, _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent, _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__.BookListComponent, _components_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__.BookFormComponent, _components_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_7__.MemberListComponent, _components_member_form_member_form_component__WEBPACK_IMPORTED_MODULE_8__.MemberFormComponent, _components_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_9__.LoanListComponent, _components_loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_10__.LoanFormComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule]
  });
})();

/***/ }),

/***/ 1679:
/*!*************************************************************!*\
  !*** ./src/app/components/book-form/book-form.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookFormComponent": () => (/* binding */ BookFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BookFormComponent {
  static {
    this.ɵfac = function BookFormComponent_Factory(t) {
      return new (t || BookFormComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookFormComponent,
      selectors: [["app-book-form"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"]],
      template: function BookFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Book Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Book form functionality will be implemented here.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 1852:
/*!*************************************************************!*\
  !*** ./src/app/components/book-list/book-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookListComponent": () => (/* binding */ BookListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/book.service */ 4371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function BookListComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading books...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BookListComponent_div_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No books found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookListComponent_div_22_div_5_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.openAddForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add First Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.searchTerm || ctx_r4.statusFilter ? "No books match your search criteria." : "Start by adding your first book!");
  }
}
function BookListComponent_div_22_div_6_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td")(15, "div", 36)(16, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookListComponent_div_22_div_6_tr_17_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const book_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.editBook(book_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookListComponent_div_22_div_6_tr_17_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const book_r9 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.deleteBook(book_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const book_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r9.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 7, book_r9.publishedDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r8.getStatusClass(book_r9.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", book_r9.status || "AVAILABLE", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", book_r9.status === "ISSUED");
  }
}
function BookListComponent_div_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "table", 32)(2, "thead", 33)(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Published Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BookListComponent_div_22_div_6_tr_17_Template, 20, 10, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.filteredBooks);
  }
}
function BookListComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BookListComponent_div_22_div_5_Template, 8, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BookListComponent_div_22_div_6_Template, 18, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Books List (", ctx_r1.filteredBooks.length, " books)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.filteredBooks.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.filteredBooks.length > 0);
  }
}
function BookListComponent_div_23_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 58);
  }
}
function BookListComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "div", 44)(4, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookListComponent_div_23_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BookListComponent_div_23_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.saveBook());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 49)(10, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Title *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookListComponent_div_23_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.currentBook.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 49)(14, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Author *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookListComponent_div_23_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.currentBook.author = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 49)(18, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Published Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookListComponent_div_23_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.publishedDateString = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 54)(22, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookListComponent_div_23_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, BookListComponent_div_23_span_25_Template, 1, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.isEditMode ? "Edit Book" : "Add New Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.currentBook.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.currentBook.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.publishedDateString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.currentBook.title || !ctx_r2.currentBook.author || ctx_r2.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.isEditMode ? "Update" : "Add", " Book ");
  }
}
function BookListComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r3.messageType === "success" ? "alert-success" : "alert-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r3.messageType === "success" ? "bi-check-circle" : "bi-exclamation-triangle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
  }
}
class BookListComponent {
  constructor(bookService, router) {
    this.bookService = bookService;
    this.router = router;
    this.books = [];
    this.filteredBooks = [];
    this.currentBook = {
      title: '',
      author: ''
    };
    this.showForm = false;
    this.isEditMode = false;
    this.isLoading = false;
    this.isSubmitting = false;
    this.searchTerm = '';
    this.statusFilter = '';
    this.message = '';
    this.messageType = 'success';
    this.publishedDateString = '';
  }
  ngOnInit() {
    this.loadBooks();
  }
  loadBooks() {
    this.isLoading = true;
    this.bookService.getAllBooks().subscribe({
      next: books => {
        this.books = books;
        this.filterBooks();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading books:', error);
        this.showMessage('Failed to load books. Please try again.', 'error');
        this.isLoading = false;
      }
    });
  }
  filterBooks() {
    this.filteredBooks = this.books.filter(book => {
      const matchesSearch = !this.searchTerm || book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || book.author.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = !this.statusFilter || (book.status || 'AVAILABLE') === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }
  openAddForm() {
    this.currentBook = {
      title: '',
      author: ''
    };
    this.publishedDateString = '';
    this.isEditMode = false;
    this.showForm = true;
    this.clearMessage();
  }
  editBook(book) {
    this.currentBook = {
      ...book
    };
    this.publishedDateString = book.publishedDate ? new Date(book.publishedDate).toISOString().split('T')[0] : '';
    this.isEditMode = true;
    this.showForm = true;
    this.clearMessage();
  }
  closeForm() {
    this.showForm = false;
    this.currentBook = {
      title: '',
      author: ''
    };
    this.publishedDateString = '';
    this.clearMessage();
  }
  saveBook() {
    if (!this.currentBook.title || !this.currentBook.author) {
      this.showMessage('Please fill in all required fields.', 'error');
      return;
    }
    this.isSubmitting = true;
    // Convert date string to Date object
    if (this.publishedDateString) {
      this.currentBook.publishedDate = new Date(this.publishedDateString);
    }
    const operation = this.isEditMode ? this.bookService.updateBook(this.currentBook.id, this.currentBook) : this.bookService.createBook(this.currentBook);
    operation.subscribe({
      next: book => {
        this.showMessage(this.isEditMode ? 'Book updated successfully!' : 'Book added successfully!', 'success');
        this.closeForm();
        this.loadBooks();
        this.isSubmitting = false;
      },
      error: error => {
        console.error('Error saving book:', error);
        this.showMessage('Failed to save book. Please try again.', 'error');
        this.isSubmitting = false;
      }
    });
  }
  deleteBook(book) {
    if (book.status === 'ISSUED') {
      this.showMessage('Cannot delete a book that is currently issued.', 'error');
      return;
    }
    if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
      this.bookService.deleteBook(book.id).subscribe({
        next: () => {
          this.showMessage('Book deleted successfully!', 'success');
          this.loadBooks();
        },
        error: error => {
          console.error('Error deleting book:', error);
          this.showMessage('Failed to delete book. Please try again.', 'error');
        }
      });
    }
  }
  getStatusClass(status) {
    switch (status) {
      case 'AVAILABLE':
        return 'bg-success';
      case 'ISSUED':
        return 'bg-warning text-dark';
      default:
        return 'bg-success';
    }
  }
  showMessage(message, type) {
    this.message = message;
    this.messageType = type;
    setTimeout(() => {
      this.clearMessage();
    }, 5000);
  }
  clearMessage() {
    this.message = '';
  }
  static {
    this.ɵfac = function BookListComponent_Factory(t) {
      return new (t || BookListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BookListComponent,
      selectors: [["app-book-list"]],
      decls: 25,
      vars: 6,
      consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "bi", "bi-book"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "row", "mb-3"], [1, "col-md-6"], ["type", "text", "placeholder", "Search books...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", ""], ["value", "AVAILABLE"], ["value", "ISSUED"], ["class", "text-center py-4", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "modal d-block", "style", "background-color: rgba(0,0,0,0.5);", 4, "ngIf"], ["class", "alert", "class", "mt-3", 3, "ngClass", 4, "ngIf"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "mt-2"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], ["class", "table-responsive", 4, "ngIf"], [1, "bi", "bi-book-fill", "display-4", "text-muted"], [1, "text-muted", "mt-3"], [1, "text-muted"], [1, "btn", "btn-primary", 3, "click"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-dark"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["title", "Edit Book", 1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete Book", 1, "btn", "btn-outline-danger", 3, "disabled", "click"], [1, "bi", "bi-trash"], [1, "modal", "d-block", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["type", "text", "name", "title", "required", "", "placeholder", "Enter book title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "author", "required", "", "placeholder", "Enter author name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "publishedDate", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "mt-3", 3, "ngClass"], [1, "bi", 3, "ngClass"]],
      template: function BookListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Books Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookListComponent_Template_button_click_7_listener() {
            return ctx.openAddForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Add New Book ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookListComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.searchTerm = $event;
          })("input", function BookListComponent_Template_input_input_12_listener() {
            return ctx.filterBooks();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookListComponent_Template_select_ngModelChange_14_listener($event) {
            return ctx.statusFilter = $event;
          })("change", function BookListComponent_Template_select_change_14_listener() {
            return ctx.filterBooks();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "All Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Available");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Issued");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, BookListComponent_div_21_Template, 6, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, BookListComponent_div_22_Template, 7, 3, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, BookListComponent_div_23_Template, 27, 7, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, BookListComponent_div_24_Template, 3, 3, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.statusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: [".table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      border-top: none;\n    }\n    .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n      padding: 0.25rem 0.5rem;\n    }\n    .modal[_ngcontent-%COMP%] {\n      z-index: 1050;\n    }\n    .badge[_ngcontent-%COMP%] {\n      font-size: 0.8em;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudGFibGUgdGgge1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB9XG4gICAgLmJ0bi1ncm91cC1zbSA+IC5idG4ge1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgfVxuICAgIC5tb2RhbCB7XG4gICAgICB6LWluZGV4OiAxMDUwO1xuICAgIH1cbiAgICAuYmFkZ2Uge1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 619:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class DashboardComponent {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 136,
      vars: 1,
      consts: [[1, "container", "mt-4"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "display-6"], [1, "lead", "text-muted"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "col-md-4"], [1, "card", "bg-primary", "text-white"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "card-text"], [1, "align-self-center"], [1, "bi", "bi-book-fill", "display-4", "opacity-50"], ["routerLink", "/books", 1, "btn", "btn-light", "btn-sm", "mt-2"], [1, "bi", "bi-arrow-right"], [1, "card", "bg-success", "text-white"], [1, "bi", "bi-people-fill", "display-4", "opacity-50"], ["routerLink", "/members", 1, "btn", "btn-light", "btn-sm", "mt-2"], [1, "card", "bg-warning", "text-dark"], [1, "bi", "bi-journal-bookmark-fill", "display-4", "opacity-50"], ["routerLink", "/loans", 1, "btn", "btn-dark", "btn-sm", "mt-2"], [1, "row"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "col-md-6"], [1, "bi", "bi-book", "text-primary"], [1, "list-unstyled", "ms-3"], [1, "bi", "bi-people", "text-success"], [1, "bi", "bi-journal-bookmark", "text-warning"], [1, "bi", "bi-shield-check", "text-info"], [1, "row", "mt-4"], [1, "card", "border-primary"], [1, "card-header", "bg-primary", "text-white"], [1, "col-md-3"], ["routerLink", "/books", 1, "btn", "btn-outline-primary", "w-100", "mb-2"], [1, "bi", "bi-plus-circle"], ["routerLink", "/members", 1, "btn", "btn-outline-success", "w-100", "mb-2"], [1, "bi", "bi-person-plus"], ["routerLink", "/loans", 1, "btn", "btn-outline-warning", "w-100", "mb-2"], [1, "bi", "bi-journal-plus"], ["routerLink", "/loans", 1, "btn", "btn-outline-info", "w-100", "mb-2"], [1, "bi", "bi-list-check"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\uD83D\uDCDA Library Management System");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_10_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Logout ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1)(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div")(19, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\uD83D\uDCD6 Books");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Manage your library collection");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Manage Books ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8)(29, "div", 17)(30, "div", 10)(31, "div", 11)(32, "div")(33, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\uD83D\uDC65 Members");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Manage library members");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Manage Members ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 8)(43, "div", 20)(44, "div", 10)(45, "div", 11)(46, "div")(47, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\uD83D\uDCCB Loans");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Track book loans & returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Manage Loans ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 23)(57, "div", 2)(58, "div", 24)(59, "div", 25)(60, "h5", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u2728 Available Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 10)(63, "div", 23)(64, "div", 27)(65, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Book Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ul", 29)(69, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u2705 Add, edit, and delete books");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u2705 Search and filter books");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\u2705 Track book availability status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Member Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ul", 29)(79, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u2705 Add and manage library members");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u2705 Search members by name or email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\u2705 View member details and roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 27)(86, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Loan Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "ul", 29)(90, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\u2705 Issue books to members");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\u2705 Track loan status (Borrowed, Returned, Late)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\u2705 Monitor due dates and overdue books");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "\u2705 Process book returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " Security Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "ul", 29)(102, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "\u2705 User authentication (Minimal Security)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "\u2705 Session management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "\u2705 Role-based access");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 33)(109, "div", 2)(110, "div", 34)(111, "div", 35)(112, "h5", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "\uD83D\uDE80 Quick Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 10)(115, "div", 23)(116, "div", 36)(117, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "i", 38)(119, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Add New Book ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 36)(122, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 40)(124, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Add New Member ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 36)(127, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "i", 42)(129, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Issue New Book ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 36)(132, "a", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 44)(134, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "View All Loans ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome back, ", (ctx.currentUser == null ? null : ctx.currentUser.username) || "User", "!");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".card[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n      transition: transform 0.2s;\n    }\n    .card[_ngcontent-%COMP%]:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n    }\n    .display-6[_ngcontent-%COMP%] {\n      font-weight: 600;\n    }\n    .opacity-50[_ngcontent-%COMP%] {\n      opacity: 0.5;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxtQkFBbUI7TUFDbkIsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSwyQkFBMkI7TUFDM0IscUNBQXFDO0lBQ3ZDO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLFlBQVk7SUFDZCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jYXJkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICB9XG4gICAgLmNhcmQ6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB9XG4gICAgLmRpc3BsYXktNiB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAub3BhY2l0eS01MCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7530:
/*!*************************************************************!*\
  !*** ./src/app/components/loan-form/loan-form.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanFormComponent": () => (/* binding */ LoanFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoanFormComponent {
  static {
    this.ɵfac = function LoanFormComponent_Factory(t) {
      return new (t || LoanFormComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoanFormComponent,
      selectors: [["app-loan-form"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"]],
      template: function LoanFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loan Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loan form functionality will be implemented here.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2904:
/*!*************************************************************!*\
  !*** ./src/app/components/loan-list/loan-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanListComponent": () => (/* binding */ LoanListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_loan_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/loan.service */ 5272);
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/book.service */ 4371);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/member.service */ 6341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







function LoanListComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Loading loans...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LoanListComponent_div_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No loans found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoanListComponent_div_24_div_5_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.openAddForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Issue First Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.searchTerm || ctx_r4.statusFilter ? "No loans match your criteria." : "No books have been issued yet!");
  }
}
function LoanListComponent_div_24_div_6_tr_23_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const loan_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, loan_r9.returnDate, "shortDate"));
  }
}
function LoanListComponent_div_24_div_6_tr_23_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Not returned");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoanListComponent_div_24_div_6_tr_23_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const loan_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r13.getDaysLeftClass(loan_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r13.getDaysLeft(loan_r9), " ");
  }
}
function LoanListComponent_div_24_div_6_tr_23_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoanListComponent_div_24_div_6_tr_23_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoanListComponent_div_24_div_6_tr_23_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const loan_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.returnBook(loan_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoanListComponent_div_24_div_6_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LoanListComponent_div_24_div_6_tr_23_span_22_Template, 3, 4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, LoanListComponent_div_24_div_6_tr_23_span_23_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td")(25, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, LoanListComponent_div_24_div_6_tr_23_span_28_Template, 2, 2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, LoanListComponent_div_24_div_6_tr_23_span_29_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td")(31, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, LoanListComponent_div_24_div_6_tr_23_button_32_Template, 3, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoanListComponent_div_24_div_6_tr_23_Template_button_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const loan_r9 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.deleteLoan(loan_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const loan_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](loan_r9.book && loan_r9.book.title ? loan_r9.book.title : "Unknown Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("by ", loan_r9.book && loan_r9.book.author ? loan_r9.book.author : "Unknown Author", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](loan_r9.member && loan_r9.member.name ? loan_r9.member.name : "Unknown Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](loan_r9.member && loan_r9.member.email ? loan_r9.member.email : "No email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](17, 14, loan_r9.loanDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 17, loan_r9.dueDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", loan_r9.returnDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !loan_r9.returnDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r8.getStatusClass(loan_r9.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", loan_r9.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", loan_r9.status === "BORROWED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", loan_r9.status !== "BORROWED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", loan_r9.status === "BORROWED");
  }
}
function LoanListComponent_div_24_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "table", 33)(2, "thead", 34)(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Loan Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Return Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Days Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, LoanListComponent_div_24_div_6_tr_23_Template, 35, 20, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.filteredLoans);
  }
}
function LoanListComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LoanListComponent_div_24_div_5_Template, 8, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LoanListComponent_div_24_div_6_Template, 24, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Loans List (", ctx_r1.filteredLoans.length, " loans)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.filteredLoans.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.filteredLoans.length > 0);
  }
}
function LoanListComponent_div_25_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const book_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", book_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", book_r26.title, " by ", book_r26.author, " ");
  }
}
function LoanListComponent_div_25_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", member_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", member_r27.name, " (", member_r27.email, ") ");
  }
}
function LoanListComponent_div_25_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 66);
  }
}
function LoanListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "div", 50)(4, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Issue New Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoanListComponent_div_25_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 53)(8, "form", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoanListComponent_div_25_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.saveLoan());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 55)(10, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Book *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoanListComponent_div_25_Template_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.newLoan.bookId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Select a book");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LoanListComponent_div_25_option_15_Template, 2, 3, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 55)(17, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Member *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoanListComponent_div_25_Template_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.newLoan.memberId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Select a member");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LoanListComponent_div_25_option_22_Template, 2, 3, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 55)(24, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Due Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoanListComponent_div_25_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.dueDateString = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 61)(28, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoanListComponent_div_25_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, LoanListComponent_div_25_span_31_Template, 1, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Issue Book ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.newLoan.bookId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.availableBooks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.newLoan.memberId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.members);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.dueDateString)("min", ctx_r2.minDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.newLoan.bookId || !ctx_r2.newLoan.memberId || !ctx_r2.dueDateString || ctx_r2.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isSubmitting);
  }
}
function LoanListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.messageType === "success" ? "alert-success" : "alert-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.messageType === "success" ? "bi-check-circle" : "bi-exclamation-triangle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
  }
}
class LoanListComponent {
  constructor(loanService, bookService, memberService, router) {
    this.loanService = loanService;
    this.bookService = bookService;
    this.memberService = memberService;
    this.router = router;
    this.loans = [];
    this.filteredLoans = [];
    this.availableBooks = [];
    this.members = [];
    this.newLoan = {
      bookId: '',
      memberId: ''
    };
    this.showForm = false;
    this.isLoading = false;
    this.isSubmitting = false;
    this.searchTerm = '';
    this.statusFilter = '';
    this.message = '';
    this.messageType = 'success';
    this.dueDateString = '';
    this.minDate = '';
  }
  ngOnInit() {
    this.setMinDate();
    this.loadLoans();
    this.loadMembers();
    this.loadAvailableBooks();
  }
  setMinDate() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
    // Set default due date to 14 days from today
    const defaultDue = new Date();
    defaultDue.setDate(today.getDate() + 14);
    this.dueDateString = defaultDue.toISOString().split('T')[0];
  }
  loadLoans() {
    this.isLoading = true;
    this.loanService.getAllLoans().subscribe({
      next: loans => {
        this.loans = loans;
        this.filterLoans();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading loans:', error);
        this.showMessage('Failed to load loans. Please try again.', 'error');
        this.isLoading = false;
      }
    });
  }
  loadAvailableBooks() {
    this.bookService.getAllBooks().subscribe({
      next: books => {
        this.availableBooks = books.filter(book => book.status !== 'ISSUED');
      },
      error: error => {
        console.error('Error loading books:', error);
      }
    });
  }
  loadMembers() {
    this.memberService.getAllMembers().subscribe({
      next: members => {
        this.members = members;
      },
      error: error => {
        console.error('Error loading members:', error);
      }
    });
  }
  filterLoans() {
    this.filteredLoans = this.loans.filter(loan => {
      const bookTitle = loan.book && loan.book.title ? loan.book.title.toLowerCase() : '';
      const memberName = loan.member && loan.member.name ? loan.member.name.toLowerCase() : '';
      const matchesSearch = !this.searchTerm || bookTitle.includes(this.searchTerm.toLowerCase()) || memberName.includes(this.searchTerm.toLowerCase());
      const matchesStatus = !this.statusFilter || loan.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }
  openAddForm() {
    this.newLoan = {
      bookId: '',
      memberId: ''
    };
    this.setMinDate();
    this.showForm = true;
    this.clearMessage();
  }
  closeForm() {
    this.showForm = false;
    this.newLoan = {
      bookId: '',
      memberId: ''
    };
    this.clearMessage();
  }
  saveLoan() {
    if (!this.newLoan.bookId || !this.newLoan.memberId || !this.dueDateString) {
      this.showMessage('Please fill in all required fields.', 'error');
      return;
    }
    this.isSubmitting = true;
    const loanData = {
      bookId: parseInt(this.newLoan.bookId),
      memberId: parseInt(this.newLoan.memberId),
      dueDate: this.dueDateString
    };
    this.loanService.createLoan(loanData).subscribe({
      next: loan => {
        this.showMessage('Book issued successfully!', 'success');
        this.closeForm();
        this.loadLoans();
        this.loadAvailableBooks(); // Refresh available books
        this.isSubmitting = false;
      },
      error: error => {
        console.error('Error issuing book:', error);
        this.showMessage('Failed to issue book. Please try again.', 'error');
        this.isSubmitting = false;
      }
    });
  }
  returnBook(loan) {
    const bookTitle = loan.book && loan.book.title ? loan.book.title : 'this book';
    const memberName = loan.member && loan.member.name ? loan.member.name : 'this member';
    if (confirm(`Return "${bookTitle}" borrowed by ${memberName}?`)) {
      this.loanService.returnBook(loan.id).subscribe({
        next: () => {
          this.showMessage('Book returned successfully!', 'success');
          this.loadLoans();
          this.loadAvailableBooks(); // Refresh available books
        },

        error: error => {
          console.error('Error returning book:', error);
          this.showMessage('Failed to return book. Please try again.', 'error');
        }
      });
    }
  }
  deleteLoan(loan) {
    const bookTitle = loan.book && loan.book.title ? loan.book.title : 'this book';
    if (confirm(`Delete loan record for "${bookTitle}"?`)) {
      this.loanService.deleteLoan(loan.id).subscribe({
        next: () => {
          this.showMessage('Loan record deleted successfully!', 'success');
          this.loadLoans();
          this.loadAvailableBooks(); // Refresh available books
        },

        error: error => {
          console.error('Error deleting loan:', error);
          this.showMessage('Failed to delete loan record. Please try again.', 'error');
        }
      });
    }
  }
  getStatusClass(status) {
    switch (status) {
      case 'BORROWED':
        return 'bg-primary';
      case 'RETURNED':
        return 'bg-success';
      case 'LATE':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
  getDaysLeft(loan) {
    const today = new Date();
    const dueDate = new Date(loan.dueDate);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 0) {
      return `${Math.abs(diffDays)} days overdue`;
    } else if (diffDays === 0) {
      return 'Due today';
    } else {
      return `${diffDays} days left`;
    }
  }
  getDaysLeftClass(loan) {
    const today = new Date();
    const dueDate = new Date(loan.dueDate);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 0) {
      return 'text-danger';
    } else if (diffDays <= 3) {
      return 'text-warning';
    } else {
      return 'text-success';
    }
  }
  showMessage(message, type) {
    this.message = message;
    this.messageType = type;
    setTimeout(() => {
      this.clearMessage();
    }, 5000);
  }
  clearMessage() {
    this.message = '';
  }
  static {
    this.ɵfac = function LoanListComponent_Factory(t) {
      return new (t || LoanListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loan_service__WEBPACK_IMPORTED_MODULE_0__.LoanService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_book_service__WEBPACK_IMPORTED_MODULE_1__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_2__.MemberService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LoanListComponent,
      selectors: [["app-loan-list"]],
      decls: 27,
      vars: 6,
      consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "bi", "bi-journal-bookmark"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "row", "mb-3"], [1, "col-md-6"], ["type", "text", "placeholder", "Search by book title or member name...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", ""], ["value", "BORROWED"], ["value", "RETURNED"], ["value", "LATE"], ["class", "text-center py-4", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "modal d-block", "style", "background-color: rgba(0,0,0,0.5);", 4, "ngIf"], ["class", "alert", "class", "mt-3", 3, "ngClass", 4, "ngIf"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "mt-2"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], ["class", "table-responsive", 4, "ngIf"], [1, "bi", "bi-journal-bookmark-fill", "display-4", "text-muted"], [1, "text-muted", "mt-3"], [1, "text-muted"], [1, "btn", "btn-primary", 3, "click"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-dark"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "badge", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["class", "btn btn-outline-success", "title", "Return Book", 3, "click", 4, "ngIf"], ["title", "Delete Loan Record", 1, "btn", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [3, "ngClass"], ["title", "Return Book", 1, "btn", "btn-outline-success", 3, "click"], [1, "bi", "bi-check-circle"], [1, "modal", "d-block", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["name", "bookId", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "memberId", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "dueDate", "required", "", 1, "form-control", 3, "ngModel", "min", "ngModelChange"], [1, "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [3, "value"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "mt-3", 3, "ngClass"], [1, "bi", 3, "ngClass"]],
      template: function LoanListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Loans Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoanListComponent_Template_button_click_7_listener() {
            return ctx.openAddForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Issue New Book ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoanListComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.searchTerm = $event;
          })("input", function LoanListComponent_Template_input_input_12_listener() {
            return ctx.filterLoans();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoanListComponent_Template_select_ngModelChange_14_listener($event) {
            return ctx.statusFilter = $event;
          })("change", function LoanListComponent_Template_select_change_14_listener() {
            return ctx.filterLoans();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "All Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Borrowed");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Returned");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Late");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, LoanListComponent_div_23_Template, 6, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, LoanListComponent_div_24_Template, 7, 3, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, LoanListComponent_div_25_Template, 33, 8, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, LoanListComponent_div_26_Template, 3, 3, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.statusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.message);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
      styles: [".table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      border-top: none;\n    }\n    .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n      padding: 0.25rem 0.5rem;\n    }\n    .modal[_ngcontent-%COMP%] {\n      z-index: 1050;\n    }\n    .badge[_ngcontent-%COMP%] {\n      font-size: 0.8em;\n    }\n    .text-danger[_ngcontent-%COMP%] {\n      font-weight: bold;\n    }\n    .text-warning[_ngcontent-%COMP%] {\n      font-weight: bold;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2FuLWxpc3QvbG9hbi1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRhYmxlIHRoIHtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxuICAgIC5idG4tZ3JvdXAtc20gPiAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIH1cbiAgICAubW9kYWwge1xuICAgICAgei1pbmRleDogMTA1MDtcbiAgICB9XG4gICAgLmJhZGdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICAgIC50ZXh0LWRhbmdlciB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnRleHQtd2FybmluZyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function LoginComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function LoginComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function LoginComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.successMessage, " ");
  }
}
class LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.credentials = {
      username: '',
      password: ''
    };
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = false;
  }
  onSubmit() {
    // Clear previous messages
    this.errorMessage = '';
    this.successMessage = '';
    // Basic validation - only check if fields are not empty
    if (!this.credentials.username || !this.credentials.password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }
    this.isLoading = true;
    this.authService.login(this.credentials).subscribe({
      next: response => {
        this.isLoading = false;
        if (response.success) {
          this.authService.setAuthData(response);
          this.successMessage = 'Login successful! Redirecting...';
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1000);
        } else {
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Login error:', error);
        this.errorMessage = 'Login failed. Please try again or use test credentials.';
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 26,
      vars: 7,
      consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "card", "p-4"], [3, "ngSubmit"], [1, "form-group", "mb-3"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "placeholder", "Enter username (admin or user)", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "placeholder", "Enter password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mb-3", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "text-center"], [1, "text-muted"], [1, "text-center", "mt-3"], ["routerLink", "/register", 1, "text-decoration-none"], ["class", "alert alert-warning mt-3", 4, "ngIf"], ["class", "alert alert-success mt-3", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "alert", "alert-warning", "mt-3"], [1, "bi", "bi-exclamation-triangle"], [1, "alert", "alert-success", "mt-3"], [1, "bi", "bi-check-circle"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83D\uDCDA Library Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.credentials.username = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.credentials.password = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_span_16_Template, 1, 0, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "small", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Test credentials: admin/admin123 or user/user123");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Don't have an account? Register here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 3, 1, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 3, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.credentials.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.credentials.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Logging in..." : "Login", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".container[_ngcontent-%COMP%] {\n      max-width: 600px;\n      margin-top: 100px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZ0JBQWdCO01BQ2hCLGlCQUFpQjtJQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9027:
/*!*****************************************************************!*\
  !*** ./src/app/components/member-form/member-form.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberFormComponent": () => (/* binding */ MemberFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MemberFormComponent {
  static {
    this.ɵfac = function MemberFormComponent_Factory(t) {
      return new (t || MemberFormComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberFormComponent,
      selectors: [["app-member-form"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"]],
      template: function MemberFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Member Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Member form functionality will be implemented here.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2369:
/*!*****************************************************************!*\
  !*** ./src/app/components/member-list/member-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberListComponent": () => (/* binding */ MemberListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/member.service */ 6341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function MemberListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading members...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MemberListComponent_div_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No members found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberListComponent_div_14_div_5_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.openAddForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add First Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.searchTerm ? "No members match your search criteria." : "Start by adding your first member!");
  }
}
function MemberListComponent_div_14_div_6_tr_15_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", role_r13.name || role_r13, " ");
  }
}
function MemberListComponent_div_14_div_6_tr_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MemberListComponent_div_14_div_6_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MemberListComponent_div_14_div_6_tr_15_span_9_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MemberListComponent_div_14_div_6_tr_15_span_10_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "div", 33)(13, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberListComponent_div_14_div_6_tr_15_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const member_r9 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.editMember(member_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberListComponent_div_14_div_6_tr_15_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const member_r9 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.deleteMember(member_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const member_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r9.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r9.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !member_r9.roles || member_r9.roles.length === 0);
  }
}
function MemberListComponent_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "table", 28)(2, "thead", 29)(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MemberListComponent_div_14_div_6_tr_15_Template, 17, 5, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.filteredMembers);
  }
}
function MemberListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MemberListComponent_div_14_div_5_Template, 8, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MemberListComponent_div_14_div_6_Template, 16, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Members List (", ctx_r1.filteredMembers.length, " members)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.filteredMembers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.filteredMembers.length > 0);
  }
}
function MemberListComponent_div_15_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 55);
  }
}
function MemberListComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "div", 42)(4, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberListComponent_div_15_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 45)(8, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MemberListComponent_div_15_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.saveMember());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 47)(10, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberListComponent_div_15_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.currentMember.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 47)(14, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberListComponent_div_15_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.currentMember.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 51)(18, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberListComponent_div_15_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MemberListComponent_div_15_span_21_Template, 1, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.isEditMode ? "Edit Member" : "Add New Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.currentMember.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.currentMember.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.currentMember.name || !ctx_r2.currentMember.email || ctx_r2.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.isEditMode ? "Update" : "Add", " Member ");
  }
}
function MemberListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r3.messageType === "success" ? "alert-success" : "alert-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r3.messageType === "success" ? "bi-check-circle" : "bi-exclamation-triangle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
  }
}
class MemberListComponent {
  constructor(memberService, router) {
    this.memberService = memberService;
    this.router = router;
    this.members = [];
    this.filteredMembers = [];
    this.currentMember = {
      name: '',
      email: ''
    };
    this.showForm = false;
    this.isEditMode = false;
    this.isLoading = false;
    this.isSubmitting = false;
    this.searchTerm = '';
    this.message = '';
    this.messageType = 'success';
  }
  ngOnInit() {
    this.loadMembers();
  }
  loadMembers() {
    this.isLoading = true;
    this.memberService.getAllMembers().subscribe({
      next: members => {
        this.members = members;
        this.filterMembers();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading members:', error);
        this.showMessage('Failed to load members. Please try again.', 'error');
        this.isLoading = false;
      }
    });
  }
  filterMembers() {
    this.filteredMembers = this.members.filter(member => {
      const matchesSearch = !this.searchTerm || member.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || member.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesSearch;
    });
  }
  openAddForm() {
    this.currentMember = {
      name: '',
      email: ''
    };
    this.isEditMode = false;
    this.showForm = true;
    this.clearMessage();
  }
  editMember(member) {
    this.currentMember = {
      ...member
    };
    this.isEditMode = true;
    this.showForm = true;
    this.clearMessage();
  }
  closeForm() {
    this.showForm = false;
    this.currentMember = {
      name: '',
      email: ''
    };
    this.clearMessage();
  }
  saveMember() {
    if (!this.currentMember.name || !this.currentMember.email) {
      this.showMessage('Please fill in all required fields.', 'error');
      return;
    }
    // Basic email validation
    if (!this.currentMember.email.includes('@')) {
      this.showMessage('Please enter a valid email address.', 'error');
      return;
    }
    this.isSubmitting = true;
    const operation = this.isEditMode ? this.memberService.updateMember(this.currentMember.id, this.currentMember) : this.memberService.createMember(this.currentMember);
    operation.subscribe({
      next: member => {
        this.showMessage(this.isEditMode ? 'Member updated successfully!' : 'Member added successfully!', 'success');
        this.closeForm();
        this.loadMembers();
        this.isSubmitting = false;
      },
      error: error => {
        console.error('Error saving member:', error);
        this.showMessage('Failed to save member. Please try again.', 'error');
        this.isSubmitting = false;
      }
    });
  }
  deleteMember(member) {
    if (confirm(`Are you sure you want to delete "${member.name}"?`)) {
      this.memberService.deleteMember(member.id).subscribe({
        next: () => {
          this.showMessage('Member deleted successfully!', 'success');
          this.loadMembers();
        },
        error: error => {
          console.error('Error deleting member:', error);
          this.showMessage('Failed to delete member. Please try again.', 'error');
        }
      });
    }
  }
  showMessage(message, type) {
    this.message = message;
    this.messageType = type;
    setTimeout(() => {
      this.clearMessage();
    }, 5000);
  }
  clearMessage() {
    this.message = '';
  }
  static {
    this.ɵfac = function MemberListComponent_Factory(t) {
      return new (t || MemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_0__.MemberService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MemberListComponent,
      selectors: [["app-member-list"]],
      decls: 17,
      vars: 5,
      consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "bi", "bi-people"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-person-plus"], [1, "row", "mb-3"], [1, "col-md-8"], ["type", "text", "placeholder", "Search members by name or email...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["class", "text-center py-4", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "modal d-block", "style", "background-color: rgba(0,0,0,0.5);", 4, "ngIf"], ["class", "alert", "class", "mt-3", 3, "ngClass", 4, "ngIf"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "mt-2"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], ["class", "table-responsive", 4, "ngIf"], [1, "bi", "bi-people-fill", "display-4", "text-muted"], [1, "text-muted", "mt-3"], [1, "text-muted"], [1, "btn", "btn-primary", 3, "click"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-dark"], [4, "ngFor", "ngForOf"], ["class", "badge bg-secondary me-1", 4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["title", "Edit Member", 1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete Member", 1, "btn", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "badge", "bg-secondary", "me-1"], [1, "modal", "d-block", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["type", "text", "name", "name", "required", "", "placeholder", "Enter member name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "required", "", "placeholder", "Enter email address", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "mt-3", 3, "ngClass"], [1, "bi", 3, "ngClass"]],
      template: function MemberListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Members Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_7_listener() {
            return ctx.openAddForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Add New Member ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.searchTerm = $event;
          })("input", function MemberListComponent_Template_input_input_12_listener() {
            return ctx.filterMembers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MemberListComponent_div_13_Template, 6, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MemberListComponent_div_14_Template, 7, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MemberListComponent_div_15_Template, 23, 6, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MemberListComponent_div_16_Template, 3, 3, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      border-top: none;\n    }\n    .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n      padding: 0.25rem 0.5rem;\n    }\n    .modal[_ngcontent-%COMP%] {\n      z-index: 1050;\n    }\n    .badge[_ngcontent-%COMP%] {\n      font-size: 0.8em;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW1iZXItbGlzdC9tZW1iZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRhYmxlIHRoIHtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxuICAgIC5idG4tZ3JvdXAtc20gPiAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIH1cbiAgICAubW9kYWwge1xuICAgICAgei1pbmRleDogMTA1MDtcbiAgICB9XG4gICAgLmJhZGdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3412:
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function RegisterComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 20);
  }
}
function RegisterComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function RegisterComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.successMessage, " ");
  }
}
class RegisterComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.userData = {
      username: '',
      email: '',
      password: ''
    };
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = false;
  }
  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    // Minimal validation - just check if fields are filled
    if (!this.userData.username || !this.userData.email || !this.userData.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }
    // Very basic email check - just ensure it contains @
    if (!this.userData.email.includes('@')) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }
    this.isLoading = true;
    this.authService.register(this.userData).subscribe({
      next: response => {
        this.isLoading = false;
        if (response.success) {
          this.successMessage = 'Registration successful! Redirecting to dashboard...';
          this.authService.setAuthData(response);
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 2000);
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Registration error:', error);
        this.errorMessage = 'Registration failed. Please try again.';
      }
    });
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 30,
      vars: 8,
      consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "card", "p-4"], [3, "ngSubmit"], [1, "form-group", "mb-3"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "placeholder", "Choose a username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "id", "email", "name", "email", "placeholder", "Enter your email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "placeholder", "Choose a password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "w-100", "mb-3", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "text-center"], [1, "text-muted"], [1, "text-center", "mt-3"], ["routerLink", "/login", 1, "text-decoration-none"], ["class", "alert alert-warning mt-3", 4, "ngIf"], ["class", "alert alert-success mt-3", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "alert", "alert-warning", "mt-3"], [1, "bi", "bi-exclamation-triangle"], [1, "alert", "alert-success", "mt-3"], [1, "bi", "bi-check-circle"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83D\uDCDD Register for Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.userData.username = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.userData.email = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5)(16, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.userData.password = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RegisterComponent_span_20_Template, 1, 0, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14)(23, "small", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Registration is simplified for demo purposes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16)(26, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Already have an account? Login here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 3, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RegisterComponent_div_29_Template, 3, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userData.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userData.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Creating Account..." : "Register", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".container[_ngcontent-%COMP%] {\n      max-width: 600px;\n      margin-top: 100px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZ0JBQWdCO01BQ2hCLGlCQUFpQjtJQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    // Simplified authentication check
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      return true;
    }
    // For development - show a friendly message instead of just redirecting
    console.log('Access denied. Please login to continue.');
    this.router.navigate(['/login']);
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);





class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.baseUrl = '/api/auth'; // Using relative URL with proxy
    this.userKey = 'library_user';
    this.isLoggedInKey = 'library_logged_in';
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.currentUser = this.currentUserSubject.asObservable();
    // Check if user is already logged in with minimal validation
    const isLoggedIn = localStorage.getItem(this.isLoggedInKey);
    const user = localStorage.getItem(this.userKey);
    if (isLoggedIn === 'true' && user) {
      try {
        this.currentUserSubject.next(JSON.parse(user));
      } catch (e) {
        // If parsing fails, clear the stored data
        this.clearStoredData();
      }
    }
  }
  // Minimal login with basic error handling
  login(credentials) {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      if (response && response.user) {
        return {
          ...response,
          success: true
        };
      }
      return {
        success: false,
        user: null
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Login error:', error);
      // Fallback for development - if server is not responding, simulate success with test credentials
      if (error.status === 0 && (credentials.username === 'admin' || credentials.username === 'user')) {
        const mockUser = {
          id: credentials.username === 'admin' ? 1 : 2,
          username: credentials.username,
          email: `${credentials.username}@example.com`,
          roles: credentials.username === 'admin' ? ['ADMIN'] : ['USER']
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
          success: true,
          user: mockUser,
          token: 'mock-token'
        });
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
        success: false,
        user: null
      });
    }));
  }
  // Minimal registration with basic error handling
  register(userData) {
    return this.http.post(`${this.baseUrl}/register`, userData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      if (response && response.user) {
        return {
          ...response,
          success: true
        };
      }
      return {
        success: false,
        user: null
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Registration error:', error);
      // Fallback for development - simulate successful registration
      if (error.status === 0) {
        const mockUser = {
          id: Date.now(),
          username: userData.username,
          email: userData.email,
          roles: ['USER']
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
          success: true,
          user: mockUser,
          token: 'mock-token'
        });
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
        success: false,
        user: null
      });
    }));
  }
  logout() {
    this.clearStoredData();
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
  isAuthenticated() {
    return localStorage.getItem(this.isLoggedInKey) === 'true';
  }
  getCurrentUser() {
    const user = localStorage.getItem(this.userKey);
    try {
      return user ? JSON.parse(user) : null;
    } catch (e) {
      return null;
    }
  }
  setAuthData(response) {
    if (response.success && response.user) {
      localStorage.setItem(this.isLoggedInKey, 'true');
      localStorage.setItem(this.userKey, JSON.stringify(response.user));
      this.currentUserSubject.next(response.user);
    }
  }
  clearStoredData() {
    localStorage.removeItem(this.isLoggedInKey);
    localStorage.removeItem(this.userKey);
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4371:
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookService": () => (/* binding */ BookService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class BookService {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/api/books';
  }
  getAllBooks() {
    return this.http.get(this.baseUrl);
  }
  getBookById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createBook(book) {
    return this.http.post(this.baseUrl, book);
  }
  updateBook(id, book) {
    return this.http.put(`${this.baseUrl}/${id}`, book);
  }
  deleteBook(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static {
    this.ɵfac = function BookService_Factory(t) {
      return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BookService,
      factory: BookService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5272:
/*!******************************************!*\
  !*** ./src/app/services/loan.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanService": () => (/* binding */ LoanService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class LoanService {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/api/loans';
  }
  getAllLoans() {
    return this.http.get(this.baseUrl);
  }
  getLoanById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createLoan(loan) {
    return this.http.post(this.baseUrl, loan);
  }
  updateLoan(id, loan) {
    return this.http.put(`${this.baseUrl}/${id}`, loan);
  }
  returnBook(id) {
    return this.http.put(`${this.baseUrl}/${id}/return`, {});
  }
  deleteLoan(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static {
    this.ɵfac = function LoanService_Factory(t) {
      return new (t || LoanService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoanService,
      factory: LoanService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6341:
/*!********************************************!*\
  !*** ./src/app/services/member.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberService": () => (/* binding */ MemberService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class MemberService {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/api/members';
  }
  getAllMembers() {
    return this.http.get(this.baseUrl);
  }
  getMemberById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createMember(member) {
    return this.http.post(this.baseUrl, member);
  }
  updateMember(id, member) {
    return this.http.put(`${this.baseUrl}/${id}`, member);
  }
  deleteMember(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static {
    this.ɵfac = function MemberService_Factory(t) {
      return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MemberService,
      factory: MemberService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map