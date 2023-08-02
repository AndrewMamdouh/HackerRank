/**
 * Calculates the ratios of positive, negative and zero values in the array
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} arr - The array of positives, negatives and zeros
 * @returns {[number, number, number]} The ratios of positives, negatives and zeros
 */
function plusMinus(arr) {
  const ratios = arr.reduce(
    (acc, cur) => {
      acc[cur > 0 ? 0 : cur < 0 ? 1 : 2]++;
      return acc;
    },
    [0, 0, 0]
  );
  return ratios.map((ratio) => parseFloat(ratio / arr.length).toFixed(6));
}

module.exports = plusMinus;
