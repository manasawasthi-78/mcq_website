const quizDB = [
    {
        question: "Q1: Which of the following statements is correct in Python?",
        a: "list is mutable, tuple is immutable",
        b: "tuple is mutable, list is immutable",
        c: "Both list and tuple are mutable",
        d: "Both list and tuple are immutable",
        ans: "ans1"
    },
    {
        question: "Q2: What is the correct way to declare a dictionary in Python?",
        a: "{1, 2, 3}",
        b: "{}",
        c: "{1: 'one', 2: 'two'}",
        d: "['one': 1, 'two': 2]",
        ans: "ans3"
    },
    {
        question: "Q3: Which of the following statements is used to create an empty set in Python?",
        a: "set()",
        b: "{}",
        c: "[]",
        d: "()",
        ans: "ans1"
    },
    {
        question: "Q4: What is the output of the following code? (print(type(5)))",
        a: "<class 'float'>",
        b: "<class 'int'>",
        c: "<class 'str'>",
        d: "<class 'list'>",
        ans: "ans2"
    },
    {
        question: "Q5: Which of the following is used to define a function in Python?",
        a: "def",
        b: "func",
        c: "define",
        d: "function",
        ans: "ans1"
    },
    {
        question: "Q6: What is the output of the following code? (print(2 ** 3))",
        a: "6",
        b: "8",
        c: "9",
        d: "16",
        ans: "ans2"
    },
    {
        question: "Q7: Which of the following data types is mutable in Python?",
        a: "Tuple",
        b: "String",
        c: "List",
        d: "Integer",
        ans: "ans3"
    },
    {
        question: "Q8: Which of these is not a valid variable name in Python?",
        a: "_myvar",
        b: "my_var",
        c: "2var",
        d: "myVar",
        ans: "ans3"
    },
    {
        question: "Q9:  Which of the following statements is used to terminate a loop in Python?",
        a: "continue",
        b: "pass",
        c: "return",
        d: "break",
        ans: "ans4"
    },
    {
        question: "Q10: Which of the following is used to import a module in Python?",
        a: "include",
        b: "import",
        c: "using",
        d: "require",
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
