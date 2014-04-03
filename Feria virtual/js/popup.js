$(function popup()
{
	$('#trigger').hover(function(e)
		{
			$('div#pop-up').show();
		},
	 	function()
	 	{
				$('div#pop-up').hide();
		});

	$('#trigger').mousemove(function(e)
		{
   			$("div#pop-up").css('top', e.pageY - 120).css('left', e.pageX -50);
  		});

	/******************************************************************************/

	$('#trigger2').hover(function(e)
		{
			$('div#pop-up2').show();
		},
	 	function()
	 	{
				$('div#pop-up2').hide();
		});

	$('#trigger2').mousemove(function(e)
		{
   			$("div#pop-up2").css('top', e.pageY - 120).css('left', e.pageX -50);
  		});

	/******************************************************************************/

	$('#trigger3').hover(function(e)
		{
			$('div#pop-up3').show();
		},
	 	function()
	 	{
				$('div#pop-up3').hide();
		});

	$('#trigger3').mousemove(function(e)
		{
   			$("div#pop-up3").css('top', e.pageY - 120).css('left', e.pageX -50);
  		});

	/******************************************************************************/

	$('#trigger4').hover(function(e)
		{
			$('div#pop-up4').show();
		},
	 	function()
	 	{
				$('div#pop-up4').hide();
		});

	$('#trigger4').mousemove(function(e)
		{
   			$("div#pop-up4").css('top', e.pageY - 120).css('left', e.pageX -50);
  		});
});