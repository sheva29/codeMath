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
	rectangleEquations.sizer = rectangleHandlerEquations;
	rectangleHandlerEquations.drag(rmoveEquations, rstartEquations);
	rectangleHandlerEquations.box = rectangleEquations;
	//Second rectangle
	rectangle2Equations.sizer = rectangle2HandlerEquations;
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
		// console.log("I'm being clicked");
	});
	//
	//
	//
	//------- 5. Cartesian Plane on the Screen - Functions and Manipulation
	//We draw our circle
	drawCompCircle();
	//We draw the axes on the canvas
	drawCompLines();
	//When the mouse move in the canvas, it updates the position of the circle
	$compPaperHandler.mousemove(function (e) {
		updateCompCirclePos(e.offsetX, e.offsetY);
		updateCompModelView();
	});
	//
	//
	//
	//------- 6. Circle on the Screen - Functions and Manipulation
	drawCircleCircle();
	drawCircleHandler();
	newCircleElementHandler.drag(rmoveCircle, rstartCircle);
	newCircleElementHandler.big = newCircleElement;
	//
	//
	//
	//------- 7. Circle X position - Functions and Manipulation
	drawCircleX();
	drawCircleXHandler();
	newCircleXElement.drag(moveCircleX, startCircleX, upCircleX);
	newCircleXElement.sizer = newCircleXElementHandler;
	//
	//
	//
	//------- 8. Circle Y position - Functions and Manipulation
	drawCircleY();
	drawCircleYHandler();
	newCircleYElement.drag(moveCircleY, startCircleY, upCircleY);
	newCircleYElement.sizer = newCircleYElementHandler;
	//
	//
	//
	//------- 9. Circle Y position - Functions and Manipulation
	drawCircleColor();
	drawCircleColorHandler();
	newCircleColorElement.drag(moveCircleColor, startCircleColor, upCircleColor);
	newCircleColorElement.sizer = newCircleColorElementHandler;
	//
	//
	//
	//------- 12. Multiple Elements on the Screen - Functions and Manipulation
	//This draws a circle on the screen
	$multipleElementsPaperHandler.mouseup(function (e) {
		var mouseX = e.offsetX;
		var mouseY = e.offsetY;
		if (multipleElementsPickerSelector) {
			makeMultipleCircles(mouseX, mouseY);
			multipleElementsPickerSelector = false;
		}
		console.log("I'here");
	});
	$multipleElementsPicker.click(function () {
		multipleElementsPickerSelector = !multipleElementsPickerSelector;
		console.log("I'm being clicked");
	});
});