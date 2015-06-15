<?php
    if (isset($_SERVER['HTTP_ORIGIN'])) {
			header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
			header('Access-Control-Allow-Credentials: true');
			header('Access-Control-Max-Age: 86400');    // cache for 1 day
	}
    if(isset($_GET['userid'])){
	   $userid=$_GET['userid'];
	}
   
	$con = mysqli_connect('localhost', 'root', '1234');
	mysqli_select_db($con,"users");
    
	//echo "id=".$userid;
	
	$qry = 'DELETE FROM user_info WHERE id='.$userid;

    $qry_res = mysqli_query($con,$qry);

	if ($qry_res) {
        $msg ="User deleted Successfully!!!";
        echo $msg;
    } else {
        $msg ="Error In deleting record";
        echo $msg;
    }