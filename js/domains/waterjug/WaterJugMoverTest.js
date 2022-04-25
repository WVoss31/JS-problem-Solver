var mover = new WaterJugMover();

// Verify the move names
displayText("Move names:");
mover.moveNames.forEach(function (m) {
    displayText(m);
    assert([FILL_X, FILL_Y, EMPTY_X, EMPTY_Y, X_TO_Y, Y_TO_X].includes(m));
});

var start = new WaterJugState(0, 0);

displayState(start);

// Test some illegal moves
assert("mover.doMove(EMPTY_X, start) == null");
assert("mover.doMove(EMPTY_Y, start) == null");
assert("mover.doMove(X_TO_Y, start) == null");
assert("mover.doMove(Y_TO_X, start) == null");

var prev = start;
var next;

function doLegal(m) {
    next = mover.doMove(m, prev);
    displayText("After " + m);
    displayState(next);
    prev = next;
}

// Solve it.
doLegal(FILL_X);
doLegal(X_TO_Y);
doLegal(FILL_X);
doLegal(X_TO_Y);

