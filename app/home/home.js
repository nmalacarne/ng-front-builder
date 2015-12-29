'use strict';

const home = angular.module('frontBuilder.home', ['ngRoute']);

home.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}]);

home.controller('HomeCtrl', function ($scope) {
  $scope.text = 'Hello World';
});
