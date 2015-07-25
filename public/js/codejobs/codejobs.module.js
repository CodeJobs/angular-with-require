(function() {
    'use strict';

    define(function(require) {
        var angular = require('angular');

        var codejobsApp = angular.module('codejobsApp', []);

        codejobsApp
            .controller('homeController', HomeController);

        HomeController.$inject = ['$scope'];

        function HomeController($scope) {
            var vm = this;

            vm.name = 'Codejobs';
        }
    });
})();
