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
        availableMoves = availableMoves.filter( (square) =>  this.filterPieces(board, square));
        availableMoves = availableMoves.filter((move) => !(board.getPiece(move) instanceof King))
        return availableMoves;
    }

}
