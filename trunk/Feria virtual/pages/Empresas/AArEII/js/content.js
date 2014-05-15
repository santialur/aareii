$( document ).ready(function()
{
	var webpage		= "www.aareii.org.ar";
	var name		=  "Asoc. Arg. de Estudiantes de Ing. Industrial y carreras afines";
	var slogan		=  "Los logros nacen cuando nos atrevemos a comenzar";
	var title 		=  "Asociación Argentina de Estudiantes de Ingeniería Industrial y carreras afines";
	var description 	=  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);
	$('#brandSlogan').css('text-transform', 'none');		
	$('#brandSlogan').css('font-size', '1.07vw');	
	$('#brandSlogan').css('margin-top', '5%');	
	$('.headerInfo').css('margin-left', '1.75%');		
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});