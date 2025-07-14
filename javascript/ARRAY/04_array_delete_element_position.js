
/**
 * Deletes an element from a given array at a given position.
 *
 * @param {Array} arr - The array to delete from.
 * @param {number} position - The position to delete from.
 * @returns {Array} The modified array.
 */

function deleteAtPosition(arr, position) {
    let newArray = [];
    let j = 0;

    for (let i = 0; i < arr.length; i++) {

        if (i !== position) {
            newArray[j++] = arr[i];
        }
    }

    return newArray;
}

let arr = [11, 12, 13, 14, 15];
console.deleteAtPosition(arr, 2);
