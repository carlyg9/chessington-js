import Square from '../square.js'

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    availableMovesPusher(availableMoves, currentSquare, rowMove, colMove){
        availableMoves.push(Square.at((currentSquare.row + rowMove), (currentSquare.col + colMove)));
        return availableMoves
    }
}
