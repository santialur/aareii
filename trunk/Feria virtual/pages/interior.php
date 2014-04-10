
<html ng-app="AdminApp">
	<head>
	<jdoc:include type="head" />
		<meta 	name="viewport" content="width=device-width, user-scalable=false">
		<link 	rel=	"stylesheet" 		href="../css/styles.css" 	type="text/css" 	/>
		<link 	rel=	"stylesheet" 		href="../css/SlidesJS.css" 	type="text/css" 	/>
		<link 	rel=	"stylesheet" 		href="../css/marquee.css" 	type="text/css" 	/>

		<!--- POP UP --> 		
	  	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="../js/popup.js"></script>

		<!-- FANCYBOX --> 
		<link 	type="text/css"			rel="stylesheet" href="../features/fancybox/source/jquery.fancybox.css"  media="screen"/>
		<script type="text/javascript" 	src="../features/fancybox/source/jquery.fancybox.pack.js"></script>
				
		<script language="javascript" type="text/javascript">
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
		
		<script type="text/javascript" src="../lib/bootstrap/js/bootstrap.min.js"></script>

		<!-- SLIDES JS --> 
	  	<script src="../lib/SlidesJS-3/jquery.slides.min.js"></script>

	  	<script>
	    	$(function(){
	      		$('#slides').slidesjs({
	        		width: 	840,
        			height: 540,
        			play: {
	          			active: false,
	          			auto: true,
	          			interval: 5000,
	          			effect: 'fade',
	          			swap: true,
	          			restartDelay: 2500
        			},
        			navigation: {
        				active: false
        			}
	      		});
	    	});
	  	</script>

	  	<!-- MARQUESINA --> 
	  	<script type="text/javascript" src="../js/itemMarquee.js"></script>

	 	<!-- NEWS --> 
		<script type="text/javascript" src="../js/functions.js"></script>

		<!-- EXTRA --> 
	  	<!--<script src="../lib/angular/angular.min.js"></script>-->
  		<script src="../js/controllers.js"></script>
	</head>


	<body>
			<!-- MENU --> 
			<?php include 'menu.html'; ?>

			<!-- CONTENIDO -->
			<div class="wrapper" align="center">
				<div id="content" class="box" style="height: 110%">
					
					<!-- BLOQUE IZQUIERDO --> 
					<div id="bloqueIzquierdo" class="leftSide" style="width: 70%; height:100%">

						<!-- MARQUESINA -->
						<div style="margin-bottom: 5%">
							<ul class="itemMarquee">
							  	<li><img src="../features/images/arcor-web.png"/>		</li>
						  		<li><img src="../features/images/quilmes-web.png"/>		</li>
						  		<li><img src="../features/images/faber-web.png"/>		</li>
						  		<li><img src="../features/images/unilever-web.png"/>	</li>
						  		<li><img src="../features/images/invap-web.png"/>		</li>
							</ul>
						</div>

						<!-- CROQUIS --> 
						<div align="center" style="position: relative;">
							<img src="../features/images/interior.jpg" id="imgMap" width="100%"/>
							
							<a class="ifancybox" href="empresa1.html" ><img src="../features/images/a1.png" id="trigger" /></a>
							<div id="pop-up">
								<img src="../features/images/fiat-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Automotriz</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/a2.png" id="trigger2" /></a>
							<div id="pop-up2">
								<img src="../features/images/arcor-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Alimenticio</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/a3.png" id="trigger3" /></a>
							<div id="pop-up3">
								<img src="../features/images/astori-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Construcci&oacuten</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/a4.png" id="trigger4" /></a>
							<div id="pop-up4">
								<img src="../features/images/quilmes-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Bebidas</p>
							</div>

							<a class="ifancybox" href="empresa1.html" ><img src="../features/images/b1.png" id="trigger5" /></a>
							<div id="pop-up5">
								<img src="../features/images/unilever-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Varios</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/b2.png" id="trigger6" /></a>
							<div id="pop-up6">
								<img src="../features/images/invap-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Tecnolog&iacutea</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/b3.png" id="trigger7" /></a>
							<div id="pop-up7">
								<img src="../features/images/pae-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Energ&iacutea</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/b4.png" id="trigger8" /></a>
							<div id="pop-up8">
								<img src="../features/images/penaflor-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Bodegas y Bebidas</p>
							</div>

							<a class="ifancybox" href="empresa1.html" ><img src="../features/images/c1.png" id="trigger9" /></a>
							<div id="pop-up9">
								<img src="../features/images/faber-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: &Uacutetiles y materiales de oficina y arte</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/c2.png" id="trigger10" /></a>
							<div id="pop-up10">
								<img src="../features/images/techint-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Holding</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/c3.png" id="trigger11" /></a>
							<div id="pop-up11">
								<img src="../features/images/uba-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Educaci&ocauten</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/c4-cortado.png" id="trigger12" /></a>
							<div id="pop-up12">
								<img src="../features/images/quilmes-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Bebidas</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/d1.png" id="trigger13" /></a>
							<div id="pop-up13">
								<img src="../features/images/quilmes-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Bebidas</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/d2.png" id="trigger14" /></a>
							<div id="pop-up14">
								<img src="../features/images/quilmes-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Bebidas</p>
							</div>

							<a class="ifancybox" href=".html" ><img src="../features/images/e1.png" id="trigger15" /></a>
							<div id="pop-up15">
								<img src="../features/images/quilmes-web.png" width="60%"/></br>
								<p>Horarios: 10:00 a 12:00</p> </br>
								<p>Rubro: Bebidas</p>
							</div>
							<!--
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
						</div>

					</div>

					<!-- BLOQUE DERECHO --> 
					<div id="bloqueDerecho" class="rightSide">

						<!-- COMPARTIR -->
						<div style="margin-top: -10%"> 
							<h4 class="titles">COMPARTIR</h4>
							<div class="Social" style="margin: -5% 25% 0 0">
								<!-- Facebook -->
								<a href="http://www.facebook.com/sharer.php?u=http://www.encontramas.com.ar/virtual/pages/interior" target="_blank">
									<img src="http://www.simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
								</a>
								<!-- Twitter -->
								<a href="http://twitter.com/share?url=http://www.encontramas.com.ar&text=Encontra+" target="_blank">
									<img src="http://www.simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter"/>
								</a>
								<!-- Google+ -->
								<a href="https://plus.google.com/share?url=http://www.encontramas.com.ar" target="_blank">
									<img src="http://www.simplesharebuttons.com/images/somacro/google.png" alt="Google" />
								</a>
								<!-- LinkedIn -->
								<a href="http://www.linkedin.com/shareArticle?mini=true&url=http://www.simplesharebuttons.com" target="_blank">
									<img src="http://www.simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
								</a>
								<!-- Pinterest -->
								<a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());">
									<img src="http://www.simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest"/>
								</a>
							</div>
						</div>

						<br><br>

						<!-- NOTICIAS -->
						<div style="margin-bottom: -25%">
							<h2 class="titles">NOTICIAS</h2>

							<!-- SLIDES NOTICIAS --> 
						    <div id="slides">
								<div class="newsBlock" id="nb1"></div>					    	
								<div class="newsBlock" id="nb2"></div>
								<!-- ADD ANOTHER NEWS BLOCK --> 
						    </div>
						</div>
						
						<!-- ENCUESTA --> 
						<div>	
							<h4 class="titles">ENCUESTA</h4>

							<div ng-controller="PollCtrl" style="text-align:left">	
	    						<h4 style="text-align:center">{{poll.title}}</h4>	<br>
								<div ng-repeat="value in poll.values">
									<input type="radio" name="Q1">
									<label >{{value}}</label>	<br>
						    	</div>
						    	<br>
	    					</div>
						</div>

						<button class="button" style="position:static; top:50%">Votar</button>

					</div>



				</div>
				
			</div>
			<div id="footer" class="box centered" >
					<p>	Copyright 2013  AArEII    <br>
						Todos los derechos reservados.
			</div>
	</body>
</html>