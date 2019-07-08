import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let currentLocation = board.findPiece(this);
        for (let i= 0; i<8; i++){
            availableMoves.push(Square.at(currentLocation.row, i));
            availableMoves.push(Square.at(i, currentLocation.col));
        }
        availableMoves = availableMoves.filter( (square) => !square.equals(currentLocation));
        return availableMoves;
    }
}
