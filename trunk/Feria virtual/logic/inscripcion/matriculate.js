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
   $.ajax({ url: '../../logic/inscripcion/matriculate.php',
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
   if(document.getElementById("dni").value.match(/^\s*$/)){
      alert("Ingrese el DNI");
      return;
   }
   $.ajax({ url: '../../logic/inscripcion/matriculate.php',
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
        $("#matricularUsuario").append("<span style='text-align: center'><input type='submit' name='submit' value='Desmatricular' class='button' onclick='unmatriculateUser()' style='margin-right:  3%'></span>");
        $("#matricularUsuario").append("<span style='text-align: center'><input type='submit' name='submit' value='Volver' class='button' onclick='back()'></span>");
    
    }else{
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>Nombre</strong>:   "+obj.name+"</span><br><br>");
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>DNI</strong>:   "+obj.dni+"</span><br><br>");
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>E-mail</strong>:   "+obj.email+"</span><br><br>");
        $("#matricularUsuario").append("<span class='leftSide' style='text-align: center'><strong>Titulo</strong>:   "+obj.title+"</span><br><br>");
        $("#matricularUsuario").append("<p id='nonmatriculatedUser'>Usuario no matriculado</p><br>");
        $("#matricularUsuario").append("<span style='text-align: center'><input type='submit' name='submit' value='Matricular' class='button' onclick='matriculateUser()' style='margin-right:  3%'></span>");
        $("#matricularUsuario").append("<span style='text-align: center'><input type='submit' name='submit' value='Volver' class='button' onclick='back()'></span>");
    
    }
           
}

function unmatriculateUser(){
     $.ajax({ url: '../../logic/inscripcion/matriculate.php',
            data: {action:                 "unmatriculate",
                   dni:                     document.getElementById("dni").value,
                 },
            type: 'POST',
            success: function(output){
                  alert(output);
                  //document.getElementById("verificarUsuario").style.display='inline';
                  $("#matricularUsuario").empty();
                  checkUser();
            }
    });
}

function matriculateUser(){
    $.ajax({ url: '../../logic/inscripcion/matriculate.php',
            data: {action:                 "matriculate",
                   dni:                     document.getElementById("dni").value,
                 },
            type: 'POST',
            success: function(output){
                  alert(output);
                  //document.getElementById("verificarUsuario").style.display='inline';
                  $("#matricularUsuario").empty();
                  checkUser();
            }
    });
}

function back () {
    $("#matricularUsuario").empty();
    document.getElementById("dni").value = "";
    document.getElementById("verificarUsuario").style.display='inline';
}