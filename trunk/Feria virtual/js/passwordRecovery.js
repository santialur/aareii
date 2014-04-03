function getCode(){
	 if(document.getElementById("dni").value.match(/^\s*$/)){
      alert("Ingrese su numero de documento");
      return;
   }
   if(document.getElementById("email").value.match(/^\s*$/)){
      alert("Ingrese su email");
      return;
   }
	$.ajax({ url: '../js/passwordRecovery.php',
			 data: {state: 				 "Forgot password",
			 		dni:                 document.getElementById("dni").value,
                    email:               document.getElementById("email").value,
                 },
            type: 'POST',
            success: function(output){
            	if(output == "No tenemos registrado usuarios con esta direccion de email y dni"){
            		alert(output);
            	}
            	else{
            		alert(output);
            		window.location.href = "../pages/recoveryPassword.html";
            	}
            	
            }
        });
}

function ChangePassword(){
    if(document.getElementById("dni").value.match(/^\s*$/)){
	  alert("Ingrese su numero de documento");
	  return;
    }
    if(document.getElementById("email").value.match(/^\s*$/)){
      alert("Ingrese su email");
      return;
    }
    if(document.getElementById("code").value.match(/^\s*$/)){
      alert("Ingrese el codigo que enviamos a su direccion de email");
      return;
    }
    if(document.getElementById("new_password").value.match(/^\s*$/) || document.getElementById("confirm_password").value.match(/^\s*$/)){
      alert("Ingrese su nueva contraseña");
      return;
    }
    if(document.getElementById("new_password").value.match(/^\s*$/) != document.getElementById("confirm_password").value.match(/^\s*$/)){
      alert("Las contraseñas no coinciden");
      return;
    }
	$.ajax({ url: '../js/passwordRecovery.php',
			 data: {state: 				 "Create password",
			 		dni:                 document.getElementById("dni").value,
                    email:               document.getElementById("email").value,
                    code: 				 document.getElementById("code").value,
                    password: 			 document.getElementById("new_password").value,
                 },
            type: 'POST',
            success: function(output){
            	if(output == "Contraseña modificada con exito"){
            		alert(output);
            		window.location.href = "../pages/inscripcion.html";
            	}
            	else{
            		alert(output);
            	}
            }
        });
}