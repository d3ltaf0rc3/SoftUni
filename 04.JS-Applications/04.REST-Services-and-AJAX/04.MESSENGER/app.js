function attachEvents() {
    let sendButton = document.getElementById("submit");
    let refreshButton = document.getElementById("refresh");
    const url = "https://rest-messanger.firebaseio.com/messanger.json";

    sendButton.addEventListener("click", () => {
        let author = document.getElementById("author").value;
        let content = document.getElementById("content").value;

        fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                author,
                content
            })
        }).catch(() => console.log("Error!"));
    });

    refreshButton.addEventListener("click", () => {
        let textarea = document.getElementById("messages");
        textarea.innerHTML = "";
        
        fetch(url)
            .then(res => res.json())
            .then(res => {
                for (const data in res) {
                    textarea.value += `${res[data].author}: ${res[data].content}\n`;
                }
            })
            .catch(() => console.log("Error!"));
    });
}
attachEvents();