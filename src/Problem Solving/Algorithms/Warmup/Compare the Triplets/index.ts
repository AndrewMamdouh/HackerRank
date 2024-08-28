/**
 * Compares a triplet to a another
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} a - Alice's triplet
 * @param {number[]} b - Bob's triplet
 * @returns {[number, number]} [Alice's score, Bob's score]
 */
const compareTriplets = (a: number[], b: number[]): [number, number] => {
    return a.reduce(
        (acc, cur, idx) => {
            if (cur > b[idx]) acc[0]++;
            else if (cur < b[idx]) acc[1]++;
            return acc;
        },
        [0, 0]
    );
};

export default compareTriplets;
