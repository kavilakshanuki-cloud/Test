function main() {
    Checkletters("t");
}

function Checkletters(i) {
    if (i == 'a' || i == 'e' || i == 'i' || i === 'o' || i == 'u') {
        console.log('vowel');
    } else {
        console.log('consonet');
    }

}
main();