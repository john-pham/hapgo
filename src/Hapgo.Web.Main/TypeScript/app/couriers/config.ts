/// <reference path="../../extdefinitions/tsd.d.ts" />

require.config({
    baseUrl: '/scripts/couriers',
    //waitSeconds: 200,
    paths: {
        'domReady': '/lib/domReady/domReady',
        'jquery': '/lib/jquery/dist/jquery',
        'bootstrap': '/lib/bootstrap/dist/js/bootstrap',
        'angular': '/lib/angular/angular',
        'uiRouter': '/lib/angular-ui-router/release/angular-ui-router',
        'raphael': '/lib/raphael/raphael-min',
        'morris': '/lib/morrisjs/morris.min',
        'ngHttpLoader': '/lib/angular-http-loader/app/package/js/angular-http-loader',
        'datetimepicker': '/lib/datetimepicker/jquery.datetimepicker'
    },
    shim: {
        jquery: { exports: 'jquery' },
        bootstrap: { exports: 'bootstrap', deps: ['jquery'] },
        angular: { exports: 'angular', deps: ['jquery', 'domReady!'] },
        uiRouter: { exports: 'uiRouter', deps: ['angular'] },
        ngHttpLoader: { exports: 'ngHttpLoader', deps: ['angular'] },
        raphael: { exports: 'raphael', deps: ['jquery'] },
        morris: { exports: 'morris', deps: ['jquery', 'raphael'] },
        datetimepicker: { exports: 'datetimepicker', deps: ['jquery'] }
    },
});

require(['domReady!', 'jquery', 'angular', 'uiRouter', 'ngHttpLoader', 'bootstrap', 'raphael', 'morris', 'datetimepicker', 'boots'],
    (document, $: JQueryStatic, angular: ng.IAngularStatic, uiRouter, ngHttpLoader, bootstrap, raphael, morris, datetimepicker, boots) => {
        // bootstrap the document, since we are loading asynchronously
        $(() => {
            angular.bootstrap(document, ['couriers']);
        });
    });
