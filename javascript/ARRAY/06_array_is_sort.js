


function isSorted(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;

}


// console.log(isSorted([1111,10,12,13,1,34,5])); false
// console.log(isSorted([1, 2, 3, 4, 5, 6, 7, 8, 9])); true
console.log(isSorted([1,2,3,4,3,4,4,4,4])); false