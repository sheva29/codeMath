//
//
// 1.Variables Functions
rstartVariables = function () {
	// storing original coordinates
	this.ox = this.attr("x");
	this.oy = this.attr("y");
	this.box.ow = this.box.attr("width");
	this.box.oh = this.box.attr("height");
},
rmoveVariables = function (dx, dy) {
	// move will be called with dx and dy
	this.attr({
		x: this.ox + dx,
		y: this.oy + dx
	});
	this.box.attr({
		width: this.box.ow + dx,
		height: this.box.oh + dx
	});
	updateXposVariables();
};
updateXposVariables = function () {
	var posXString = "X = " + String(variablesSquare.node.attributes[3].nodeValue);
	$variablesCanvasTextHandler.text(posXString);
}
// 2. Variables and Equations
//
// First rectangle
//
rstartEquations = function () {
	this.ox = this.attr("x");
	this.oy = this.attr("y");
	this.box.ow = this.box.attr("width");
	this.box.oh = this.box.attr("height");
},
rmoveEquations = function (dx, dy) {
	this.attr({
		x: this.ox + dx
		// y: this.oy + dy
	});
	this.box.attr({
		width: this.box.ow + dx
		// height: this.box.oh + dy
	});
	//Every time we resize the first square we want to push the origin of the second one
	rectangle2Equations.node.attributes[0].nodeValue = rectangleEquations.node.attributes[2].nodeValue;
	//We store the new position of the second square handler in a variable. The new position will be in respect to the both widths of the squares
	equationsRect2HandlerNewX = (+rectangle2Equations.node.attributes[2].nodeValue + +rectangleEquations.node.attributes[2].nodeValue) - +String(10);
	//Then we pass it to the
	rectangle2HandlerEquations.node.attributes[0].nodeValue = String(equationsRect2HandlerNewX);
	//We change the value of the text in our HTML
	updateRectangleOneEquations();
};
//
//
//These are the functions for the second rectangle
//
//
rstart2Equations = function () {
	this.ox = equationsRect2HandlerNewX;
	this.oy = this.attr("y");
	this.box.ow = this.box.attr("width");
	this.box.oh = this.box.attr("height");
},
rmove2Equations = function (dx, dy) {
	this.attr({
		x: +this.ox + dx
	});
	this.box.attr({
		width: this.box.ow + dx
	});
	updateRectangleTwoEquations();
};
//These 3 funtions pass strings to our HTML updating the model view
updateRectangleOneEquations = function () {
	var rectangleOneString = "x = " + rectangleEquations.node.attributes[2].nodeValue;
	$rectangleOneTextEquations.text(rectangleOneString);
}
updateRectangleTwoEquations = function () {
	var rectangleTwoString = "y = " + rectangle2Equations.node.attributes[2].nodeValue;
	$rectangleTwoTextEquations.text(rectangleTwoString);
}
updateRectangleResult = function () {
	var rectangleThreeStringEquations = "x + y = " + someVariable;
}
// 3. Cartesian Plane
//
// 
//
function drawCartisianPlane() {
	// console.log(height_two);
	var line = cartesianPaper.path("M-200," + 0 + " L" + 200 + "," + 0).attr({
		"stroke-width": "3",
		"stroke": "#EBE9E9"
	});
	var line2 = cartesianPaper.path("M" + 0 + ",-200 L" + 0 + "," + 200).attr({
		"stroke-width": "3",
		"stroke": "#EBE9E9"
	});
	console.log(line2);
}
// 4. Cartesian Plane II
//
// 
//
function drawCartisian2Plane() {
	// console.log(height_two);
	var line = cartesian2Paper.path("M-200," + 0 + " L" + 200 + "," + 0).attr({
		"stroke-width": "3",
		"stroke": "#EBE9E9"
	});
	var line2 = cartesian2Paper.path("M" + 0 + ",-200 L" + 0 + "," + 200).attr({
		"stroke-width": "3",
		"stroke": "#EBE9E9"
	});
	console.log(line2);
}

function drawCartesian2Circle() {
	newCircleCartesian2 = cartesian2Paper.circle(0, 0, 10).attr({
		fill: "blue",
		stroke: "2px"
	});
}

function drawCartesian2Axes() {
	//This draws vertical lines
	for (var i = -10; i < 10; i++) {
		// var line = canvas.path(["M", (25 * i), 0, "L", (25 * i), 500]);
		var line = cartesian2Paper.path("M" + (20 * i) + "," + -200 + " L" + (20 * i) + "," + 200).attr({
			"stroke": "#EBE9E9"
		});
	}
	//This draws horizontal lines
	for (var i = -10; i < 10; i++) {
		// var line = canvas.path(["M", (25 * i), 0, "L", (25 * i), 500]);
		var line2 = cartesian2Paper.path("M" + -200 + "," + (20 * i) + " L" + 200 + "," + (20 * i)).attr({
			"stroke": "#EBE9E9"
		});
	}
}
updateCartesian2CirclePos = function (posX, posY) {
	for (var i = -200; i <= 200; i += 20) {
		for (var j = -200; j <= 200; j += 20) {
			if (posX > i && posX < i + 20) {
				if (posY > j && posY < j + 20) {
					newCircleCartesian2.node.cx.baseVal.value = i;
					newCircleCartesian2.node.cy.baseVal.value = j;
					//Here we pass the values of the coordinate system in the visual model.
					//We multiply by -1 so that we can invert it
					cartesian2CirclePos[0] = (i / 20);
					cartesian2CirclePos[1] = (j / 20) * -1;
				}
			}
		}
	}
}
updateCartesian2ModelView = function () {
	var $posXHandler = $("#cartesian2-posx");
	var $posYHandler = $("#cartesian2-posy");
	var posXHtmlString = "x = " + parseInt(cartesian2CirclePos[0]);
	var posYHtmlString = "y = " + parseInt(cartesian2CirclePos[1]);
	$posXHandler.text(posXHtmlString);
	$posYHandler.text(posYHtmlString);
	console.log("I'm passing a string");
}
//
//