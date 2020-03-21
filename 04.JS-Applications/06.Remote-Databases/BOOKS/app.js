let loadButton = document.getElementById("loadBooks");
let submitButton = document.querySelector("form button");
let table = document.getElementsByTagName("tbody")[0];
const url = "https://softuni-fa501.firebaseio.com/books.json";

loadButton.addEventListener("click", (e) => {
    e.preventDefault();
    table.innerHTML = "";
    fetch(url)
        .then(res => {
            if (res.status < 400) {
                return res.json();
            } else {
                throw new Error("HTTP Error!");
            }
        })
        .then(data => {
            for (const id in data) {
                createTr(id, data[id]);
            }
        })
        .catch((err) => console.error(err));
});

//load books with page
loadButton.click();

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let isbn = document.getElementById("isbn");

    fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "author": author.value,
            "title": title.value,
            "isbn": isbn.value
        })
    })
        .then(() => {
            title.value = "";
            author.value = "";
            isbn.value = "";
            loadButton.click();
        })
        .catch(err => console.error(err));
});

function createTr(id, data) {
    let tr = document.createElement("tr");

    let title = document.createElement("td");
    title.textContent = data.title;
    title.addEventListener("click", () => fillEditForm(data));
    tr.appendChild(title);

    let author = document.createElement("td");
    author.textContent = data.author;
    tr.appendChild(author);

    let isbn = document.createElement("td");
    isbn.textContent = data.isbn;
    tr.appendChild(isbn);

    let buttons = document.createElement("td");

    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.setAttribute("data-id", id);
    edit.addEventListener("click", e => editBook(e));
    buttons.appendChild(edit);

    let remove = document.createElement("button");
    remove.textContent = "Delete";
    remove.setAttribute("data-id", id);
    remove.addEventListener("click", e => deleteBook(e));
    buttons.appendChild(remove);

    tr.appendChild(buttons);
    table.appendChild(tr);
}

function fillEditForm(data) {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let isbn = document.getElementById("isbn");

    title.value = data.title;
    author.value = data.author;
    isbn.value = data.isbn;
    submitButton.setAttribute("disabled", true);
    submitButton.style.background = "gray";
}

function editBook(e) {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let isbn = document.getElementById("isbn");
    const id = e.target.getAttribute("data-id");
    const url = `https://softuni-fa501.firebaseio.com/books/${id}.json`;

    fetch(url, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title.value,
            author: author.value,
            isbn: isbn.value
        })
    })
        .then(() => {
            title.value = "";
            author.value = "";
            isbn.value = "";
            submitButton.removeAttribute("disabled");
            submitButton.style.background = "#234465";
            loadButton.click();
        })
        .catch(err => console.error(err));
}

function deleteBook(e) {
    const id = e.target.getAttribute("data-id");
    const url = `https://softuni-fa501.firebaseio.com/books/${id}.json`;

    fetch(url, {
        method: "delete"
    }).then(() => loadButton.click()).catch(err => console.error(err));
}