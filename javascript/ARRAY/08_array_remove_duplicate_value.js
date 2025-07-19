

function removeDuplicate(arr){

    if(arr.length === 0) return arr;

    let j = 1;

    for(let i = 1; i < arr.length; i++){

        // console.log('i:' + i, 'j:' + j);
        if(arr[i] !== arr[j - 1]){

            arr[j] = arr[i];

            j++;

        }
    }

    console.log(arr);
     // Truncate array to remove extra elements
    arr.length = j;
    // console.log(arr.length, j);
    return arr;
    
}

console.log(removeDuplicate([1,2,2]));