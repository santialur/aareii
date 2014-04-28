<?php
	
	header('Content-Type: text/html; charset=UTF-8'); 
	
	$con = mysql_connect('localhost','root','C4ch0bs4s3124');
	mysql_select_db('encontramas_test',$con);
	mysql_query("SET NAMES 'utf8'");
	mysql_query('SET CHARACTER SET utf8');
	if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }

	$sql_pollStatement = "SELECT * FROM poll_statements HAVING MAX(dateCreated)";
	$pollStatement = mysql_query($sql_pollStatement, $con);

	$desc = array();
	while($row = mysql_fetch_array($pollStatement))
	{
	    $desc["id"] = utf8_encode($row['id']);
	    $desc["statement"] = $row['statement'];
	    $desc["dateCreated"] = utf8_encode($row['dateCreated']);
				  
	}

	$statementid = $desc["id"];

	$sql_pollElections = "SELECT * FROM poll_elections WHERE statement_id = $statementid";
	$pollElections = mysql_query($sql_pollElections, $con);

	$i = 1;
	while($row = mysql_fetch_array($pollElections, MYSQL_ASSOC))
	{
	    $desc["id_"."$i"] = $row['id'];
	    $desc["election_"."$i"] = $row['election'];
	    $i++;
				  
	}

	echo json_encode($desc, JSON_UNESCAPED_UNICODE);
	mysql_close($con);
?>