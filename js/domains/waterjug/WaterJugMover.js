const FILL_X =  "Fill Jug X";   
const FILL_Y =  "Fill Jug Y";
const EMPTY_X = "Empty Jug X";
const EMPTY_Y = "Empty Jug Y";
const X_TO_Y =  "Transfer Jug X to Jug Y";
const Y_TO_X =  "Transfer Jug Y to Jug X";

var wjMover = new Mover();

wjMover.addMove(FILL_X, (s) => s.x === 3 ? null : new WaterJugState(3, s.y));
wjMover.addMove(FILL_Y, (s) => s.y === 4 ? null : new WaterJugState(s.x, 4));
wjMover.addMove(EMPTY_X, (s) => s.x === 0 ? null : new WaterJugState(0, s.y));
wjMover.addMove(EMPTY_Y, (s) => s.y === 0 ? null : new WaterJugState(s.x, 0));
wjMover.addMove(X_TO_Y, (s) => s.x === 0 || s.y === 4 ? null : transfer(4, s.x, s.y));
wjMover.addMove(Y_TO_X, (s) => s.x === 3 || s.y === 0 ? null : transfer(3, s.y, s.x));

function WaterJugMover() { }

WaterJugMover.prototype = wjMover;

function transfer(limit, source, dest) { // creates a new state with water
    var new_source;                      // transferred from source to dest
    var new_dest;
    var available = limit - dest;
    if (source <= available) {
        new_dest = dest + source;
        new_source = 0;
    } else {
        new_dest = dest + available;
        new_source = source - available;
    }
    if (limit === 4) // destination is jug Y
        return new WaterJugState(new_source, new_dest);
    else // limit == 3 destination is jug X
        return new WaterJugState(new_dest, new_source);
}
