$( document ).ready(function()
{
	var webpage		= "www.pan-energy.com";
	var name		=  "Pan American Energy";
	var slogan		=  "Suma tu energía";
	var title 		=  "PAN AMERICAN ENERGY";
	var description =  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});