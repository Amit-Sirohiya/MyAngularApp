app.service( 'getAddressService', ['$http', function($http ) {

     this.getAdd=function (name,countryId,stateId) {
		  var url='/myApp/getDetails.php?getParam="'+name+'"';
		  if(name=="state"){
		   url=url+'&countryId="'+countryId+'"';
		  } 
		  if(name=="city"){
		   url=url+'&countryId="'+countryId+'"'+'&stateId="'+stateId+'"';
		  }  
          var promise=$http.get(url).then(function (response) {
	        return response.data;
          });
      // Return the promise to the controller
      return promise;
    }
 }]);
