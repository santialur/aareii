<?php
	header('Content-Type: text/html; charset=UTF-8'); 
	$dni = $_POST['dni'];
	$password = $_POST['password'];


	$con = mysql_connect('localhost','root','');
	mysql_select_db('encontramas_test',$con);
	//mysql_query("SET NAMES 'utf8'");
	mysql_query('SET CHARACTER SET utf8');
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
			      $desc["id"] = utf8_encode($row['id']);
				  $desc["dni"] = utf8_encode($row["username"]);
				  $desc["email"] = utf8_encode($row["email"]);
				  
			  }

			$userid = $desc["id"];
			$sql_ems_comprofiler = "SELECT * FROM ems_comprofiler WHERE id = $userid";
			
			$ems_comprofiler = mysql_query($sql_ems_comprofiler, $con);

			while($row = mysql_fetch_array($ems_comprofiler))
			  {
				  $desc["name"] = $row["firstname"];
				  $desc["lastname"] = $row["lastname"];
				  $desc["sex"] = utf8_encode($row["cb_sexo"]);
				  $desc["celPhone"] = utf8_encode($row["cb_celular"]);
				  $desc["bornDate"] = utf8_encode($row["cb_nacimiento"]);
				  $desc["country"] = $row["cb_pais"];
				  $desc["state"] = $row["cb_provincia"];
				  $desc["city"] = $row["cb_servicios"];
				  $desc["university"] = $row["cb_universidad"];
				  $desc["careerArea"] = $row["cb_carrera"];
				  $desc["careerStatus"] = utf8_encode($row["cb_avance"]);
				  $desc["works"] = utf8_encode($row["cb_trabaja"]);
			  }

			$userdni = $desc["dni"];
			$sql_user_encontramas = "SELECT * FROM user_encontramas WHERE username = '$userdni'";
			$user_encontramas = mysql_query($sql_user_encontramas, $con);
			
			while($row = mysql_fetch_array($user_encontramas))
			  {
			  	$desc["civilStatus"] = utf8_encode($row["user_civilStatus"]);
			  	$desc["title"] = $row["title"];
			  	$desc["subjectsApproved"] = utf8_encode($row["subjects_approved"]);
			  	$desc["totalSubjects"] = utf8_encode($row["career_totalSubjects"]);
			  	$desc["careerAverage"] = utf8_encode($row["career_average"]);
			  	$desc["postgraduate_type"] = utf8_encode($row["postgraduate_type"]);
			  	$desc["postgraduate_status"] = utf8_encode($row["postgraduate_status"]);
			  	$desc["postgraduate_title"] = $row["postgraduate_title"];
			  	$desc["postgraduate_institution"] = $row["postgraduate_institution"];
			  }


			//Obtener el nivel de español del usuario
			$sqlespañol="SELECT * FROM language WHERE languageDescription = 'Espaniol'";
			$españolresult = mysql_query($sqlespañol, $con);
			$row = mysql_fetch_array($españolresult);
			$language_id = $row['language_id'];

			$sql_user_español = "SELECT * FROM user_language WHERE language_id = $language_id";
			$user_español = mysql_query($sql_user_español, $con);
			$row = mysql_fetch_array($user_español);
			$desc["español_level"] = utf8_encode($row['level']);


			//Obtener el nivel de ingles del usuario
			$sqlingles="SELECT * FROM language WHERE languageDescription = 'Ingles'";
			$inglesresult = mysql_query($sqlingles, $con);
			$row = mysql_fetch_array($inglesresult);
			$language_id = $row['language_id'];

			$sql_user_ingles = "SELECT * FROM user_language WHERE language_id = $language_id";
			$user_ingles = mysql_query($sql_user_ingles, $con);
			$row = mysql_fetch_array($user_ingles);
			$desc["ingles_level"] = utf8_encode($row['level']);


			//Obtener el nivel de portugues del usuario
			$sqlportugues="SELECT * FROM language WHERE languageDescription = 'Portugues'";
			$portuguesresult = mysql_query($sqlportugues, $con);
			$row = mysql_fetch_array($portuguesresult);
			$language_id = $row['language_id'];

			$sql_user_portugues = "SELECT * FROM user_language WHERE language_id = $language_id";
			$user_portugues = mysql_query($sql_user_portugues, $con);
			$row = mysql_fetch_array($user_portugues);
			$desc["portugues_level"] = utf8_encode($row['level']);


			//Obtener el nivel de aleman del usuario
			$sqlaleman="SELECT * FROM language WHERE languageDescription = 'Aleman'";
			$alemanresult = mysql_query($sqlaleman, $con);
			$row = mysql_fetch_array($alemanresult);
			$language_id = $row['language_id'];

			$sql_user_aleman = "SELECT * FROM user_language WHERE language_id = $language_id";
			$user_aleman = mysql_query($sql_user_aleman, $con);
			$row = mysql_fetch_array($user_aleman);
			$desc["aleman_level"] = utf8_encode($row['level']);


			//Obtener el nivel de italiano del usuario
			$sqlitaliano="SELECT * FROM language WHERE languageDescription = 'Italiano'";
			$italianoresult = mysql_query($sqlitaliano, $con);
			$row = mysql_fetch_array($italianoresult);
			$language_id = $row['language_id'];

			$sql_user_italiano = "SELECT * FROM user_language WHERE language_id = $language_id";
			$user_italiano = mysql_query($sql_user_italiano, $con);
			$row = mysql_fetch_array($user_italiano);
			$desc["italiano_level"] = utf8_encode($row['level']);


			//Obtener el nivel de frances del usuario
			$sqlfrances="SELECT * FROM language WHERE languageDescription = 'Frances'";
			$francesresult = mysql_query($sqlfrances, $con);
			$row = mysql_fetch_array($francesresult);
			$language_id = $row['language_id'];

			$sql_user_frances = "SELECT * FROM user_language WHERE language_id = $language_id";
			$user_frances = mysql_query($sql_user_frances, $con);
			$row = mysql_fetch_array($user_frances);
			$desc["frances_level"] = utf8_encode($row['level']);
			

			$user_id = $desc["dni"];
			$sql_laborHistory = "SELECT * FROM user_laborhistory, labor_history WHERE user_id = $user_id AND user_laborhistory.laborHistory_id = labor_history.id";
			$user_laborHistory = mysql_query($sql_laborHistory, $con);

			$i = 1;
			while($row = mysql_fetch_array($user_laborHistory))
			  {
			  	
			  	$desc["company_name_"."$i"] = $row["company_name"];
			  	$desc["company_type_"."$i"] = $row["company_type"];
			  	$desc["job_description_"."$i"] = $row["job_description"];
			  	$desc["job_area_"."$i"] = $row["job_area"];
			  	$desc["job_range_"."$i"] = $row["job_hierarchy"];
			  	$desc["job_from_"."$i"] = utf8_encode($row["job_start"]);
			  	$desc["job_to_"."$i"] = utf8_encode($row["job_end"]);
			  	$i++;
			  }

			echo json_encode($desc, JSON_UNESCAPED_UNICODE);
	}

?>