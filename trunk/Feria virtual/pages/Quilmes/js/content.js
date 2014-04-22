$( document ).ready(function()
{
	var webpage		= "www.quilmes.com.ar";
	var name		=  "Cerveceria y Malteria Quilmes";
	var slogan		=  "El Sabor del Encuentro";
	var title 		=  "CERVECERIA Y MALTERIA QUILMES";
	var description =  "Cervecería y Maltería Quilmes es una de las compañías de bebidas más importantes de la región. Produce, elabora, distribuye y comercializa cervezas, gaseosas, aguas minerales, jugos e isotónicos, en alianza con empresas internacionales líderes como PepsiCo y Nestlé. La Compañía tiene una dotación de 5.278 empleados en su Estructura Central,  5 cervecerías, 1 maltería, 1 chacra de lúpulo, 3 plantas de elaboración de gaseosas, 1 planta de insumos, 9 centros de distribución y 9 oficinas de venta directa. Además, cuenta con una red de 192 distribuidores independientes. Un plan de inversiones de 3.000 millones de pesos en el período 2011/2015, exportaciones a 29 países y un Programa de Jóvenes Profesionales al cual se han presentado 131.000 postulantes desde 1991, son ejemplos a través de los cuales Cervecería y Maltería Quilmes sigue demostrando su liderazgo hoy como siempre."

	$('#brandWebpage').attr("href", webpage);
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});