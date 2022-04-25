var displayDiv = document.getElementById("displayDiv");

var start = new WaterJugState(0, 0);
var startCopy = new WaterJugState(0, 0);
var fillX = new WaterJugState(3, 0);
var aGoal = new WaterJugState(2, 4);
var anotherGoal = new WaterJugState(3, 2);

//Test state display
displayText("Here is the start state:");
displayState(start);
displayText("Here is after filling X:");
displayState(fillX);
displayText("Here is one goal state:");
displayState(aGoal);
displayText("Here is another goal state:");
displayState(anotherGoal);

//Test state equality

assert("!start.equals(aGoal)");
assert("!aGoal.equals(start)");
assert("aGoal.equals(aGoal)");
assert("!aGoal.equals(anotherGoal)");
assert("start.equals(start)");
assert("start.equals(startCopy)");
