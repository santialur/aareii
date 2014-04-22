$( document ).ready(function()
{
	var webpage		= "www.fiat.com.ar";
	var name		=  "Fiat Chrysler Automobiles";
	var slogan		=  "";
	var title 		=  "FIAT CHRYSLER AUTOMOBILES";
	var description =  "Fiat Chrysler Automobiles es un grupo automovilístico italo-estadounidense propuesto por el consejo de administración del grupo italiano Fiat S.p.A. tras la adquisición en enero de 20141 de la totalidad del grupo estadounidense Chrysler Group LLC. "
	
	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});