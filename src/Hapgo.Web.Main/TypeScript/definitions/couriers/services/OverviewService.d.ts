declare module Hapgo.couriers.services {
    class OverviewService implements interfaces.IOverviewService {
        private betlistService;
        private rejectService;
        static $inject: string[];
        private httpService;
        private qService;
        constructor($http: ng.IHttpService, $q: ng.IQService, betlistService: interfaces.IBetlistService, rejectService: interfaces.IRejectionService);
        getAgents: () => any;
        search: (id: string) => any;
        total: () => any;
        betlist: () => any;
        rejects: () => any;
    }
}
