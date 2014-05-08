function sendNews(){
  $.ajax({
        url: '../../logic/php/News.php',
        data: {
            saveNew:    true,
            newTitle:     document.getElementById("titulo_noticia").value,
            newDate:    document.getElementById("fecha_noticia_dia").value + "-" + document.getElementById("fecha_noticia_mes").value + "-" +document.getElementById("fecha_noticia_anio").value,
            newBody:      document.getElementById("descripcion_noticia").value,
        },
        type: 'POST',
        success: function(output){
          if(output == "Hubo un problema al guardar la noticia"){
            alert(output);
          }else{
            location.reload();
          }
          
        }
      });
    return false;
}

$(document).ready(function(){
  getNews();
});

function getNews()
{
    var news;

    $.ajax({ 
      url: '../../logic/php/News.php',
      data: {
          getNews:      true,
      },
        type: 'POST',
        success: function(output) 
        {
          if(output == "No hay noticias"){
              
          }else{
            if(output == "No hay noticias"){
              alert(output);
            }else{
              news = JSON.parse(output);
                fillNews(news);
            }
          }
          
        }
      });
}

function fillNews(news)
{
  $('#tableOutput tbody').empty();
  
  for(var i=0;i<news.noticias.length;i++)
    $('#tableOutput tbody').append(''+
      '<tr><td class="cellId" style="display:none;">'+
        '<a>' + news.noticias[i].id+ '</a>'+
      '</td>'+
      '<td class="cellTitle">'+
        '<a>' + news.noticias[i].titulo + '</a>'+
      '</td>'+
      '<td class="cellDate">'+
        news.noticias[i].fecha +
      '</td>'+
      '<td class="cellDescription">'+
        news.noticias[i].cuerpo +
      '<td class="cellDate">'+
      '<input type="button" value="Eliminar" class="button" onclick="deleteNews('+news.noticias[i].id+');">'+
      '</td></tr>');
}

function deleteNews(id)
{
  $.ajax({ 
          url: '../../logic/php/News.php',
          data: 
          {
            deleteNew:      true,
            newId :       id,
          },
          type: 'POST',
          success: function(output) 
          {
              if(output == "Exito"){
                location.reload();
              }else{
                
              }
              
          }
        });
}

/***********************************************************************************/
function sendPoll(){
  var options = '{"options":[';
  if(!document.getElementById("opcion_encuesta_1").value.match(/^\s*$/)){
    options = options + '{"option":'+'"'+document.getElementById("opcion_encuesta_1").value+'"'+'},';
  }
  if(!document.getElementById("opcion_encuesta_2").value.match(/^\s*$/)){
    options = options + '{"option":'+'"'+document.getElementById("opcion_encuesta_2").value+'"'+'},';
  }
  if(!document.getElementById("opcion_encuesta_3").value.match(/^\s*$/)){
    options = options + '{"option":'+'"'+document.getElementById("opcion_encuesta_3").value+'"'+'},';
  }
  if(!document.getElementById("opcion_encuesta_4").value.match(/^\s*$/)){
    options = options + '{"option":'+'"'+document.getElementById("opcion_encuesta_4").value+'"'+'},';
  }
  if(!document.getElementById("opcion_encuesta_5").value.match(/^\s*$/)){
    options = options + '{"option":'+'"'+document.getElementById("opcion_encuesta_5").value+'"'+'},';
  }
  if(!document.getElementById("opcion_encuesta_6").value.match(/^\s*$/)){
    options = options + '{"option":'+'"'+document.getElementById("opcion_encuesta_6").value+'"'+'},';
  }
  options = options.substring(0, options.length - 1);
  options = options + "]}";
  
  $.ajax({
        url: '../../logic/php/Polls.php',
        data: {
            savePoll:     true,
            pollQuestion:     document.getElementById("pregunta_encuesta").value,
            pollOptions:    options,
        },
        type: 'POST',
        success: function(output){
            if(output == "Exito"){
              location.reload();
            }
          
        }
      });
    return false;
}

function getPoll(){
    var poll;
    $.ajax({
      url: '../../logic/php/Polls.php',
      data: {
          getPolls:     true,
      },
      type: 'POST',
      success: function(output){
        poll = JSON.parse(output);
        fillPoll(poll);
      }
    });
}

function fillPoll(poll)
{
  var option = new Array();
  var id = new Array();
  actualPoll = poll;
  $( '#pollTitle' ).empty();
  $( '#pollTitle' ).html(poll.question);
  $( '#pollOptions' ).empty();
  for(var i=0;i<poll.options.length; i++)
  {
    option[i] = poll.options[i].option;
    id[i] = poll.options[i].id;
    $( '#pollOptions' ).append('<input id= "option'+i+'" type="radio" name="options" value="'+id[i]+'" >'+ '<label for= "option'+i+'">' + option[i] + '</label><br>');
  }
}



/***********************************************************************************/
function fillYears(target, x, y)
{
  var aux;

  for(var i=x; i>y; i--)
      aux = aux + '<option value="'+ parseFloat(i) +'">'+ parseFloat(i) +'</option>';

  $(target).append(''+aux);
}

function fillDate()
{
  $('#fecha_noticia_mes').append($('<option />').val(0).html("Mes"));
  for (i = 5; i < 7; i++)
  {
    $('#fecha_noticia_mes').append($('<option />').val("0"+i).html(i));
  }
  updateNumberOfDays(); 

  $('#fecha_noticia_anio, #fecha_noticia_mes').change(function(){
    updateNumberOfDays(); 
  });
}

function updateNumberOfDays()
{
  $('#fecha_noticia_dia').html('');
  month = $('#fecha_noticia_mes').val();
  year  = $('#fecha_noticia_anio').val();
  days  = daysInMonth(month, year);

  $('#fecha_noticia_dia').append($('<option />').val(0).html("D&iacutea"));

  for(i=1; i < days+1 ; i++){
    if(i<10){
      $('#fecha_noticia_dia').append($('<option />').val("0"+i).html(i));
    }else{
      $('#fecha_noticia_dia').append($('<option />').val(i).html(i));
    }
    
  }
}

function daysInMonth(month, year)
{
    return new Date(year, month, 0).getDate();
}

function showNews(){
  getNews();
  document.getElementById("newsBlock").style.display = 'inline';
  document.getElementById("pollBlock").style.display = 'none';
}

function showPoll(){
  getPoll();
  document.getElementById("newsBlock").style.display = 'none';
  document.getElementById("pollBlock").style.display = 'inline';
}