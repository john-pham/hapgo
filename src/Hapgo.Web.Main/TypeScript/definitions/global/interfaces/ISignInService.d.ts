declare module Hapgo.global.interfaces {
    interface ISignInService {
        login: ($rootScope: controllers.SignInController) => void;
        signOut: ($rootScope: controllers.SignInController) => void;
    }
}
