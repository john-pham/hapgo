module Hapgo.couriers.models {
    export interface RejectionCounter {
        RejectedByServer: number;
        RejectedByBookmaker: number;
        Total: number;
    }
}