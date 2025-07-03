
function count_of_digit(n) {
    let number = n < 0 ? -n : n;
    let count = 0;
    while(number > 0) {
        number = Math.floor(number/10);
        count++;
    }
    return "Count of  digit [" + n + "] : " + count;
}

console.log(count_of_digit(-1234)); // Count of  digit [-1234] : 4