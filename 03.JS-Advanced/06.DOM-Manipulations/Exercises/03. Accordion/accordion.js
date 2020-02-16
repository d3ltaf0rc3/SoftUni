function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let hiddenDiv = document.getElementById("extra");

    if (button.textContent === "More") {
        button.textContent = "Less";
        hiddenDiv.style.display = "block";
    } else {
        button.textContent = "More";
        hiddenDiv.style.display = "none";
    }
}