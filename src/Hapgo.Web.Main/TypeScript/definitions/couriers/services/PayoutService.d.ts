declare module Hapgo.couriers.services {
    class PayoutService implements interfaces.IPayoutService {
        static $inject: string[];
        private httpService;
        constructor($http: ng.IHttpService);
        search: () => models.Payout[];
    }
}
