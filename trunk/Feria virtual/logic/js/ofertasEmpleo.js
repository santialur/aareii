$(window).load(	
	function getOffers()
	{
		var offers;
		$.ajax({ 
			url: '../../logic/php/getCompanyJobOffers.php',
	 	 	data: 
	 	 	{
	 	 		companyid : 1,
	 	 	},
	  		type: 'GET',
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
	for(var i=0;i<offers.length;i++)
		$('#offerTable tbody').append("<tr><td><h5><strong>"+offers[i].title+"</strong></h5></td><td><h5>"+offers[i].description+"</h5></td><td><h5>"+offers[i].datepublished+"</h5></td><tr>");
}



