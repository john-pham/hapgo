declare module Hapgo.couriers.controllers {
    class BookmakerController {
        static $inject: string[];
        private _service;
        constructor($service: interfaces.IBookmakerService);
        Items: Array<models.Bookmaker>;
        SelectedItem: models.Bookmaker;
        Init: () => void;
        Select: (value: models.Bookmaker) => void;
        Update: () => void;
    }
}
