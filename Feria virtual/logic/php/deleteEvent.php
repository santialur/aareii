<?php

	$eventId = $_POST['eventId'];
	
	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	if (!$con)
	{
	die('Could not connect: ' . mysql_error($con));
	}
	
	$sql = "UPDATE events
		SET enabled = 0
		WHERE id = $eventId";
	$result = mysql_query($sql, $con);
	if($result){
		echo "Exito";
	}else{
		echo "Hubo un problema al eliminar el evento";
	}
    	
    	mysql_close($con);
	
?>