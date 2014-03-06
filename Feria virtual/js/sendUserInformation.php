<?php
	
	if($_POST['user'] == "newUser"){
		insertUser($_POST['dni'], $_POST['name'], $_POST['surname'], $_POST['email'], 
					$_POST['residenceAddress'], $_POST['password'], $_POST['career'], 
					INTVAL($_POST['subjects_approved']), $_POST['celPhone'], $_POST['countryOfResidence'], 
					$_POST['stateOfResidence'], $_POST['cityOfResidence'], $_POST['institution'], 
					$_POST['dayOfBorn'], $_POST['monthOfBorn'], $_POST['yearOfBorn'],$_POST['work']);
	}else{
		updateUser($_POST['dni'], $_POST['name'], $_POST['surname'], $_POST['email'], 
					$_POST['residenceAddress'], $_POST['password'], $_POST['career'], 
					INTVAL($_POST['subjects_approved']), $_POST['celPhone'], $_POST['countryOfResidence'], 
					$_POST['stateOfResidence'], $_POST['cityOfResidence'], $_POST['institution'], 
					$_POST['dayOfBorn'], $_POST['monthOfBorn'], $_POST['yearOfBorn'],$_POST['work']);
	}
	


    function insertUser($dni, $name, $surname, $email, $residenceAddress, $password, $career, $subjects_approved, $celPhone, $countryOfResidence, $stateOfResidence, $cityOfResidence, $institution, $dayOfBorn, $monthOfBorn, $yearOfBorn, $work ){
    	//echo $dni. " - " .$name." - ". $surname." - ".$email." - ".$residenceAddress." - ".$password." - ".$career." - ".$subjects_approved." - ".$celPhone." - ".$countryOfResidence." - ".$stateOfResidence." - ".$cityOfResidence." - ".$institution." - ".$dayOfBorn." - ".$monthOfBorn." - ".$yearOfBorn." - ".$work;
		$con = mysql_connect('localhost','root','');
		mysql_select_db('feriavirtual',$con);
		mysql_query ("SET NAMES 'utf8'");
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }
		
		$sql="SELECT * FROM jos_comprofiler WHERE dni = '".$dni."'";
		$user = mysql_query($sql, $con);

		if(mysql_num_rows($user) > 0){
			echo "Ya existe un usuario registrado con el numero de documento";
		}else{
			if($work === 'Si'){
			$work = true;
			}else{
				$work = false;
			}

			$birthday = "'".$yearOfBorn."-".$monthOfBorn."-".$dayOfBorn."'";
			
			$sql= " INSERT INTO jos_comprofiler (dni, name, surname, mail, pass, birthday, country, state, city, address, phone, university, career, subjects_approved, work)
		    			VALUES ('$dni', '$name', '$surname', '$email', '$password', $birthday, '$countryOfResidence', '$stateOfResidence', '$cityOfResidence', '$residenceAddress', '$celPhone', '$institution', '$career', $subjects_approved, $work) ";	

			$result = mysql_query($sql, $con);
			echo "Usuario creado exitosamente";
		}

		
		//echo $result;
		mysql_close($con);
    }
    
    function updateUser($dni, $name, $surname, $email, $residenceAddress, $password, $career, $subjects_approved, $celPhone, $countryOfResidence, $stateOfResidence, $cityOfResidence, $institution, $dayOfBorn, $monthOfBorn, $yearOfBorn, $work ){
    	//echo $dni. " - " .$name." - ". $surname." - ".$email." - ".$residenceAddress." - ".$password." - ".$career." - ".$subjects_approved." - ".$celPhone." - ".$countryOfResidence." - ".$stateOfResidence." - ".$cityOfResidence." - ".$institution." - ".$dayOfBorn." - ".$monthOfBorn." - ".$yearOfBorn." - ".$work;
		$con = mysql_connect('localhost','root','');
		mysql_select_db('feriavirtual',$con);
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
		    		SET dni = '$dni', name ='$name', surname =  '$surname', mail = '$email', pass = '$password', birthday = $birthday, country = '$countryOfResidence', state = '$stateOfResidence', city = '$cityOfResidence', address = '$residenceAddress', phone = '$celPhone', university = '$institution', career = '$career', subjects_approved =  $subjects_approved, work = $work  
		    		WHERE dni = '$dni'";	

			$result = mysql_query($sql, $con);
			echo "Usuario modificado exitosamente";

			
			//echo $result;
			mysql_close($con);
		}

    }
?>