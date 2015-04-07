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


app.controller('userController',['$scope','$http',function($scope,$http) {
	
	 $scope.deleteUser=function(id,fname,lname){
	  var confirmed=window.confirm("Are you sure you wanna delete user '"+fname+" "+lname+"' ?");
	   
	   if(confirmed){
		   var responsePromise =$http.delete("deleteUser.php?userid="+id);

			responsePromise.success(function(data, status, headers, config) {
				var index = -1;		
				var comArr = eval( $scope.userData );
				for( var i = 0; i < comArr.length; i++ ) {
					if( comArr[i].id === id ) {
						index = i;
						break;
					}
				}
				if( index === -1 ) {
					alert( "Something gone wrong" );
				}
				$scope.userData.splice( index, 1 );	
					alert(data);					
			});
			responsePromise.error(function(data, status, headers, config) {
				alert("Failed!");
			});
			   
	   }
     };
				
	
   var promise=$http.get('getUsers.php');
	
	promise.success(function(data) {
	  $scope.userData = data;
    });	    	
}]);


app.controller('manageController',function($scope,$http,$route,$timeout){
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
			$scope.resetForm();			
		});
		responsePromise.error(function(data, status, headers, config) {
			alert("Failed!");
		});
	};	
	
	$scope.countryList={};
    var res=$http.get('/myApp/services/getDetails.php?getParam="country"');
    res.success(function(data) {
	  $scope.countryList=data;
    });	   
	
	$scope.onCountryChange = function () {
        $scope.countryIdVal = $scope.user.countryId;
		  if( $scope.countryIdVal !=null){
				$http({
					method: 'GET',
					url: '/myApp/services/getDetails.php?getParam="state"&countryId='+ $scope.countryIdVal,
				}).success(function (data) {                    
					$scope.stateList = data;
				});
          }
    };
	
	$scope.onStateChange = function () {
        $scope.countryIdVal = $scope.user.countryId;
		 $scope.stateIdVal = $scope.user.stateId;
		  if($scope.stateIdVal !=null){
				$http({
					method: 'GET',
					url: '/myApp/services/getDetails.php?getParam="city"&countryId='+ $scope.countryIdVal+'&stateId='+$scope.stateIdVal,
				}).success(function (data) {                    
					$scope.cityList = data;
				});
          }
    };
	
	$scope.resetForm=function(){
		$scope.user={};
		 $scope.userForm.$setPristine();
		 $timeout(callAtTimeout, 4000);		
	};
	function callAtTimeout() {
      $scope.fromServer = "";
    }	
	$scope.genderValue=['male','female'];
});

