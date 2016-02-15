
module Hapgo.global.services {
    export class DeliveryService implements interfaces.IDeliveryService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

    }
} 