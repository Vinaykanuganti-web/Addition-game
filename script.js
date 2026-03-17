let first = document.getElementById("firstNumber");
let second = document.getElementById("secondNumber");
let user_input = document.getElementById("userInput");
let result = document.getElementById("gameResult");
let check_btn = document.getElementById("checkButton");
let reset_btn = document.getElementById("restartButton");

let num1, num2;
function generateNumber() {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);

    first.textContent = num1;
    second.textContent = num2;

    user_input.value = "";
    result.textContent = "";
}

check_btn.onclick =function(){
    let useranswer=parseInt(user_input.value);
    
    if (useranswer===num1+num2){
        result.textContent="Congratulations!You got it right.";
        result.style.backgroundColor="#028a0f";
        result.style.color="#ffffff";
    }else{
        result.textContent="please Try Again!";
        result.style.backgroundColor="#1e217c";
        result.style.color="#ffffff";
    }
};
reset_btn.onclick=function(){
    generateNumber();
};
generateNumber();