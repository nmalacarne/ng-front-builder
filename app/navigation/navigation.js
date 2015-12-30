'use strict';

angular.module('frontBuilder.navigation', [])

.controller('NavigationCtrl', function ($scope) {
  $scope.links = [
    {
     "text": "Home",
     "url": "#/"
    },
    {
      "text": "Adventures",
      "url": "#/adventures"
    }
  ];
})

.directive('fbNav', function () {
  return {
    controller: 'NavigationCtrl',
    templateUrl: 'navigation/navigation.html'
  };
})
