'use strict';

const app = angular.module('frontBuilder', [
  'frontBuilder.home'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

