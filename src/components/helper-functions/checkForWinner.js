export default function checkForWinner (board, shape) {
    const target = shape.repeat(3);

    switch(target) {
        case `${board[0][0]}${board[0][1]}${board[0][2]}`: //vertical
            return true;

        case `${board[1][0]}${board[1][1]}${board[1][2]}`: //vertical
            return true;

        case `${board[2][0]}${board[2][1]}${board[2][2]}`: //vertical
            return true;

        case `${board[0][0]}${board[1][0]}${board[2][0]}`: //horizontal
            return true;

        case `${board[0][1]}${board[1][1]}${board[2][1]}`: //horizontal
            return true;

        case `${board[0][2]}${board[1][2]}${board[2][2]}`: //horizontal
            return true;
            
        case `${board[0][0]}${board[1][1]}${board[2][2]}`: //diagonal
            return true;

        case `${board[0][2]}${board[1][1]}${board[2][0]}`: //diagonal
            return true;

        default:
            return false;
    }
}