
module Hapgo.couriers.services {
    export class BetlistService implements interfaces.IBetlistService {
        static $inject = ['$http', '$q'];

        private httpService: ng.IHttpService;
        private qService: ng.IQService;

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }

        search = (page: number, size: number): any => {
            var deferredObject = this.qService.defer();
            //
            var dat = { 'date': '16/12/2015', 'page': page, 'size': size };

            this.httpService({
                url: '/couriers/betlist/search',
                method: 'POST',
                params: dat,
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                //timeout: 1,
                //cache: false,
                //transformRequest: false,
                //transformResponse: false
            }).then((results: any) => {
                deferredObject.resolve(results);
            }).catch((e) => {
                deferredObject.resolve(null);
            });

            //
            return deferredObject.promise;
        }

        get = (size: number): any => {
            var deferredObject = this.qService.defer();
            //
            $.post("/couriers/betlist/search", { 'page': 0, 'size': size }, (data) => {
                deferredObject.resolve(data);
            });
            //
            return deferredObject.promise;
        }
    }
} 