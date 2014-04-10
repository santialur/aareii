<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Quienes somos?</title>
		<meta 	name="description" 	content="This is page-header (.page-header &gt; h1)" />
		<meta 	name="viewport" 	content="width=device-width, initial-scale=1.0" />

		<link 	rel="stylesheet"	href="../../lib/bootstrap/css/bootstrap.min.css" 				 				/>
		<link 	rel="stylesheet"	href="../../lib/bootstrap/css/bootstrap-responsive.min.css" 					/>
		<link 	rel="stylesheet" 	href="../../features/themes/font-awesome/css/font-awesome.min.css" 			/>
		<link 	rel="stylesheet"	href="../../css/empresaStyles.css"  											/> 
		
		<script src="../../js/jquery-1.10.2.js" 	type="text/javascript"> 								</script>
		<script>
			$(document).ready(function() {
				var h = $("#content").height();
				$("#sideMenu").height(h);
			});
		</script>
	</head>

	<body>
    	<div class="wrapperMedium">
    		<div id="header">
    			<img id="aareiiLogo" src="../../features/images/AAREII-logo.png" border="0" height="90" width="60">
    		</div>

    		<?php include '../sideMenu.html'; ?>

    		<div id="content">
    			<div style="margin: 0 auto; padding: 5% 10%">
	    			<div>
	                    <img src="../../features/images/Cartel.PNG"/>
	                </div>
	                <br />

	                <div style="text-align:center" class="textBoxes">
	                    <p>
	                        <h2>Asociacion Argentina de Estudiantes de 
	                        Ingenieria Industrial y carreras a fines</h2>
	                    </p>
	                </div>
	                
	                <br />
	                <div style="text-align:justify" class="textBoxes">
	                    <p>
	                        La Asociación Argentina de Estudiantes de Ingeniería Industrial y carreras afines es una asociación civil sin fines de lucro, que persigue como fines:
							Apoyar logo q esla organización y realización del Congreso Argentino de Estudiantes de Ingeniería Industrial y carreras afines (CAEII), cumpliendo con los reglamentos del mismo.
    						Intercambiar con la comunidad conocimientos y experiencias, pregonando la continua vinculación entre la Universidad y la sociedad.
    						Promover el crecimiento y la formación integral de todos los estudiantes de Ingeniería Industrial del país, permitiendo conocer, interpretar y transformar la realidad nacional, latinoamericana e internacional, a través de mecanismos de amplio carácter participativo.
    						Contribuir al perfeccionamiento de la carrera de Ingeniería Industrial.
    						Promover la práctica y la investigación científica de los estudiantes de Ingeniería Industrial en el país.
    						Establecer y Mantener el contacto con las distintas entidades que nuclean a estudiantes y profesionales de la Ingeniería Industrial y afines, de nuestro país, Latinoamérica y el mundo entero. 
	                </div>
    			</div>
    		</div>

    		<?php include '../footer.html'; ?>

    	</div>
	</body>
</html>
