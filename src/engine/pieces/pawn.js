import Piece from './piece';
import Square from '../square';
import Player from '../player.js';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    whitePawnMovement(availableMoves, currentSquare){
        if (this.player === Player.WHITE){
            if (currentSquare.row === 1){
                availableMoves = this.addMove(availableMoves, currentSquare, 1, 0);
                availableMoves = this.addMove(availableMoves, currentSquare, 2, 0);
            }
            else if (currentSquare.row === 7){
                return availableMoves;
            }
            else {
                availableMoves = this.addMove(availableMoves, currentSquare, 1, 0);
            }

        }
        return availableMoves
    }

    blackPawnMovement(availableMoves, currentSquare){
        if (this.player === Player.BLACK){
            if (currentSquare.row === 6){
                availableMoves = this.addMove(availableMoves, currentSquare, -1, 0);
                availableMoves = this.addMove(availableMoves, currentSquare, -2, 0);
            }
            else if (currentSquare.row === 0){
                return availableMoves;
            }
            else {
                availableMoves = this.addMove(availableMoves, currentSquare, -1, 0);
            }

        }
        return availableMoves
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let currentSquare = board.findPiece(this);
        availableMoves = this.whitePawnMovement(availableMoves, currentSquare);
        availableMoves = this.blackPawnMovement(availableMoves, currentSquare);
        if (availableMoves.length > 0 && board.getPiece(availableMoves[0])){
            availableMoves = [];
        }
        else if (availableMoves.length === 2 && board.getPiece(availableMoves[1])){
            availableMoves = [availableMoves[0]];
        }
        return availableMoves;
    }


}
