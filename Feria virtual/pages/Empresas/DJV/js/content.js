$( document ).ready(function()
{
	var webpage		= "www.djvsrl.com";
	var name		=  "Snack";
	var slogan		=  "Preferidos en todo lugar";
	var title 		=  "SNACK";
	var description =  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage + "/nosotros.php");	
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});