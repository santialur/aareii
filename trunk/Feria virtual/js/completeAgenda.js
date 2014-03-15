$(window).load(	
	function getEvents()
	{
		var events;

		alert("get events");

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
	  			fillAgenda(events);
	  		}
	  	});
	}
);

function fillAgenda(events)
{
	var i = 0;

	$('#tableCalendar td').each(function(){
		for(var j=0; j<events.length; j++)
		{
			var day = events[j].date.substring(8,10);
			if($(this).html() == day)		//Is the content of the cell the same as the date of the event
			{
				if(!$(this).hasClass('date_has_event'))
				{ 
					$(this).addClass('date_has_event'); 		//
					$(this).append("<div class='events'><ul id='eventsList"+i+"''></ul></div>");
				}
				var list = $('#eventsList'+i).append("<li><span class='title'>"+ events[j].title +"</span><span class='desc'>"+ events[j].description +"</span></li>");
			}
		}
		i++;
	});
	alert("Huevo AGENDA");
	coda();
}


function coda() 
{
	alert("Huevo CODA");
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
