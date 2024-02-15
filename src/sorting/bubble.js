import { swap } from "./utils/swap";

export function bubbleSort(arr) {
   let isSorted = false;
   let counter = 0;

   while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1 - counter; i++) {
        if (arr[i] > arr[i + 1]) {
            swap(i, i + 1, arr)
            isSorted = false;
        }
    }
    counter++;
   }
   
    return arr;
}



// console.log(bubbleSort([3, 5, 2, 8, 1, 4, 9, 2]))