<?php

	$con = mysqli_connect('localhost', 'root', '1234');
	mysqli_select_db($con,"users");
	
	if(isset($_GET['getParam'])){
		$paramName=json_decode($_GET['getParam']);
	}
	if(isset($_GET['countryId'])){
		$countryId=json_decode($_GET['countryId']);
	}
	if(isset($_GET['stateId'])){
		$stateId=json_decode($_GET['stateId']);
	}
	
	$user_array=array();
    
	if($paramName=='country'){
		$qry = 'Select countryId,countryName from countries';
		$qry_res = mysqli_query($con,$qry);
		
		while ($row = mysqli_fetch_assoc($qry_res)) {
			$user_array[]=$row;
		}
		
		$json_obj=json_encode($user_array);
	    echo $json_obj;
    }
	
	if($paramName=='state'){
		$qry = 'Select stateId,stateName from states where countryId='.$countryId;
		$qry_res = mysqli_query($con,$qry);
		
		while ($row = mysqli_fetch_assoc($qry_res)) {
			$user_array[]=$row;
		}
		
		$json_obj=json_encode($user_array);
	    echo $json_obj;
    }
	
	if($paramName=='city'){
		$qry = 'Select cityId,cityName from cities where countryId='.$countryId.' and stateId='.$stateId;
		$qry_res = mysqli_query($con,$qry);
		
		while ($row = mysqli_fetch_assoc($qry_res)) {
			$user_array[]=$row;
		}

		$json_obj=json_encode($user_array);
	    echo $json_obj;
    }