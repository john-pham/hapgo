/// <reference path="../../extdefinitions/tsd.d.ts" />

require.config({
    baseUrl: '/scripts/global',
    //waitSeconds: 200,
    paths: {
        'domReady': '/lib/domReady/domReady',
        'jquery': '/lib/jquery/dist/jquery',
        'jqueryValidation': '/lib/jquery-validation/dist/jquery.validate',
        'bootstrap': '/lib/bootstrap/dist/js/bootstrap',
        'angular': '/lib/angular/angular',
        'uiRouter': '/lib/angular-ui-router/release/angular-ui-router',
        'datetimepicker': '/lib/datetimepicker/jquery.datetimepicker',
        'bootstrapWizard': '/js/jquery.bootstrap.wizard',
        'wizard': '/js/wizard',
        'website': '/js/site.min'
    },
    shim: {
        jquery: { exports: 'jquery' },
        jqueryValidation: { exports: 'jqueryValidation', deps: ['jquery'] },
        bootstrap: { exports: 'bootstrap', deps: ['jquery'] },
        angular: { exports: 'angular', deps: ['jquery', 'domReady!'] },
        uiRouter: { exports: 'uiRouter', deps: ['angular'] },
        datetimepicker: { exports: 'datetimepicker', deps: ['jquery'] },
        bootstrapWizard: { exports: 'bootstrapWizard', deps: ['jquery'] },
        wizard: { exports: 'wizard' },
        website: { exports: 'website' }
    },
});

require(['domReady!', 'jquery', 'jqueryValidation', 'angular', 'uiRouter', 'bootstrap', 'boots'],
    (document, $: JQueryStatic, jqueryValidation, angular: ng.IAngularStatic, uiRouter, bootstrap, boots) => {
        // bootstrap the document, since we are loading asynchronously
        $(() => {
            angular.bootstrap(document, ['global']);
        });
    });
