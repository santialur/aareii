<!DOCTYPE html>
<html>
	<head>
		<title>Ofertas de Empleo</title>

		<?php include '../_empresasImports.html'; ?>
		<link 	rel="stylesheet" 	href="../../css/ofertas.css"	/>
	</head>

	<body>
    	<div class="wrapperMedium">
            <?php include '../_empresasHeader.html'; ?>

    		<?php include '../_empresasMenu.html'; 	?>

    		<div id="content" style="padding-bottom:22%">
    			<div style="margin: 0 auto; padding: 0.5% 4%">
	                <table id="offerTable">
				        <thead>
					        <tr>
						        <th>Puesto</th><th>Descripcion</th><th>Fecha de Publicacion</th>
					        </tr>
				        </thead>
				        <tbody>
	                        <tr>
						        <td> <h5> <a onclick="myFunction()"> Pasante de Envasado </a></h5></td>
						        <td><h5 style="text-align: left">Nuestra busqueda esta orientada a estudiantes avanzados <br> de Ingenieria Quimica,
	                            <br>Ingenieria electromecanica, Ingenieria Mecanica, Ingenieria<br> Electronica o afines para desarrollarse en nuestra Planta<br> Mendoza. Los...</h5> </td>
						        <td><h5>25-Sep-2013</h5> </td>
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
