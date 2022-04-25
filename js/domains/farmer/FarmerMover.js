const GO_ALONE = "Farmer Goes Alone";
const TAKE_WOLF = "Farmer Takes Wolf";
const TAKE_GOAT = "Farmer Takes Goat";
const TAKE_CABBAGE = "Farmer Takes Cabbage";

var fMover = new Mover();

fMover.addMove(GO_ALONE, (s) => goAlone(s));
fMover.addMove(TAKE_WOLF, (s) => takeWolf(s));
fMover.addMove(TAKE_GOAT, (s) => takeGoat(s));
fMover.addMove(TAKE_CABBAGE, (s) => takeCabbage(s));


function FarmerMover() { };

FarmerMover.prototype = fMover;

function goAlone(state) {  // creates a new state with farmer moved
    var next = new FarmerState(opposite(state.f), state.w, state.g, state.c);
    return next.safe() ? next : null;
}

function takeWolf(state) {  // creates a new state with farmer and wolf moved
    if (state.f !== state.w)
	return null;
    var next = new FarmerState(opposite(state.f), opposite(state.w), state.g, state.c);
    return next.safe() ? next : null;
}

function takeGoat(state) {  // creates a new state with farmer and goat moved
    if (state.f !== state.g)
	return null;
    var next = new FarmerState(opposite(state.f), state.w, opposite(state.g), state.c);
    return next.safe() ? next : null;
}

function takeCabbage(state) {  // creates a new state with farmer and cabbage moved
    if (state.f !== state.c)
	return null;
    var next = new FarmerState(opposite(state.f), state.w, state.g, opposite(state.c));
    return next.safe() ? next : null;
}

function opposite(side) {
    if (side === WEST)
	return EAST;
    else
	return WEST;
}
