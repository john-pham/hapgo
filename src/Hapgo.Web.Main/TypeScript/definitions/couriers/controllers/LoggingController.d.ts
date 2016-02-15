declare module Hapgo.couriers.controllers {
    class LoggingController extends PaginationController {
        static $inject: string[];
        private _service;
        Items: Array<models.Transaction>;
        constructor($service: interfaces.ILoggingService);
        init: () => void;
        PageChanged: () => void;
        search: () => void;
    }
}
