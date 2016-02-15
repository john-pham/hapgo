module Hapgo.couriers.interfaces {

    export interface IRejectionService {
        search: (page: number, size: number) => any;
        get: (size: number) => any;
    }
}