<?php
	$dni = $_POST['dni'];
	$password = $_POST['password'];


	$con = mysql_connect('localhost','root','');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);

	if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }

	$salt	= md5(mt_rand());
	$encrypt = md5($password.$salt);
	$encriptedPass = $encrypt.':'.$salt;

	$sqluser = "SELECT * FROM ems_user WHERE username = '$dni' AND password = '$password'";
	$user = mysql_query($sqluser, $con);

	if(mysql_num_rows($userdni) == 0){
		echo "Combinación de DNI y contraseña invalida";
	}else{
		
	}


?>