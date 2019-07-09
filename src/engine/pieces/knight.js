import Piece from './piece';
import King from './king.js'

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }



    getAvailableMoves(board) {
        let availableMoves = [];
        let currentSquare = board.findPiece(this);
        const arrayPlusMinus = [1, -1];
        for (let i of arrayPlusMinus){
            for (let j of arrayPlusMinus){
                availableMoves = this.addMove(availableMoves, currentSquare, i*1, j*2);
                availableMoves = this.addMove(availableMoves, currentSquare, i*2, j*1);
            }
        }
        availableMoves = availableMoves.filter( (square) => Math.max(square.row, square.col) <8 && Math.min(square.row, square.col)>-1)
        availableMoves = availableMoves.filter( (square) => {
            const possiblePiece = board.getPiece(square);
            if (!possiblePiece){
                return true
            }
            else if (possiblePiece instanceof King){
                return false
            }
            else if (!(possiblePiece.player === this.player)){
                return true
            }
            else {
                return false
            }
        })
        return availableMoves;
    }

}
