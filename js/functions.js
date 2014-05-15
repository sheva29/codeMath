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
	var posXString = "x = " + String(variablesSquare.node.attributes[3].nodeValue);
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
	var rectangleOneString = "var x = " + rectangleEquations.node.attributes[2].nodeValue + ";";
	$rectangleOneTextEquations.text(rectangleOneString);
}
updateRectangleTwoEquations = function () {
	var rectangleTwoString = "var y = " + rectangle2Equations.node.attributes[2].nodeValue + ";";
	$rectangleTwoTextEquations.text(rectangleTwoString);
}
updateRectangleResult = function () {
	// var rectangleThreeStringEquations = "x + y = " + someVariable ";";
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
	// console.log(line2);
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
	// console.log(line2);
}

function drawCartesian2Circle() {
	newCircleCartesian2 = cartesian2Paper.circle(0, 0, 10).attr({
		fill: "#5a8caa",
		stroke: "2px"
	});
}

function drawCartesian2Axes() {
	//This draws vertical lines
	for (var i = -10; i <= 10; i++) {
		// var line = canvas.path(["M", (25 * i), 0, "L", (25 * i), 500]);
		var line = cartesian2Paper.path("M" + (20 * i) + "," + -200 + " L" + (20 * i) + "," + 200).attr({
			"stroke": "#EBE9E9"
		});
	}
	//This draws horizontal lines
	for (var i = -10; i <= 10; i++) {
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
	var posXHtmlString = "var x = " + parseInt(cartesian2CirclePos[0]) + ";";
	var posYHtmlString = "var y = " + parseInt(cartesian2CirclePos[1]) + ";";
	$posXHandler.text(posXHtmlString);
	$posYHandler.text(posYHtmlString);
	// console.log("I'm passing a string");
}
// 5. Cartesian Plane on the Computer
//
// 
//
function drawCompCircle() {
	newCircleComp = compPaper.circle(10, 10, 9).attr({
		fill: "#5a8caa",
		opacity: .8
	});
}

function drawCompLines() {
	for (var i = 0; i <= 20; i++) {
		var line = compPaper.path("M" + (20 * i) + ",0" + " L" + (20 * i) + ",400").attr({
			"stroke": "#EBE9E9"
		});
	}
	for (var i = 0; i <= 20; i++) {
		var line2 = compPaper.path("M" + "0," + (20 * i) + " L" + "400," + (20 * i)).attr({
			"stroke": "#EBE9E9"
		});
	}
}

function updateCompCirclePos(posX, posY) {
	for (var i = 1; i <= 400; i += 20) {
		for (var j = 1; j <= 400; j += 20) {
			if (posX > i && posX < i + 20) {
				if (posY > j && posY < j + 20) {
					newCircleComp.node.cx.baseVal.value = i + 9;
					newCircleComp.node.cy.baseVal.value = j + 9;
					compCirclePos[0] = (i / 20) + 1;
					compCirclePos[1] = (j / 20) + 1;
				}
			}
		}
	}
}
updateCompModelView = function () {
	//This is where the position in the canvas will be storing our
	var $posXHandler = $('#comp-posx');
	var $posYHandler = $('#comp-posy');
	var posXHtmlString = 'var x = ' + parseInt(compCirclePos[0]) + ";";
	var posYHtmlString = 'var y = ' + parseInt(compCirclePos[1]) + ";";
	$posXHandler.text(posXHtmlString);
	$posYHandler.text(posYHtmlString);
}
// 6. Drawing elements on the Plane
//
// 
//
drawCircleCircle = function () {
	newCircleElement = circlePaper.circle(200, 200, 40).attr({
		fill: "#5a8caa",
		stroke: "none"
	});
}
drawCircleHandler = function () {
	newCircleElementHandler = circlePaper.circle(225, 225, 10).attr({
		fill: "lightblue",
		stroke: "none"
	});
}
rstartCircle = function () {
	// storing original coordinates
	this.ox = this.attr("cx");
	this.oy = this.attr("cy");
	this.big.or = this.big.attr("r");
},
rmoveCircle = function (dx, dy) {
	// move will be called with dx and dy
	this.attr({
		cx: this.ox + dy,
		cy: this.oy + dy
	});
	this.big.attr({
		r: this.big.or + (dy < 0 ? -1 : 1) * Math.sqrt(2 * dy * dy)
	});
	circleRadiusVal = newCircleElement.node.attributes[2].nodeValue;
	updateCircleModelView();
};
updateCircleModelView = function () {
	var $circleRadiusHandler = $("#circle-radius");
	var radiusString = " var radius = " + parseInt(circleRadiusVal) + ";";
	$circleRadiusHandler.text(radiusString);
}
// 7. Circle X position
//
// 
//
drawCircleX = function () {
	newCircleXElement = circleXPaper.circle(200, 200, 40).attr({
		fill: "#5a8caa",
		stroke: "none"
	});
}
drawCircleXHandler = function () {
	newCircleXElementHandler = circleXPaper.circle(225, 225, 10).attr({
		fill: "lightblue"
	});
	newCircleXElementHandler.node.id = "circlex-handler";
	var $newCircleXElementHandler = $("#circlex-handler");
	$newCircleXElementHandler.hide();
}
var startCircleX = function () {
	// storing original coordinates
	this.ox = this.attr("cx");
	// this.oy = this.attr("cy");
	this.sizer.ox = this.sizer.attr("cx");
	// this.sizer.oy = this.sizer.attr("cy")
	this.attr({
		opacity: 1
	});
	this.sizer.attr({
		opacity: 1
	});
},
	moveCircleX = function (dx, dy) {
		// move will be called with dx and dy
		this.attr({
			cx: this.ox + dx
		});
		this.sizer.attr({
			cx: this.sizer.ox + dx
		});
		newCircleXElementPos = newCircleXElement.node.attributes[0].nodeValue;
		updateCircleXModelView();
	},
	upCircleX = function () {
		// restoring state
		this.attr({
			opacity: .5
		});
		this.sizer.attr({
			opacity: .5
		});
	};
updateCircleXModelView = function () {
	var $circleXPosHandler = $("#circlex-xpos");
	var posString = " var x = " + parseInt(newCircleXElementPos) + ";";
	$circleXPosHandler.text(posString);
}
// 8. Circle Y position
//
// 
//
drawCircleY = function () {
	newCircleYElement = circleYPaper.circle(200, 200, 40).attr({
		fill: "#5a8caa",
		stroke: "none"
	});
}
drawCircleYHandler = function () {
	newCircleYElementHandler = circleYPaper.circle(225, 225, 10).attr({
		fill: "lightblue"
	});
	newCircleYElementHandler.node.id = "circley-handler";
	var $newCircleYElementHandler = $("#circley-handler");
	$newCircleYElementHandler.hide();
}
var startCircleY = function () {
	// storing original coordinates
	// this.ox = this.attr("cx");
	this.oy = this.attr("cy");
	// this.sizer.ox = this.sizer.attr("cx");
	this.sizer.oy = this.sizer.attr("cy")
	this.attr({
		opacity: 1
	});
	this.sizer.attr({
		opacity: 1
	});
},
	moveCircleY = function (dx, dy) {
		// move will be called with dx and dy
		this.attr({
			cy: this.oy + dy
		});
		this.sizer.attr({
			cy: this.sizer.oy + dy
		});
		newCircleYElementPos = newCircleYElement.node.attributes[1].nodeValue;
		updateCircleYModelView();
	},
	upCircleY = function () {
		// restoring state
		this.attr({
			opacity: .5
		});
		this.sizer.attr({
			opacity: .5
		});
	};
updateCircleYModelView = function () {
	var $circleYPosHandler = $("#circley-ypos");
	var posString = " var y = " + parseInt(newCircleYElementPos) + ";";
	$circleYPosHandler.text(posString);
}
// 9. Circle and Color
//
// 
//
drawCircleColor = function () {
	newCircleColorElement = circleColorPaper.circle(200, 200, 40).attr({
		fill: "#5a8caa",
		stroke: "none"
	});
}
drawCircleColorHandler = function () {
	newCircleColorElementHandler = circleColorPaper.circle(225, 225, 10).attr({
		fill: "lightblue"
	});
	newCircleColorElementHandler.node.id = "circle-color-handler";
	var $newCircleColorElementHandler = $("#circle-color-handler");
	$newCircleColorElementHandler.hide();
}
var startCircleColor = function () {
	// storing original coordinates
	this.ox = this.attr("cx");
	this.oy = this.attr("cy");
	this.sizer.ox = this.sizer.attr("cx");
	this.sizer.oy = this.sizer.attr("cy")
	this.attr({
		opacity: 1
	});
	this.sizer.attr({
		opacity: 1
	});
},
	moveCircleColor = function (dx, dy) {
		// move will be called with dx and dy
		this.attr({
			cx: this.ox + dx,
			cy: this.oy + dy
		});
		this.sizer.attr({
			cx: this.sizer.ox + dx,
			cy: this.sizer.oy + dy
		});
		newCircleColorElementPosX = newCircleColorElement.node.attributes[0].nodeValue;
		newCircleColorElementPosY = newCircleColorElement.node.attributes[1].nodeValue;
		updateCircleColorModelView();
	},
	upCircleColor = function () {
		// restoring state
		this.attr({
			opacity: .5
		});
		this.sizer.attr({
			opacity: .5
		});
	};
updateCircleColorModelView = function () {
	var $circleColorPosXHandler = $("#circle-color-xpos");
	var posXString = " var y = " + parseInt(newCircleColorElementPosX) + ";";
	$circleColorPosXHandler.text(posXString);
	var $circleColorPosYHandler = $("#circle-color-ypos");
	var posYString = " var y = " + parseInt(newCircleColorElementPosY) + ";";
	$circleColorPosYHandler.text(posYString);
}
// 12. Cartesian Plane on the Computer
//
// 
//
function makeMultipleCircles(mouseX, mouseY) {
	//We call it before our circles are dragged so that their array is waiting to store the information
	var radius;
	var fill;
	var circle = multipleElementsPaper.circle(mouseX, mouseY, 50).attr({
		fill: "orange",
		stroke: "none"
	});
	// We add an ID and a class to the circle
	var ourCircle = $("circle").last();
	ourCircle.attr("class", "circle-" + multipleCirclesCounter);
	// And then finally push it to our array of circles
	multipleCircles.push(circle);
	//Passing mouseX,mouseY and the circle counter
	var handlerPos = [mouseX + 35, mouseY + 35];
	var s = multipleElementsPaper.circle(handlerPos[0], handlerPos[1], 10).attr({
		fill: "000000",
		stroke: "none"
	});
	//We add an id and a class to our little circle.
	s.node.id = multipleSizerCounter;
	var sizerClass = $('circle').last();
	sizerClass.attr("class", "main-circle sizer");
	var newSizerClass = $(".sizer");
	s.hide();
	//We now assign a handler for each little circle added and a main circle in order to hide them
	var circleClass = $(".circle-" + String(multipleCirclesCounter));
	var sizerID = $("#" + String(multipleSizerCounter));
	circleClass.mouseenter(function () {
		sizerID.toggle();
	});
	circleClass.mouseleave(function () {
		sizerID.hide();
	});
	sizerID.mouseenter(function () {
		$(this).toggle();
	});
	sizerID.mouseleave(function () {
		$(this).hide();
	});
	//We add some resizing and dragging properties
	var start = function () {
		//storing original coordinates
		this.ox = this.attr("cx");
		this.oy = this.attr("cy");
		this.sizer.ox = this.sizer.attr("cx");
		this.sizer.oy = this.sizer.attr("cy")
		this.attr({
			opacity: 1
		});
		this.sizer.attr({
			opacity: 1
		});
	}, move = function (dx, dy) {
			// move will be called with dx and dy
			this.attr({
				cx: this.ox + dx,
				cy: this.oy + dy
			});
			this.sizer.attr({
				cx: this.sizer.ox + dx,
				cy: this.sizer.oy + dy
			});
			//This is the key function to change 
			updateModelMultiple(this.attrs.cx, this.attrs.cy, this.node.className.baseVal, this.attrs.r);
		}, up = function () {
			// restoring state
			this.attr({
				opacity: .5
			});
			this.sizer.attr({
				opacity: .5
			});
		}, rstart = function () {
			// storing original coordinates
			this.ox = this.attr("cx");
			this.oy = this.attr("cy");
			this.big.or = this.big.attr("r");
		}, rmove = function (dx, dy) {
			// move will be called with dx and dy
			this.attr({
				cx: this.ox + dy,
				cy: this.oy + dy
			});
			this.big.attr({
				r: this.big.or + (dy < 0 ? -1 : 1) * Math.sqrt(2 * dy * dy)
			});
			updateModelMultiple(this.attrs.cx, this.attrs.cy, this.node.className.baseVal, this.attrs.r);
		};
	circle.drag(move, start, up);
	circle.sizer = s;
	s.drag(rmove, rstart);
	s.big = circle;
	//Here we create our HTML elements
	var myCodeList = $(".code-list");
	var htmlString = "<li class='circle-" + multipleCirclesCounter + "'> <span class='circle-color'> var color = <div class='circle-color-input' contentEditable autocorrect='off'> type a color</div> ; </span> <br> <span class='circle-radius'> This is a test </span> <br> <span class='circle'> This is a test </span> </li>";
	myCodeList.append(htmlString);
	updateListMultiple();
	console.log(circle.attrs.fill);
	passingColorMultiple(circle.attrs.fill);
	circle.attrs.fill = multipleHex;
	// console.log(circle);
	multipleCirclesCounter++;
	multipleSizerCounter++;
	//I could also return a circle if I wanted
	// return circle;
}
//This function updates the x,y position and radius based on the class of the element
function updateModelMultiple(x, y, _class, r) {
	var len = multipleCircles.length;
	for (var i = 0; i < len; i++) {
		//We check if the circle that's gonna be moved exists through its class and the we
		if (multipleCircles[i].node.className.baseVal == _class) {
			multipleCircles[i].attrs.cx = x;
			multipleCircles[i].attrs.cy = y;
			multipleCircles[i].attrs.r = r;
		}
	}
	updateListMultiple();
}
//This function updates the information in the HTML from the circles
function updateListMultiple() {
	var len = multipleCircles.length;
	for (var i = 0; i < len; i++) {
		//We create one reference. This makes looking for one element more effective. Unless we need to search for a particular element
		var currentItem = multipleCircles[i];
		var updateStringRadius = "var radius = " + parseInt(currentItem.attrs.r) + ";";
		var updateStringCircle = "circle (" + currentItem.attrs.cx + " ," + currentItem.attrs.cy + ", radius)";
		//This is the div Item for the particular div of each element
		var divItem = $('.code-list').find('li.circle-' + (i + 1));
		var radiusItem = divItem.find("span.circle-radius");
		var circleItem = divItem.find("span.circle");
		radiusItem.text(updateStringRadius);
		circleItem.text(updateStringCircle);
	}
}

function passingColorMultiple(thisObjColor) {
	var $circleLi = $("li.circle-" + multipleCirclesCounter);
	var $colorFieldSpan = $circleLi.find("span.circle-color");
	var $colorFieldClass = $($colorFieldSpan).find(".circle-color-input");
	console.log($circleLi[0].className);
	console.log(document.getElementsByClassName("li.circle" + multipleCirclesCounter));
	// console.dir(document.documentElement);
	$colorFieldClass.click(function () {
		console.log("I'm being clicked");
	});
	var $contentEditable = $('[contenteditable]');
	$contentEditable.on('focus', function () {
		var $this = $(this);
		$this.data('before', $this.html());
		return $this;
	});
	$contentEditable.on('blur keyup paste', function () {
		var $this = $(this);
		if ($this.data('before') !== $this.html()) {
			$this.data('before', $this.html());
			$this.trigger('change');
		}
		return $this;
	});
	$colorFieldClass.focus(function () {
		console.log(multipleColorArray);
	});
	$colorFieldClass.on('change', function () {
		var inputText = $(this).text();
		if (inputText.length > 0) {
			$.ajax({
				dataType: 'jsonp',
				url: "http://www.colourlovers.com/api/colors?keywords=" + inputText + "&numResults=20&format=json&jsonCallback=?"
			}).then(function (data) {
				multipleColorArray = data.map(function (color) {
					return toProperHexMultiple(color.hex);
				});
				multipleHex = multipleColorArray[multipleColorIndex];
				$colorFieldClass.css("color", multipleHex);
				thisObjColor = multipleHex;
				updateCircleColorMultiple(multipleHex, $circleLi[0].className);
			});
		}
	});
	$colorFieldClass.keyup(function () {
		typeTimer = setTimeout(completeColor, multipleTypeTimer);
	});
	$colorFieldClass.keydown(function (e) {
		if (e.keyCode == 13 || e.charCode == 13) {
			var color = $circleColor.css("color");
			var text = $circleColor.text();
			return false;
		} else if (e.keyCode == 38 || e.charCode == 38) {
			toggleColor('up');
			return false;
		} else if (e.keyCode == 40 || e.charCode == 40) {
			toggleColor('down');
			return false;
		}
		clearTimeout(multipleTypeTimer);
	});
}

function toProperHexMultiple(hex) {
	hex = hex.toLowerCase();
	return hex ? (hex != 'ffffff' ? "#" + hex : "#eee") : "#000";
	console.log(hex);
}

function toggleColor(word) {
	if (word == 'up') {
		multipleColorIndex++;
		if (multipleColorIndex >= multipleColorArray.length) multipleColorIndex = 0;
	} else {
		multipleColorIndex--;
		if (multipleColorIndex < 0) multipleColorIndex = multipleColorArray.length - 1;
	}
	multipleHex = multipleColorArray[multipleColorIndex];
}

function completeColor() {
	var color = $(".circleColor").text();
	if (color != multipleLastColor && color != '') {
		multipleLastColor = color;
	}
	clearTimeout(multipleTypeTimer);
}

function updateCircleColorMultiple(newColor, handlerClass) {
	var len = multipleCircles.length;
	for (var i = 0; i < len; i++) {
		if (multipleCircles[i].node.className.baseVal == handlerClass) {
			multipleCircles[i].attr("fill", newColor);
		}
	}
}
// 
//
// 
// Navigation Dots
navigationDotsIdAndClass = function () {
	var findLis = $(".fullPage-slidesNav").find("span");
	findLis.addClass("nav-dots");
	findLis.each(function (i) {
		var $this = $(this);
		// $this.addClass('nav-dot-' + i);
		$this.attr('id', 'nav-dots-' + i);
	});
}
//
//