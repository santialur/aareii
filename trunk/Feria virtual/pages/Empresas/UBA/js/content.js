$( document ).ready(function()
{
	var webpage		=  "home.econ.uba.ar/economicas/posgrado";
	var name		=  "Escuela de Estudios de Posgrado - FCE UBA";
	var slogan		=  "100 años de enseñanza garantizan nuestra Facultad";
	var title 		=  "Escuela de Estudios de Posgrado - Universidad de Buenos Aires";
	var description =  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);	
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});