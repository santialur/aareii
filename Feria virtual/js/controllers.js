var adminApp = angular.module('AdminApp', []);
 
adminApp.controller('PollCtrl', function ($scope, $http) {
  $http.get('../js/poll.json').success(function(data) {
  	$scope.poll = data;	
  });
});

adminApp.controller('NewsCtrl', function ($scope, $http){
   $http.get('../js/news.json').success(function(data){
   	$scope.news = data;
   });
});