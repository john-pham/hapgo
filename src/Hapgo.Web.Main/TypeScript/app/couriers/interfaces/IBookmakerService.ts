module Hapgo.couriers.interfaces {

    export interface IBookmakerService {
        search: () => any;
        update: (id: string, url: string) => any;
    }
}