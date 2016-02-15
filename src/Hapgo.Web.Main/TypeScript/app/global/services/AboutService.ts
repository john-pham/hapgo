/// <reference path="../interfaces/IAboutService.ts" />

module Hapgo.global.services {
    export class AboutService implements Hapgo.global.interfaces.IAboutService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }
    }
} 