// Write a recursive function called nestedEvenSum. 
// Return the sum of all even numbers in an object which may contain nested objects.

// 1.Undetstand the problem - done, task is written clear
// 2.Simplify the problem:
// how to find an even number in 1 flat object
// 3.Identify the base case:
// when we pass obj property and it is primitive type (return number | 0)
// 4.Identify the recursive case
// We call recursive fucn on each root obj property. If the value is an object - we call again. If the value is a primitive - we return number or 0 for other types
// 5.Pseudocode:
// - Base case: if no object is empty - return 0
// - Recursive case:
//   - 

function nestedEvenSum (obj) {
    if (typeof obj === 'number') {}
  }
  
  
  const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10