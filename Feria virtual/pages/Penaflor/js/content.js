$( document ).ready(function()
{
	var webpage		= "www.penaflor.com.ar";
	var name		=  "Grupo Pe&ntildeaflor";
	var slogan		=  "Bodegas Argentinas L&iacutederes";
	var title 		=  "GRUPO PE&NtildeAFLOR";
	var description =  "Somos un grupo de Bodegas argentinas, de gran prestigio, reconocido como uno de los diez primeros productores de vino a nivel mundial. A través de nuestras Bodegas, ofrecemos al consumidor la más amplia gama de vinos argentinos. Creemos en el valor de nuestras marcas y respondemos a las exigencias del mercado. Como organización, valoramos las relaciones profundas y duraderas, y por ello nos enfocamos en asumir una conducta transparente, ética y responsable en nuestros vínculos con empleados, proveedores y clientes. Trabajamos en equipo y con pasión, y nos comprometemos día a día en la gestión de nuestros objetivos."

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});