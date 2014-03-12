var newUser = false;

function createNewUser(){

      enableInputs();
      
      document.getElementById("nombre").value = "";
      document.getElementById("trabaja").value = "";
      document.getElementById("fecha_nacimiento_anio").value = "0";
      document.getElementById("fecha_nacimiento_mes").value = "0";
      document.getElementById("fecha_nacimiento_dia").value = "0";
      document.getElementById("universidad").value = "";
      document.getElementById("institucion").value = "0";
      document.getElementById("lugar_de_residencia_ciudad").value = "";
      document.getElementById("lugar_de_residencia_provincia").value = "0";
      document.getElementById("lugar_de_residencia_pais").value = "0";
      document.getElementById("telefono_celular").value = "";
      document.getElementById("numero_materias").value = "";
      document.getElementById("carrera").value = "0";
      document.getElementById("confirme_nueva_contraseña").value = "";
      document.getElementById("contraseña_nueva").value = "";
      document.getElementById("direccion_de_residencia").value = "";
      document.getElementById("email").value = "";
      document.getElementById("confirme_email").value = "";
      document.getElementById("apellido").value = "";
      document.getElementById("nombre").value = "";
      document.getElementById("numero_de_documento").value = "";
      newUser = true;
}

function enableInputs(){

      document.getElementById("password_row").style.display = 'none';
      document.getElementById("buttons").style.display = 'none';
      document.getElementById("name_row").style.display = 'table-row';
      document.getElementById("surname_row").style.display = 'table-row';
      document.getElementById("email_row").style.display = 'table-row';
      document.getElementById("email_confirmation_row").style.display = 'table-row';
      document.getElementById("new_password_row").style.display = 'table-row';
      document.getElementById("password_confirmation_row").style.display = 'table-row';
      document.getElementById("phone_row").style.display = 'table-row';
      document.getElementById("birthday_row").style.display = 'table-row';
      document.getElementById("country_row").style.display = 'table-row';
      document.getElementById("state_row").style.display = 'table-row';
      document.getElementById("city_row").style.display = 'table-row';
      document.getElementById("direction_row").style.display = 'table-row';
      document.getElementById("university_row").style.display = 'table-row';
      document.getElementById("otherUniversity_row").style.display = 'table-row';
      document.getElementById("approvedSubjects_row").style.display = 'table-row';
      document.getElementById("work_row").style.display = 'table-row';
      document.getElementById("sendButton").style.display = 'block';

      document.getElementById("trabaja").disabled = false;
      document.getElementById("fecha_nacimiento_anio").disabled = false;
      document.getElementById("fecha_nacimiento_mes").disabled = false;
      document.getElementById("fecha_nacimiento_dia").disabled = false;
      document.getElementById("universidad").disabled = false;
      document.getElementById("institucion").disabled = false;
      document.getElementById("lugar_de_residencia_ciudad").disabled = false;
      document.getElementById("lugar_de_residencia_provincia").disabled = false;
      document.getElementById("lugar_de_residencia_pais").disabled = false;
      document.getElementById("telefono_celular").disabled = false;
      document.getElementById("numero_materias").disabled = false;
      document.getElementById("carrera").disabled = false;
      document.getElementById("direccion_de_residencia").disabled = false;
      document.getElementById("email").disabled = false;
      document.getElementById("confirme_email").disabled = false;
      document.getElementById("apellido").disabled = false;
      document.getElementById("nombre").disabled = false;
      document.getElementById("contraseña_nueva").disabled = false;
      document.getElementById("confirme_nueva_contraseña").disabled = false;

}

 function checkUser(){
    if(document.getElementById("numero_de_documento").value == ""){
      alert("Ingrese su numero de documento");
    }else if(document.getElementById("contraseña").value == ""){
      alert("Contraseña invalida");
    }else{
      $.ajax({ url: '../js/getUserBasicInformation.php',
           data: {dni: document.getElementById("numero_de_documento").value,
                  password: document.getElementById("contraseña").value},
           type: 'GET',
           success: function(output) {       
                                  if(output == "Baddni"){

                                    alert("El usuario no existe, cree uno nuevo");
                                    createNewUser();

                                  }else if(output == "Badpass"){
                                    alert("La contraña ingresada no es correcta");
                                  }else{

                                    obj = JSON.parse(output);
                                    
                                    enableInputs();

                                    document.getElementsByName("confirme_contraseña")[0].style.display = 'none';
                                    document.getElementsByName("confirme_contraseña")[1].style.display = 'none';

                                    document.getElementById("nombre").value = obj.name;
                                    document.getElementById("apellido").value = obj.surname;
                                    document.getElementById("email").value = obj.mail;
                                    document.getElementById("confirme_email").value = obj.mail;
                                    document.getElementById("direccion_de_residencia").value = obj.address;

                                    document.getElementById("fecha_nacimiento_anio").value = obj.birthday.substring(0,4);
                                    document.getElementById("fecha_nacimiento_mes").value = obj.birthday.substring(5,7);
                                    document.getElementById("fecha_nacimiento_dia").value = obj.birthday.substring(8,10);

                                    document.getElementById("carrera").value = obj.career;
                                    document.getElementById("numero_materias").value = obj.subjects_approved;
                                    document.getElementById("telefono_celular").value = obj.phone;
                                    document.getElementById("lugar_de_residencia_pais").value = obj.country;
                                    document.getElementById("lugar_de_residencia_provincia").value = obj.state;
                                    document.getElementById("lugar_de_residencia_ciudad").value = obj.city;
                                    document.getElementById("institucion").value = obj.university;
                                    if(document.getElementById("institucion").value === ""){
                                      document.getElementById("universidad").value = obj.university;
                                    }

                                    if(obj.work == 1){
                                      document.getElementById("trabaja").value = "Si"
                                    }else{
                                      document.getElementById("trabaja").value = "No";
                                    }
                                                          
                                    newUser = false;
                                }
                            }
                                  
      });
    }
      
}

function sendInformation(){
      if(newUser){
            if(document.getElementById("confirme_nueva_contraseña").value == document.getElementById("contraseña_nueva").value){
              if(document.getElementById("confirme_email").value == document.getElementById("email").value){
                if(document.getElementById("numero_de_documento").value.match(/^\s*$/)){
                  alert("Ingrese su numero de documento");
                  return;
                }
                if(document.getElementById("nombre").value.match(/^\s*$/)){
                  alert("Ingrese su nombre");
                  return;
                }
                if(document.getElementById("apellido").value.match(/^\s*$/)){
                  alert("Ingrese su apellido");
                  return;
                }
                if(document.getElementById("confirme_email").value.match(/^\s*$/)){
                  alert("Ingrese su direccion de email");
                  return;
                }
                if(document.getElementById("contraseña_nueva").value.match(/^\s*$/)){
                  alert("Ingrese su contraseña");
                  return;
                }
                if(document.getElementById("telefono_celular").value.match(/^\s*$/)){
                  alert("Ingrese su telefono de contacto");
                  return;
                }
                if(document.getElementById("fecha_nacimiento_dia").value == "0" || document.getElementById("fecha_nacimiento_mes").value == "0" || document.getElementById("fecha_nacimiento_anio").value == "0"){
                  alert("Ingrese una fecha de nacimiento correcta");
                  return;
                }
                if(document.getElementById("lugar_de_residencia_pais").value == "0"){
                  alert("Ingrese su pais de residencia");
                  return;
                }
                if(document.getElementById("lugar_de_residencia_provincia").value == "0"){
                  alert("Ingrese su provincia de residencia");
                  return;
                }
                if(document.getElementById("lugar_de_residencia_ciudad").value.match(/^\s*$/)){
                  alert("Ingrese su ciudad de residencia");
                  return;
                }
                if(document.getElementById("direccion_de_residencia").value.match(/^\s*$/)){
                  alert("Ingrese su direccion de residencia");
                  return;
                }
                if(document.getElementById("institucion").value == "0" && document.getElementById("institucion").value.match(/^\s*$/)){
                  alert("Ingrese institucion donde estudia");
                  return;
                }
                if(document.getElementById("carrera").value.value.match(/^\s*$/)){
                  alert("Ingrese su carrera de estudio");
                  return;
                }
                if(document.getElementById("numero_materias").value.value.match(/^\s*$/)){
                  alert("Ingrese su carrera de estudio");
                  return;
                }
                $.ajax({ url: '../js/sendUserInformation.php',
                     data: {user:               "newUser",
                            dni:                document.getElementById("numero_de_documento").value,
                            name:               document.getElementById("nombre").value,
                            surname:            document.getElementById("apellido").value, 
                            email:              document.getElementById("confirme_email").value, 
                            residenceAddress:   document.getElementById("direccion_de_residencia").value,
                            password:           document.getElementById("confirme_nueva_contraseña").value,
                            career:             document.getElementById("carrera").value,
                            subjects_approved:  document.getElementById("numero_materias").value,
                            celPhone:           document.getElementById("telefono_celular").value,
                            countryOfResidence: document.getElementById("lugar_de_residencia_pais").value,
                            stateOfResidence:   document.getElementById("lugar_de_residencia_provincia").value,
                            cityOfResidence:    document.getElementById("lugar_de_residencia_ciudad").value,
                            institution:        document.getElementById("institucion").value,
                            dayOfBorn:          document.getElementById("fecha_nacimiento_dia").value,
                            monthOfBorn:        document.getElementById("fecha_nacimiento_mes").value,
                            yearOfBorn:         document.getElementById("fecha_nacimiento_anio").value,
                            work:               document.getElementById("trabaja").value,
                            },
                     type: 'POST',
                     success: function(output) {  
                            alert(output);
                            document.getElementById("aareiiInscription").style.display = 'none';
                            document.getElementById("encontramasInscription").style.display = 'inline-table';
                     }
                   });
              }else{
                alert("Las direcciones de e-mail no coinciden");
              }
              
            }else{
                alert("Las contraseñas no coinciden");
            }
            

      }else{
        if(document.getElementById("contraseña_nueva").value == ""){
           $.ajax({ url: '../js/sendUserInformation.php',
                     data: {user:               "user",
                            dni:                document.getElementById("numero_de_documento").value,
                            name:               document.getElementById("nombre").value,
                            surname:            document.getElementById("apellido").value, 
                            email:              document.getElementById("confirme_email").value, 
                            residenceAddress:   document.getElementById("direccion_de_residencia").value,
                            password:           document.getElementById("contraseña_nueva").value,
                            career:             document.getElementById("carrera").value,
                            subjects_approved:  document.getElementById("numero_materias").value,
                            celPhone:           document.getElementById("telefono_celular").value,
                            countryOfResidence: document.getElementById("lugar_de_residencia_pais").value,
                            stateOfResidence:   document.getElementById("lugar_de_residencia_provincia").value,
                            cityOfResidence:    document.getElementById("lugar_de_residencia_ciudad").value,
                            institution:        document.getElementById("institucion").value,
                            dayOfBorn:          document.getElementById("fecha_nacimiento_dia").value,
                            monthOfBorn:        document.getElementById("fecha_nacimiento_mes").value,
                            yearOfBorn:         document.getElementById("fecha_nacimiento_anio").value,
                            work:               document.getElementById("trabaja").value,

                            },
                     type: 'POST',
                     success: function(output) {  

                            alert(output);
                            document.getElementById("aareiiInscription").style.display = 'none';
                            document.getElementById("encontramasInscription").style.display = 'inline-table';        

                     }
                   });
        }else{
            alert("Ingrese su contraseña");
        }
      }

}