/// <reference path="../interfaces/IRegisterService.d.ts" />
declare module Hapgo.global.services {
    class RegisterService implements interfaces.IRegisterService {
        httpService: ng.IHttpService;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        submit: (params: string) => void;
    }
}
