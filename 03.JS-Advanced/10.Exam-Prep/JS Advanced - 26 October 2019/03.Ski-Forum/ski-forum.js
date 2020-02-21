class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
        this.loggedUsers = [];
    }

    register(username, password, repeatPass, email) {
        if (username === "" || password === "" || repeatPass === "" || email === "") {
            throw new Error("Input can not be empty");
        }
        if (password !== repeatPass) {
            throw new Error("Passwords do not match");
        }

        let doesUserExist = this._users.some(user => user.username === username);
        let doesEmailExist = this._users.some(user => user.email === email);
        if (doesUserExist || doesEmailExist) {
            throw new Error("This user already exists!");
        }

        this._users.push({ username, password, email });
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        let doesUserExist = this._users.some(user => user.username === username);
        if (!doesUserExist) {
            throw new Error("There is no such user");
        }

        let doCredsMatch = this._users.find(user => user.username === username && user.password === password);
        if (doCredsMatch) {
            this.loggedUsers.push(username);
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password) {
        let doesUserExist = this._users.some(user => user.username === username);
        if (!doesUserExist) {
            throw new Error("There is no such user");
        }

        let doCredsMatch = this._users.find(user => user.username === username && user.password === password);
        if (doCredsMatch) {
            let index = this.loggedUsers.indexOf(username);
            this.loggedUsers.splice(index, 1);
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question) {
        let doesUserExist = this._users.some(user => user.username === username);
        if (!doesUserExist || !this.loggedUsers.includes(username)) {
            throw new Error("You should be logged in to post questions");
        }

        if (question === "") {
            throw new Error("Invalid question");
        }

        this._questions.push({ username, id: this._id, question, answers: [] });
        this._id++;
        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answer) {
        let doesUserExist = this._users.some(user => user.username === username);
        if (!doesUserExist || !this.loggedUsers.includes(username)) {
            throw new Error("You should be logged in to post answers");
        }
        if (answer === "") {
            throw new Error("Invalid answer");
        }
        let doesIdExist = this._questions.find(question => question.id === questionId);
        if (!doesIdExist) {
            throw new Error("There is no such question");
        }
        doesIdExist.answers.push({ username, answer });
        return "Your answer has been posted successfully";
    }


    showQuestions() {
        let output = "";
        for (const question of this._questions) {
            output += `Question ${question.id} by ${question.username}: ${question.question}\n`;

            if (question.answers !== undefined) {
                for (const answer of question.answers) {
                    output += `---${answer.username}: ${answer.answer}\n`;
                }
            }
        }
        return output.trim();
    }
}

let instance = new Forum();
instance.register("Pesho", "123", "123", "pesho@abv.bg");
instance.login("Pesho", "123");
instance.postQuestion("Pesho", "Question");
instance.postQuestion("Pesho", "Question2");
instance.postQuestion("Pesho", "Question3");
instance.postAnswer("Pesho", 3, "Third Answer");
instance.postAnswer("Pesho", 3, "Fourth Answer");
instance.postAnswer("Pesho", 2, "Answer");
instance.postAnswer("Pesho", 1, "Valid");
instance.postAnswer("Pesho", 1, "First Answer");
console.log(instance.showQuestions());