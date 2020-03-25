
let board = [
    [".", "8", "7", "6", "5", "4", "3", "2", "1"],
    ["2", ".", ".", ".", ".", ".", ".", ".", "."],
    ["3", ".", ".", ".", ".", ".", ".", ".", "."],
    ["4", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", ".", "."],
    ["6", ".", ".", ".", ".", ".", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    ["8", ".", ".", ".", ".", ".", ".", ".", "."],
    ["9", ".", ".", ".", ".", ".", ".", ".", "."]
]

const isValidSudoku = (board) => {

    let row = 0;
    let column = 0;
    let result = true;
    let boardValidator = [];

    // verify square 
    for(let i = 1; i <= 9; i++) {
        for(let j = row; j < row +3; j++) {
            for(let k = column; k < column +3;  k++) {
                if(boardValidator.includes(board[j][k])) {
                    //console.log(board[j][k] + " found in validator " + j + " "+ k);
                    result = false;
                    break;
                } else if (board[j][k] !== ".") {
                    //console.log(board[j][k] + " at " + j + " " + k);
                    boardValidator.push(board[j][k]);
                  
                }
            }

            if(result == false) {
                break;
            }
        }
               if (i % 3 === 0 && i !== 0) {
                   row += 3;
                   column = 0;
               } else {
                   column += 3
               }

               if (result == false) {
                   break;
               }

               boardValidator = [];
    }

    if(result == false) {
        return result;
    }

    // verfiy row 
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if (boardValidator.includes(board[i][j])) {
                //console.log(board[j][k] + " found in validator " + j + " "+ k);
                result = false;
                break;
            } else if (board[i][j] !== ".") {
                //console.log(board[j][k] + " at " + j + " " + k);
                boardValidator.push(board[i][j]);

            }
        }

        if(result == false) {
            break;
        }
        boardValidator = [];
    }

    if(result == false) {
        return result;
    }

    // verify column
      for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
              if (boardValidator.includes(board[j][i])) {
                  //console.log(board[j][k] + " found in validator " + j + " "+ k);
                  result = false;
                  break;
              } else if (board[j][i] !== ".") {
                  //console.log(board[j][k] + " at " + j + " " + k);
                  boardValidator.push(board[j][i]);

              }
          }

          if (result == false) {
              break;
          }
          boardValidator = [];
      }

    return result;
}

console.log(isValidSudoku(board));
