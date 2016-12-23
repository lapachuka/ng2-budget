"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var auth_guard_1 = require('./_guards/auth.guard');
exports.AuthGuard = auth_guard_1.AuthGuard;
var auth_service_1 = require('./services/auth-service');
exports.AuthService = auth_service_1.AuthService;
var login_component_1 = require("./components/login/login.component");
var http_1 = require('@angular/http');
var routes = [
    { path: '', component: login_component_1.LoginComponent }
];
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.LoginComponent
            ],
            imports: [
                http_1.HttpModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            providers: [
                auth_guard_1.AuthGuard,
                auth_service_1.AuthService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=index.js.map