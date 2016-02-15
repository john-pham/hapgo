declare module Hapgo.couriers.models {
    interface RejectionRate {
        RejectedByServer: number;
        RejectedByBookmaker: number;
        Total: number;
        RT: ResponseTime;
        Name: string;
        ID: string;
    }
}
