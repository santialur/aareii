<?php
	
	if($_POST['user'] == "newUser"){
		addLaboralInformation($_POST['dni'], $_POST['still_works'], $_POST['company_1_name'], $_POST['company_1_type'], $_POST['job_1_description'], 
							$_POST['job_1_area'], $_POST['job_1_senior'], $_POST['job_1_from'], $_POST['job_1_to'], $_POST['company_2_name'], 
							$_POST['company_2_type'], $_POST['job_2_description'], $_POST['job_2_area'], $_POST['job_2_senior'], 
							$_POST['job_2_from'], $_POST['job_2_to'], $_POST['company_3_name'], $_POST['company_3_type'], $_POST['job_3_description'], 
							$_POST['job_3_area'], $_POST['job_3_senior'], $_POST['job_3_from'], $_POST['job_3_to']);
	}else{
		updateLaboralInformation($_POST['dni'], $_POST['still_works'], $_POST['company_1_name'], $_POST['company_1_type'], $_POST['job_1_description'], 
							$_POST['job_1_area'], $_POST['job_1_senior'], $_POST['job_1_from'], $_POST['job_1_to'], $_POST['company_2_name'], 
							$_POST['company_2_type'], $_POST['job_2_description'], $_POST['job_2_area'], $_POST['job_2_senior'], 
							$_POST['job_2_from'], $_POST['job_2_to'], $_POST['company_3_name'], $_POST['company_3_type'], $_POST['job_3_description'], 
							$_POST['job_3_area'], $_POST['job_3_senior'], $_POST['job_3_from'], $_POST['job_3_to']);
	}

	function addLaboralInformation($dni, $still_works, 
		$company_1_name, $company_1_type, $job_1_description, $job_1_area, $job_1_senior, $job_1_from, $job_1_to,
		$company_2_name, $company_2_type, $job_2_description, $job_2_area, $job_2_senior, $job_2_from, $job_2_to,
		$company_3_name, $company_3_type, $job_3_description, $job_3_area, $job_3_senior, $job_3_from, $job_3_to){

		$con = mysql_connect('localhost','root','C4ch0bs4s3124');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }
		
		$sql = " UPDATE ems_comprofiler
				 SET cb_trabaja = $still_works
		    	 WHERE username = '$dni' ";
		$result = mysql_query($sql, $con);
		
		
		if(!$company_1_name == ""){
			$sql= " INSERT INTO labor_History (company_name, company_type, job_description, job_area, job_hierarchy, job_start, job_end)
	    			VALUES ('$company_1_name', '$company_1_type', '$job_1_description', '$job_1_area', '$job_1_senior', '$job_1_from', '$job_1_to') ";
	    		$result = mysql_query($sql, $con);
		     
		    $res = mysql_query('SELECT LAST_INSERT_ID()');
			$row = mysql_fetch_array($res);
			$laborId = $row[0];

	    	/*$sqlLabor="SELECT MAX(id) 
	    			   FROM labor_history 
	    			   WHERE company_name ='$company_1_name' 
	    			   		 AND company_type = '$company_1_type' 
	    					 AND job_description = '$job_1_description'
	    					 AND job_area = '$job_1_area'
	    					 AND job_hierarchy = '$job_1_senior'
	    					 AND job_start = '$job_1_from'
	    					 AND job_end = '$job_1_to' ";


	    	$laborResult = mysql_query($sqlLabor, $con);
	    	$row = mysql_fetch_array($laborResult);
			$laborId = $row['id'];*/
	
			$sql = " INSERT INTO user_laborHistory (user_id, laborHistory_id)
					 VALUES ('$dni', '$laborId')";
			$result = mysql_query($sql, $con);
		}


		if(!$company_2_name == ""){
			$sql= " INSERT INTO labor_history (company_name, company_type, job_description, job_area, job_hierarchy, job_start, job_end)
	    			VALUES ('$company_2_name', '$company_2_type', '$job_2_description', '$job_2_area', '$job_2_senior', '$job_2_from', '$job_2_to') ";
	    	$result = mysql_query($sql, $con);

	    	$res = mysql_query('SELECT LAST_INSERT_ID()');
			$row = mysql_fetch_array($res);
			$laborId = $row[0];

	    	/*$sqlLabor="SELECT MAX(id) 
	    			   FROM labor_history 
	    			   WHERE company_name ='$company_2_name' 
	    			   		 AND company_type = '$company_2_type' 
	    					 AND job_description = '$job_2_description'
	    					 AND job_area = '$job_2_area'
	    					 AND job_hierarchy = '$job_2_senior'
	    					 AND job_start = '$job_2_from'
	    					 AND job_end = '$job_2_to' ";

	    	$laborResult = mysql_query($sqlLabor, $con);
	    	$row = mysql_fetch_array($laborResult);
			$laborId = $row['id'];*/

			$sql = " INSERT INTO user_laborhistory (user_id, laborHistory_id)
					 VALUES ('$dni', '$laborId')";
			$result = mysql_query($sql, $con);
		}


		if(!$company_3_name == ""){
			$sql= " INSERT INTO labor_history (company_name, company_type, job_description, job_area, job_hierarchy, job_start, job_end)
	    			VALUES ('$company_3_name', '$company_3_type', '$job_3_description', '$job_3_area', '$job_3_senior', '$job_3_from', '$job_3_to') ";
	    	$result = mysql_query($sql, $con);

	    	$res = mysql_query('SELECT LAST_INSERT_ID()');
			$row = mysql_fetch_array($res);
			$laborId = $row[0];

	    	/*$sqlLabor="SELECT MAX(id) 
	    			   FROM labor_history 
	    			   WHERE company_name ='$company_3_name' 
	    			   		 AND company_type = '$company_3_type' 
	    					 AND job_description = '$job_3_description'
	    					 AND job_area = '$job_3_area'
	    					 AND job_hierarchy = '$job_3_senior'
	    					 AND job_start = '$job_3_from'
	    					 AND job_end = '$job_3_to' ";

	    	$laborResult = mysql_query($sqlLabor, $con);
	    	$row = mysql_fetch_array($laborResult);
			$laborId = $row['id'];*/

			$sql = " INSERT INTO user_laborhistory (user_id, laborHistory_id)
					 VALUES ('$dni', '$laborId')";
			$result = mysql_query($sql, $con);
		}
	echo("Usuario registrado");
	mysql_close($con);
	}

	function updateLaboralInformation($dni, $still_works, 
		$company_1_name, $company_1_type, $job_1_description, $job_1_area, $job_1_senior, $job_1_from, $job_1_to,
		$company_2_name, $company_2_type, $job_2_description, $job_2_area, $job_2_senior, $job_2_from, $job_2_to,
		$company_3_name, $company_3_type, $job_3_description, $job_3_area, $job_3_senior, $job_3_from, $job_3_to){

		$con = mysql_connect('localhost','root','C4ch0bs4s3124');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }
		
		$sql = " UPDATE ems_comprofiler
				 SET cb_trabaja = $still_works
		    	 WHERE username = '$dni' ";
		$result = mysql_query($sql, $con);

		$sql = 

		echo("Usuario modificado exitosamente");
		mysql_close($con);
	}
?>