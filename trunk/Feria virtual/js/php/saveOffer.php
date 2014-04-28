<?php

	$companyId = $_POST['companyid'];
	$jobTitle = $_POST['jobTitle'];
	$jobDescription = $_POST['jobDescription'];
	$jobMinimumStudies = $_POST['jobMinimumStudies'];
	$jobStudiesAreas = $_POST['jobStudiesAreas'];
	$jobLanguages = $_POST['jobLanguages'];
	$jobConsiderations = $_POST['jobConsiderations'];
	$jobDateClose = $_POST['jobDateClose'];
	$jobContractType = $_POST['jobContractType'];
	$jobShift = $_POST['jobShift'];

	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error($con));
	  }
	$sql = "INSERT INTO job_offer (companyid, jobTitle, jobDescription, jobDatePublished, jobMinimumStudies, jobStudiesAreas, jobLanguages, jobConsiderations, jobDateClose, enabled, jobContractType, jobShift)
		    			VALUES ($companyId, '$jobTitle' ,'$jobDescription', NOW(),'$jobMinimumStudies','$jobStudiesAreas', '$jobLanguages','$jobConsiderations','$jobDateClose', 1 ,'$jobContractType','$jobShift') ";
    	$result = mysql_query($sql, $con);
    	echo "Exito";
    	mysql_close($con);
?>