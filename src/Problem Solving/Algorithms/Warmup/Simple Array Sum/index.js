/**
 * Calculates sum of an array
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} arr - The numbers array to be summed
 * @returns {number} The sum
 */
function simpleArraySum(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

module.exports = simpleArraySum;
