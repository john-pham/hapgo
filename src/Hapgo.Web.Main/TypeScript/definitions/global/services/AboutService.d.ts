/// <reference path="../interfaces/IAboutService.d.ts" />
declare module Hapgo.global.services {
    class AboutService implements Hapgo.global.interfaces.IAboutService {
        httpService: ng.IHttpService;
        static $inject: string[];
        constructor($http: ng.IHttpService);
    }
}
