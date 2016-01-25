'use strict';

// Declare app level module which depends on views, and components
angular.module('ingeniusApp', [
  'ngRoute',
  'ingeniusApp.main',
  'ingeniusApp.view2',
  'ingeniusApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/landing'});
}]);
