let num1, num2, operator, correctAnswer;
let score = 0;
const operators = ['+', '-', '*']

generateQuestion();

function generateQuestion() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    operator = operators[Math.floor(Math.random() * operators.length)];

    if (operator === '+') {
        correctAnswer = num1 + num2;
    } 
    else if (operator === '-') {
        correctAnswer = num1 - num2;
    } 
    else {
        correctAnswer = num1 * num2;
    }

    document.getElementById('question').textContent = num1 + ' ' + operator + ' ' + num2;
}

function checkAnswer() {
    let input = document.getElementById('answer');
    let answer = Number(input.value);
    let message = document.getElementById('message');

    if (answer === correctAnswer) {
        score++;
        document.getElementById('score').innerHTML = score;
        message.innerHTML = 'Correct!';
        message.style.color = 'green';
    }
    else {
        message.innerHTML = 'Wrong! The correct answer was ' + correctAnswer;
        message.style.color = 'red';
    }

    generateQuestion();
    input.value = "";

    if (score >= 5) {
        document.getElementById('div-questions').style.display = 'none';
        document.getElementById('div-success').style.display = 'block';
    }
}

function playAgain() {
    score = 0;
    document.getElementById('score').innerHTML = score;
    document.getElementById('div-success').style.display = 'none';
    document.getElementById('div-questions').style.display = 'block';
    generateQuestion();
}
