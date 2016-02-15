module Hapgo.couriers.interfaces {

    export interface IBetlistService {
        search: (page: number, size: number) => any;
        get: (size: number) => any;
    }
}