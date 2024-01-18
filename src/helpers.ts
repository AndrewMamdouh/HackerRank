import { NestedArray } from '@Types'

export const toFlatArray = <T>(arr: NestedArray<T>) =>
    arr.reduce(
        (acc: T[], cur) =>
            acc.concat(Array.isArray(cur) ? toFlatArray(cur) : cur),
        []
    )

export const recursiveSum = (
    start = 0,
    depth = 0,
    additions: number[] = []
) => {
    if (!depth || !additions.length) return [start]
    const result: NestedArray<number> = []
    for (const addition of additions)
        result.push(recursiveSum(start + addition, depth - 1, additions))
    const uniqueValues = new Set<number>(toFlatArray(result))
    const sortedValuesArr: number[] = Array.from(uniqueValues).sort(
        (x, y) => x - y
    )
    return sortedValuesArr
}

export const countDuplicates = (arr: number[]) =>
    arr.reduce((acc: Record<number, number>, cur) => {
        acc[cur] ? acc[cur]++ : (acc[cur] = 1)
        return acc
    }, {})

export const reverseNum = (num: number) =>
    parseFloat(num.toString().split('').reverse().join(''))

export const getLongestCommonSubStr = (x: string, y: string) => {
    const maxStr = y.length > x.length ? y : x
    const minStr = x.length < y.length ? x : y
    let str = '',
        tempSubstr: string
    for (let i = 0; i < minStr.length; i++) {
        for (let j = i + 1; j <= minStr.length; j++) {
            tempSubstr = minStr.slice(i, j)
            if (maxStr.includes(tempSubstr) && tempSubstr.length > str.length)
                str = tempSubstr
        }
    }
    return str
}
