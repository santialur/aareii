<?php
	
	if($_POST['user'] == "newUser"){
		insertUser($_POST['dni'], $_POST['name'], $_POST['lastname'],$_POST['sex'], $_POST['email'], 
					$_POST['password'], $_POST['celPhone'], $_POST['dayOfBorn'], $_POST['monthOfBorn'], $_POST['yearOfBorn'],
					$_POST['countryOfResidence'], $_POST['stateOfResidence'], $_POST['cityOfResidence'], $_POST['civil_status']);
	}else{
		updateUser($_POST['dni'], $_POST['name'], $_POST['surname'], $_POST['email'], 
					$_POST['residenceAddress'], $_POST['password'], $_POST['career'], 
					INTVAL($_POST['subjects_approved']), $_POST['celPhone'], $_POST['countryOfResidence'], 
					$_POST['stateOfResidence'], $_POST['cityOfResidence'], $_POST['institution'], 
					$_POST['dayOfBorn'], $_POST['monthOfBorn'], $_POST['yearOfBorn'],$_POST['work'], $_POST['civil_status']);
	}

	function insertUser($dni, $name, $lastname, $sex, $email, $password, $celPhone, $dayOfBorn, $monthOfBorn, $yearOfBorn, $countryOfResidence, $stateOfResidence,
		$cityOfResidence, $civil_status){

		$con = mysql_connect('localhost','root','');
		mysql_select_db('encontramas',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }

		$salt	= md5(mt_rand());
		$encrypt = md5($password.$salt);
		$encriptedPass = $encrypt.':'.$salt;

		$sqldni="SELECT * FROM ems_user WHERE username = '".$dni."'";
		$userdni = mysql_query($sqldni, $con);

		$sqlemail = "SELECT * FROM ems_user WHERE email = '".$email."'";
		$useremail = mysql_query($sqlemail, $con);

		if(mysql_num_rows($userdni) > 0){
			echo "Ya existe un usuario registrado con el numero de documento";
		}else if(mysql_num_rows($useremail) > 0){
			echo "Ya existe un usuario registrado con la direccion de email";
		}else{

			$birthday = "'".$yearOfBorn."-".$monthOfBorn."-".$dayOfBorn."'";
			$completeName = "'".$name." ".$lastname."'";


			//Insert values into ems_user
			$sql= " INSERT INTO ems_user (name, username, email, password)
		    			VALUES ($completeName, '$dni' ,'$email', '$encriptedPass') ";	
			$result = mysql_query($sql, $con);
			//echo $result;


			//Insert values into ems_comprofiler
			$sql = "SELECT id FROM ems_user WHERE username = '".$dni."'";
			$ems_user = mysql_query($sql, $con);
			$row = mysql_fetch_array($ems_user);
			$userid = $row['id'];

			$sql = " INSERT INTO ems_comprofiler (id, username, firstname, lastname, cb_nacimiento, cb_pais, cb_provincia, cb_servicios, cb_celular)
		    			VALUES ($userid, '$dni','$name', '$lastname', $birthday, '$countryOfResidence', '$stateOfResidence', '$cityOfResidence', '$celPhone') ";
			$result = mysql_query($sql, $con);
			//echo $result;


			//Insert values info user_encontramas
			$sql="SELECT username FROM ems_comprofiler WHERE username = '".$dni."'";
			$userresult = mysql_query($sql, $con);
			$row = mysql_fetch_array($userresult);
			$username = $row['username'];

			$sql = " INSERT INTO user_encontramas (userName, user_civilStatus)
		    			VALUES ('$username', '$civil_status') ";
			$result = mysql_query($sql, $con);
			echo $result;

		}

		mysql_close($con);
    }

?>