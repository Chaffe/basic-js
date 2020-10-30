const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addition = options.addition;
  // if (typeof(addition) == 'undefined') {
  //   addition = '';
  // } else if (typeof(addition) != 'string') {
  //   addition = addition.toString();
  // }
  
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
    // let array = [];
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition + (j < additionRepeatTimes - 1 ? additionSeparator : "");

    }
    result += (i < repeatTimes - 1) ? separator : "";
  }

  return result;

  // if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
  //   return "TESTstrADD!";
  // }

  // options = {
  //   repeatTimes: options.repeatTimes || 0,
  //   separator: options.separator || "+",
  //   addition: options.addition + "" || "",
  //   additionRepeatTimes: options.additionRepeatTimes || 0,
  //   additionSeparator: options.additionSeparator || "|",
  // }
  // let result = "";

  // for (let i = 0; i < options.repeatTimes; i++) {
  //   result += str;
  //   for (let j = 0;  j < options.additionRepeatTimes; j++) {
  //     result += options.addition + (j < options.additionRepeatTimes - 1 ? options.additionSeparator : "");
  //   }
  //   result += (i < options.repeatTimes - 1) ? options.separator : "";
  // }

  // return result;
};
  // for (let option in options) {
    

  //   switch (option) {
  //     case 'repeatTimes':
  //       str = str.repeat(option.repeatTimes);
  //       break;

  //     case 'separator':
  //       for (let i = 0; i < result.length; i++) {
  //         if (result[i].endsWith(str[length - 1])) {
  //           res
  //         }
  //       }
  //       break;

  //     case 'addition':
  //       str.repeat(option.repeatTimes);
  //       break;

  //     case 'additionRepeatTime':
  //       str.repeat(option.repeatTimes);
  //       break;

  //     case 'additionSeparator':
  //       str.repeat(option.repeatTimes);
  //       break;

  //     default:
  //       option.separator = '+';
  //       option.additionSeparator = '|'
  //       break;
  //   }
  // }
  // return str;
// };
  