module Hapgo.couriers.interfaces {

    export interface ILoggingService {
        search: (page: number, size: number) => any;
        get: (size: number) => any;
    }
}