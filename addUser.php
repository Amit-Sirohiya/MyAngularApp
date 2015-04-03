<?php
    $data=array();
	$data = json_decode(file_get_contents("php://input"));

	$con = mysql_connect('localhost', 'root', '1234');
	
	$obj = new StdClass();	 	
	$obj->fname =mysql_real_escape_string($data->firstName);
	$obj->lname =mysql_real_escape_string($data->lastName);
	$obj->phone =mysql_real_escape_string($data->phone);
	$obj->country =mysql_real_escape_string($data->country);

	
	mysql_select_db('users', $con);
	
	$qry = 'INSERT INTO user_info(fname,lname,phone,country) values("' . $obj->fname . '","' . $obj->lname . '","' . $obj->phone . '","'.$obj->country.'")';
	
    $qry_res = mysql_query($qry);

	if ($qry_res) {
        $msg ="User Created Successfully!!!";
        echo $msg;
    } else {
        $msg ="Error In inserting record";
        echo $msg;
    }
	
	/* $jsn = json_encode($obj);
	echo $jsn;
 */