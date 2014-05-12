<!DOCTYPE html>
<?php 
	session_start(); 
	$_SESSION['company'] = unilever; 
	$_SESSION['company_id'] = 5; 
?> 
<html>
	<head>
		<title>Agenda</title>

    	<?php include '../_empresasImports.html'; ?>
   		<link 	rel="stylesheet" 	href="../../../css/agenda.css"											/>
	</head>

	<body>
    	<div class="wrapperMedium">
       		<?php include '../_empresasHeader.html'; 	?>

    		<?php include '../_empresasMenuA.html'; 	?>

    		<?php include '../_empresasAgenda.html'; 	?>

    		<?php include '../_empresasFooter.html'; 	?>

    	</div>
	</body>
</html>

