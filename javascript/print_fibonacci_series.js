
function printFibonacciSeries(n){

    let a = 0;
    let b = 1;
    let next = 0;

    for (i = 0; i <= n ; i ++ ){
        console.log(a);
        next = a + b;
        b = a;
        a = next;
    }
    
}

printFibonacciSeries(20);