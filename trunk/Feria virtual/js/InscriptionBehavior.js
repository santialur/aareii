function callFunction(){
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
    $.ajax({ url: '../js/inscription.php',
           data: {q: document.getElementById("numero_de_documento").value},
           type: 'GET',
           success: function(output) {          
                                  obj = JSON.parse(output);
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
                                  var elem0 = document.getElementsByName("confirme_contraseña")[0];
                                  var elem1 = document.getElementsByName("confirme_contraseña")[1];
                                  elem0.parentNode.removeChild(elem0);
                                  elem1.parentNode.removeChild(elem1);

                                  document.getElementById("contraseña").disabled = false;
                                  document.getElementById("direccion_de_residencia").disabled = false;
                                  document.getElementById("email").disabled = false;
                                  document.getElementById("confirme_email").disabled = false;
                                  document.getElementById("apellido").disabled = false;
                                  document.getElementById("nombre").disabled = false;


                                  document.getElementById("nombre").value = obj.name;
                                  document.getElementById("apellido").value = obj.surname;
                                  document.getElementById("email").value = obj.mail;
                                  document.getElementById("confirme_email").value = obj.mail;
                                  document.getElementById("direccion_de_residencia").value = obj.address;

                                  document.getElementById("fecha_nacimiento_anio").value = obj.birthday.substring(0,4);
                                  document.getElementById("fecha_nacimiento_mes").value = obj.birthday.substring(6,7);
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
                                                          

                              }
    });
}
