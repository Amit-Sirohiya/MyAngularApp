<?php
    $data=array();
	$data = json_decode(file_get_contents("php://input"));

	$con = mysqli_connect('localhost', 'root', '1234');
	mysqli_select_db($con,"users");
	
	$obj = new StdClass();	 	
	$obj->fname =mysqli_escape_string($con,$data->firstName);
	$obj->lname =mysqli_escape_string($con,$data->lastName);
	$obj->phone =mysqli_escape_string($con,$data->phone);
	$obj->gender =mysqli_escape_string($con,$data->gender);
	$obj->cityId =mysqli_escape_string($con,$data->cityId);
	

	$qry = 'INSERT INTO user_info(fname,lname,phone,gender,cityId) values("' . $obj->fname . '","' . $obj->lname . '","' . $obj->phone . '","'.$obj->gender. '","'.$obj->cityId.'")';
	
    $qry_res = mysqli_query($con,$qry);

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