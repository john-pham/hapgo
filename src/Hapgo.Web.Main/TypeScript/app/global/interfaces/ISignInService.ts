module Hapgo.global.interfaces {
    export interface ISignInService {
        login: ($rootScope: controllers.SignInController) => void;
        signOut: ($rootScope: controllers.SignInController) => void;
    }
}