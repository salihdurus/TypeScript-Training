let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];

sportsTwo.push("Baseball");
sportsTwo.push("Futbol");
sportsTwo = [...sportsTwo, "Basketball"];

for (let tempSport of sportsTwo) {
    console.log(tempSport);
}