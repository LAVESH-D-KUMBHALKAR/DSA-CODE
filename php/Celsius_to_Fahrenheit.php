
<?php
// Formula: Faranheit = (Celsius * 9/5) + 32;


function celsius_to_faranheit($celsius)
{
    $lGetCelsiusToFaranheit = ($celsius * 9 / 5) + 32;

    echo "Celsius to Faranheit [" . $celsius . "] : " . $lGetCelsiusToFaranheit . PHP_EOL;
}

celsius_to_faranheit(10); // Celsius to Faranheit [10] : 50
celsius_to_faranheit(-10); // Celsius to Faranheit [-10] : 14


?>