function main() {
    checkBalance(300);
}

function checkBalance(balance) {
    if (balance >= 0) {
        console.log("Positive balance");
    } else {
        console.log("Negative balance");
    }
}

main();