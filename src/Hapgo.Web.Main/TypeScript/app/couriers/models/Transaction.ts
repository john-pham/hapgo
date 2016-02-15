module Hapgo.couriers.models {
    export interface Transaction {
        UserName: string;
        Code: string;
        CreatedDateString: string;
        SboReference: string;
        SboStatus: string;
        StatusString: string;
        Status: number;
        ResponseTimeString: string;
        IP: string;
    }
}