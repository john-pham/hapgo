declare module Hapgo.couriers.controllers {
    class RejectionController extends PaginationController {
        static $inject: string[];
        private _service;
        hedgelogs: Array<models.Reject>;
        constructor($service: interfaces.IRejectionService);
        init: () => void;
        PageChanged: () => void;
        search: () => void;
    }
}
