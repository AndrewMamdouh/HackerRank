/**
 * Finds the minimum number of pages that must be turned in order to arrive at page p.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} n - The number of pages in the book
 * @param {number[]} p - The page number to turn to
 * @returns {number} The minimum number of pages to turn
 */
const pageCount = (n: number, p: number): number =>
    Math.min(Math.floor(p / 2), Math.floor((n - p + +(n % 2 === 0)) / 2));

export default pageCount;
