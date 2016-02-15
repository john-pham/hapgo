declare module Hapgo.global.services {
    class DeliveryService implements interfaces.IDeliveryService {
        httpService: ng.IHttpService;
        static $inject: string[];
        constructor($http: ng.IHttpService);
    }
}
