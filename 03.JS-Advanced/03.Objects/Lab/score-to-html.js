function scoreToHTML(input) {
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
    console.log("<table>");
    console.log("<tr><th>name</th><th>score</th></tr>");
    input = JSON.parse(input);
    input.forEach(element => {
       let name = escapeHtml(element.name);
       let score = element.score;
       console.log(`<tr><td>${name}</td><td>${score}</td></tr>`);
    });
    console.log("</table>");
}

scoreToHTML(['[{"name":"Pesho & Kiro","score": 479},{"name": "Gosho, Maria & Viki","score": 205}]']);