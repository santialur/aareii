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

	$sql_pollQuestion = "SELECT * FROM poll_questions HAVING MAX(dateCreated)";
	$pollQuestion = mysql_query($sql_pollQuestion, $con);

	$desc = array();
	
	$jsontext = "{";
	while($row = mysql_fetch_array($pollQuestion ))
	{
	    $desc["id"] = utf8_encode($row['id']);
	    //$desc["statement"] = $row['statement'];
	    $jsontext .= '"id":'.'"'.$row['id'].'",';
	    $jsontext .= '"question":'.'"'.$row['question'].'",';
	}

	$questionid = $desc["id"];

	$sql_pollOptions = "SELECT * FROM poll_options WHERE question_id = $questionid";
	$pollOptions = mysql_query($sql_pollOptions, $con);
	
	$jsontext .= '"options":'.'[';
	while($row = mysql_fetch_array($pollOptions, MYSQL_ASSOC))
	{
	    
	    $jsontext .= '{"id":'.'"'.$row['id'].'",';
	    $jsontext .= '"option":'.'"'.$row['option'].'"},';
	  
	}
	$jsontext = substr_replace($jsontext, '', -1); // to get rid of extra comma
	$jsontext .= "]}";
	
	//echo json_encode($desc, JSON_UNESCAPED_UNICODE);
	echo $jsontext;
	mysql_close($con);
?>