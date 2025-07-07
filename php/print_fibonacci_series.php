<?php

function printFibonacciSeries($n){

     $a = 0;
     $b = 1;
     $c = 0;
    for( $i = 0; $i < $n; $i++){
        echo  $a . " ";
        $c = $a + $b;
        $a = $b;
        $b = $c;
    }   
}

printFibonacciSeries(20);