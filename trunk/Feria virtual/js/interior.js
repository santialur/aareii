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


$( document ).ready(function loadNews(){
	$('#nb1').html('<div class="newsContent"> <h3>	Los precios de la Capital Federal crecieron 3,6% durante marzo	</h3><p> La inflacion fue del 3,6%,  es la primera desaceleracion mensual despues de dos meses por arriba del 5%</div>');
	$('#nb2').html('<div class="newsContent"> <h3>	Las franquicias suman rubros y proyectan crecer 10% en 2014	</h3><p> Ya son 665 marcas con 29.000 locales las que usan el formato. Ropa y comida concentran el mercado. </div>');
});