app.config(["$routeProvider","$locationProvider",function($routeProvider, $locationProvider){
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
	
	// use the HTML5 History API
    $locationProvider.html5Mode(true).hashPrefix('!');
}]);
