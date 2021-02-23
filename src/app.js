
let currQuestion = 0;
let score = 0;
const totalQuestions = document.querySelector("#totalQuestions");
const questionWrapper = document.querySelector(".questionBox");
let img = document.querySelector(".story");
let scoreBoard = document.querySelector("#score");

const questions = [
  {
    question: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
    answers:
    {
      a: "In a lightning storm",
      b: "In a funeral pyre",
      c: "In a fire place",
      d: "In a frozen cave"
    },
    correctAnswer: "b",
    image: "./assets/img/question0.jpg"
  },
  {
    question: "Which U.S. city was one of 8 international locations visited by the 2015 'Game of Thrones' Exhibition??",
    answers:
    {
      a: "Chicago",
      b: "New York City",
      c: "San Diego",
      d: "Boston"
    },
    correctAnswer: "c",
    image: "./assets/img/question1.jpg"
  },
  {
    question: "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:",
    answers:
    {
      a: "Valar Dohaeris or 'all men must serve'",
      b: "Valar Rohnas or 'all men must live'",
      c: "Valar GoGo or 'all men must dance'"

    },
    correctAnswer: "a",
    image: "./assets/img/question2.jpg"
  },
  {
    question: "American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:",
    answers:
    {
      a: "Lord of the Rings",
      b: "Highlander",
      c: "The Chronicles of Narnia",
      d: "The Legend of Zelda"
    },
    correctAnswer: "c",
    image: "./assets/img/question3.jpg"
  },
  {
    question: "What is the only thing that can put out volatile Wildfire?",
    answers:
    {
      a: "Sand",
      b: "Water",
      c: "Dragon's blood",
      d: "Sunlight"
    },
    correctAnswer: "a",
    image: "./assets/img/question4.jpg"
  },
  {
    question: "Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
    answers:
    {
      a: "Weirwood",
      b: "Wildfire",
      c: "Valyrian Steel",
      d: "Snowballs"
    },
    correctAnswer: "c",
    image: "./assets/img/question5.jpg"
  },
  {
    question: "How many times has Beric Dondarrion been brought back to life?",
    answers:
    {
      a: "Three times",
      b: "Five times",
      c: "Six times",
      d: "Seven times"
    },
    correctAnswer: "c",
    image: "./assets/img/question6.jpg"
  },
  {
    question: "Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
    answers:
    {
      a: "Ghost",
      b: "Lady",
      c: "Nymeria",
      d: "Summer"
    },
    correctAnswer: "b",
    image: "./assets/img/question7.jpg"
  },
  {
    question: "Arya's punishment for stealing from the Many-Face God is:",
    answers:
    {
      a: "Death",
      b: "Memory Loss",
      c: "Blindness",
      d: "Uncontrollable laughter"
    },
    correctAnswer: "c",
    image: "./assets/img/question8.jpg"
  },
  {
    question: "'It's nothing' were the last words of this infamous character:",
    answers:
    {
      a: "Renly Baratheon",
      b: "Tywin Lannister",
      c: "Robb Stark",
      d: "King Joffrey"
    },
    correctAnswer: "d",
    image: "./assets/img/question9.jpg"
  },
  {
    question: "The name of King Tommen's favorite cat is:",
    answers:
    {
      a: "Battle Pus",
      b: "Little Lion",
      c: "Ser Pounce",
      d: "Prince Fuzzy"
    },
    correctAnswer: "c",
    image: "./assets/img/question10.jpg"
  },
  {
    question: "What was the name of Ned Stark's greatsword?",
    answers:
    {
      a: "Ice",
      b: "Oathkeeper",
      c: "Widow's Wail",
      d: "Northguard"
    },
    correctAnswer: "a",
    image: "./assets/img/question11.jpg"
  },
  {
    question: "Who shoots the flaming arrow that subsequently destroy's Stannis' fleet in Blackwater Bay?",
    answers:
    {
      a: "Tyrion Lannister",
      b: "King Joffrey",
      c: "Jamie Lannister",
      d: "Bronn"
    },
    correctAnswer: "d",
    image: "./assets/img/question12.jpg"
  },
  {
    question: "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
    answers:
    {
      a: "Pride in drawing blood first",
      b: "Knowledge of poisons",
      c: "Nighttime attacks",
      d: "Ruby-colored armor"
    },
    correctAnswer: "b",
    image: "./assets/img/question13.jpg"
  },
  {
    question: "The Night King was created using a dagger made of:",
    answers:
    {
      a: "Valyrian Steel",
      b: "Blue Ice",
      c: "Dragonglass",
      d: "Weirwood"
    },
    correctAnswer: "c",
    image: "./assets/img/question14.jpg"
  }

];


totalQuestions.innerText = questions.length;

//functia de start atasata butonului care creaza elementele noi 
const displayQuestion = () => {
   
  questionWrapper.innerHTML = "";
  checkOutcome();
  img.setAttribute("src", questions[currQuestion].image);
  const question = document.createElement("div");
  const para = document.createElement("p");
  para.classList.add("question");
  para.innerText = questions[currQuestion].question;
  question.appendChild(para);
  const list = document.createElement("ol");

  for (let key in questions[currQuestion].answers) {
    let li = document.createElement("li");
    li.id = `${key}`;
    li.innerText = questions[currQuestion].answers[key];
    list.appendChild(li);
  }

  list.addEventListener("click", (e) => {
    if(e.target.id){
    checkCorrect(e);
    list.classList.add("disabled");
    }
  })
  question.appendChild(list)
  questionWrapper.appendChild(question);

  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Next Question";
  nextBtn.classList.add("nextBtn");
  nextBtn.onclick = displayQuestion;
  questionWrapper.appendChild(nextBtn);

  
};

checkOutcome = () =>{
 if( currQuestion === questions.length){
   if ( score < 10){
    img.setAttribute("src","./assets/img/nWatch.jpg")
     questionWrapper.innerHTML = `<h1 class="question">Prepare to join the night's watch!

     You scored ${score} out of ${questions.length}</h1>`
   } else if (score > 10){
     img.setAttribute("src","./assets/img/tRoom.jpg")
    questionWrapper.innerHTML = `<h1 class="question">The seven kingdoms bow before you!

    You scored ${score} out of ${questions.length}</h1>`
   }
 }
}

//functia de verificare a raspunsului
const checkCorrect = (ev) => {
  if (ev.target.id === questions[currQuestion].correctAnswer) {
    score++;
    ev.target.classList.add("correct");
    

  }
  else if (ev.target.id !== questions[currQuestion].correctAnswer) {
    ev.target.classList.add("incorrect");

  }
  currQuestion++;
  scoreBoard.innerText = score;
  
};



