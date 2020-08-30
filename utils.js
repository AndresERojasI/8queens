export const createMatrix = size => {
    const matrix = new Array(size);

    for (let i = 0; i < size; i++) {
        matrix[i] = new Array(8).fill(0);
    }

    return matrix;
}

export const printMatrix = matrix => {
    matrix.forEach(columns => {
        columns.forEach(row => {
            if(row === 1) {
                process.stdout.write("  Q  ");
            } else if(row === -1){
                process.stdout.write(` -1 `);
            } else{
                process.stdout.write(`  X  `);
            }
        });
        process.stdout.write("\n");
    });
}

export const isSolution = matrix => {
    const matrixSize = matrix[0].length;
    // Check down & right vectors
    for(let i = 0; i < matrixSize; i++) {
        let queensPerRow = 0;
        let queensPerCol = 0;
        for(let j = 0; j < matrixSize; j++){
            if(matrix[i][j] == 1){
                queensPerRow++;
            }

            if(matrix[j][i] == 1){
                queensPerCol++;
            }
        }
    
        if(queensPerRow > 1 || queensPerCol > 1){
            return false;
        }
    }

    let x = 1;
    let z = matrixSize - 1;

    const totalDiagonals = (matrixSize * 2) -1;
    for(let i = 0; i < totalDiagonals; i++) {
        let queensPerUpDiagonal = 0;
        let queensPerUpDiagonal_2 = 0;
        let queensPerDownDiagonal = 0;
        let queensPerDownDiagonal_2 = 0;
        let startPointDiag_1 = matrixSize - 1;
        let startPointDiag_2 = 0;
        let y = x;
        let w = z;
        let k = matrixSize - 1;
        for(let j = matrixSize - i - 1; j >= 0; j--) {
            // Down Up left Diagonal
            //matrix[j][startPointDiag_1] = -1; // Uncomment this to see what it is transforming
            if(matrix[j][startPointDiag_1] === 1) {
                queensPerDownDiagonal++;
            }

            if((w - 1) >= 0){
                //matrix[k][w - 1] = -1; // Uncomment this to see what it is transforming
                if(matrix[k][w - 1] === 1){
                    queensPerUpDiagonal_2++;
                }
            }

            // Down Up Right Diagonal
            //matrix[startPointDiag_2][j] = -1; // Uncomment this to see what it is transforming
            if(matrix[startPointDiag_2][j] === 1) {
                queensPerUpDiagonal++;
            }

            if(y < 8){
                //matrix[startPointDiag_1][y] = -1; // Uncomment this to see what it is transforming
                if(matrix[startPointDiag_1][y] === 1){
                    queensPerDownDiagonal_2++;
                }
            }


            k--;
            startPointDiag_1--;
            startPointDiag_2 ++;
            y++;
            w--;
        }
        x++;
        z--;

        if(queensPerDownDiagonal > 1 || queensPerUpDiagonal > 1 || queensPerDownDiagonal_2 > 1 || queensPerUpDiagonal_2 > 1) {
            return false;
        }
    }
    return true;
}
