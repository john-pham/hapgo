
module Hapgo.global.controllers {
    export class RegisterController {

        service: interfaces.IRegisterService;
        httpService: ng.IHttpService;

        username: string;
        password1: string;
        password2: string;
        successMessage: string;
        showErrorMessage: boolean;
        showSuccessMessage: boolean;
        showAlert: boolean = false;
        showSuccess: boolean = false;

        static $inject = ["Hapgo.global.services.RegisterService", "$http"];
        constructor($service: interfaces.IRegisterService, $http: ng.IHttpService) {
            this.service = $service;
            this.httpService = $http
        }

        register = () => {
            var params = {
                Email: this.username,
                Password: this.password1,
                ConfirmPassword: this.password2
            };

            this.httpService.post('/api/Account/Register', params)
                .success(function (data, status, headers, config) {
                    this.successMessage = "Registration Complete.  Please check your email for account activation instructions.";
                    this.showErrorMessage = false;
                    this.showSuccessMessage = true;
                })
                .error(function (data, status, headers, config) {
                    if (angular.isArray(data))
                        this.errorMessages = data;
                    else
                        this.errorMessages = new Array(data.replace(/["']{1}/gi, ""));

                    this.showSuccessMessage = false;
                    this.showErrorMessage = true;
                });
        }
    }
} 