


function findHCF(a, b){
    a = Math.abs(a);
    b = Math.abs(b);

    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;

}

function findLCM(a, b) {
    return (a * b) / findHCF(a, b);
}

console.log(findLCM(20,30));
