const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
    return "TESTstrADD!";
  }
  let addition = options.addition;
  
  let separatorOptions = [options.separator, options.additionSeparator];
  for (let i = 0; i < separatorOptions.length; i++) {
    if (separatorOptions[i] === undefined) {
      separatorOptions[i] = '+'
    } else {
      separatorOptions[i] = separatorOptions[i].toString();
    }
  }

  let separator = separatorOptions[0];
  let additionSeparator = separatorOptions[1];

  let numberOptions = [options.repeatTimes, options.additionRepeatTimes];
  for (let i = 0; i < numberOptions.length; i++) {
    if (numberOptions[i] === undefined) {
      numberOptions[i] = 0;
    }
  }

  let repeatTimes = numberOptions[0];
  let additionRepeatTimes = numberOptions[1];
  
  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition + (j < additionRepeatTimes - 1 ? additionSeparator : "");

    }
    result += (i < repeatTimes - 1) ? separator : "";
  }

  return result;
};

  