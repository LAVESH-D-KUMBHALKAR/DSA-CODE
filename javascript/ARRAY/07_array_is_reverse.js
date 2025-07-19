

function reverseArray(arr) {

    let newArray = [];
    let j = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        newArray[j++] = arr[i];
        // console.log(newArray, i);
    }
    return newArray;

}

console.log(reverseArray(['H', 'S', 'E', 'V', 'A', 'L']));