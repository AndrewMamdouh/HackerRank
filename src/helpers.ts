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
