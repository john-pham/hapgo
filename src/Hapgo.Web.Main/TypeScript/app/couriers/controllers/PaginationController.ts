module Hapgo.couriers.controllers {
    export abstract class PaginationController {
        private _MaxLength: number = 10;
        private _SelectedGroup: number = 0;

        Size: number = 50;
        SupportSize: Array<number> = [20, 50, 100, 200];

        Total: number = 0;
        Current: number = 0;
        Pagelist: Array<number>;

        constructor() {
            this.Pagelist = this.getPagelist();
        }

        SelectSize = (value: number) => {
            this.Size = value;
            this._SelectedGroup = 0;
            this.SelectPage(0);
            this.Pagelist = this.getPagelist();
        }

        SelectPrevious = () => {
            this._SelectedGroup -= this._MaxLength;

            if (this._SelectedGroup < 0) {
                this._SelectedGroup = 0;
            }
            else {
                this.Pagelist = this.getPagelist();
            }
        }

        TotalPages = (): number => {
            return this.Pagelist.length;
        }

        SelectNext = () => {
            this._SelectedGroup += this._MaxLength;
            var list = this.getPagelist();
            if (list != this.Pagelist) {
                this.Pagelist = list;
            }
            else {
                this._SelectedGroup -= this._MaxLength;
            }
        }

        SelectPage = (value: number) => {
            this.Current = value;
            this.PageChanged();
        }

        PageChanged = () => { };

        Reset = (total: number, page: number) => {
            if (page == this.Current) {
                this.Total = total;
                this.Pagelist = this.getPagelist();
            }
        }

        private getPagelist = (): Array<number> => {
            var list: Array<number> = [];
            var max: number = this.Total / this.Size;
            var min: number = this._SelectedGroup;

            //
            if (min > max) {
                list = this.Pagelist;
            }
            else {
                if (min + this._MaxLength < max) {
                    max = min + this._MaxLength;
                }

                for (var i = min; i < max; i++) {
                    list.push(i + 1);
                }
            }

            return list;
        }
    }
}