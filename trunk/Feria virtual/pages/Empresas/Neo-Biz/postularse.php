<?php 
  session_start(); 
  $offerId = $_GET['idOferta'];
  $_SESSION['company_id'] = 1; 
?> 
<html>
  <head>
    <link   rel="stylesheet"    type="text/css"   href="../../../css/styles.css"               />
    <link   rel="stylesheet"    type="text/css"   href="../../../css/publicacionOfertas.css"   />

    <script src="http://code.jquery.com/jquery-1.9.1.min.js">     </script>
    <script type="text/javascript" src="../../../logic/js/postularse.js"></script>

    <script type="text/javascript">
      function getSession(){
        var x = <?php echo json_encode($_SESSION['company_id']) ?>;
        return x;
      } 
    
      function getOfferId(){
        var x = <?php echo $offerId; ?>;
        return x;
      }

    </script>
  </head>
  
  <body style="padding: 1% 1.5%; height: 320px">
    <?php include '../_empresasPostularse.html'; ?>
  </body>
</html>