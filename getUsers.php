<?php

	$con = mysqli_connect('localhost', 'root', '1234');
	mysqli_select_db($con,"users");
	
	$user_array=array();

	$qry = 'Select id, fname, lname,phone,country from user_info';
    $qry_res = mysqli_query($con,$qry);
	
	while ($row = mysqli_fetch_assoc($qry_res)) {
		$user_array[]=$row;
    }

	$json_obj=json_encode($user_array);
	echo $json_obj;