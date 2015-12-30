'use strict';

angular.module('frontBuilder', [
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'frontBuilder.home',
  'frontBuilder.navigation',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}])

