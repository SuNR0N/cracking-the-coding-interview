import { LinkedList } from './helpers/linked-list';

/**
 * Converts the provided link lists to numbers in reverse order
 * and returns the digits of their sum in reverse order as a linked list
 */
export function sumListsReverse(first: LinkedList, second: LinkedList): LinkedList {
  let firstStr: string = '';
  let secondStr: string = '';
  if (first.head) {
    let firstCurrent = first.head;
    firstStr = firstCurrent.data + firstStr;
    while (firstCurrent.next) {
      firstCurrent = firstCurrent.next;
      firstStr = firstCurrent.data + firstStr;
    }
  } else {
    return second;
  }
  if (second.head) {
    let secondCurrent = second.head;
    secondStr = secondCurrent.data + secondStr;
    while (secondCurrent.next) {
      secondCurrent = secondCurrent.next;
      secondStr = secondCurrent.data + secondStr;
    }
  } else {
    return first;
  }
  const firstNumber = Number.parseInt(firstStr, 10);
  const secondNumber = Number.parseInt(secondStr, 10);
  const sum = firstNumber + secondNumber;
  const sumList = new LinkedList();
  sum.toString()
    .split('')
    .reverse()
    .forEach((digitStr) => sumList.append(Number.parseInt(digitStr, 10)));

  return sumList;
}

/**
 * Converts the provided link lists to numbers
 * and returns the digits of their sum as a linked list
 */
export function sumListsForward(first: LinkedList, second: LinkedList): LinkedList {
  let firstStr: string = '';
  let secondStr: string = '';
  if (first.head) {
    let firstCurrent = first.head;
    firstStr += firstCurrent.data;
    while (firstCurrent.next) {
      firstCurrent = firstCurrent.next;
      firstStr += firstCurrent.data;
    }
  } else {
    return second;
  }
  if (second.head) {
    let secondCurrent = second.head;
    secondStr += secondCurrent.data;
    while (secondCurrent.next) {
      secondCurrent = secondCurrent.next;
      secondStr += secondCurrent.data;
    }
  } else {
    return first;
  }
  const firstNumber = Number.parseInt(firstStr, 10);
  const secondNumber = Number.parseInt(secondStr, 10);
  const sum = firstNumber + secondNumber;
  const sumList = new LinkedList();
  sum.toString()
    .split('')
    .forEach((digitStr) => sumList.append(Number.parseInt(digitStr, 10)));

  return sumList;
}
