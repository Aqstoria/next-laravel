export const chunkArray = <T>(arr: T[], size: number): T[][] => {
  return arr.reduce<T[][]>((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size))
    return acc
  }, [])
}
