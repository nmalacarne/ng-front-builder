'use strict';

angular.module('frontBuilder', [
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'frontBuilder.home'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}])

