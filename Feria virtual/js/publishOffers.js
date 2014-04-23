function fillMonths(target)
{
  $(target).html(''+
    '<option value="1" selected="">  Enero       </option>'+
    '<option value="2">              Febrero     </option>'+
    '<option value="3">              Marzo       </option>'+
    '<option value="4">              Abril       </option>'+
    '<option value="5">              Mayo        </option>'+
    '<option value="6">              Junio       </option>'+
    '<option value="7">              Julio       </option>'+
    '<option value="8">              Agosto      </option>'+
    '<option value="9">              Septiembre  </option>'+
    '<option value="10">             Octubre     </option>'+
    '<option value="11">             Noviembre   </option>'+
    '<option value="12">             Diciembre   </option>');
}

function fillYears(target, x, y)
{
  var aux;

  for(var i=x; i>y; i--)
      aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';

  $(target).append(''+aux);
}

function fillBirthDate()
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
    '<input type=checkbox name="carrera" class="group-required" style="display: none"/>'+
    '<input type=checkbox name="carrera" value="Arquitectura"  />                  Arquitectura                            <br>'+
    '<input type=checkbox name="carrera" value="Dibujo tecnico"  />                Dibujo Técnico                          <br>'+
    '<input type=checkbox name="carrera" value="Diseño grafico"  />                Diseño Gráfico                          <br>'+
    '<input type=checkbox name="carrera" value="Diseño industrial"  />             Diseño industrial                       <br>'+
    '<input type=checkbox name="carrera" value="Diseño multimedial"  />            Diseño multimedial                      <br>'+
    '<input type=checkbox name="carrera" value="Diseño web"  />                    Diseño Web                              <br>'+
    '<input type=checkbox name="carrera" value="Actuario"  />                      Actuario                                <br>'+
    '<input type=checkbox name="carrera" value="Adm. Agropecuaria"  />             Adm. Agropecuaria                       <br>'+
    '<input type=checkbox name="carrera" value="Adm. de empresas"  />              Adm. de Empresas                        <br>'+
    '<input type=checkbox name="carrera" value="Adm. y gestion publica"  />        Adm. y Gestión Pública                  <br>'+
    '<input type=checkbox name="carrera" value="Comercio internacional"  />        Comercio Internacional  / Exterior      <br>'+
    '<input type=checkbox name="carrera" value="Contabilidad"  />                  Contabilidad  / Auditoría           <br>'+
    '<input type=checkbox name="carrera" value="Economia"  />                      Economía                                <br>'+
    '<input type=checkbox name="carrera" value="Finanzas"  />                      Finanzas                                <br>'+
    '<input type=checkbox name="carrera" value="Marketing"  />                     Marketing  / Comercialización       <br>'+
    '<input type=checkbox name="carrera" value="Negociacion"  />                   Negociación                             <br>'+
    '<input type=checkbox name="carrera" value="Organizacion insdustrial"  />      Organización industrial                 <br>'+
    '<input type=checkbox name="carrera" value="RRHH"  />                          Recursos Humanos /Relaciones Laborales  <br>'+
    '<input type=checkbox name="carrera" value="Sistemas de informacion"  />       Sistemas de Información                 <br>'+
    '<input type=checkbox name="carrera" value="Agrimensor"  />                    Agrimensor                              <br>'+
    '<input type=checkbox name="carrera" value="Arqueologia"  />                   Arqueología                             <br>'+
    '<input type=checkbox name="carrera" value="Bioingenieria"  />                 Bioingeniería                           <br>'+
    '<input type=checkbox name="carrera" value="Bioquimica"  />                    Bioquímica                              <br>'+
    '<input type=checkbox name="carrera" value="Cartografia"  />                   Cartografía                             <br>'+
    '<input type=checkbox name="carrera" value="Ciencias fisicas"  />              Ciencias Físicas                        <br>'+
    '<input type=checkbox name="carrera" value="Geofisica"  />                     Geofísica                               <br>'+
    '<input type=checkbox name="carrera" value="Geologia"  />                      Geología  / Geomensura  / Topografía    <br>'+
    '<input type=checkbox name="carrera" value="Quimica"  />                       Química                                 <br>'+
    '<input type=checkbox name="carrera" value="Tecnologia de alimentos"  />       Tecnología de Alimentos                 <br>'+
    '<input type=checkbox name="carrera" value="Higiene y seguridad"  />           Higiene y Seguridad en el Trabajo       <br>'+
    '<input type=checkbox name="carrera" value="Ing. aeroespacial"  />             Ing. Aeroespacial                       <br>'+
    '<input type=checkbox name="carrera" value="Ing. aeronautica"  />              Ing. Aeronáutica                        <br>'+
    '<input type=checkbox name="carrera" value="Ing. agronoma"  />                 Ing. Agrónoma  / Agropecuaria       <br>'+
    '<input type=checkbox name="carrera" value="Ing. alimentos"  />                Ing. Alimentos                          <br>'+
    '<input type=checkbox name="carrera" value="Ing. ambiental"  />                Ing. Ambiental                          <br>'+
    '<input type=checkbox name="carrera" value="Ing. civil"  />                    Ing. Civil                              <br>'+
    '<input type=checkbox name="carrera" value="Ing. electrica"  />                Ing. Eléctrica                          <br>'+
    '<input type=checkbox name="carrera" value="Ing. electromecanica"  />          Ing. Electromecánica                    <br>'+
    '<input type=checkbox name="carrera" value="Ing. electronica"  />              Ing. Eléctronica                        <br>'+
    '<input type=checkbox name="carrera" value="Ing. en minas"  />                 Ing. en Minas                           <br>'+
    '<input type=checkbox name="carrera" value="Ing. forestal"  />                 Ing. Forestal                           <br>'+
    '<input type=checkbox name="carrera" value="Ing. hidraulica"  />               Ing. Hidráulica                         <br>'+
    '<input type=checkbox name="carrera" value="Ing. industrial"  />               Ing. Industrial                         <br>'+
    '<input type=checkbox name="carrera" value="Ing. matematica"  />               Ing. Matemática                         <br>'+
    '<input type=checkbox name="carrera" value="Ing. materiales"  />               Ing. Materiales                         <br>'+
    '<input type=checkbox name="carrera" value="Ing. mecanica"  />                 Ing. Mecánica  / Metalúrgica            <br>'+
    '<input type=checkbox name="carrera" value="Ing. mecatronica"  />              Ing. Mecatrónica                        <br>'+
    '<input type=checkbox name="carrera" value="Ing. naval"  />                    Ing. Naval                              <br>'+
    '<input type=checkbox name="carrera" value="Ing. nuclear"  />                  Ing. Nuclear                            <br>'+
    '<input type=checkbox name="carrera" value="Ing. pesquera"  />                 Ing. Pesquera  / Cultivos Marinos       <br>'+
    '<input type=checkbox name="carrera" value="Ing. petroleo"  />                 Ing. Petróleo                           <br>'+
    '<input type=checkbox name="carrera" value="Ing. quimica"  />                  Ing. Química                            <br>'+
    '<input type=checkbox name="carrera" value="Ing. recursos hidraulicos"  />     Ing. Recursos Hídricos                  <br>'+
    '<input type=checkbox name="carrera" value="Ing. sonido"  />                   Ing. Sonido                             <br>'+
    '<input type=checkbox name="carrera" value="Ing. telecomunicaciones"  />       Ing. Telecomunicaciones                 <br>'+
    '<input type=checkbox name="carrera" value="Ing. textil"  />                   Ing. Textil                             <br>'+
    '<input type=checkbox name="carrera" value="Seguridad industrial"  />          Seguridad Industrial                    <br>'+
    '<input type=checkbox name="carrera" value="Tecn. electricidad"  />            Tecn. Electricidad                      <br>'+
    '<input type=checkbox name="carrera" value="Tecn. electronica"  />             Tecn. Electrónica                       <br>'+
    '<input type=checkbox name="carrera" value="Tecn. mecanica"  />                Tecn. Mecánica                          <br>'+
    '<input type=checkbox name="carrera" value="Tecn. optico"  />                  Tecn. Óptico                            <br>'+
    '<input type=checkbox name="carrera" value="Tecn. telecomunicaciones"  />      Tecn. Telecomunicaciones                <br>'+
    '<input type=checkbox name="carrera" value="Lic. Organización Industrial"  />  Lic. en Organización Industrial         <br>'+
    '<input type=checkbox name="carrera" value="analisis de sistemas"  />          Análisis de Sistemas                    <br>'+
    '<input type=checkbox name="carrera" value="Computacion"  />                   Computación                             <br>'+
    '<input type=checkbox name="carrera" value="Ing. informatica"  />              Ing. Informática  / sistemas            <br>'+
    '<input type=checkbox name="carrera" value="Programacion"  />                  Programación                            <br>'+
    '<input type=checkbox name="carrera" value="Redes"  />                         Redes                                   <br>'+
    '<input type=checkbox name="carrera" value="Sistemas /tecnologia"  />      Sistemas  / Tecnología                  <br>');
}


function sendData(){
   var careerSelected;
   $("input:checkbox[name=carrera]:checked").each(function() {
       //selected.push($(this).val());
       careerSelected += $(this).val();
  });
   alert(careerSelected);
}