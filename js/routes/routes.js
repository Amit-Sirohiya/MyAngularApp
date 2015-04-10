app.config(["$routeProvider",function($routeProvider){
	$routeProvider.
	when('/manage',{
		templateUrl: 'manage.html',
		controller: 'manageController'
	}).
	when('/view/:userId',{
		templateUrl: 'view.html',
		controller: 'viewUserController'
	}).
	otherwise({
	  templateUrl: 'list.html',
	  controller: 'userController'
	});
}]);
