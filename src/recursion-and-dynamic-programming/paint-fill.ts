export interface IPoint {
  x: number;
  y: number;
}

/**
 * Fill function that changes the surrounding area of the given point to the new color
 * @param screen 2 dimensional array of colors
 * @param point point of the screen represented by its X and Y coordinates
 * @param color new color
 */
export function paintFill(screen: number[][], point: IPoint, color: number): number[][] {
  const originalColor = screen[point.y] && screen[point.y][point.x];
  if (originalColor === undefined) {
    throw new Error('Invalid point');
  }
  repaint(screen, point, originalColor, color);
  return screen;
}

function repaint(screen: number[][], point: IPoint, originalColor: number, newColor: number): void {
  const currentPixelColor = screen[point.y] && screen[point.y][point.x];
  if (currentPixelColor === undefined || currentPixelColor === newColor || currentPixelColor !== originalColor) {
    return;
  }
  screen[point.y][point.x] = newColor;
  const topPoint: IPoint = { x: point.x, y: point.y - 1 };
  const bottomPoint: IPoint = { x: point.x, y: point.y + 1 };
  const leftPoint: IPoint = { x: point.x - 1, y: point.y };
  const rightPoint: IPoint = { x: point.x + 1, y: point.y };
  repaint(screen, topPoint, originalColor, newColor);
  repaint(screen, bottomPoint, originalColor, newColor);
  repaint(screen, leftPoint, originalColor, newColor);
  repaint(screen, rightPoint, originalColor, newColor);
}
