function attachEvents() {
    let loadButton = document.getElementById("btnLoad");
    let createButton = document.getElementById("btnCreate");
    let ul = document.getElementById("phonebook");
    let url = "https://phonebook-nakov.firebaseio.com/phonebook.json";

    loadButton.addEventListener("click", () => {
        ul.innerHTML = "";

        fetch(url)
            .then(res => res.json())
            .then(res => {
                for (const data in res) {
                    let li = document.createElement("li");
                    let deleteButton = document.createElement("button");

                    deleteButton.textContent = "Delete";
                    li.setAttribute("id", data);
                    li.textContent = `${res[data].person}:${res[data].phone} `;

                    li.appendChild(deleteButton);
                    ul.appendChild(li);
                }
            });
    });

    createButton.addEventListener("click", () => {
        let person = document.getElementById("person");
        let phone = document.getElementById("phone");

        fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                person: person.value,
                phone: phone.value
            })
        }).then(() => loadButton.click());

        person.value = "";
        phone.value = "";
    });

    ul.addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target.textContent === "Delete") {
            let key = e.target.parentNode.getAttribute("id");

            fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`, {
                method: "delete"
            }).then(() => loadButton.click());
        }
    });
}

attachEvents();