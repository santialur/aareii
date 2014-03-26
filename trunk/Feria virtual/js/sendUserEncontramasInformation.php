<?php
	if($_POST['user'] == "newUser"){
		insertUserEncontramas($_POST['dni'], $_POST['password'], $_POST['postgraduate_type'], $_POST['postgraduate_status'], $_POST['postgraduate_title'],
				   $_POST['postgraduate_institution'], $_POST['nivelEspañol'], $_POST['nivelIngles'], $_POST['nivelPortugues'], $_POST['nivelAleman'], $_POST['nivelItaliano'],
				   $_POST['company1_name'], $_POST['company1_type'], $_POST['job1'], $_POST['jobArea1'], $_POST['seniority1'], $_POST['fromMonth_job1'], $_POST['fromYear_job1'], $_POST['toMonth_job1'], $_POST['toYear_job1'],
				   $_POST['company2_name'], $_POST['company2_type'], $_POST['job2'], $_POST['jobArea2'], $_POST['seniority2'], $_POST['fromMonth_job2'], $_POST['fromYear_job2'], $_POST['toMonth_job2'], $_POST['toYear_job2'],
				   $_POST['company3_name'], $_POST['company3_type'], $_POST['job3'], $_POST['jobArea3'], $_POST['seniority3'], $_POST['fromMonth_job3'], $_POST['fromYear_job3'], $_POST['toMonth_job3'], $_POST['toYear_job3']);          

	}else{
		updateUserEncontramas($_POST['dni'], $_POST['password']);
	}


	function insertUserEncontramas($dni, $password, $postgraduate_type, $postgraduate_status, $postgraduate_title, $postgraduate_institution, $nivelEspañol, $nivelIngles, $nivelPortugues, $nivelAleman, $nivelItaliano,
									$company1_name, $company1_type, $job1, $jobArea1, $seniority1, $fromMonth_job1, $fromYear_job1, $toMonth_job1, $toYear_job1,
									$company2_name, $company2_type, $job2, $jobArea2, $seniority2, $fromMonth_job2, $fromYear_job2, $toMonth_job2, $toYear_job2,
									$company3_name, $company3_type, $job3, $jobArea3, $seniority3, $fromMonth_job3, $fromYear_job3, $toMonth_job3, $toYear_job3){
    	//echo $dni. " - " .$name." - ". $surname." - ".$email." - ".$residenceAddress." - ".$password." - ".$career." - ".$subjects_approved." - ".$celPhone." - ".$countryOfResidence." - ".$stateOfResidence." - ".$cityOfResidence." - ".$institution." - ".$dayOfBorn." - ".$monthOfBorn." - ".$yearOfBorn." - ".$work;
		$con = mysql_connect('localhost','root','');
		mysql_select_db('encontramas',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }
		
		$sqluser="SELECT id FROM jos_comprofiler WHERE dni = '".$dni."'";
		$userresult = mysql_query($sqluser, $con);
		$row = mysql_fetch_array($userresult);
		$userid = $row['id'];


		$sql= " INSERT INTO user_encontramas (id, postgraduate_type, postgraduate_status, postgraduate_title, postgraduate_institution, curriculumid)
	    			VALUES ('$userid', '$postgraduate_type', '$postgraduate_status', '$postgraduate_title', '$postgraduate_institution', null) ";	


		$result = mysql_query($sql, $con);

		//Guardar nivel de español
		$sqlespañol="SELECT * FROM language WHERE languageDescription = 'Español'";
		$españolresult = mysql_query($sqlespañol, $con);
		$row = mysql_fetch_array($españolresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$userid', '$languageid', '$nivelEspañol') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////

		//Guardar nivel de ingles
		$sqlingles="SELECT * FROM language WHERE languageDescription = 'Ingles'";
		$inglesresult = mysql_query($sqlingles, $con);
		$row = mysql_fetch_array($inglesresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$userid', '$languageid', '$nivelIngles') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////

		//Guardar nivel de portugues
		$sqlportugues="SELECT * FROM language WHERE languageDescription = 'Portugues'";
		$portuguesresult = mysql_query($sqlportugues, $con);
		$row = mysql_fetch_array($portuguesresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$userid', '$languageid', '$nivelPortugues') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////

		//Guardar nivel de aleman
		$sqlaleman="SELECT * FROM language WHERE languageDescription = 'Aleman'";
		$alemanresult = mysql_query($sqlaleman, $con);
		$row = mysql_fetch_array($alemanresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$userid', '$languageid', '$nivelAleman') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////

		//Guardar nivel de italiano
		$sqlitaliano="SELECT * FROM language WHERE languageDescription = 'Italiano'";
		$italianoresult = mysql_query($sqlitaliano, $con);
		$row = mysql_fetch_array($italianoresult);
		$languageid = $row['language_id'];
		$sql= " INSERT INTO user_language (user_id, language_id, level)
	    			VALUES ('$userid', '$languageid', '$nivelItaliano') ";	
		$result = mysql_query($sql, $con);
		/////////////////////////////////////////

		
		echo $company1_name;

		
		//echo $result;
		mysql_close($con);
	}
?>