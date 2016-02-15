declare module Hapgo.couriers.interfaces {
    interface IGlobalService {
        signOut: () => any;
        setupMaintenance: (mode: number) => any;
    }
}
