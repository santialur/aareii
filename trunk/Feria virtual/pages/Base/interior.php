<html>
	<head>
		<title>
			Interior
		</title>
		<meta property="og:url" content="http://www.encontramas.com.ar/pages/Base/interior.php" />
		<meta property="og:title" content="Feria virtual de empresas- Encontra+ 2014" />
		<meta property="og:description" content="Inscribite a la feria de empresas 2014" />
		<meta property="og:image" content="http://www.encontramas.com.ar/virtual/features/images/encontramas_facebook_foto.jpg" />
		
		<?php include '_imports.html'; ?>
		
		<!-- NEWS AND POLLS --> 
		<script type="text/javascript"	src="../../logic/js/interior.js"></script>
		<script type="application/javascript">
		    function getip(json){
		      //alert(json.ip); // alerts the ip address
		      saveIdentification(json.ip);
		    }
		</script>
		<script type="application/javascript" src="http://jsonip.appspot.com/?callback=getip"> </script>
		
		<!--- NEWS TICKER --> 
	  	<link 	rel="stylesheet"		type="text/css"		href="../../features/jquery_news_ticker/styles/ticker-style.css"   />
		<script type="text/javascript"	src="../../features/jquery_news_ticker/includes/jquery.ticker.js"></script>
		
		<script type="text/javascript">
			$(function () {
			    $('#js-news').ticker({
			        titleText: '<h3>NOTICIAS</h3>',  
				displayType: 'fade', 
			    });
			});	
		</script>

		<!-- FANCYBOX --> 
		<link 	rel="stylesheet"		type="text/css"		href="../../features/fancybox/source/jquery.fancybox.css"  media="screen"/>
		<script type="text/javascript" 	src="../../features/fancybox/source/jquery.fancybox.pack.js"></script>
				
		<script type="text/javascript"	language="javascript">
			$(document).ready(function(){
				$(".ifancybox").fancybox({
					'width'			: 	'100%',
		 			'height'		: 	'120%',
		 			'autoScale'		: 	'none',
		 			'transitionIn'	: 	'none',
		 			'transitionOut' : 	'none',
		 			'type' 			: 	'iframe'
				});
			});
		</script>
		
		<script type="text/javascript"	src="../../lib/bootstrap/js/bootstrap.min.js"></script>

	  	<!-- MARQUESINA --> 
	  	<link 	rel="stylesheet" 		type="text/css"		href="../../css/plugins/marquee.css"	/>
	  	<script type="text/javascript"	src="../../logic/js/marquee.js"></script>
	  	
	  	
	  	<script type="text/javascript">
		      
		</script>
	  	
	</head>


	<body>
		<!-- MENU --> 
		<?php include '_menu.html'; ?>

		<!-- CONTENIDO -->
		<div class="wrapper" align="center">

				<!-- NOTICIAS -->
				<div style="margin-top: 4%">
					<ul id="js-news" class="js-hidden">
					</ul>
				</div>

				<!-- BLOQUE IZQUIERDO --> 
				<div id="leftBlock" class="leftSide">

					<!-- CROQUIS --> 
					<div align="center" style="position: relative;">
						<img class="sketch" src="../../features/images/interior.jpg" width="100%"/>
						
						<!-- POPUPS -->
						<?php include '_popups.html'; ?>
					</div>

					<!-- MARQUESINA -->
					<div style="margin-top: 5%; ">
						<ul class="itemMarquee">
						  	<li><img src="../../features/images/arcor-web.png"/>		</li>
					  		<li><img src="../../features/images/quilmes-web.png"/>		</li>
					  		<li><img src="../../features/images/unilever-web.png"/>		</li>
					  		<li><img src="../../features/images/penaflor-web.png"/>		</li>
					  		<li><img src="../../features/images/fiat-web.png"/>			</li>
					  		<li><img src="../../features/images/pae-web.png"/>			</li>
					  		<li><img src="../../features/images/consuman-web.png"/>		</li>
					  		<li><img src="../../features/images/cocacola-web.png"/>		</li>

						</ul>

					</div>

				</div> <!-- FIN BLOQUE IZQUIERDO --> 

				<!-- BLOQUE DERECHO --> 
				<div id="rightBlock" class="rightSide">

					<!-- COMPARTIR -->
					<div style="margin-top: -10%;"> 
						<h4 class="oswald titles">Compartir</h4>

						<div class="social">
							<!-- Facebook -->
							<a href="http://www.facebook.com/sharer.php?u=http://www.encontramas.com.ar/virtual/pages/Base/interior.php" target="_blank">
								<img src="http://www.simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
							</a>
							<!-- Twitter -->
							<a href="http://twitter.com/share?url=http://www.encontramas.com.ar/virtual/pages/Base/interior.php" target="_blank">
								<img src="http://www.simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter"/>
							</a>
							<!-- Google+ -->
							<a href="https://plus.google.com/share?url=http://www.encontramas.com.ar/virtual/pages/Base/interior.php" target="_blank">
								<img src="http://www.simplesharebuttons.com/images/somacro/google.png" alt="Google" />
							</a>
							<!-- LinkedIn -->
							<a href="http://www.linkedin.com/shareArticle?mini=true&url=http://www.encontramas.com.ar/virtual/pages/Base/interior.php" target="_blank">
								<img src="http://www.simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
							</a>
							
						</div>
					</div>

					<br><br>

					<!-- ENCUESTA --> 
					<div style="margin-top: ">	
						<h4 class="oswald titles">Encuesta</h4>

						<div id="pollContent">	
    						<h3 id="pollTitle" style="text-align:center"></h3>	<br>
							<div id="pollOptions"></div>
							<div id="chart_div" style="width: 100%; height: 100%; display:none;" ></div>
					    	</div>
					    	<br>
    					</div>
					</div>

					<button id="voteButton" class="button" style="position:static; top:50%" onclick="sendVote()">Votar</button>
					
					
				</div> <!-- FIN BLOQUE DERECHO --> 

				<div style="clear:both"></div> <!-- Contiene divs flotantes --> 

		</div> <!-- FIN WRAPPER --> 

		<!-- FOOTER --> 
		<?php include '_footer.html'; ?>
	</body>
</html>



<!-- LOCATED WHERE POPUPS ARE
<div class="content-item" style="">
	<div class="overlay"></div>
	<div class="corner-overlay-content">
		<img src="../features/images/fiat-web.png" width="22%"/>
	</div>
	<div class="overlay-content">
		<h2>Nombre de la empresa</h2>
		<p>Texto de la empresa</p>
	</div>
</div>
-->