
module Hapgo.couriers.controllers {
    export class BookmakerController {
        static $inject = ["Hapgo.couriers.services.BookmakerService"];

        private _service: interfaces.IBookmakerService;

        constructor($service: interfaces.IBookmakerService) {
            this._service = $service;
        }

        Items: Array<models.Bookmaker>;
        SelectedItem: models.Bookmaker;

        Init = () => {
            var response = this._service.search();

            response.then((resulted: any) => {
                if (resulted != null) {
                    this.Items = resulted.data;
                }
            });
        }

        Select = (value: models.Bookmaker) => {
            this.SelectedItem = value;
        }

        Update = () => {
            $('#md_bookmaker').modal('hide');

            var response = this._service.update(this.SelectedItem.ID, this.SelectedItem.UrlValue);

            response.then((resulted: any) => {
                if (resulted != null) {
                    this.Init();
                }
                else {
                    $('#md_bookmaker').modal('show');
                    alert('Server error! please check it again.');
                }
            });
        }
    }
} 