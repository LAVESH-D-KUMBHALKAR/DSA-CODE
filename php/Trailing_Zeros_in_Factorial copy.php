<?php

function trailingZeros($n) {

    if($n <= 0) return -1;

    $count = 0;
    for ($i = 5; $n / $i >= 1; $i *= 5) { // explain   
        $count += floor($n / $i);
    }
    return $count;
}

echo trailingZeros(100);


?>
