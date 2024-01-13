/**
 * Determines the area of the rectangle highlight in mm² assuming all letters are 1mm wide
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} h - The heights of each letter
 * @param {string} word - a string
 * @returns {number} The size of the highlighted area
 */
const designerPdfViewer = (h: number[], word: string): number => {
    const wordIdxArr = word.split('').map((ch) => ch.charCodeAt(0) - 97)
    return (
        Math.max(...h.filter((_, idx) => wordIdxArr.includes(idx))) *
        word.length
    )
}

export default designerPdfViewer
