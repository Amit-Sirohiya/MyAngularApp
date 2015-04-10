app.controller('manageController',function($scope,$http,$route,$timeout,getAddress,$rootScope){
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
	getAddress.getAdd("country").then(function(d) {
      $scope.countryList = d;
    });
	
	//Get state names
	$scope.onCountryChange = function () {		 
	   var countryIdVal = $scope.user.countryId;
		 getAddress.getAdd("state",countryIdVal).then(function(d) {
          $scope.stateList = d;
        });
	}
	
	//Get city names
	$scope.onStateChange = function () {
		 var countryIdVal = $scope.user.countryId;
		 var stateIdVal = $scope.user.stateId;
		 
		 getAddress.getAdd("city",countryIdVal,stateIdVal).then(function(d) {
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
	
   	/* $scope.countryList={};
    var res=$http.get('/myApp/getDetails.php?getParam="country"');
    res.success(function(data) {
	  $scope.countryList=data;
    });	   
	$scope.onCountryChange = function () {
        $scope.countryIdVal = $scope.user.countryId;
		  if( $scope.countryIdVal !=null){
				$http({
					method: 'GET',
					url: '/myApp/getDetails.php?getParam="state"&countryId='+ $scope.countryIdVal,
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
					url: '/myApp/getDetails.php?getParam="city"&countryId='+ $scope.countryIdVal+'&stateId='+$scope.stateIdVal,
				}).success(function (data) {                    
					$scope.cityList = data;
				});
          }
    };*/

});


