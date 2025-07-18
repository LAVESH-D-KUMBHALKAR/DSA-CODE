

function removeDuplicate(arr){

    if(arr.length === 0) return arr;

    let writeIndex = 1;

    for(let readIndex = 1; readIndex < arr.length; readIndex++){

        // console.log('readIndex:' + readIndex, 'writeIndex:' + writeIndex);
        if(arr[readIndex] !== arr[writeIndex - 1]){

            arr[writeIndex] = arr[readIndex];

            writeIndex++;

        }
    }

    console.log(arr);
     // Truncate array to remove extra elements
    arr.length = writeIndex;
    // console.log(arr.length, writeIndex);
    return arr;
    
}

console.log(removeDuplicate([1,2,2]));