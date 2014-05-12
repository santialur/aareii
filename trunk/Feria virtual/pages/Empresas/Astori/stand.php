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
                    
                    <a href="empresa.php"><img id="frontalAstori" src="images/frontal.png"></a>
                    <img id="anteriorAstori" src="images/anterior.png"></a>

                    <a href="../../Inscripcion/inscripcion.php" target="_blank"><img id="maletin_B"     src="../../../features/images/object/maletin_B.png"></a>
                    <a href="ofertasEmpleo.php"><img id="ofertas_B"    src="../../../features/images/object/ofertas_B.png"></a>
                    <a href="agenda.php"><img id="agenda_B"            src="../../../features/images/object/agenda_B.png"></a>

                </div>

            </div>
            
            <?php include '../_empresasFooter.html'; ?>
        </div>
        <script type='text/javascript'>(
            function () { 
            var done = false; 
            var script = document.createElement('script'); 
            script.async = true;
            script.type = 'text/javascript'; 
            script.src = 'https://widget.purechat.com/VisitorWidget/WidgetScript'; 
            document.getElementsByTagName('HEAD').item(0).appendChild(script); 
            script.onreadystatechange = script.onload = function (e) { 
                if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { 
                    var w = new PCWidget({ c: 'b6e67e4e-ecff-49ea-ab84-e4eee7373bc9', f: true }); 
                    done = true; 
                } 
            }; 
            })();
        </script>


    </body>
    
</html>