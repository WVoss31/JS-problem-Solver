/*
 * This constructor function produces an object that provides support 
 * as the user attempts to solve a problem. It tries moves, updates 
 * the current state as necessary, keeps track of the move count, 
 * and checks whether the problem has been solved.
 */

function SolvingAssistant(problem) { 
    this.problem = problem;
    this.problemSolved = false;
    this.moveCount = 0;           
    
    this.tryMove = function(move) { 
                                    
        var next = this.problem.mover.doMove(move, this.problem.currentState);
        if (next !== null) {
            this.update(next);
            this.moveLegal = true;
        }
        else {
            this.moveLegal = false;
        }
    };
    
    this.update = function(state) {
        this.moveCount++;
        this.problem.currentState = state;
        if (this.problem.success()) {
            this.problemSolved = true;
        }
    };
    
    this.reset = function() {
        this.moveCount = 0;
        this.problem.currentState = this.problem.initialState;
        this.problemSolved = false;
    };
}
