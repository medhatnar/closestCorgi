var closestCorgi = angular.module('closestCorgi', []);
var Promise = require("bluebird");

closestCorgi.factory("Requests", function(){

	var getPups = function () {
    return $http({
      method: 'GET',
      url: "/pet.find?key=b3d52c8692c6896d3eb1ed809a3f5271&location={ DYNAMIC LOCATION HERE }&format=json&animal=dog&breed=Corgi&breed=Welsh%20Corgi"})
    .then(function (resp) {
      return resp.data;
    });
  };
  var postPups = function (puppers) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: puppers
    });
  };

  return {
    getPups: getAll,
    postPups: addOne
  };
})