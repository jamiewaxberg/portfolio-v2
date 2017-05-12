'use strict';
 

$(document).ready(function () {
	$('.see-more').on('click', function() {
		$('#overlay').fadeIn();
		$(this).next('.modal').fadeIn();
	});
	$('#close').on('click', function() {
		$('#overlay').hide();
		$('.modal').hide();
	});
});
