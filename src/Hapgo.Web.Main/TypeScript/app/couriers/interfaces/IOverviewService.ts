﻿module Hapgo.couriers.interfaces {

    export interface IOverviewService {
        getAgents: () => any;
        search: (id: string) => any;
        total: () => any;
        betlist: () => any;
        rejects: () => any;
    }
}