const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "Who was the game designer who created Nintendo’s Mario character?",
    answers: {
      A: "Gunpei Yokoi",
      B: "Trip Hawkins",
      C: "Shigeru Miyamoto",
      D: "Tom Kalinske"
    },
    correctAnswer: "C"
  },
  {
    question: "What 8-bit computer holds the title of World’s Best Selling Computer of All Time?",
    answers: {
      A: "The Apple II",
      B: "The Commodore 64",
      C: "The IBM 5150",
      D: "The Sinclair ZX Spectrum"
    },
    correctAnswer: "B"
  },
    {
    question: "What does the “TRS” stand for on the TRS-80 home computer?",
    answers: {
      A: "Tandy Radio Shack",
      B: "Thomas Robertson Systems",
      C: "The Robotic Specialists",
      D: "Trash"
    },
    correctAnswer: "A"
  },
      {
    question: "What was the name given to the Nintendo Entertainment System in its native Japan?",
    answers: {
      A: "The Nintendo Mk 1",
      B: "The Comboy",
      C: "The Family Computer",
      D: "The Nintendo Master System"
    },
    correctAnswer: "C"
  },
      {
    question: "Samus is the name of the main character in what video game?",
    answers: {
      A: "Contra",
      B: "Metroid",
      C: "Paperboy",
      D: "Duck Hunt"
    },
    correctAnswer: "B"
  },
      {
    question: "What video game was so bad that hundreds of new copies were buried in a garbage dump?",
    answers: {
      A: "Pac-Man",
      B: "Pitfall!",
      C: "Spiderman",
      D: "E.T. the Extra Terrestrial"
    },
    correctAnswer: "D"
  },
      {
    question: "The creator of the renowned puzzle game Tetris was born in which country?",
    answers: {
      A: "The United States of America",
      B: "Japan",
      C: "The United Kingdom",
      D: "Russia"
    },
    correctAnswer: "D"
  },
      {
    question: "Which CPU did the Sega Master System have at its core?",
    answers: {
      A: "The Zilog Z80",
      B: "The MOS 6502",
      C: "The Ricoh 2A03",
      D: "The Intel 8088"
    },
    correctAnswer: "A"
  }
];



function buildQuiz(){
  const output= [];
  myQuestions.forEach(
    (currentQuestion, questionNumber)=>{
    const answers=[];
  
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
    
for(letter in currentQuestion.answers){
  answers.push(
  `<label>
  <input type="radio" name="question${questionNumber}" value="${letter}">
  ${letter}:
  ${currentQuestion.answers[letter]}
  </label>`)
}
     
    output.push(
    `<div class="slide">
    <div class="question"> ${currentQuestion.question}</div>
    <div class="answers"> ${answers.join('')}</div>
    </div>`
    );
    
  }
);
  quizContainer.innerHTML= output.join('');
}

function showResults(){
  
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}
  
  const answerContainers= quizContainer.querySelectorAll('.answers');
  
  let numberCorrect= 0;
  
  myQuestions.forEach((currentQuestion, questionNumber)=>{
    const answerContainer= answerContainers[questionNumber];
    const selector= `input[name=question${questionNumber}]:checked`;
    const userAnswer=(answerContainer.querySelector(selector) ||{} ).value;
    if(userAnswer=== currentQuestion.correctAnswer)
    {
      numberCorrect++;
   answerContainers[questionNumber].style.color= 'lightgreen';
    }
    
                    
});
  resultsContainer.innerHTML = `${numberCorrect} out of ${myQuestions.length}`;
  
  if(numberCorrect===8){
    alert("Congratulations! You are an 8-bit Wizard!")
  }
  else if(numberCorrect<8){
    alert("Looks like you missed some questions! Check your answers and try again!")
  }
  
}


buildQuiz(
);

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

showSlide(currentSlide);

submitButton.addEventListener('click', showResults);

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);