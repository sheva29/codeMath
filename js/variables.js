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
//
//
// 2. Variables and Equations
var equationsPaper = Raphael("equations-canvas", 500, 500);
var equationsRectPosX = 0,
	equationsRectPosY = 0,
	equationsRectWidth = 50,
	equationsRectHeight = 100,
	equationsRect2PosX = equationsRectPosX + equationsRectWidth,
	equationsRect2PosY = rectPosY,
	equationsRect2Width = 30,
	equationsRect2Height = 100;
// Raphael elements
var rectangle = canvas.rect(equationsRectPosX, equationsRectPosY, equationsRectWidth, equationsRectHeight).attr({
	fill: "red"
});
var rectangleHandler = canvas.rect(40, 0, 10, 100).attr({
	fill: "hsb(.8, .5, .5)"
});
var rectangle2 = canvas.rect(equationsRect2PosX, equationsRect2PosY, equationsRect2Width, equationsRect2Height).attr({
	fill: "blue"
});
var rectangle2Handler = canvas.rect(70, 0, 10, 100).attr({
	fill: "green"
});
var equationsRect2HandlerNewX = 70;
var $rectangleOneText = $("#square-1"),
	$rectangleTwoText = $("#square-2");