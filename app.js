
const choices = document.querySelectorAll(".choice");
const choiceBox = document.querySelector(".choices");
let userScore = document.querySelector("#us0");
let compScore = document.querySelector("#co0");
let msg = document.querySelector("#msg");
let newGame = document.querySelector(".new-game");
let toss = document.querySelector(".toss");
let heads = document.querySelector(".heads")
let tails = document.querySelector(".tails");
let bat = document.querySelector(".bat");
let bowl = document.querySelector(".bowl");
let tossChoice = document.querySelector(".toss-choice");
let batOrBowl = document.querySelector(".borb");
let msgContainer = document.querySelector(".msg-container");
let outMsg = document.querySelector(".h4hide");
       
let uCount = 0;
let cCount = 0;

let updateUCount = false;
let updateCCount = false;

let bats = () => {
    updateUCount = true;
    updateCCount = false;
};

let bowls = () => {
    updateUCount = false;
    updateCCount = true;
};

let genCompChoice = () => {
    const randIdx = Math.floor(Math.random()*7) ;
    if(randIdx === 0) {
        return 1;
    }
    return randIdx;
};
toss.addEventListener("click", () => {
    toss.classList.add("hide-toss");
    tossChoice.classList.remove("hide-tchoice");
    msg.innerText = "Select your choice from Below";
});

heads.addEventListener("click", () => {
    tossChoice.classList.add("hide-tchoice");
    batOrBowl.classList.remove("hide-borb");
    msg.innerText = "You Won the Toss! Select What you want to do";
    msg.style.backgroundColor = "green";
    updateUCount = false;
    updateCCount = false;
});
tails.addEventListener("click", () => {
    tossChoice.classList.add("hide-tchoice");
    batOrBowl.classList.remove("hide-borb");
    msg.innerText = "You Won the Toss! Select What you want to do";
    msg.style.backgroundColor = "green";
    updateUCount = false;
    updateCCount = false;
});

let batting = 0;

bat.addEventListener("click", () => {
    batOrBowl.classList.add("hide-borb");
    newGame.classList.remove("hide-ng");
    msg.innerText = "Ready to Play! Select a Number";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
    choiceBox.classList.remove("disable-choices");
    batting = 1;
    bats();
});
bowl.addEventListener("click", () => {
    batOrBowl.classList.add("hide-borb");
    newGame.classList.remove("hide-ng");
    msg.innerText = "Ready to Play! Select a Number";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
    choiceBox.classList.remove("disable-choices");
    batting = 2;
    bowls();
});
newGame.addEventListener("click", () => {
    newGame.classList.add("hide-ng");
    toss.classList.remove("hide-toss");
    msg.innerText = "Again Start from Toss";
    msg.style.color = "white";
    msg.style.backgroundColor = "black";
    updateUCount = false;
    updateCCount = false;
    uCount = 0;
    cCount = 0;
    userChoice = 0;
    compChoice = 0;
    userScore.innerText = 0;
    compScore.innerText = 0;
});

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        if(batting == 1) {
            playGame(userChoice);
        } else if(batting == 2) {
            playGame2(userChoice);
        };

        if(updateUCount || updateCCount) {
        msg.innerText= `You Select ${userChoice} and Computer Select ${compChoice}`;
        msg.style.backgroundColor = "white";
        msg.style.color = "black";
        }
    })
});

let toggleScoreUpdate = () => {
    if(updateUCount) {
        updateUCount = false;
        updateCCount = true;
    } else {
        updateUCount = true;
        updateCCount = false;
}};


let out = () => {
    toggleScoreUpdate();
    outMsg.classList.remove("h4hide");
};

let winner = () => {
    checkCount = 0;
    if (uCount > cCount) {
        msg.innerText = "Congratulations! You Win!";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        msg.innerText = `Sorry, You Lose!`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
    updateUCount = false;
    updateCCount = false;
};

let checkCount = 0;
let check = ()  => {
    if (checkCount === 1) {
        out();
}

    if (checkCount === 2) {
        winner();
        choiceBox.classList.add("disable-choices");
    };
};

let compChoice;
let playGame = (userChoice) => {
    compChoice = genCompChoice();
    if (userChoice == compChoice || cCount > uCount) {
        checkCount++;
        check();
    } else {
        if (userChoice !== compChoice) {
            if (updateUCount) {
                uCount += Number(userChoice);
                userScore.innerText = uCount;
            }
            if (updateCCount) {
                cCount += compChoice;
                compScore.innerText = cCount;
            };
        }
        outMsg.classList.add("h4hide");
    };
};

let out2 = () => {
    toggleScoreUpdate();
    outMsg.classList.remove("h4hide");
};

let winner2 = () => {
    checkCount2 = 0;
    if (cCount > uCount) {
        msg.innerText = `Sorry, You Lose!`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    } else {
        msg.innerText = "Congratulations! You Win!";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }
    updateUCount = false;
    updateCCount = false;
};


let check2 = ()  => {
    if (checkCount2 === 1) {
        out2();
}

    if (checkCount2 === 2) {
        winner2();
        choiceBox.classList.add("disable-choices");
    };
};

let checkCount2 = 0;
let playGame2 = (userChoice) => {
    compChoice = genCompChoice();
    if (compChoice == userChoice || uCount > cCount) {
        checkCount2++;
        check2();
    } else {
        if (compChoice !== userChoice) {
            if (updateUCount) {
                uCount += Number(userChoice);
                userScore.innerText = uCount;
            }
            if (updateCCount) {
                cCount += compChoice;
                compScore.innerText = cCount;
            };
        }
        outMsg.classList.add("h4hide");
    };
};

