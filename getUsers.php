<?php
	if (isset($_SERVER['HTTP_ORIGIN'])) {
			header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
			header('Access-Control-Allow-Credentials: true');
			header('Access-Control-Max-Age: 86400');    // cache for 1 day
	}
	$con = mysqli_connect('localhost', 'root', '1234');
	mysqli_select_db($con,"users");

	$user_array=array();

	$qry = "Select ui.id, ui.fname, ui.lname,ui.gender,ui.phone,co.countryName,st.stateName,cy.cityName from user_info ui
			  LEFT JOIN cities cy ON ui.cityId=cy.cityId 
			  LEFT JOIN states st ON cy.stateId=st.stateId
			  LEFT JOIN countries co ON st.countryId=co.countryId";
    $qry_res = mysqli_query($con,$qry);
	
	while ($row = mysqli_fetch_assoc($qry_res)) {
		$user_array[]=$row;
    }
     $map = array( 'users'    => $user_array);
	$json_obj=json_encode($map);
	echo $json_obj;