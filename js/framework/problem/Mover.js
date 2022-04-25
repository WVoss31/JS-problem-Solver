/*
 * This constructor function produces an object that manages move names
 * and state change functions for a problem solving domain.
 */

function Mover() {

    this.moveNames = [];
    this.moveMap = new Map();

    this.addMove = function(name, fun) {
	this.moveNames.push(name);
	this.moveMap.put(name, fun);
    };

    this.doMove = function(name, state) {
	fun = this.moveMap.get(name);
	return fun(state);
    };
}
