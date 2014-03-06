<?php
	$q = intval($_GET['q']);

	$con = mysql_connect('localhost','root','');
	mysql_select_db('feriavirtual',$con);
	
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error($con));
	  }

	$sql="SELECT * FROM jos_comprofiler WHERE dni = '".$q."'";

	$result = mysql_query($sql, $con);

	
	mysql_close($con);
?>