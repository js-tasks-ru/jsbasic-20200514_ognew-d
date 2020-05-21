/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let newStr = str.charAt(0).toUpperCase() + str.slice(1);
  if (!str) {
    return str;
  }
  else {
    return newStr;
  }
}
