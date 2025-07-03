

function celsius_to_fahrenheit(c) {
    
    let fahrenheit = (c * 9/5) + 32;
    return `Celsius to Faranheit [${c}] : ${fahrenheit}`;
}

console.log(celsius_to_fahrenheit(0)); // Celsius to Faranheit [0] : 32
console.log(celsius_to_fahrenheit(10));  // Celsius to Faranheit [10] : 50