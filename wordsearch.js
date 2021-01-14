const wordSearch = (letters, word) => {
    //horizontal
    let tf = false;
    letters.forEach((item) => {
        if (item.join("").includes(word)) {
            tf = true;
        }
    });
    //col
    transpose(letters).forEach((item) => {
        if (item.join("").includes(word)) {
            tf = true;
        }
    });
    //reverse horizontal
    letters.forEach((item) => {
        if (item.reverse().join("").includes(word)) {
            tf = true;
        }
    });
    //reverse col
    transpose(letters).forEach((item) => {
        if (item.reverse().join("").includes(word)) {
            tf = true;
        }
    });

    return tf;
};

const transpose = function (matrix) {
    let finalMatrix = [];
    if (matrix.length === 0) {
        return [];
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (!finalMatrix[col]) {
                finalMatrix[col] = [];
            }
            finalMatrix[col].push(matrix[row][col]);
        }
    }
    return finalMatrix;
};
module.exports = wordSearch;