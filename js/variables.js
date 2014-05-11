//Here we will be storing all the variables for our miniapps
//
//
// 1.Variables
var variablesPaper = Raphael("variables-canvas", 400, 400);
//Let's add an id to our canvas
variablesPaper.canvas.id = "variables-paper";
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
var equationsPaper = Raphael("equations-canvas", 400, 200);
var equationsRectPosX = 0,
	equationsRectPosY = 0,
	equationsRectWidth = 50,
	equationsRectHeight = 100,
	equationsRect2PosX = equationsRectPosX + equationsRectWidth,
	equationsRect2PosY = equationsRectPosY,
	equationsRect2Width = 30,
	equationsRect2Height = 100,
	equationsRect2HandlerNewX = 70;
// Raphael elements
var rectangleEquations = equationsPaper.rect(equationsRectPosX, equationsRectPosY, equationsRectWidth, equationsRectHeight).attr({
	fill: "red"
});
var rectangleHandlerEquations = equationsPaper.rect(40, 0, 10, 100).attr({
	fill: "hsb(.8, .5, .5)"
});
var rectangle2Equations = equationsPaper.rect(equationsRect2PosX, equationsRect2PosY, equationsRect2Width, equationsRect2Height).attr({
	fill: "blue"
});
var rectangle2HandlerEquations = equationsPaper.rect(70, 0, 10, 100).attr({
	fill: "green"
});
// Some handlers
var $rectangleOneTextEquations = $("#equations-rectangle-1"),
	$rectangleTwoTextEquations = $("#equations-rectangle-2");
//
//
// 3. Cartesian Plane
var cartesianPaper = Raphael("cartesian-canvas", 400, 400);
//Let's give out canvas an id
cartesianPaper.canvas.id = "cartesian-paper";
//We create a handler for the id we just assigned
var $cartesianPaperHandler = $("#cartesian-paper");
//
//
// 4. Cartesian Plane II
var cartesian2Paper = Raphael("cartesian2-canvas", 400, 400);
//Let's give out canvas an id
cartesian2Paper.canvas.id = "cartesian2-paper";
// var $cartesian2Container = $("#cartesian2-container");
var $cartesian2PaperHandler = $("#cartesian2-paper");
//We create a circle
var newCircleCartesian2;
//We store the X and Y position on this array
var cartesian2CirclePos = [];
//
//
// 5. Cartesian Plane on the screen
var compPaper = Raphael("comp-canvas", 400, 400);
compPaper.canvas.id = "comp-paper";
var $compPaperHandler = $("#comp-paper");
//We create a circle
var newCircleComp;
//We store the X and Y position on this array
var compCirclePos = [];
//
//
//