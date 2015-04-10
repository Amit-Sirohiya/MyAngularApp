
app.controller('userController',['$scope','$http',function($scope,$http) {
	
	 $scope.deleteUser=function(id,fname,lname){
	  var confirmed=window.confirm("Are you sure you wanna delete user '"+fname+" "+lname+"' ?");
	   
	   if(confirmed){
		   var responsePromise =$http.delete("deleteUser.php?userid="+id);

			responsePromise.success(function(data, status, headers, config) {
				var index = -1;		
				var comArr = eval( $scope.users );
				for( var i = 0; i < comArr.length; i++ ) {
					if( comArr[i].id === id ) {
						index = i;
						break;
					}
				}
				if( index === -1 ) {
					alert( "Something gone wrong" );
				}
				$scope.users.splice( index, 1 );	
					alert(data);					
			});
			responsePromise.error(function(data, status, headers, config) {
				alert("Failed!");
			});
			   
	   }
     };
				
	
   var promise=$http.get('getUsers.php');
	
	promise.success(function(data) {
	  $scope.users = data;
    });	    	
}]);

