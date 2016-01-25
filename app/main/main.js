'use strict';

angular.module('ingeniusApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/landing', {
    templateUrl: 'main/landing.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', [function() {

        $(document).ready(function() {
            $('#home').height($(window).height());
        });

}]);