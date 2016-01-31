'use strict';

// Declare app level module which depends on views, and components
angular.module('ingeniusApp', [
  'ngRoute',
  'ingeniusApp.main',
  'ingeniusApp.view2',
  'ingeniusApp.version',
  'ui.grid','ui.grid.autoResize'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/landing'});
}]);
