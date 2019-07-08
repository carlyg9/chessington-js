import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let currentSquare = board.findPiece(this);
        const arrayPlusMinus = [1, -1, 0];
        for (let i of arrayPlusMinus){
            for (let j of arrayPlusMinus){
                availableMoves = this.addMove(availableMoves, currentSquare, i, j);
            }
        }
        availableMoves = availableMoves.filter( (square) => !square.equals(currentSquare));
        let coordArray = [];
        for (let i = 0; i<8; i++){
            for (let j = 0; j<8; j++){
                coordArray.push([i,j]);
            }
        }
        availableMoves = availableMoves.filter( (square) => Math.max(square.row, square.col) <8 && Math.min(square.row, square.col)>-1)
        return availableMoves;
    }
}
