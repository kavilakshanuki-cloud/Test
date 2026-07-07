function main() {
    findUpperCaseLowerCase("A");
}

function findUpperCaseLowerCase(letter) {

    if (letter >= "A" && letter <= "Z") {
        console.log("Letter is Uppercase");

    } else if (letter >= "a" && letter <= "z") {
        console.log("Letter is Lowercase");

    } else {
        console.log("Invalid");
    }

}

main();