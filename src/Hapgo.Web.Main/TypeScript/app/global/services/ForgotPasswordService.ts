/// <reference path="../interfaces/IAboutService.ts" />

module Hapgo.global.services {
    export class ForgotPasswordService implements interfaces.IForgotPasswordService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }
    }
} 