// Create a problem, display name and introduction,
// display initial and final states, and test the
// success method.
var fProblem = new FarmerProblem(); 

displayText(fProblem.name);
newLine();

displayText(fProblem.introduction);
newLine();

displayText("Here is the start state:");
displayState(fProblem.currentState);
newLine();
assert("fProblem.success() == false");

displayText("Changing current state to final state.");
fProblem.currentState = fProblem.finalState;

displayText("Here is the final state:");
displayState(fProblem.currentState);
newLine();
assert("fProblem.success() == true");
