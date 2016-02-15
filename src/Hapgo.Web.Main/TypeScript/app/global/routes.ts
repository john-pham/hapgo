
module Hapgo.global {
    export class routes {

        static $inject = ['$stateProvider'];

        constructor($stateProvider: ng.ui.IStateProvider) {

            // Routes
            //================================================

            //$routeProvider.otherwise({
            //    redirectTo: ''
            //});

            $stateProvider.state('home', {
                url: '',
                views: {
                    '': {
                        templateUrl: 'Home/Delivery',
                        controller: controllers.DeliveryController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('about', {
                url: '/about',
                views: {
                    '': {
                        templateUrl: 'Home/About',
                        controller: controllers.AboutController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('contact', {
                url: '/contact',
                views: {
                    '': {
                        templateUrl: 'Home/Contact',
                        controller: controllers.ContactController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('register', {
                url: '/register',
                views: {
                    '': {
                        templateUrl: 'Account/Register',
                        controller: controllers.RegisterController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('signin', {
                url: '/signin/:message?',
                views: {
                    '': {
                        templateUrl: 'Account/Login',
                        //controller: controllers.SignInController,
                        //controllerAs: "app"
                    }
                }

            });

            $stateProvider.state('forgotpassword', {
                url: '/forgotpassword',
                views: {
                    '': {
                        templateUrl: 'Account/ForgotPassword',
                        controller: controllers.ForgotPasswordController,
                        controllerAs: "app"
                    }
                }

            });

            $stateProvider.state("otherwise", {
                url: "*path",
                views: {
                    '': {
                        templateUrl: 'Home/Overview',
                        controller: controllers.DeliveryController,
                        controllerAs: "app"
                    }
                }
            });
        }
    }
}