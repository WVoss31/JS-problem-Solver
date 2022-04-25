var problem = new FarmerProblem();
var assistant = new SolvingAssistant(problem);

function doIllegal(move) {
    displayText("Trying " + move);
    assistant.tryMove(move);
    assert("assistant.moveLegal == false");
}

function doLegal(move) {
    assert("assistant.problemSolved == false");
    displayText("Trying " + move);
    assistant.tryMove(move);
    assert("assistant.moveLegal == true");
    displayState(problem.currentState);
}

displayState(problem.currentState);
assert("assistant.problemSolved == false");

// Try some illegal moves
doIllegal(GO_ALONE);
doIllegal(TAKE_WOLF);
doIllegal(TAKE_CABBAGE);

// Solve it

doLegal(TAKE_GOAT);
doLegal(GO_ALONE);
doLegal(TAKE_WOLF);
doLegal(TAKE_GOAT);
doLegal(TAKE_CABBAGE);
doLegal(GO_ALONE);
doLegal(TAKE_GOAT);

assert("assistant.problemSolved == true");
