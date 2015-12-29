'use strict';

angular.module('frontBuilder', [
  'frontBuilder.home'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}])

