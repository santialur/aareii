<?php
	$companyId = $_GET['companyid'];

	$con = mysql_connect('localhost','root','');
	mysql_select_db('encontramas',$con);
	mysql_query("SET NAMES 'utf8'", $con);

	if (!$con)
	{
	  	die('Could not connect: ' . mysql_error($con));
	}

	$sql="SELECT * FROM events WHERE companyid = '".$companyId."'";
	$result = mysql_query($sql, $con);

	$desc = array();

	while ($row = mysql_fetch_array($result, MYSQL_ASSOC))
	{
	    $row_array["date"] = utf8_encode($row["date"]);
	    $row_array["description"] =  utf8_encode($row["description"]);
	    $row_array["title"] =  utf8_encode($row["title"]);

	    array_push($desc,$row_array);
	}

	echo json_encode($desc);

	mysql_close($con);
?>