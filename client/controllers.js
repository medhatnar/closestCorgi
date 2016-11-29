var closestCorgi = angular.module('closestCorgi', []);


closestCorgi.controller('corgiController', function($scope, $http){
	$scope.data = {};
	$scope.zipcode = null;
	$scope.fetch = function(){
    	$http.post("/corgis", {zipcode: $scope.zipcode})
  		.then(function(resp){
  			console.log(resp)
    		$scope.data.resp = resp.data;
    	})
     }  
});

