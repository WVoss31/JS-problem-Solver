/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const SLIDE_1 = "Slide 1";
const SLIDE_2 = "Slide 2";
const SLIDE_3 = "Slide 3";
const SLIDE_4 = "Slide 4";
const SLIDE_5 = "Slide 5";
const SLIDE_6 = "Slide 6";
const SLIDE_7 = "Slide 7";
const SLIDE_8 = "Slide 8";

var puzzleMover = new Mover();

puzzleMover.addMove(SLIDE_1, (s, num=1) => trySlide(s, num)); // You provide move functions
puzzleMover.addMove(SLIDE_2, (s, num=2) => trySlide(s, num));
puzzleMover.addMove(SLIDE_3, (s, num=3) => trySlide(s, num));
puzzleMover.addMove(SLIDE_4, (s, num=4) => trySlide(s, num));
puzzleMover.addMove(SLIDE_5, (s, num=5) => trySlide(s, num));
puzzleMover.addMove(SLIDE_6, (s, num=6) => trySlide(s, num));
puzzleMover.addMove(SLIDE_7, (s, num=7) => trySlide(s, num));
puzzleMover.addMove(SLIDE_8, (s, num=8) => trySlide(s, num));

function PuzzleMover() { }

PuzzleMover.prototype = puzzleMover;

// Helper functions here
function trySlide(state, num) {
    var oldState = state;
    var currTile = oldState.getLocation(num);
    var blankTile = oldState.getLocation(0);
    
    if (validMove(currTile, blankTile)) {
        var next = oldState.swap(currTile, blankTile);
        return next;      
    } else {
        return null;
    }
}