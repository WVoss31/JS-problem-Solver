function addToDisplay(element) {
    displayDiv.appendChild(element);
}

function newLine() {
    addToDisplay(document.createElement("br"));
}

function displayState(state) {
    newLine();
    addToDisplay(state.makeCanvas());
    newLine();
};

function assert(expression) {
    var result = eval(expression);
    if (!result)
	displayText("Assertion fails: " + expression, "red");
    else
	displayText("Assertion passes: " + expression, "black");
}

function displayText(str, color) {
    if (color === undefined) color = "black";
    var textSpan = document.createElement("span");
    textSpan.innerHTML = str;
    textSpan.style.color = color;
    addToDisplay(textSpan);
    newLine();
}
