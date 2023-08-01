function workbook(n, k, arr) {
    let pageNum = 0;
    
    const detailedArr = arr.reduce((acc, cur) => {
        const problemsArr = Array(Math.floor(cur/k)).fill(k);
        acc.push(cur % k ? [...problemsArr, cur % k] : problemsArr);
        return acc;
    }, []);
    
    return detailedArr.reduce((acc, curArr) => acc + curArr.reduce((arrAcc, curArrElem, curArrIdx) => {
        pageNum++;
        const lowerBound = curArrIdx * k + 1;
        const upperBound = lowerBound + curArrElem - 1;
        return arrAcc + +(lowerBound <= pageNum && upperBound >= pageNum);
    }, 0), 0);
}

module.exports = workbook;