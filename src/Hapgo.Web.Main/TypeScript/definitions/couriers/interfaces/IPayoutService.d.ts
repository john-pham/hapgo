declare module Hapgo.couriers.interfaces {
    interface IPayoutService {
        search: () => Array<models.Payout>;
    }
}
