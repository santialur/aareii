function fillHour(target, target2, target3, target4)
{  
  var aux;

  $(target).append($('<option />').val("").html("Hora"));
  $(target2).append($('<option />').val("").html("Minutos"));
  $(target3).append($('<option />').val("").html("Hora"));
  $(target4).append($('<option />').val("").html("Minutos"));

  for(var i=7; i<24; i=i+1)
    aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';

  $(target).append(aux);
}

function fillMinute(target)
{
  var aux;
  aux = aux + '<option value="">'+ 'Minutos' +'</option>';

  for(var i=0; i<60; i=i+5){
    if(i<10){
    	aux = aux + '<option value="0'+ parseFloat(i) +'">0'+ parseFloat(i) +'</option>';
    }else{
    	aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';
    }
  }
  $(target).html(aux);
}

function fillHourEnd(target, hourStart)
{  
  var aux;
  aux = aux + '<option value="">'+ 'Hora' +'</option>';

  for(var i=parseFloat(hourStart); i<24; i=i+1)
    aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';

  $(target).html(aux);
}

function fillMinuteEnd(target, minuteStart, hourStart, hourEnd)
{
  var aux;
  aux = aux + '<option value="">'+ 'Minutos' +'</option>';

  hourEnd   = parseFloat(hourEnd);
  hourStart = parseFloat(hourStart);

  if(hourEnd >  hourStart)
  {
    minuteStart = -5;
  }

  for(var i=parseFloat(minuteStart)+5; i<60; i=i+5){
    if(i<10){
    	aux = aux + '<option value="0'+ parseFloat(i) +'">0'+ parseFloat(i) +'</option>';
    }else{
    	aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';
    }
  }
  $(target).html(aux);
}

function fillYears(target, x, y)
{
  var aux;

  for(var i=x; i>y; i--)
      aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';

  $(target).append(''+aux);
}

function fillDate(targetDia, targetMes, targetAnio)
{
  $(targetMes).append($('<option />').val("").html("Mes"));
  for (i = 5; i < 7; i++)
  {
    $(targetMes).append($('<option />').val("0"+i).html(i));
  }
  updateNumberOfDays(); 

  $(targetDia).append($('<option />').val("").html("Día"));

  $(targetAnio).change(function(){
    updateNumberOfDays(targetDia, targetMes, targetAnio); 
  });
}

function updateNumberOfDays(targetDia, targetMes, targetAnio)
{
  $(targetDia).html('');
  month = $(targetMes).val();
  year  = $(targetAnio).val();
  days  = daysInMonth(month, year);


  for(i=1; i < days+1 ; i++){
    if(i<10){
      $(targetDia).append($('<option />').val("0"+i).html(i));
    }else{
      $(targetDia).append($('<option />').val(i).html(i));
    }
  }
}

function daysInMonth(month, year)
{
    return new Date(year, month, 0).getDate();
}


function sendData(){
  var company_id = getSession();
  
  var title = document.getElementById("titulo_evento").value.replace(/\t/g," ");
  title = title.replace(/\r?\n|\r/g," ");
  var descripcion = document.getElementById("descripcion_evento").value.replace(/\t/g," ");
  descripcion = descripcion.replace(/\r?\n|\r/g," ");
  
  $.ajax({ url: '../../logic/php/saveEvent.php',
      data: {companyid:     company_id,
        eventTitle:       title ,
        eventDateTimeStart:     document.getElementById("tiempo_inicio_anio").value + "-" + document.getElementById("tiempo_inicio_mes").value + "-" + document.getElementById("tiempo_inicio_dia").value + " " + document.getElementById("tiempo_inicio_hora").value + ":" + document.getElementById("tiempo_inicio_minuto").value,
        eventDateTimeEnd:     document.getElementById("tiempo_finalizacion_anio").value + "-" + document.getElementById("tiempo_finalizacion_mes").value + "-" + document.getElementById("tiempo_finalizacion_dia").value + " " + document.getElementById("tiempo_finalizacion_hora").value + ":" + document.getElementById("tiempo_finalizacion_minuto").value,
        eventDescription:     descripcion ,
      },
      type: 'POST',
      success: function(output){
        if(output == "Exito"){
          alert("El evento se agrego correctamente");
          document.publishEvent.reset();
          $('html, body').animate({scrollTop: '0px'},1500);
        }else{
          alert("Hubo un problema al guardar el evento");
                    
        }
      }
   });  
   return false;
}

function showEvents(){
  getEvents();
  document.getElementById("tableOutput").style.display = 'inline-table';
  document.getElementById("publishEvent").style.display = 'none';
}
function showCreateEvents(){
  document.getElementById("tableOutput").style.display = 'none';
  document.getElementById("publishEvent").style.display = 'inline';
}

$(document).ready(function(){
  getEvents();
});

function getEvents()
{
    var company_id = getSession();
    var events;

    $.ajax({ 
      url: '../../logic/php/getCompanyEvents.php',
      data: 
      {
        companyid : company_id,
      },
        type: 'POST',
        success: function(output) 
        {
        	if(output == "No hay eventos"){
        		
        	}else{
        		
        		events = JSON.parse(output);
          		fillEvents(events);
        	}
          
        }
      });
}

function fillEvents(events)
{
  $('#tableOutput tbody').empty();
  
  for(var i=0;i<events.events.length;i++)
    $('#tableOutput tbody').append(''+
      '<tr><td class="cellId" style="display:none;">'+
        '<a>' + events.events[i].Id+ '</a>'+
      '</td>'+
      '<td class="cellTitle">'+
        '<a>' + events.events[i].Titulo + '</a>'+
      '</td>'+
      '<td class="cellDate">'+
        events.events[i].Inicia +
      '</td>'+
      '<td class="cellDate">'+
        events.events[i].Termina +
      '</td> '+
      '<td class="cellDescription">'+
        events.events[i].Descripcion +
      '<td class="cellDate">'+
      '<input type="button" value="Eliminar" class="button" onclick="deleteEvent('+events.events[i].Id+');">'+
      '</td></tr>');
}

function deleteEvent(id)
{
	$.ajax({ 
      		url: '../../logic/php/deleteEvent.php',
      		data: 
      		{
        		eventId : id,
      		},
        	type: 'POST',
        	success: function(output) 
        	{
          		if(output == "Exito"){
          			location.reload();
          		}else{
          			alert(output);
          		}
          		
        	}
      	});
}