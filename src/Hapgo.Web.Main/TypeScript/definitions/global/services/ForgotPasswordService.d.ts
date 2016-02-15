/// <reference path="../interfaces/IAboutService.d.ts" />
declare module Hapgo.global.services {
    class ForgotPasswordService implements interfaces.IForgotPasswordService {
        httpService: ng.IHttpService;
        static $inject: string[];
        constructor($http: ng.IHttpService);
    }
}
