/** Merges B into A in sorted order */
export function sortedMerge(a: any[], b: any[]): any[] {
    let lastInsertionIndex = a.length > 0 ? a.length - 1 : 0;
    let nextLargestOfB = b.pop();
    while (nextLargestOfB !== undefined) {
        for (let i = lastInsertionIndex; i >= 0; i--) {
            const nextLargestOfA = a[i];
            if (nextLargestOfB >= nextLargestOfA) {
                a.splice(i + 1, 0, nextLargestOfB);
                lastInsertionIndex = i + 1;
                break;
            } else {
                lastInsertionIndex = a.push(nextLargestOfB);
            }
        }
        nextLargestOfB = b.pop();
    }
    return a;
}
