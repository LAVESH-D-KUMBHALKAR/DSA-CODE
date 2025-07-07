
<?php
function print_n_number($n){
    if($n === 0){
        return;
    }

    print_n_number($n-1);
    echo $n. "\n";
}

print_n_number(5);