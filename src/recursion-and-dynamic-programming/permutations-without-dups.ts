/** Computes all permutations of a string of unique characters */
export function permutationsWithoutDups(input: string): string[][] {
    const chars = input.split('');
    chars.reduce((previous, current) => {
        const count = previous.get(current);
        if (count) {
            throw new Error('Invalid input');
        } else {
            previous.set(current, 1);
        }
        return previous;
    }, new Map<string, number>());
    let permutations: string[][] = [];
    for (let len = chars.length; len > 0; len--) {
        if (permutations.length === 0) {
            permutations.push(...chars.map((char) => [char]));
        } else {
            permutations = permutations.reduce((previous, current) => {
                chars.filter((char) => !current.includes(char))
                    .map((char) => current.slice().concat(char))
                    .forEach((perm) => previous.push(perm));
                return previous;
            }, new Array<string[]>());
        }
    }
    return permutations;
}
