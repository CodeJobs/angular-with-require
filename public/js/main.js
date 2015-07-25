(function() {
    'use strict';

    require.config({
        paths: {
            // General dependencies
            'angular': '../bower_components/angular/angular.min',

            // Local dependencies
            'codejobsApp': 'codejobs/codejobs.module'
        },

        shim: {
            'angular': {
                exports: 'angular'
            },

            'codejobsApp': {
                deps: ['angular']
            }
        }
    });

    require([
        'codejobs/bootstrap'
    ]);
})();
