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
  if(document.getElementById("fecha_evento_anio").value == "1" || document.getElementById("fecha_evento_mes").value == "0" || document.getElementById("fecha_evento_dia").value == "0"){
    alert("Ingrese una fecha valida del evento");
    return false;
  }
  var company_id = getSession();
  
  $.ajax({ url: '../../logic/php/saveEvent.php',
      data: {companyid:     company_id,
        eventTitle:     document.getElementById("titulo_evento").value,
        eventDate:    document.getElementById("fecha_evento_anio").value + "-" + document.getElementById("fecha_evento_mes").value + "-" + document.getElementById("fecha_evento_dia").value,
        eventDescription:   document.getElementById("descripcion_evento").value,
      },
      type: 'POST',
      success: function(output){
        if(output == "Exito"){
          alert("El evento se agrego correctamente");
          document.getElementById("titulo_evento").value = "";
          document.getElementById("descripcion_evento").value = "";
          document.getElementById("fecha_evento_anio").value = "1";
          document.getElementById("fecha_evento_mes").value = "0";
          document.getElementById("fecha_evento_dia").value = "0";
          $('html, body').animate({scrollTop: '0px'},1500);
        }
        }else{
                      alert("Hubo un problema al guardar el evento");
                    
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