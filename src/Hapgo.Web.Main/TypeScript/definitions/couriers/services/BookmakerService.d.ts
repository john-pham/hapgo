declare module Hapgo.couriers.services {
    class BookmakerService implements interfaces.IBookmakerService {
        static $inject: string[];
        private httpService;
        private qService;
        constructor($http: ng.IHttpService, $q: ng.IQService);
        search: () => any;
        update: (id: string, url: string) => any;
    }
}
