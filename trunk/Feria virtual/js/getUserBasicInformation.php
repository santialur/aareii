<?php
	$dni = $_GET['dni'];
	$password = $_GET['password'];

	$con = mysql_connect('localhost','root','');
	mysql_select_db('encontramas',$con);
	
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error($con));
	  }

	$checkDni="SELECT * FROM jos_comprofiler WHERE dni = '".$dni."'";
	$resultcheckDni = mysql_query($checkDni, $con);
	
	$checkUser="SELECT * FROM jos_comprofiler WHERE dni = '".$dni."' AND pass = '".$password."'" ;
	$resultcheckUser = mysql_query($checkUser, $con);

	if(mysql_num_rows($resultcheckDni) == 0){
		echo "Baddni";
	}
	else if(mysql_num_rows($resultcheckDni) > 0 & mysql_num_rows($resultcheckUser) == 0){
		echo "Badpass";
	}else{
		$desc = array();
	
		while($row = mysql_fetch_array($resultcheckUser))
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
			  $desc["civil_status"] = $row["civil_status"];
			  
		  }
		  echo json_encode($desc);
	
	}

	mysql_close($con);
?>