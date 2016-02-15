/// <reference path="../interfaces/IRegisterService.ts" />

module Hapgo.global.services {
    export class RegisterService implements interfaces.IRegisterService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        submit = (params: string) => {
        }
    }
} 