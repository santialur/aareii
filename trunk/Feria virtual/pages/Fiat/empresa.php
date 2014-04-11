<!DOCTYPE html>
<html>
	<head>
		<title>Quienes somos?</title>
		
		<?php include '../empresasImports.html'; ?>		
	</head>

	<body>
    	<div class="wrapperMedium">
    		<?php include '../empresasHeader.html'; ?>

    		<?php include '../empresasMenu.html'; 	?>

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
