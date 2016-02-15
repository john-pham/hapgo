declare module Hapgo.couriers.interfaces {
    interface IBetlistService {
        search: (page: number, size: number) => any;
        get: (size: number) => any;
    }
}
