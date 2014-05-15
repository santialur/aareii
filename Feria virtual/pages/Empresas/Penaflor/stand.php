<!DOCTYPE html>
<html>
	<head>
		<title>Grupo Peñaflor - Stand - Encontrá+ Virtual 2014</title>

		<?php include '../_empresasImports.html'; ?>
		 <script type="text/javascript">
		      $.ajax({ url: '../../../logic/php/saveVisit.php',
		            data: {
		            		place: 	"Peniaflor",
		            },
		            type: 'POST',
		            success: function(output){
		                
		            }
		        });
	</script>
	</head>

	<body>
    	<div class="wrapperMedium">
			<?php include '../_empresasHeader.html';    ?>

 			<?php include '../_empresasMenuC.html';      ?>

    		<div id="content">

                <div align="center" style="position: relative;">
                    <img src="images/stand.png">
                    
                    <a href="empresa.php"><img id="frontalAstori" src="images/frontal.png"></a>
                    <img id="anteriorAstori" src="images/PUBLICIDAD.png"></a>

                    <a href="../../Inscripcion/inscripcion.php" target="_blank"><img id="maletin_B"     src="../../../features/images/object/maletin_B.png"></a>
                    <a href="ofertasEmpleo.php"><img id="ofertas_B"    src="../../../features/images/object/ofertas_B.png"></a>
                    <a href="agenda.php"><img id="agenda_B"            src="../../../features/images/object/agenda_B.png"></a>
                </div>

    		</div>
    		
    		<?php include '../_empresasFooter.html'; ?>
    	</div>
    	<script type='text/javascript'>
    		(function () { 
    			var done = false; 
    			var script = document.createElement('script'); 
    			script.async = true; script.type = 'text/javascript'; 
    			script.src = 'https://widget.purechat.com/VisitorWidget/WidgetScript'; 
    			document.getElementsByTagName('HEAD').item(0).appendChild(script); 
    			script.onreadystatechange = script.onload = function (e) { 
    				if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
    					var w = new PCWidget({ c: '771d2dd6-5709-4583-8d36-9774d31e472b', f: true }); 
    					done = true; 
    				} 
    			}; 
    		})();
    	</script>


	</body>
</html>