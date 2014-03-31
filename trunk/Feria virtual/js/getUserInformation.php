<?php
	header('Content-Type: text/html; charset=UTF-8'); 
	$dni = $_POST['dni'];
	$password = $_POST['password'];


	$con = mysql_connect('localhost','root','');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'");

	if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }

    //Primero verificamos usuario y contraseña
	//user_password es la contraseña del usuario en nuestra base de datos con la salt
	$sql_user = "SELECT * FROM ems_user WHERE username = '$dni'";
	$user = mysql_query($sql_user, $con);
	$row = mysql_fetch_array($user);
	$user_password = $row['password'];
	$user_password_salt = explode(":", $user_password);
	//$user_password_salt[1] va a tener solo la salt
	$encrypt = md5($password.$user_password_salt[1]);
	$encriptedPass = $encrypt.':'.$user_password_salt[1];

	$sql_ems_user = "SELECT * FROM ems_user WHERE username = '$dni' AND password = '$encriptedPass'";
	$ems_user = mysql_query($sql_ems_user, $con);

	if(mysql_num_rows($ems_user) == 0){
		echo "Combinación de DNI y contraseña invalida";
	}else{
			$desc = array();
			while($row = mysql_fetch_array($ems_user))
			  {
			      $desc["id"] = $row['id'];
				  $desc["dni"] = utf8_encode($row["username"]);
				  $desc["email"] = utf8_encode($row["email"]);
				  
			  }

			$userid = $desc["id"];
			$sql_ems_comprofiler = "SELECT * FROM ems_comprofiler WHERE id = $userid";
			
			$ems_comprofiler = mysql_query($sql_ems_comprofiler, $con);

			while($row = mysql_fetch_array($ems_comprofiler))
			  {
				  $desc["name"] = utf8_encode($row["firstname"]);
				  $desc["lastname"] = utf8_encode($row["lastname"]);
				  $desc["sex"] = utf8_encode($row["cb_sexo"]);
				  $desc["celPhone"] = utf8_encode($row["cb_celular"]);
				  $desc["bornDate"] = utf8_encode($row["cb_nacimiento"]);
				  $desc["country"] = utf8_encode($row["cb_pais"]);
				  $desc["state"] = utf8_encode($row["cb_provincia"]);
				  $desc["city"] = utf8_encode($row["cb_servicios"]);
				  $desc["university"] = utf8_encode($row["cb_universidad"]);
				  $desc["careerArea"] = utf8_encode($row["cb_carrera"]);
				  $desc["careerStatus"] = utf8_encode($row["cb_avance"]);
				  $desc["works"] = utf8_encode($row["cb_trabaja"]);
			  }

			$row = mysql_fetch_array($ems_user);
			$username = $row['username'];
			$sql_user_encontramas = "SELECT * FROM user_encontramas WHERE username = '$username'";
			$user_encontramas = mysql_query($sql_user_encontramas, $con);
			
			while($row = mysql_fetch_array($user_encontramas))
			  {
			  	$desc["civilStatus"] = utf8_encode($row["user_civilStatus"]);
			  	$desc["title"] = utf8_encode($row["title"]);
			  	$desc["subjectsApproved"] = utf8_encode($row["subjects_approved"]);
			  	$desc["totalSubjects"] = utf8_encode($row["career_totalSubjects"]);
			  	$desc["careerAverage"] = utf8_encode($row["career_average"]);
			  	$desc["postgraduate_type"] = utf8_encode($row["postgraduate_type"]);
			  	$desc["postgraduate_status"] = utf8_encode($row["postgraduate_status"]);
			  	$desc["postgraduate_title"] = utf8_encode($row["postgraduate_title"]);
			  	$desc["postgraduate_institution"] = utf8_encode($row["postgraduate_institution"]);
			  }
			  echo json_encode($desc);
	}

?>