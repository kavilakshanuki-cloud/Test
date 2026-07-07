function main() {
    checkTriangle(5, 4, 5);
}

function checkTriangle(side1, side2, side3) {

    if (side1 == side2 && side2 == side3) {
        console.log("Equilateral Triangle");
    } else if (side1 == side2 || side2 == side3 || side1 == side3) {
        console.log("Isosceles Triangle");
    } else {
        console.log("Scalene Triangle");
    }
}

main();