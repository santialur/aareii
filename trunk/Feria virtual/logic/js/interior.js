var n = [

"La inflacion fue del 3,6%,  es la primera desaceleracion mensual despues de dos meses por arriba del 5%",
"Ya son 665 marcas con 29.000 locales las que usan el formato. Ropa y comida concentran el mercado."

];


/*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*/

$(document).ready(
  function saveNews(){
    var noticias = n;
    fillNews(noticias);
  }
);

$(window).load(
  function getPoll(){
    var poll;
    $.ajax({
      url: '../../logic/php/Polls.php',
      data: {},
      type: 'POST',
      success: function(output){
        poll = JSON.parse(output);
        fillPoll(poll);
      }
    });
});


function fillNews(noticias){
  for(var i=0;i<noticias.length;i++)
      $( '#js-news' ).append('<li class="news-item"><a href="#">'+noticias[i]+'</a></li>');
}

function fillPoll(poll)
{
  var option = new Array(10); 

  $( '#pollTitle' ).html(poll.question);

  for(var i=0;i<poll.options.length; i++)
  {
    option[i] = poll.options[i].option;
    $( '#pollOptions' ).append('<input type="radio" name="options" value="option'+i+'" >' + option[i] + '<br>');
  }
}