<?php
	if($_POST['action'] == "checkCompany"){
		checkCompany( $_POST['company'],$_POST['password']);
	}

	function checkCompany($company_name, $password){

		$con = mysql_connect('localhost','root','C4ch0bs4s3124');
		mysql_select_db('encontramas_test',$con);
		mysql_query("SET NAMES 'utf8'", $con);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error($con));
		  }

		$sql_company = "SELECT * FROM company WHERE company_name = '$company_name'";
		$company = mysql_query($sql_company, $con);
		$row = mysql_fetch_array($company);
		if(mysql_num_rows($company) == 0){
			echo "Empresa no registrada";
			return;
		}

		$company_password = $row['password'];
		$company_password_salt = explode(":", $company_password);
		//$user_password_salt[1] va a tener solo la salt
		$encrypt = md5($password.$company_password_salt[1]);
		$encriptedPass = $encrypt.':'.$company_password_salt[1];

		$sql = "SELECT * FROM company WHERE company_name = '$company_name' AND password = '$encriptedPass'";
		$result = mysql_query($sql, $con);

		if(mysql_num_rows($result) == 0){
			echo "Compania no registrada";
		}else{
			$id = mysql_fetch_array($result)['id'];
			$sql = "UPDATE company SET lastLogin = NOW() WHERE id = $id";
			$result = mysql_query($sql, $con);
			
			session_start();
  			$_SESSION['company_name'] = $company_name;
  			$_SESSION['company_identification'] = $id;
  			echo "Compania registrada";
  			
		}
		mysql_close($con);
	}

?>