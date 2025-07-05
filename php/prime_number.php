<?php

function isPrimeNumber($number){
    if ($number <= 1) {
        echo "The number is not a prime number: " . $number;
        return;
    }

    for ($i = 2; $i < $number; $i++) {
        if ($number % $i === 0) {
            echo "The number is not a prime number: " . $number;
            return;
        }
    }

    echo "The number is a prime number: " . $number;
}

isPrimeNumber(51);


// ANOTHER SOLUTION

function isPrimeNumberV2($number) {
    if ($number <= 1) {
        return false; // 0 and 1 are not prime numbers
    }

    // Check divisibility up to square root of the number
    for ($i = 2; $i <= sqrt($number); $i++) {
        if ($number % $i === 0) {
            return false; // Not prime
        }
    }

    return true; // Prime
}

// Example usage:
$number = 51;

if (isPrimeNumberV2($number)) {
    echo "$number is a prime number.";
} else {
    echo "$number is not a prime number.";
}

?>

?>
