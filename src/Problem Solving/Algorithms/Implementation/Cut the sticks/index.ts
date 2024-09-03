/**
 * Returns the number of sticks that are left before each iteration.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} arr - The array of sticks of varying lengths
 * @returns {number[]} The array of integers representing the number of sticks before each cut operation is performed.
 */
const cutTheSticks = (arr: number[]): number[] => {
    let iterArr = [...arr];
    const iterLengths = [];
    while (iterArr.length) {
        iterLengths.push(iterArr.length);
        const smallestLen = iterArr.sort((x, y) => x - y)[0];
        iterArr = iterArr.filter((num) => num - smallestLen > 0);
    }
    return iterLengths;
};

export default cutTheSticks;
