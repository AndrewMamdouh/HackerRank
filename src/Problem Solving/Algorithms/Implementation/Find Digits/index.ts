/**
 * Counts the number of divisors occurring within the integer
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The value to analyze
 * @returns {number} The number of digits in (n) that are divisors of (n)
 */
const findDigits = (n: number): number => {
    const numDigits = n
        .toString()
        .split('')
        .map((digit) => +digit);
    let count = 0;
    for (const digit of numDigits) if (n % digit === 0) count++;
    return count;
};

export default findDigits;
