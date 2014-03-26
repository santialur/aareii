<?php
	
	//This function will add all the academic information about the user created in savePersonalInformation.php
	addAcademicInformation($_POST['dni'], $_POST['university'], $_POST['career_area'], $_POST['career_title'] ,$_POST['career_status'], 
							$_POST['approved_subjects'], $_POST['career_average'], $_POST['career_totalSubjects'], 
							$_POST['postgraduate_type'], $_POST['postgraduate_status'], $_POST['postgraduate_title'], $_POST['postgraduate_institution'], 
							$_POST['englishLevel'], $_POST['spanishLevel'], $_POST['italianLevel'], $_POST['germanLevel'], $_POST['portugueseLevel']);


	function addAcademicInformation($dni, $university, $career_area, $career_title ,$career_status, $approved_subjects, $career_average, $career_totalSubjects, 
		$postgraduate_type, $postgraduate_state, $postgraduate_title, $postgraduate_institution, $englishLevel, $spanishLevel, $italianLevel, $germanLevel, 
		$portugueseLevel){

		$con = mysql_connect('localhost','root','');
		mysql_select_db('encontramas',$con);
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
		echo $result;


		//Add academical information values into user_encontramas
		$sql = " UPDATE user_encontramas 
				 SET postgraduate_type = '$postgraduate_type', postgraduate_status = '$postgraduate_state', postgraduate_title = '$postgraduate_title', postgraduate_institution = '$postgraduate_institution', title = '$career_title', subjects_approved = '$approved_subjects', 
				 	 career_average = '$career_average', career_totalSubjects = '$career_totalSubjects'
		    	 WHERE username = '$dni' ";
		$result = mysql_query($sql, $con);

		//Add language information
		//Save spanish level
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

		mysql_close($con);
	}
?>