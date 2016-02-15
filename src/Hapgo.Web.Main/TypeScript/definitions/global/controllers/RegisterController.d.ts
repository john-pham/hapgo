declare module Hapgo.global.controllers {
    class RegisterController {
        service: interfaces.IRegisterService;
        httpService: ng.IHttpService;
        username: string;
        password1: string;
        password2: string;
        successMessage: string;
        showErrorMessage: boolean;
        showSuccessMessage: boolean;
        showAlert: boolean;
        showSuccess: boolean;
        static $inject: string[];
        constructor($service: interfaces.IRegisterService, $http: ng.IHttpService);
        register: () => void;
    }
}
