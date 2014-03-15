
$(document).ready(
function completeAgenda()
{
	var events;

	$.ajax({ 
		url: '../js/getCompanyEvents.php',
 	 	data: 
 	 	{
 	 		companyid : 1,
 	 	},
  		type: 'GET',
  		success: function(output) 
  		{
  			events = JSON.parse(output);
  			alert("caca");
  		}
  	});
		alert("la cara");
	var i = 0;

	$('#tableCalendar > td').each(function(){
		i++;
		for(var j=0; j<events.length; j++)
		{
			if($(this).html === events[j].date)		//Is the content of the cell the same as the date of the event
			{
				if(!$(this).hasClass('date_has_event'))
				{
					$(this).addClass('date_has_event'); 		//
					$(this).append("<div class='events'> <ul id='eventsList"+i+"'></ul> </div>");
				}
				$('#eventsList'+i).append("<li> <span class='desc'	>"+ events[j].description +"</span></li>");
			}
		}
	});
}
);

