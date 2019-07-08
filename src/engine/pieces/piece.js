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

    addMove(availableMoves, currentSquare, rowMove, colMove){
        availableMoves.push(Square.at((currentSquare.row + rowMove), (currentSquare.col + colMove)));
        return availableMoves
    }

    addAllLateralMoves(board, availableMoves){
        let currentLocation = board.findPiece(this);
        for (let i= 0; i<8; i++){
            availableMoves.push(Square.at(currentLocation.row, i));
            availableMoves.push(Square.at(i, currentLocation.col));
        }
        availableMoves = availableMoves.filter( (square) => !square.equals(currentLocation));
        return availableMoves;
    }

    addAllDiagonalMoves(board, availableMoves){
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
        }
        i = 1;
        while (currentSquare.row - i > -1 && currentSquare.col - i > -1){
            availableMoves = this.addMove(availableMoves, currentSquare, -i, -i);
            i++;
        }
        i = 1;
        while (currentSquare.row - i > -1 && currentSquare.col + i < 8){
            availableMoves = this.addMove(availableMoves, currentSquare, -i, i);
            i++;
        }
        return availableMoves;
    }
}
