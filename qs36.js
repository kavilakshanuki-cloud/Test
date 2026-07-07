function main() {
    checkThreeDigit(999.02);
}

function checkThreeDigit(num) {

    if (num >= 100 && num <= 999) {
        console.log("It is a three-digit number");
    } else {
        console.log("It is not a three-digit number");
    }

}

main();