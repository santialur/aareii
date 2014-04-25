$( document ).ready(function()
{
	var webpage		= "www.astori.com.ar";
	var name		=  "Astori Estructuras S.A.";
	var slogan		=  "Construimos. Siempre";
	var title 		=  "ASTORI ESTRUCTURAS S.A.";
	var description =  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);	
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});