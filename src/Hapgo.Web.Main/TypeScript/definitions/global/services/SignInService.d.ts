declare module Hapgo.global.services {
    class SignInService implements interfaces.ISignInService {
        httpService: ng.IHttpService;
        cookieStore: ng.cookies.ICookieStoreService;
        static $inject: string[];
        constructor($http: ng.IHttpService, $cookieStore: ng.cookies.ICookieStoreService);
        login: ($rootScope: controllers.SignInController) => void;
        signOut: ($rootScope: controllers.SignInController) => void;
    }
}
