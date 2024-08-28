/**
 * Determines the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The length of array (ar)
 * @param {number} k - The integer divisor
 * @param {number[]} ar - An array of integers
 * @returns {number} The number of pairs
 */
const divisibleSumPairs = (n: number, k: number, ar: number[]): number => {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) count++;
        }
    }
    return count;
};

export default divisibleSumPairs;
