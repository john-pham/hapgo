
module Hapgo.couriers.services {
    export class GlobalService implements interfaces.IGlobalService {
        static $inject = ['$http', '$q'];

        private httpService: ng.IHttpService;
        private qService: ng.IQService;

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }

        signOut = (): any => {
            var deferredObject = this.qService.defer();
            //
            this.httpService.post('/account/LogOff', {})
                .then((data: any) => {
                    deferredObject.resolve(data);
                })
                .catch((data) => {
                    deferredObject.resolve(null);
                });

            //
            return deferredObject.promise;
        }

        setupMaintenance = (mode: number): any => {
            var deferredObject = this.qService.defer();
            //
            var dat = { 'mode': mode};
            //
            this.httpService({
                url: '/couriers/maintenance/create',
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