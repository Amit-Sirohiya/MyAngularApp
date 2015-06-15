app.controller('viewUserController',['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
	
   var promise=$http.get('getDetails.php?userId='+$routeParams.userId);
	
	promise.success(function(data) {
	  $scope.user=data;
    });	    

}]);
