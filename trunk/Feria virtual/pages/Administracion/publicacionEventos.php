<!DOCTYPE HTML>
<html>
  <head>
    <title>
      Publicacion de Eventos
    </title>
    <?php header("Access-Control-Allow-Origin: *");?>
    
    <META   http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link   rel="stylesheet"    type="text/css"   href="../../css/styles.css"               />
    <link   rel="stylesheet"    type="text/css"   href="../../css/publicacionEventos.css"   />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script type="text/javascript" src="../../logic/js/publicacionEventos.js"></script>

    <?php session_start(); ?>
  
    <?php if (isset($_SESSION['company_name'])) { 
          } else { 
            header('Location: http://www.encontramas.com.ar/virtual/pages/Administracion/companyLogin.php'); 
    }?>
   
    <script type="text/javascript">
      function getSession(){
        var x = <?php echo json_encode($_SESSION['company_id']) ?>;
        return x;
      }
    </script>
  </head>

  <body>
      <!-- MENU --> 
      <?php include '_administracionMenu.html'; ?>
      
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
            <img src="../../features/images/AAREII-logo.png" width="65" height="100">
          </div>
    
          <div style="clear: both"></div>

          <!-- SELECTION MENU --> 
          <div >
            <input type="button" value="Eventos publicados" class="button" onclick="showEvents();">
            <span width="5%"></span>
            <input type="button" value="Publicar nuevo evento" class="button" onclick="showCreateEvents();">
          </div>
          </br>
          <hr>

          <!-- TABLE WITH EVENTS --> 
          <table id="tableOutput">
            <thead>
              <tr>
                <th>T&iacutetulo            </th>
                <th>Inicio de Evento        </th>
                <th>Finalizacion de Evento  </th>
                <th>Descripci&oacuten       </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="cellTitle">
                  <a> Jornada de Puertas Abiertas </a>
                </td>
                <td class="cellDate">
                  25-Sep-2013 a las 17:00 hs
                </td>
                <td class="cellDate">
                  25-Sep-2013 a las 18:00 hs                 
                </td> 
                <td class="cellDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                </td>
              </tr>
            <tbody>
          </table>

          <!-- FORM FOR PUBLISHING --> 
          <form id="publishEvent" style="display: none" name="publishEvent" onsubmit="return sendData()">

            <!-- FECHA Y HORA DE INICIO --> 


            <!-- REQUISITOS (TABLA) --> 
            <div class="block">
              <h3 class="opensans textShadow">
                Informaci&oacuten
              </h3>
              <br>

              <table class="tableInput">
          
                <tr>
                  <th>
                    T&iacutetulo del evento
                  </th>
                  <td>
                    <input type="text" id="titulo_evento" name="descripcion_evento" placeholder="Titulo del evento.." maxlength="30" required>     
                  </td>
                </tr>
                <tr class="alt">
                  <th>
                    Fecha y Hora de Inicio
                  </th>
                  <td>
                    <select id="tiempo_inicio_anio" name="tiempo_inicio_anio" required>
                      <script>
                          $('#tiempo_inicio_anio').append($('<option />').val("").html("Año"));
                          fillYears($('select[name=tiempo_inicio_anio]'), 2014, 2013);
                      </script> 
                    </select>
                    <select id="tiempo_inicio_mes" name="tiempo_inicio_mes" required></select>
                    <select id="tiempo_inicio_dia" name="tiempo_inicio_dia" required></select>
                    <script>
                      $(fillDate($('select[name=tiempo_inicio_dia]'),$('select[name=tiempo_inicio_mes]'),$('select[name=tiempo_inicio_anio]')));
                    </script>

                    <select id="tiempo_inicio_hora"   name="tiempo_inicio_hora"   required onChange="fillMinute($('select[name=tiempo_inicio_minuto]'));"></select>
                    <select id="tiempo_inicio_minuto" name="tiempo_inicio_minuto" required onChange="fillHourEnd($('select[name=tiempo_finalizacion_hora]'), $('select[name=tiempo_inicio_hora]').val());"></select>

                  </td>
                </tr>
                <tr>
                  <th>
                    Fecha y Hora de Finalización
                  </th>
                  <td>
                    <select id="tiempo_finalizacion_anio" name="tiempo_finalizacion_anio" required>
                      <script>
                          $('#tiempo_finalizacion_anio').append($('<option />').val("").html("Año"));
                          fillYears($('select[name=tiempo_finalizacion_anio]'), 2014, 2013);
                      </script> 
                    </select>
                    <select id="tiempo_finalizacion_mes" name="tiempo_finalizacion_mes" required></select>
                    <select id="tiempo_finalizacion_dia" name="tiempo_finalizacion_dia" required></select>
                    <script>
                      $(fillDate($('select[name=tiempo_finalizacion_dia]'),$('select[name=tiempo_finalizacion_mes]'),$('select[name=tiempo_finalizacion_anio]')));
                    </script>

                    <select id="tiempo_finalizacion_hora" name="tiempo_finalizacion_hora" required onChange="fillMinuteEnd($('select[name=tiempo_finalizacion_minuto]'), $('select[name=tiempo_inicio_minuto]').val(), $('select[name=tiempo_inicio_hora]').val(), this.value);"></select>
                    <select id="tiempo_finalizacion_minuto" name="tiempo_finalizacion_minuto" required></select>

                    <script>
                      fillHour($('select[name=tiempo_inicio_hora]'), $('select[name=tiempo_inicio_minuto]'), $('select[name=tiempo_finalizacion_hora]'), $('select[name=tiempo_finalizacion_minuto]'));                    
                    </script>
                  </td>
                </tr>
                <tr class="alt">
                  <th>
                    Descripcion del Evento
                  </th>
                  <td>
                    <textarea id="descripcion_evento" name="descripcion_evento" rows="9" cols="50" maxlength="100" placeholder="Ingrese descripcion del evento.." style="resize: none;" required></textarea>
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


