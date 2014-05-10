$( document ).ready(function()
{
	var webpage		= "www.unilever.com.ar";
	var name		=  "Unilever";
	var slogan		=  "Trabajamos para crear un futuro mejor cada día. Ayudamos a la gente a sentirse bien, lucir bien y aprovechar más la vida.";
	var title 		=  "UNILEVER";
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