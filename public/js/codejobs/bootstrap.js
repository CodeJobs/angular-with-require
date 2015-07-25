(function() {
    'use strict';

    require(['angular'], function(angular) {
        require(['codejobsApp'], function() {
            angular
                .element(document)
                .ready(function() {
                    angular.bootstrap(document, ['codejobsApp']);
                });
        });
    });
})();
