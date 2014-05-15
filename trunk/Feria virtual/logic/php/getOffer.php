<?php
	$jobOfferId= $_POST['jobOfferId'];
	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);
	
	if (!$con)
	{
	  	die('Could not connect: ' . mysql_error($con));
	}

	$sql="SELECT * FROM job_offer WHERE id = $jobOfferId";
	$result = mysql_query($sql, $con);

	if(mysql_num_rows($result) == 0){
			echo "No hay ofertas";
			return;
	}
	else{
		$jsontext = '{"jobOffers":[';
		while ($row = mysql_fetch_array($result, MYSQL_ASSOC))
		{
	    
		    $jsontext .= "{";
		    $jsontext .= '"id":'.'"'.$row["id"].'",';
		    $jsontext .= '"titulo":'.'"'.$row["jobTitle"].'",';
		    $jsontext .= '"descripcion":'.'"'.$row["jobDescription"].'",';
		    $jsontext .= '"areasEstudio":'.'"'.$row["jobStudiesAreas"].'",';
		    $jsontext .= '"estudiosMinimos":'.'"'.$row["jobMinimumStudies"].'",';
		    $jsontext .= '"lenguajes":'.'"'.$row["jobLanguages"].'",';
		    $jsontext .= '"tipoContrato":'.'"'.$row["jobContractType"].'",';
		    $jsontext .= '"jornadaTrabajo":'.'"'.$row["jobShift"].'",';
		    $jsontext .= '"fechaPublicacion":'.'"'.$row["jobDatePublished"].'",';
		    $jsontext .= '"fechaCierre":'.'"'.$row["jobDateClose"].'",';
		    $jsontext .= '"habilitado":'.'"'.$row["enabled"].'"';
		    $jsontext .= "},";
		}
		$jsontext = substr_replace($jsontext, '', -1);
		$jsontext .= "]}";
		echo $jsontext;
	}
	

	mysql_close($con);
?>