'use strict';

angular.module('ingeniusApp.version', [
  'ingeniusApp.version.interpolate-filter',
  'ingeniusApp.version.version-directive'
])

.value('version', '0.1');
