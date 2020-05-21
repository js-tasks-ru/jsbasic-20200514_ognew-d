/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;

  if (n == 1 || n == 0) {
    result = 1;
    return result;
  }

  while (n != 1) {
    result = result * n;  
    n--;
  }
  console.log(result);
  return result;
}


