function main() {
    checkVoteEligibility(10);
}

function checkVoteEligibility(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }
}

main();