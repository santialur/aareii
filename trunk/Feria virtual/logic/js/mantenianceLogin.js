function checkUser(){

   $.ajax({ url: '../../logic/php/loginManteniance.php',
            data: {action:                 "checkUser",
                   user:                   document.getElementById("identification").value,
                   password:               document.getElementById("contraseña").value,
                 },
            type: 'POST',
            success: function(output){
                if(output == "Usuario no registrado"){
                  alert(output);
                  return;
                }else{
                  window.location = 'http://www.encontramas.com.ar/virtual/pages/Mantenimiento/cargaNoticiasEncuestas.php';
                }
            }
          });
}
$(document).keypress(function(e) {
    if(e.which == 13) {
        checkUser();
    }
});