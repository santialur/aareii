<?php

	$place= $_POST['place'];

	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error($con));
	  }
	$sql = "UPDATE visitors
		SET visitQuantity = visitQuantity + 1
		WHERE place = '$place'";
	
	$result = mysql_query($sql, $con);
    	echo "Exito";
    	mysql_close($con);
?>