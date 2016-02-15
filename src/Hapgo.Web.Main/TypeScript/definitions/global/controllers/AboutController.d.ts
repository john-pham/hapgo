declare module Hapgo.global.controllers {
    class AboutController {
        service: interfaces.IAboutService;
        static $inject: string[];
        constructor($service: interfaces.IAboutService);
    }
}
