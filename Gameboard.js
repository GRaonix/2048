// initializing 4*4x board
export const getEmptyBoard = () => [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
//check if the board is full
const hasValue = (board, value) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === value) {
                return true;
            }
        }
    }
    return false;
};

export const isFull = (board) => {
    return !hasValue(board, 0);
};
//assign random values to empty cells.
const getRandomPosition = () => {
    const rowPosition = Math.floor(Math.random() * 4);
    const colPosition = Math.floor(Math.random() * 4);
    return [rowPosition, colPosition];
};

export const generateRandom = (board) => {
    if (isFull(board)) {
        return board;
    }
    let [row, col] = getRandomPosition();
    while (board[row][col] !== 0){
        [row, col] = getRandomPosition();
    }

    board[row][col] = 2;
    return board;
};
//move the board to the left
const compress = (board) => {
    const newBoard = getEmptyBoard();
    for (let i = 0; i < board.length; i++) {
        let colIndex = 0;
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== 0) {
                newBoard[i][colIndex] = board[i][j];
                colIndex++;
            }
        }
    }
    return newBoard;
};

const merge = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            if (board[i][j] !== 0 && board[i][j] === board[i][j + 1]) {
                board[i][j] = board[i][j] *2;
                board[i][j + 1] = 0;
            }
        }
    }
    return board;
}

 export const moveLeft = (board) => {
     const newBoard1 = compress(board);
     const newBoard2 = merge(newBoard1);
     return compress(newBoard2);
 };