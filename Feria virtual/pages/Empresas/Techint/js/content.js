$( document ).ready(function()
{
	var webpage		= "www.techint.com";
	var name		=  "Techint";
	var slogan		=  "";
	var title 		=  "TECHINT";
	var description =  'Compagnia Tecnica Internazionale" – pronto denominada TECHINT por su abreviatura telegráfica – se fundó en 1945 como compañía internacional. Su fundador fue Agostino Rocca, ingeniero, gerente y empresario innovador, y una fuerza clave en el desarrollo de la industria metalúrgica italiana de los años 30.';

	$('#brandWebpage').html(webpage);
	$('#brandWebpage').attr("href", "http://" + webpage);
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});