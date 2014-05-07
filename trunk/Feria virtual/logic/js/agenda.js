function updateDay()
{
	var today = new Date(); 
	today = today.getDate();
	$('#tableCalendar td').each(function(){
		if($(this).html() == today)	
			$(this).addClass('today');
		else
			if($(this).hasClass('today'))
				$(this).removeClass('today');
	});
}

$(document).ready(function(){
  getEvents();
});

function getEvents()
{
    	var company_id = getSession();
	
	updateDay();
	var events;
	$.ajax({ 
		url: '../../../logic/php/getCompanyEvents.php',
 	 	data: 
 	 	{
 	 		companyid:  company_id,
 	 	},
  		type: 'POST',
  		success: function(output) 
  		{
  			if(output == "No hay eventos"){
  				
	  		}else{
	  			events = JSON.parse(output);
  				fillAgenda(events);
	  		}
  			
  		}
  	});
}

function fillAgenda(events)
{
	var i = 0;

	$('#tableCalendar td').each(function(){
		for(var j=0; j<events.events.length; j++)
		{
			var day = events.events[j].Inicia.substring(8,10);
			if($(this).html() == day)		//Is the content of the cell the same as the date of the event
			{
				if(!$(this).hasClass('date_has_event'))
				{ 
					$(this).addClass('date_has_event'); 		//
					$(this).append("<div class='events'><ul id='eventsList"+i+"''></ul></div>");
				}
				var list = $('#eventsList'+i).append("" +
					"<li>"+
					"<span class='title'>"+ events.events[j].Titulo +"</span>"+
					"<span class='desc'>"+ events.events[j].Descripcion +"</span>"+
					"<span class='desc'>"+"Inicia: "+ events.events[j].Inicia +"</span>"+
					"<span class='desc'>"+"Finaliza: "+ events.events[j].Termina +"</span>"+
					"</li>");
			}
		}
		i++;
	});
	coda();
}


function coda() 
{
	$('.date_has_event').each(function () {
		// options
		var distance = 10;
		var time = 250;
		var hideDelay = 500;

		var hideDelayTimer = null;

		// tracker
		var beingShown = false;
		var shown = false;

		var trigger = $(this);
		var popup = $('.events ul', this).css('opacity', 0);

		// set the mouseover and mouseout on both element
		$([trigger.get(0), popup.get(0)]).mouseover(function () {
			// stops the hide event if we move from the trigger to the popup element
			if (hideDelayTimer) clearTimeout(hideDelayTimer);

			// don't trigger the animation again if we're being shown, or already visible
			if (beingShown || shown) {
				return;
			} else {
				beingShown = true;

				// reset position of popup box
				popup.css({
					bottom: 20,
					left: -76,
					display: 'block' // brings the popup back in to view
				})

				// (we're using chaining on the popup) now animate it's opacity and position
				.animate({
					bottom: '+=' + distance + 'px',
					opacity: 1
				}, time, 'swing', function() {
					// once the animation is complete, set the tracker variables
					beingShown = false;
					shown = true;
				});
			}
		}).mouseout(function () {
			// reset the timer if we get fired again - avoids double animations
			if (hideDelayTimer) clearTimeout(hideDelayTimer);

			// store the timer so that it can be cleared in the mouseover if required
			hideDelayTimer = setTimeout(function () {
				hideDelayTimer = null;
				popup.animate({
					bottom: '-=' + distance + 'px',
					opacity: 0
				}, time, 'swing', function () {
					// once the animate is complete, set the tracker variables
					shown = false;
					// hide the popup entirely after the effect (opacity alone doesn't do the job)
					popup.css('display', 'none');
				});
			}, hideDelay);
		});
	});
}