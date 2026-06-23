function main() {
    highestQuotation(1300, 2500, 1500);
}

function highestQuotation(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a);
    } else if (b >= a && b >= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

main();