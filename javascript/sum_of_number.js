
function sum_of_number(n){

    if(n === 0){
        return 0;
    }
    return n + sum_of_number(n-1);
}


console.log(sum_of_number(10))