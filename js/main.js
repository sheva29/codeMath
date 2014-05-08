$(document).ready(function () {
	//
	//Variables
	//
	//
	//Listeners and Triggers
	//
	$('#fullpage').fullpage({
		slidesColor: ['#465fab', '#440bfbe', '#7e4f9f', '#cd6438', '#b0cc3a'],
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		menu: '#menu',
		continuousVertical: true
	});
});