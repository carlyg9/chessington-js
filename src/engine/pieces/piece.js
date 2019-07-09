import Square from '../square.js'
//import King from './king.js'

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
        let currentSquare = board.findPiece(this);
        const numArray = [1,2,3,4,5,6];

        let i = 1;
        while (!board.getPiece(Square.at(currentSquare.row + i, currentSquare.col)) && numArray.includes(currentSquare.row + i) ) {
            availableMoves.push(Square.at(currentSquare.row + i, currentSquare.col));
            i++;   
        }
        let truthArray = [currentSquare.row + i < 8,  
            !board.getPiece(Square.at((currentSquare.row + i), currentSquare.col)) || !(board.getPiece(Square.at((currentSquare.row + i), currentSquare.col)).player=== this.player)];
        if (truthArray[0] && truthArray[1]){availableMoves.push(Square.at(currentSquare.row + i, currentSquare.col))};
            

        i = 1;
        while (!board.getPiece(Square.at(currentSquare.row - i, currentSquare.col)) && numArray.includes(currentSquare.row - i) ) {
            availableMoves.push(Square.at(currentSquare.row - i, currentSquare.col));
            i++;   
        }
        truthArray = [currentSquare.row - i > -1,  
            !board.getPiece(Square.at((currentSquare.row - i), currentSquare.col)) || !(board.getPiece(Square.at((currentSquare.row - i), currentSquare.col)).player === this.player)];
        if (truthArray[0] && truthArray[1]){availableMoves.push(Square.at(currentSquare.row - i, currentSquare.col))};


        i = 1;
        while (!board.getPiece(Square.at(currentSquare.row, currentSquare.col + i)) && numArray.includes(currentSquare.col + i) ) {
            availableMoves.push(Square.at(currentSquare.row, currentSquare.col + i));
            i++;   
        }
        truthArray = [currentSquare.col + i < 8,  
            !board.getPiece(Square.at(currentSquare.row, currentSquare.col + i)) || !(board.getPiece(Square.at(currentSquare.row, currentSquare.col + i)).player === this.player)];
        if (truthArray[0] && truthArray[1]){availableMoves.push(Square.at(currentSquare.row, currentSquare.col + i))};


        i = 1;
        while (!board.getPiece(Square.at(currentSquare.row, currentSquare.col - i)) && numArray.includes(currentSquare.col -i) ) {
            availableMoves.push(Square.at(currentSquare.row, currentSquare.col - i));
            i++;
        }
        truthArray = [currentSquare.col - i > -1,  
            !board.getPiece(Square.at(currentSquare.row, currentSquare.col - i)) || !(board.getPiece(Square.at(currentSquare.row, (currentSquare.col - i))).player === this.player)];
        if (truthArray[0] && truthArray[1]){availableMoves.push(Square.at(currentSquare.row, currentSquare.col - i))};

        return availableMoves;
    }

    addAllDiagonalMoves(board, availableMoves){
        let currentSquare = board.findPiece(this);
        const numArray = [1,2,3,4,5,6];
        let i = 1;
        while (!board.getPiece(Square.at(currentSquare.row + i, currentSquare.col + i)) && numArray.includes(currentSquare.row + i) && numArray.includes(currentSquare.col + i)) {
            availableMoves.push(Square.at(currentSquare.row + i, currentSquare.col + i));
            i++;   
        }
        let truthArray = [currentSquare.row + i < 8 && currentSquare.col + i < 8,  
            !board.getPiece(Square.at((currentSquare.row + i), currentSquare.col + i)) || !(board.getPiece(Square.at((currentSquare.row + i), currentSquare.col + i)).player=== this.player)];
        if (truthArray[0] && truthArray[1]){availableMoves.push(Square.at(currentSquare.row + i, currentSquare.col + i))};


        i = 1;
        while (!board.getPiece(Square.at(currentSquare.row + i, currentSquare.col - i)) && numArray.includes(currentSquare.row + i) && numArray.includes(currentSquare.col - i)) {
            availableMoves.push(Square.at(currentSquare.row + i, currentSquare.col - i));
            i++;   
        }
        truthArray = [currentSquare.row + i < 8 && currentSquare.col - i > -1,  
            !board.getPiece(Square.at((currentSquare.row + i), currentSquare.col - i)) || !(board.getPiece(Square.at((currentSquare.row + i), currentSquare.col - i)).player=== this.player)];
        if (truthArray[0] && truthArray[1]){availableMoves.push(Square.at(currentSquare.row + i, currentSquare.col - i))};
        
        
        i= 1;
        while (!board.getPiece(Square.at(currentSquare.row - i, currentSquare.col - i)) && numArray.includes(currentSquare.row - i) && numArray.includes(currentSquare.col - i)) {
            availableMoves.push(Square.at(currentSquare.row - i, currentSquare.col - i));
            i++;   
        }
        truthArray = [currentSquare.row - i > -1 && currentSquare.col - i > -1,  
            !board.getPiece(Square.at((currentSquare.row - i), currentSquare.col - i)) || !(board.getPiece(Square.at((currentSquare.row - i), currentSquare.col - i)).player=== this.player)];
        if (truthArray[0] && truthArray[1]){availableMoves.push(Square.at(currentSquare.row - i, currentSquare.col - i))};
        
        
        i = 1;
        while (!board.getPiece(Square.at(currentSquare.row - i, currentSquare.col + i)) && numArray.includes(currentSquare.row - i) && numArray.includes(currentSquare.col + i)) {
            availableMoves.push(Square.at(currentSquare.row - i, currentSquare.col + i));
            i++;   
        }
        truthArray = [currentSquare.row - i > -1 && currentSquare.col + i < 8,  
            !board.getPiece(Square.at((currentSquare.row - i), currentSquare.col + i)) || !(board.getPiece(Square.at((currentSquare.row - i), currentSquare.col + i)).player=== this.player)];
        if (truthArray[0] && truthArray[1]){availableMoves.push(Square.at(currentSquare.row - i, currentSquare.col + i))};
        return availableMoves;
    }

    
}


