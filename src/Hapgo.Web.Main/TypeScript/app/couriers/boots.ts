module Hapgo.couriers {
    export class Module {

        static $inject = ['angular'];
        constructor(angular: ng.IAngularStatic) {
            var app = angular.module("couriers", ['ui.router', 'ng.httpLoader']);

            app.config(routes);

            //
            app.controller("Hapgo.couriers.controllers.PaginationController", controllers.PaginationController);
            app.controller("Hapgo.couriers.controllers.BookmakerController", controllers.BookmakerController);
            app.controller("Hapgo.couriers.controllers.OverviewController", controllers.OverviewController);
            app.controller("Hapgo.couriers.controllers.PayoutController", controllers.PayoutController);
            app.controller("Hapgo.couriers.controllers.BetlistController", controllers.BetlistController);
            app.controller("Hapgo.couriers.controllers.RejectionController", controllers.RejectionController);
            app.controller("Hapgo.couriers.controllers.LoggingController", controllers.LoggingController);
            //
            app.service("Hapgo.couriers.services.BookmakerService", services.BookmakerService);
            app.service("Hapgo.couriers.services.OverviewService", services.OverviewService);
            app.service("Hapgo.couriers.services.PayoutService", services.PayoutService);
            app.service("Hapgo.couriers.services.BetlistService", services.BetlistService);
            app.service("Hapgo.couriers.services.RejectionService", services.RejectionService);
            app.service("Hapgo.couriers.services.LoggingService", services.LoggingService);
            app.service("Hapgo.couriers.services.GlobalService", services.GlobalService);

            Runner.Register(app);

        }
    }

    require(['angular'
        , 'controllers/PaginationController'
        , 'controllers/BookmakerController'
        , 'controllers/OverviewController'
        , 'controllers/PayoutController'
        , 'controllers/BetlistController'
        , 'controllers/RejectionController'
        , 'controllers/LoggingController'
        , 'services/BookmakerService'
        , 'services/PayoutService'
        , 'services/OverviewService'
        , 'services/BetlistService'
        , 'services/RejectionService'
        , 'services/LoggingService'
        , 'services/GlobalService'
        , 'routes'
        , 'routes.runner'], Module);
}