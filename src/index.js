
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) return [];
    let out = [];
    for (let i=0; i < matrix.length; i++) {
        let jLength = matrix[i].length || 0;
        for (let j=0; j<jLength; j++) {
            if (i % 2 == 0) {out.push(matrix[i][j])}
            else {out.push(matrix[i][jLength-j-1])}
        }
    }
    return out;
}
