var closestCorgi = angular.module('closestCorgi', []);


closestCorgi.controller('corgiController', function($scope, $http){
	$scope.data = {};
	$scope.zipcode = null;
	$scope.fetch = function(){
    	$http.post("/corgis", {zipcode: $scope.zipcode})
  		.then(function(resp){
  			var parsed = JSON.parse(resp.data)
  			// console.log(parsed)
    		$scope.data.pics = parsed.petfinder.pets.pet;
   
    		console.log($scope.data.pics)
    	})
     }  
});

