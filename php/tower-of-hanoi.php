<?php

function TOH($n, $source, $helper, $destination)
{

    if ($n === 1) {
        echo ('Move disk ' . $n . ' from ' . $source . ' to ' . $destination);
        echo PHP_EOL;
        return;
    }

    // Move n-1 disks from $source to $helper
    TOH($n - 1, $source, $destination, $helper);

    echo ("Move disk {$n} from {$source} to {$destination}");
    echo PHP_EOL;
    // Move n-1 disks from $helper to $destination

    TOH($n - 1, $helper, $source, $destination);

    echo ("Move disk {$n} from {$source} to {$destination}");
    echo PHP_EOL;
}



// 1 -> A TO B
// 2 -> A TO C
// 3 -> B TO C
$n = 3;
TOH($n, 'A', 'B', 'C');
