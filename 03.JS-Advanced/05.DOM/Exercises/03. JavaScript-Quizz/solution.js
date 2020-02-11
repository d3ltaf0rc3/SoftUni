function solve() {
    let quizzie = document.querySelector("#quizzie");
    let section = document.querySelectorAll("section");
    let resultMessage = document.querySelector(".results-inner h1");
    let ul = document.querySelector("#results");
    let answers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
    let correctAnswers = 0;
    let currentQuestion = 0;

    let handler = (e) => {
        if (e.target.className === "answer-text") {
            if (answers.includes(e.target.innerHTML)) {
                correctAnswers++;
            }

            section[currentQuestion].style.display = "none";
            currentQuestion++;

            if (currentQuestion <= 2) {
                section[currentQuestion].style.display = "block";
            } else {
                quizzie.removeEventListener("click", handler);
                ul.style.display = "block";
                if (correctAnswers === 3) {
                    resultMessage.textContent = "You are recognized as top JavaScript fan!";
                } else {
                    resultMessage.textContent = `You have ${correctAnswers} right answers`;
                }
            }
        }
    };
    quizzie.addEventListener("click", handler);
}