/** Replaces all spaces in the input string with %20 */
export function urlify(input: string, length: number): string {
    const toReplace = / /g;
    const replacement = '%20';
    const trimmedInput = input.trim();
    if (trimmedInput.length !== length) {
        throw new Error('Invalid input');
    }
    return trimmedInput.replace(toReplace, replacement);
}
