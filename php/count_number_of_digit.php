<?php

function count_number_of_digit($number)
{
    $orgNumber = $number;
    $number = $number < 0 ? -$number : $number;
    $count = 0;
    while ($number > 0) {
        $number = floor($number / 10);
        $count++;
    }
    echo "Count of digit [{$orgNumber}] : " . "{$count}" . PHP_EOL;
}

count_number_of_digit(-150); // Count of digit [-150] : 3

