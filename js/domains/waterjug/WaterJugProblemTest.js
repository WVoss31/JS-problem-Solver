// Create a problem, display name and introduction,
// display initial and final states, and test the
// success method.
var wjProblem = new WaterJugProblem(); 

displayText(wjProblem.name);
newLine();

displayText(wjProblem.introduction);
newLine();

displayText("Here is the start state:");
displayState(wjProblem.currentState);
newLine();
assert("wjProblem.success() == false");

displayText("Changing current state to one final state.");
wjProblem.currentState = new WaterJugState(2,4); // one final state

displayText("Here is one final state:");
displayState(wjProblem.currentState);
newLine();
assert("wjProblem.success() == true");

displayText("Changing current state to another final state.");
wjProblem.currentState = new WaterJugState(3,2); // another final state

displayText("Here is another final state:");
displayState(wjProblem.currentState);
newLine();
assert("wjProblem.success() == true");
