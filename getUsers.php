<?php

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

	$json_obj=json_encode($user_array);
	echo $json_obj;