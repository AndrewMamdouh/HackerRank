/**
 * Determine how many ways chocolate bar can be divided such that:
 * 1. The length of the segment matches Ron's birth month.
 * 2. The sum of the integers on the squares is equal to his birth day.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} s - The numbers on each of the squares of chocolate
 * @param {number} d - Ron's birth day
 * @param {number} m - Ron's birth month
 * @returns {number} The number of ways the chocolate bar can be divided
 */
function birthday(s, d, m) {
  let sum,
    count = 0;
  for (let i = 0; i <= s.length - m; i++) {
    sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if (sum === d) count++;
  }
  return count;
}

module.exports = birthday;
