declare module Hapgo.couriers.controllers {
    class OverviewController {
        private $stateParams;
        private $state;
        static $inject: string[];
        private _service;
        private _agentId;
        private _timer;
        private _totaling;
        private _donutChart;
        TotalBetlist: number;
        TotalHedgelog: number;
        Total: number;
        Accepted: number;
        RejectedRate: string;
        TotalRejected: number;
        TotalTier1: number;
        TotalTier2: number;
        MaxRT: number;
        MinRT: number;
        MaxAt: Date;
        MinAt: Date;
        AgentName: string;
        Agents: Array<models.Agent>;
        betlist: Array<models.Transaction>;
        hedgelogs: Array<models.Reject>;
        BRunning: boolean;
        Loading: boolean;
        RRunning: boolean;
        constructor($service: interfaces.IOverviewService, $stateParams: any, $state: any);
        init: () => void;
        search: (agentId: string) => void;
        private command;
        private model;
        private clear;
    }
}
