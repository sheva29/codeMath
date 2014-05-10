//Here we will be storing all the variables for our miniapps
//
//
// 1.Variables
var variablesPaper = Raphael("variables-canvas", 400, 400);
var variablesSquare = variablesPaper.rect(0, 0, 160, 160).attr({
	fill: "#835ea7",
	stroke: "none"
});
var variablesSquareSizer = variablesPaper.rect(130, 130, 30, 30).attr({
	fill: "#8871a3",
	stroke: "none",
	cursor: "drag",
	opacity: 0.5
});
var $variablesCanvasTextHandler = $("#variables-canvas-text");
console.log(variablesSquareSizer);