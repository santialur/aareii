$( document ).ready(function()
{
	var webpage		= "www.astoriestructuras.com";
	var name		=  "Astori Estructuras";
	var slogan		=  "";
	var title 		=  "ASTORI ESTRUCTURAS";
	var description =  "Astori Estructuras S.A., ha desarrollado en su 36 años de labor en el país, una amplia gama de elementos premoldeados de hormigón, para dar solución arquitectónica, técnica y económica a una gran variedad de proyectos. Entre las diez (10) mil obras en las que fueron usados elementos premoldeados de Astori se cuentan, industrias, supermercados, comercios, clubes,  estacionamientos, terminales de ómnibus, estaciones de servicio, oficinas, capillas, tribunas de estadios, hangares, pabellones para exposiciones, silos, escuelas, etc. ";

	$('#brandWebpage').attr("href", webpage);
	$('#brandSlogan').html(slogan);
	$('#brandName').html(name);
	$('#companyTitle').html(title);
	$('#companyDescription').html(description);
});