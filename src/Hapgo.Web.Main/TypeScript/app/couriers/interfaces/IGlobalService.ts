module Hapgo.couriers.interfaces {

    export interface IGlobalService {
        signOut: () => any;
        setupMaintenance: (mode: number) => any;
    }
}