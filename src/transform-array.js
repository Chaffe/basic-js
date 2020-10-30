const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (Array.isArray(arr) === false) throw new Error;
  if (arr.length === 0) return arr;
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev') {
          i += 2;
        } else i++
        break;

      case '--discard-prev':
        if (i > 0) {
          newArray.pop();
        }
        break;
        
      case '--double-next':
        if (i < arr.length - 1) {
          newArray.push(arr[i + 1]);
        }
        break;
        
      case '--double-prev':
        if (i > 0) {
          newArray.push(arr[i - 1])
        };
        break;

      default:
        newArray.push(arr[i]);
        break;
    }
  }
  return newArray;
};
