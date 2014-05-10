//
//
// 1.Variables Functions
rstartSquare = function () {
	// storing original coordinates
	this.ox = this.attr("x");
	this.oy = this.attr("y");
	this.box.ow = this.box.attr("width");
	this.box.oh = this.box.attr("height");
},
rmoveSquare = function (dx, dy) {
	// move will be called with dx and dy
	this.attr({
		x: this.ox + dx,
		y: this.oy + dx
	});
	this.box.attr({
		width: this.box.ow + dx,
		height: this.box.oh + dx
	});
	updateXpos();
};
updateXpos = function () {
	var posXString = "X = " + String(variablesSquare.node.attributes[3].nodeValue);
	$variablesCanvasTextHandler.text(posXString);
}