import Piece from './piece';
import Square from '../square.js'

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        availableMoves = this.addAllDiagonalMoves(board, availableMoves);
        availableMoves = this.addAllLateralMoves(board, availableMoves);
        return availableMoves;
    }
}
