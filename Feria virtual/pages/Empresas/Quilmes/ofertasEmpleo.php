<?php 
	session_start(); 
	$_SESSION['company'] = quilmes; 
	$_SESSION['company_id'] = 8; 
?> 
<!DOCTYPE html>
<html>
	<head>
		<title>Ofertas de Empleo</title>

		<?php include '../_empresasImports.html'; ?>
		<link 	rel="stylesheet" 	href="../../../css/ofertasEmpleo.css"	/>
    			
	 	<!-- FANCYBOX --> 
		<link 	type="text/css"			rel="stylesheet" href="../../../features/fancybox/source/jquery.fancybox.css"  media="screen"/>
		<script type="text/javascript" 	src="../../../features/fancybox/source/jquery.fancybox.pack.js"></script>
				
		<script language="javascript" type="text/javascript">
			$(document).ready(function(){
				$(".ifancybox").fancybox({
					'width'			: 	'100%',
		 			'height'		: 	'10%',
		 			'autoSize'		: 	'false',
		 			'fitToView'		: 	'false',
		 			'type' 			: 	'iframe'
				});
				$(".postularFancybox").fancybox({
					'width'			: 	'40%',
		 			'height'		: 	'10%',
		 			'autoSize'		: 	'false',
		 			'fitToView'		: 	'false',
		 			'type' 			: 	'iframe'
				});
			});
		</script>
	</head>

	<body>
    	<div class="wrapperMedium">
            <?php include '../_empresasHeader.html'; ?>

    		<?php include '../_empresasMenuC.html'; 	?>

    		<?php include '../_empresasOfertas.html'; ?>

    		<?php include '../_empresasFooter.html'; ?>
    	</div>
	</body>
</html>