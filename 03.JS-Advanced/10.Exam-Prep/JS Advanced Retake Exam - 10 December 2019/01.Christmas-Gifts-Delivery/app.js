function solution() {
    function sortList(list) {
        let switching = true;
        while (switching) {
            switching = false;
            let b = list.getElementsByTagName("li");
            let shouldSwitch;
            let i;
            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
    }
    
    let addBttn = document.getElementsByTagName("button")[0];
    let list = document.getElementsByTagName("ul")[0];

    addBttn.addEventListener("click", () => {
        let input = document.getElementsByTagName("input")[0];
        let li = document.createElement("li");
        
        let sendBttn = document.createElement("button");
        let discardBttn = document.createElement("button");
        
        sendBttn.setAttribute("id", "sendButton");
        discardBttn.setAttribute("id", "discardButton");
        sendBttn.textContent = "Send";
        discardBttn.textContent = "Discard";

        li.innerHTML = input.value;
        
        li.setAttribute("class", "gift");
        
        li.appendChild(sendBttn);
        li.appendChild(discardBttn);
        
        list.appendChild(li);
        
        sortList(list);
        input.value = "";
    });

    list.addEventListener("click", (e) => {
        let type = e.target.textContent;
        let currentLi = e.target.parentNode;
        
        if (type === "Send") {    
            let sendUl = document.getElementsByTagName("ul")[1];
            sendUl.appendChild(currentLi);
        } else if (type === "Discard") {
            let discardUl = document.getElementsByTagName("ul")[2];
            discardUl.appendChild(currentLi);
        }
        currentLi.children[0].remove();
        currentLi.children[0].remove();
    });
}