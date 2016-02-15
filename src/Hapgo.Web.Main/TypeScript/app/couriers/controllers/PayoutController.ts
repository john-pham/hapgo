
module Hapgo.couriers.controllers {
    export class PayoutController {
        static $inject = ["Hapgo.couriers.services.PayoutService"];

        service: interfaces.IPayoutService;

        constructor($service: interfaces.IPayoutService) {
            this.service = $service;
        }

        public favorites: Array<models.Payout>;

        getFavourites = () => {
            this.favorites = this.service.search();
        }
    }
} 