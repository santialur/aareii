<?php
	
	if($_POST['user'] == "newUser"){
	//This function will add all the academic information about the user created in savePersonalInformation.php
		addAcademicInformation($_POST['dni'], $_POST['university'], $_POST['career_area'], $_POST['career_title'] ,$_POST['career_status'], 
							$_POST['approved_subjects'], $_POST['career_average'], $_POST['career_totalSubjects'], 
							$_POST['postgraduate_type'], $_POST['postgraduate_status'], $_POST['postgraduate_title'], $_POST['postgraduate_institution'], 
							$_POST['englishLevel'], $_POST['spanishLevel'], $_POST['italianLevel'], $_POST['germanLevel'], $_POST['portugueseLevel'], $_POST['frenchLevel']);
	}else{
		updateAcademicInformation($_POST['dni'], $_POST['university'], $_POST['career_area'], $_POST['career_title'] ,$_POST['career_status'], 
							$_POST['approved_subjects'], $_POST['career_average'], $_POST['career_totalSubjects'], 
							$_POST['postgraduate_type'], $_POST['postgraduate_status'], $_POST['postgraduate_title'], $_POST['postgraduate_institution'], 
							$_POST['englishLevel'], $_POST['spanishLevel'], $_POST['italianLevel'], $_POST['germanLevel'], $_POST['portugueseLevel'], $_POST['frenchLevel']);
	}

	function addAcademicInformation($dni, $university, $career_area, $career_title ,$career_status, $approved_subjects, $career_average, $career_totalSubjects, 
		$postgraduate_type, $postgraduate_state, $postgraduate_title, $postgraduate_institution, $englishLevel, $spanishLevel, $italianLevel, $germanLevel, 
		$portugueseLevel, $frenchLevel){

		$con = mysql_connect('localhost','root','C4ch0bs4s3124');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }

		//Add academical information values into ems_comprofiler
		$sql= " UPDATE ems_comprofiler 
				SET cb_universidad = '$university', cb_carrera = '$career_area', cb_avance = '$career_status'
		    	WHERE username = '$dni' ";
		$result = mysql_query($sql, $con);
		


		//Add academical information values into user_encontramas
		$sql = " UPDATE user_encontramas 
				 SET postgraduate_type = '$postgraduate_type', postgraduate_status = '$postgraduate_state', postgraduate_title = '$postgraduate_title', postgraduate_institution = '$postgraduate_institution', title = '$career_title', subjects_approved = '$approved_subjects', 
				 	 career_average = '$career_average', career_totalSubjects = '$career_totalSubjects'
		    	 WHERE username = '$dni' ";
		$result = mysql_query($sql, $con);

		//Add language information
		//Guardar nivel de español
		$sqlespañol="SELECT * FROM language WHERE languageDescription = 'Espaniol'";
		$españolresult = mysql_query($sqlespañol, $con);
		$row = mysql_fetch_array($españolresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$dni', '$languageid', '$spanishLevel') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////


		//Guardar nivel de ingles
		$sqlingles="SELECT * FROM language WHERE languageDescription = 'Ingles'";
		$inglesresult = mysql_query($sqlingles, $con);
		$row = mysql_fetch_array($inglesresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$dni', '$languageid', '$englishLevel') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////


		//Guardar nivel de portugues
		$sqlportugues="SELECT * FROM language WHERE languageDescription = 'Portugues'";
		$portuguesresult = mysql_query($sqlportugues, $con);
		$row = mysql_fetch_array($portuguesresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$dni', '$languageid', '$portugueseLevel') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////


		//Guardar nivel de aleman
		$sqlaleman="SELECT * FROM language WHERE languageDescription = 'Aleman'";
		$alemanresult = mysql_query($sqlaleman, $con);
		$row = mysql_fetch_array($alemanresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$dni', '$languageid', '$germanLevel') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////


		//Guardar nivel de italiano
		$sqlitaliano="SELECT * FROM language WHERE languageDescription = 'Italiano'";
		$italianoresult = mysql_query($sqlitaliano, $con);
		$row = mysql_fetch_array($italianoresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$dni', '$languageid', '$italianLevel') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////

		//Guardar nivel de frances
		$sqlfrances="SELECT * FROM language WHERE languageDescription = 'Frances'";
		$francesresult = mysql_query($sqlfrances, $con);
		$row = mysql_fetch_array($francesresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$dni', '$languageid', '$frenchLevel') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////

		mysql_close($con);
	}

	function updateAcademicInformation($dni, $university, $career_area, $career_title ,$career_status, $approved_subjects, $career_average, $career_totalSubjects, 
		$postgraduate_type, $postgraduate_state, $postgraduate_title, $postgraduate_institution, $englishLevel, $spanishLevel, $italianLevel, $germanLevel, 
		$portugueseLevel, $frenchLevel){

		$con = mysql_connect('localhost','root','C4ch0bs4s3124');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }

		//Add academical information values into ems_comprofiler
		$sql= " UPDATE ems_comprofiler 
				SET cb_universidad = '$university', cb_carrera = '$career_area', cb_avance = '$career_status'
		    	WHERE username = '$dni' ";
		$result = mysql_query($sql, $con);
		


		//Add academical information values into user_encontramas
		$sql = " UPDATE user_encontramas 
				 SET postgraduate_type = '$postgraduate_type', postgraduate_status = '$postgraduate_state', postgraduate_title = '$postgraduate_title', postgraduate_institution = '$postgraduate_institution', title = '$career_title', subjects_approved = '$approved_subjects', 
				 	 career_average = '$career_average', career_totalSubjects = '$career_totalSubjects'
		    	 WHERE username = '$dni' ";
		$result = mysql_query($sql, $con);



		//Update language information
		//Guardar nivel de español
		$sqlespañol="SELECT * FROM language WHERE languageDescription = 'Espaniol'";
		$españolresult = mysql_query($sqlespañol, $con);
		$row = mysql_fetch_array($españolresult);
		$languageid = $row['language_id'];
		$sql = "UPDATE user_language SET level='$spanishLevel' WHERE user_id=$dni AND language_id=$languageid";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////


		//Guardar nivel de ingles
		$sqlingles="SELECT * FROM language WHERE languageDescription = 'Ingles'";
		$inglesresult = mysql_query($sqlingles, $con);
		$row = mysql_fetch_array($inglesresult);
		$languageid = $row['language_id'];
		$sql = "UPDATE user_language SET level='$englishLevel' WHERE user_id=$dni AND language_id=$languageid";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////


		//Guardar nivel de portugues
		$sqlportugues="SELECT * FROM language WHERE languageDescription = 'Portugues'";
		$portuguesresult = mysql_query($sqlportugues, $con);
		$row = mysql_fetch_array($portuguesresult);
		$languageid = $row['language_id'];
		$sql = "UPDATE user_language SET level='$portugueseLevel' WHERE user_id=$dni AND language_id=$languageid";;	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////


		//Guardar nivel de aleman
		$sqlaleman="SELECT * FROM language WHERE languageDescription = 'Aleman'";
		$alemanresult = mysql_query($sqlaleman, $con);
		$row = mysql_fetch_array($alemanresult);
		$languageid = $row['language_id'];
		$sql = "UPDATE user_language SET level='$germanLevel' WHERE user_id=$dni AND language_id=$languageid";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////


		//Guardar nivel de italiano
		$sqlitaliano="SELECT * FROM language WHERE languageDescription = 'Italiano'";
		$italianoresult = mysql_query($sqlitaliano, $con);
		$row = mysql_fetch_array($italianoresult);
		$languageid = $row['language_id'];
		$sql = "UPDATE user_language SET level='$italianLevel' WHERE user_id=$dni AND language_id=$languageid";
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////

		//Guardar nivel de frances
		$sqlfrances="SELECT * FROM language WHERE languageDescription = 'Frances'";
		$francesresult = mysql_query($sqlfrances, $con);
		$row = mysql_fetch_array($francesresult);
		$languageid = $row['language_id'];
		$sql = "SELECT * FROM user_language WHERE language_id=$languageid";
		$result = mysql_query($sql, $con);
		if(mysql_num_rows($result) == 0){
			$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$dni', '$languageid', '$frenchLevel') ";	
			$result = mysql_query($sql, $con);
		}else{
			$sql = "UPDATE user_language SET level='$frenchLevel' WHERE user_id=$dni AND language_id=$languageid";	
			$result = mysql_query($sql, $con);
		}
		
		/////////////////////////////////////////

		mysql_close($con);

	}
?>