<?php

    function get_absolute_value($number) {
        $lGetAbsoluteValue = $number < 0 ? -$number : $number;
        echo "Absolute value of [" . $number . "] : " . $lGetAbsoluteValue . PHP_EOL;
    }

    get_absolute_value(10); // Absolute value of [10] : 10
    get_absolute_value(-10); // Absolute value of [-10] : 10

?>