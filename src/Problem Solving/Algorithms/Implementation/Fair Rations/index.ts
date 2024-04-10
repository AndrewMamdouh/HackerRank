/**
 * You are the benevolent ruler of Rankhacker Castle, and today you're distributing bread. Your subjects are in a line, and some of them already have some loaves. Times are hard and your castle's food stocks are dwindling, so you must distribute as few loaves as possible according to the following rules:
 *
 * Every time you give a loaf of bread to some person <i>, you must also give a loaf of bread to the person immediately in front of or behind them in the line (i.e., persons <i + 1> or <i - 1>).
 * After all the bread is distributed, each person must have an even number of loaves.
 * Given the number of loaves already held by each citizen, find and print the minimum number of loaves you must distribute to satisfy the two rules above.
 * If this is not possible, print NO.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} B - The numbers of loaves each persons starts with
 * @returns {number | "NO"}  The minimum number of loaves required or 'NO'
 */
const fairRations = (B: number[]): number | 'NO' => {
    const rationsLine = [...B]
    let count = 0
    for (let i = 0; i < rationsLine.length - 1; i++) {
        if (rationsLine[i] % 2 !== 0) {
            rationsLine[i]++
            rationsLine[i + 1]++
            count += 2
        }
    }
    return rationsLine.at(-1)! % 2 === 0 ? count : 'NO'
}

export default fairRations
