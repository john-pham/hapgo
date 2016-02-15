
module Hapgo.global.controllers {
    export class SignInController {

        service: interfaces.ISignInService;
        httpService: ng.IHttpService;
        cookies: ng.cookies.ICookiesService;
        cookieStore: ng.cookies.ICookieStoreService;

        username: string;
        password: string;
        message: string;
        showMessage: boolean;
        loggedIn: boolean;

        static $inject = ["Hapgo.global.services.SignInService", "$http", "$cookies", "$cookieStore"];

        constructor($service: interfaces.ISignInService, $http: ng.IHttpService, $cookies: ng.cookies.ICookiesService, $cookieStore: ng.cookies.ICookieStoreService) {
            this.service = $service;
            this.httpService = $http;
            this.cookies = $cookies;
            this.cookieStore = $cookieStore;
            //this.message = $message;
        }

        signIn = () => {
            this.showMessage = false;
            var params = "grant_type=password&username=" + this.username + "&password=" + this.password;

            this.httpService({
                url: '/OAuth/Token',
                method: "POST",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: params
            })
                .success((data: any, status, headers, config) => {
                    //this.httpService.defaults.headers.common.Authorization = "Bearer " + data.access_token;
                    //this.httpService.defaults.headers.common.RefreshToken = data.refresh_token;
                    this.httpService.defaults.headers.common['Authorization'] = "Bearer " + data.access_token;
                    this.httpService.defaults.headers.common['RefreshToken'] = data.refresh_token;

                    this.cookieStore.put('_Token', data.access_token);
                    window.location.href = '#/todomanager';
                })
                .error(function (data, status, headers, config) {
                    this.message = data.error_description.replace(/["']{1}/gi, "");
                    this.showMessage = true;
                });
        }
    }
} 