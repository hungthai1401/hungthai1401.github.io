// Minimal, dependency-free quiz widget.
// Markup contract per question block:
// <div class="quiz" data-correct="0">
//   <p class="quiz-question">...</p>
//   <ul class="quiz-options">
//     <li><button class="quiz-option">option text</button></li>
//     ...
//   </ul>
//   <p class="quiz-feedback"></p>
// </div>
// data-correct is the zero-based index of the correct option.
// Call initQuizzes() once on DOMContentLoaded.

function initQuizzes(rootSelector = ".quiz") {
  const quizzes = document.querySelectorAll(rootSelector);
  let correctCount = 0;
  let answeredCount = 0;

  const scoreEl = document.querySelector(".quiz-score");

  quizzes.forEach((quiz) => {
    const correctIndex = parseInt(quiz.dataset.correct, 10);
    const buttons = quiz.querySelectorAll(".quiz-option");
    const feedback = quiz.querySelector(".quiz-feedback");

    buttons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        if (quiz.dataset.answered === "true") return;
        quiz.dataset.answered = "true";
        answeredCount += 1;

        buttons.forEach((b) => (b.disabled = true));

        if (idx === correctIndex) {
          btn.classList.add("correct");
          feedback.textContent = "Đúng.";
          correctCount += 1;
        } else {
          btn.classList.add("incorrect");
          buttons[correctIndex].classList.add("correct");
          feedback.textContent = "Chưa đúng — đáp án đúng được tô xanh.";
        }

        if (scoreEl) {
          scoreEl.textContent = `Điểm: ${correctCount} / ${quizzes.length} (đã trả lời ${answeredCount})`;
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => initQuizzes());
