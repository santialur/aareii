<?php
	
	$userId = $_POST['userDni'];
	$userPassword = $_POST['password'];
	$jobOfferId = $_POST['jobOfferId'];
	
	
	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error($con));
	  }
	
	$sql_user = "SELECT * FROM ems_user WHERE username = '$userId'";
	$user = mysql_query($sql_user, $con);
	$row = mysql_fetch_array($user);
	if(mysql_num_rows($user) == 0){
		echo "Usuario no registrado";
		return;
	}
	
	$user_password = $row['password'];
	$user_password_salt = explode(":", $user_password);
	//$user_password_salt[1] va a tener solo la salt
	$encrypt = md5($userPassword.$user_password_salt[1]);
	$encriptedPass = $encrypt.':'.$user_password_salt[1];

	$sql = "SELECT * FROM ems_user WHERE username= '$userId' AND password = '$encriptedPass'";
	$result = mysql_query($sql, $con);

	if(mysql_num_rows($result) == 0){
		echo "Usuario no registrado";
	}else{
		$sql = "SELECT * FROM jobOfferApplied WHERE user_id = '$userId' AND jobOffer_id = '$jobOfferId'";
		$result = mysql_query($sql, $con);		
  		
  		if(mysql_num_rows($result) > 0){
  			echo "Ya estas registrado para este puesto";
  		}else{
  			$sql = "INSERT INTO jobOfferApplied (user_id, jobOffer_id, dateApplied)
			VALUES ('$userId', '$jobOfferId', NOW())";
			$result = mysql_query($sql, $con);
  			if($result){
  				$sql = "SELECT curriculumId FROM user_encontramas WHERE userName = '$userId'";
  				$result = mysql_query($sql, $con);
  				$row = mysql_fetch_array($user);
  				if($row['curriculumId'] != NULL){
  					$curriculumId = $row['curriculumId'];
  					$sql = "UPDATE jobOfferApplied
  						SET cv_id = curriculumId
  						WHERE user_id = $userId";
  					$result = mysql_query($sql, $con);
  				}
  				echo "Exito";
  			}else{
  				echo "Hubo un problema al registrar la postulación";
  			}
  		}
  		
	}
	mysql_close($con);

?>