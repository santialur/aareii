<?php

	$companyId = $_POST['companyid'];
	$eventTitle = $_POST['eventTitle'];
	$eventDateTimeStart = $_POST['eventDateTimeStart'];
	$eventDateTimeEnd = $_POST['eventDateTimeEnd'];
	$eventDescription = $_POST['eventDescription'];

	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error($con));
	  }
	$sql = "INSERT INTO events (companyid, eventTitle, eventDateTimeStart, eventDescription, eventDateCreated, eventDateUpdated, enabled, eventDateTimeEnd)
		    			VALUES ($companyId, '$eventTitle' ,'$eventDateTimeStart', '$eventDescription', NOW(), NOW(), 1,'$eventDateTimeEnd') ";
	$result = mysql_query($sql, $con);
	echo "Exito";
	
	
	mysql_close($con);
?>