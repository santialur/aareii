<?php
	header('Content-Type: text/html; charset=UTF-8'); 
	
	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	//mysql_query("SET NAMES 'utf8'");
	mysql_query('SET CHARACTER SET utf8');
	if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }


?>