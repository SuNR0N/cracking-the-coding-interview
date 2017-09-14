/**
 * Returns the most frequent item in the provided list of values
 * If multiple values have the same occurrence than it returns that one which reaches the max first
 */
export function mostFrequent(...values: any[]): any {
    const map: Map<any, number> = new Map();
    let maxCount: number = 0;
    let mostFrequentItem: any;
    values.forEach((value) => {
        let itemCount = map.get(value);
        itemCount = !itemCount ? 1 : (itemCount + 1);
        if (itemCount > maxCount) {
            mostFrequentItem = value;
            maxCount = itemCount;
        }
        map.set(value, itemCount);
    });
    return mostFrequentItem;
}
