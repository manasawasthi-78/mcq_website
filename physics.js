const quizDB = [
    {
        question: "Q1: Which one of the following is the best conductor of electricity?",
        a: "Silver",
        b: "Copper",
        c: "Gold",
        d: "Aluminium",
        ans: "ans1"
    },
    {
        question: "Q2: The escape velocity of an object from the earth is approximately:",
        a: "11.2 km/s",
        b: "8.4 km/s",
        c: "9.8 km/s",
        d: "10 km/s",
        ans: "ans1"
    },
    {
        question: "Q3: The unit of magnetic flux is:",
        a: "Weber",
        b: "Tesla",
        c: "Henry",
        d: "Ampere",
        ans: "ans1"
    },
    {
        question: "Q4: Which of the following phenomena is the result of the reflection of sound?",
        a: "Echo",
        b: "Reverberation",
        c: "Resonance",
        d: "Beats",
        ans: "ans1"
    },
    {
        question: "Q5:What is the unit of power?",
        a: "Watt",
        b: "Joule",
        c: "Newton",
        d: "Pascal",
        ans: "ans1"
    },
    {
        question: "Q6: Light travels fastest in:",
        a: "Vacuum",
        b: "Water",
        c: "Glass",
        d: "Air",
        ans: "ans1"
    },
    {
        question: "Q7: The focal length of a convex lens is:",
        a: "Positive",
        b: "Negative",
        c: "Zero",
        d: "Infinite",
        ans: "ans1"
    },
    {
        question: "Q8: When a ray of light passes through a prism, it:",
        a: "bends towards the base",
        b: "bends towards the apex",
        c: " does not bend",
        d: "bends in a random direction",
        ans: "ans1"
    },
    {
        question: "Q9: The gravitational force between two objects does not depend on:The gravitational force between two objects does not depend on:",
        a: "The distance between them",
        b: "Their masses",
        c: "Their charges",
        d: "The gravitational constant",
        ans: "ans3"
    },
    {
        question: "Q10: What type of image is formed by a plane mirror?",
        a: "Virtual and erect",
        b: "Real and inverted",
        c: "Virtual and inverted",
        d: "Real and erect",
        ans: "ans1++"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};

const deselectAll = () => {
    answers.forEach(currCheckedAns => currCheckedAns.checked = false);
};

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach(curAnsElem => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;  
    }

    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} ✌</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});
