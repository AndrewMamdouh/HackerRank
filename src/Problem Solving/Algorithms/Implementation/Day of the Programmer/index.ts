/**
 * Returns the programmer day of certain year
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} year - The year to get the programmer date from
 * @returns {string} The date of the programmer day
 */
const dayOfProgrammer = (year: number): string => {
    return year === 1918
        ? `26.09.${year}`
        : (year < 1918 && year % 4 === 0) ||
            (year > 1918 &&
                (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))
          ? `12.09.${year}`
          : `13.09.${year}`;
};

export default dayOfProgrammer;
