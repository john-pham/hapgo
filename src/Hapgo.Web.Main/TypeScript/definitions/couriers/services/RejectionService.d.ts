declare module Hapgo.couriers.services {
    class RejectionService implements interfaces.IRejectionService {
        static $inject: string[];
        private httpService;
        private qService;
        constructor($http: ng.IHttpService, $q: ng.IQService);
        search: (page: number, size: number) => any;
        get: (size: number) => any;
    }
}
