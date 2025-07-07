<?php

function sum_of_digits($number) {
    $sum = 0;
    while ($number > 0) {
        $digit = $number % 10;
        $sum += $digit;
        $number = (int)($number / 10);
    }
    return $sum;
}

$number = 23;
echo sum_of_digits($number);