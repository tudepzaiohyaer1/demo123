function checkAnswer(questionNumber, correctAnswer) {
    const currentQuestion = document.getElementById(`question${questionNumber}`);
    const buttons = currentQuestion.querySelectorAll('button');

    buttons.forEach(button => {
        button.onclick = () => {
            if (button.textContent.trim().startsWith(correctAnswer)) {
                currentQuestion.classList.add('slide-out');
                setTimeout(() => {
                    currentQuestion.style.display = 'none';
                    if (questionNumber < 3) {
                        const nextQuestion = document.getElementById(`question${questionNumber + 1}`);
                        nextQuestion.style.display = 'block';
                        nextQuestion.classList.add('slide-in');
                    } else {
                        const message = document.getElementById('message');
                        message.style.display = 'block';
                        message.classList.add('slide-in');
                    }
                }, 500); // Thời gian trễ cho hiệu ứng trượt
            } else {
                alert("Đáp án không chính xác. Vui lòng thử lại!");
            }
        };
    });
}

document.addEventListener('DOMContentLoaded', function() {
    checkAnswer(1, 'C');  // Đáp án đúng cho câu 1
    checkAnswer(2, 'B');  // Đáp án đúng cho câu 2
    checkAnswer(3, 'A');  // Đáp án đúng cho câu 3
});
