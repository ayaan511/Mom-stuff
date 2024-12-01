// Body Map Interaction
document.getElementById('bodyImage').addEventListener('click', () => {
    const info = [
      'The brain is the control center of the body.',
      'The heart pumps blood to the entire body.',
      'The lungs are responsible for oxygen exchange.'
    ];
    const randomFact = info[Math.floor(Math.random() * info.length)];
    document.getElementById('bodyInfo').innerText = randomFact;
  });
  
  // Daily Medical Tip
  const tips = [
    'Drink plenty of water daily!',
    'Always wash your hands before meals.',
    'Sleep is essential for brain health.'
  ];
  document.getElementById('dailyTip').innerText = tips[Math.floor(Math.random() * tips.length)];
  
  // Load Quiz from JSON
  fetch('./assets/quiz.json')
    .then(response => response.json())
    .then(quizData => {
      const startQuizBtn = document.getElementById('startQuizBtn');
      const quizContainer = document.getElementById('quizContainer');
  
      startQuizBtn.addEventListener('click', () => {
        quizContainer.innerHTML = ''; // Clear previous quiz
        quizData.forEach((q, index) => {
          const questionDiv = document.createElement('div');
          questionDiv.innerHTML = `<strong>${index + 1}. ${q.question}</strong>`;
          q.options.forEach(option => {
            questionDiv.innerHTML += `<br><button onclick="checkAnswer('${option}', '${q.answer}')">${option}</button>`;
          });
          quizContainer.appendChild(questionDiv);
        });
        quizContainer.style.display = 'block';
      });
    })
    .catch(error => console.error('Error loading quiz data:', error));
  
  // Check Quiz Answer
  function checkAnswer(selected, correct) {
    alert(selected === correct ? 'Correct!' : 'Try again!');
  }
  