function main() {
    findLeapYear(2028);
}

function findLeapYear(num) {
    if (num % 4 === 0) {
        console.log("leapyear");

    } else {
        console.log("normalyear");


    }
}
main();