var fProblem = new FarmerProblem();
var fPanel = new ProblemPanel(fProblem).panel;

fPanel.css("height", "525px");

$("body").append(fPanel);
