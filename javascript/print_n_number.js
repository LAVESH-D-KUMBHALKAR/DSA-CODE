

function print_n_number(n){
    if(n === 0){
        return;
    }

    print_n_number(n-1);
    console.log(n);
}

print_n_number(1000);