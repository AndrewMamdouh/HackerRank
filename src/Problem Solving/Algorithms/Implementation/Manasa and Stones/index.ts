import { recursiveSum } from '@Helpers'

/**
 * Computes all possible numbers that might occur on the last stone
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {n} n - The number of non-zero stones
 * @param {a} a - one possible integer difference
 * @param {b} b - another possible integer difference
 * @returns {number[]} all possible values of the last stone, sorted ascending
 */
const stones = (n: number, a: number, b: number): number[] =>
    recursiveSum(0, n - 1, [a, b])

export default stones
