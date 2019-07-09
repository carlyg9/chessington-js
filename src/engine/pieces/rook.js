import Piece from './piece';
import Square from '../square';
import King from './king'

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        availableMoves = this.addAllLateralMoves(board, availableMoves);
        availableMoves = availableMoves.filter((move) => !(board.getPiece(move) instanceof King))
        return availableMoves
    }
}
