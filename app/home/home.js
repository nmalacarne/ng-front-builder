'use strict';

angular.module('frontBuilder.home', [
  'ngRoute'
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function ($scope) {
  $scope.text = 'Hello World';
})
