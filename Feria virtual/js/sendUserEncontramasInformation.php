<?php
	echo $file['tmp_name'];
	//if($_POST['user'] == "newUser"){
		//insertUser($_POST['dni'], $_POST['password'], $_POST['postgraduate_type'], $_POST['postgraduate_status'], $_POST['postgraduate_title']
		//		   $_POST['postgraduate_institution'], $_FILES['userfile']['size']);
	/*}else{
		updateUser($_POST['dni'], $_POST['password']);
	}*/


	function insertUser($dni, $password, $postgraduate_type, $postgraduate_status, $postgraduate_title, $postgraduate_institution, $userfile){
    	//echo $dni. " - " .$name." - ". $surname." - ".$email." - ".$residenceAddress." - ".$password." - ".$career." - ".$subjects_approved." - ".$celPhone." - ".$countryOfResidence." - ".$stateOfResidence." - ".$cityOfResidence." - ".$institution." - ".$dayOfBorn." - ".$monthOfBorn." - ".$yearOfBorn." - ".$work;
		$con = mysql_connect('localhost','root','');
		mysql_select_db('encontramas',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }
		
		echo $userfile;
			
		//$sql= " INSERT INTO jos_comprofiler (dni, name, surname, mail, pass, birthday, country, state, city, address, phone, university, career, subjects_approved, work, civil_status)
	    //			VALUES ('$dni', '$name', '$surname', '$email', '$password', $birthday, '$countryOfResidence', '$stateOfResidence', '$cityOfResidence', '$residenceAddress', '$celPhone', '$institution', '$career', $subjects_approved, $work, '$civil_status') ";	

		//$result = mysql_query($sql, $con);
		//echo $result;
		}

		
		//echo $result;
		mysql_close($con);
	
?>