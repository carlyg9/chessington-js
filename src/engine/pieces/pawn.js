import Piece from './piece';
import Square from '../square';
import Player from '../player.js';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    whitePawnMovement(board, availableMoves, currentSquare){
        if (currentSquare.row === 1){
            availableMoves = this.addMove(availableMoves, currentSquare, 1, 0);
            availableMoves = this.addMove(availableMoves, currentSquare, 2, 0);
        }
        else if (currentSquare.row === 7){
            return availableMoves;
        }
        else {
            availableMoves = this.addMove(availableMoves, currentSquare, 1, 0);
        }

        if (availableMoves.length > 0 && board.getPiece(availableMoves[0])){
            availableMoves = [];
        }
        else if (availableMoves.length === 2 && board.getPiece(availableMoves[1])){
            availableMoves = [availableMoves[0]];
        }
        let NorthEast = Square.at(currentSquare.row +1, currentSquare.col +1);
        if (!!board.getPiece(NorthEast) && !(board.getPiece(NorthEast).player === this.player) && ! (board.getPiece(NorthEast) instanceof King)) {
            availableMoves.push(NorthEast);
        }
        let NorthWest = Square.at(currentSquare.row +1, currentSquare.col -1);
        if (!!board.getPiece(NorthWest) && !(board.getPiece(NorthWest).player === this.player) && ! (board.getPiece(NorthWest) instanceof King)) {
            availableMoves.push(NorthWest);
        }
        return availableMoves
    }

    blackPawnMovement(board, availableMoves, currentSquare){
        if (currentSquare.row === 6){
            availableMoves = this.addMove(availableMoves, currentSquare, -1, 0);
            availableMoves = this.addMove(availableMoves, currentSquare, -2, 0);
        }
        else if (currentSquare.row === 0){
            return availableMoves;
        }
        else {
            availableMoves = this.addMove(availableMoves, currentSquare, -1, 0);
        }

        if (availableMoves.length > 0 && board.getPiece(availableMoves[0])){
            availableMoves = [];
        }
        else if (availableMoves.length === 2 && board.getPiece(availableMoves[1])){
            availableMoves = [availableMoves[0]];
        }

        let SouthEast = Square.at(currentSquare.row -1, currentSquare.col +1);
        if (!!board.getPiece(SouthEast) && !(board.getPiece(SouthEast).player === this.player) && ! (board.getPiece(SouthEast) instanceof King)) {
            availableMoves.push(SouthEast);
        }
        let SouthWest = Square.at(currentSquare.row -1, currentSquare.col -1);
        if (!!board.getPiece(SouthWest) && !(board.getPiece(SouthWest).player === this.player) && ! (board.getPiece(SouthWest) instanceof King)) {
            availableMoves.push(SouthWest);
        }

        return availableMoves
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let currentSquare = board.findPiece(this);
        if (this.player === Player.WHITE){
            availableMoves = this.whitePawnMovement(board, availableMoves, currentSquare);
        }
        else if (this.player === Player.BLACK){
            availableMoves = this.blackPawnMovement(board, availableMoves, currentSquare);
        }
        return availableMoves;
    }


}
