<!DOCTYPE HTML>
<html>
  <head>
    <title>
      Postulantes a ofertas laborales
    </title>
    <?php header("Access-Control-Allow-Origin: *");?>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <META   http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link   rel="stylesheet"    type="text/css"   href="../../css/styles.css"               />
    <link   rel="stylesheet"    type="text/css"   href="../../css/publicacionOfertas.css"   />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>

    <?php session_start(); ?>
  
    <?php if (isset($_SESSION['company_name'])) { 
          } else { 
            header('Location: http://www.encontramas.com.ar/virtual/pages/Administracion/companyLogin.php'); 
    }?>
   
    <script type="text/javascript">
      function getSession(){
        var x = <?php echo json_encode($_SESSION['company_identification']) ?>;
        
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
                Postulantes de ofertas laborales
              </span>
            </h3>
          </div>
    
          <div class="rightSide">
            <img src="../../features/images/AAREII-logo.png" width="65" height="100">
          </div>
        
        <div style="clear: both"></div>
        
        <?php $companyId=json_encode($_SESSION['company_identification']); include 'list_files.php'; ?>
        
        
          <div style="clear: both"></div>

        </div><!-- END - CONTENT --> 

      </div><!-- END - WRAPPER --> 

    <!-- FOOTER --> 
    <?php include '../Base/_footer.html'; ?>

  </body>
</html>