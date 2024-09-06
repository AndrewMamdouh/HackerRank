/**
 * Calculates and prints the factorial of a given integer.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The integer to calculate the factorial for
 * @returns {string} The factorial value
 */
const extraLongFactorials = (n: number): string => {
    let factorial = BigInt(1);
    for (let i = BigInt(n); i > 0; i--) factorial *= i;
    return factorial.toString();
};

export default extraLongFactorials;
