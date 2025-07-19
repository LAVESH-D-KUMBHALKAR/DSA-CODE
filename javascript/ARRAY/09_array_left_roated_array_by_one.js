/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Rotate a given array one position to the left.
 *
 * @param {Array} arr - The array to rotate.
 * @returns {Array} The rotated array.
 */
/*******  0e0f057b-708c-4011-8a4d-b22ff29ca855  *******/    
function leftRotateArrayByOne(arr) {
    if (arr.length === 0) return arr; // edge case

    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    return arr;
}

let arr = [9, 5, 4, 3, 2, 5, 1];
console.log(leftRotateArrayByOne(arr)); // [5, 4, 3, 2, 5, 1, 9]
