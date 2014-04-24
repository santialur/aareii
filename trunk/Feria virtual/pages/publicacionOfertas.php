<!DOCTYPE HTML>
<html>
  <head>
    <title>
      Publicacion de Ofertas Laborales
    </title>

    <META   http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link   rel="stylesheet"    type="text/css"   href="../css/styles.css"              />

    <meta property="og:title" content="Feria de empresas- Encontra+ 2014" />
    <meta property="og:description" content="Publicacion de Ofertas Laborales" />
    <meta property="og:image" content="http://www.encontramas.com.ar/virtual/features/images/encontramas_facebook_foto.jpg" />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script type="text/javascript" src="../js/publishOffers.js"></script>
   
  </head>

  <body>
      <div id="nav">
            <ul>  
              <li class="opensans"><a href="http://www.encontramas.com.ar/">Encontra +</a></li>
              <li class="opensans"><a href="inscripcion.html">Inscribirse</a></li>
            </ul>
      </div>
      <br>
      <br>
      
      <div class="wrapperSmall">
        <div id="content" class="box">
    
          <!-- HEADER --> 
          <div class="leftSide">
            <h3>
              <span class="opensans textShadow"> 
                Creaci&oacuten de ofertas laborales   
              </span>
            </h3>
          </div>

          <div class="rightSide">
            <img src="../features/images/AAREII-logo.png" width="65" height="100">
          </div>

          <div style="clear: both"></div>


          <div id="autenticateCompany" style="width: 50%; margin: 0 auto">
            <div id="ID_div">
              <span class="leftSide">
                <strong>Empresa</strong>:   
                <span class="red">*</span>
              </span>
              <input type="text" id="identification" name="identification" class="rightSide">
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
              <a  href="../pages/forgotPassword.html" style="font-size:80%; text-decoration:underline;">Olvide mi contraseña</a><br><br>
            </div>
        
            <div id="buttons" style="text-align: center">
              <input type="button" id="create_button" value="Ingresar" class="button" onclick="checkCompany()" style="margin-left: 3%"><br><br>
            </div>
          </div>
          
          <form id="publishOffer" style="display: none" name="publishOffer" onsubmit="return sendData()">

            <!-- PUESTO --> 
            <div class="block">
              <h3 class="opensans textShadow">
                Puesto
              </h3>
              <br>
              <textarea id="info_puesto" name="info_puesto" rows="2" cols="50" maxlength="60" placeholder="Ingrese puesto.." style="resize: none;" required></textarea>
            </div>

            <!-- DESCRIPCION --> 
            <div class="block">
              <h3 class="opensans textShadow">
                Descripcion
              </h3>
              <br>
              <textarea id="descripcion_puesto" name="descripcion_puesto" rows="9" cols="50" maxlength="500" placeholder="Ingrese descripcion del puesto.." style="resize: none;" required></textarea>
            </div>

            <!-- FECHA DE CIERRE --> 
            <div class="block">
              <h5 class="opensans textShadow">
                Fecha de Cierre
              </h5>
              <br>

              <select id="fecha_cierre_anio" name="fecha_cierre_anio">
                <script>
                    $('#fecha_cierre_anio').append($('<option />').val(1).html("Año"));
                    fillYears($('select[name=fecha_cierre_anio]'), 2016, 2013);
                </script> 
              </select>
              <select id="fecha_cierre_mes" name="fecha_cierre_mes"></select>
              <select id="fecha_cierre_dia" name="fecha_cierre_dia"></select>
              
              <script>
                $(fillBirthDate);
              </script>
            </div>

            <!-- REQUISITOS --> 
            <div class="block">
              <h3 class="opensans textShadow">
                Requisitos
              </h3>
              <br>

              <table class="tableOffers">
                <tr>
                  <th>
                    Estudios Minimos
                  </th>
                  <td>
                    <input type="radio" name="estudios" value="gradoIniciado" required/>   Universitario Iniciado  <br>
                    <input type="radio" name="estudios" value="gradoAvanzado" required/>   Universitario Avanzado  <br>                
                    <input type="radio" name="estudios" value="posgradIniciado" required/> Posgrado Iniciado       <br>
                    <input type="radio" name="estudios" value="posgradoAvanzado" required/>Posgrado Avanzado 
                  </td>
                </tr>
                <tr class="alt">
                  <th>
                    Carrera/s
                  </th>
                  <td id="careers">
                    <script>
                      fillDegrees($('#careers'));
                    </script>
                  </td>
                </tr>
                <tr>
                  <th>
                    Idiomas
                  </th>
                  <td>
                    <table id="tableLanguages" cellspacing="2">
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
                    </table> 
                  </td>
                </tr>
                <tr class="alt">
                  <th>
                    Otros Requisitos
                  </th>
                  <td>
                    <textarea id="requisitos_puesto" name="requisitos_puesto" rows="15" cols="50" maxlength="1000" placeholder="Ingrese otros requisitos.." style="resize: none;" required></textarea>
                  </td>
                </tr>
              </table>
            </div>

            
            <!-- CONTRATO --> 
            <div class="block">
              <h3 class="opensans textShadow">
                Contrato
              </h3>
              <br>

              <table class="tableOffers">
                <tr>
                  <th>
                    Tipo de Contrato
                  </th>
                  <td>
                    <input type="radio" name="contrato" value="contratoEfectivo"/>  Efectivo  <br>
                    <input type="radio" name="contrato" value="contratoPasante"/>   Pasante   <br> 
                  </td>
                </tr>
                <tr class="alt">
                  <th>
                    Jornada Laboral
                  </th>
                  <td>
                    <input type="radio" name="jornada" value="jornadaFull"/>   Full Time  <br>
                    <input type="radio" name="jornada" value="jornadaPart"/>   Part Time  <br>   
                  </td>
                </tr>
              </table>
            </div>

            <br>
            <input type="submit" value="Publicar" class="button"> 
          </form>

        </div>
      </div>

    <!-- FOOTER --> 
    <?php include '_footer.html'; ?>

  </body>
</html>