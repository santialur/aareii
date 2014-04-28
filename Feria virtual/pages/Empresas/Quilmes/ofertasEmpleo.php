<!DOCTYPE html>
<html>
	<head>
		<title>Ofertas de Empleo</title>

		<?php include '../_empresasImports.html'; ?>
		<link 	rel="stylesheet" 	href="../../../css/ofertasEmpleo.css"	/>
	</head>

	<body>
    	<div class="wrapperMedium">
            <?php include '../_empresasHeader.html'; ?>

    		<?php include '../_empresasMenu.html'; 	?>

    		<div id="content" style="padding-bottom:22%">
    			<div style="margin: 0 auto; padding: 0.5% 4%">
	                <table id="tableOutput">
				        <thead>
					        <tr>
						        <th>Puesto			</th>
						        <th>Descripcion		</th>
						        <th>Fecha de Cierre	</th>
						        <th>Postularse		</th>
					        </tr>
				        </thead>
				        <tbody>
	                        <tr>
						        <td class="cellPosition">
						        	<a onclick="myFunction()"> Pasante de Envasado </a>
						        </td>
						        <td class="cellDescription">
						        		Nuestra busqueda esta orientada a estudiantes avanzados  de Ingenieria Quimica,
	                            		Ingenieria electromecanica, Ingenieria Mecanica, Ingenieria Electronica o afines para desarrollarse en nuestra Planta Mendoza. Los..
	                        	</td>
						        <td>
						        	25-Sep-2013
						        </td>
						        <td>
						        	<button class="button">Post&uacutelese</button>						        	
						        </td>	
					        </tr>
	                        <tr>
						        <td class="cellPosition">
						        	<a onclick="myFunction()"> Pasante de Envasado </a>
						        </td>
						        <td class="cellDescription">
						        		Nuestra busqueda esta orientada a estudiantes avanzados  de Ingenieria Quimica,
	                            		Ingenieria electromecanica, Ingenieria Mecanica, Ingenieria Electronica o afines para desarrollarse en nuestra Planta Mendoza. Los..
	                        	</td>
						        <td>
						        	25-Sep-2013
						        </td>
						        <td>
						        	<button class="button">Post&uacutelese</button>
						        </td>					        
					        </tr>

				        </tbody>
			        </table>

    			</div>
    		</div>
    		
    		<?php include '../_empresasFooter.html'; ?>

    	</div>
	</body>

    <script>
	    function myFunction()
	    {
		    window.open("Postularse.html","popUpWindow",'width=300,height=400,toolbar=0,menubar=0,location=0,status=1,scrollbars=0,resizable=0,left=700,top=300');
		    return false;
	    }
	</script>
</html>
