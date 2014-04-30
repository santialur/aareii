<?php
	$companyId = $_POST['companyid'];

	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'", $con);

	if (!$con)
	{
	  	die('Could not connect: ' . mysql_error($con));
	}

	$sql="SELECT * FROM events WHERE companyid = $companyId AND enabled = 1";
	$result = mysql_query($sql, $con);

	
	$jsontext = '{"events":[';
	while ($row = mysql_fetch_array($result, MYSQL_ASSOC))
	{
	
	    /*$row_array["Titulo"] = utf8_encode($row["eventTitle"]);
	    $row_array["Descripcion"] =  utf8_encode($row["eventDescription"]);
	    $row_array["Inicia"] =  utf8_encode($row["eventDateTimeStart"]);
	    $row_array["Termina"] =  utf8_encode($row["eventDateTimeEnd"]);
	    $row_array["Habilitado"] =  utf8_encode($row["enabled"]);*/
	    $jsontext .= "{";
	    $jsontext .= '"Titulo":'.'"'.$row["eventTitle"].'",';
	    $jsontext .= '"Descripcion":'.'"'.$row["eventDescription"].'",';
	    $jsontext .= '"Inicia":'.'"'.$row["eventDateTimeStart"].'",';
	    $jsontext .= '"Termina":'.'"'.$row["eventDateTimeEnd"].'",';
	    $jsontext .= '"Habilitado":'.'"'.$row["enabled"].'"';
	    $jsontext .= "},";
	}
	$jsontext = substr_replace($jsontext, '', -1);
	$jsontext .= "]}";
	echo $jsontext;

	mysql_close($con);
?>