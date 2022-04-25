/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var pName = "8-Puzzle" ;  // You provide problem name

var pIntro =  "You are given a board in which numbered tiles can slide around. There is one blank space that holds no tile." +
        "A legal move consists of sliding a tile into the blank space if the tile is adjacent to it. " + 
        "The goal is to move tiles around until they are arranged in numerical order clockwise from the upper left."; // Introductory text

var pInit = new PuzzleState([[2, 8, 3], [1, 6, 4], [7, 0, 5]]);  // Initial state

var pGoal = new PuzzleState([[1, 2, 3], [8, 0, 4], [7, 6, 5]]);  // Goal state

var pMvr = new PuzzleMover();   // Mover object

function PuzzleProblem() { }

PuzzleProblem.prototype =
    new Problem(pName, pIntro, pInit, pGoal, pMvr);