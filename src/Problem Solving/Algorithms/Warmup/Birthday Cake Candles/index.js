/**
 * Counts the number of candles that are tallest
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} candles - The array of candle heights
 * @returns {number} The number of candles that are tallest
 */
function birthdayCakeCandles(candles) {
  const tallest = Math.max(...candles);
  return candles.reduce((acc, cur) => (cur === tallest ? acc + 1 : acc), 0);
}

module.exports = birthdayCakeCandles;
