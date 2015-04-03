var app=angular.module('myApp',['ngRoute']);

app.config(["$routeProvider",function($routeProvider){
	$routeProvider.
	when('/manage',{
		templateUrl: 'manage.html',
		controller: 'manageController'
	}).
	when('/search',{
		templateUrl: 'search.html',
		controller: 'searchController'
	}).
	otherwise({
	  templateUrl: 'list.html',
	  controller: 'userController'
	});
}]);



app.controller('userController',['$scope','$http',
  function($scope,$http) {
   var promise=$http.get('getUsers.php');
	
	promise.success(function(data) {
	  $scope.userData = data;
    });
		
}]);


app.controller('manageController',function($scope,$http){
	$scope.addUser=function(user,event){
		var userJson=angular.toJson(user);	
	
		var responsePromise =$http({
				method: "post",
				url: "addUSer.php",
				data:userJson,
				headers: { 'Content-Type': 'application/json' }
		});

		responsePromise.success(function(data, status, headers, config) {
			$scope.fromServer = data;	
			$scope.user="";
		
		});
		responsePromise.error(function(data, status, headers, config) {
			alert("Failed!");
		});
	};	
	
	$scope.resetForm=function(){
		$scope.user="";
	};
	
	$scope.genderValue=['male','female'];
});

app.controller('searchController',function($scope){
	
});