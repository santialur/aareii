<!DOCTYPE html>
<html>
    <head>
        <title>Stand</title>
        <script type="text/javascript" src="js/rotativoUnilever.js"></script>
        <?php include '../_empresasImports.html'; ?>
    </head>

    <body>
        <div class="wrapperMedium">
            <?php include '../_empresasHeader.html';    ?>

            <?php include '../_empresasMenuA.html';     ?>

            <div id="content">

                <div align="center" style="position: relative;">
                    <img src="images/stand.png">
                    
                    <a href="ofertasEmpleo.php"><img id="frontalUnilever" src="images/frontal.png"></a>
                    <body onload="banner()">
                        <a href="javascript:ponerURL()" target="_blank">
                            <img id="topUnilever" src="" name="banner" >
                        </a>
                    </body>
                    
                    <a href="http://www.unilever.com.ar/sustainable-living-2014/unilever-sustainable-living-plan/"><img id="middleUnilever" src="images/s1middle.png"></a>

                    <a href="" target="_blank"><img id="maletin_A"     src="../../../features/images/object/maletin_A.png"></a>
                    <a href="ofertasEmpleo.php"><img id="ofertas_A"    src="../../../features/images/object/ofertas_A.png"></a>
                    <a href="agenda.php"><img id="agenda_A"            src="../../../features/images/object/agenda_A.png"></a>
                </div>

            </div>
            
            <?php include '../_empresasFooter.html'; ?>
        </div>
    </body>
</html>