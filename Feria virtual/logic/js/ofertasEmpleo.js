$(window).load(	
	function getOffers()
	{
		var offers;
		$.ajax({ 
			url: '../../../logic/php/getCompanyJobOffers.php',
	 	 	data: 
	 	 	{
	 	 		companyid : 1,
	 	 	},
	  		type: 'POST',
	  		success: function(output) 
	  		{
	  			offers = JSON.parse(output);
	  			fillOffers(offers);
	  		}
	  	});
	}
);

function fillOffers(offers)
{
	for(var i=0;i<offers.jobOffers.length;i++)
		$('#tableOutput tbody').append("<tr><td>"+
			"<h5><strong>"+ offers.jobOffers[i].titulo +"</strong></h5></td>" + 
			"<td><h5>"+ offers.jobOffers[i].descripcion +"</h5></td>" + 
			"<td><h5>"+ offers.jobOffers[i].fechaPublicacion +"</h5></td>" + 
			"<td><a href='verOferta.php'><button type='button' class='button'>Ver más</button></a><br><br>" + 
			"<input type='button' class='button' value='Postúlese'></td></a></tr>");
}
