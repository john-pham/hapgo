
module Hapgo.global.services {
    export class SignInService implements interfaces.ISignInService {
        httpService: ng.IHttpService;
        cookieStore: ng.cookies.ICookieStoreService;

        static $inject = ["$http", "$cookieStore"];
        constructor($http: ng.IHttpService, $cookieStore: ng.cookies.ICookieStoreService) {
            this.httpService = $http;
            this.cookieStore = $cookieStore;
        }

        login = ($rootScope: controllers.SignInController) => {
            if (this.httpService.defaults.headers.common['RefreshToken'] != null) {
                var params = "grant_type=refresh_token&refresh_token=" + this.httpService.defaults.headers.common['RefreshToken'];
                this.httpService({
                    url: '/Token',
                    method: "POST",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: params
                })
                    .success((data: any, status, headers, config) => {
                        this.httpService.defaults.headers.common['Authorization'] = "Bearer " + data.access_token;
                        this.httpService.defaults.headers.common['RefreshToken'] = data.refresh_token;

                        this.cookieStore.put('_Token', data.access_token);
                        this.cookieStore.put('_RefreshToken', data.refresh_token);

                        this.httpService.get('/api/WS_Account/GetCurrentUserName')
                            .success((data: any, status, headers, config) => {
                                if (data != "null") {
                                    $rootScope.username = data.replace(/["']{1}/gi, "");//Remove any quotes from the username before pushing it out.
                                    $rootScope.loggedIn = true;
                                }
                                else
                                    $rootScope.loggedIn = false;
                            });


                    })
                    .error(function (data, status, headers, config) {
                        $rootScope.loggedIn = false;
                    });
            }
        }

        signOut = ($rootScope: controllers.SignInController) => {
            this.httpService.post('/api/Account/Logout', '' )
                .success(function (data, status, headers, config) {
                    this.httpService.defaults.headers.common.Authorization = null;
                    this.httpService.defaults.headers.common.RefreshToken = null;
                    this.cookieStore.remove('_Token');
                    this.cookieStore.remove('_RefreshToken');
                    $rootScope.username = '';
                    $rootScope.loggedIn = false;
                    window.location.href = '#/signin';
                });
        }
    }
} 