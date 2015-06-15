app.controller('manageController',function($scope,$http,$route,$timeout,getAddressService,$rootScope){
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
	$scope.genderValue=['male','female'];

	//Get country names
	getAddressService.getAdd("country").then(function(d) {
      $scope.countryList = d;
    });
	
	//Get state names
	$scope.onCountryChange = function () {		 
	   var countryIdVal = $scope.user.countryId;
		 getAddressService.getAdd("state",countryIdVal).then(function(d) {
          $scope.stateList = d;
        });
	}
	
	//Get city names
	$scope.onStateChange = function () {
		 var countryIdVal = $scope.user.countryId;
		 var stateIdVal = $scope.user.stateId;
		 
		 getAddressService.getAdd("city",countryIdVal,stateIdVal).then(function(d) {
          $scope.cityList = d;
        });
	}
     	
	$scope.resetForm=function(){
		$scope.user={};
		$scope.userForm.$setPristine();
		$timeout(callAtTimeout, 4000);		
	};
	
	function callAtTimeout() {
      $scope.fromServer = "";
    }	

});


