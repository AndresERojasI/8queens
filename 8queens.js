const createMatrix = size => {
    const matrix = new Array(size);

    for (let i = 0; i < size; i++) {
        matrix[i] = new Array(8).fill(0);
    }

    return matrix;
}

const matrix = createMatrix(8);

const printMatrix = matrix => {
    matrix.forEach(columns => {
        columns.forEach(row => {
            if(row === 1) {
                process.stdout.write(" Q ");
            } else if(row === -1){
                process.stdout.write(` -1 `);
            } else{
                process.stdout.write(` X `);
            }
            
        });

        process.stdout.write("\n");
    });
}

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

    
}


matrix[4][4] = 1;
disableVectors(4, 4);
printMatrix(matrix);
