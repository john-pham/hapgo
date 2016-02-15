declare module Hapgo.global.controllers {
    class SignInController {
        service: interfaces.ISignInService;
        httpService: ng.IHttpService;
        cookies: ng.cookies.ICookiesService;
        cookieStore: ng.cookies.ICookieStoreService;
        username: string;
        password: string;
        message: string;
        showMessage: boolean;
        loggedIn: boolean;
        static $inject: string[];
        constructor($service: interfaces.ISignInService, $http: ng.IHttpService, $cookies: ng.cookies.ICookiesService, $cookieStore: ng.cookies.ICookieStoreService);
        signIn: () => void;
    }
}
