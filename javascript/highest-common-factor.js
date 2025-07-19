

/**
 * Finds the highest common factor (HCF) of two numbers using the Euclidean algorithm.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The highest common factor of a and b.
 */
function findHCF(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;

}

// console.log(findHCF(20, 30));

function multipleHcf(arr) {


    let hcf = arr[0];
    for (let x = 1; x < arr.length; x++) {

        hcf = findHCF(hcf, arr[x]);
    }

    return hcf;

}

console.log(multipleHcf([20, 7, 45]));
