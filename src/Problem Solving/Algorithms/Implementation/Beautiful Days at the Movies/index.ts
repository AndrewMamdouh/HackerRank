import { reverseNum } from '@Helpers'
/**
 * Determines the number of days in the range that are beautiful.
 * Beautiful numbers are defined as numbers where |i - reverse(i)| is evenly divisible by k.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} i - The starting day number
 * @param {number} j - The ending day number
 * @param {number} k - The divisor
 * @returns {number} The number of beautiful days in the range
 */
const beautifulDays = (i: number, j: number, k: number): number => {
    let count = 0
    for (let l = i; l <= j; l++)
        if (Math.abs(l - reverseNum(l)) % k === 0) count++
    return count
}
export default beautifulDays
