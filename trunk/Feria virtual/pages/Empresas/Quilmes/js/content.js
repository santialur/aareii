$( document ).ready(function()
{
	var webpage		= "www.quilmes.com.ar";
	var name		=  "Cerveceria y Malteria Quilmes";
	var slogan		=  "El Sabor del Encuentro";
	var title 		=  "CERVECERIA Y MALTERIA QUILMES";
	var description 	=  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);	
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});