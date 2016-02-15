
module Hapgo.global.controllers {
    export class AboutController {

        service: interfaces.IAboutService;

        static $inject = ["Hapgo.global.services.AboutService"];
        constructor($service: interfaces.IAboutService) {
            this.service = $service;
        }
    }
} 