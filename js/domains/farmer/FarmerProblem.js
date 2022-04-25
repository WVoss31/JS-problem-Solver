var fName = "Farmer, Wolf, Goat, and Cabbage";

var fIntro = "A farmer and his wolf, goat, and cabbage come to the edge of " +
        "a river they wish to cross.  There is a boat at the river's edge " +
        "that only the farmer can row.  The farmer can take at most one " +
        "other object besides himself on a crossing, but if the wolf is " +
        "ever left with the goat, the wolf will eat the goat; similarly, " +
        "if the goat is left with the cabbage, the goat will eat the " +
        "cabbage.  Devise a sequence of crossings of the river so that " +
        "all four characters arrive safely on the other side.";

var fInit = new FarmerState(WEST, WEST, WEST, WEST);

var fGoal = new FarmerState(EAST, EAST, EAST, EAST);

var fMvr = new FarmerMover();

function FarmerProblem() { }

FarmerProblem.prototype = new Problem(fName, fIntro, fInit, fGoal, fMvr);
