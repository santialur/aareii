$( document ).ready(function()
{
	var webpage		=  "http://www.iae.edu.ar/programas/JAP/Paginas/ContenidoAcademico.aspx";
	var name		=  "Jóvenes de Alto Potencial - IAE Business School";
	var slogan		=  "Tu primer paso en educación ejecutiva";
	var title 		=  "Jóvenes de Alto Potencial - IAE Business School";
	var description =  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);	
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});