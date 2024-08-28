/**
 * Finds out how many doses of the potion must the character take to be able to jump all the hurdles
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} k - The height the character can jump naturally
 * @param {number[]} height - The heights of each hurdle
 * @returns {number} The minimum number of doses required
 */
const hurdleRace = (k: number, height: number[]): number => {
    const doses = Math.max(...height) - k;
    return doses > 0 ? doses : 0;
};

export default hurdleRace;
