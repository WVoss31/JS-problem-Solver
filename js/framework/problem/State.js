const LINE_HEIGHT = 25;
const FONT = "bold 25px Courier New";

function State() {
    this.makeDefaultCanvas = function(state) {

	// Create a canvas and set the font
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = FONT;

	// Set the canvas width and height
	var charWidth = ctx.measureText("M").width;
	var w = 0; // width of longest line in chars
	var lines = state.toString().split("\n");
	lines.forEach((line) => w = Math.max(w, line.length));
	canvas.width = w * charWidth;
	canvas.height = lines.length * LINE_HEIGHT + LINE_HEIGHT * 0.5;

	canvas.style.border = "solid black";
	canvas.style.padding = "20px";
	ctx.fillStyle = "black";
	ctx.font = FONT;
	
	var y = LINE_HEIGHT;
	lines.forEach((line) => {
	    ctx.fillText(line, 0, y);
	    y += LINE_HEIGHT;
	});

	return canvas;
    };

    this.animateMove = function(prev) {
	// Do nothing
    };
}

const STATE_PROTO = new State();
