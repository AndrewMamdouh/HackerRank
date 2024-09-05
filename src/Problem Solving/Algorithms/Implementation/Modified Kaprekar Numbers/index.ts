/**
 * Prints the modified Kaprekar numbers in the range between (p) and (q), inclusive. If no modified Kaprekar numbers exist in the given range, print "INVALID RANGE".
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} p - The range lower limit
 * @param {number} q - The range upper limit
 * @returns {string} The list of modified Kaprekar numbers, space-separated on one line and in ascending order or "INVALID RANGE" If no modified Kaprekar numbers exist in the given range.
 */
const kaprekarNumbers = (p: number, q: number): string => {
    const modifiedKaprekarArr: number[] = [];
    for (let i = p; i <= q; i++) {
        const poweredStr = Math.pow(i, 2).toString();
        if (
            (parseInt(
                poweredStr.slice(0, poweredStr.length - i.toString().length)
            ) || 0) +
                (parseInt(
                    poweredStr.slice(poweredStr.length - i.toString().length)
                ) || 0) ===
            i
        )
            modifiedKaprekarArr.push(i);
    }
    return modifiedKaprekarArr.length
        ? modifiedKaprekarArr.join(' ')
        : 'INVALID RANGE';
};

export default kaprekarNumbers;
