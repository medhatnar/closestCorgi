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
   
    		console.log(parsed.petfinder.pets.pet)
    	})
     };
//   $scope.filterFn = function(car)
// {
//     // Do some tests

//     if(parsed.pic.description.$t && parsed.pic.name.$t && parsed.pic.media.photos.photo[3].$t)
//     {
//         return true; // this will be listed in the results
//     }

//     return false; // otherwise it won't be within the results
//   };

});

