<!DOCTYPE HTML>
<html>
  <head>
    <title>
      Publicacion de Noticias y Encuesta
    </title>


    <link   rel="stylesheet"    type="text/css"   href="../../css/styles.css"              />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script type="text/javascript" src="../../logic/js/cargaNoticiasEncuestas.js"></script>


  </head>

  <body>
      <!-- MENU -->       
      <div class="wrapperSmall">
        <div id="content" class="box">
    
          <!-- HEADER --> 
          <div class="leftSide">
            <h3>
              <span class="opensans textShadow"> 
                Publicacion de Noticias
              </span>
            </h3>
          </div>

          <div class="rightSide">
            <img src="../../features/images/AAREII-logo.png" width="65" height="100">
          </div>
    
          <div style="clear: both"></div>

          <!-- SELECTION MENU --> 
          <div >
            <input type="button" value="Publicar Noticias" class="button" onclick="showNews();">
            <span width="5%"></span>
            <input type="button" value="Publicar una Encuesta" class="button" onclick="showPoll();">
          </div>
          <br><hr><br>

          <div id="newsBlock">
            <!-- TABLE WITH NEWS --> 
            <h3 class="opensans textShadow">
              Noticias Publicadas
            </h3>
            <table id="tableOutput">
            <thead>
              <tr>
                <th>Titular                 </th>
                <th>Fecha de Publicacion    </th>
                <th>Descripci&oacuten       </th>
              </tr>
            </thead>
              <tr>
                <td class="cellTitle">
                </td>
                <td class="cellDate">
                </td>
                <td class="cellDescription">
                </td>
              </tr>
            </table>

            <!-- FORM FOR PUBLISHING --> 
            <form id="publishNews" style="" name="publishNews" onsubmit="return sendData()">

              <!-- (TABLA) --> 
              <div class="block">
                <h3 class="opensans textShadow">
                  Publique una Noticia
                </h3>
                <br>

                <table class="tableInput">
            
                  <tr>
                    <th>
                      Titular de Noticia
                    </th>
                    <td>
                      <input type="text" id="titulo_evento" name="descripcion_evento" placeholder="Titulo del evento.." maxlength="30" required>     
                    </td>
                  </tr>
                  <tr class="alt">
                    <th>
                      Fecha de Evento
                    </th>
                    <td>
                      <select id="fecha_noticia_anio" name="fecha_noticia_anio" required>
                        <script>
                            $('#fecha_noticia_anio').append($('<option />').val(1).html("Año"));
                            fillYears($('select[name=fecha_noticia_anio]'), 2014, 2013);
                        </script> 
                      </select>
                      <select id="fecha_noticia_mes" name="fecha_noticia_mes" required></select>
                      <select id="fecha_noticia_dia" name="fecha_noticia_dia" required></select>
                      
                      <script>
                        $(fillDate);
                      </script>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Descripcion de Noticia
                    </th>
                    <td>
                      <textarea id="descripcion_noticia" name="descripcion_noticia" rows="5" cols="50" maxlength="25" placeholder="Ingrese descripcion de la noticia.." style="resize: none;" required></textarea>
                    </td>
                  </tr>
                </table>
              </div>

              <input type="submit" value="Publicar" class="button"> 

            </form><!-- END - FORM FOR PUBLISHING --> 
            <br><hr><br>
          </div>

          <div id="pollBlock" style="display:none">
            <!-- TABLE WITH POLL --> 
            <h3 class="opensans textShadow">
              Encuesta Publicada
            </h3>
            <table id="tableOutput">
            <thead>
              <tr>
                <th>Pregunta                </th>
                <th>Opciones                </th>
              </tr>
            </thead>
              <tr>
                <td class="cellTitle">
                  <a>  </a>
                </td>
                <td class="cellDate">

                </td>
              </tr>
            </table>

            <!-- FORM FOR PUBLISHING --> 
            <form id="publishPoll" style="" name="publishPoll" onsubmit="return sendData()">

              <!-- REQUISITOS (TABLA) --> 
              <div class="block">
                <h3 class="opensans textShadow">
                  Publique una Encuesta
                </h3>
                <br>

                <table class="tableInput">
                  <tr>
                    <th>
                      Pregunta
                    </th>
                    <td>
                      <input type="text" id="titulo_evento" name="descripcion_evento" placeholder="Titulo del evento.." maxlength="30" required>     
                    </td>
                  </tr>
                  <tr class="alt">
                    <th>
                      Opciones
                    </th>
                    <td>
                      <textarea id="descripcion_noticia" name="descripcion_noticia" rows="5" cols="50" maxlength="25" placeholder="Ingrese descripcion de la noticia.." style="resize: none;" required></textarea>
                    </td>
                  </tr>
                </table>
              </div>

              <input type="submit" value="Publicar" class="button"> 

            </form><!-- END - FORM FOR PUBLISHING --> 
          </div>

        </div><!-- END - CONTENT --> 

      </div><!-- END - WRAPPER --> 

    <!-- FOOTER --> 
    <?php include '../Base/_footer.html'; ?>

  </body>
</html>

