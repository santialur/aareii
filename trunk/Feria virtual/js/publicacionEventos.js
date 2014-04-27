function fillYears(target, x, y)
{
  var aux;

  for(var i=x; i>y; i--)
      aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';

  $(target).append(''+aux);
}

function fillDate()
{
  $('#fecha_evento_mes').append($('<option />').val(0).html("Mes"));
  for (i = 5; i < 7; i++)
  {
    $('#fecha_evento_mes').append($('<option />').val("0"+i).html(i));
  }
  updateNumberOfDays(); 

  $('#fecha_evento_anio, #fecha_evento_mes').change(function(){
    updateNumberOfDays(); 
  });
}

function updateNumberOfDays()
{
  $('#fecha_evento_dia').html('');
  month = $('#fecha_evento_mes').val();
  year  = $('#fecha_evento_anio').val();
  days  = daysInMonth(month, year);

  $('#fecha_evento_dia').append($('<option />').val(0).html("Día"));

  for(i=1; i < days+1 ; i++){
    if(i<10){
      $('#fecha_evento_dia').append($('<option />').val("0"+i).html(i));
    }else{
      $('#fecha_evento_dia').append($('<option />').val(i).html(i));
    }
    
  }
}

function daysInMonth(month, year)
{
    return new Date(year, month, 0).getDate();
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
   $.ajax({ url: '../js/saveOffer.php',
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
                  document.getElementById("info_puesto").value = "";
                  document.getElementById("descripcion_puesto").value = "";
                  document.getElementById("requisitos_puesto").value = "";
                  document.getElementById("fecha_cierre_anio").value = "1";
                  document.getElementById("fecha_cierre_mes").value = "0";
                  document.getElementById("fecha_cierre_dia").value = "0";
                  $('input[name=nivel_español]').attr('checked',false);
                  $('input[name=nivel_ingles]').attr('checked',false);
                  $('input[name=nivel_aleman]').attr('checked',false);
                  $('input[name=nivel_frances]').attr('checked',false);
                  $('input[name=nivel_portugues]').attr('checked',false);
                  $('input[name=nivel_italiano]').attr('checked',false);
                  $('input[name=carrera]').attr('checked',false);
                  $('input[name=estudios]').attr('checked',false);
                  $('input[name=contrato]').attr('checked',false);
                  $('input[name=jornada]').attr('checked',false);
                  $('html, body').animate({scrollTop: '0px'},1500);
                  
                }else{
                  alert("Hubo un problema al guardar la publicación");
                  
                }
            }
           });
   return false;
}

function showEvents(){
  document.getElementById("tableOutput").style.display = 'inline-table';
  document.getElementById("publishEvent").style.display = 'none';
}
function showCreateEvents(){
  document.getElementById("tableOutput").style.display = 'none';
  document.getElementById("publishEvent").style.display = 'inline';
}