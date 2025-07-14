
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Inserts a value at the first position of the array.
 *
 * @param {Array} arr The array to modify.
 * @param {*} value The value to insert.
 * @returns {Array} The modified array.
 */
/*******  788e254e-c7b7-4f84-87fd-73c13b484c83  *******/    

function addValueAtFirstPositionOfarray(arr, value) {

    newArray = [];

    newArray[0] = value;

    for (let i = 0; i < arr.length; i++) {
        newArray[i + 1] = arr[i];
    }

    return newArray;
}


let arr = [20, 10, 330, 304, 333];
console.log(addValueAtFirstPositionOfarray(arr, 10));