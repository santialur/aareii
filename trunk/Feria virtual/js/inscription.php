<?php
	/*foreach ($_GET as $key=>$value) {
	  echo "$key = " . urldecode($value) ;
	  }*/

	$q = intval($_GET['q']);

	$con = mysqli_connect('localhost','root','','test');
	if (!$con)
	  {
	  die('Could not connect: ' . mysqli_error($con));
	  }

	mysqli_select_db($con,"ajax_demo");
	$sql="SELECT * FROM user WHERE id = '".$q."'";

	$result = mysqli_query($con,$sql);

	while($row = mysqli_fetch_array($result))
	  {
	  
	  echo $row['nombre'];
	  
	  }

	mysqli_close($con);
?>