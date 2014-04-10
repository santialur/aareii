<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Multimedia</title>
		<meta 	name="description" content="This is page-header (.page-header &gt; h1)" />
		<meta 	name="viewport" content="width=device-width, initial-scale=1.0" />

		<link 	rel="stylesheet"	href="../../lib/bootstrap/css/bootstrap.min.css" 				 				/>
		<link 	rel="stylesheet"	href="../../lib/bootstrap/css/bootstrap-responsive.min.css" 					/>
		<link 	rel="stylesheet" 	href="../../features/themes/font-awesome/css/font-awesome.min.css" 			/>
		<link 	rel="stylesheet"	href="../../css/empresaStyles.css"  											/> 
		<link 	rel="stylesheet" 	href="../../features/themes/css/masterOfertaEmpleo.css"						/>

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
    			<img src="../../features/images/AAREII-logo.png" border="0"  height="90" width="60" style="position: relative; top:10px; left: 20px; z-index:0;" >
    		</div>

    		<?php include '../sideMenu.html'; ?>

    		<div id="content">
    			<div style="margin: 20px 210px">
    				<br>
	              	<video width="320" height="240" controls>
						<source src="../../features/video/Quilmes-Trabajos.mp4" type="video/mp4">
					</video>
					<br>
					<video width="320" height="240" controls>
						<source src="../../features/video/Quilmes-Hipotesis.mp4" type="video/mp4">
					</video>
    			</div>
    		</div>

    		<?php include '../footer.html'; ?>

    	</div>
	</body>

</html>
