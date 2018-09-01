/**
 * Draws a horizontal line on the screen
 * @param screen Single array of bytes, allowing 8 consecutive pixels to be stored in one byte
 * @param width Width of screen in pixels which should be divisible by 8
 * @param x1 Starting point of the line to be drawn on X axis
 * @param x2 Ending point of the line to be drawn on X axis
 * @param y Number of row where the line has to be drawn
 */
export function drawLine(screen: number[], width: number, x1: number, x2: number, y: number): number[][] {
  const maxValue = 255;
  const minValue = 0;
  if (screen.some((byte) => byte > maxValue || byte < minValue)) {
    throw new Error('Invalid screen representation');
  }
  if (width % 8 !== 0) {
    throw new Error('Invalid width. It must be divisible by 8');
  }
  const screenBinary: number[] = screen.reduce((previous, current) => {
    let binary = current.toString(2);
    const diff = 8 - binary.length;
    binary = '0'.repeat(diff).concat(binary);
    const binaryArr = binary
      .split('')
      .map((bit) => parseInt(bit, 2));
    previous.push(...binaryArr);
    return previous;
  }, new Array<number>());
  const screenXY: number[][] = screenBinary.reduce((previous, current, index) => {
    const rowIndex = Math.floor(index / width);
    if (index % width === 0) {
      previous.push([]);
    }
    previous[rowIndex].push(current);
    return previous;
  }, new Array<number[]>());
  if (y < 0 || y > screenXY.length - 1) {
    throw new Error(`Invalid y position. Value must be between 0 and ${screenXY.length - 1}`);
  }
  const screenRow = screenXY[y];
  if (x1 < 0 || x2 < 0 || x1 > screenRow.length - 1 || x2 > screenRow.length - 1) {
    throw new Error(`Invalid x position. Value must be between 0 and ${screenRow.length - 1}`);
  }
  const startX = x1 < x2 ? x1 : x2;
  const endX = x2 > x1 ? x2 : x1;

  for (let i = startX; i <= endX; i++) {
    screenRow[i] = 1;
  }
  return screenXY;
}
