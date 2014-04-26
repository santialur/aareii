<?php

	$companyId = $_POST['companyid'];
	$eventTitle = $_POST['eventTitle'];
	$eventDate = $_POST['eventDate'];
	$eventDescription = $_POST['eventDescription'];


	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error($con));
	  }
	$sql = "INSERT INTO event (companyid, eventTitle, eventDate, eventDescription, eventDateCreation, eventDateUpdated, enabled)
		    			VALUES ($companyId, '$eventTitle' ,'$eventDate', '$eventDescription', NOW(), NOW(), 1) ";
	$result = mysql_query($sql, $con);
	echo "Exito";
	mysql_close($con);
?>