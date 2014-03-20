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
      document.getElementById("formFields").style.display = 'block';
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
                                    document.getElementById("numero_de_documento").disabled = true;
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

                                    
                                    document.getElementById("numero_materias").value = obj.subjects_approved;
                                    document.getElementById("telefono_celular").value = obj.phone;
                                    document.getElementById("lugar_de_residencia_pais").value = obj.country;
                                    document.getElementById("lugar_de_residencia_provincia").value = obj.state;
                                    document.getElementById("lugar_de_residencia_ciudad").value = obj.city;
                                    document.getElementById("institucion").value = obj.university;
                                    if(document.getElementById("institucion").value === ""){
                                      document.getElementById("institucion").value = "0";
                                      document.getElementById("universidad").value = obj.university;
                                    }

                                    document.getElementById("carrera").value = obj.career;
                                    if(document.getElementById("carrera").value === ""){
                                      document.getElementById("carrera").value = "0";
                                      document.getElementById("otraCarrera").value = obj.career;
                                    }

                                    if(obj.work == 1){
                                      document.getElementById("trabaja").value = "Si"
                                    }else{
                                      document.getElementById("trabaja").value = "No";
                                    }  
                                    document.getElementById("estado_civil").value = obj.civil_status;        
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
                if(document.getElementById("institucion").value == 0 && document.getElementById("universidad").value.match(/^\s*$/)){
                  alert("Ingrese institucion donde estudia");
                  return;
                }
                if(document.getElementById("carrera").value == 0 &&  document.getElementById("otraCarrera").value.match(/^\s*$/)){
                  alert("Ingrese su carrera de estudio");
                  return;
                }
                if(document.getElementById("numero_materias").value.match(/^\s*$/)){
                  alert("Ingrese el numero de materias aprobadas");
                  return;
                }
                if(document.getElementById("trabaja").value == 0){
                  alert("Confirme si trabaja o no");
                  return;
                }
                var institucion;
                var carrera;
                if(!document.getElementById("universidad").value.match(/^\s*$/)){
                  institucion = document.getElementById("universidad").value;
                }else{
                  institucion = document.getElementById("institucion").value;
                }
                if(!document.getElementById("otraCarrera").value.match(/^\s*$/)){
                  carrera = document.getElementById("otraCarrera").value;
                }else{
                  carrera = document.getElementById("carrera").value;
                }
                $.ajax({ url: '../js/sendUserInformation.php',
                     data: {user:               "newUser",
                            dni:                document.getElementById("numero_de_documento").value,
                            name:               document.getElementById("nombre").value,
                            surname:            document.getElementById("apellido").value, 
                            email:              document.getElementById("confirme_email").value, 
                            residenceAddress:   document.getElementById("direccion_de_residencia").value,
                            password:           document.getElementById("confirme_nueva_contraseña").value,
                            career:             carrera,
                            subjects_approved:  document.getElementById("numero_materias").value,
                            celPhone:           document.getElementById("telefono_celular").value,
                            countryOfResidence: document.getElementById("lugar_de_residencia_pais").value,
                            stateOfResidence:   document.getElementById("lugar_de_residencia_provincia").value,
                            cityOfResidence:    document.getElementById("lugar_de_residencia_ciudad").value,
                            institution:        institucion,
                            dayOfBorn:          document.getElementById("fecha_nacimiento_dia").value,
                            monthOfBorn:        document.getElementById("fecha_nacimiento_mes").value,
                            yearOfBorn:         document.getElementById("fecha_nacimiento_anio").value,
                            work:               document.getElementById("trabaja").value,
                            civil_status:       document.getElementById("estado_civil").value,
                            },
                     type: 'POST',
                     success: function(output) {  
                            alert(output);
                            if(output == "Ya existe un usuario registrado con el numero de documento" || output == "Ya existe un usuario registrado con la direccion de email"){
                              return;
                            }else{
                              document.getElementById("aareiiInscription").style.display = 'none';
                              document.getElementById("encontramasInscription").style.display = 'inline-table';
                            }    
                     }
                   });
              }else{
                alert("Las direcciones de e-mail no coinciden");
              }
              
            }else{
                alert("Las contraseñas no coinciden");
            }
            
      }else{
        if(!document.getElementById("contraseña_nueva").value.match(/^\s*$/)){
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
                if(document.getElementById("institucion").value == 0 && document.getElementById("universidad").value.match(/^\s*$/)){
                  alert("Ingrese institucion donde estudia");
                  return;
                }
                if(document.getElementById("carrera").value == 0 &&  document.getElementById("otraCarrera").value.match(/^\s*$/)){
                  alert("Ingrese su carrera de estudio");
                  return;
                }
                if(document.getElementById("numero_materias").value.match(/^\s*$/)){
                  alert("Ingrese el numero de materias aprobadas");
                  return;
                }
                if(document.getElementById("trabaja").value == 0){
                  alert("Confirme si trabaja o no");
                  return;
                }
                var institucion;
                var carrera;
                if(!document.getElementById("universidad").value.match(/^\s*$/)){
                  institucion = document.getElementById("universidad").value;
                }else{
                  institucion = document.getElementById("institucion").value;
                }
                if(!document.getElementById("otraCarrera").value.match(/^\s*$/)){
                  carrera = document.getElementById("otraCarrera").value;
                }else{
                  carrera = document.getElementById("carrera").value;
                }
                $.ajax({ url: '../js/sendUserInformation.php',
                     data: {user:               "user",
                            dni:                document.getElementById("numero_de_documento").value,
                            name:               document.getElementById("nombre").value,
                            surname:            document.getElementById("apellido").value, 
                            email:              document.getElementById("confirme_email").value, 
                            residenceAddress:   document.getElementById("direccion_de_residencia").value,
                            password:           document.getElementById("contraseña_nueva").value,
                            career:             carrera,
                            subjects_approved:  document.getElementById("numero_materias").value,
                            celPhone:           document.getElementById("telefono_celular").value,
                            countryOfResidence: document.getElementById("lugar_de_residencia_pais").value,
                            stateOfResidence:   document.getElementById("lugar_de_residencia_provincia").value,
                            cityOfResidence:    document.getElementById("lugar_de_residencia_ciudad").value,
                            institution:        institucion,
                            dayOfBorn:          document.getElementById("fecha_nacimiento_dia").value,
                            monthOfBorn:        document.getElementById("fecha_nacimiento_mes").value,
                            yearOfBorn:         document.getElementById("fecha_nacimiento_anio").value,
                            work:               document.getElementById("trabaja").value,
                            civil_status:       document.getElementById("estado_civil").value,
                            },
                     type: 'POST',
                     success: function(output) {  

                            alert(output);
                            if(output == "La contraseña ingresada no es correcta"){
                              return;
                            }else{
                              document.getElementById("aareiiInscription").style.display = 'none';
                              document.getElementById("encontramasInscription").style.display = 'inline-table';
                            }
                                    

                     }
                   });
          }else{
            alert("Las direcciones de e-mail no coinciden");
          }
        }else{
            alert("Ingrese su contraseña");
        }
      }

}

// Variable to store your files
var files;
 
// Add events
$('input[type=file]').on('change', prepareUpload);
 
// Grab the files and set them to our variable
function prepareUpload(event)
{
  alert("prepareUpload calleds")
  files = event.target.files;
}

$('form').on('submit', uploadFiles);
 
// Catch the form submit and upload the files
function uploadFiles(event)
{
  event.stopPropagation();  // Stop stuff happening
  event.preventDefault();   // Totally stop stuff happening
 
  // START A LOADING SPINNER HERE
 
  // Create a formdata object and add the files
  var data = new FormData();
  $.each(files, function(key, value)
  {
    data.append(key, value);
  });
    alert("uploadFiles called");
    $.ajax({
        url: '../js/submit.php?files',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false, // Don't process the files
        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
        success: function(data, textStatus, jqXHR)
        {
          alert(data);
          if(typeof data.error === 'undefined')
          {
            // Success so call function to process the form
            submitForm(event, data);
          }
          else
          {
            // Handle errors here
            console.log('ERRORS: ' + data.error);
          }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          // Handle errors here
          console.log('ERRORS: ' + textStatus);
          // STOP LOADING SPINNER
        }
    });
}



function sendInformation_encontramas(){
  alert(document.getElementById("userfile").value);

  $.ajax({ url: '../js/sendUserEncontramasInformation.php',
    data: {
      user:                       "newUser",
      dni:                        document.getElementById("numero_de_documento").value,
      password:                   document.getElementById("confirme_nueva_contraseña").value,
      postgraduate_type:          document.getElementById("postgrado").value,
      postgraduate_status:        document.getElementById("estado_postgrado").value,
      postgraduate_title:         document.getElementById("titulo").value,
      postgraduate_institution:   document.getElementById("institucion_postgrado").value,
      userfile:                   document.getElementById("userfile").value,
    },
    type: 'POST',
    success: function(output) {  
          alert(output);
          if(output == "Ya existe un usuario registrado con el numero de documento" || output == "Ya existe un usuario registrado con la direccion de email"){
            return;
          }
          else{
            document.getElementById("aareiiInscription").style.display = 'none';
            document.getElementById("encontramasInscription").style.display = 'block';
          }    
    }
  });
}


function fillMonths(target)
{
  $(target).html(''+
    '<option value="1" selected="">  Enero       </option>'+
    '<option value="2">              Febrero     </option>'+
    '<option value="3">              Marzo       </option>'+
    '<option value="4">              Abril       </option>'+
    '<option value="5">              Mayo        </option>'+
    '<option value="6">              Junio       </option>'+
    '<option value="7">              Julio       </option>'+
    '<option value="8">              Agosto      </option>'+
    '<option value="9">              Septiembre  </option>'+
    '<option value="10">             Octubre     </option>'+
    '<option value="11">             Noviembre   </option>'+
    '<option value="12">             Diciembre   </option>');
}


function fillYears(target, x, y)
{
  var aux;
  //2013-1934
  for(var i=x; i>y; i--)
      aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';

  $(target).html(''+aux);
}

function fillCountries(target)
{
  $(target).html(''+
    '<option value="0" selected>Seleccione pais</option>'+
    '<option value="Argentina"   id="cbf1364">Argentina  </option>'+
    '<option value="Brasil"      id="cbf1365">Brasil     </option>'+
    '<option value="Bolivia"     id="cbf1366">Bolivia    </option>'+
    '<option value="Chile"       id="cbf1367">Chile      </option>'+
    '<option value="Colombia"    id="cbf1368">Colombia   </option>'+
    '<option value="Cuba"        id="cbf1369">Cuba       </option>'+
    '<option value="Costa Rica"  id="cbf1370">Costa Rica </option>'+
    '<option value="Ecuador"     id="cbf1371">Ecuador    </option>'+
    '<option value="El Salvador" id="cbf1372">El Salvador</option>'+
    '<option value="España"      id="cbf1373">España     </option>'+
    '<option value="Honduras"    id="cbf1374">Honduras   </option>'+
    '<option value="Mexico"      id="cbf1375">Mexico     </option>'+
    '<option value="Panamá"      id="cbf1376">Panamá     </option>'+
    '<option value="Paraguay"    id="cbf1377">Paraguay   </option>'+
    '<option value="Perú"        id="cbf1378">Perú       </option>'+
    '<option value="Puerto Rico" id="cbf1379">Puerto Rico</option>'+
    '<option value="Uruguay"     id="cbf1380">Uruguay    </option>'+
    '<option value="Venezuela"   id="cbf1381">Venezuela  </option>');
}

function fillStates(target)
{
  $(target).html(''+
    '<option value="0" selected>Seleccione su provincia      </option>'+
    '<option value="No Aplica">          N/A                 </option>'+
    '<option value="Buenos Aires">       Buenos Aires        </option>'+
    '<option value="Córdoba">            Córdoba             </option>'+
    '<option value="Capital Federal">    Capital Federal     </option>'+
    '<option value="Catamarca">          Catamarca           </option>'+
    '<option value="Chaco">              Chaco               </option>'+
    '<option value="Chubut">             Chubut              </option>'+
    '<option value="Corrientes">         Corrientes          </option>'+
    '<option value="Entre Ríos">         Entre Ríos          </option>'+
    '<option value="Formosa">            Formosa             </option>'+
    '<option value="Jujuy">              Jujuy               </option>'+
    '<option value="La Pampa">           La Pampa            </option>'+
    '<option value="La Rioja">           La Rioja            </option>'+
    '<option value="Mendoza">            Mendoza             </option>'+
    '<option value="Misiones">           Misiones            </option>'+
    '<option value="Neuquén">            Neuquén             </option>'+
    '<option value="Rio Negro">          Rio Negro           </option>'+
    '<option value="Salta">              Salta               </option>'+
    '<option value="San Juan">           San Juan            </option>'+
    '<option value="San Luis">           San Luis            </option>'+
    '<option value="Santa Cruz">         Santa Cruz          </option>'+
    '<option value="Santa Fé">           Santa Fé            </option>'+
    '<option value="Santiago del Estero">Santiago del Estero </option>'+
    '<option value="Tierra del Fuego">   Tierra del Fuego    </option>'+
    '<option value="Tucuman">            Tucuman             </option>');
}

function fillSeniority(target)
{
  $(target).html(''+
    '<option value="0" selected="">  Seleccione su seniority </option>'+
    '<option value="director">       Director                </option>'+
    '<option value="gerente">        Gerente                 </option>'+
    '<option value="senior">         Senior                  </option>'+
    '<option value="semi-senior">    Semi-senior             </option>'+
    '<option value="junior">         Junior                  </option>');
}

function fillUniversities(target)
{
  $(target).html(''+
    '<option value="0"> Seleccione Universidad </option>'+
    '<option value="No Aplica"                                                           id="cfg2048">N/A                                                                </option>'+
    '<option value="Instituto Tecnológico De Buenos Aires"                               id="cbf2049">Instituto Tecnológico De Buenos Aires                              </option>'+
    '<option value="Universidad Argentina De La Empresa"                                 id="cbf2050">Universidad Argentina De La Empresa                                </option>'+
    '<option value="Universidad Austral"                                                 id="cbf2051">Universidad Austral                                                </option>'+
    '<option value="Universidad Católica Argentina (Sede Buenos Aires)"                  id="cbf2052">Universidad Católica Argentina (Sede Buenos Aires)                 </option>'+
    '<option value="Universidad Católica Argentina (Sede Rosario)"                       id="cbf2053">Universidad Católica Argentina (Sede Rosario)                      </option>'+
    '<option value="Universidad Católica De Córdoba"                                     id="cbf2054">Universidad Católica De Córdoba                                    </option>'+
    '<option value="Universidad Católica De Salta"                                       id="cbf2055">Universidad Católica De Salta                                      </option>'+
    '<option value="Universidad De Belgrano"                                             id="cbf2056">Universidad De Belgrano                                            </option>'+
    '<option value="Universidad De Buenos Aires"                                         id="cbf2057">Universidad De Buenos Aires                                        </option>'+
    '<option value="Universidad De La Marina Mercante"                                   id="cbf2058">Universidad De La Marina Mercante                                  </option>'+
    '<option value="Universidad De Mendoza"                                              id="cbf2059">Universidad De Mendoza                                             </option>'+
    '<option value="Universidad De Morón"                                                id="cbf2060">Universidad De Morón                                               </option>'+
    '<option value="Universidad De Palermo"                                              id="cbf2061">Universidad De Palermo                                             </option>'+
    '<option value="Universidad Del Norte Santo Tomás De Aquino (Tucumán)"               id="cbf2062">Universidad Del Norte Santo Tomás De Aquino (Tucumán)              </option>'+
    '<option value="Universidad Del Salvador"                                            id="cbf2063">Universidad Del Salvador                                           </option>'+
    '<option value="Universidad Frat. De Agrup. Santo Tomas De Aquino"                   id="cbf2064">Universidad Frat. De Agrup. Santo Tomas De Aquino                  </option>'+
    '<option value="Universidad Nacional De Córdoba"                                     id="cbf2065">Universidad Nacional De Córdoba                                    </option>'+
    '<option value="Universidad Nacional De Cuyo (Mendoza)"                              id="cbf2066">Universidad Nacional De Cuyo (Mendoza)                             </option>'+
    '<option value="Universidad Nacional De General Sarmiento (Los Polvorines)"          id="cbf2067">Universidad Nacional De General Sarmiento (Los Polvorines)         </option>'+
    '<option value="Universidad Nacional De Jujuy"                                       id="cbf2068">Universidad Nacional De Jujuy                                      </option>'+
    '<option value="Universidad Nacional De La Matanza"                                  id="cbf2069">Universidad Nacional De La Matanza                                 </option>'+
    '<option value="Universidad Nacional De La Patagonia (Comodoro Rivadavia)"           id="cbf2070">Universidad Nacional De La Patagonia (Comodoro Rivadavia)          </option>'+
    '<option value="Universidad Nacional De La Patagonia Austral (Caleta Olivia)"        id="cbf2071">Universidad Nacional De La Patagonia Austral (Caleta Olivia)       </option>'+
    '<option value="Universidad Nacional De La Plata"                                    id="cbf2072">Universidad Nacional De La Plata                                   </option>'+
    '<option value="Universidad Nacional De La Rioja"                                    id="cbf2073">Universidad Nacional De La Rioja                                   </option>'+
    '<option value="Universidad Nacional De Lomas De Zamora"                             id="cbf2074">Universidad Nacional De Lomas De Zamora                            </option>'+
    '<option value="Universidad Nacional De Luján"                                       id="cbf2075">Universidad Nacional De Luján                                      </option>'+
    '<option value="Universidad Nacional De Mar del Plata"                               id="cbf2076">Universidad Nacional De Mar del Plata                              </option>'+
    '<option value="Universidad Nacional De Misiones (Obera)"                            id="cbf2077">Universidad Nacional De Misiones (Obera)                           </option>'+
    '<option value="Universidad Nacional De Rosario"                                     id="cbf2078">Universidad Nacional De Rosario                                    </option>'+
    '<option value="Universidad Nacional De Salta"                                       id="cbf2079">Universidad Nacional De Salta                                      </option>'+
    '<option value="Universidad Nacional De San Juan"                                    id="cbf2080">Universidad Nacional De San Juan                                   </option>'+
    '<option value="Universidad Nacional De San Luís (Villa Mercedes)"                   id="cbf2081">Universidad Nacional De San Luís (Villa Mercedes)                  </option>'+
    '<option value="Universidad Nacional De Tucumán"                                     id="cbf2082">Universidad Nacional De Tucumán                                    </option>'+
    '<option value="Universidad Nacional Del Centro De La Pcia. De Bs. As."              id="cbf2083">Universidad Nacional Del Centro De La Pcia. De Bs. As.             </option>'+
    '<option value="Universidad Nacional del Chaco Austral"                              id="cbf2084">Universidad Nacional del Chaco Austral                             </option>'+
    '<option value="Universidad Nacional Del Litoral (Santa Fe)"                         id="cbf2085">Universidad Nacional Del Litoral (Santa Fe)                        </option>'+
    '<option value="Universidad Nacional Del Noroeste De La Pcia. De Bs. As. (Junin)"    id="cbf2086">Universidad Nacional Del Noroeste De La Pcia. De Bs. As. (Junin)   </option>'+
    '<option value="Universidad Nacional Del Sur (Bahía Blanca)"                         id="cbf2087">Universidad Nacional Del Sur (Bahía Blanca)                        </option>'+
    '<option value="UTN Facultad Regional Avellaneda"                                    id="cbf2088">UTN Facultad Regional Avellaneda                                   </option>'+
    '<option value="UTN Facultad Regional Bahía Blanca (LOI)"                            id="cbf2089">UTN Facultad Regional Bahía Blanca (LOI)                           </option>'+
    '<option value="UTN Facultad Regional Buenos Aires"                                  id="cbf2090">UTN Facultad Regional Buenos Aires                                 </option>'+
    '<option value="UTN Facultad Regional Concepción del Uruguay"                        id="cbf2091">UTN Facultad Regional Concepción del Uruguay                       </option>'+
    '<option value="UTN Facultad Regional Córdoba"                                       id="cbf2092">UTN Facultad Regional Córdoba                                      </option>'+
    '<option value="UTN Facultad Regional General Pacheco (LOI)"                         id="cbf2093">UTN Facultad Regional General Pacheco (LOI)                        </option>'+
    '<option value="UTN Facultad Regional Haedo"                                         id="cbf2094">UTN Facultad Regional Haedo                                        </option>'+
    '<option value="UTN Facultad Regional La Plata"                                      id="cbf2095">UTN Facultad Regional La Plata                                     </option>'+
    '<option value="UTN Facultad Regional La Rioja"                                      id="cbf2096">UTN Facultad Regional La Rioja                                     </option>'+
    '<option value="UTN Facultad Regional Rafaela"                                       id="cbf2097">UTN Facultad Regional Rafaela                                      </option>'+
    '<option value="UTN Facultad Regional Río Grande"                                    id="cbf2098">UTN Facultad Regional Río Grande                                   </option>'+
    '<option value="UTN Facultad Regional San Francisco (LOI)"                           id="cbf2099">UTN Facultad Regional San Francisco (LOI)                          </option>'+
    '<option value="UTN Facultad Regional San Nicolás"                                   id="cbf2100">UTN Facultad Regional San Nicolás                                  </option>'+
    '<option value="UTN Facultad Regional San Rafael"                                    id="cbf2101">UTN Facultad Regional San Rafael                                   </option>'+
    '<option value="UTN Facultad Regional Santa Fe"                                      id="cbf2102">UTN Facultad Regional Santa Fe                                     </option>'+
    '<option value="UTN Unidad Académica Chubut (LOI)"                                   id="cbf2103">UTN Unidad Académica Chubut (LOI)                                  </option>'+
    '<option value="UTN Unidad Académica Río Gallegos"                                   id="cbf2104">UTN Unidad Académica Río Gallegos                                  </option>'+
    '<option value="UTN Unidad Académica Trenque Lauquen"                                id="cbf2105">UTN Unidad Académica Trenque Lauquen                               </option>'+
    '<option value="Otra" id="cbf2106">Otra</option>');
}

function fillDegrees(target)
{
  $(target).html(''+
    '<option value="0" selected>               Seleccione carrera        </option>'+
    '<option value="Ingeniería Industrial">    Ingeniería Industrial     </option>'+
    '<option value="Ing. en Alimentos">        Ing. en Alimentos         </option>'+
    '<option value="Lic. en Org. Industrial">  Lic. en Org. Industrial   </option>'+
    '<option value="Ing. Agroindustrial">      Ingeniería Agroindustrial </option>'+
    '<option value="Otra Ingeniería">          Otra ingenieria           </option>'+
    '<option value="Otra carrera">             Otra carrera              </option>');
};

function fillCivilStatus(target)
{
  $(target).html(''+
    '<option value="0" selected>           </option>'+
    '<option value="Casado">     Casado    </option>'+
    '<option value="Soltero">    Soltero   </option>'+
    '<option value="Divorciado"> Divorciado</option>'+
    '<option value="Viudo">      Viudo     </option>'+
    '<option value="Otro">       Otro      </option>');
};

function fillCompanyType(target)
{
  $(target).html(''+
    '<option value="0" selected="">                              Seleccione el tipo de empresa               </option>'+
    '<option value="Agro">                                       Agro                                        </option>'+
    '<option value="Automotriz">                                 Automotriz                                  </option>'+
    '<option value="Consultora">                                 Consultora                                  </option>'+
    '<option value="Consumo Masivo">                             Consumo Masivo                              </option>'+
    '<option value="Financiero / Bancario / Seguros">            Financiero / Bancario / Seguros             </option>'+
    '<option value="Holding - otras actividades">                Holding - otras actividades                 </option>'+
    '<option value="Industrial">                                 Industrial                                  </option>'+
    '<option value="Petrolera / Sector Energético">              Petrolera / Sector Energético               </option>'+
    '<option value="Salud / Laboratorio / Farmacéutica">         Salud / Laboratorio / Farmacéutica          </option>'+
    '<option value="Servicios / Distribución / Comercialización">Servicios / Distribución / Comercialización </option>'+
    '<option value="Sistemas / Tecnología">                      Sistemas / Tecnología                       </option>'+
    '<option value="Telecomunicaciones">                         Telecomunicaciones                          </option>'+
    '<option value="otra">                                       Otra                                        </option>');
};

function fillAreaType(target)
{
  $(target).html(''+
    '<option value="0" selected="">                          Seleccione el area del puesto           </option>'+
    '<option value="Administración">                         Administración                          </option>'+
    '<option value="Gerencia General">                       Gerencia General                        </option>'+
    '<option value="Investigación y Desarrollo">             Investigación y Desarrollo              </option>'+
    '<option value="Marketing - Relaciones Institucionales"> Marketing - Relaciones Institucionales  </option>'+
    '<option value="Producción">                             Producción                              </option>'+
    '<option value="Recursos Humanos">                       Recursos Humanos                        </option>'+
    '<option value="Salud - Servicios Médicos">              Salud - Servicios Médicos               </option>'+
    '<option value="Sistemas">                               Sistemas                                </option>'+
    '<option value="Ventas - Comercial">                     Ventas - Comercial                      </option>'+
    '<option value="otra">                                   Otra                                    </option>');
}

function fillBirthDate()
{
  for (i = 1; i < 13; i++)
  {
    $('#fecha_nacimiento_mes').append($('<option />').val(i).html(i));
  }
  updateNumberOfDays(); 

  $('#fecha_nacimiento_anio, #fecha_nacimiento_mes').change(function(){
    updateNumberOfDays(); 
  });
}

function updateNumberOfDays()
{
  $('#fecha_nacimiento_dia').html('');
  month =$('#fecha_nacimiento_mes').val();
  year  =$('#fecha_nacimiento_anio').val();
  days  =daysInMonth(month, year);

  for(i=1; i < days+1 ; i++){
    $('#fecha_nacimiento_dia').append($('<option />').val(i).html(i));
  }
}

function daysInMonth(month, year)
{
    return new Date(year, month, 0).getDate();
}