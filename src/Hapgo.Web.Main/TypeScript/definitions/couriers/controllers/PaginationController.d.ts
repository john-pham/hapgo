declare module Hapgo.couriers.controllers {
    abstract class PaginationController {
        private _MaxLength;
        private _SelectedGroup;
        Size: number;
        SupportSize: Array<number>;
        Total: number;
        Current: number;
        Pagelist: Array<number>;
        constructor();
        SelectSize: (value: number) => void;
        SelectPrevious: () => void;
        TotalPages: () => number;
        SelectNext: () => void;
        SelectPage: (value: number) => void;
        PageChanged: () => void;
        Reset: (total: number, page: number) => void;
        private getPagelist;
    }
}
