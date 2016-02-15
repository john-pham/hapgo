module Hapgo.couriers {
    export class Runner {
        static Register(app: ng.IModule) {
            app.run(['$rootScope', '$state', 'Hapgo.couriers.services.GlobalService', 'Hapgo.couriers.services.LoggingService',
                ($rootScope, $state, service: interfaces.IGlobalService, loggingService: interfaces.ILoggingService) => {

                    //LOG OFF
                    $rootScope.logOff = () => {
                        var response = service.signOut();

                        response.then((resulted: any) => {
                            if (resulted.data != null) {
                                window.location.href = '/home'
                            } else {
                                alert('Error occurred - ' + resulted);
                            }
                        });
                    };

                    $rootScope.hasActiveClass = (name: string) => {
                        return $state.current.name == name;
                    };

                    $rootScope.setupMaintenance = (mode: number) => {
                        service.setupMaintenance(mode);
                    }

                    //LOGGING
                    $rootScope.logs = [];
                    $rootScope.LoggingRunning = false;

                    setInterval(() => {
                        if (!$rootScope.LoggingRunning) {
                            //
                            $rootScope.LoggingRunning = true;
                            //this.span.innerHTML = new Date().toUTCString();
                            var response = loggingService.get(5);

                            response.then((resulted: any) => {
                                if (resulted != null) {
                                    //this.betlist = resulted.data;
                                    $rootScope.logs = resulted.Data;
                                }

                                //
                                $rootScope.LoggingRunning = false;
                            });
                        }
                    }, 3000);
                }]);
        }
    }
}