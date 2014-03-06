<?php
	$dni = $_GET['dni'];

	$con = mysql_connect('localhost','root','');
	mysql_select_db('feriavirtual',$con);
	
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error($con));
	  }


	$sql="SELECT * FROM jos_comprofiler WHERE dni = '".$dni."'";

	$result = mysql_query($sql, $con);

	$desc = array();
	
	while($row = mysql_fetch_array($result))
	  {
	  
		  $desc["name"] = utf8_encode($row["name"]);
		  $desc["surname"] = utf8_encode($row["surname"]);
		  $desc["mail"] = utf8_encode($row["mail"]);
		  $desc["pass"] = $row["pass"];
		  $desc["birthday"] = $row["birthday"];
		  $desc["country"] = utf8_encode($row["country"]);
		  $desc["state"] = utf8_encode($row["state"]);
		  $desc["city"] = utf8_encode($row["city"]);
		  $desc["address"] = utf8_encode($row["address"]);
		  $desc["phone"] = $row["phone"];
		  $desc["university"] =  utf8_encode($row["university"]);
		  $desc["career"] = utf8_encode($row["career"]);
		  $desc["subjects_approved"] = utf8_encode($row["subjects_approved"]);
		  $desc["work"] = $row["work"];

	  }

	echo json_encode($desc);
	
	mysql_close($con);
?>