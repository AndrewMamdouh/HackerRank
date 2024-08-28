/**
 * Finds any integer (y) such that p(p(y)) === x and keep a history of the values of (y) in a return array
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} p - An array of integers
 * @returns {number[]} The values of (y) for all (x) in the arithmetic sequence 1 to n
 */
const permutationEquation = (p: number[]): number[] => {
    let firstPermutation: number, secondPermutation: number;
    const permutationArr: number[] = [];
    for (let i = 1; i <= p.length; i++) {
        firstPermutation = p.findIndex((e) => e === i) + 1;
        secondPermutation = p.findIndex((e) => e === firstPermutation) + 1;
        permutationArr.push(secondPermutation);
    }
    return permutationArr;
};

export default permutationEquation;
