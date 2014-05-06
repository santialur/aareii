function sendNews(){

   return false;
}

$(document).ready(function(){
  getNews();
});

function getNews()
{
    var news;

    $.ajax({ 
      url: '../../logic/php/.php',
      data: 
      {
      },
        type: 'POST',
        success: function(output) 
        {
          if(output == "No hay noticias"){
            
          }else{
            news = JSON.parse(output);
            fillNews(news);
          }
          
        }
      });
}

function fillNews(news)
{
  $('#tableOutput tbody').empty();
  
  for(var i=0;i<news..length;i++)
    $('#tableOutput tbody').append(''+
      '<tr><td class="cellId" style="display:none;">'+
        '<a>' + [i].Id+ '</a>'+
      '</td>'+
      '<td class="cellTitle">'+
        '<a>' + .[i]. + '</a>'+
      '</td>'+
      '<td class="cellDate">'+
        .[i]. +
      '</td>'+
      '<td class="cellDescription">'+
        .[i]. +
      '<td class="cellDate">'+
      '<input type="button" value="Eliminar" class="button" onclick="deleteNews('+[i].Id+');">'+
      '</td></tr>');
}

function deleteNews(id)
{
  $.ajax({ 
          url: '../../logic/php/.php',
          data: 
          {
            newsId : id,
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
  document.getElementById("newsBlock").style.display = 'inline';
  document.getElementById("pollBlock").style.display = 'none';
}

function showPoll(){
  document.getElementById("newsBlock").style.display = 'none';
  document.getElementById("pollBlock").style.display = 'inline';
}