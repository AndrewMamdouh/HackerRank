/**
 * Determines the number of square integers within that range
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} a - The lower range boundary
 * @param {number} b - The upper range boundary
 * @returns {number} The number of square integers in the range
 */
const squares = (a: number, b: number): number =>
    Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;

export default squares;
