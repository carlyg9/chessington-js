import Piece from './piece';
import Square from '../square';
import Player from '../player.js';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let currentLocation = board.findPiece(this);
        if (this.player === Player.WHITE){
            availableMoves.push(Square.at((currentLocation.row +1), currentLocation.col));
            return availableMoves;
        }
        else if (this.player === Player.BLACK){
            availableMoves.push(Square.at((currentLocation.row -1), currentLocation.col));
            return availableMoves;
        }
        else {
            console.log('Not a valid colour.');
        }
    }
}
