
module Hapgo.global.services {
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
    }
} 