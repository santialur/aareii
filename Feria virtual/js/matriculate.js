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
                document.getElementById("verificarUsuario").style.display='none';
                prepareEnrollment(output);
              }
            }
    });
}

function prepareEnrollment(userInfo){
    var obj = JSON.parse(userInfo);
    if(obj.matriculated == "1"){
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>Nombre</strong>:   "+obj.name+"</span><br><br>");
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>DNI</strong>:   "+obj.dni+"</span><br><br>");
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>E-mail</strong>:   "+obj.email+"</span><br><br>");
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>Titulo</strong>:   "+obj.title+"</span><br><br>");
        $("#matricularUsuario").append("<p id='matriculatedUser'>Usuario matriculado</p><br>");
        $("#matricularUsuario").append("<span style='text-align: center'><input type='submit' name='submit' value='Desmatricular' class='button' onclick='unmatriculateUser(obj.dni)'></span>");
    }else{
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>Nombre</strong>:   "+obj.name+"</span><br><br>");
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>DNI</strong>:   "+obj.dni+"</span><br><br>");
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>E-mail</strong>:   "+obj.email+"</span><br><br>");
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>Titulo</strong>:   "+obj.title+"</span><br><br>");
        $("#matricularUsuario").append("<p id='nonmatriculatedUser'>Usuario no matriculado</p><br>");
        $("#matricularUsuario").append("<span style='text-align: center'><input type='submit' name='submit' value='Matricular' class='button' onclick='matriculateUser(obj.dni)'></span>");
    
    }
    //$("#LoadedCurriculum").append("<p>No tienes un curriculum cargado</p><br>");
    //$("#LoadedCurriculum").append("<span style='text-align: center'><input type='submit' name='submit' value='Subir CV' class='button' onclick='uploadNewCurriculum()'></span>");
              
}

function unmatriculateUser(dni){

}

function matriculateUser(dni){
    $.ajax({ url: '../js/matriculate.php',
            data: {action:                 "matriculate",
                   dni:                     dni,
                 },
            type: 'POST',
            success: function(output){
              if(output == "Usuario no registrado"){
                  alert(output);
                  
              }else{
                document.getElementById("verificarUsuario").style.display='none';
                prepareEnrollment(output);
              }
            }
    });
}