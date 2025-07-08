<?php

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Calculates the $n-th Fibonacci number.
 *
 * The Fibonacci sequence is a series of numbers where a number is the sum of the two preceding ones, 
 * usually starting with 0 and 1.
 *
 * @param  int $n The number in the sequence.
 * @return int    The $n-th Fibonacci number.
 */
/*******  26f8a883-1cb0-4c91-9a95-0d3691ad6347  *******/    

function fibonacci($n) {
    if($n === 1 || $n===2) return 1;
    return fibonacci($n - 1) + fibonacci($n - 2);
}

echo fibonacci(20);