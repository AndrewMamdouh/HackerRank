/**
 * Gets the absolute diagonal difference of 2d array
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[][]} arr - 2d array to get diagonal difference from
 * @returns {number} The absolute diagonal difference
 */
const diagonalDifference = (arr: number[][]): number => {
    const maxIdx = arr.length - 1;
    return Math.abs(
        arr.reduce((acc, cur, idx) => acc + cur[idx] - cur[maxIdx - idx], 0)
    );
};

export default diagonalDifference;
