<?php
	$companyId = $_GET['companyid'];

	$con = mysql_connect('localhost','root','');
	mysql_select_db('encontramas',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	
	if (!$con)
	{
	  	die('Could not connect: ' . mysql_error($con));
	}

	$sql="SELECT * FROM job_offer WHERE companyid = '".$companyId."'";
	$result = mysql_query($sql, $con);

	$desc = array();

	while ($row = mysql_fetch_array($result, MYSQL_ASSOC))
	{
	    $row_array["title"] = utf8_encode($row["jobtitle"]);
	    $row_array["description"] =  utf8_encode($row["jobdescription"]);
	    $row_array["datepublished"] =  utf8_encode($row["jobdatepublished"]);
	    array_push($desc,$row_array);
	}

	echo json_encode($desc);

	mysql_close($con);
?>