function jsonToHTML(input) {
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
    input = JSON.parse(input);
    console.log("<table>");
    let keys = Object.keys(input[0]);
    let th = "<tr>";
    for (const iterator of keys) {
        th += `<th>${iterator}</th>`;
    }
    th += "</tr>";
    console.log(th);

    input.forEach(element => {
        let td = "<tr>";
        for (const key in element) {
            let data;
            if (typeof element[key] === "string") {
                data = escapeHtml(element[key]);
            } else {
                data = element[key];
            }

            td += `<td>${data}</td>`;
        }
        td += "</tr>";
        console.log(td);
    });
    console.log("</table>");
}

jsonToHTML(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);