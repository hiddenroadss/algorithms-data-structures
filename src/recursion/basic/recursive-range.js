// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

export function recursiveRange(num){
    const sum = 0;
    
    const helper = (curr) => {
        if (curr === num) return curr;
        return curr + helper(curr + 1);
    }

    return helper(sum);
}

