/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function PuzzleState(tiles) {

    this.tiles = tiles;

    this.toString = function () {
        var builder = "";

        for (row = 0; row < 3; row++) {
            builder += "+---+---+---+";
            builder += "\n";
            builder += "|";
            for (col = 0; col < 3; col++) {
                if (this.tiles[row][col] === 0) {
                    builder += "   ";
                } else {
                    builder += (" " + this.tiles[row][col] + " ");
                }
                builder += "|";
            }
            builder += "\n";
        }
        builder += "+---+---+---+";

        return builder;
    };

    this.equals = function (other) {
        if (other === null)
            return false;

        for (row = 0; row < 3; row++) {
            for (col = 0; col < 3; col++) {
                if (this.tiles[row][col] !== other.tiles[row][col])
                    return false;
            }
        }
        return true;
    };

    // Other properties and methods here
    this.getLocation = function (location) {
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                if (this.tiles[row][col] === location) {
                    return {row: row, column: col};
                }
            }
        }
    };
    
    this.swap = function(tile, blank) {
    var copy = this.tiles.slice();   // copies the array's top level
    copy[0] = this.tiles[0].slice(); // copies the array's first row
    copy[1] = this.tiles[1].slice(); // etc.
    copy[2] = this.tiles[2].slice();
    
    var tileRow = tile.row;
    var tileCol = tile.column;
    var blankRow = blank.row;
    var blankCol = blank.column;
    
    var currTile = copy[tileRow][tileCol];
    copy[tileRow][tileCol] = copy[blankRow][blankCol];
    copy[blankRow][blankCol] = currTile;
    
    var newState = new PuzzleState(copy);
    
    return newState;
};

    this.makeCanvas = function () {
        return this.makeDefaultCanvas(this);
    };
}

PuzzleState.prototype = STATE_PROTO;

