// Build a Quiz Game
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should create an array named questions.
// The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
// The category key should have the value of a string representing a question category.
// The question key should have the value of a string representing a question.
// The choices key should have the value of an array containing three strings, which are alternative answers to the question.
// The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
// You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
// You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
// You should have a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.



let questions = [
  {
    category: "JavaScript",
    question: "Which keyword is used to declare a variable?",
    choices: ["var", "let", "const"],
    answer: "let"
  },
  {
    category: "HTML",
    question: "Which tag is used to create a hyperlink?",
    choices: ["<a>", "<link>", "<href>"],
    answer: "<a>"
  },
  {
    category: "CSS",
    question: "Which property is used to change text color?",
    choices: ["color", "font-style", "background-color"],
    answer: "color"
  },
  {
    category: "General",
    question: "Which language runs in a web browser?",
    choices: ["JavaScript", "Python", "Java"],
    answer: "JavaScript"
  },
  {
    category: "Web",
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  }
];


function getRandomQuestion (questions) {
 let randomQuestion = Math.floor(Math.random() * questions.length)
 return questions[randomQuestion];
}

function getRandomComputerChoice (choices) {
  let randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice];
}


function getResults (question, computerChoice) {
  if (computerChoice === question.answer) {
    return `The computer's choice is correct!`
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}

let randomQuestion = getRandomQuestion(questions);
let computerChoice = getRandomComputerChoice(randomQuestion.choices);
let result = getResults(randomQuestion, computerChoice);

console.log(randomQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(result);



