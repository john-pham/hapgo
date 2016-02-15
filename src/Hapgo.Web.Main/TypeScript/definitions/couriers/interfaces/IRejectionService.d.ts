declare module Hapgo.couriers.interfaces {
    interface IRejectionService {
        search: (page: number, size: number) => any;
        get: (size: number) => any;
    }
}
