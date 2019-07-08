import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        availableMoves = this.addAllDiagonalMoves(board, availableMoves);
        return availableMoves
    }
}
