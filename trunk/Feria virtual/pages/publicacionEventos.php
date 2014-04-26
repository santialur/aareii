<!DOCTYPE HTML>
<html>
  <head>
    <title>
      Publicacion de Ofertas Laborales
    </title>
    <?php header("Access-Control-Allow-Origin: *");?>
    
    <META   http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link   rel="stylesheet"    type="text/css"   href="../css/styles.css"              />
    <link   rel="stylesheet"  href="../css/publicacionOfertas.css" />
      
    <meta property="og:title" content="Feria de empresas- Encontra+ 2014" />
    <meta property="og:description" content="Publicacion de Ofertas Laborales" />
    <meta property="og:image" content="http://www.encontramas.com.ar/virtual/features/images/encontramas_facebook_foto.jpg" />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script type="text/javascript" src="../js/publicacionOfertas.js"></script>
    <?php session_start(); ?>
  
    <?php if (isset($_SESSION['company_name'])) { 
          } else { 
            header('Location: http://www.encontramas.com.ar/virtual/pages/companyLogin.php'); 
    }?>
   
    <script type="text/javascript">
      function getSession(){
    var x = <?php echo json_encode($_SESSION['company_id']) ?>;
    return x;
  }
    </script>
  </head>

  <body>
      <div id="nav">
            <ul>  
              <li class="opensans"><a href="http://www.encontramas.com.ar/">Encontra +</a></li>
              <li class="opensans"><a href="publicacionOfertas.php">Ofertas laborales</a></li>
              <!--<li class="opensans"><a href="candidatos.html">Candidatos</a></li>
              <li class="opensans"><a href="stand.php">Stand</a></li>-->
            </ul>
      </div>
      
      <div class="wrapperSmall">
        <div id="content" class="box">
    
          <!-- HEADER --> 
          <div class="leftSide">
            <h3>
              <span class="opensans textShadow"> 
                <label id="companyName"><?php echo $_SESSION['company_name'] ?></label>  
              </span>
            </h3>
            <h3>
              <span class="opensans textShadow"> 
                Creaci&oacuten de eventos
              </span>
            </h3>
          </div>

          <div class="rightSide">
            <img src="../features/images/AAREII-logo.png" width="65" height="100">
          </div>
    
          <div style="clear: both"></div>

          <!-- SELECTION MENU --> 
          <div >
            <input type="submit" value="Eventos publicados" class="button" onclick="">
            <span width="5%"></span>
            <input type="submit" value="Publicar nuevo evento" class="button" onclick="">
          </div>
          </br>
          <hr>

          <!-- TABLE WITH OFFERS --> 
          <table id="tableEvents">
          <thead>
            <tr>
              <th>T&iacutetulo      </th>
              <th>Fecha de Evento   </th>
              <th>Descripci&oacuten </th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td class="cellPosition">
                  <a> Pasante de Envasado </a>
                </td>
                <td class="cellDescription">
                  Nuestra busqueda esta orientada a estudiantes avanzados  de Ingenieria Quimica,
                                  Ingenieria electromecanica, Ingenieria Mecanica, Ingenieria Electronica o afines para desarrollarse en nuestra Planta Mendoza. Los..
                </td>
                <td>
                  25-Sep-2013
                </td>
                <td>
                                      
                </td> 
              </tr>
              <tr>
                <td class="cellPosition">
                  <a > Pasante de Envasado </a>
                </td>
                <td class="cellDescription">
                  Nuestra busqueda esta orientada a estudiantes avanzados  de Ingenieria Quimica,
                                  Ingenieria electromecanica, Ingenieria Mecanica, Ingenieria Electronica o afines para desarrollarse en nuestra Planta Mendoza. Los..
                </td>
                <td>
                  25-Sep-2013
                </td>
                <td>
                       
                </td>                 
              </tr>

            </tbody>
          </table>

          <!-- FORM FOR PUBLISHING --> 
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

            <!-- REQUISITOS (TABLA) --> 
            <div class="block">
              <h3 class="opensans textShadow">
                Requisitos
              </h3>
              <br>

              <table class="tablePublish">
          
                <tr>
                  <th>
                    Estudios Minimos
                  </th>
                  <td>
                    <input type="radio" name="estudios" value="Grado iniciado" required/>     Universitario Iniciado  <br>
                    <input type="radio" name="estudios" value="Grado avanzado" required/>     Universitario avanzado  <br>  
                    <input type="radio" name="estudios" value="Grado terminado" required/>    Universitario terminado  <br>             
                    <input type="radio" name="estudios" value="Posgrado iniciado" required/>  Posgrado iniciado       <br>
                    <input type="radio" name="estudios" value="Posgrado avanzado" required/>  Posgrado avanzado        <br>
                    <input type="radio" name="estudios" value="Posgrado terminado" required/> Posgrado terminado        <br>
                    
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

            <input type="submit" value="Publicar" class="button"> 
          </form><!-- END - FORM FOR PUBLISHING --> 

        </div><!-- END - CONTENT --> 

      </div><!-- END - WRAPPER --> 

    <!-- FOOTER --> 
    <?php include '_footer.html'; ?>

  </body>
</html>