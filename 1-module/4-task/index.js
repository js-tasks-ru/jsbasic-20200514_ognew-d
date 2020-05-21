/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strSpamCheck = str.toLowerCase();

  if (strSpamCheck.indexOf(`1xbet`) != -1 || strSpamCheck.indexOf(`xxx`) != -1) {
    return true; 
  } else {
    return false;
  }
}