
/**
 * Inserts a value at the end of an array.
 *
 * @param {Array} arr - The array to modify.
 * @param {*} value - The value to insert.
 * @returns {Array} The modified array.
 */
function insertAtEnd(arr, value) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }

    newArr[arr.length] = value;
    return newArr;
}

// Example:
let arr2 = [10, 20, 30];
let resultEnd = insertAtEnd(arr2, 40);
console.log(resultEnd); // Output: [10, 20, 30, 40]



// function addValueAtLastPositionOfArray(arr, last) {

//         newArray = arr;
//         newArray[arr.length] = last;
//         return newArray;
// }

// let arr = [900, 800, 700, 300, 400];
// console.log(addValueAtLastPositionOfArray(arr,1000));