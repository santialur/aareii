<!DOCTYPE html>
<html>
    <head>
        <title>Stand</title>

        <?php include '../_empresasImports.html'; ?>
    </head>

    <body>
        <div class="wrapperMedium">
            <?php include '../_empresasHeader.html';    ?>

            <?php include '../_empresasMenuA.html';     ?>

            <div id="content">

                <div align="center" style="position: relative;">
                    <img src="images/stand.png">
                    
                    <img id="frontalPAE" src="images/frontal.png">

                    <a href="" target="_blank"><img id="maletin_A"     src="../../../features/images/object/maletin_A.png"></a>
                    <a href="ofertasEmpleo.php"><img id="ofertas_A"    src="../../../features/images/object/ofertas_A.png"></a>
                    <a href="agenda.php"><img id="agenda_A"            src="../../../features/images/object/agenda_A.png"></a>
	
                    <!-- REDES SOCIALES -->
                    <div class="social" style="width: 13%">
                        <!-- LinkedIn -->
                        <a href="http://www.linkedin.com/company/pan-american-energy" target="_blank">
                            <img src="http://www.simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn"/>
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
        				var w = new PCWidget({ c: 'aa14cd6c-3a18-4e2f-acde-b48569ba5b0f', f: true }); 
        				done = true; 
        			} 
        		}; 
        	})();
        </script>


    </body>
</html>