
/**
 * Returns the indices of two elements in the given array that sum to the target.
 * Uses the two pointer technique to traverse the array from both ends.
 * @param {number[]} arr - The array of numbers.
 * @param {number} target - The target value to sum to.
 * @returns {number[]} An array containing two indices of the elements that sum to the target.
 *     If no such pair is found, an empty array is returned.
 */
function twoPointerSum(arr, target) {

    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let sum = arr[low] + arr[high];
        if (sum == target) {
            return [low, high];
        }

        if (sum < target) {
            low++;
        } else {
            high--;
        }
    }

    return [];

}


console.log(twoPointerSum([1, 2, 3, 4, 5, 6, 7, 100], 107)) // target value = 107

// return  []

