
// i/p = [11,2,3,4,5,6];
// VALUE = 2, POS = 1

function addValueAtPostion(pArray, pValue, pPosition){

    let j = 0;
    let newArray = [];
    
    
    for(let i = 0; i <= pArray.length; i++){
        if(i == pPosition){
            newArray[j++] = pValue;
        }
        
        if(i < pArray.length){
            newArray[j++] = pArray[i];
        }

    }

    return newArray;



}


let lArray = [111, 12, 144, 1233];
let lValue = 112;
let lPostition = 1;

console.log(addValueAtPostion(lArray, lValue, lPostition))





// function replaceAtPosition(arr, newValue, position) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === position) {
//             newArr[i] = newValue; // Replace at target position
//         } else {
//             newArr[i] = arr[i];   // Copy other values as-is
//         }
//     }

//     return newArr;
// }