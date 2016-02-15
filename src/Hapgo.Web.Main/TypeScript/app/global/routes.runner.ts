module Hapgo.global {
    export class Runner {
        static Register(app: ng.IModule) {
            app.run(['$rootScope', '$state', 'Hapgo.global.services.GlobalService',
                ($rootScope, $state, service: interfaces.IGlobalService) => {

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

                }]);

        }
    }
}