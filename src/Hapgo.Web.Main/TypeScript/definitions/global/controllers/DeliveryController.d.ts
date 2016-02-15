declare module Hapgo.global.controllers {
    class DeliveryController {
        service: interfaces.IDeliveryService;
        seatList: Array<models.Track>;
        static $inject: string[];
        constructor($service: interfaces.IDeliveryService);
    }
}
