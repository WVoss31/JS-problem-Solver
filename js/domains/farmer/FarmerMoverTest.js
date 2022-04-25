var mover = new FarmerMover();

// Verify the move names
displayText("Move names:");
mover.moveNames.forEach(function (m) {
    displayText(m);
    assert([GO_ALONE, TAKE_WOLF, TAKE_GOAT, TAKE_CABBAGE].includes(m));
});

var start = new FarmerState(WEST, WEST, WEST, WEST);
var goal = new FarmerState(EAST, EAST, EAST, EAST);

displayState(start);

// Test some illegal moves
assert("mover.doMove(GO_ALONE, start) == null");
assert("mover.doMove(TAKE_WOLF, start) == null");
assert("mover.doMove(TAKE_CABBAGE, start) == null");

var prev = start;
var next;

function doLegal(m) {
    next = mover.doMove(m, prev);
    displayText("After " + m);
    displayState(next);
    prev = next;
}

// Solve it.
doLegal(TAKE_GOAT);
doLegal(GO_ALONE);
doLegal(TAKE_CABBAGE);
doLegal(TAKE_GOAT);
doLegal(TAKE_WOLF);
doLegal(GO_ALONE);
doLegal(TAKE_GOAT);

assert("next.equals(goal)");
