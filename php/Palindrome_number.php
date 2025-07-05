<?php

    // A number is called a palindrome number if it is same after reverse. 
    # For example, 121, 12321, 343, 1234321 are the palindrome numbers.

    function isPalindrome($number) {
        $temp = $number;
        $reverse = 0;
        while ($number > 0) {
            $reminder = $number % 10 ;
            $reverse = $reverse * 10 + $reminder;
            $number = (int)($number / 10);
        };
        
        echo $temp . " == " . $reverse . PHP_EOL;
        if($temp == $reverse) {
            echo "true";
        } else {
            echo "false";
        }
    }

    isPalindrome(121); // true
    echo PHP_EOL;
    isPalindrome(123); // false
    echo PHP_EOL;
    isPalindrome(12321); // true
?>