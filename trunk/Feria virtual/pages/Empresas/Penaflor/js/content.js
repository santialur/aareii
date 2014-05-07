$( document ).ready(function()
{
	var webpage		= "www.penaflor.com.ar";
	var name		=  "Grupo Pe&ntildeaflor";
	var slogan		=  "Bodegas Argentinas L&iacutederes";
	var title 		=  "GRUPO PE&NtildeAFLOR";
	var description 	=  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});