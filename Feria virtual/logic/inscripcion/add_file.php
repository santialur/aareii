<?php
if(isset($_POST['upload'])){
    // Check if a file has been uploaded
    if(isset($_FILES['file_upload']) & isset($_POST['dniupload'])) {
        // Make sure the file was sent without errors
        if($_FILES['file_upload']['error'] == 0) {
            // Connect to the database
            $dbLink = new mysqli('localhost', 'root', 'C4ch0bs4s3124', 'encontramas_test');
            if(mysqli_connect_errno()) {
                die("MySQL connection failed: ". mysqli_connect_error());
            }
     
            // Gather all required data
            $name = $dbLink->real_escape_string($_FILES['file_upload']['name']);
            $mime = $dbLink->real_escape_string($_FILES['file_upload']['type']);
            $data = $dbLink->real_escape_string(file_get_contents($_FILES  ['file_upload']['tmp_name']));
            $size = intval($_FILES['file_upload']['size']);
            
            $con = mysql_connect('localhost','root','C4ch0bs4s3124');
            mysql_select_db('encontramas_test',$con);
            mysql_query("SET NAMES 'utf8'", $con);
            if (!$con)
             {
              die('Could not connect: ' . mysql_error($con));
              } 

            $dni = $_POST['dniupload'];
            $sql = "SELECT * FROM user_encontramas WHERE userName = '$dni'";
            $result = mysql_query($sql, $con);
            $row = mysql_fetch_array($result);
            $idcurriculum = $row['curriculumId'];

            // Create the SQL query
            $query = "
                UPDATE `curriculum` 
                SET `name` = '{$name}', `mime`='{$mime}', `size`={$size}, `data`= '{$data}', `created` = NOW()
                WHERE `idcurriculum` = '{$idcurriculum}'
                ";
            

            // Execute the query
            $result = $dbLink->query($query);
           

            // Check if it was successfull
            if($result) {
                
                include( '../../pages/Inscripcion/confirmacion.html' );
                
            }
            else {
                //echo 'Error! Failed to insert the file'
                //   . "<pre>{$dbLink->error}</pre>";
            }
        }
        else {
            //echo 'An error accured while the file was being uploaded. '
            //   . 'Error code: '. intval($_FILES['uploaded_file']['error']);
        }
     
        // Close the mysql connection
        $dbLink->close();
    }
    else {
        //echo 'Error! A file was not sent';
    }
     
    // Echo a link back to the main page
    //echo '<p>Click <a href="index.html">here</a> to go back</p>';

}else{
    // Check if a file has been uploaded
    if(isset($_FILES['file_upload']) & isset($_POST['dni'])) {
        // Make sure the file was sent without errors
        if($_FILES['file_upload']['error'] == 0) {
            // Connect to the database
            $dbLink = new mysqli('localhost', 'root', 'C4ch0bs4s3124', 'encontramas_test');
            if(mysqli_connect_errno()) {
                die("MySQL connection failed: ". mysqli_connect_error());
            }
     
            // Gather all required data
            $name = $dbLink->real_escape_string($_FILES['file_upload']['name']);
            $mime = $dbLink->real_escape_string($_FILES['file_upload']['type']);
            $data = $dbLink->real_escape_string(file_get_contents($_FILES  ['file_upload']['tmp_name']));
            $size = intval($_FILES['file_upload']['size']);
        
            $dni = $_POST['dni'];

            // Create the SQL query
            $query = "
                INSERT INTO `curriculum` (
                    `name`, `mime`, `size`, `data`, `created`
                )
                VALUES (
                    '{$name}', '{$mime}', {$size}, '{$data}', NOW()
                )";
     
            // Execute the query
            $result = $dbLink->query($query);
     
            // Check if it was successfull
            if($result) {
                //echo 'Success! Your file was successfully added!';
                $lastId = $dbLink->insert_id;
                $sql = "UPDATE user_encontramas
                        SET curriculumId = $lastId
                        WHERE username = '$dni'";
                $result = $dbLink->query($sql);
                include( '../../pages/Inscripcion/confirmacion.html' );
            }
            else {
                //echo 'Error! Failed to insert the file'
                //   . "<pre>{$dbLink->error}</pre>";
            }
        }
        else {
            //echo 'An error accured while the file was being uploaded. '
            //   . 'Error code: '. intval($_FILES['uploaded_file']['error']);
        }
     
        // Close the mysql connection
        $dbLink->close();
    }
    else {
        //echo 'Error! A file was not sent';
    }
     
    // Echo a link back to the main page
    //echo '<p>Click <a href="index.html">here</a> to go back</p>';
}
?>
 