/** Determines if one of the strings is a rotation of the other */
export function stringRotation(first: string, second: string): boolean {
  const lettersFirst = first.split('');
  const lengthFirst = lettersFirst.length;
  const lettersSecond = second.split('');
  const lengthSecond = lettersSecond.length;
  if (lengthFirst !== lengthSecond) {
    return false;
  }
  let indexToCompare = 0;
  let isRotation = false;
  lettersSecond.forEach((value) => {
    if (lettersFirst[indexToCompare] === value) {
      indexToCompare++;
      isRotation = true;
    } else {
      indexToCompare = 0;
      isRotation = false;
    }
  });

  const substr = first.substr(indexToCompare);

  return isRotation && second.includes(substr);
}
