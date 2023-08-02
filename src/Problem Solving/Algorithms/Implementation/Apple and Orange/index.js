/**
 * Counts the number of apples and oranges that fall on Sam's house
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} s - The starting point of Sam's house location
 * @param {number} t - The ending location of Sam's house location
 * @param {number} a - The location of the Apple tree
 * @param {number} b - The location of the Orange tree
 * @param {number[]} apples - The distances at which each apple falls from the tree
 * @param {number[]} oranges - The distances at which each orange falls from the tree
 * @returns {[number, number]} The number of apples and oranges that fall on Sam's house [apples, oranges]
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  return [
    apples.reduce(
      (acc, cur) => (acc += a + cur >= s && a + cur <= t ? 1 : 0),
      0
    ),
    oranges.reduce(
      (acc, cur) => (acc += b + cur >= s && b + cur <= t ? 1 : 0),
      0
    ),
  ];
}

module.exports = countApplesAndOranges;
