$( document ).ready(function()
{
	var webpage		= "www.techint.com";
	var name		=  "Techint";
	var slogan		=  "";
	var title 		=  "TECHINT";
	var description 	=  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});