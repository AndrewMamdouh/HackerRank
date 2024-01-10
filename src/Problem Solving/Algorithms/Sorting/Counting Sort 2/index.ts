/**
 * Sorts an array using counting sort
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} arr - The numbers array to be sorted
 * @returns {number[]} The sorted array
 */
const countingSort = (arr: number[]): number[] => {
    const countArr: number[] = []
    arr.forEach((e) => {
        countArr[e] = countArr[e] ? countArr[e] + 1 : 1
    })
    return countArr.reduce(
        (acc, cur, idx) => (cur ? acc.concat(Array(cur).fill(idx)) : acc),
        [] as number[]
    )
}

export default countingSort
