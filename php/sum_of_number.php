
<?php

    function sum_of_number($number){

        if($number === 0 ){
            return 0;
        }
        return $number + sum_of_number($number - 1);
    }

    echo sum_of_number(5);
