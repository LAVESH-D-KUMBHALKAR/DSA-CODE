
function sum_of_digits(n) {

    let sum = 0;
    while (n > 0) {
        let digit = (n % 10);
        sum += digit;
        n = Math.floor(n/10);
    }
    return sum;

}

console.log(sum_of_digits(140));