<?php

	$companyId = $_POST['companyId'];
	$jobTitle = $_POST['jobTitle'];
	$jobDescription = $_POST['jobDescription'];
	$jobDatePublished;
	$jobMinimumStudies = $_POST['jobMinimumStudies'];
	$jobStudiesAreas = $_POST['jobStudiesAreas'];
	$jobLanguages = $_POST['jobLanguages'];
	$jobConsiderations = $_POST['jobConsiderations'];
	$jobDateClose = $_POST['jobDateClose'];
	$jobContractType = $_POST['jobContractType'];
	$jobJourney = $_POST['jobJourney'];

	$con = mysql_connect('localhost','root','');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error($con));
	  }
	$sql = "INSERT INTO job_offer (companyId, jobTitle, jobDescription, jobDatePublished, jobMinimumStudies, jobStudiesAreas, jobLanguages, jobConsiderations, jobDateClose, jobContractType, jobJourney)
		    			VALUES ($companyId, '$jobTitle' ,'$jobDescription', '$jobDatePublished','$jobMinimumStudies','$jobStudiesAreas', '$jobLanguages','$jobConsiderations','$jobDateClose','$jobContractType','$jobJourney') ";
    $result = mysql_query($sql, $con);

    mysql_close($con);
?>