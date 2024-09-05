/**
 * Finds all the cavities on the map and replace their depths with the uppercase character X.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {string[]} grid - The square map as a matrix of integer strings
 * @returns {string[]} The modified grid
 */
const cavityMap = (grid: string[]): string[] => {
    const excludedCells: string[] = [];
    const cavityGrid = [...grid];
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            if (excludedCells.includes(`${i},${j}`)) continue;
            if (checkIfCavity(cavityGrid, i, j)) {
                cavityGrid[i] =
                    `${cavityGrid[i].substring(0, j)}X${cavityGrid[i].substring(j + 1)}`;
                excludedCells.push(
                    `${i + 1}, ${j}`,
                    `${i - 1}, ${j}`,
                    `${i}, ${j + 1}`,
                    `${i}, ${j - 1}`
                );
            }
        }
    }
    return cavityGrid;
};

export default cavityMap;

const checkIfCavity = (grid: string[], row: number, col: number): boolean => {
    const targetedCellValue = parseInt(grid[row][col]);
    return (
        targetedCellValue > parseInt(grid[row + 1][col]) &&
        targetedCellValue > parseInt(grid[row - 1][col]) &&
        targetedCellValue > parseInt(grid[row][col + 1]) &&
        targetedCellValue > parseInt(grid[row][col - 1])
    );
};
