/**
 * Checks if the bill is fairly split
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} bill - An array of integers representing the cost of each item ordered
 * @param {number} k - An integer representing the zero-based index of the item Anna doesn't eat
 * @param {number} b - The amount of money that Anna contributed to the bill
 */
const bonAppetit = (bill: number[], k: number, b: number): void => {
    const annaBill =
        bill.reduce((acc, cur, idx) => (idx === k ? acc : acc + cur)) / 2;
    console.log(b === annaBill ? 'Bon Appetit' : b - annaBill);
};

export default bonAppetit;
