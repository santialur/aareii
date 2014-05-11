<?php

// Connect to the database
$dbLink = new mysqli('localhost', 'root', 'C4ch0bs4s3124', 'encontramas_test');
$dbLink->query("SET NAMES 'utf8'");
if(mysqli_connect_errno()) {
    die("MySQL connection failed: ". mysqli_connect_error());
}
 
// Query for a list of all existing files
//$sql = "SELECT * FROM curriculum";
$sql = "SELECT jobTitle, firstname, lastname, cb_nacimiento, cb_pais, cb_provincia, cv_id, title, email
    FROM company AS C, job_offer AS JO, jobOfferApplied AS JOA, user_encontramas AS UE, ems_comprofiler AS EC, ems_user as EU
    WHERE JOA.user_id = UE.userName AND UE.userName = EC.username AND JO.id = JOA.jobOffer_id AND EU.username = UE.userName AND C.id = $companyId ";
    
$result = $dbLink->query($sql);

// Check if it was successfull
if($result) {
    // Make sure there are some files in there
    if($result->num_rows == 0) {
        echo '<p>No cargaste tu curriculum</p>';
    }
    else {
        // Print the top of a table
        echo '<table id="tableOutput" width="100%">
                <tr>
                    <td><b>Puesto</b></td>
                    <td><b>Nombre</b></td>
                    <td><b>Apellido</b></td>
                    <td><b>Titulo</b></td>
                    <td><b>Fecha de nacimiento</b></td>
                    <td><b>País</b></td>
                    <td><b>Provincia</b></td>
                    <td><b>Contacto</b></td>
                    <td><b>CV</b></td>
                </tr>';
 
        // Print each file
        while($row = $result->fetch_assoc()) {
            $output = "";
            if(is_null($row['cv_id'])){
                $output = "<tr>
                            <td><b>{$row['jobTitle']}<b></td>
                            <td>{$row['firstname']}</td>
                            <td>{$row['lastname']}</td>
                            <td>{$row['title']}</td>
                            <td>{$row['cb_nacimiento']}</td>
                            <td>{$row['cb_pais']}</td>
                            <td>{$row['cb_provincia']}</td>
                            <td>{$row['email']}</td>
                            <td><a href='../../logic/inscripcion/get_file.php?id={$row['cv_id']}'>Download</a></td>
                       </tr>";
            }else{
                $output = "<tr>
                            <td><b>{$row['jobTitle']}<b></td>
                            <td>{$row['firstname']}</td>
                            <td>{$row['lastname']}</td>
                            <td>{$row['title']}</td>
                            <td>{$row['cb_nacimiento']}</td>
                            <td>{$row['cb_pais']}</td>
                            <td>{$row['cb_provincia']}</td>
                            <td>{$row['email']}</td>
                            <td><a>No cargó CV</a></td>
                       </tr>";
            }
            echo $output;
        }
 
        // Close table
        echo '</table>';
    }
 
    // Free the result
    $result->free();
}
else
{
    echo 'Error! SQL query failed:';
    echo "<pre>{$dbLink->error}</pre>";
}
 
// Close the mysql connection
$dbLink->close();
?>