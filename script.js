let num;
let score = 0;
let ans = document.querySelector("#result");
let elem1 = document.querySelector("#para");
let elem2 = document.querySelector("#heading");
let elem3 = document.querySelector("#index");
let displayScore =document.querySelector(".score");
let resultAnsDis = document.querySelector("#result-ans-dis");
let wrongAns = document.querySelector("#worng-ans");

function generater() {
    num = Math.floor(Math.random() * 26) + 1; 
    document.querySelector("#index").innerText = num;
}

setInterval(generater, 4000);

document.querySelector("#click").addEventListener('click', () => {
    checkAnswer();
});

document.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});
 
function checkAnswer() {
    let userInput = document.querySelector("#Answer");
    userInput.value = userInput.value.toUpperCase(); 
    let Alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    if (userInput.value === Alpha[num - 1]) { 
        userInput.value = ""; 
        score++; 
        displayScore.innerText = score;
        resultAnsDis.innerText =`You Guess Worng Alphabet \n \n SCORE :- ${score}  `
        wrongAns.style.display ="none";
    } 
    else {
        console.log("Wrong!");
        ans.style.display = "block"; 
        elem1.classList.add("hide");
        elem2.classList.add("hide");
        elem3.classList.add("hide");

        setTimeout(function() {
            location.reload();
        }, 5000);
    }
}
