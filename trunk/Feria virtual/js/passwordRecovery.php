<?php
  if($_POST["state"] == "Forgot password"){
    getCode();
  }
  if($_POST["state"] == "Create password"){
    createPassword();
  }

  function getCode(){
    $dni = $_POST["dni"];
    $email = $_POST["email"];
    // message lines should not exceed 70 characters (PHP rule), so wrap it
    $subject = "Recuperación de contraseña";

    $con = mysql_connect('localhost','root','');
    mysql_select_db('encontramas_test',$con);
    mysql_query("SET NAMES 'utf8'", $con);
    if (!$con)
      {
      die('Could not connect: ' . mysql_error($con));
      }
      
      $sqldni = "SELECT * FROM ems_user WHERE username = '".$dni."'";
      $userdni = mysql_query($sqldni, $con);

      $sqlemail = "SELECT * FROM ems_user WHERE email = '".$email."'";
      $useremail = mysql_query($sqlemail, $con);
      
      if(mysql_num_rows($userdni) > 0 && mysql_num_rows($useremail) > 0){
        $tempCode = md5(mt_rand());
        $sql = " INSERT INTO passwordrecovery_temp (dni, email, temporary_code)
                  VALUES ('$dni' ,'$email', '$tempCode') ";
        $result = mysql_query($sql, $con);
        
        $to = "$email";

        $headers = "From: AArEII\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=charset=utf-8\r\n";
        
        $message = '<html><body>';
        
        $message .= '<h3>Estimado usuario,</h3>';
        $message .= '<h3>utilice el siguiente código verificador para modificar tu contraseña:</h3><br>';
        $message .= '<p><strong>-Codigo verificador:</strong>  '.$tempCode.'</p><br>';
        $message .= '<h3>El equipo de AArEII</h3>';
        $message .= '</body></html>';
        //mail("$email",$subject,$message,"From: $from\n");
        mail($to, $subject, $message, $headers);
        echo "Enviamos un codigo de verificacion a su email";
      
      }else{
        echo "No tenemos registrado usuarios con esta direccion de email y dni";
      }
  }

  function createPassword(){
    $dni = $_POST["dni"];
    $email = $_POST["email"];
    $code = $_POST["code"];
    $password = $_POST["password"];

    $con = mysql_connect('localhost','root','');
    mysql_select_db('encontramas_test',$con);
    mysql_query("SET NAMES 'utf8'", $con);
    if (!$con)
      {
      die('Could not connect: ' . mysql_error($con));
      }
     $sqlUserRecovery = "SELECT * FROM passwordrecovery_temp WHERE dni= '$dni' AND email = '$email' AND temporary_code = '$code'";
     $userRecovery = mysql_query($sqlUserRecovery, $con);

     if(mysql_num_rows($userRecovery) > 0) {
        $salt = md5(mt_rand());
        $encrypt = md5($password.$salt);
        $encriptedPass = $encrypt.':'.$salt;
        $sql= " UPDATE ems_user 
                SET password = '$encriptedPass'
                WHERE username= '$dni'"; 
        $result = mysql_query($sql, $con);

        $sql = "DELETE FROM passwordrecovery_temp
                WHERE dni='$dni'";
        $result = mysql_query($sql, $con);
        
        echo "Contraseña modificada con exito";

     }else{
        echo "Codigo invalido";
     }

  }
?>