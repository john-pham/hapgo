
module Hapgo.couriers.controllers {
    export class BetlistController extends PaginationController {
        static $inject = ["Hapgo.couriers.services.BetlistService"];

        private _service: interfaces.IBetlistService;

        betlist: Array<models.Transaction>;
        
        constructor($service: interfaces.IBetlistService) {
            super();
            this._service = $service;
            //$('#dt_searchdate').datetimepicker();
        }

        init = () => {
            this.search();
        }

        PageChanged = () => {
            this.search();
        }

        search = () => {
            //TRANSACTION
            //
            //this.span.innerHTML = new Date().toUTCString();
            var response = this._service.search(this.Current, this.Size);

            response.then((resulted: any) => {
                if (resulted == null) {
                    //alert('Can not add new district code.');
                } else {
                    //this.betlist = resulted.data;
                    var result = resulted.data;
                    this.betlist = result.Data;
                    this.Reset(result.TotalItems, result.SelectedPage);
                }
            });
        }


    }
} 