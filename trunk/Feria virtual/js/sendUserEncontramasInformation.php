<?php
	if($_POST['user'] == "newUser"){
		insertUserEncontramas($_POST['dni'], $_POST['password'], $_POST['postgraduate_type'], $_POST['postgraduate_status'], $_POST['postgraduate_title'],
				   $_POST['postgraduate_institution'], $_POST['nivelEspañol'], $_POST['nivelIngles'], $_POST['nivelPortugues'], $_POST['nivelAleman'], $_POST['nivelItaliano']);
	}else{
		updateUserEncontramas($_POST['dni'], $_POST['password']);
	}


	function insertUserEncontramas($dni, $password, $postgraduate_type, $postgraduate_status, $postgraduate_title, $postgraduate_institution, $nivelEspañol, $nivelIngles, $nivelPortugues, $nivelAleman, $nivelItaliano){
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

		

		echo $result;

		
		//echo $result;
		mysql_close($con);
	}
?>