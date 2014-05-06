$(window).load(	
	function getOffers()
	{
		var offers;
		var company_id = getSession();

		$.ajax({ 
			url: '../../../logic/php/getCompanyJobOffers.php',
	 	 	data: 
	 	 	{
	 	 		companyid : company_id,
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
	{
		var fCierre= offers.jobOffers[i].fechaCierre.substring(0,10);

		$('#tableOutput tbody').append("<tr>"+
			"<td><h5><strong>"+ offers.jobOffers[i].titulo +"</strong></h5></td>" + 
			"<td><h5>"+ offers.jobOffers[i].descripcion +"</h5></td>" + 
			"<td><h5>"+ fCierre +"</h5></td>" + 
			"<td><a class='ifancybox' href='verOferta.php?idOferta="+offers.jobOffers[i].id+"'><button type='button' class='button'>Ver más</button></a><br><br>" + 
			"<a class='postularFancybox' href='postularse.php?idOferta="+offers.jobOffers[i].id+"'><input type='button' class='button' value='Postúlese'></td></a>"+
			"<td class='cellId' style='display:none;>" + offers.jobOffers[i].id + "</td>"+
			"</tr>");
	}
}