module Hapgo.couriers.models {
    export interface RejectionRate {
        RejectedByServer: number;
        RejectedByBookmaker: number;
        Total: number;
        RT: ResponseTime;
        Name: string;
        ID: string;
    }
}