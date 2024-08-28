/**
 * Generates a frequency array using counting sort
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} arr - The numbers array to be counted
 * @returns {number[]} The frequency array
 */
const countingSort = (arr: number[]): number[] => {
    const countArr = Array(100).fill(0);
    arr.forEach((e) => {
        countArr[e] += 1;
    });
    return countArr;
};

export default countingSort;
