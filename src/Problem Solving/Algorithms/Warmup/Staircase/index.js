/**
 * Generates a staircase using # symbols and spaces.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The size of the staircase.
 * @returns {string} The staircase using # symbols and spaces.
 */
function staircase(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += `${" ".repeat(n - i)}${"#".repeat(i)}\n`;
  }
  return str;
}

module.exports = staircase;
