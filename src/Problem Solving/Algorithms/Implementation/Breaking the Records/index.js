/**
 * Counts how many times records are broken
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} scores - The points scored per game
 * @returns {[number, number]} The array contains the numbers representing the times records have been broken
 */
function breakingRecords(scores) {
  const minMax = Array(2).fill(scores[0]);
  return scores.reduce(
    (acc, cur) => {
      if (cur > minMax[1]) {
        minMax[1] = cur;
        acc[0]++;
      } else if (cur < minMax[0]) {
        minMax[0] = cur;
        acc[1]++;
      }
      return acc;
    },
    [0, 0]
  );
}

module.exports = breakingRecords;
