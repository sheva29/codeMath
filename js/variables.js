//Here we will be storing all the variables for our miniapps
//
//
//
//
//
// Global Variables
//
//
//
var canvasWidth = 400;
var canvasHeight = 400;
// 1.Variables
var variablesPaper = Raphael("variables-canvas", canvasWidth, canvasHeight);
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
var equationsPaper = Raphael("equations-canvas", canvasWidth, canvasHeight);
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
	fill: "#bc5b7b",
	stroke: "none"
});
var rectangleHandlerEquations = equationsPaper.rect(40, 0, 10, 100).attr({
	fill: "#bc5b7b",
	stroke: "none"
});
var rectangle2Equations = equationsPaper.rect(equationsRect2PosX, equationsRect2PosY, equationsRect2Width, equationsRect2Height).attr({
	fill: "#5b98ba",
	stroke: "none"
});
var rectangle2HandlerEquations = equationsPaper.rect(70, 0, 10, 100).attr({
	fill: "#5b98ba",
	stroke: "none"
});
// Some handlers
var $rectangleOneTextEquations = $("#equations-rectangle-1"),
	$rectangleTwoTextEquations = $("#equations-rectangle-2");
//
//
// 3. Cartesian Plane
var cartesianPaper = Raphael("cartesian-canvas", canvasWidth, canvasHeight);
//Let's give out canvas an id
cartesianPaper.canvas.id = "cartesian-paper";
//We create a handler for the id we just assigned
var $cartesianPaperHandler = $("#cartesian-paper");
//
//
// 4. Cartesian Plane II
var cartesian2Paper = Raphael("cartesian2-canvas", canvasWidth, canvasHeight);
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
var compPaper = Raphael("comp-canvas", canvasWidth, canvasHeight);
compPaper.canvas.id = "comp-paper";
var $compPaperHandler = $("#comp-paper");
//We create a circle
var newCircleComp;
//We store the X and Y position on this array
var compCirclePos = [];
//
//
// 6. Circle on the Canvas
var circlePaper = Raphael("circle-canvas", canvasWidth, canvasHeight);
circlePaper.canvas.id = "circle-paper";
var $circlePaperHandler = $("#circle-paper");
var newCircleElement,
	newCircleElementHandler;
var circleRadiusVal;
//
//
//
// 7. X Position of the circle in the canvas
var circleXPaper = Raphael("circlex-canvas", canvasWidth, canvasHeight);
circleXPaper.canvas.id = "circlex-paper";
var $circleXPaperHandler = $("#circlex-paper");
var newCircleXElement,
	newCircleXElementHandler,
	newCircleXElementPos = 0;
//
//
//
// 8. Y Position of the circle in the canvas
var circleYPaper = Raphael("circley-canvas", canvasWidth, canvasHeight);
circleYPaper.canvas.id = "circley-paper";
var $circleYPaperHandler = $("#circley-paper");
var newCircleYElement,
	newCircleYElementHandler,
	newCircleYElementPos = 0;
//
//
//
// 9. Circle and Color
var circleColorPaper = Raphael("circle-color-canvas", canvasWidth, canvasHeight);
circleColorPaper.canvas.id = "circle-color-paper";
var $circleColorPaperHandler = "#circle-color-paper";
var newCircleColorElement,
	newCircleColorElementHandler,
	newCircleColorElementPosX = 0,
	newCircleColorElementPosY = 0;
//
//
//
// 12. Multiple Elements in the canvas
var multipleElementsPaper = Raphael("multiple-canvas", canvasWidth, canvasHeight);
// console.log(multipleElementsPaper);
multipleElementsPaper.canvas.id = "multiple-paper";
var $multipleElementsPaperHandler = $("#multiple-paper");
// This is for the circle picker
var $multipleElementsPicker = $("#multiple-circle-picker");
var multipleElementsPickerSelector = false;
//We store our circles in an array
var multipleCircles = [];
//This is to assign IDs to our circles
var multipleCirclesCounter = 1;
var multipleSizerCounter = 1000;
//This variables are for the color API
var multipleColorArray = [],
	multipleColorIndex = 0,
	multipleHex,
	multipleTypeTimer,
	multipleTypeInterval = 2000,
	multipleLastColor;
//
//
//
//Navigation Dots variables
var navigationDotsText = ["Introduction", "Variables", "Variables & Equations", "Cartesian plane", "Cartesian plane II", "Cartesian plane on the screen", "Elements on the screen", "Circle X Position", "Circle Y Position", "Circle & Color", "Drawing Multiple Elements", "The end"];
//
//