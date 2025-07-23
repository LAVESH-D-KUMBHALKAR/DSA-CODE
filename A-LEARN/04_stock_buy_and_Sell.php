<?php

/**
 * Finds the maximum profit that can be obtained from a list of stock prices.
 *
 * @param array $prices A list of stock prices.
 *
 * @return int The maximum profit that can be obtained.
 */
function maxProfit($prices)
{
    $minPrice = PHP_INT_MAX;
    $maxProfit = 0;

    foreach ($prices as $price) {
            echo $price . PHP_EOL;
        if ($price < $minPrice) {

            echo $price . " < " . $minPrice . PHP_EOL;

            $minPrice = $price;
        } elseif ($price - $minPrice > $maxProfit) {
            echo $price . " - " . $minPrice . " > " . $maxProfit . PHP_EOL;
            $maxProfit = $price - $minPrice;
            echo "maxProfit = " . $price . " - " . $minPrice . " = " . $maxProfit . PHP_EOL;
        }
    }

    return $maxProfit;
}

echo maxProfit([7, 1, 5, 3, 6, 4]); // 5
