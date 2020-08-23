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
