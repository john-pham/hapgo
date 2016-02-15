
module Hapgo.couriers {
    export class routes {

        static $inject = ['$stateProvider', 'httpMethodInterceptorProvider'];

        constructor($stateProvider: ng.ui.IStateProvider, httpMethodInterceptorProvider) {
            //================================================
            // Ignore Template Request errors if a page that was requested was not found or unauthorized.  The GET operation could still show up in the browser debugger, but it shouldn't show a $compile:tpload error.
            //================================================
            //$provide.decorator('$templateRequest', ['$delegate', ($delegate) => {
            //    var mySilentProvider = (tpl, ignoreRequestError) => {
            //        return $delegate(tpl, true);
            //    }
            //    return mySilentProvider;
            //}]);

            ////================================================
            //// Add an interceptor for AJAX errors
            ////================================================
            //$httpProvider.interceptors.push(['$q', '$location', ($q, $location) => {
            //    return {
            //        'responseError': (response) => {
            //            if (response.status === 401)
            //                $location.url('/signin');
            //            return $q.reject(response);
            //        }
            //    };
            //}]);

            //$routeProvider.otherwise({
            //    redirectTo: ''
            //});

            httpMethodInterceptorProvider.whitelistLocalRequests();

            $stateProvider.state('home', {
                url: '',
                views: {
                    '': {
                        templateUrl: '/couriers/overview/dashboard',
                        controller: controllers.OverviewController,
                        controllerAs: "app"
                    }
                }
            });

            //$stateProvider.state('agent', {
            //    url: '/agent/:agentId',
            //    views: {
            //        '': {
            //            templateUrl: '/couriers/overview/dashboard',
            //            controller: controllers.OverviewController,
            //            controllerAs: "app"
            //        }
            //    }
            //});

            $stateProvider.state('betlist', {
                url: '/betlist',
                views: {
                    '': {
                        templateUrl: '/couriers/betlist/index',
                        controller: controllers.BetlistController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('rejection', {
                url: '/rejection',
                views: {
                    '': {
                        templateUrl: '/couriers/rejection/index',
                        controller: controllers.RejectionController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('bookmaker', {
                url: '/bookmaker',
                views: {
                    '': {
                        templateUrl: '/couriers/bookmaker/index',
                        controller: controllers.BookmakerController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('payout', {
                url: '/payout',
                views: {
                    '': {
                        templateUrl: '/couriers/payout/index',
                        controller: controllers.PayoutController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('logging', {
                url: '/logging',
                views: {
                    '': {
                        templateUrl: '/couriers/logging/index',
                        controller: controllers.LoggingController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('manageaccount', {
                url: '/manage-acc',
                views: {
                    '': {
                        templateUrl: '/Manage/Index',
                        controller: controllers.PayoutController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('changepassword', {
                url: '/change-pwd',
                views: {
                    '': {
                        templateUrl: '/Manage/ChangePassword',
                        controller: controllers.PayoutController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('resetpassword', {
                url: '/reset-pwd',
                views: {
                    '': {
                        templateUrl: '/Manage/SetPassword',
                        controller: controllers.PayoutController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('managelogins', {
                url: '/manage-logins',
                views: {
                    '': {
                        templateUrl: '/Manage/ManageLogins',
                        controller: controllers.PayoutController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state("otherwise", {
                url: "*path",
                views: {
                    '': {
                        templateUrl: '/couriers/overview/dashboard',
                        controller: controllers.OverviewController,
                        controllerAs: "app"
                    }
                }
            });
        }
    }
}