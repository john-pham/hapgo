module Hapgo.global {
    export class Module {

        static $inject = ['angular'];
        constructor(angular: ng.IAngularStatic) {
            var app = angular.module("global", ['ui.router']);

            app.config(routes);

            Runner.Register(app);

            //
            app.controller("Hapgo.global.controllers.DeliveryController", controllers.DeliveryController);
            app.controller("Hapgo.global.controllers.AboutController", controllers.AboutController);
            app.controller("Hapgo.global.controllers.ContactController", controllers.ContactController);
            app.controller("Hapgo.global.controllers.RegisterController", controllers.RegisterController);
            app.controller("Hapgo.global.controllers.SignInController", controllers.SignInController);
            app.controller("Hapgo.global.controllers.ForgotPasswordController", controllers.ForgotPasswordController);
            //
            app.service("Hapgo.global.services.DeliveryService", services.DeliveryService);
            app.service("Hapgo.global.services.AboutService", services.AboutService);
            app.service("Hapgo.global.services.ContactService", services.ContactService);
            app.service("Hapgo.global.services.RegisterService", services.RegisterService);
            app.service("Hapgo.global.services.SignInService", services.SignInService);
            app.service("Hapgo.global.services.ForgotPasswordService", services.ForgotPasswordService);
            app.service("Hapgo.global.services.GlobalService", services.GlobalService);

            Runner.Register(app);
        }
    }

    require(['angular'
        , 'datetimepicker'
        , 'bootstrapWizard'
        , 'controllers/AboutController'
        , 'controllers/ContactController'
        , 'controllers/GlobalController'
        , 'controllers/DeliveryController'
        , 'controllers/RegisterController'
        , 'controllers/SignInController'
        , 'controllers/ForgotPasswordController'
        , 'services/AboutService'
        , 'services/ContactService'
        , 'services/DeliveryService'
        , 'services/RegisterService'
        , 'services/SignInService'
        , 'services/ForgotPasswordService'
        , 'services/GlobalService'
        , 'routes'
        , 'routes.runner'], Module);
}