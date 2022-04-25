/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// Create a problem, display name and introduction,
// display initial and final states, and test the
// success method.
var pProblem = new PuzzleProblem();

displayText(pProblem.name);
newLine();

displayText(pProblem.introduction);
newLine();

displayText("Here is the start state:");
displayState(pProblem.currentState);
newLine();
assert("pProblem.success() == false");

displayText("Changing current state to final state.");
pProblem.currentState = pProblem.finalState;

displayText("Here is the final state:");
displayState(pProblem.currentState);
newLine();
assert("pProblem.success() == true");