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
                    
                    <a href="empresa.php"><img id="frontalFiat" src="images/frontal.png"></a>

                    <a href="http://hostpr.fiatauto.com.ar/rrhh/jsps/login.jsp" target="_blank"><img id="maletin_B" src="../../../features/images/object/maletin_B.png"></a>
                    <a href="agenda.php"><img id="agenda_B" src="../../../features/images/object/agenda_B.png"></a>
                    <a href="http://hostpr.fiatauto.com.ar/rrhh/jsps/login.jsp"><img id="ofertas_B"    src="../../../features/images/object/ofertas_B.png"></a>
                </div>

            </div>
            
            <?php include '../_empresasFooter.html'; ?>
        </div>
        <script type='text/javascript'>
        	(function () { 
        		var done = false; 
        		var script = document.createElement('script'); 
        		script.async = true; 
        		script.type = 'text/javascript'; 
        		script.src = 'https://widget.purechat.com/VisitorWidget/WidgetScript'; 
        		document.getElementsByTagName('HEAD').item(0).appendChild(script); 
        		script.onreadystatechange = script.onload = function (e) { 
        			if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { 
        				var w = new PCWidget({ c: '53db1eaf-bf90-4e58-8f1a-28590e69680b', f: true }); 
        				done = true; } 
        			}; 
        	})();
        </script>


    </body>
</html>