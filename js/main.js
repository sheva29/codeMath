$(document).ready(function () {
	//
	//Variables
	//
	//
	//Listeners and Triggers
	//
	$('#fullpage').fullpage({
		// slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		menu: '#menu',
		continuousVertical: true
	});
});