declare module Hapgo.couriers.controllers {
    class PayoutController {
        static $inject: string[];
        service: interfaces.IPayoutService;
        constructor($service: interfaces.IPayoutService);
        favorites: Array<models.Payout>;
        getFavourites: () => void;
    }
}
