<?php 
	session_start(); 
	$_SESSION['company'] = fiat; 
	$_SESSION['company_id'] = 9; 
?> 
<!DOCTYPE html>
<html>
	<head>
		<title>Agenda</title>

    	<?php include '../_empresasImports.html'; ?>
   		<link 	rel="stylesheet" 	href="../../../css/agenda.css"											/>
	</head>

	<body>
    	<div class="wrapperMedium">
       		<?php include '../_empresasHeader.html'; 	?>

    		<?php include '../_empresasMenu.html'; 		?>

    		<?php include '../_empresasAgenda.html'; 	?>

    		<?php include '../_empresasFooter.html'; 	?>

    	</div>
	</body>
</html>


<!--
<tr>
	<td class="date_has_event">
		13
		<div class="events">
			<ul>
				<li>
					<span class="title">Event 1</span>
					<span class="desc">Lorem ipsum dolor sit amet, consectetu adipisicing elit.</span>
				</li>
				<li>
					<span class="title">Event 2</span>
					<span class="desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
				</li>
			</ul>
		</div>
	</td>
	<td>14</td>
	<td>15</td>
	<td>16</td>
	<td>17</td>
	<td>18</td>
	<td>19</td>
</tr>
-->