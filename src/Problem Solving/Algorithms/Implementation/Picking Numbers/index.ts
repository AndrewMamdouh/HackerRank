import { countDuplicates } from '@Helpers';
/**
 * Finds the longest subarray where the absolute difference between any two elements is less than or equal to 1
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} a - An array of integers
 * @returns {number} The length of the longest subarray that meets the criterion
 */
const pickingNumbers = (a: number[]): number => {
    const result = countDuplicates(a);
    let maxLength = 0;
    Object.entries(result).forEach((entry, idx, arr) => {
        if (idx + 1 !== arr.length && +arr[idx + 1][0] - +entry[0] === 1) {
            const newMax = entry[1] + arr[idx + 1][1];
            if (newMax > maxLength) maxLength = newMax;
        }
    });
    return maxLength;
};

export default pickingNumbers;
