/**
 * Counts the words inside a camelcase string
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {string} s - The string to analyze
 * @returns {number} The number of words in the string
 */
const camelcase = (s: string): number => s.split(/(?=[A-Z])/).length;

export default camelcase;
