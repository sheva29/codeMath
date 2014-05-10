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
	//
	//
	//
	//------- 3.Cartesian Plane - Functions and Manipulation
	//We shift our coordinate system to the middle of the screen
	cartesianPaper.setViewBox(-200, -200, 400, 400);
	//We draw our two axes
	drawCartisianPlane();
	//
	//
	//
	//------- 4.Cartesian Plane II - Functions and Manipulation
	cartesian2Paper.setViewBox(-200, -200, 400, 400);
	//We draw our X and Ycoordinates
	drawCartisian2Plane();
	//We draw our axes
	drawCartesian2Axes();
	//We draw our circle
	drawCartesian2Circle();
	//When clicked on the screen we can move the circle
	$cartesian2PaperHandler.on("click", function (e) {
		//We need an offset since the the whole coordinate system was moved to the center of the canvasx
		var newMousePosX = e.offsetX - 200;
		var newMousePosY = e.offsetY - 200;
		updateCartesian2CirclePos(newMousePosX, newMousePosY);
		updateCartesian2ModelView();
		console.log("I'm being clicked");
	});
});