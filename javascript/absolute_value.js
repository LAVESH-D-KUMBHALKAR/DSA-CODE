

function get_absolute_value(n) {
    let lGetAbsoluteValue = n < 0 ? -n : n;
    console.log("Absolute value of [" + n + "] : " + lGetAbsoluteValue);
}

get_absolute_value(-1234); // Absolute value of [-1234] : 1234
get_absolute_value(1234); // Absolute value of [1234] : 1234
