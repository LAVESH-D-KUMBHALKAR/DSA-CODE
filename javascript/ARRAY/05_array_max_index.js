

function maxIndexDiff(arr) {

    if (arr.length === 0) return -1;
    let index = 0;
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > max) {
            index = i;
            max = arr[i];
        }
    }

    return index;
}


let arr = [16,11, 12, 13, 14, 15];
console.log(maxIndexDiff(arr));
