<!DOCTYPE HTML>
<html>
  <head>
    <title>
      Publicacion de Noticias y Encuesta
    </title>

    <link   rel="stylesheet"    type="text/css"   href="../../css/styles.css"              />

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
            <input type="button" value="Eventos publicados" class="button" onclick="">
            <span width="5%"></span>
            <input type="button" value="Publicar nuevo evento" class="button" onclick="">
          </div>
          <br>
          <hr><br>

          <!-- TABLE WITH EVENTS --> 
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
                <a> Jornada de Puertas Abiertas </a>
              </td>
              <td class="cellDate">
                25-Sep-2013
              </td>
              <td class="cellDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
              </td>
            </tr>
          </table>

          <!-- FORM FOR PUBLISHING --> 
          <form id="publishEvent" style="" name="publishEvent" onsubmit="return sendData()">

            <!-- REQUISITOS (TABLA) --> 
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

        </div><!-- END - CONTENT --> 

      </div><!-- END - WRAPPER --> 

    <!-- FOOTER --> 
    <?php include '../Base/_footer.html'; ?>

  </body>
</html>

