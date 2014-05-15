<!DOCTYPE html>
<html>
    <head>
        <title>Unilever - Stand - Encontrá+ Virtual 2014</title>
        <script type="text/javascript" src="js/rotativoUnilever.js"></script>
        <?php include '../_empresasImports.html'; ?>
        
<!-- FANCYBOX --> 
	<link 	rel="stylesheet"		type="text/css"		href="../../../features/fancybox/source/jquery.fancybox.css"  media="screen"/>
	<script type="text/javascript" 	src="../../../features/fancybox/source/jquery.fancybox.pack.js"></script>
		
        <script type="text/javascript"	language="javascript">
	        jQuery(document).ready(function() {
		$(".videoStandTV").click(function() {
			$.fancybox({
				'padding'		: 0,
				'autoScale'		: false,
				'transitionIn'	: 'none',
				'transitionOut'	: 'none',
				'title'			: this.title,
				'width'			: 640,
				'height'		: 385,
				'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type'			: 'swf',
				'swf'			: {
				'wmode'				: 'transparent',
				'allowfullscreen'	: 'true'
				}
			});
	
			return false;
		});
	});
	</script>        
         <script type="text/javascript">
		      $.ajax({ url: '../../../logic/php/saveVisit.php',
		            data: {
		            		place: 	"Unilever",
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

            <?php include '../_empresasMenuA.html';      ?>

            <div id="content">

                <div align="center" style="position: relative;">
                    <img src="images/stand.png">
                    
                    <a href="empresa.php"><img id="frontalUnilever" src="images/frontal.png"></a>
                    <body onload="banner()">
                        <a href="javascript:ponerURL()" target="_blank">
                            <img id="topUnilever" src="" name="banner" >
                        </a>
                    </body>
                    
                    <a href="http://www.unilever.com.ar/sustainable-living-2014/unilever-sustainable-living-plan/"><img id="middleUnilever" src="images/s1middle.png"></a>

                    <a href="http://encontramas.com.ar/virtual/pages/Inscripcion/inscripcion.php" target="_blank"><img id="maletin_A"     src="../../../features/images/object/maletin_A.png"></a>
                    <a href="ofertasEmpleo.php"><img id="ofertas_A"    src="../../../features/images/object/ofertas_A.png"></a>
                    <a href="agenda.php"><img id="agenda_A"            src="../../../features/images/object/agenda_A.png"></a>
			
			<a class="videoStandTV" title="Ezequiel Gómez, Director Proyecto Cordillera Cono Sur | Experiencia Unilever" href="https://www.youtube.com/watch?v=BWwV7SWXlbA">
			<img id="videoA" src="../../../features/images/play.png" />
		    </a>
		    		    
<!-- REDES SOCIALES -->
                    <div class="social" style="width: 12%">
                        <!-- Facebook -->
                        <a href="https://www.facebook.com/UnileverCareersSouthernCone" target="_blank">
                            <img src="http://www.simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/UnileverTalent" target="_blank">
                            <img src="http://www.simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                        </a>
                        <a href="https://www.youtube.com/user/UnileverCareersSC" target="_blank">
                            <img src="images/YouTube.png" alt="Youtube" />
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
        		script.async = true; 
        		script.type = 'text/javascript'; 
        		script.src = 'https://widget.purechat.com/VisitorWidget/WidgetScript'; 
        		document.getElementsByTagName('HEAD').item(0).appendChild(script); 
        		script.onreadystatechange = script.onload = function (e) { 
        			if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        				var w = new PCWidget({ c: '64d0b878-83c2-4b31-827c-af22b7aee5ec', f: true }); 
        				done = true; 
        			} 
        		}; 
        	})();
        </script>


    </body>
</html>