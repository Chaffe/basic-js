const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1, counters = []) {
    counters.push(counter);
    
    for (let element of arr) {
      if (Array.isArray(element)) {
        this.calculateDepth(element, counter + 1, counters)
      }
    }

    return Math.max(...counters);
  }
};