const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = matrix.map((e) => e.map((i) => i? -1: 0 ));
  result = result.map((e, i) => e.map((el, j) => { 
    if (el === -1) return el;
    let counter = 0;

    if ((i - 1 >= 0) && (result[i - 1][j] === -1)) counter += 1;
    if ((i + 1 < result.length) && (result[i + 1][j] === -1)) counter += 1;
    if ((j - 1 >= 0) && (result[i][j - 1] === -1)) counter += 1;
    if ((j + 1 < result[i].length) && (result[i][j + 1] === -1)) counter += 1;

    if ((i - 1 >= 0) && (j - 1 >= 0) && (result[i - 1][j - 1] === -1)) counter += 1;
    if ((i - 1 >= 0) && (j + 1 < result[i].length) && (result[i - 1][j + 1] === -1)) counter += 1;
    if ((i + 1 < result.length) && (j - 1 >= 0) && (result[i + 1][j - 1] === -1)) counter += 1;
    if ((i + 1 < result.length) && (j + 1 < result[i].length) && (result[i + 1][j + 1] === -1)) counter += 1;

    return counter;
  }));
  return result.map((e) => e.map((i) => i === -1? 1: i  ));
}


module.exports = {
  minesweeper
};
