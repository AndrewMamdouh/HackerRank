/**
 * Converts 12-hour time to military (24-hour) time.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {string} s - The 12-hour time
 * @returns {string} The military (24-hour) time
 */
function timeConversion(s) {
  const timeArr = s.slice(0, 8).split(":");
  const hours = parseInt(timeArr[0]);
  const isAM = s.slice(-2) === "AM";
  if (isAM && hours === 12) timeArr[0] = "00";
  else if (!isAM && hours !== 12) timeArr[0] = (hours + 12).toString();
  return timeArr.join(":");
}

module.exports = timeConversion;
