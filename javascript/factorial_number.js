

function factorial_number(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial =  factorial * i;
    }
    return factorial;
}
console.log(factorial_number(5));

// diffrent approach

function factorial_number_v2(n) {

    if (n == 0) {
        return 1;
    } else {
        return n * factorial_number_v2(n - 1);
    }
}

console.log(factorial_number_v2(5));