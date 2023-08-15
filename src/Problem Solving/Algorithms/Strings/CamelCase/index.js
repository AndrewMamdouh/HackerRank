/**
 * Counts the words inside a camelcase string
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {string} s - The string to analyze
 * @returns {number} The number of words in the string
 */
function camelcase(s) {
  return s.split(/(?=[A-Z])/).length;
}

module.exports = camelcase;
