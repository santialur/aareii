$( document ).ready(function()
{
	var webpage		= global.mondelezinternational.com/ar";
	var name		=  "MONDELEZ INTERNATIONAL";
	var slogan		=  "";
	var title 		=  "MONDELEZ INTERNATIONAL";
	var description =  "<iframe src='descripcion.html' scrolling='yes' frameborder='0' width='100%' height='400px'></iframe>";

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);	
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});