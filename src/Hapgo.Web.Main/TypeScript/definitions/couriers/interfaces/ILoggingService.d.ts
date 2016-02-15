declare module Hapgo.couriers.interfaces {
    interface ILoggingService {
        search: (page: number, size: number) => any;
        get: (size: number) => any;
    }
}
