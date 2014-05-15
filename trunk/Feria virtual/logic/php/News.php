<?php
	
	header('Content-Type: text/html; charset=UTF-8'); 
	
	if(isset($_POST['saveNew'])){
		saveNew($_POST['newTitle'], $_POST['newDate'], $_POST['newBody']);
	}
	if(isset($_POST['getNews'])){
		getNews();
	}
	if(isset($_POST['deleteNew'])){
		deleteNew($_POST['newId']);
	}
	
	function getNews(){
		$con = mysql_connect('localhost','root','C4ch0bs4s3124');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'");
		mysql_query('SET CHARACTER SET utf8');
		if (!$con)
			  {
			  die('Could not connect: ' . mysql_error($con));
			  }
		$sql = "SELECT * FROM news WHERE enabled = 1 ORDER BY newCreated DESC";
		$result = mysql_query($sql, $con);
		
		if(mysql_num_rows($result) == 0){
			echo "No hay noticias";
		}else{
		
			$jsontext = '{"noticias":[';
			while($row = mysql_fetch_array($result))
			{
			    $jsontext .= '{"id":'.'"'.$row['id'].'",';
			    $jsontext .= '"titulo":'.'"'.$row['newTitle'].'",';
			    $jsontext .= '"cuerpo":'.'"'.$row['newBody'].'",';
			    $jsontext .= '"fecha":'.'"'.$row['newDate'].'"},';
			}
			$jsontext = substr_replace($jsontext, '', -1); // to get rid of extra comma
			$jsontext .= "]}";
			
			echo $jsontext;
			mysql_close($con);
		}
	}
	
	function saveNew($newTitle, $newDate, $newBody){
	
		$con = mysql_connect('localhost','root','C4ch0bs4s3124');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'");
		mysql_query('SET CHARACTER SET utf8');
		if (!$con)
			  {
			  die('Could not connect: ' . mysql_error($con));
			  }
		
		//Primero tenemos que saber si ya existe una noticia con el mismo titulo y fecha
		$sql = "SELECT * FROM news WHERE newTitle= '$newTitle' AND newDate = '$newDate'";
		$result = mysql_query($sql, $con);
		
		if(mysql_num_rows($result)>0){
			echo "Ya existe una noticia con el mismo titular y fecha de evento";
		}else{
			$sql = "INSERT INTO news (newTitle,newBody,newDate,newCreated,newUpdated)
				VALUES ('$newTitle', '$newBody', '$newDate',NOW(),NOW())";
				
			$result = mysql_query($sql, $con);
			if($result){
				getNews();
			}else{
				echo "Hubo un problema al guardar la noticia";
			}
		}
		mysql_close($con);
	}
	
	function deleteNew($newId){
		$con = mysql_connect('localhost','root','C4ch0bs4s3124');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'");
		mysql_query('SET CHARACTER SET utf8');
		if (!$con)
			  {
			  die('Could not connect: ' . mysql_error($con));
			  }
		
		$sql = "UPDATE news
			SET enabled = 0
			WHERE id = $newId";
		$result = mysql_query($sql, $con);
		echo "Exito";
		mysql_close($con);
	}
?>