// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

export function isPalindrome(str){
    if (str.length <= 1) return true;
    if (str.charAt(0).toLowerCase() === str.charAt(str.length - 1).toLowerCase()) {
      return isPalindrome(str.slice(1, -1))
    }
    return false;
  }

isPalindrome('tacocat')