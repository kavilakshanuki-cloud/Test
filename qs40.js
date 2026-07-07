function main() {
    FindCategory(40)

}

function FindCategory(age) {
    if (age <= 18) {
        console.log("child");
    } else if (age >= 18) {
        console.log("teeneger");
    } else {
        console.log("adult")
    }

}
main();