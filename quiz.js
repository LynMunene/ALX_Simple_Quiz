function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (!selectedRadio) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }
    
    const userAnswer = selectedRadio.value;
    const feedbackElement = document.getElementById('feedback');
    
    // Compare the answers and provide feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);