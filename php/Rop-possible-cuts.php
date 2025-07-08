
<?php
/*
 * Given a rope of length n, returns the maximum number of cuts that can
 * be made with the given set of cut lengths a, b, and c. If n is less
 * than or equal to 0, returns -1.
 *
 * @param {number} n - The length of the rope.
 * @param {number} a - The first cut length.
 * @param {number} b - The second cut length.
 * @param {number} c - The third cut length.
 * @return {number} The maximum number of cuts that can be made.
 */

// n = 23, a = 11, b = 9, c = 12
function getRopeCutting($n, $a, $b, $c)
{

    if ($n == 0) {
        return 0;
    }
    if ($n <= 0) {
        return -1;
    }

    $res = max(
        getRopeCutting($n - $a, $a, $b, $c), 
        getRopeCutting($n - $b, $a, $b, $c), 
        getRopeCutting($n - $c, $a, $b, $c)
    ); 
    if ($res == -1) {
        return -1;
    }
    return $res + 1;
}


$n = 23;
$a = 11;
$b = 9;
$c = 12;

echo getRopeCutting($n, $a, $b, $c);

?>