<?php

		header("Access-Control-Allow-Origin:*");
		/*header('Access-Control-Allow-Credentials: true');
		header('Access-Control-Max-Age: 86400');    // cache for 1 day
		header('Access-Control-Allow-Methods: GET, POST');*/

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
	
	$phnColumn="";
	$addqry="";

	if($obj->phone){
	  $phnColumn=",phone";
	  $addqry='","'.$obj->phone;
	}
	
	$qry = 'INSERT INTO user_info(fname,lname,gender,cityId'.$phnColumn.') values("' . $obj->fname . '","' . $obj->lname . '","'.$obj->gender.'","'.$obj->cityId . $addqry;
	$qry=$qry.'")';
	
    $qry_res = mysqli_query($con,$qry);

	if ($qry_res) {
        $msg ="User Created Successfully!!!";
        echo $msg;
    } /* else {
        $msg ="Error In inserting record";
        echo $msg;
    }
	 */
	/* $jsn = json_encode($obj);
	echo $jsn;
 */