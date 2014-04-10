<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Quienes somos?</title>
		<meta 	name="description" 	content="This is page-header (.page-header &gt; h1)" 	/>
		<meta 	name="viewport" 	content="width=device-width, initial-scale=1.0" 		/>

		<link 	rel="stylesheet"	href="../../lib/bootstrap/css/bootstrap.min.css" 				 		/>
		<link 	rel="stylesheet"	href="../../lib/bootstrap/css/bootstrap-responsive.min.css" 			/>
		<link 	rel="stylesheet" 	href="../../features/themes/font-awesome/css/font-awesome.min.css" 		/>
		<link 	rel="stylesheet"	href="../../css/empresaStyles.css"  									/> 

		<script src="http://code.jquery.com/jquery-1.9.1.min.js">	</script>
		<script src="js/content.js" 	type="text/javascript">		</script>
		<script>
			$(document).ready(function() {
				var h = $("#content").height();
				$("#sideMenu").height(h);
			});
		</script>

	</head>

	<body>
    	<div class="wrapperMedium">
    		<div id="header">
    			<img class="logo" src="images/fiat-web.png" width="25%">
    			<img class="rightSide" id="aareiiLogo" src="../../features/images/AAREII-logo.png" width="5.5%">
    		</div>

    		<?php include '../sideMenu.html'; ?>

    		<div id="content">
    			<div style="margin: 0 auto; padding: 5% 10%">
	    			<div>
	                    <img src="images/banner.png" class="brandBanner">
	                </div>
	                <br />

	                <div class="textBoxes">
		                <div style="text-align:center">
		                    <p>
		                        <h4 id="companyTitle" class="titles"></h4>
		                </div>
		                
		                <br />
		                <div style="text-align:justify">
		                    <p id="companyDescription">
		                        
		                </div>
	            	</div>
    			</div>
    		</div>

    		<?php include '../footer.html'; ?>

    	</div>
	</body>
</html>
