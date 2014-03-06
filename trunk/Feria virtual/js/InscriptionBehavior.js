var newUser = false;

function createNewUser(){

      enableInputs();
      document.getElementsByName("confirme_contraseña")[0].style.display = 'block';
      document.getElementsByName("confirme_contraseña")[1].style.display = 'block';

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
      document.getElementById("confirme_contraseña").value = "";
      document.getElementById("contraseña").value = "";
      document.getElementById("direccion_de_residencia").value = "";
      document.getElementById("email").value = "";
      document.getElementById("confirme_email").value = "";
      document.getElementById("apellido").value = "";
      document.getElementById("nombre").value = "";
      document.getElementById("numero_de_documento").value = "";
      newUser = true;
}

function enableInputs(){

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
       document.getElementById("confirme_contraseña").disabled = false;
      document.getElementById("contraseña").disabled = false;
      document.getElementById("direccion_de_residencia").disabled = false;
      document.getElementById("email").disabled = false;
      document.getElementById("confirme_email").disabled = false;
      document.getElementById("apellido").disabled = false;
      document.getElementById("nombre").disabled = false;
}

 function checkUser(){
    if(document.getElementById("numero_de_documento").value == ""){
      alert("Ingrese su numero de documento");
    }else{
      $.ajax({ url: '../js/getUserBasicInformation.php',
           data: {dni: document.getElementById("numero_de_documento").value},
           type: 'GET',
           success: function(output) {       
                                  if(output == "[]"){

                                    alert("El usuario no existe, cree uno nuevo");
                                    createNewUser();

                                  }else{
                                  alert(output);
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


        document.getElementById("aareiiInscription").style.display = 'none';
        document.getElementById("encontramasInscription").style.display = 'inline-table';        

/*      if(newUser){
            if(document.getElementById("confirme_contraseña").value == document.getElementById("contraseña").value){
              if(document.getElementById("confirme_email").value == document.getElementById("email").value){
                $.ajax({ url: '../js/sendUserInformation.php',
                     data: {user:               "newUser",
                            dni:                document.getElementById("numero_de_documento").value,
                            name:               document.getElementById("nombre").value,
                            surname:            document.getElementById("apellido").value, 
                            email:              document.getElementById("confirme_email").value, 
                            residenceAddress:   document.getElementById("direccion_de_residencia").value,
                            password:           document.getElementById("confirme_contraseña").value,
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

                     }
                   });
              }else{
                alert("Las direcciones de e-mail no coinciden");
              }
              
            }else{
                alert("Las contraseñas no coinciden");
            }
            

      }else{
           $.ajax({ url: '../js/sendUserInformation.php',
                     data: {user:               "user",
                            dni:                document.getElementById("numero_de_documento").value,
                            name:               document.getElementById("nombre").value,
                            surname:            document.getElementById("apellido").value, 
                            email:              document.getElementById("confirme_email").value, 
                            residenceAddress:   document.getElementById("direccion_de_residencia").value,
                            password:           document.getElementById("contraseña").value,
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

                     }
                   });
      }*/

}