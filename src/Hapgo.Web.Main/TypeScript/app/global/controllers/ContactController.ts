
module Hapgo.global.controllers {
    export class ContactController {

        service: interfaces.IContactService;

        static $inject = ["Hapgo.global.services.ContactService"];
        constructor($service: interfaces.IContactService) {
            this.service = $service;
        }
    }
} 