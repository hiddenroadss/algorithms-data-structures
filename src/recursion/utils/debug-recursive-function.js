// At the top of your file, you'd require in the fs module
import fs from 'fs';
// And define the file where your logs would be saved
const logFile = './debug-log.txt';

export function debugRecursiveFunction(fn) {
  let depth = 0;
  return function debugWrapper(...args) {
    // Log arguments and depth to the log file
    fs.appendFileSync(logFile, ' '.repeat(depth) + `Calling with args: ` + JSON.stringify(args) + `, recursion depth is ` + depth + '\n');
    depth++;
    const result = fn.apply(this, args);
    depth--;
    // Log result and depth to the log file
    fs.appendFileSync(logFile, ' '.repeat(depth) + `Function returned with result: ` + JSON.stringify(result) + `, recursion depth is ` + depth + '\n');
    return result;
  }
}
