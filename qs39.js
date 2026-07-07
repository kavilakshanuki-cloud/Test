function main() {
    Checkeligible(61);
}

function Checkeligible(age) {
    if (age >= 60) {
        console.log("Eligible for senior citizen discount");
    } else {
        console.log("Not Eligible for senior citizen discount");
    }

}
main();