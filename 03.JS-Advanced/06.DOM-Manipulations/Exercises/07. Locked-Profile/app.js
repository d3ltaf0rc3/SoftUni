function lockedProfile() {
    function showOrHideDetails(hiddenInfo,buttonValue) {
        if (buttonValue.textContent === "Show more") {
            hiddenInfo.style.display = "block";
            buttonValue.textContent = "Hide it";
        } else if (buttonValue.textContent === "Hide it") {
            hiddenInfo.style.display = "none";
            buttonValue.textContent = "Show more";
        }
    }
    
    let main = document.getElementById("main");

    main.addEventListener("click", (e) => {
        let buttons = document.getElementsByTagName("button");
        let inputs = document.querySelectorAll('input[type=radio]');

        if (e.target === buttons[0]) {
            if (inputs[1].checked === true) {
                let hiddenInfo = document.getElementById("user1HiddenFields");
                showOrHideDetails(hiddenInfo, buttons[0]);
            }
        } else if (e.target === buttons[1]) {
            if (inputs[3].checked === true) {
                let hiddenInfo = document.getElementById("user2HiddenFields");
                showOrHideDetails(hiddenInfo, buttons[1]);
            }
        } else if (e.target === buttons[2]) {
            if (inputs[5].checked === true) {
                let hiddenInfo = document.getElementById("user3HiddenFields");
                showOrHideDetails(hiddenInfo, buttons[2]);
            }
        }
    });
}