import { countDuplicates } from '@Helpers';
/**
 * Determines how many pairs of socks with matching colors there are
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} n - The number of socks in the pile
 * @param {number} ar - The colors of each sock
 * @returns {number} The number of pairs
 */
const sockMerchant = (n: number, ar: number[]): number => {
    const colorPairs = countDuplicates(ar);
    return Object.values(colorPairs).reduce(
        (acc, cur) => acc + Math.floor(cur / 2),
        0
    );
};

export default sockMerchant;
