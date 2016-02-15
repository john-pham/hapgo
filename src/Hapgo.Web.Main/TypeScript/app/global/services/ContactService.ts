/// <reference path="../interfaces/IContactService.ts" />

module Hapgo.global.services {
    export class ContactService implements interfaces.IContactService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }
    }
} 