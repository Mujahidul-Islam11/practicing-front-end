// Simple data for 3 questions (without using arrays extensively)
const quizData = [
    {
      question: "What does DOM stand for?",
      choice1: "Document Object Model",
      choice2: "Data Object Manager",
      choice3: "Document Orientation Model",
      choice4: "Dynamic Output Management",
      correct: 1
    },
    {
      question: "Which method is used to access an HTML element by its ID?",
      choice1: "getElementByClassName()",
      choice2: "querySelector()",
      choice3: "getElementById()",
      choice4: "getElementsByTagName()",
      correct: 3
    },
    {
      question: "How do you create a new HTML element using JavaScript?",
      choice1: "document.appendElement()",
      choice2: "document.createElement()",
      choice3: "document.newElement()",
      choice4: "document.addElement()",
      correct: 2
    }
  ];
  
  let currentQuestionIndex = 0;
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("next-btn");
  
  function loadQuestion() {
    // Get the current question object
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Display the question
    questionElement.textContent = currentQuestion.question;
    
    // Display the choices
    choicesElement.innerHTML = ""; // Clear previous choices
    for (let i = 1; i <= 4; i++) {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = currentQuestion["choice" + i]; // Get choice1, choice2, etc.
      
      // Attach an event listener to each button
      choiceButton.addEventListener("click", function() {
        checkAnswer(i, currentQuestion.correct);
      });
      
      // Add the button to the DOM
      choicesElement.appendChild(choiceButton);
    }
  }
  
  function checkAnswer(selectedChoice, correctChoice) {
    if (selectedChoice === correctChoice) {
      alert("Correct!");
    } else {
      alert("Wrong answer!");
    }
    
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      alert("Quiz finished!");
    }
  }
  
  // Load the first question
  loadQuestion();
  
  // Next button to go to the next question (alternative way)
  nextButton.addEventListener("click", function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      alert("Quiz finished!");
    }
  });
  