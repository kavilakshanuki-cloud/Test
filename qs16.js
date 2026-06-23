function main() {
    fahrenheitToCelsius(50);
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(celsius);
}

main();