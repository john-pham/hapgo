
module Hapgo.couriers.services {
    export class BookmakerService implements interfaces.IBookmakerService{
        static $inject = ['$http', '$q'];

        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }

        search = (): any => {
            var deferredObject = this.qService.defer();
            //
            this.httpService({
                url: '/couriers/bookmaker/search',
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' }
            }).then((results: any) => {
                deferredObject.resolve(results);
            }).catch((e) => {
                deferredObject.resolve(null);
            });

            //
            return deferredObject.promise;
        }

        update = (id: string, url: string): any => {
            var deferredObject = this.qService.defer();
            //
            var dat = { 'id': id, 'url': url };
            //
            this.httpService({
                url: '/couriers/bookmaker/update',
                params: dat,
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' }
            }).then((results: any) => {
                deferredObject.resolve(results);
            }).catch((e) => {
                deferredObject.resolve(null);
            });

            //
            return deferredObject.promise;
        }
    }
} 