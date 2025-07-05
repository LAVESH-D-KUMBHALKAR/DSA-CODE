

// This JavaScript function calculates the number of trailing zeros in the factorial of a given number n. It iterates over powers of 5 (since trailing zeros are created by 2*5 pairs in the factorial), and adds the count of each power of 5 that divides n to the total count.

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Returns the number of trailing zeros in the factorial of n.
 *
 * @param {number} n - The number to find the trailing zeros of.
 * @returns {number} The number of trailing zeros in the factorial of n.
 */
/*******  8e22c7b8-67cb-433d-a8fb-f7083a723874  *******/    
function trailing_zeros(n) {
    let count = 0;
    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }

    return count;
}

console.log(trailing_zeros(100));
