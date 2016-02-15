declare module Hapgo.global.controllers {
    class ForgotPasswordController {
        service: interfaces.IForgotPasswordService;
        static $inject: string[];
        constructor($service: interfaces.IForgotPasswordService);
    }
}
