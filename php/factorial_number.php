<?php

function factorial_number($number)
{
    $factorial = 1;

    for ($i = 1; $i <= $number; $i++) {
        $factorial = $factorial * $i;
    }

    echo $factorial;
}

factorial_number(5);

// diffrent apprach

function factorial_number2($number){
    if($number == 0){
        return 1;
    }else{
        return $number * factorial_number2($number - 1);
    }
}

factorial_number2(5);