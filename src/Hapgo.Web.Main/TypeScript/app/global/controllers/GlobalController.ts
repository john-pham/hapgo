
module Hapgo.global.controllers {
    export class GlobalController {

        static $inject = ['$rootScope', '$http', '$cookies', '$cookieStore'];
        constructor(private $rootScope, private $http, private $cookies, private $cookieStore) {
        }

        logout = () => {
            this.$http.post('/api/Account/Logout')
                .success(function (data, status, headers, config) {
                    this.$http.defaults.headers.common.Authorization = null;
                    this.$http.defaults.headers.common.RefreshToken = null;
                    this.$cookieStore.remove('_Token');
                    this.$cookieStore.remove('_RefreshToken');
                    this.$rootScope.username = '';
                    this.$rootScope.loggedIn = false;
                    window.location.href = '#/signin';
                });

        }

        $locationChangeSuccess = (event) => {
            if (this.$http.defaults.headers.common.RefreshToken != null) {
                var params = "grant_type=refresh_token&refresh_token=" + this.$http.defaults.headers.common.RefreshToken;
                this.$http({
                    url: '/Token',
                    method: "POST",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: params
                })
                    .success(function (data, status, headers, config) {
                        this.$http.defaults.headers.common.Authorization = "Bearer " + data.access_token;
                        this.$http.defaults.headers.common.RefreshToken = data.refresh_token;

                        this.$cookieStore.put('_Token', data.access_token);
                        this.$cookieStore.put('_RefreshToken', data.refresh_token);

                        this.$http.get('/api/WS_Account/GetCurrentUserName')
                            .success(function (data, status, headers, config) {
                                if (data != "null") {
                                    this.$rootScope.username = data.replace(/["']{1}/gi, "");//Remove any quotes from the username before pushing it out.
                                    this.$rootScope.loggedIn = true;
                                }
                                else
                                    this.$rootScope.loggedIn = false;
                            });


                    })
                    .error(function (data, status, headers, config) {
                        this.$rootScope.loggedIn = false;
                    });
            }
        };
    }
} 