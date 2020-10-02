const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) != '[object Date]') throw new Error('THROWN');

  let month = date.getMonth();
  if (month === 11 || month < 2) {
    return 'winter';
  } else if (month <= 4 && month >= 2) {
    return 'spring';
  } else if (month <= 7 && month >= 5) {
    return 'summer';
  } else if (month <= 10 && month >= 8) {
    return 'autumn'
  }
};
