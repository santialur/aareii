<?php

	if($_POST['userType'] == "admin"){
		checkAdminUser($_POST['user'], $_POST['password']);
	}
	if($_POST['userType'] == "user"){
		checkUser($_POST['user']);
	}

	function checkAdminUser($user, $password){
		$con = mysql_connect('localhost','root','');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }

		//Primero verificamos usuario y contraseña
		//user_password es la contraseña del usuario en nuestra base de datos con la salt
		$sql_user = "SELECT * FROM ems_user WHERE username = '$user'";
		$adminUser = mysql_query($sql_user, $con);
		$row = mysql_fetch_array($adminUser);
		if(mysql_num_rows($adminUser) == 0){
			echo "Usuario no registrado";
			return;
		}
		$user_password = $row['password'];
		$user_password_salt = explode(":", $user_password);
		//$user_password_salt[1] va a tener solo la salt
		$encrypt = md5($password.$user_password_salt[1]);
		$encriptedPass = $encrypt.':'.$user_password_salt[1];

		$sql_ems_user = "SELECT * FROM ems_user WHERE username = '$user' AND password = '$encriptedPass'";
		$ems_admin_user = mysql_query($sql_ems_user, $con);

		if(mysql_num_rows($ems_admin_user) == 0){
			echo "Combinación de DNI y contraseña invalida";
			return;
		}else{
			echo "Usuario administrador";
			return;
		}

		mysql_close($con);
	}

	function checkUser($user){
		$con = mysql_connect('localhost','root','');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }

		//Primero verificamos usuario
		$sql_user = "SELECT * FROM ems_user WHERE username = '$user'";
		$user = mysql_query($sql_user, $con);
		if(mysql_num_rows($user) == 0){
			echo "Usuario no registrado";
		}
		else{
			$desc = array();
			while($row = mysql_fetch_array($user))
			  {
			  	  $desc["id"] = utf8_encode($row['id']);	
			      $desc["name"] = utf8_encode($row['name']);
				  $desc["dni"] = utf8_encode($row["username"]);
				  $desc["email"] = utf8_encode($row["email"]);
				  
			  }
			$userdni = $desc["dni"];
			$sql_user_encontramas = "SELECT * FROM user_encontramas WHERE userName = $userdni";
			$user_encontramas = mysql_query($sql_user_encontramas, $con);
			while($row = mysql_fetch_array($user_encontramas))
			  {
				  $desc["matriculated"] = $row["matriculated"];
				  $desc["title"] = utf8_encode($row["title"]);
			  }
			 echo json_encode($desc, JSON_UNESCAPED_UNICODE);
		}
		mysql_close($con);
	}
?>