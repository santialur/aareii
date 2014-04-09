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


function checkAdminUser(){
   if(document.getElementById("nombre_usuario").value.match(/^\s*$/)){
      alert("Ingrese nombre de usuario");
      return;
   }
   if(document.getElementById("contraseña").value.match(/^\s*$/)){
      alert("Ingrese su contraseña");
      return;
   }
   $.ajax({ url: '../js/matriculate.php',
            data: {userType:               "admin", 
                   user:                   document.getElementById("nombre_usuario").value,
                   password:               document.getElementById("contraseña").value,
                 },
            type: 'POST',
            success: function(output){
              if(output == "Usuario administrador"){
                  document.getElementById("user_div").style.display='none';
                  document.getElementById("verificarUsuario").style.display='inline';
                  document.getElementById("password_div").style.display='none';
                  document.getElementById("buttons").style.display='none';
              }
            }
    });
}

function checkUser(){
   if(document.getElementById("nombre_usuario").value.match(/^\s*$/)){
      alert("Ingrese nombre de usuario");
      return;
   }
   if(document.getElementById("contraseña").value.match(/^\s*$/)){
      alert("Ingrese su contraseña");
      return;
   }
   $.ajax({ url: '../js/matriculate.php',
            data: {userType:               "user",
                   user:                   document.getElementById("dni").value,
                 },
            type: 'POST',
            success: function(output){
              if(output == "Usuario no registrado"){
                  alert(output);
                  
              }else{
                document.getElementById("matriculateButton").style.display='none';
                alert(output);
                //$("#LoadedCurriculum").append("<p>No tienes un curriculum cargado</p><br>");
                //$("#LoadedCurriculum").append("<span style='text-align: center'><input type='submit' name='submit' value='Subir CV' class='button' onclick='uploadNewCurriculum()'></span>");
              
              }
            }
    });
}