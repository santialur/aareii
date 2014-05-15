<!DOCTYPE html>
<?php 
	session_start(); 
	$_SESSION['company'] = AArEII; 
	$_SESSION['company_id'] = 7; 
?> 
<html>
	<head>
		<title>AArEII - Agenda - Encontrá+ Virtual 2014</title>

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