var problems = [new FarmerProblem(), new WaterJugProblem()];
var chooser = new Chooser(problems);

$("body").append(chooser.select);
