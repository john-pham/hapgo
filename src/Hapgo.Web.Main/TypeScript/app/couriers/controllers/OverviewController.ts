
module Hapgo.couriers.controllers {

    export class OverviewController {
        static $inject = ['Hapgo.couriers.services.OverviewService', '$stateParams', '$state'];

        private _service: interfaces.IOverviewService;
        private _agentId: string;
        private _timer: number;
        private _totaling: boolean = false;
        private _donutChart: any;

        TotalBetlist: number = 0;
        TotalHedgelog: number = 0;
        Total: number = 0;
        Accepted: number = 0;
        RejectedRate: string;
        TotalRejected: number = 0;
        TotalTier1: number = 0;
        TotalTier2: number = 0;
        MaxRT: number;
        MinRT: number;
        MaxAt: Date;
        MinAt: Date;
        AgentName: string;
        Agents: Array<models.Agent>;
        betlist: Array<models.Transaction>;
        hedgelogs: Array<models.Reject>;
        BRunning: boolean = false;
        Loading: boolean = false;
        RRunning: boolean = false;

        constructor($service: interfaces.IOverviewService, private $stateParams, private $state: any) {
            this._service = $service;

            //
            $('[data-toggle="offcanvas"]').click(() => {
                $('.row-offcanvas').toggleClass('active')
            });
        }

        init = () => {
            // Donut Chart
            this._donutChart = Morris.Donut({
                element: 'morris-donut-chart',
                data: [{
                    label: "Acceptation Rate",
                    value: 0
                }, {
                        label: "Rejected by Tier 1",
                        value: this.TotalTier1
                    }, {
                        label: "Rejected by Tier 2",
                        value: this.TotalTier2
                    }],
                resize: true
            });
            //
            var defaultId = 'ab47568e-59e0-487c-a5b6-882eaf2c63b8';

            this.search(defaultId);

            //AFFILIATES
            var response = this._service.getAgents();

            response.then((resulted: any) => {
                if (resulted != null && resulted.data != null) {
                    this.Agents = resulted.data;
                }
            });

            //TRANSACTION
            var timerb = setInterval(() => {
                this.clear(timerb);

                if (!this.BRunning) {
                    //
                    this.BRunning = true;
                    //this.span.innerHTML = new Date().toUTCString();
                    var response = this._service.betlist();

                    response.then((resulted: any) => {
                        if (resulted != null) {
                            //this.betlist = resulted.data;
                            this.betlist = resulted.Data;
                        }

                        //
                        this.BRunning = false;
                    });
                }
            }, 1000);

            //REJECTED ORDER
            var timerr = setInterval(() => {
                this.clear(timerr);

                if (!this.RRunning) {
                    //
                    this.RRunning = true;

                    //this.span.innerHTML = new Date().toUTCString();
                    var response = this._service.rejects();

                    response.then((resulted: any) => {
                        if (resulted != null) {
                            //this.hedgelogs = resulted.data;
                            this.hedgelogs = resulted.Data;
                        }
                        //
                        this.RRunning = false;
                    });
                }
            }, 1000);

            //TOTAL
            var timert = setInterval(() => {
                this.clear(timert);

                if (!this._totaling) {
                    this._totaling = true;

                    var response = this._service.total();

                    response.then((resulted: any) => {
                        if (resulted != null) {
                            var ser = resulted as models.RejectionCounter;
                            //
                            // Donut Chart
                            this._donutChart.setData([
                                {
                                    label: "OK",
                                    value: ser.Total - ser.RejectedByServer - ser.RejectedByBookmaker
                                }, {
                                    label: "Tier 1",
                                    value: ser.RejectedByServer
                                }, {
                                    label: "Tier 2",
                                    value: ser.RejectedByBookmaker
                                }]);
                            //
                            this.TotalBetlist = ser.Total - ser.RejectedByServer;
                            this.TotalHedgelog = ser.RejectedByBookmaker + ser.RejectedByServer;
                            //
                            this._totaling = false;
                        }
                    });

                }
            }, 5000);
        }

        search = (agentId: string) => {
            this._agentId = agentId;

            if (this._timer >= 0) {
                clearTimeout(this._timer);
            };

            //
            this._timer = setInterval(() => {
                this.clear(this._timer);

                if (!this.Loading) {
                    this.Loading = true;
                    this.command(this._agentId);
                }
            }, 5000);

        }

        private command = (agentId: string) => {

            //TRANSACTION
            //
            var response = this._service.search(agentId);

            response.then((resulted: any) => {
                if (resulted != null) {
                    //var agent = resulted.data as models.RejectionRate;
                    var agent = resulted as models.RejectionRate;
                    //
                    this.model(agent);
                    //
                    this.Loading = false;
                }
            });
        }

        private model = (agent: models.RejectionRate) => {
            var rr: number = 0.0;
            var total: number = agent.Total;
            var rejected: number = agent.RejectedByServer + agent.RejectedByBookmaker;

            if (total > 0) {
                rr = rejected * 100 / total;
            }

            this.Total = total;
            this.MaxRT = agent.RT.MaximumValue;
            this.MinRT = agent.RT.MinimumValue;
            this.MaxAt = agent.RT.MaximumTime;
            this.MinAt = agent.RT.MinimumTime;
            this.TotalTier1 = agent.RejectedByServer;
            this.TotalTier2 = agent.RejectedByBookmaker;
            this.TotalRejected = rejected;
            this.Accepted = agent.Total - this.TotalRejected;
            this.AgentName = agent.Name;
            this.RejectedRate = rr.toFixed(2);
        }

        private clear = (timer: number) => {
            if (this.$state.current.name != 'home') {
                clearTimeout(timer);
            }
        }
    }
} 