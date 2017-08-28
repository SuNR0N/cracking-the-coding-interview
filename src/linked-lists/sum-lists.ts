import { LinkedList } from './helpers/linked-list';

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
    const firstNumber = Number.parseInt(firstStr);
    const secondNumber = Number.parseInt(secondStr);
    const sum = firstNumber + secondNumber;
    const sumList = new LinkedList();
    sum.toString()
        .split('')
        .reverse()
        .forEach((digitStr) => sumList.append(Number.parseInt(digitStr)));

    return sumList;
}

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
    const firstNumber = Number.parseInt(firstStr);
    const secondNumber = Number.parseInt(secondStr);
    const sum = firstNumber + secondNumber;
    const sumList = new LinkedList();
    sum.toString()
        .split('')
        .forEach((digitStr) => sumList.append(Number.parseInt(digitStr)));

    return sumList;
}
