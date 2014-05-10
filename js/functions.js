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
	var rectangleOneString = "var x = " + rectangleEquations.node.attributes[2].nodeValue;
	$rectangleOneTextEquations.text(rectangleOneString);
}
updateRectangleTwoEquations = function () {
	var rectangleTwoString = "var y = " + rectangle2Equations.node.attributes[2].nodeValue;
	$rectangleTwoTextEquations.text(rectangleTwoString);
}
updateRectangleResult = function () {
	var rectangleThreeStringEquations = "x + y = " + someVariable;
}
//
//