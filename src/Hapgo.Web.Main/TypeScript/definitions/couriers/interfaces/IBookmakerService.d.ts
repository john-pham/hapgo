declare module Hapgo.couriers.interfaces {
    interface IBookmakerService {
        search: () => any;
        update: (id: string, url: string) => any;
    }
}
