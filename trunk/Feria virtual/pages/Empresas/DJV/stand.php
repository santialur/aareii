<!DOCTYPE html>
<html>
    <head>
        <title>DJV - Stand</title>
	<script type="text/javascript" src="js/rotativo.js"></script>
        <?php include '../_empresasImports.html'; ?>
         <script type="text/javascript">
		      $.ajax({ url: '../../../logic/php/saveVisit.php',
		            data: {
		            		place: 	"DJV",
		            },
		            type: 'POST',
		            success: function(output){
		                
		            }
		        });
	</script>
    </head>

    <body>
        <div class="wrapperMedium">
            <div class="header">
	        <img class="headerLogo leftSide" src="images/logo.png" style="width:20%" width="20%">
		<div class="headerInfo leftSide opensans textShadow"> 
	        	<span id="brandName"> </span>
	        	<p>
	        	<div id="brandSlogan"> </div>
	        </div>
	        
	        <div style="clear:both"></div>
	    </div>
            <?php include '../_empresasMenuD.html';      ?>

            <div id="content">

                <div align="center" style="position: relative;">
                    <img src="images/stand.jpg">
                    <a href="empresa.php" target="_blank"><img id="frontalD" src="images/frontal.png"></a>

		    <body onload="banner()">
                        <a href="javascript:ponerURL()" target="_blank">
                            <img id="TvD" src="" name="banner" >
                        </a>
                    </body>




                    <a href="../../Inscripcion/inscripcion.php" target="_blank"><img id="maletin_D"     src="../../../features/images/object/maletin_D.png"></a>

                    <!-- REDES SOCIALES -->
                    <div class="social" style="width: 12%">
                        
                </div>

            </div>
            
            <?php include '../_empresasFooter.html'; ?>
        </div>
    </body>
</html>