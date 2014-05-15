<!DOCTYPE html>
<html>
	<head>
		<title>Quienes somos?</title>
		
		<?php include '../_empresasImports.html'; ?>		
	</head>

	<body>
    	<div class="wrapperMedium">
    		<div class="header">
	        <img class="headerLogo leftSide" src="images/logo.png" style="width:13%" width="13%">
		<div class="headerInfo leftSide opensans textShadow"> 
	        	<span id="brandName"> </span>
	        	<p>
	        	<div id="brandSlogan"> </div>
	        </div>
	        
	        <div style="clear:both"></div>
	    </div>

    		<?php include '../_empresasMenuD.html'; 	?>

    		<div id="content">
    			<div style="margin: 0 auto; padding: 2% 5%">
	    			<div>
	                    <img src="images/banner.png" class="brandBanner">
	                </div>
	                <br />

   	                <div class="textBoxes opensans textShadow centered"><a target="_blank" id="brandWebpage"></a></div>
   	                <br />
			
	                <div class="textBoxes">
		                <div class="centered">
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

    		<?php include '../_empresasFooter.html'; ?>

    	</div>
	</body>
</html>