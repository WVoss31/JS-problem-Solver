/* 
 * This constructor function produces an object that stores
 * information about a problem solving domain.
 */

function Problem(name, intro, init, goal, mover) {
    this.name = name;
    this.introduction = intro;
    this.initialState = init;
    this.finalState = goal;
    this.currentState = init;
    this.mover = mover;
    this.success = function() { 
        return this.currentState.equals(this.finalState);
    };
}
