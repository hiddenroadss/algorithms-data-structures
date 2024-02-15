import { debugRecursiveFunction } from "../utils/debug-recursive-function.js";

export function flatten(arr) {
  if (arr.length === 1 && !Array.isArray(arr[0])) {
    return arr;
  }
  const isArr = Array.isArray(arr[0]);
  const first = isArr ? flatten(arr[0]) : [arr[0]];
  return first.concat(flatten(arr.slice(1)));
}


function flattenHelper(arr) {
    if (arr.length === 1 && !Array.isArray(arr[0])) {
        return arr;
    }
    const isArr = Array.isArray(arr[0]);
    const first = isArr ? debugFlatten(arr[0]) : [arr[0]]; // changed from flatten to debugFlatten
    return first.concat(debugFlatten(arr.slice(1))); // changed from flatten to debugFlatten
};
    
// Applying debug wrapper to your function
const debugFlatten = debugRecursiveFunction(flattenHelper);
debugFlatten([1, 2, 3, [4, 5]]);