/**
 * Finds out how tall will the tree be after certain growth cycles
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The number of growth cycles to simulate
 * @returns {number} The height of the tree after the given number of cycles
 */
const utopianTree = (n: number): number => {
    if (!n) return 1;
    if (n % 2) return utopianTree(n - 1) * 2;
    return utopianTree(n - 1) + 1;
};

export default utopianTree;
