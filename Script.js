let person = prompt("hva heter du???");
         
 document.getElementById("ditnavn").innerHTML = 
 person;  


 function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('result').innerHTML = ` Du valgte ${userChoice}. Datamaskin valgte  ${computerChoice}. ${determineWinner(userChoice, computerChoice)}`;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "DET BLE uavgjort!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "DU VANT!";
    } else {
        return "DU TAPTE!";
    }
}
