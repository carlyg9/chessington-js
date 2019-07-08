import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let currentSquare = board.findPiece(this);
        let i = 1;
        while (currentSquare.row + i < 8 && currentSquare.col + i < 8){
            availableMoves = this.addMove(availableMoves, currentSquare, i, i);
            i++;
        }
        i = 1;
        while (currentSquare.row + i < 8 && currentSquare.col - i > -1){
            availableMoves = this.addMove(availableMoves, currentSquare, i, -i);
            i++;
            // console.log(i)
        }
        i = 1;
        while (currentSquare.row - i > -1 && currentSquare.col - i > -1){
            availableMoves = this.addMove(availableMoves, currentSquare, -i, -i);
            i++;
            console.log(i)
        }
        i = 1;
        while (currentSquare.row - i > -1 && currentSquare.col + i < 8){
            availableMoves = this.addMove(availableMoves, currentSquare, -i, i);
            i++;
        }
        return availableMoves;
    }
}
