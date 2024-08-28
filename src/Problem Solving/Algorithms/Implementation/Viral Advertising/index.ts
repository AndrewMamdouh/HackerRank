/**
 * Determines how many people have liked the ad by the end of a given day, beginning with launch day as day 1
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The day number to report
 * @returns {number} The cumulative likes at that day
 */
const viralAdvertising = (n: number): number => {
    let curLikes: number,
        totalLikes = 0,
        exposes = 5;
    for (let i = 0; i < n; i++) {
        curLikes = Math.floor(exposes / 2);
        totalLikes += curLikes;
        exposes = curLikes * 3;
    }
    return totalLikes;
};

export default viralAdvertising;
