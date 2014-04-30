function fillYears(target, x, y)
{
  var aux;

  for(var i=x; i>y; i--)
      aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';

  $(target).append(''+aux);
}

function fillDate()
{
  $('#fecha_cierre_mes').append($('<option />').val(0).html("Mes"));
  for (i = 1; i < 13; i++)
  {
    if(i<10){
      $('#fecha_cierre_mes').append($('<option />').val("0"+i).html(i));
    }else{
      $('#fecha_cierre_mes').append($('<option />').val(i).html(i));
    }
    
  }
  updateNumberOfDays(); 

  $('#fecha_cierre_anio, #fecha_cierre_mes').change(function(){
    updateNumberOfDays(); 
  });
}

function updateNumberOfDays()
{
  $('#fecha_cierre_dia').html('');
  month = $('#fecha_cierre_mes').val();
  year  = $('#fecha_cierre_anio').val();
  days  = daysInMonth(month, year);

  $('#fecha_cierre_dia').append($('<option />').val(0).html("Día"));

  for(i=1; i < days+1 ; i++){
    if(i<10){
      $('#fecha_cierre_dia').append($('<option />').val("0"+i).html(i));
    }else{
      $('#fecha_cierre_dia').append($('<option />').val(i).html(i));
    }
    
  }
}

function daysInMonth(month, year)
{
    return new Date(year, month, 0).getDate();
}

function fillDegrees(target)
{
 $(target).html(''+
   '<input type=checkbox name="carrera"  onclick="highlightCheckboxes(false);" value="Arquitectura"  />                  Arquitectura                            <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Dibujo tecnico"  />                Dibujo Técnico                          <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Diseño grafico"  />                Diseño Gráfico                          <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Diseño industrial"  />             Diseño industrial                       <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Diseño multimedial"  />            Diseño multimedial                      <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Diseño web"  />                    Diseño Web                              <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Adm. Agropecuaria"  />             Adm. Agropecuaria                       <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Adm. de empresas"  />              Adm. de Empresas                        <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Adm. y gestion publica"  />        Adm. y Gestión Pública                  <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Comercio internacional"  />        Comercio Internacional  / Exterior      <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Contabilidad"  />                  Contabilidad  / Auditoría           <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Economia"  />                      Economía                                <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Finanzas"  />                      Finanzas                                <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Marketing"  />                     Marketing  / Comercialización       <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Negociacion"  />                   Negociación                             <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Organizacion insdustrial"  />      Organización industrial                 <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="RRHH"  />                          Recursos Humanos /Relaciones Laborales  <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Sistemas de informacion"  />       Sistemas de Información                 <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Agrimensor"  />                    Agrimensor                              <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Arqueologia"  />                   Arqueología                             <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Bioingenieria"  />                 Bioingeniería                           <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Bioquimica"  />                    Bioquímica                              <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Cartografia"  />                   Cartografía                             <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ciencias fisicas"  />              Ciencias Físicas                        <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Geofisica"  />                     Geofísica                               <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Geologia"  />                      Geología  / Geomensura  / Topografía    <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Quimica"  />                       Química                                 <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Tecnologia de alimentos"  />       Tecnología de Alimentos                 <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Higiene y seguridad"  />           Higiene y Seguridad en el Trabajo       <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. aeroespacial"  />             Ing. Aeroespacial                       <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. aeronautica"  />              Ing. Aeronáutica                        <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. agronoma"  />                 Ing. Agrónoma  / Agropecuaria       <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. alimentos"  />                Ing. Alimentos                          <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. ambiental"  />                Ing. Ambiental                          <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. civil"  />                    Ing. Civil                              <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. electrica"  />                Ing. Eléctrica                          <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. electromecanica"  />          Ing. Electromecánica                    <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. electronica"  />              Ing. Eléctronica                        <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. en minas"  />                 Ing. en Minas                           <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. forestal"  />                 Ing. Forestal                           <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. hidraulica"  />               Ing. Hidráulica                         <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. industrial"  />               Ing. Industrial                         <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. matematica"  />               Ing. Matemática                         <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. materiales"  />               Ing. Materiales                         <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. mecanica"  />                 Ing. Mecánica  / Metalúrgica            <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. mecatronica"  />              Ing. Mecatrónica                        <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. naval"  />                    Ing. Naval                              <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. nuclear"  />                  Ing. Nuclear                            <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. pesquera"  />                 Ing. Pesquera  / Cultivos Marinos       <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. petroleo"  />                 Ing. Petróleo                           <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. quimica"  />                  Ing. Química                            <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. recursos hidraulicos"  />     Ing. Recursos Hídricos                  <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. sonido"  />                   Ing. Sonido                             <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. telecomunicaciones"  />       Ing. Telecomunicaciones                 <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. textil"  />                   Ing. Textil                             <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Seguridad industrial"  />          Seguridad Industrial                    <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Tecn. electricidad"  />            Tecn. Electricidad                      <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Tecn. electronica"  />             Tecn. Electrónica                       <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Tecn. mecanica"  />                Tecn. Mecánica                          <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Tecn. optico"  />                  Tecn. Óptico                            <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Tecn. telecomunicaciones"  />      Tecn. Telecomunicaciones                <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Lic. Organización Industrial"  />  Lic. en Organización Industrial         <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Analisis de sistemas"  />          Análisis de Sistemas                    <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Computacion"  />                   Computación                             <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Ing. informatica"  />              Ing. Informática  / sistemas            <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Programacion"  />                  Programación                            <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Redes"  />                         Redes                                   <br>'+
    '<input type=checkbox name="carrera" onclick="highlightCheckboxes(false);" value="Sistemas /tecnologia"  />      Sistemas  / Tecnología                  <br>');
}

function highlightCheckboxes(flag)
{
    if(flag)
    {
      $("#careers").css({
                'box-shadow' : '2px 2px 3px Red',
                '-moz-box-shadow' : '2px 2px 3px Red',
                '-webkit-box-shadow' : '2px 2px 3px Red',
  });
    }
    else
    {
      $("#careers").css({
                'box-shadow' : 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none',
  });
    }
}

function sendData(){

   var checkedAtLeastOne = false;
   
   $('input[type="checkbox"]').each(function()
   {
    if ($(this).is(":checked"))
    {
      checkedAtLeastOne = true;
    }
   });
   if(checkedAtLeastOne == false)
   {
      alert("Seleccione al menos una carrera");
      highlightCheckboxes(true);
      return false;
   }

   var careerSelected = "" ;
   $("input:checkbox[name=carrera]:checked").each(function() 
   {
       careerSelected += $(this).val();
       careerSelected += ", ";
   });
   
   var languages = "";
   if($('input[name="nivel_español"]:checked').val()!="Nada"){
    languages += "Español: " + $('input[name="nivel_español"]:checked').val() + ", ";
   }
   if($('input[name="nivel_ingles"]:checked').val()!="Nada"){
    languages += "Ingles: " + $('input[name="nivel_ingles"]:checked').val() + ", ";
   }
   if($('input[name="nivel_portugues"]:checked').val()!="Nada"){
    languages += "Portugues: " + $('input[name="nivel_portugues"]:checked').val()+ ", ";
   }
   if($('input[name="nivel_aleman"]:checked').val()!="Nada"){
    languages += "Aleman: " + $('input[name="nivel_aleman"]:checked').val()+ ", ";
   }
   if($('input[name="nivel_italiano"]:checked').val()!="Nada"){
    languages += "Italiano: " + $('input[name="nivel_italiano"]:checked').val()+ ", ";
   }
   if($('input[name="nivel_frances"]:checked').val()!="Nada"){
    languages += "Frances: " + $('input[name="nivel_frances"]:checked').val()+ ", ";
   }
   languages = languages.substring(0, languages.length - 2);
   careerSelected = careerSelected.substring(0, careerSelected.length - 2);

   var company_id = getSession();
   $.ajax({ url: '../../logic/php/saveOffer.php',
            data: {companyid:        company_id,
                 jobTitle:       document.getElementById("info_puesto").value,
                 jobDescription:     document.getElementById("descripcion_puesto").value,
                 jobStudiesAreas:      careerSelected,
                 jobMinimumStudies:      $("input[type='radio'][name='estudios']:checked").val(),
                 jobLanguages:     languages,
                 jobConsiderations:      document.getElementById("requisitos_puesto").value,
                 jobDateClose:       document.getElementById("fecha_cierre_anio").value + "-" + document.getElementById("fecha_cierre_mes").value + "-" + document.getElementById("fecha_cierre_dia").value,
                 jobContractType:      $("input[type='radio'][name='contrato']:checked").val(),
                 jobShift:         $("input[type='radio'][name='jornada']:checked").val(),
                 },
            type: 'POST',
            success: function(output){
                if(output == "Exito"){
                  alert("La oferta se publicó correctamente");
                  document.publishOffer.reset();
                  $('html, body').animate({scrollTop: '0px'},1500);
                }else{
                  alert("Hubo un problema al guardar la publicación");
                  
                }
            }
           });
   return false;
}

function showOffers(){
  document.getElementById("tableOutput").style.display = 'inline-table';
  document.getElementById("publishOffer").style.display = 'none';
}
function showCreateOffer(){
  document.getElementById("tableOutput").style.display = 'none';
  document.getElementById("publishOffer").style.display = 'inline';
}