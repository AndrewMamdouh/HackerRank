/**
 * Finds the median of an array
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} arr - The numbers array [should be of odd length]
 * @returns {number} The median of the array
 */
const findMedian = (arr: number[]): number => {
    arr.sort((x, y) => x - y)
    return arr[Math.floor(arr.length / 2)]
}

export default findMedian
