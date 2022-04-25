/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var mover = new PuzzleMover();

// Verify the move names
displayText("Move names:");
mover.moveNames.forEach(function (m) {
    displayText(m);
    assert([SLIDE_1, SLIDE_2, SLIDE_3, SLIDE_4,
	    SLIDE_5, SLIDE_6, SLIDE_7, SLIDE_8].includes(m));
});

var start = new PuzzleState([[2, 8, 3], [1, 6, 4], [7, 0, 5]]);

displayState(start);

// Test some illegal moves
assert("mover.doMove(SLIDE_1, start) == null");
assert("mover.doMove(SLIDE_2, start) == null");
assert("mover.doMove(SLIDE_3, start) == null");
assert("mover.doMove(SLIDE_4, start) == null");
assert("mover.doMove(SLIDE_8, start) == null");

var prev = start;
var next;

function doLegal(m) {
    next = mover.doMove(m, prev);
    displayText("After " + m);
    displayState(next);
    prev = next;
}

// Solve it.
doLegal(SLIDE_6);
doLegal(SLIDE_8);
doLegal(SLIDE_2);
doLegal(SLIDE_1);
doLegal(SLIDE_8);
