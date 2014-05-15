<!DOCTYPE html>
<html>
    <head>
        <title>Empresa Mondelëz - Stand</title>

        <?php include '../_empresasImports.html'; ?>
         <script type="text/javascript">
		      $.ajax({ url: '../../../logic/php/saveVisit.php',
		            data: {
		            		place: 	"Mondelez",
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
                    
                    <a href="empresa.php" target="_blank"><img id="frontalMondelez" src="images/frontal.png"></a>

                    <a href="../../Inscripcion/inscripcion.php" target="_blank"><img id="maletin_C"     src="../../../features/images/object/maletin_C.png"></a>
                    <a href="agenda.php"><img id="agenda_C"            src="../../../features/images/object/agenda_C.png"></a>

                    <!-- REDES SOCIALES -->
                    <div class="social" style="width: 12%">
                        <!-- Facebook -->
                        <a href="https://www.facebook.com/mondelezinternational" target="_blank">
                            <img src="http://www.simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                        </a>
                    </div>

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
					var w = new PCWidget({ c: '5da7f3e0-5acf-4073-8c85-3f6d4ca1b318', f: true }); 
					done = true; 
				} 
			}; 
		})();
	</script>


    </body>
</html>