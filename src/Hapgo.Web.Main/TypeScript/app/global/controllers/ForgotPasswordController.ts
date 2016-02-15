
module Hapgo.global.controllers {
    export class ForgotPasswordController {

        service: interfaces.IForgotPasswordService;

        static $inject = ["Hapgo.global.services.ForgotPasswordService"];
        constructor($service: interfaces.IForgotPasswordService) {
            this.service = $service;
        }
    }
} 