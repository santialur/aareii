<?php 
  session_start(); 
  $offerId = $_GET['idOferta'];
  $_SESSION['company_id'] = 1; 
?> 
<html>
  <head>
    <link   rel="stylesheet"    type="text/css"   href="../../../css/styles.css"               />
    <link   rel="stylesheet"    type="text/css"   href="../../../css/publicacionOfertas.css"   />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script type="text/javascript" src="../../../logic/js/verOferta.js"></script>

    <script type="text/javascript">
      function getSession(){
        var x = <?php echo json_encode($_SESSION['company_id']) ?>;
        return x;
      } 
    
      function getOfferId(){
        var x = <?php echo $offerId ?>;
        return x;
      }
    </script>
  </head>
  <body style="padding: 2% 5%">
    <table id="tableOutput" >
            <thead>
              <tr>
                <th>Puesto              </th>
                <th>Descripcion         </th>
                <th>Areas de Estudio    </th>
                <th>Estudios Minimos    </th>
                <th>Lenguajes           </th>
                <th>Tipo de Contrato    </th>
                <th>Jornada de Trabajo  </th>
                <th>Fecha de Publicacion</th>
                <th>Fecha de Cierre     </th>
                <th>Postularse          </th>
              </tr>
            </thead>
            <tbody>
              <tr>
              </tr>
            </tbody>
          </table>
  </body>
</html>