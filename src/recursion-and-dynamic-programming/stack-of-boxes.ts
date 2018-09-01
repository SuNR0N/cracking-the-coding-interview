export interface IBox {
  width: number;
  height: number;
  depth: number;
}

/** Computes the height of the tallest possible ascending stack which can be created with the provided boxes */
export function stackOfBoxes(boxes: IBox[], stack: IBox[] = [], stacks: IBox[][] = []): number {
  for (const box of boxes) {
    const topBox = stack[stack.length - 1];
    if (!topBox || isSmaller(box, topBox)) {
      const index = boxes.indexOf(box);
      const cpBoxes = boxes.slice(0, index).concat(boxes.slice(index + 1));
      stackOfBoxes(cpBoxes, stack.slice().concat(box), stacks);
    }
  }
  stacks.push(stack);
  return stacks.reduce((previous, current) => {
    const heightOfStack = getHeightOfStack(current);
    if (heightOfStack > previous) {
      previous = heightOfStack;
    }
    return previous;
  }, 0);
}

function isSmaller(box: IBox, other: IBox): boolean {
  return box.depth <= other.depth && box.height <= other.height && box.width <= other.width;
}

function getHeightOfStack(boxes: IBox[]): number {
  return boxes.reduce((previous, current) => {
    previous += current.height;
    return previous;
  }, 0);
}
