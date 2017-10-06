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
                availableMoves = this.addMove(availableMoves, currentSquare, 1, 0);
                availableMoves = this.addMove(availableMoves, currentSquare, 2, 0);
            }
            else {
                availableMoves = this.addMove(availableMoves, currentSquare, 1, 0);
            }

        }
        else if (this.player === Player.BLACK){
            if (currentSquare.row === 6){
                availableMoves = this.addMove(availableMoves, currentSquare, -1, 0);
                availableMoves = this.addMove(availableMoves, currentSquare, -2, 0);
            }
            else {
                availableMoves = this.addMove(availableMoves, currentSquare, -1, 0);
            }
        }
        if (board.getPiece(availableMoves[0])){
            availableMoves = [];
        }
        else if (availableMoves.length === 2 && board.getPiece(availableMoves[1])){
            availableMoves = availableMoves[0];
        }
        return availableMoves;
    }
}
