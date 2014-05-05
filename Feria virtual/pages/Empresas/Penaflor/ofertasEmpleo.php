<?php 
	session_start(); 
	$_SESSION['company_name'] = penaflor; 
	$_SESSION['company_id'] = 3; 
?> 
<!DOCTYPE html>
<html>
	<head>
		<title>Ofertas de Empleo</title>

		<?php include '../_empresasImports.html'; ?>
		<link 	rel="stylesheet" 	href="../../../css/ofertasEmpleo.css"	/>
    			
	    <script type="text/javascript">
	      function getSession(){
	        var x = <?php echo json_encode($_SESSION['company_id']) ?>;
	        return x;
	      }
	    </script>
	</head>

	<body>
    	<div class="wrapperMedium">
            <?php include '../_empresasHeader.html'; ?>

    		<?php include '../_empresasMenu.html'; 	?>

    		<?php include '../_empresasOfertas.html'; ?>

    		<?php include '../_empresasFooter.html'; ?>
    	</div>
	</body>
</html>