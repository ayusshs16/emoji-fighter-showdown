let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];

let power = {
    "🐉": 95,
    "🦁": 100,
    "🦍": 88,
    "🐘": 85,
    "🐊": 83,
    "🐆": 80,
    "🤖": 79,
    "🦕": 78,
    "🐸": 70,
    "🦭": 68,
    "🐢": 65,
    "🕷": 60,
    "🐩": 55,
    "🐝": 50,
    "🐥": 40,
    "🦀": 35,
    "💩": 10
};

let stageEl = document.getElementById("stage");
let winnerEl = document.getElementById("winner");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
    let index1 = Math.floor(Math.random() * fighters.length);
    let index2;

    do {
        index2 = Math.floor(Math.random() * fighters.length);
    } while (index1 === index2);

    let fighter1 = fighters[index1];
    let fighter2 = fighters[index2];

    // Show the fighters on the stage
    stageEl.style.visibility = "visible";
    stageEl.innerHTML = `<span class="fighter">${fighter1}</span> vs <span class="fighter">${fighter2}</span>`;

    // Determine the winner based on power
    let winner = power[fighter1] > power[fighter2] ? fighter1 : fighter2;

    // Display winner
    winnerEl.style.display = "inline-block";
    winnerEl.innerHTML = `🏆 <span class="winner">Winner: ${winner}</span>`;
});
