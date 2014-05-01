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
      data: {
          getPolls:     true,
      },
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

var actualPoll = "";
function fillPoll(poll)
{
  var option = new Array();
  var id = new Array();
  actualPoll = poll;
  $( '#pollTitle' ).html(poll.question);

  for(var i=0;i<poll.options.length; i++)
  {
    option[i] = poll.options[i].option;
    id[i] = poll.options[i].id;
    $( '#pollOptions' ).append('<input id= "option'+i+'" type="radio" name="options" value="'+id[i]+'" >'+ '<label for= "option'+i+'">' + option[i] + '</label><br>');
  }
}

var publicIp = "";
function saveIdentification(ip){
  if(localStorage.getItem('Token') == null){
    var token = Math.random().toString(36).substr(2);
    localStorage.setItem('Token', token);
  }
  publicIp = ip;
}

function sendVote(){
  var identification = publicIp + ":" + localStorage.getItem('Token') + ":" +actualPoll.id;
  var selectedOp = $('input:radio:checked').val();
  
  var questionId = actualPoll.id;
  
  $.ajax({
        url: '../../logic/php/Polls.php',
        data: {
            saveVote:     true,
            pcIdentification:   identification,
            selectedOption:   selectedOp,
            questionId:   questionId,
        },
        type: 'POST',
        success: function(output){
          alert(output);
        }
      });
}