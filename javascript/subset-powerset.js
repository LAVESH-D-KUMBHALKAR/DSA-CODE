

/**
 * Generates all subsets of a given string and adds them to the result array.
 * 
 * @param {string} str - The input string to generate subsets from.
 * @param {number} index - The current index in the string being processed.
 * @param {string} current - The current subset being formed.
 * @param {Array} result - The array that stores all generated subsets.
 */

function getSubSet(str, index, current, result){

    if(index === str.length ){
        result.push(current);
        return;
    }

    getSubSet(str, index + 1, current, result);

    getSubSet(str, index + 1, current + str[index], result);

}

let result = [];
getSubSet("ABCc", 0 , "", result);

console.log(result);