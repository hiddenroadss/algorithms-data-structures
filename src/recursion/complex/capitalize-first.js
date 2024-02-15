// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (arr) {
    if (!arr.length) {
        return [];
    }
    const firstWord = arr[0];
    const capitalized = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    return [capitalized].concat(capitalizeFirst(arr.slice(1)))
  }
  
 capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']