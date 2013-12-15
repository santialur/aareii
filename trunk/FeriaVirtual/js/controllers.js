var phonecatApp = angular.module('AdminApp', []);
 
phonecatApp.controller('AdminCtrl', function ($scope) {
  $scope.phones = [
    {'item': 'Internet explorer'},
    {'item': 'Chrome'},
    {'item': 'Firefox'},
    {'item': 'Safari'},
    {'item': 'Other'}
  ];
});