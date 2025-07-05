<?php

function highestCommonFactor($a, $b)
{
    //need to positive number
    $a = abs($a);
    $b = abs($b);

    while ($b != 0) {
        $temp = $b;
        $b = $a % $b;
        $a = $temp;
    }
    return $a;
}


function multipleHCF($lArray)
{
    $hcf = $lArray[0];
    for ($i = 1; $i < count($lArray); $i++) {
        $hcf = highestCommonFactor($hcf, $lArray[$i]);
    }
    return $hcf;
}

$larrayValues = [10, 20, 25];

echo multipleHCF($larrayValues);
