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
/*
$(document).ready(
  function saveNews(){
    var noticias = n;
    fillNews(noticias);
  }
);
*/

$(document).ready(
  function getPollNews(){
	    var poll;
	    $.ajax({
	      url: '../../logic/php/Polls.php',
	      data: {
	      		getPolls: 		true,
	      },
	      type: 'POST',
	      success: function(output){
	        poll = JSON.parse(output);
	        fillPoll(poll);
	      }
	    });
	    
    	    var news;
	    $.ajax({
	      url: '../../logic/php/News.php',
	      async: false,
	      data: {
	      		getNews: 		true,
	      },
	      type: 'POST',
	      success: function(output){
	        news = JSON.parse(output);
	        fillNews(news);
	      }
	    });
    }
);

function fillNews(news){
  for(var i=0;i<news.noticias.length; i++)
      $( '#js-news' ).append('<li class="news-item"><a><font size="4" color="black">' +news.noticias[i].titulo + "</font> " + '<font color = "grey">('+ news.noticias[i].fecha+ ')   </font><font size="2" color="grey">-' + news.noticias[i].cuerpo + '</font></a></li>');
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
	      		saveVote: 		true,
	      		pcIdentification: 	identification,
	      		selectedOption: 	selectedOp,
	      		questionId:		questionId,
	      },
	      type: 'POST',
	      success: function(output){

	      		document.getElementById("voteButton").style.display = 'none';
	      		var option = new Array();
	      		result = JSON.parse(output);
	      		$( '#pollOptions' ).empty();
	      		$( '#pollOptions' ).append('<label><b><font color="Red" size="3">Resultados:</font></b></label></br></br>');
			  
	      		for(var i=0;i<result.results.length; i++)
			  {
			    option[i] = result.results[i].option;
			    $( '#pollOptions' ).append('<center><label for= "option'+i+'"><b> <font size="2" color="grey">'+ "&#8226 " +  option[i].substring(0, 15)+ ': <font size="3" color="blue">' + result.results[i].quantity +'</font>'+ "  votos" +'</font></b></label></center></br>');
			  }
	      		

	      }
	    });
}