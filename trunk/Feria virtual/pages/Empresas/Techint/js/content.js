$( document ).ready(function()
{
	var webpage		= "www.techint.com";
	var name		=  "Organización Techint";
	var slogan		=  "Tu futuro depende de vos. Tu futuro empieza con T.";
	var title 		=  "ORGANIZACIÓN TECHINT";
	var description 	=  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});