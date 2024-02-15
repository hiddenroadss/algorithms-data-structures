import { swap } from "./utils/swap.js";

export function selectionSort(arr) {
    let currentIndex = 0;
    while (currentIndex < arr.length - 1) {
        let smallestIndex = currentIndex;
        for (let i = currentIndex + 1; i < arr.length; i++) {
            if (arr[i] < arr[smallestIndex]) {
                smallestIndex = i;
            }
        }
        swap(currentIndex, smallestIndex, arr);
        currentIndex++;
    }
    return arr;
}


console.log('RESULT:', selectionSort([2, 5, 1, 19, 8, 1, 4, 3, 8, 4, 1, 5]))