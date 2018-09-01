export interface ITowers {
  first: number[];
  middle: number[];
  last: number[];
}

/** Solves the Towers of Hanoi puzzle with the provided number of disks */
export function towersOfHanoi(n: number): ITowers[] {
  if (n < 1) {
    throw new Error('Number of disks must be a positive integer');
  }
  const orderedDisks = Array.from(Array(n).keys())
    .map((v) => v + 1)
    .reverse();
  const initialTowers: ITowers = {
    first: orderedDisks,
    last: [],
    middle: [],
  };
  const steps: ITowers[] = [initialTowers];
  do {
    const step: ITowers = JSON.parse(JSON.stringify(steps[steps.length - 1]));
    let pushable: number[];
    let poppable: number[];
    if (steps.length % 3 === 1) {
      pushable = (step.first.length === 0 ||
        step.first[step.first.length - 1] > (n % 2 === 0 ? step.middle[step.middle.length - 1] : step.last[step.last.length - 1]))
        ? step.first
        : (n % 2 === 0 ? step.middle : step.last);
      poppable = pushable === step.first ? (n % 2 === 0 ? step.middle : step.last) : step.first;
    } else if (steps.length % 3 === 2) {
      pushable = (step.first.length === 0 ||
        step.first[step.first.length - 1] > (n % 2 === 0 ? step.last[step.last.length - 1] : step.middle[step.middle.length - 1]))
        ? step.first
        : (n % 2 === 0 ? step.last : step.middle);
      poppable = pushable === step.first ? (n % 2 === 0 ? step.last : step.middle) : step.first;
    } else {
      pushable = (step.last.length === 0 ||
        step.last[step.last.length - 1] > step.middle[step.middle.length - 1])
        ? step.last
        : step.middle;
      poppable = pushable === step.last ? step.middle : step.last;
    }
    const disk = poppable.pop() as number;
    pushable.push(disk);
    steps.push(step);
  } while (steps[steps.length - 1].last.length !== steps[0].first.length);

  return steps;
}
