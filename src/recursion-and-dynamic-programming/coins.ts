/** Returns all combinations of how n can be represented with coins of 25,10,5 and 1 */
export function coins(n: number, combination: number[] = [], combinations: Set<string> = new Set()): number[][] {
    if (n < 0 || (n === 0 && combination.length === 0)) {
        throw new Error(`${n} cannot be represented with coins of 25,10,5 and 1`);
    } else if (n === 0) {
        combinations.add(JSON.stringify(combination.sort()));
    } else {
        const changes: number[] = [ 25, 10, 5, 1 ];
        changes.forEach((coin) => {
            if (n / coin >= 1) {
                coins(n - coin, combination.concat(coin), combinations);
            }
        });
    }
    return Array.from(combinations).map((json) => JSON.parse(json));
}
