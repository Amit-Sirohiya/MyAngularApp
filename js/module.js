var app=angular.module('myApp',['ngRoute']);

app.value("createdBy",{"name":"Amit Sirohiya"});
app.constant("GLOBAL_CON",{"APP_HEADER": "AngularJS Application"});

app.run(['$rootScope', '$http', function ($rootScope, $http) {
   var promise=$http.get('getUsers.php');
	promise.success(function(data) {
	  $rootScope.users = data.users;
	});	
}]);

