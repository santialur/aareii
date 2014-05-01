<?php
	
	header('Content-Type: text/html; charset=UTF-8'); 
	
	if(isset($_POST['saveVote'])){
		saveVote($_POST['pcIdentification'], $_POST['selectedOption'], $_POST['questionId']);
	}
	if(isset($_POST['getPolls'])){
		getPolls();
	}
	
	function getPolls(){
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
	}
	
	function saveVote($pcIdentification, $selectedOption, $questionId){
	
		$con = mysql_connect('localhost','root','C4ch0bs4s3124');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'");
		mysql_query('SET CHARACTER SET utf8');
		if (!$con)
			  {
			  die('Could not connect: ' . mysql_error($con));
			  }
		
		//Primero tenemos que saber si ya se hizo un voto desde esa computadora
		$sql = "SELECT * FROM poll_ListVoters WHERE computerId = '$pcIdentification'";
		$result = mysql_query($sql, $con);
		
		if(mysql_num_rows($result)>0){
			$sql = "SELECT * FROM poll_options WHERE question_id = '$questionId'";
			$result = mysql_query($sql, $con);
			
			
			$jsontext = '{"results":[';
			while($row = mysql_fetch_array($result, MYSQL_ASSOC))
			{
			    $jsontext .= '{"option":"'.$row['option'].'",';
			    $jsontext .= '"quantity":'.$row['voteQuantity'].'},';
			}
			$jsontext = substr_replace($jsontext, '', -1); // to get rid of extra comma
			$jsontext .= ']}';
			echo $jsontext;
			mysql_close($con);
			return;
			
		}else{
			
			$sql_updatePoll = "UPDATE poll_options 
					SET voteQuantity = voteQuantity + 1 
					WHERE id= $selectedOption";
			
			$result = mysql_query($sql_updatePoll, $con);
			echo $sql_updatePoll;
			
			$sql_insertId = "INSERT INTO poll_ListVoters (pollQuestion_id, computerId)
					VALUES($questionId, '$pcIdentification')";
			$result = mysql_query($sql_insertId, $con);
			
			$sql_poll = "SELECT * FROM poll_options WHERE question_id = $questionId";
			$result = mysql_query($sql_poll, $con);
			
			$jsontext = '{"results":[';
			while($row = mysql_fetch_array($result, MYSQL_ASSOC))
			{
			    $jsontext .= '{"option":"'.$row['option'].'",';
			    $jsontext .= '"quantity":'.$row['voteQuantity'].'},';
			}
			$jsontext = substr_replace($jsontext, '', -1); // to get rid of extra comma
			$jsontext .= ']}';
			echo $jsontext;
			mysql_close($con);
			return;
		}
	
	}
?>