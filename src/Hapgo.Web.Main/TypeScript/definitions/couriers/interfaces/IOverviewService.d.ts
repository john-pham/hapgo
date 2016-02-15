declare module Hapgo.couriers.interfaces {
    interface IOverviewService {
        getAgents: () => any;
        search: (id: string) => any;
        total: () => any;
        betlist: () => any;
        rejects: () => any;
    }
}
