module Hapgo.couriers.models {
    export interface Reject {
        CreatedDateString: string;
        ErrorTypeString: string;
        Trace: string;
        Error: string;
        Reference: string;
        UserName: string;
        IP: string;
    }
}