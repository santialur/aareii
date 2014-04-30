<?php
	$companyId = $_POST['companyid'];
	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	
	if (!$con)
	{
	  	die('Could not connect: ' . mysql_error($con));
	}

	$sql="SELECT * FROM job_offer WHERE companyid = '$companyId'";
	$result = mysql_query($sql, $con);

	//$desc = array();
	$jsontext = '{"JobOffers":[';
	while ($row = mysql_fetch_array($result, MYSQL_ASSOC))
	{
	    
	    $jsontext .= "{";
	    $jsontext .= '"Titulo":'.'"'.$row["jobTitle"].'",';
	    $jsontext .= '"Descripcion":'.'"'.$row["jobDescription"].'",';
	    $jsontext .= '"Areas de estudio":'.'"'.$row["jobStudiesAreas"].'",';
	    $jsontext .= '"Estudios minimos":'.'"'.$row["jobMinimumStudies"].'",';
	    $jsontext .= '"Lenguajes":'.'"'.$row["jobLanguages"].'",';
	    $jsontext .= '"Tipo de contrato":'.'"'.$row["jobContractType"].'",';
	    $jsontext .= '"Jornada de trabajo":'.'"'.$row["jobShift"].'",';
	    $jsontext .= '"Jornada de trabajo":'.'"'.$row["jobShift"].'",';
	    $jsontext .= '"Fecha de publicacion":'.'"'.$row["jobDatePublished"].'",';
	    $jsontext .= '"Fecha de cierre":'.'"'.$row["jobDateClose"].'",';
	    $jsontext .= '"Habilitado":'.'"'.$row["enabled"].'"';
	    $jsontext .= "},";
	}
	$jsontext = substr_replace($jsontext, '', -1);
	$jsontext .= "]}";
	echo $jsontext;
	//echo json_encode($desc);

	mysql_close($con);
?>