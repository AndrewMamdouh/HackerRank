/**
 * Calculates sum a of big numbers array
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} arr - The numbers array to be summed
 * @returns {number} The sum
 */
const aVeryBigSum = (arr: number[]): number =>
    arr.reduce((acc, cur) => acc + cur)

export default aVeryBigSum
