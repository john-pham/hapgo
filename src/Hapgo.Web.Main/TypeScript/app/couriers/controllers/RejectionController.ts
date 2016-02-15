
module Hapgo.couriers.controllers {
    export class RejectionController extends PaginationController{
        static $inject = ["Hapgo.couriers.services.RejectionService"];

        private _service: interfaces.IRejectionService;

        hedgelogs: Array<models.Reject>;

        constructor($service: interfaces.IRejectionService) {
            super();
            this._service = $service;
        }

        init = () => {
            this.search();
        }

        PageChanged = () => {
            this.search();
        }

        search = () => {
            //REJECTED ORDER

            //this.span.innerHTML = new Date().toUTCString();
            var response = this._service.search(0, 50);

            response.then((resulted: any) => {
                if (resulted == null) {
                    //alert('Can not add new district code.');
                } else {
                    //this.hedgelogs = resulted.data;
                    var result = resulted.data;
                    this.hedgelogs = result.Data;
                    this.Reset(result.TotalItems, result.SelectedPage);
                }
            });
        }
    }
} 