function main() {
    highestScore(85, 92, 78, 90);
}

function highestScore(team1, team2, team3, team4) {

    if (team1 >= team2 && team1 >= team3 && team1 >= team4) {
        console.log("Team 1 has the highest score: " + team1);
    } else if (team2 >= team1 && team2 >= team3 && team2 >= team4) {
        console.log("Team 2 has the highest score: " + team2);
    } else if (team3 >= team1 && team3 >= team2 && team3 >= team4) {
        console.log("Team 3 has the highest score: " + team3);
    } else {
        console.log("Team 4 has the highest score: " + team4);
    }
}

main();