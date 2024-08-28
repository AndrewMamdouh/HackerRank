/**
 * Counts the number of special problems in the workbook
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The number of chapters
 * @param {number} k - The maximum number of problems per page
 * @param {number[]} arr - The number of problems in each chapter
 * @returns {number} The number of special problems in the workbook
 */
const workbook = (n: number, k: number, arr: number[]): number => {
    let pageNum = 0;

    const detailedArr = arr.reduce((acc, cur) => {
        const problemsArr: number[] = Array(Math.floor(cur / k)).fill(k);
        acc.push(cur % k ? [...problemsArr, cur % k] : problemsArr);
        return acc;
    }, [] as number[][]);

    return detailedArr.reduce(
        (acc, curArr) =>
            acc +
            curArr.reduce((arrAcc, curArrElem, curArrIdx) => {
                pageNum++;
                const lowerBound = curArrIdx * k + 1;
                const upperBound = lowerBound + curArrElem - 1;
                return (
                    arrAcc + +(lowerBound <= pageNum && upperBound >= pageNum)
                );
            }, 0),
        0
    );
};

export default workbook;
