function main() {
    CheckMainteceDay(50);

}

function CheckMainteceDay(num) {
    if (num % 3 && num % 5 === 0) {
        console.log('the number is divided by both 3 and 5');
    } else {
        console.log('the number is not divided by both 3 and 5 ');
    }
}
main();