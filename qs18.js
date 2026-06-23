function main() {
    swap(10, 20);
}

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;

    console.log("a =", a);
    console.log("b =", b);
}

main();