function main() {
    checkTriangle(5, 5, 7);
}

function checkTriangle(side1, side2, side3) {

    if (side1 + side2 > side3 &&
        side1 + side3 > side2 &&
        side2 + side3 > side1) {

        console.log("Valid Triangle");
    } else {
        console.log("Invalid Triangle");
    }
}

main();