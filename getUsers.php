<?php

	$con = mysql_connect('localhost', 'root', '1234');
	mysql_select_db('users', $con);
	
	$user_array=array();

	$qry = 'Select id, fname, lname,phone,country from user_info';
    $qry_res = mysql_query($qry);
	
	while ($row = mysql_fetch_assoc($qry_res)) {
		$user_array[]=$row;
    }

	$json_obj=json_encode($user_array);
	echo $json_obj;