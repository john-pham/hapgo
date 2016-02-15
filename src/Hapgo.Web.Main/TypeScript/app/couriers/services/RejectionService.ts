
module Hapgo.couriers.services {
    export class RejectionService implements interfaces.IRejectionService {
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
            var dat = { 'page': page, 'size': size };

            this.httpService({
                url: '/couriers/rejection/search',
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
            $.post("/couriers/rejection/search", { 'page': 0, 'size': size }, (data) => {
                deferredObject.resolve(data);
            });
            //
            return deferredObject.promise;
        }
    }
} 