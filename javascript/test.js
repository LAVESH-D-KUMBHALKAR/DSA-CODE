

function main(){
    console.log("main function name");
    fun(3);
    return 0;
}

function fun(n){
    if(n == 0){
        return;
    }
    fun(n-1);
    console.log(n);
    fun(n-1);
}


main();