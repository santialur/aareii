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
    '<input type=checkbox name="carrera" value="Arquitectura" required />                  Arquitectura                            <br>'+
    '<input type=checkbox name="carrera" value="Dibujo tecnico" required />                Dibujo Técnico                          <br>'+
    '<input type=checkbox name="carrera" value="Diseño grafico" required />                Diseño Gráfico                          <br>'+
    '<input type=checkbox name="carrera" value="Diseño industrial" required />             Diseño industrial                       <br>'+
    '<input type=checkbox name="carrera" value="Diseño multimedial" required />            Diseño multimedial                      <br>'+
    '<input type=checkbox name="carrera" value="Diseño web" required />                    Diseño Web                              <br>'+
    '<input type=checkbox name="carrera" value="Actuario" required />                      Actuario                                <br>'+
    '<input type=checkbox name="carrera" value="Adm. Agropecuaria" required />             Adm. Agropecuaria                       <br>'+
    '<input type=checkbox name="carrera" value="Adm. de empresas" required />              Adm. de Empresas                        <br>'+
    '<input type=checkbox name="carrera" value="Adm. y gestion publica" required />        Adm. y Gestión Pública                  <br>'+
    '<input type=checkbox name="carrera" value="Comercio internacional" required />        Comercio Internacional  / Exterior  <br>'+
    '<input type=checkbox name="carrera" value="Contabilidad" required />                  Contabilidad  / Auditoría      <br>'+
    '<input type=checkbox name="carrera" value="Economia" required />                      Economía                                <br>'+
    '<input type=checkbox name="carrera" value="Finanzas" required />                      Finanzas                                <br>'+
    '<input type=checkbox name="carrera" value="Marketing" required />                     Marketing  / Comercialización  <br>'+
    '<input type=checkbox name="carrera" value="Negociacion" required />                   Negociación                             <br>'+
    '<input type=checkbox name="carrera" value="Organizacion insdustrial" required />      Organización industrial                 <br>'+
    '<input type=checkbox name="carrera" value="RRHH" required />                          Recursos Humanos /Relaciones Laborales  <br>'+
    '<input type=checkbox name="carrera" value="Sistemas de informacion" required />       Sistemas de Información                 <br>'+
    '<input type=checkbox name="carrera" value="Agrimensor" required />                    Agrimensor                              <br>'+
    '<input type=checkbox name="carrera" value="Arqueologia" required />                   Arqueología                             <br>'+
    '<input type=checkbox name="carrera" value="Bioingenieria" required />                 Bioingeniería                           <br>'+
    '<input type=checkbox name="carrera" value="Bioquimica" required />                    Bioquímica                              <br>'+
    '<input type=checkbox name="carrera" value="Cartografia" required />                   Cartografía                             <br>'+
    '<input type=checkbox name="carrera" value="Ciencias fisicas" required />              Ciencias Físicas                        <br>'+
    '<input type=checkbox name="carrera" value="Geofisica" required />                     Geofísica                               <br>'+
    '<input type=checkbox name="carrera" value="Geologia" required />                      Geología  / Geomensura  / Topografía      <br>'+
    '<input type=checkbox name="carrera" value="Quimica" required />                       Química                                 <br>'+
    '<input type=checkbox name="carrera" value="Tecnologia de alimentos" required />       Tecnología de Alimentos                 <br>'+
    '<input type=checkbox name="carrera" value="Higiene y seguridad" required />           Higiene y Seguridad en el Trabajo       <br>'+
    '<input type=checkbox name="carrera" value="Ing. aeroespacial" required />             Ing. Aeroespacial                       <br>'+
    '<input type=checkbox name="carrera" value="Ing. aeronautica" required />              Ing. Aeronáutica                        <br>'+
    '<input type=checkbox name="carrera" value="Ing. agronoma" required />                 Ing. Agrónoma  / Agropecuaria  <br>'+
    '<input type=checkbox name="carrera" value="Ing. alimentos" required />                Ing. Alimentos                          <br>'+
    '<input type=checkbox name="carrera" value="Ing. ambiental" required />                Ing. Ambiental                          <br>'+
    '<input type=checkbox name="carrera" value="Ing. civil" required />                    Ing. Civil                              <br>'+
    '<input type=checkbox name="carrera" value="Ing. electrica" required />                Ing. Eléctrica                          <br>'+
    '<input type=checkbox name="carrera" value="Ing. electromecanica" required />          Ing. Electromecánica                    <br>'+
    '<input type=checkbox name="carrera" value="Ing. electronica" required />              Ing. Eléctronica                        <br>'+
    '<input type=checkbox name="carrera" value="Ing. en minas" required />                 Ing. en Minas                           <br>'+
    '<input type=checkbox name="carrera" value="Ing. forestal" required />                 Ing. Forestal                           <br>'+
    '<input type=checkbox name="carrera" value="Ing. hidraulica" required />               Ing. Hidráulica                         <br>'+
    '<input type=checkbox name="carrera" value="Ing. industrial" required />               Ing. Industrial                         <br>'+
    '<input type=checkbox name="carrera" value="Ing. matematica" required />               Ing. Matemática                         <br>'+
    '<input type=checkbox name="carrera" value="Ing. materiales" required />               Ing. Materiales                         <br>'+
    '<input type=checkbox name="carrera" value="Ing. mecanica" required />                 Ing. Mecánica  / Metalúrgica   <br>'+
    '<input type=checkbox name="carrera" value="Ing. mecatronica" required />              Ing. Mecatrónica                        <br>'+
    '<input type=checkbox name="carrera" value="Ing. naval" required />                    Ing. Naval                              <br>'+
    '<input type=checkbox name="carrera" value="Ing. nuclear" required />                  Ing. Nuclear                            <br>'+
    '<input type=checkbox name="carrera" value="Ing. pesquera" required />                 Ing. Pesquera  / Cultivos Marinos  <br>'+
    '<input type=checkbox name="carrera" value="Ing. petroleo" required />                 Ing. Petróleo                           <br>'+
    '<input type=checkbox name="carrera" value="Ing. quimica" required />                  Ing. Química                            <br>'+
    '<input type=checkbox name="carrera" value="Ing. recursos hidraulicos" required />     Ing. Recursos Hídricos                  <br>'+
    '<input type=checkbox name="carrera" value="Ing. sonido" required />                   Ing. Sonido                             <br>'+
    '<input type=checkbox name="carrera" value="Ing. telecomunicaciones" required />       Ing. Telecomunicaciones                 <br>'+
    '<input type=checkbox name="carrera" value="Ing. textil" required />                   Ing. Textil                             <br>'+
    '<input type=checkbox name="carrera" value="Seguridad industrial" required />          Seguridad Industrial                    <br>'+
    '<input type=checkbox name="carrera" value="Tecn. electricidad" required />            Tecn. Electricidad                      <br>'+
    '<input type=checkbox name="carrera" value="Tecn. electronica" required />             Tecn. Electrónica                       <br>'+
    '<input type=checkbox name="carrera" value="Tecn. mecanica" required />                Tecn. Mecánica                          <br>'+
    '<input type=checkbox name="carrera" value="Tecn. optico" required />                  Tecn. Óptico                            <br>'+
    '<input type=checkbox name="carrera" value="Tecn. telecomunicaciones" required />      Tecn. Telecomunicaciones                <br>'+
    '<input type=checkbox name="carrera" value="Lic. Organización Industrial" required />  Lic. en Organización Industrial         <br>'+
    '<input type=checkbox name="carrera" value="analisis de sistemas" required />          Análisis de Sistemas                    <br>'+
    '<input type=checkbox name="carrera" value="Computacion" required />                   Computación                             <br>'+
    '<input type=checkbox name="carrera" value="Ing. informatica" required />              Ing. Informática  / sistemas   <br>'+
    '<input type=checkbox name="carrera" value="Programacion" required />                  Programación                            <br>'+
    '<input type=checkbox name="carrera" value="Redes" required />                         Redes                                   <br>'+
    '<input type=checkbox name="carrera" value="Sistemas /tecnologia" required /> Sistemas  / Tecnología         <br>');
}

function sendData(){
   var careerSelected;
   $("input:checkbox[name=carrera]:checked").each(function() {
       //selected.push($(this).val());
       careerSelected += $(this).val();
  });
   alert(careerSelected);
}