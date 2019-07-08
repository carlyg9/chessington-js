import Piece from './piece';
import Square from '../square';
import Player from '../player.js';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let currentSquare = board.findPiece(this);
        if (this.player === Player.WHITE){
            if (currentSquare.row === 1){
                availableMoves = this.availableMovesPusher(availableMoves, currentSquare, 1, 0);
                availableMoves = this.availableMovesPusher(availableMoves, currentSquare, 2, 0);
                return availableMoves;
            }
            else {
                availableMoves = this.availableMovesPusher(availableMoves, currentSquare, 1, 0);
                return availableMoves;
            }

        }
        else if (this.player === Player.BLACK){
            if (currentSquare.row === 6){
                availableMoves = this.availableMovesPusher(availableMoves, currentSquare, -1, 0);
                availableMoves = this.availableMovesPusher(availableMoves, currentSquare, -2, 0);
                return availableMoves;
            }
            else {
                availableMoves = this.availableMovesPusher(availableMoves, currentSquare, -1, 0);
                return availableMoves;
            }

        }
        else {
            console.log('Not a valid colour.');
        }
    }
}
