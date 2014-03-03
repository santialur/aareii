<?php
	/*foreach ($_GET as $key=>$value) {
	  echo "$key = " . urldecode($value) ;
	  }*/

	$q = intval($_GET['q']);

	$con = mysqli_connect('localhost','root','','feriavirtual');
	if (!$con)
	  {
	  die('Could not connect: ' . mysqli_error($con));
	  }

	mysqli_select_db($con,"ajax_demo");
	$sql="SELECT * FROM jos_comprofiler WHERE dni = '".$q."'";

	$result = mysqli_query($con,$sql);

	$desc = array();
	while($row = mysqli_fetch_array($result))
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
	  /*echo $row['name'] 
	  	   .$row['surname'];*/
	  }

	  
	  echo json_encode($desc);
	
	mysqli_close($con);
?>