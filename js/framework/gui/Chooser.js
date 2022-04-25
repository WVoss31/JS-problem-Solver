function Chooser(problems) {
    const choose = "Choose a Problem";

    var chooserDiv = $("<div id='chooser'></div>");

    var selector = $("<select></select>");
    selector.addClass("largeBold");
    addOption(choose);

    var headerDiv = $("<div></div>");
    headerDiv.addClass("header");
    headerDiv.append(selector);

    chooserDiv.append(headerDiv);

    var problemPanel;

    var panelMap = new Map();
    problems.forEach((p) => {
	problemPanel = $(new ProblemPanel(p).panel);
	panelMap.put(p.name, problemPanel);
	addOption(p.name);
	chooserDiv.append(problemPanel);
	problemPanel.hide();
    });

    var speed = 500;

    selector.change( () => {
	var selection = selector.val();
	if (selection === choose) {
	    problemPanel.slideUp(speed);
	}
	else {
	    problemPanel.slideUp(speed, () => {
		problemPanel = panelMap.get(selection);
		problemPanel.slideDown(speed);
	    });
	}
    });

    this.select = chooserDiv;

    function addOption(str) {
	selector.append($("<option></option>").text(str));
    }
}
