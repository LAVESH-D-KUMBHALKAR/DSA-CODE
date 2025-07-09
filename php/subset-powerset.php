<?php

function powerSet($s, $index = 0, $current = "", &$result = []) {
    if ($index === strlen($s)) {
        $result[] = $current;
        return;
    }

    powerSet($s, $index + 1, $current, $result);              // Exclude
    powerSet($s, $index + 1, $current . $s[$index], $result); // Include
    return $result;
}

// Example usage
print_r(powerSet("abc"));
