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
// console.log(leftRotateArrayByOne(arr)); // [5, 4, 3, 2, 5, 1, 9]


/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Rotates a given array to the left by a specified number of positions.
 *
 * @param {Array} arr - The array to rotate.
 * @param {number} n - The number of positions to rotate the array.
 * @returns {Array} The rotated array.
 */

/*******  5db7c9d6-2078-46c7-93e7-156937a3c56f  *******/    
function leftRotateArrayByGiveNumber(arr,n){

    // let arry = []
    for(let i = 0 ; i < n; i++){
        leftRotateArrayByOne(arr);
    }

    return arr;

}

console.log(leftRotateArrayByGiveNumber(arr, 2)); // [5, 4, 3, 2, 5, 1, 9]
