function main() {
    checkTemp(-9);

}

function checkTemp(temp) {
    if (temp > 0) {
        console.log('Possitive');
    } else if (temp < 0) {
        console.log('Negative');
    } else {
        console.log('Zero');
    }


}
main();