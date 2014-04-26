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
	    $row_array["title"] = utf8_encode($row["jobTitle"]);
	    $row_array["description"] =  utf8_encode($row["jobDescription"]);
	    $row_array["datePublished"] =  utf8_encode($row["jobDatePublished"]);
	    $row_array["minimumStudies"] =  utf8_encode($row["jobMinimumStudies"]);
	    $row_array["studiesAreas"] =  utf8_encode($row["jobStudiesAreas"]);
	    $row_array["languages"] =  utf8_encode($row["jobLanguages"]);
	    $row_array["consideratios"] =  utf8_encode($row["jobConsiderations"]);
	    $row_array["dateClose"] =  utf8_encode($row["jobDateClose"]);
	    $row_array["enabled"] =  utf8_encode($row["enabled"]);
	    $row_array["contractType"] =  utf8_encode($row["jobContractType"]);
	    $row_array["shift"] =  utf8_encode($row["jobShift"]);
	    array_push($desc,$row_array);
	}

	echo json_encode($desc);

	mysql_close($con);
?>