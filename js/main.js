$(document).ready(function () {
	//This is for fullpage.js
	$('#fullpage').fullpage({
		slidesColor: ['#d36257', '#59d159', '#d3c157', '#59d18f', '#5760d3'],
		anchors: ['zeroPage', 'firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		menu: '#menu',
		continuousVertical: true
	});
	//
	//
	//
	//------- 1.Variables - Functions and Manipulation
	//Let's add an id to our canvas
	variablesPaper.canvas.id = "variables-paper";
	//Let's add a class to our sizer
	variablesSquareSizer.node.className.baseVal = "variables-square-handler";
	variablesSquareSizer.drag(rmoveVariables, rstartVariables);
	variablesSquareSizer.box = variablesSquare;
	//
	//
	//
	//------- 2.Variables & Equations - Functions and Manipulation
	//First rectangle
	rectangleHandlerEquations.drag(rmoveEquations, rstartEquations);
	rectangleHandlerEquations.box = rectangleEquations;
	//Second rectangle
	rectangle2HandlerEquations.drag(rmove2Equations, rstart2Equations);
	rectangle2HandlerEquations.box = rectangle2Equations;
});