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

?>
