<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Stand</title>
		<meta name="description" content="This is page-header (.page-header &gt; h1)" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<link 	rel="stylesheet"	href="../../lib/bootstrap/css/bootstrap.min.css" 				 			/>
		<link 	rel="stylesheet"	href="../../lib/bootstrap/css/bootstrap-responsive.min.css" 				/>
		<link 	rel="stylesheet" 	href="../../features/themes/font-awesome/css/font-awesome.min.css" 			/>
		<link 	rel="stylesheet"	href="../../css/empresaStyles.css"  										/> 

	  	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script>
			$(document).ready(function() {
				var h = $("#content").height();
				$("#sideMenu").height(h);
			});
		</script>
	</head>

	<body>
    	<div class="wrapperMedium" style="">
    		<div id="header">
    			<img class="logo" src="images/fiat-web.png" width="275">
    			<img class="rightSide" id="aareiiLogo" src="../../features/images/AAREII-logo.png" width="60">
    		</div>

    		<?php include '../sideMenu.html'; ?>

    		<div id="content">
    			<div style="margin: 0 auto;">
    				<img src="../../features/images/stand-green.jpg" style="position: relative;">
    				<img id="standFiat" src="images/s2front_fc.png">
    			</div>
    		</div>
    		
    		<?php include '../footer.html'; ?>
    	</div>
	</body>
</html>
