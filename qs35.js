function main() {
    checkMembership(101);
}

function checkMembership(num) {
    if (num >= 1 && num <= 100) {
        console.log("Valid Membership Number");

    } else {
        console.log("Invalid Menbership Number");
    }


}
main();