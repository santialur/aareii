<!DOCTYPE HTML>
<html>
<head>
  <title>Inscripción</title>
  <META http-equiv="Content-Type" content="text/html; charset=utf-8" />

  <link   rel=  "stylesheet"    href="../../css/styles.css"      type="text/css" />
  
  <meta property="og:url" content="http://www.encontramas.com.ar/virtual/pages/Inscripcion/inscripcion.php" />
  <meta property="og:title" content="Feria de empresas- Encontra+ 2014" />
  <meta property="og:description" content="Inscribite a la feria de empresas 2014" />
  <meta property="og:image" content="http://www.encontramas.com.ar/virtual/features/images/encontramas_facebook_foto.jpg" />

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <script type="text/javascript" src="../../logic/inscripcion/inscription.js"></script>
  <link 	rel="shortcut icon"  href="../../favicon.ico"			/>
</head>

<body>
	
    <div id="nav">
          <ul class="opensans">  
            <li><a href="http://www.encontramas.com.ar/">Encontra +</a></li>
            <li><a href="../Base/exterior.php">						Exterior 			</a></li>
	    <li><a href="../Base/interior.php">						Interior 			</a></li>			
            <li><a href="../Base/ofertaLaboral.php">				Ofertas laborales	</a></li>			
            <li class="opensans"><a href="inscripcion.php">Inscribirse</a></li>
          </ul>
    </div>
    </br>

    <div class="wrapperSmall">
      <div id="content" class="box">

        <!-- HEADER SUBSCRIPTION --> 
        <div class="leftSide">
          <h3>
            <span class="opensans textShadow"> 
              Formulario de  inscripción     
            </span>
          </h3>
          <br>
          <h5> Eventos de Actualidad laboral  </h5>
        </div>

        <div class="rightSide">
          <img src="../../features/images/AAREII-logo.png" width="65" height="100">
        </div>
        
        <div style="margin: 17% 0 2% 0; text-align: justify">
          <SMALL><strong>Inscribiendote estarás acreditado en forma gratuita a la Jornada.</strong>  Además a partir de este momento comenzarás a formar parte de la base de reclutamiento de las empresas participantes para cubrir futuras posiciones.</SMALL>
        </div>

        <hr>

        <!-- CONTENT SUBSCRIPTION -->

        <div id="subscriptionContent">

          <div id="ID_div">
            <span class="leftSide">
              <strong>Nro. de Documento</strong>:   
              <span class="red">*</span>
            </span>
            <input type="text" id="numero_de_documento" name="numero_de_documento" class="rightSide" maxlength="10" onkeyup="checkNumeric(this);">
            <br><br>
          </div>

          <div id="password_div">
            <span class="leftSide">
              <strong>Contraseña</strong>:          
              <span class="red">*</span>
            </span> 
            <input type="password" id="contraseña" name="contraseña" class="rightSide">
            <br><br>
          </div>

          <div id="olvido_contraseña">
          <a  href="forgotPassword.html" style="font-size:80%; text-decoration:underline;">Olvide mi contraseña</a><br><br>
          </div>
          
          <div id="buttons" style="text-align: center">
            <input type="button" id="verify_button" value="Verificar usuario" class="button" onclick="checkUser()"      style="margin-right:  3%">
            <input type="button" id="create_button" value="Crear nuevo"       class="button" onclick="createNewUser()"  style="margin-left:   3%"><br><br>
          </div>
          <div id="personalInformation" style="display: none">

            <!--NOMBRE--> 
            <span class="leftSide">
              <strong>Nombre</strong>:   
              <span class="red">*</span>
            </span>
            <input type="text" id="nombre" name="nombre" class="rightSide" placeholder="Juan"> <br><br>

            <!--APELLIDO--> 
            <span class="leftSide">
              <strong>Apellido</strong>:   
              <span class="red">*</span>
            </span>
            <input type="text" id="apellido" name="apellido" class="rightSide" placeholder="Naranjo"> <br><br>

            <!--SEXO-->
            <span class="leftSide">
              <strong>Sexo</strong>:   
              <span class="red">*</span>
            </span>
            <div class="rightSide">
              <select id="sexo" name="sexo">
                <option value="0" selected></option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div> <br><br>

            <!--EMAIL--> 
            <span class="leftSide">
              <strong>Direccion de E-mail</strong>:   
              <span class="red">*</span>
            </span>
            <input type="text" id="email" name="email" class="rightSide" placeholder="ejemplo@gmail.com"> <br><br>

            <!--CONFIRMACION EMAIL--> 
            <div id="div_confirme_email">
              <span class="leftSide">
                <strong>Confirme direccion de e-mail</strong>:   
                <span class="red">*</span>
              </span>
              <input type="text" id="confirme_email" name="confirme_email" class="rightSide" placeholder="ejemplo@gmail.com"> <br><br>
            </div>

            <div id="div_password">
              <!--CONTRASEÑA--> 
              <span class="leftSide">
                <strong>Contraseña</strong>:   
                <span class="red">*</span>
              </span>
              <input type="password" id="contraseña_nueva" name="contraseña_nueva" class="rightSide" placeholder="*********"> <br><br>

              <!--CONFIRMACION CONTRASEÑA--> 
              <span class="leftSide">
                <strong>Confirmar contraseña</strong>:   
                <span class="red">*</span>
              </span>
              <input type="password" id="confirme_nueva_contraseña" name="confirme_nueva_contraseña" class="rightSide" placeholder="*********"> <br><br>
            </div>
            
            <!--TELEFONO--> 
            <span class="leftSide">
              <strong>Teléfono</strong>:   
              <span class="red">*</span>
            </span>
            <div class="rightSide">
            <input type="text" id="telefono_codigo_area" name="telefono_codigo_area" size="5" onkeyup="checkNumeric(this);" style="margin-right:1%" placeholder="C. Area"> 
            <input type="text" id="telefono_celular" name="telefono_celular" size="12" onkeyup="checkNumeric(this);" placeholder="Numero">
            <br><br>
            </div>
            <br><br>
            
            <!--FECHA NACIMIENTO-->
            <span class="leftSide">
              <strong>Fecha de Nacimiento</strong>:   
              <span class="red">*</span>
            </span>  

            <div class="rightSide">
              <select id="fecha_nacimiento_anio" name="fecha_nacimiento_anio">
                <script>
                    $('#fecha_nacimiento_anio').append($('<option />').val(1).html("Año"));
                    fillYears($('select[name=fecha_nacimiento_anio]'), 1996, 1950);
                </script> 
              </select>
              <select id="fecha_nacimiento_mes" name="fecha_nacimiento_mes"></select>
              <select id="fecha_nacimiento_dia" name="fecha_nacimiento_dia"></select>
              <script>
                $(fillBirthDate);
              </script>
            </div>  <br><br>

            <!--ESTADO CIVIL-->
            <span class="leftSide">
              <strong>Estado Civil</strong>:  
              <span class="red">*</span> 
            </span>
            
            <div class="rightSide">
              <select id="estado_civil" name="estado_civil">
                <script>
                    fillCivilStatus($('#estado_civil'));
                </script>
              </select>
            </div>  <br><br>

            <!--PAIS-->
            <span class="leftSide">
              <strong>País</strong>:   
              <span class="red">*</span>
            </span>        

            <div class="rightSide">
              <select id="lugar_de_residencia_pais" name="lugar_de_residencia_pais" style="float: right; width:156%" onchange="checkCountry();">
                <script>
                    fillCountries($('#lugar_de_residencia_pais'));
                </script>
              </select>
            </div>  <br><br>

            <!--PROVINCIA-->
            <span class="leftSide">
              <strong>Provincia</strong>:   
              <span class="red">*</span>
            </span> 

            <div class="rightSide">
              <select id="lugar_de_residencia_provincia" name="lugar_de_residencia_provincia" style="float: right; width:110%">
                <script>
                    fillStates($('#lugar_de_residencia_provincia'), 0);
                </script>
              </select>
            </div>  <br><br>

            <!--CIUDAD O LOCALIDAD-->
            <span class="leftSide">
              <strong>Ciudad/Localidad</strong>:   
              <span class="red">*</span>
            </span>
            <input type="text" id="lugar_de_residencia_ciudad" name="lugar_de_residencia_ciudad" class="rightSide"> <br><br>

            <div align="center" id="sendButton" >
              <input type="submit" value="Enviar" class="button" onclick="sendPersonalInformation()">
            </div>
          </div>
            <!-- --------------------------------------------------------------------------------------- -->

          <div id="academicInformation" style="display: none">
            <!--DATOS ACADEMICOS-->

            <!--UNIVERSIDAD-->
            <span class="leftSide">
              <strong>Universidad</strong>:   
              <span class="red">*</span>
            </span>

            <div class="rightSide">
              <select id="institucion" name="institucion" onChange="checkAnotherUniversity();" style="float: right; width: 13.5em">
                <script>
                    fillUniversities($('#institucion'), 0);
                </script>
              </select>
            </div>  <br><br>

            <!--OTRA UNIVERSIDAD-->
            <span id="otra_universidad" style="display:none">
              <span class="leftSide">
                <strong>Otra universidad</strong>:   
              </span>
              <input type="text" id="universidad" name="universidad" class="rightSide"> <br><br>
            </span>

            <!--CARRERA-->
            <span class="leftSide">
              <strong>Area de estudio</strong>: 
              <span class="red">*</span>  
            </span>
            
            <div class="rightSide">
              <select id="carrera_area" name="carrera_area" style="float: right; width:105%">
                <script>
                    fillDegrees($('#carrera_area'));
                </script>
              </select>
            </div>  <br><br>

            <!--OTRA CARRERA-->
            <span id="otra_carrera" style="display:none">
              <span class="leftSide">
                <strong>Otra area</strong>:   
              </span>
              <input type="text" id="otraCarrera" name="otraCarrera" class="rightSide"> <br><br>
            </span>

            <!--TITULO DE LA CARRERA-->
            <span class="leftSide">
              <strong>Titulo de la carrera</strong>:   
            </span>
            <input type="text" id="carrera_titulo" name="carrera_titulo" class="rightSide"> <br><br>

            <!--MATERIAS APROBADAS-->
            <span class="leftSide">
              <strong>Numero de materias aprobadas</strong>: 
            </span>
            <input type="text" id="carrera_materiasAprobadas" name="carrera_materiasAprobadas" class="rightSide" onkeyup="checkNumeric(this);"> <br><br>

            <!--MATERIAS TOTALES-->
            <span class="leftSide">
              <strong>Numero total de materias</strong>: 
            </span>
            <input type="text" id="carrera_totalMaterias" name="carrera_totalMaterias" class="rightSide" onkeyup="checkNumeric(this);"> <br><br>

            <!--GRADO--> 
            <span class="leftSide">
              <strong>Estado de Carrera</strong>:   
              <span class="red">*</span>
            </span>

            <div class="rightSide">
              <select id="estado_carrera" name="estado_carrera" onChange="checkCareerLevel();">
                <option value="0" selected="">                </option>
                <option value="Completo">       Completa      </option>
                <option value="Avanzado">       Avanzada      </option>
                <option value="En curso">       En curso      </option>
                <option value="Interrumpido">   Interrumpida  </option>
              </select>
            </div>  <br><br>

            <!--PROMEDIO-->
            <span class="leftSide">
              <strong>Promedio General</strong>: 
              <span class="red">*</span>
            </span>
            <input type="text" id="carrera_promedio" name="carrera_promedio" class="rightSide" maxlength="5" onkeyup="checkNumeric(this); checkBounds(this, 10)"> <br><br>    

            <!--IDIOMAS-->
            <table cellspacing="10" style="font-size: 85%">
              <thead>
                <tr>
                  <th></th><th>Nativo</th><th>Bilingüe</th><th>Avanzado</th>
                  <th>Intermedio</th><th>Basico</th><th>Nada</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Español</td>
                  <td><div align="center"><input type="radio" name="nivel_español" value="Nativo">         </div></td>
                  <td><div align="center"><input type="radio" name="nivel_español" value="Bilingue">       </div></td>
                  <td><div align="center"><input type="radio" name="nivel_español" value="lAvanzado">       </div></td>
                  <td><div align="center"><input type="radio" name="nivel_español" value="Intermedio">     </div></td>
                  <td><div align="center"><input type="radio" name="nivel_español" value="Basico">         </div></td>
                  <td><div align="center"><input type="radio" name="nivel_español" value="Nada">           </div></td>
                </tr>
                <tr>
                  <td> Ingles</td>
                  <td><div align="center"><input type="radio" name="nivel_ingles" value="Nativo">           </div></td>
                  <td><div align="center"><input type="radio" name="nivel_ingles" value="Bilingue">         </div></td>
                  <td><div align="center"><input type="radio" name="nivel_ingles" value="Avanzado">         </div></td>
                  <td><div align="center"><input type="radio" name="nivel_ingles" value="Intermedio">       </div></td>
                  <td><div align="center"><input type="radio" name="nivel_ingles" value="Basico">           </div></td>
                  <td><div align="center"><input type="radio" name="nivel_ingles" value="Nada">             </div></td>
                </tr>
                <tr>
                  <td> Portugues</td>
                  <td><div align="center"><input type="radio" name="nivel_portugues" value="Nativo">     </div></td>
                  <td><div align="center"><input type="radio" name="nivel_portugues" value="Bilingue">   </div></td>
                  <td><div align="center"><input type="radio" name="nivel_portugues" value="Avanzado">   </div></td>
                  <td><div align="center"><input type="radio" name="nivel_portugues" value="Intermedio"> </div></td>
                  <td><div align="center"><input type="radio" name="nivel_portugues" value="Basico">     </div></td>
                  <td><div align="center"><input type="radio" name="nivel_portugues" value="Nada">       </div></td>
                </tr>
                <tr>
                  <td> Aleman</td>
                  <td><div align="center"><input type="radio" name="nivel_aleman" value="Nativo">           </div></td>
                  <td><div align="center"><input type="radio" name="nivel_aleman" value="Bilingue">         </div></td>
                  <td><div align="center"><input type="radio" name="nivel_aleman" value="Avanzado">         </div></td>
                  <td><div align="center"><input type="radio" name="nivel_aleman" value="Intermedio">       </div></td>
                  <td><div align="center"><input type="radio" name="nivel_aleman" value="Basico">           </div></td>
                  <td><div align="center"><input type="radio" name="nivel_aleman" value="Nada">             </div></td>
                </tr>
                <tr>
                  <td> Italiano</td>
                  <td><div align="center"><input type="radio" name="nivel_italiano" value="Nativo">       </div></td>
                  <td><div align="center"><input type="radio" name="nivel_italiano" value="Bilingue">     </div></td>
                  <td><div align="center"><input type="radio" name="nivel_italiano" value="Avanzado">     </div></td>
                  <td><div align="center"><input type="radio" name="nivel_italiano" value="Intermedio">   </div></td>
                  <td><div align="center"><input type="radio" name="nivel_italiano" value="Basico">       </div></td>
                  <td><div align="center"><input type="radio" name="nivel_italiano" value="Nada">         </div></td>
                </tr>
                <tr>
                  <td> Frances</td>
                  <td><div align="center"><input type="radio" name="nivel_frances" value="Nativo">       </div></td>
                  <td><div align="center"><input type="radio" name="nivel_frances" value="Bilingue">     </div></td>
                  <td><div align="center"><input type="radio" name="nivel_frances" value="Avanzado">     </div></td>
                  <td><div align="center"><input type="radio" name="nivel_frances" value="Intermedio">   </div></td>
                  <td><div align="center"><input type="radio" name="nivel_frances" value="Basico">       </div></td>
                  <td><div align="center"><input type="radio" name="nivel_frances" value="Nada">         </div></td>
                </tr>
              </tbody>
            </table>    <br>
            
            <!--NIVELES SUPERIORES--> 
            <span id="areaPosgrados" style="display:none">
              <span class="leftSide">
                <strong>Postgrados / Masters / Doctorado</strong>:   
                
              </span>
              
              <div class="rightSide">
                <select id="postgrado_tipo" name="postgrado">
                  <option value="0" selected="">              Seleccione su Postgrado     </option>
                  <option value="Doctorado">                  Doctorado                   </option>
                  <option value="Master / Especialización">   Master / Especialización    </option>
                  <option value="Posgrado">                   Posgrado                    </option>
                </select>
              </div>  <br><br>

              <!--POSTGRADO--> 
              <span class="leftSide">
                <strong>Estado de Postgrado</strong>:   
               
              </span>

              <div class="rightSide">
                <select id="postgrado_estado" name="postgrado_estado">
                  <option value="0" selected="">  Seleccione su nivel de postgrado    </option>
                  <option value="Completo">       Completo                            </option>
                  <option value="En curso">       En curso                            </option>
                  <option value="Incompleto">     Incompleto                          </option>
                </select>
              </div>  <br><br>                             

              <!--TITULO--> 
              <span class="leftSide">
                <strong>Título</strong>:   
              </span>
              <input type="text" id="postgrado_titulo" name="postgrado_titulo" class="rightSide"> <br><br>

              <!--INSTITUCION--> 
              <span class="leftSide">
                <strong>Institución</strong>:   
              </span>
              <input type="text" id="postgrado_institucion" name="postgrado_institucion" class="rightSide"> <br><br>
          </span>

              <div align="center" id="sendButton" >
                <input type="submit" value="Enviar" class="button" onclick="sendAcademicInformation()">
              </div>
          <!--FIN INFO ACADEMICA-->
          </div>

          <div id="jobInformation" style="display: none">

            <!--TRABAJO-->
            <span class="leftSide">
              <strong>Trabaja en la actualidad?</strong>:
              <span class="red">*</span>   
            </span>
            <div class="rightSide">
              <select id="trabaja" name="trabaja">
                <option value="0" selected> </option>
                <option value="Si">Si       </option>
                <option value="No">No       </option>
              </select>
            </div>  <br><br>

            <!--EXPERIENCIA LABORAL--> 
            <h3> 
              <span class="opensans textShadow">
                Experiencia Laboral 
              </span>
            </h3>

            <div style="margin: 5% 0; text-align: justify">
              <SMALL>Agregue sus últimas experiencias laborales o aquellas tres experiencias más destacadas. Si trabaja actualmente, recomendamos incluir dicha información. Si posee menos de tres experiencias o ninguna, dejar los espacios correspondientes en blanco. Al final del proceso de inscripción tendrá la opción de anexar su CV completo en formato PDF o Word. El archivo no deberá pesar más de 3Mb</SMALL>
            </div>
            <!-- --------------------------------------------------------------------------------------- -->

            <!---- NUMERO 1 ---->
            <strong>1</strong>  
            <hr><br> 

            <!--EMPRESA-->
            <span class="leftSide">
              <strong>Empresa</strong>:   
            </span>
            <input type="text" id="empresa_1_nombre" name="empresa_1_nombre" class="rightSide"> <br><br>

            <!--TIPO EMPRESA--> 
            <span class="leftSide">
              <strong>Tipo de empresa</strong>:   
            </span>

            <div class="rightSide">
              <select id="empresa_1_tipo" name="empresa_1_tipo">
                <script>
                    fillCompanyType($('#empresa_1_tipo'));
                </script>
              </select>
            </div>  <br><br> 

            <!--ACTIVIDAD-->
            <span class="leftSide">
              <strong>Puesto / Tarea</strong>:   
            </span>
            <input type="text" id="trabajo_1_descripcion" name="trabajo_1_descripcion" class="rightSide"> <br><br>

            <!--AREA-->
            <span class="leftSide">
              <strong>Area del puesto</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_1_area" name="trabajo_1_area">
                <script>
                    fillAreaType($('#trabajo_1_area'));
                </script>
              </select>
            </div>  <br><br> 

            <!--SENIORITY-->
            <span class="leftSide">
              <strong>Rango</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_1_senior" name="trabajo_1_senior">
                <script>
                    fillRango($('select[name=trabajo_1_senior]'));
                </script>
              </select>
            </div>  <br><br> 

            <!--DESDE-->
            <span class="leftSide">
              <strong>Desde</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_1_mes_desde" name="trabajo_1_mes_desde">
              </select>

            <script>
                fillMonths($('select[name=trabajo_1_mes_desde]'));
            </script>

              <select id="trabajo_1_año_desde" name="trabajo_1_año_desde">
                <script>
                    fillYears($('select[name=trabajo_1_año_desde]'),2014,1934);
                </script> 
              </select>
            </div>  <br><br> 

            <!--HASTA-->
            <span class="leftSide">
              <strong>Hasta</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_1_mes_hasta" name="trabajo_1_mes_hasta">
                  <script>
                    fillMonths($('select[name=trabajo_1_mes_hasta]'));
                  </script>
              </select>

              <select id="trabajo_1_año_hasta" name="trabajo_1_año_hasta">
                <script>
                    fillYears($('select[name=trabajo_1_año_hasta]'),2014,1934);
                </script> 
              </select>
              <br>
              <input type="checkbox" id="hasta_presente1" name="hasta_presente1" value="hasta_presente1" onChange="stillWorkHere(this, $('select[name=trabajo_1_año_hasta]'), $('select[name=trabajo_1_mes_hasta]'));"> <SMALL><SMALL>Trabajo Aquí Actualmente</SMALL></SMALL>
            </div>  <br><br> 

            <!-- --------------------------------------------------------------------------------------- -->

            <!---- NUMERO 2 ---->
            <br>
            <strong>2</strong>
            <hr><br> 

            <!--EMPRESA2-->
            <span class="leftSide">
              <strong>Empresa</strong>:   
            </span>
            <input type="text" id="empresa_2_nombre" name="empresa_2_nombre" class="rightSide"> <br><br>

            <!--TIPO EMPRESA2--> 
            <span class="leftSide">
              <strong>Tipo de empresa</strong>:   
            </span>

            <div class="rightSide">
              <select id="empresa_2_tipo" name="empresa_2_tipo">
                <script>
                    fillCompanyType($('#empresa_2_tipo'));
                </script>
              </select>
            </div>  <br><br> 

            <!--ACTIVIDAD-->
            <span class="leftSide">
              <strong>Puesto / Tarea</strong>:   
            </span>
            <input type="text" id="trabajo_2_descripcion" name="trabajo_2_descripcion" class="rightSide"> <br><br>

            <!--AREA-->
            <span class="leftSide">
              <strong>Area del puesto</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_2_area" name="trabajo_2_area">
                <script>
                    fillAreaType($('#trabajo_2_area'));
                </script>                                
              </select>
            </div>  <br><br> 

            <!--SENIORITY-->
            <span class="leftSide">
              <strong>Rango</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_2_senior" name="trabajo_2_senior">
                <script>
                    fillRango($('select[name=trabajo_2_senior]'));
                </script>
              </select>
            </div>  <br><br> 

            <!--DESDE-->
            <span class="leftSide">
              <strong>Desde</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_2_mes_desde" name="trabajo_2_mes_desde">
                <script>
                   fillMonths($('select[name=trabajo_2_mes_desde]'));
                </script>
              </select>

              <select id="trabajo_2_año_desde" name="trabajo_2_año_desde">
                <script>
                    fillYears($('select[name=trabajo_2_año_desde]'),2014,1934);
                </script> 
              </select>
            </div>  <br><br> 

            <!--HASTA-->
            <span class="leftSide">
              <strong>Hasta</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_2_mes_hasta" name="trabajo_2_mes_hasta">
                <script>
                    fillMonths($('select[name=trabajo_2_mes_hasta]'));
                </script>
              </select>

              <select id="trabajo_2_año_hasta" name="trabajo_2_año_hasta">
                <script>
                    fillYears($('select[name=trabajo_2_año_hasta]'),2014,1934);
                </script> 
              </select>
              <br>
              <input type="checkbox" id="hasta_presente2" name="hasta_presente2" value="hasta_presente2" onChange="stillWorkHere(this, $('select[name=trabajo_2_año_hasta]'), $('select[name=trabajo_2_mes_hasta]'));"> <SMALL><SMALL>Trabajo Aquí Actualmente</SMALL></SMALL>
            </div>  <br><br> 

            <!-- --------------------------------------------------------------------------------------- -->

            <!---- NUMERO 3 ---->
            <br>
            <strong>3</strong>
            <hr><br> 

            <!--EMPRESA3-->
            <span class="leftSide">
              <strong>Empresa</strong>:   
            </span>
            <input type="text" id="empresa_3_nombre" name="empresa_3_nombre" class="rightSide"> <br><br>

            <!--TIPO EMPRESA3--> 
            <span class="leftSide">
              <strong>Tipo de empresa</strong>:   
            </span>

            <div class="rightSide">
              <select id="empresa_3_tipo" name="empresa_3_tipo">
                <script>
                    fillCompanyType($('#empresa_3_tipo'));
                </script>
              </select>
            </div>  <br><br> 

            <!--ACTIVIDAD-->
            <span class="leftSide">
              <strong>Puesto / Tarea</strong>:   
            </span>
            <input type="text" id="trabajo_3_descripcion" name="trabajo_3_descripcion" class="rightSide"> <br><br>

            <!--AREA-->
            <span class="leftSide">
              <strong>Area del puesto</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_3_area" name="trabajo_3_area">
                <script>
                    fillAreaType($('#trabajo_3_area'));
                </script>
              </select>
            </div>  <br><br> 

            <!--SENIORITY-->
            <span class="leftSide">
              <strong>Seniority</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_3_senior" name="trabajo_3_senior">
                <script>
                    fillRango($('select[name=trabajo_3_senior]'));
                </script>
              </select>
            </div>  <br><br> 

            <!--DESDE-->
            <span class="leftSide">
              <strong>Desde</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_3_mes_desde" name="trabajo_3_mes_desde">
                <script>
                    fillMonths($('select[name=trabajo_3_mes_desde]'));
                </script>
              </select>

              <select id="trabajo_3_año_desde" name="trabajo_3_año_desde">
                <script>
                    fillYears($('select[name=trabajo_3_año_desde]'),2014,1934);
                </script>                
              </select>
            </div>  <br><br> 

            <!--HASTA-->
            <span class="leftSide">
              <strong>Hasta</strong>:   
            </span>

            <div class="rightSide">
              <select id="trabajo_3_mes_hasta" name="trabajo_3_mes_hasta">
                <script>
                    fillMonths($('select[name=trabajo_3_mes_hasta]'));
                </script>
              </select>

              <select id="trabajo_3_año_hasta" name="trabajo_3_año_hasta">
                <script>
                    fillYears($('select[name=trabajo_3_año_hasta]'),2014,1934);
                </script> 
              </select>
              <br>
              <input type="checkbox" id="hasta_presente3" name="hasta_presente3" value="hasta_presente3" onChange="stillWorkHere(this, $('select[name=trabajo_3_año_hasta]'), $('select[name=trabajo_3_mes_hasta]'));"><SMALL><SMALL>Trabajo Aquí Actualmente</SMALL></SMALL>
            </div><br><br><br>

            <br><br>
            <div align="center" id="sendButton" >
              <input type="submit" value="Enviar" class="button" onclick="sendLaboralInformation()">
            </div>

            
            <br><hr>            
            <div id="LoadedCurriculum">
              
            </div>
            <br>
            <div id="new_curriculum_div" style="display:none">
              <form action="../../logic/inscripcion/add_file.php" enctype="multipart/form-data" method="post" style="text-align: center">
                  <span class="leftSide">
                      <label for="file_upload">Curriculum vitae:</label>
                  </span>
                  <input type="text" id="dni" name="dni" style="display:none"> 
                  <span class="rightSide">
                      <input type="file" name="file_upload" id="file_upload" multiple>
                  </span> <br><br>
                  
                  <span style="text-align: center">
                      <input type="submit" name="submit" value="Subir CV" class="button">
                  </span>
              </form>
            </div>
		
            <div id="upload_curriculum_div" style="display:none">
              <form action="../../logic/inscripcion/add_file.php" enctype="multipart/form-data" method="post" style="text-align: center">
                  <span class="leftSide">
                      <label for="file_upload">Curriculum vitae:</label>
                  </span>
                  <input type="text" id="dniupload" name="dniupload" style="display:none"> 
                  <input type="text" id="upload" name="upload" value="uploadCurriculum" style="display:none">
                  <span class="rightSide">
                      <input type="file" name="file_upload" id="file_upload" multiple>
                  </span> <br><br>
                  
                  <span style="text-align: center">
                      <input type="submit" name="submit" value="Subir CV" class="button">
                  </span>
              </form>
            </div>
            <br><br>
            <!--FIN INSCRIPTION-->       
          </div> 

          <!--FIN CONTENT-->
        </div>

        <!-- COMPARTIR -->
        <div class="rightSide">
          <div style="margin: -10% 0 0 0; width: 75%"> 
              <div class="social">
                <!-- Facebook -->
                <a href="http://www.facebook.com/sharer.php?u=http://www.encontramas.com.ar/cv" target="_blank">
                  <img src="http://www.simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                </a>
                <!-- Twitter -->
                <a href="http://twitter.com/share?url=http://www.encontramas.com.ar/cv" target="_blank">
                  <img src="http://www.simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter"/>
                </a>
                <!-- Google+ -->
                <a href="https://plus.google.com/share?url=http://www.encontramas.com.ar/cv" target="_blank">
                  <img src="http://www.simplesharebuttons.com/images/somacro/google.png" alt="Google" />
                </a>
                <!-- LinkedIn -->
                <a href="http://www.linkedin.com/shareArticle?mini=true&url=http://www.encontramas.com.ar/cv" target="_blank">
                  <img src="http://www.simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER --> 
    <?php include '../Base/_footer.html'; ?>

</body>
</html>