import Piece from './piece';
import King from './king';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        availableMoves = this.addAllDiagonalMoves(board, availableMoves);
        availableMoves = availableMoves.filter((move) => !(board.getPiece(move) instanceof King));
        return availableMoves;
    }
}
