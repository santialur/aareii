function checkCompany(){

   $.ajax({ url: '../../logic/php/loginCompany.php',
            data: {action:                 "checkCompany",
                   company:                document.getElementById("identification").value,
                   password:               document.getElementById("contraseña").value,
                 },
            type: 'POST',
            success: function(output){
                if(output == "Compania no registrada"){
                  alert(output);
                  return;
                }else{
                  window.location = 'http://www.encontramas.com.ar/virtual/pages/Administracion/publicacionOfertas.php';
                }
            }
          });
}