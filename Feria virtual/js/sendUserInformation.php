<?php
	
	if($_POST['user'] == "newUser"){
		insertUser($_POST['dni'], $_POST['name'], $_POST['surname'], $_POST['email'], 
					$_POST['residenceAddress'], $_POST['password'], $_POST['career'], 
					INTVAL($_POST['subjects_approved']), $_POST['celPhone'], $_POST['countryOfResidence'], 
					$_POST['stateOfResidence'], $_POST['cityOfResidence'], $_POST['institution'], 
					$_POST['dayOfBorn'], $_POST['monthOfBorn'], $_POST['yearOfBorn'],$_POST['work'], $_POST['civil_status']);
	}else{
		updateUser($_POST['dni'], $_POST['name'], $_POST['surname'], $_POST['email'], 
					$_POST['residenceAddress'], $_POST['password'], $_POST['career'], 
					INTVAL($_POST['subjects_approved']), $_POST['celPhone'], $_POST['countryOfResidence'], 
					$_POST['stateOfResidence'], $_POST['cityOfResidence'], $_POST['institution'], 
					$_POST['dayOfBorn'], $_POST['monthOfBorn'], $_POST['yearOfBorn'],$_POST['work'], $_POST['civil_status']);
	}
	


    function insertUser($dni, $name, $surname, $email, $residenceAddress, $password, $career, $subjects_approved, $celPhone, $countryOfResidence, $stateOfResidence, $cityOfResidence, $institution, $dayOfBorn, $monthOfBorn, $yearOfBorn, $work, $civil_status ){
    	//echo $dni. " - " .$name." - ". $surname." - ".$email." - ".$residenceAddress." - ".$password." - ".$career." - ".$subjects_approved." - ".$celPhone." - ".$countryOfResidence." - ".$stateOfResidence." - ".$cityOfResidence." - ".$institution." - ".$dayOfBorn." - ".$monthOfBorn." - ".$yearOfBorn." - ".$work;
		$con = mysql_connect('localhost','root','');
		mysql_select_db('encontramas',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }
		
		$sqldni="SELECT * FROM jos_comprofiler WHERE dni = '".$dni."'";
		$userdni = mysql_query($sqldni, $con);

		$sqlemail = "SELECT * FROM jos_comprofiler WHERE mail = '".$email."'";
		$useremail = mysql_query($sqlemail, $con);

		if(mysql_num_rows($userdni) > 0){
			echo "Ya existe un usuario registrado con el numero de documento";
		}else if(mysql_num_rows($useremail) > 0){
			echo "Ya existe un usuario registrado con la direccion de email";
		}else{
			if($work === 'Si'){
			$work = true;
			}else{
				$work = false;
			}

			$birthday = "'".$yearOfBorn."-".$monthOfBorn."-".$dayOfBorn."'";
			
			$sql= " INSERT INTO jos_comprofiler (dni, name, surname, mail, pass, birthday, country, state, city, address, phone, university, career, subjects_approved, work, civil_status)
		    			VALUES ('$dni', '$name', '$surname', '$email', '$password', $birthday, '$countryOfResidence', '$stateOfResidence', '$cityOfResidence', '$residenceAddress', '$celPhone', '$institution', '$career', $subjects_approved, $work, '$civil_status') ";	

			$result = mysql_query($sql, $con);
			echo $result;
		}

		
		//echo $result;
		mysql_close($con);
    }
    
    function updateUser($dni, $name, $surname, $email, $residenceAddress, $password, $career, $subjects_approved, $celPhone, $countryOfResidence, $stateOfResidence, $cityOfResidence, $institution, $dayOfBorn, $monthOfBorn, $yearOfBorn, $work, $civil_status ){
    	//echo $dni. " - " .$name." - ". $surname." - ".$email." - ".$residenceAddress." - ".$password." - ".$career." - ".$subjects_approved." - ".$celPhone." - ".$countryOfResidence." - ".$stateOfResidence." - ".$cityOfResidence." - ".$institution." - ".$dayOfBorn." - ".$monthOfBorn." - ".$yearOfBorn." - ".$work;
		$con = mysql_connect('localhost','root','');
		mysql_select_db('encontramas',$con);
		mysql_query ("SET NAMES 'utf8'");
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }
		
		$sql="SELECT * FROM jos_comprofiler WHERE dni = '".$dni."'";
		$result = mysql_query($sql, $con);
		$row = mysql_fetch_array($result);

		if($row["pass"] != $password ){
			echo "La contraseña ingresada no es correcta";
		}else{
			if($work == 'Si'){
			$work = 1;
			}else{
				$work = 0;
			}

			$birthday = "'".$yearOfBorn."-".$monthOfBorn."-".$dayOfBorn."'";
			

			$sql= " UPDATE jos_comprofiler
		    		SET dni = '$dni', name ='$name', surname =  '$surname', mail = '$email', pass = '$password', birthday = $birthday, country = '$countryOfResidence', state = '$stateOfResidence', city = '$cityOfResidence', address = '$residenceAddress', phone = '$celPhone', university = '$institution', career = '$career', subjects_approved =  $subjects_approved, work = $work, civil_status = '$civil_status'   
		    		WHERE dni = '$dni'";	

			$result = mysql_query($sql, $con);
			echo "Usuario modificado exitosamente";

		}
		//echo $result;
		mysql_close($con);
    }
?>