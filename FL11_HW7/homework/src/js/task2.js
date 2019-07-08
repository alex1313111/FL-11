let num, numPocket, ask, increase = 4, userPrize = 0, minDefNum = 0, maxDefNum = 8;
let firstAt = 100, secondAt = 50, thirdAt = 25;
let prize = [firstAt, secondAt, thirdAt];
let maxNum = maxDefNum, minNum = minDefNum;
do {
    ask = confirm(`Do you want to play a game?`);
    if (!ask) {
        alert(`You did not become a billionaire, but can.`);
    }
} while (!ask);
do {
    let attempts = 2, win = false, attemptsLeft = attempts + 1;
    num = Math.round(Math.random() * (maxNum - minNum) + minNum);
    while (win === false) {
        for (let i = 0; i <= attempts; i++) {
            let messageMinMax = `Choose the roulette pocket number from ${minNum} to ${maxNum}\n`;
            let messageAttempts = `Attempts left: ${attemptsLeft}\n`;
            let totalPrize = `Total prize: ${userPrize}\n`
            let posiblePrize = `Possible price on current attempt: ${prize[i]}`;
            let message = `${messageMinMax}${messageAttempts}${totalPrize}${posiblePrize}`;
            numPocket = +prompt(`Enter a number of pocket on which the ball could land. \n${message}`);
            console.log(numPocket);
            if (num === numPocket) {
                userPrize += prize[i];
                ask = confirm(`Congratulation, you won! Your prize is: ${userPrize} $.\nDo you want to continue?`);
                if (ask) {
                    win = true;
                    i = attempts;
                    maxNum += increase;
                    for (let j = 0; j < prize.length; j++) {
                        prize[j] *= 2;
                    }
                } else {
                    alert(`Thank you for your participation. Your prize is: ${userPrize} $`);
                }
            } else {
                alert(`Thank you for your participation. Your prize is: ${userPrize} $`);
                if (i === attempts) {
                    ask = confirm(`Do you want to play a game again?`);
                    win = true;
                    userPrize = 0;
                    maxNum = maxDefNum;
                    prize = [firstAt, secondAt, thirdAt];
                }
            } attemptsLeft--;
        }
    }
} while (ask);
