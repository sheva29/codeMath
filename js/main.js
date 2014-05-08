$(document).ready(function () {
	//
	//Variables
	//
	//
	//Listeners and Triggers
	//
	$('#fullpage').fullpage({
		slidesColor: ['#d36257', '#59d159', '#d3c157', '#59d18f', '#5760d3'],
		anchors: ['zeroPage','firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		menu: '#menu',
		continuousVertical: true
	});
});