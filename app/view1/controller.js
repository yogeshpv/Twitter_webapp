'use strict';

angular.module('myApp.controller', [])
.controller('View1Ctrl', ['$scope','getData',function($scope,getData) {
 	$scope.users= getData.tweeterUsers;
 	$scope.userDetails=getData.getUser('twitterdev');
 	console.log("its here2",$scope);
}]);