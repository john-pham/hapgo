/// <reference path="../interfaces/IContactService.d.ts" />
declare module Hapgo.global.services {
    class ContactService implements interfaces.IContactService {
        httpService: ng.IHttpService;
        static $inject: string[];
        constructor($http: ng.IHttpService);
    }
}
