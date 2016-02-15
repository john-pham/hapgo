declare module Hapgo.global.controllers {
    class GlobalController {
        private $rootScope;
        private $http;
        private $cookies;
        private $cookieStore;
        static $inject: string[];
        constructor($rootScope: any, $http: any, $cookies: any, $cookieStore: any);
        logout: () => void;
        $locationChangeSuccess: (event: any) => void;
    }
}
