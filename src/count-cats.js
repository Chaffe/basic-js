const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsArray = [];
  for (let secondArray of matrix) {
    for (let element of secondArray) {
      if (element === '^^') {
        catsArray.push(element);
      }
    }
  }
  return catsArray.length;
};
