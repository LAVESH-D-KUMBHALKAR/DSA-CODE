// A number is called a palindrome number if it is same after reverse. 
// For example, 121, 12321, 343, 1234321 are the palindrome numbers.

 function isPalindrome(number){
    let temp = number;
    let reverse = 0;
    while(number > 0){
        let rem = number % 10;
        reverse = reverse * 10 + rem;
        number = Math.floor(number/10);
    }

    console.log(temp + " == " + reverse);
    return (temp == reverse ? "true" : "false");
 }

 console.log(isPalindrome(121)); // true
 console.log(isPalindrome(123)); // false
 console.log(isPalindrome(12321)); // true