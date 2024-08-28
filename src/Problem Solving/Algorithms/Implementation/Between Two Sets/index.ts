/**
 * Counts how many numbers between the sets that satisfy the following two conditions:
 * 1. The elements of the first array are all factors of the integer being considered
 * 2. The integer being considered is a factor of all elements of the second array
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} a - The elements to be considered as factors of the integer being tested
 * @param {number[]} b - The elements to consider when testing the integer as a factor of them
 * @returns {number} The number of integers between the sets
 */
const getTotalX = (a: number[], b: number[]): number => {
    let count = 0,
        isValid: boolean;
    for (let i = a.at(-1); typeof i === 'number' && i <= b[0]; i++) {
        isValid = true;
        for (let j = 0; j < a.length; j++) {
            if (i % a[j] !== 0) {
                isValid = false;
                break;
            }
        }
        if (!isValid) continue;
        for (let j = 0; j < b.length; j++) {
            if (b[j] % i !== 0) {
                isValid = false;
                break;
            }
        }
        if (isValid) count++;
    }
    return count;
};

export default getTotalX;
