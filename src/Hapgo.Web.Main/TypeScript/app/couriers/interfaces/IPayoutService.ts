module Hapgo.couriers.interfaces {

    export interface IPayoutService {
        search: () => Array<models.Payout>;
    }
}