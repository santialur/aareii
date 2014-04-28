<!DOCTYPE HTML>
<html>
  <head>
    <title>
      Administracion empresas
    </title>
    <?php header("Access-Control-Allow-Origin: *");?>
    <META   http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link   rel="stylesheet"    type="text/css"   href="../css/styles.css"              />

    <meta property="og:title" content="Feria de empresas- Encontra+ 2014" />
    <meta property="og:description" content="Publicacion de Ofertas Laborales" />
    <meta property="og:image" content="http://www.encontramas.com.ar/virtual/features/images/encontramas_facebook_foto.jpg" />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script type="text/javascript" src="../js/loginCompany.js"></script>
   
  </head>

  <body>
      <div id="nav">
            <ul>  
              <li class="opensans"><a href="http://www.encontramas.com.ar/">Encontra +</a></li>
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
              <a  href="" style="font-size:80%; text-decoration:underline;">Cambiar contraseña</a><br><br>
            </div>
        
            <div id="buttons" style="text-align: center">
              <input type="button" id="create_button" value="Ingresar" class="button" onclick="checkCompany()" style="margin-left: 3%"><br><br>
            </div>
          </div>
        </div>
      </div>

    <!-- FOOTER --> 
    <?php include '_footer.html'; ?>

  </body>
</html>