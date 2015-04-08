<?php

	$con = mysqli_connect('localhost', 'root', '1234');
	mysqli_select_db($con,"users");
	
	$paramName='';
	$userId='';
	
	if(isset($_GET['getParam'])){
		$paramName=json_decode($_GET['getParam']);
	}
	if(isset($_GET['countryId'])){
		$countryId=json_decode($_GET['countryId']);
	}
	if(isset($_GET['stateId'])){
		$stateId=json_decode($_GET['stateId']);
	}
	if(isset($_GET['userId'])){
		$userId=$_GET['userId'];
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
	
	if($userId){
		$qry = "Select ui.id, ui.fname, ui.lname,ui.gender,ui.phone,co.countryName,st.stateName,cy.cityName from user_info ui
			  LEFT JOIN cities cy ON ui.cityId=cy.cityId 
			  LEFT JOIN states st ON cy.stateId=st.stateId
			  LEFT JOIN countries co ON st.countryId=co.countryId where ui.id=".$userId;
		$qry_res = mysqli_query($con,$qry);
		
		while ($row = mysqli_fetch_assoc($qry_res)) {
			$user_array[]=$row;
		}

		$json_obj=json_encode($user_array);
	    echo $json_obj;
    }