<?php

function findHCF($a, $b)
{
    $a = abs($a);
    $b = abs($b);

    if ($b != 0) {
        $temp = $b;
        $b = $a % $b;
        $a = $temp;
    }

    return $a;
}


function findLCM($a, $b)
{

    return ($a * $b) / findHCF($a, $b);
}

echo findLCM(20, 10);
