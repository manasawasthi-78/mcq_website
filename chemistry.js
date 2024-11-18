const quizDB = [
    {
        question: "Q1: Which of the following has the highest ionization energy?",
        a: "Sodium",
        b: "Potassium",
        c: "Calcium",
        d: "Magnesium",
        ans: "ans4"
    },
    {
        question: "Q2: Which element does not have d-electrons in its ground-state electronic configuration?",
        a: "Copper",
        b: "Zinc",
        c: "Iron",
        d: "Chromium",
        ans: "ans2"
    },
    {
        question: "Q3: Which of the following acids is present in vinegar",
        a: "Citric acid",
        b: "Acetic acid",
        c: "Tartaric acid",
        d: "Formic acid",
        ans: "ans2"
    },
    {
        question: "Q4: Which of the following is an example of a noble gas?",
        a: "Nitrogen",
        b: "Oxygen",
        c: "Helium",
        d: "Hydrogen",
        ans: "ans3"
    },
    {
        question: "Q5: Which of the following elements is most reactive?",
        a: "Sodium",
        b: "Magnesium",
        c: "Potassium",
        d: "Calcium",
        ans: "ans3"
    },
    {
        question: "Q6: What is the molecular formula of methane?",
        a: "CH",
        b: "CH₂",
        c: "CH₃",
        d: "CH₄",
        ans: "ans4"
    },
    {
        question: "Q7:In the periodic table, elements in the same group have:",
        a: "the same atomic number",
        b: " similar chemical properties",
        c: "the same number of neutrons",
        d: "consecutive atomic numbers",
        ans: "ans2"
    },
    {
        question: "Q8: Which of the following gases turns limewater milky",
        a: " Nitrogen",
        b: "Hydrogen",
        c: "Carbon dioxide",
        d: "Oxygen",
        ans: "ans3"
    },
    {
        question: "Q9: Which of the following is a property of metals",
        a: "They are generally poor conductors of electricity",
        b: "They have high melting and boiling points",
        c: "They are brittle",
        d: "They do not conduct heat",
        ans: "ans2"
    },
    {
        question: "Q10: Which type of bonding occurs in sodium chloride?",
        a: "Covalent",
        b: "Ionic",
        c: "Metallic",
        d: "Hydrogen",
        ans: "ans2"
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
