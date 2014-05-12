<!DOCTYPE html>
<html>
    <head>
        <title>Stand</title>

        <?php include '../_empresasImports.html'; ?>
    </head>

    <body>
        <div class="wrapperMedium">
            <?php include '../_empresasHeader.html';    ?>

            <?php include '../_empresasMenuC.html';      ?>

            <div id="content">

                <div align="center" style="position: relative;">
                    <img src="images/stand.png">
                    
                    <a href="empresa.php" target="_blank"><img id="frontalQuilmes" src="images/frontal.png"></a>

                    <a href="../../Inscripcion/inscripcion.php" target="_blank"><img id="maletin_C"     src="../../../features/images/object/maletin_C.png"></a>
                    <a href="agenda.php"><img id="agenda_C"            src="../../../features/images/object/agenda_C.png"></a>

                    <!-- REDES SOCIALES -->
                    <div class="social" style="width: 12%">
                        <!-- Facebook -->
                        <a href="https://www.facebook.com/CerveceriaQuilmes" target="_blank">
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
				if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')){
				 	var w = new PCWidget({ c: '80d0b7d1-168b-44e0-9951-72b4195a180d', f: true }); 
				 	done = true; 
				 } 
			}; 
		})();
	</script>

    </body>
</html>