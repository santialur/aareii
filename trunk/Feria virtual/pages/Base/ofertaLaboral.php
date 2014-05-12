<?php
header('Content-Type: text/html; charset=UTF-8'); 
?>
<html>
	<head>
		<?php include '_imports.html'; ?>

	  	<script type="text/javascript"	src="../../logic/js/ofertaLaboral.js"></script>
	  	<link rel="stylesheet" type="text/css" href="../../css/ofertaLaboral.css" />
	  	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	  	<!-- FANCYBOX --> 
		<link 	type="text/css"			rel="stylesheet" href="../../features/fancybox/source/jquery.fancybox.css"  media="screen"/>
		<script type="text/javascript" 	src="../../features/fancybox/source/jquery.fancybox.pack.js"></script>
				
		<script language="javascript" type="text/javascript">
			$(document).ready(function(){
				$(".ifancybox").fancybox({
					'width'			: 	'100%',
		 			'height'		: 	'10%',
		 			'autoSize'		: 	'false',
		 			'fitToView'		: 	'false',
		 			'type' 			: 	'iframe'
				});
				$(".postularFancybox").fancybox({
					'width'			: 	'40%',
		 			'height'		: 	'10%',
		 			'autoSize'		: 	'false',
		 			'fitToView'		: 	'false',
		 			'type' 			: 	'iframe'
				});
			});
		</script>
	</head>


	<body>
			<!-- MENU --> 
			<?php include '_menu.html'; ?>

			<!-- CONTENIDO --> 
			<div id="content" style="padding-bottom:22%">
				<div style="margin: 0 auto; padding: 0.5% 4%">
			        <table id="tableOutput">
				        <thead>
					        <tr>
					        	<th>Empresa					</th>
						        <th>Puesto					</th>
						        <th>Descripcion				</th>
						        <th>Areas de conocimiento	</th>
						        <th>Estudios minimos		</th>
						        <th>Lenguajes				</th>
						        <th>Tipo de contrato		</th>
						        <th>Jornada de trabajo		</th>
						        <th>Acciones 				</th>
					        </tr>
				        </thead>
				        <tbody style="height: 400px; overflow: auto">
				        </tbody>
			        </table>
				</div>
			</div>
			
			<!-- FOOTER --> 
			<?php include '_footer.html'; ?>
	</body>

</html>