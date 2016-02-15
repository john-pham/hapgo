declare module Hapgo.global.services {
    class GlobalService implements interfaces.IGlobalService {
        static $inject: string[];
        private httpService;
        private qService;
        constructor($http: ng.IHttpService, $q: ng.IQService);
        signOut: () => any;
    }
}
