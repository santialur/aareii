<?php

	$offerId = $_POST['offerId'];
	
	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	if (!$con)
	{
	die('Could not connect: ' . mysql_error($con));
	}
	
	$sql = "UPDATE job_offer
		SET enabled = 0
		WHERE id = $offerId";
	$result = mysql_query($sql, $con);
	if($result){
		echo "Exito";
	}else{
		echo "Hubo un problema al eliminar la oferta laboral";
	}
    	
    	mysql_close($con);
	
?>