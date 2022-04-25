var wjName = "Water Jug";

var wjIntro =
        "You are given two empty jugs: jug X holds 3 gallons, jug Y holds 4. " +
        "Neither has any measuring markers on it. You have a ready supply " +
        "of water. You can fill either jug, empty either jug on the ground, " +
        "or pour all or some of either jug into the other.  The goal is to " +
        "get exactly 2 gallons of water into either jug.";

var wjInit = new WaterJugState(0, 0);

var wjGoal = null; // There is no unique goal state

var wjMvr = new WaterJugMover();
    

function WaterJugProblem() {
    this.success = function () {
        return this.currentState.x === 2 || this.currentState.y === 2;
    };
}

WaterJugProblem.prototype =
    new Problem(wjName, wjIntro, wjInit, wjGoal, wjMvr);
