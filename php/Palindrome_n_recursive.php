<?php

// MadaM
function isPalindromeRecursive($str, $left = 0, $right = -1) {
    
    if($right == -1){
        $right = strlen($str) - 1;
    }


    if ($left >= $right) {
        return true;
    }

    if($str[$left] !== $str[$right]){
        return false;
    }

    isPalindromeRecursive($str, $left + 1, $right - 1);
}


if (isPalindromeRecursive("MadaMM")) {
    echo "Is A Palindrome";
} else {
    echo "Is Not A Palindrome";
}
