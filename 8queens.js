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
    if(x < 7){
        for(let down = x + 1; down < 8; down++){
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
    if(y < 7){
        for(let right = y + 1; right < 8; right++){
            matrix[x][right] = -1;
        }
    }

    // Disable the up-right vector
    if(y < 7 && x < 7){
        for(let i = 0; (x - i > 0) && (y + i < 8); i++){
            matrix[x - i][y + i] = -1;
        }
    }

    // Disable the down-right vector
    if(x < 7 & y < 7){
        for(let i = 0; (x + i < 8) && (y + i < 8); i++){
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
    if(x < 7 && y > 0){
        for(let i = 0; (x + i > 0) && (y - i > 0); i++){
            matrix[x + i][y - i] = -1;
        }
    }    
    
}


// Initial tests to try out the vector disabling
matrix[4][4] = 1;
disableVectors(4, 4);
printMatrix(matrix);
