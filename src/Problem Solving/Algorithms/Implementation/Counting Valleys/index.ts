/**
 * Finds out the number of valleys walked through
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} steps - The number of steps on the hike
 * @param {string} path - A string describing the path
 * @returns {number} The number of valleys traversed
 */
const countingValleys = (steps: number, path: string): number => {
    const stepVal: Record<string, number> = {
        U: 1,
        D: -1,
    };
    let pos = 0,
        count = 0;
    for (const step of path) {
        pos += stepVal[step];
        if (!pos && step === 'U') count++;
    }
    return count;
};

export default countingValleys;
