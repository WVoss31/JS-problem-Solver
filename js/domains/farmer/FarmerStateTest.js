var displayDiv = document.getElementById("displayDiv");

var start = new FarmerState(WEST, WEST, WEST, WEST);
var startCopy = new FarmerState(WEST, WEST, WEST, WEST);
var goal = new FarmerState(EAST, EAST, EAST, EAST);

//Test state display
displayText("Here is the start state:");
displayState(start);
displayText("Here is the goal state:");
displayState(goal);

//Test state safety

function testSafety(f, w, g, c, isSafe) {
    state = new FarmerState(f, w, g, c);
    displayState(state);
    if (isSafe)
	assert("state.safe() == true");
    else
	assert("state.safe() == false");
}

testSafety(WEST, WEST, WEST, WEST, true);
testSafety(EAST, WEST, WEST, WEST, false);
testSafety(EAST, WEST, EAST, WEST, true);
testSafety(WEST, WEST, EAST, WEST, true);
testSafety(EAST, WEST, EAST, EAST, true);
testSafety(EAST, EAST, WEST, WEST, false);
testSafety(WEST, EAST, EAST, WEST, false);
testSafety(EAST, EAST, EAST, EAST, true);


//Test state equality

assert("!start.equals(goal)");
assert("!goal.equals(start)");
assert("goal.equals(goal)");
assert("start.equals(start)");
assert("start.equals(startCopy)");
