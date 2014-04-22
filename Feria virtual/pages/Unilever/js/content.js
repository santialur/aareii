$( document ).ready(function()
{
	var webpage		= "www.unilever.com.ar";
	var name		=  "Unilever";
	var slogan		=  "";
	var title 		=  "UNILEVER";
	var description =  "Unilever es uno de los proveedores líderes del mundo de productos de consumo. Te contamos algunos acontecimientos importantes de nuestras dos divisiones globales –Alimentos y Cuidado del Hogar & Personal–, en todo el mundo."

	$('#brandWebpage').attr("href", webpage);
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});