/** Sorts an array of strings alphabetically so that all the anagrams are next to each other */
export function groupAnagrams(words: string[]): string[] {
    const wordsMap: Map<string, string[]> = words.reduce((wm, word) => {
        const lettersMap = word.split('').reduce((lm, letter) => {
            let letterCount = lm.get(letter);
            lm.set(letter, letterCount === undefined ? 1 : ++letterCount);
            return lm;
        }, new Map<string, number>());
        const lettersKey = Array.from(lettersMap).reduce((arr, [letter, count]) => {
            arr.push(letter + count);
            return arr;
        }, new Array<string>()).sort().join('');
        const wordsList = wm.get(lettersKey);
        if (wordsList === undefined) {
            wm.set(lettersKey, [ word ]);
        } else {
            wordsList.push(word);
        }
        return wm;
    }, new Map<string, string[]>());
    const wordsMapWithThumbnails: Map<string, string[]> = Array.from(wordsMap).reduce((map, [key, anagrams]) => {
        const thumbnail = anagrams.sort().splice(0, 1)[0];
        map.set(thumbnail, anagrams);
        return map;
    }, new Map<string, string[]>());
    const sortedWordsByAnagrams = Array.from(wordsMapWithThumbnails).sort().reduce((arr, [thumbnail, anagrams]) => {
        arr = arr.concat(thumbnail, ...anagrams);
        return arr;
    }, new Array<string>());
    return sortedWordsByAnagrams;
}
