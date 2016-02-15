declare module Hapgo.couriers.controllers {
    class BetlistController extends PaginationController {
        static $inject: string[];
        private _service;
        betlist: Array<models.Transaction>;
        constructor($service: interfaces.IBetlistService);
        init: () => void;
        PageChanged: () => void;
        search: () => void;
    }
}
