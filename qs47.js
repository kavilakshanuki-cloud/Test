function main() {
    checkCenturyLeapYear(2021);
}

function checkCenturyLeapYear(year) {

    if (year % 4 == 0) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is Not a Leap Year");
    }
}

main();