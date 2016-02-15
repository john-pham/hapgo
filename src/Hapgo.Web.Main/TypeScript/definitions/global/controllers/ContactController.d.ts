declare module Hapgo.global.controllers {
    class ContactController {
        service: interfaces.IContactService;
        static $inject: string[];
        constructor($service: interfaces.IContactService);
    }
}
