function binarySearch(arr, value) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let middle;
    while(leftPointer <= rightPointer) {
        middle = Math.floor((rightPointer + leftPointer) / 2);
        if (value === arr[middle]) {
            return middle;
        } 
        if (value > arr[middle]) {
            leftPointer = middle + 1;
        } else if (value < arr[middle]) {
            rightPointer = middle - 1;
        }
    }

    return -1;
}