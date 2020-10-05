const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainLinks: [],

  getLength() {
    return this.chainLinks.length;  
  },

  addLink(value) {
    this.chainLinks.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (position < 1 || position > position.length || typeof(position) !== 'number') {
      this.chainLinks.length = 0;
      throw new Error('THROWN');
    } 
    this.chainLinks.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chainLinks.reverse();
    return this;
  },

  finishChain() {
    let result = this.chainLinks.join('~~');
    this.chainLinks = [];
    return result;
  }
};

module.exports = chainMaker;
