<?php 
	session_start(); 
	$_SESSION['company'] = cocacola; 
	$_SESSION['company_id'] = 13; 
?> 
<!DOCTYPE html>
<html>
	<head>
		
		<title>Empresa Coca Cola - Agenda</title>
    	<?php include '../_empresasImports.html'; ?>
   		<link 	rel="stylesheet" 	href="../../../css/agenda.css"											/>
	</head>

	<body>
    	<div class="wrapperMedium">
       		<?php include '../_empresasHeader.html'; 	?>

    		<?php include '../_empresasMenuC.html'; 	?>

    		<?php include '../_empresasAgenda.html'; 	?>

    		<?php include '../_empresasFooter.html'; 	?>

    	</div>
	</body>
</html>
