$(document).ready(function() {
	$(".js-example-basic-single").select2();
	$(".js-example-basic-multiple").select2();
	$.datepicker.setDefaults($.datepicker.regional['pt-BR']);
	$(".daytrip").datepicker({
		 minDate: 0
	});
	$(".tripback").datepicker({
		minDate: 0
	});	
  	$( "form" ).submit(function(event) {
  		var origin = $('.origin').val();
		var destiny = $('.destiny').val();
		var dayTrip = $(".daytrip").val().split('/').reverse().join('/').replace(/\//g, '');
		var tripBack = $(".tripback").val().split('/').reverse().join('/').replace(/\//g, '');
		var oneWay = $('.oneway').val();
		var roundTrip = $('#searchTrip input[name=typeTripSelector]:checked').val();
		var people = $('.people').val();

		if (roundTrip == '01') {
			tripBack = '&dr%5B%5D=' + tripBack;
			$('.tripback').removeAttr('disabled', 'disabled');
		} else {
			tripBack = '';
			$('.tripback').attr('disabled', 'disabled');

		}

		switch (origin) {
			case 'sao-paulo':
				var airport = 'CGH';
				break;
			case 'rio-de-janeiro':
				var airport = 'GIG';
				break;
			case 'curitiba':
				var airport = 'CWB';
				break;
		}

		switch (destiny) {
			case 'sao-paulo':
				var airportDestiny = 'CGH';
				break;
			case 'rio-de-janeiro':
				var airportDestiny = 'GIG';
				break;
			case 'curitiba':
				var airportDestiny = 'CWB';
				break;
		}

		var url = 'http://voopter.com.br/passagens-aereas-de-' + origin + '/' + airport + '/para-' + destiny + '/' + airportDestiny + '#dl%5B%5D=' + dayTrip + tripBack + '&na=1&nc=0&ni=0&sn=true';
		window.open(url, '_blank');
		
	});
});
