function postularse(){
	if(document.getElementById("numero_de_documento").value.match(/^\s*$/)){
		alert("Ingrese su numero de documento");
		return;
	}
	if(document.getElementById("contraseña").value.match(/^\s*$/)){
		alert("Ingrese su contraseña");
		return;
	}
	var offerId = getOfferId();
	$.ajax({ url: '../../../logic/php/saveJobOfferApplication.php',
            data: {userDni:                	document.getElementById("numero_de_documento").value,
                   password:           		document.getElementById("contraseña").value,
                   jobOfferId: 		   	offerId,
                 },
            type: 'POST',
            success: function(output){
                if(output == "Exito"){
                	alert("Te postulaste exitosamente a la oferta laboral");
                }else{
                	alert(output);
                }
            }
        });
	
}
function checkNumeric(target)
{
  if(target.value.length > 0 && isNaN(target.value))
  {
    alert("Este campo no admite letras, sólo números");
    if(previousTarget != target)
      previous = "";
    target.value = previous;
  }
  else
  {
    previous = target.value;
    previousTarget = target;
  }
}

function forgotPassword(){
	parent.$.fancybox.close();
    	window.open("http://encontramas.com.ar/virtual/pages/Inscripcion/forgotPassword.html");
}