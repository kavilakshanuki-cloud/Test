function main() {
    convertTime(100);
}

function convertTime(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;

    console.log(hours + " hour(s) " + mins + " minute(s)");
}

main();