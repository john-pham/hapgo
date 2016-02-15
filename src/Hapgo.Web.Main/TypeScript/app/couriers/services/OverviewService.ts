
module Hapgo.couriers.services {
    export class OverviewService implements interfaces.IOverviewService {
        static $inject = ['$http', '$q', 'Hapgo.couriers.services.BetlistService', 'Hapgo.couriers.services.RejectionService'];

        private httpService: ng.IHttpService;
        private qService: ng.IQService;

        constructor($http: ng.IHttpService, $q: ng.IQService
            , private betlistService: interfaces.IBetlistService
            , private rejectService: interfaces.IRejectionService) {
            this.httpService = $http;
            this.qService = $q;
        }

        getAgents = (): any => {
            var deferredObject = this.qService.defer();
            //
            this.httpService.post('/couriers/agent/search', {})
                .then((data: any) => {
                    deferredObject.resolve(data);
                })
                .catch((data) => {
                    deferredObject.resolve(null);
                });

            //
            return deferredObject.promise;
        }

        search = (id: string): any => {
            var deferredObject = this.qService.defer();
            //
            $.post("/couriers/overview/search", { agentId: id }, (data) => {
                deferredObject.resolve(data);
            });

            //
            return deferredObject.promise;
        }

        total = (): any => {
            var deferredObject = this.qService.defer();
            //
            $.post("/couriers/overview/getAssets", {}, (data) => {
                deferredObject.resolve(data);
            });
            //
            return deferredObject.promise;
        }

        betlist = (): any => {
            return this.betlistService.get(12);
        }

        rejects = (): any => {
            return this.rejectService.get(12);
        }
    }
} 