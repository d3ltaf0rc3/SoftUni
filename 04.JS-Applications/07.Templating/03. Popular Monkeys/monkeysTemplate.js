(async () => {
    let template = Handlebars.compile(await fetch("./template.hbs").then(res => res.text()));
    let html = template({ monkeys });
    document.getElementsByTagName("section")[0].innerHTML = html;
    let buttons = document.getElementsByTagName("button");
    Array.from(buttons).forEach(btn => {
        btn.addEventListener("click", () => {
            let info = btn.parentNode.lastElementChild;
            info.style.display = "block";
        });
    });
})();