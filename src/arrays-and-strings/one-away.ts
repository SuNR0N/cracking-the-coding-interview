/** Determines if one of the strings is only one away from the other:
 *  insertion/removal/replacement of a character
 */
export function oneAway(first: string, second: string): boolean {
  const lettersFirst = first.split('');
  const lengthFirst = lettersFirst.length;
  const lettersSecond = second.split('');
  const lengthSecond = lettersSecond.length;
  if (Math.abs(lengthFirst - lengthSecond) > 1) {
    return false;
  } else if (first === second) {
    return true;
  } else {
    return checkCandidate(lettersFirst, lettersSecond);
  }
}

function checkCandidate(lettersFirst: string[], lettersSecond: string[]): boolean {
  const lettersLonger = lettersFirst.length > lettersSecond.length ? lettersFirst : lettersSecond;
  const lettersShorter = lettersFirst.length > lettersSecond.length ? lettersSecond : lettersFirst;
  const lengthLonger = lettersLonger.length;
  const lengthShorter = lettersShorter.length;
  let mismatchedIndex: number | undefined;

  for (let i = 0; i < lengthLonger; i++) {
    if (lettersLonger[i] !== lettersShorter[i]) {
      mismatchedIndex = i;
      lettersLonger.splice(mismatchedIndex, 1);
      if (lengthLonger === lengthShorter) {
        lettersShorter.splice(mismatchedIndex, 1);
      }
      break;
    }
  }

  return lettersLonger.join('') === lettersShorter.join('');
}
