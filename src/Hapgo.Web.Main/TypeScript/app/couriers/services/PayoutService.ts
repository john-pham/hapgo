
module Hapgo.couriers.services {
    export class PayoutService implements interfaces.IPayoutService {
        static $inject = ["$http"];

        private httpService: ng.IHttpService
        
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        search = () => {
            //For the purpose of this demo I am returning the hard coded values, hoever in real world application
            //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.

            var res: Array<models.Payout> = [
                { title: "Numb", artist: "Linkin Park", rating: 5 },
                { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                { title: "Yellow", artist: "coldplay", rating: 4.5 },
                { title: "Skyfall", artist: "Adele", rating: 4.5 }
            ];
            return res;
        }
    }
} 