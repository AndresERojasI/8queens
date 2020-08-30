/**
 * For this new version we will change the way we do things,
 * this time we will use a Backtracking and recursive approach
 * in order to try to find more possible solutions.
*/

import {
    createMatrix,
    printMatrix,
    isSolution
} from "./utils.js";

const chessBoardSize = 8;

const vectorAvailable = (matrix, x, y) => {
    if(matrix[x][y] === 1){
        return false;
    }

    // Check up vector
    if(x > 0){
        for(let up = x - 1; up >= 0; up--){
            if(matrix[up][y] === 1) {
                return false
            }
        }
    }

    // Check down vector
    if(x < (chessBoardSize - 1)){
        for(let down = x + 1; down < chessBoardSize; down++){
            if(matrix[down][y] === 1) {
                return false;
            }
        }
    }

    // Check left vector
    if(y > 0){
        for(let left = y - 1; left >= 0; left--){
            if(matrix[x][left] === 1) {
                return false;
            }
        }
    }

    // Check right vector
    if(y < (chessBoardSize - 1)){
        for(let right = y + 1; right < chessBoardSize; right++){
            if(matrix[x][right] === 1) {
                return false;
            }
        }
    }

    // Check the up-right vector
    if(y < (chessBoardSize - 1) && x < (chessBoardSize - 1)){
        for(let i = 0; (x - i >= 0) && (y + i < chessBoardSize); i++){
            if(matrix[x - i][y + i] === 1) {
                return false;
            }
        }
    }

    // Check the down-right vector
    if(x < (chessBoardSize - 1) & y < (chessBoardSize - 1)){
        for(let i = 0; (x + i < chessBoardSize) && (y + i < chessBoardSize); i++){
            if(matrix[x + i][y + i] === 1) {
                return false;
            }
        }
    }

    // Check the left-up vector
    if(x > 0 && y > 0){
        for(let i = 0; (x - i >= 0) && (y - i >= 0); i++){
            if(matrix[x - i][y - i] === 1) {
                return false;
            }
        }
    }

    // Check the left-down vector
    if(x < (chessBoardSize - 1) && y > 0){
        for(let i = 0; (x + i <= (chessBoardSize - 1)) && (y - i >= 0); i++){
            if(matrix[x + i][y - i] === 1) {
                return false;
            }
        }
    }

    return true;
}

let solutionCounter = 0;
const solve = (matrix, column) => {
    // Limit condition, after going through all the columns
    if(column === chessBoardSize){
        if(isSolution(matrix)){
            solutionCounter++;
            console.log(`Solution ${solutionCounter} found:`)
            printMatrix(matrix);
            console.log("---------------------------------------------");
        }
        return;
    }

    // Traversing through each row and start the Recursive call
    for(let i = 0; i < chessBoardSize; i++){
        if(vectorAvailable(matrix, i, column)){
            matrix[i][column] = 1; // Put a queen in place
            solve(matrix, column+1); // Find the next solution
            matrix[i][column] = 0; // Reset the previous solution
        }
    }
    return false;
}

let matrix = createMatrix(chessBoardSize);
//isSolution(matrix);
let startTime = new Date();
solve(matrix, 0);
let endTime = new Date();

console.log("it took " + (endTime - startTime) + " milliseconds to solve");

// test Valid Matrix
/**let testSolution = isSolution([[0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0]]);
console.log(testSolution);**/

/**
// Vector available tests
matrix = createMatrix(chessBoardSize);
vectorAvailable(matrix, 4, 4);
printMatrix(matrix);
console.log("---------------------------------------------");

// top left corner
matrix = createMatrix(chessBoardSize);
vectorAvailable(matrix, 0, 0);
printMatrix(matrix);
console.log("---------------------------------------------");

// bottom right corner
matrix = createMatrix(chessBoardSize);
vectorAvailable(matrix, 7, 7);
printMatrix(matrix);
console.log("---------------------------------------------");

// top right corner
matrix = createMatrix(chessBoardSize);
vectorAvailable(matrix, 0, 7);
printMatrix(matrix);
console.log("---------------------------------------------");

// bottom left
matrix = createMatrix(chessBoardSize);
vectorAvailable(matrix, 7, 0);
printMatrix(matrix);
console.log("---------------------------------------------");

// random spot
matrix = createMatrix(chessBoardSize);
vectorAvailable(matrix, 3, 0);
printMatrix(matrix);
console.log("---------------------------------------------");
 */
