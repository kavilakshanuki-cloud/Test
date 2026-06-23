function main() {
    higherScore(50, 50);
}

function higherScore(runner1, runner2) {
    if (runner1 > runner2) {
        console.log("Runner 1 wins");
    } else if (runner2 > runner1) {
        console.log("Runner 2 wins");
    } else {
        console.log("It's a tie");
    }
}

main();