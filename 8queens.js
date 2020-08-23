/**
 * This is a very naive method, as we only start from the position (0,0)
 * of the board, and from there the algorithm can only find 5 places to
 * place a Queen, no matter where you start the two loops, wit will not
 * find more than 5 Possible Places.
 * 
 * Let's try it:
*/

import {
    createMatrix,
    printMatrix
} from "./utils.js";

const chessBoardSize = 8;
const matrix = createMatrix(chessBoardSize);

const disableVectors = (x, y) => {
    // Disable up vector
    if(x > 0){
        for(let up = x - 1; up >= 0; up--){
            matrix[up][y] = -1;
        }
    }

    // Disable down vector
    if(x < (chessBoardSize - 1)){
        for(let down = x + 1; down < chessBoardSize; down++){
            matrix[down][y] = -1;
        }
    }

    // Disable left vector
    if(y > 0){
        for(let left = y - 1; left >= 0; left--){
            matrix[x][left] = -1;
        }
    }

    // Disable right vector
    if(y < (chessBoardSize - 1)){
        for(let right = y + 1; right < chessBoardSize; right++){
            matrix[x][right] = -1;
        }
    }

    // Disable the up-right vector
    if(y < (chessBoardSize - 1) && x < (chessBoardSize - 1)){
        for(let i = 0; (x - i > 0) && (y + i < chessBoardSize); i++){
            matrix[x - i][y + i] = -1;
        }
    }

    // Disable the down-right vector
    if(x < (chessBoardSize - 1) & y < (chessBoardSize - 1)){
        for(let i = 0; (x + i < chessBoardSize) && (y + i < chessBoardSize); i++){
            matrix[x + i][y + i] = -1;
        }
    }

    // Disable the left-up vector
    if(x > 0 && y > 0){
        for(let i = 0; (x - i > 0) && (y - i > 0); i++){
            matrix[x - i][y - i] = -1;
        }
    }

    // Disable the left-down vector
    if(x < (chessBoardSize - 1) && y > 0){
        for(let i = 0; (x + i < 7) && (y - i > 0); i++){
            matrix[x + i][y - i] = -1;
        }
    }
    
}


// Initial tests to try out the vector disabling
/**
//Random spot
disableVectors(4, 4);
printMatrix(matrix);

// top left corner
disableVectors(0, 0);
printMatrix(matrix);

// bottom right corner
disableVectors(7, 7);
printMatrix(matrix);

// top right corner
disableVectors(0, 7);
printMatrix(matrix);

// bottom left
disableVectors(7, 0);
printMatrix(matrix);

// random spot
disableVectors(3, 0);
printMatrix(matrix);
**/

/** Now what we will do is try to find the next available position
** in order to find a spot for the next queen.
** the stop condition is:
** - 8 Queens are placed in the board
**/

// Count to keep track of the placed Queens
let placedQueens = 0;

// Here you can manually change the values of i and j
// to start in a different position
for (let i = 0; i < chessBoardSize; i++) {
    for (let j = 0; j < chessBoardSize; j++){
        if(placedQueens == 8){
            break;
        }

        if(matrix[i][j] !== 0){
            continue;
        }

        matrix[i][j] = 1;
        console.log("Placed queen at: ", i, j)
        placedQueens++;
        disableVectors(i, j);
    }

    if(placedQueens == 8){
        console.log("Found possible solution");
        printMatrix(matrix);
        break;
    }
}

console.log("Total Placed Queens", placedQueens);
